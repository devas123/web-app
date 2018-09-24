package frontend.controllers;

import com.compmanager.model.payment.InitResponse;
import com.compmanager.model.payment.PaymentDetails;
import com.compmanager.model.payment.RegistrationStatus;
import com.compmanager.model.payment.UpdateStatusMessage;
import com.compmanager.service.PaymentServiceProvider;
import com.compmanager.service.ServiceException;
import com.google.common.io.BaseEncoding;
import compman.accsrv.model.ws.RegistrationServiceProvider;
import compman.compsrv.model.competition.Academy;
import compman.compsrv.model.competition.AgeDivision;
import compman.compsrv.model.competition.Competitor;
import compman.compsrv.model.competition.Weight;
import compman.compsrv.ws.CategoryServiceProvider;
import compman.compsrv.ws.CompetitionSettingsServiceProvider;
import compman.compsrv.ws.CompetitorServiceProvider;
import frontend.model.ExceptionWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.QueryParam;
import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Controller
@RequestMapping(value = "/register")
public class RegistrationController {

    @Value("{service.mail.user}")
    String serviceMail;

    @Value("{service.mail.password}")
    String serviceMailPwd;

    @Value("${payment.amount.rur}")
    private String defaultAmount;
    @Value("${payment.success.url}")
    private String successUrl;
    @Value("${payment.fail.url}")
    private String failUrl;

    private static final Logger log = LoggerFactory.getLogger(RegistrationController.class);

    private final RegistrationServiceProvider service;
    private final CompetitionSettingsServiceProvider settingsServiceProvider;
    private final PaymentServiceProvider paymentService;
    private final CategoryServiceProvider categoryService;
    private final CompetitorServiceProvider competitorService;

    @Autowired
    public RegistrationController(RegistrationServiceProvider service, CompetitionSettingsServiceProvider settingsServiceProvider, PaymentServiceProvider paymentService, CategoryServiceProvider categoryService, CompetitorServiceProvider competitorService) {
        this.service = service;
        this.settingsServiceProvider = settingsServiceProvider;
        this.paymentService = paymentService;
        this.categoryService = categoryService;
        this.competitorService = competitorService;
    }

    @RequestMapping(value = "/competitor", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, String> registerCompetitor(@RequestBody Competitor competitor, @QueryParam("competitionId") String competitionId) throws ServiceException {
        validateCompetitor(competitor);
        BigDecimal calculatedAmount = getAmount(competitor.getPromo(), competitionId);
        Map<String, String> result = new HashMap<>();
        if (calculatedAmount.longValue() < 10) {
            String corrId = service.addCompetitor(competitor, competitionId);
            competitorService.updatePaymentStatus(new UpdateStatusMessage(corrId + "_" + competitionId, RegistrationStatus.SUCCESS_CONFIRMED.getStatus(), competitionId));
            result.put("status", "success");
            return result;
        } else {
            String competitorId = service.addCompetitor(competitor, competitionId);
            try {
                String urlPostfix = "?competitorId=" + BaseEncoding.base64().encode(competitorId.getBytes("UTF-8")) + "&competitionId="  + BaseEncoding.base64().encode(competitionId.getBytes("UTF-8"));
                InitResponse paymentServiceResponse = paymentService.initPayment(new PaymentDetails(
                        competitorId + "_" + competitionId,
                        calculatedAmount,
                        successUrl + urlPostfix,
                        failUrl + urlPostfix,
                        new Date(), null));
                result.put("status", paymentServiceResponse.getResult());
                if ("ext_auth_required".equalsIgnoreCase(paymentServiceResponse.getResult())) {
                    String acsUri = paymentServiceResponse.getAcsUri();
                    Map<String, String> parameters = paymentServiceResponse.getAcsParams();
                    if (acsUri != null) {
                        StringBuilder sb = new StringBuilder(acsUri);
                        if (parameters != null) {
                            sb.append("?");
                            parameters.forEach((k, v) -> sb.append(k).append("=").append(v).append("&"));
                        }
                        result.put("url", BaseEncoding.base64Url().encode(sb.toString().substring(0, sb.toString().length() - 1).getBytes("UTF-8")));
                    } else {
                        throw new ServiceException("Payment system requested a redirect but didn't provide an url");
                    }
                }
                return result;
            } catch (Exception e) {
                log.error("Error while processing payment.", e);
                throw new ServiceException(e.getMessage());
            }
        }
    }

    @RequestMapping(value = "/amount", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public BigDecimal getAmount(@QueryParam("promo") String promo, @QueryParam("competitionId") String competitionId) {
        BigDecimal amount = settingsServiceProvider.getAmount(competitionId);
        if (amount == null) {
            amount = new BigDecimal(this.defaultAmount);
        }
        if (promo == null || promo.isEmpty()) {
            return amount;
        } else {
            BigDecimal coefficient = settingsServiceProvider.getCoefficient(promo, competitionId);
            if (coefficient != null) {
                return coefficient.multiply(amount).round(new MathContext(2, RoundingMode.HALF_EVEN));
            } else {
                return amount;
            }
        }
    }

    @RequestMapping(value = "/weights", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Weight> getWeights(@QueryParam("ageDivision") String ageDivision, @QueryParam("gender") String gender, @QueryParam("competitionId") String competitionId) throws ServiceException {
        if (ageDivision == null || gender == null) {
            throw new ServiceException("Gender or ageDivision cannot be empty");
        }
        List<Weight> result = service.getWeights(gender, ageDivision, competitionId);
        result.sort((o1, o2) -> Weight.Companion.compareWeightNames(o1.getId(), o2.getId()));
        return result;
    }


    @RequestMapping(value = "/ageDivisions", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<AgeDivision> ageDivisions(@QueryParam("birthDate") String birthDate, @QueryParam("gender") String gender, @QueryParam("competitionId") String competitionId) {
        LocalDate date;
        if (birthDate == null || birthDate.isEmpty()) {
            date = LocalDate.now();
        } else {
            date = LocalDate.from(DateTimeFormatter.ISO_LOCAL_DATE.parse(birthDate));
        }
        LocalDate now = LocalDate.now();
        int age = now.getYear() - date.getYear();
        return categoryService
                .getAgeDivisions(gender, competitionId).stream()
                .filter(a -> a.getMinimalAge() <= age && age <= a.getMaximalAge())
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/getBeltsForGender", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<AgeDivision, List<String>> getBeltsForGender(@QueryParam("gender") String gender, @QueryParam("competitionId") String competitionId) {
        //  for future table of gender/belt categories
        return categoryService.getBeltsForGender(gender, competitionId);
    }


    @RequestMapping(value = "/validateEmail", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Boolean validateEmail(@QueryParam("email") String email, @QueryParam("competitionId") String competitionId) {
        return service.validate(email, competitionId);
    }


    @RequestMapping(value = "/getAcademies", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Academy> getAcademies() {
        return service.getAcademies();
    }

    @RequestMapping(value = "/addAcademy", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public String addAcademy(@RequestBody Academy academy) throws ServiceException {
        validateAcademy(academy);
        return service.addAcademy(academy);
    }


    @RequestMapping(value = "/checkAcademyExist", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public boolean checkAcademyExist(@RequestBody Academy academy) {
        return academy != null && service.checkAcademyExist(academy.getId());
    }


    @RequestMapping(value = "/validatePromo", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public boolean validatePromo(@QueryParam("promo") String promo, @QueryParam("competitionId") String competitionId) {
        return promo == null || promo.isEmpty() || settingsServiceProvider.getCoefficient(promo, competitionId) != null;
    }


    private void validateAcademy(Academy academy) throws ServiceException {
        if (academy != null) {
            if (academy.getName().isEmpty()) {
                throw new ServiceException("Academy name cannot be empty");
            }
            if (academy.getId().isEmpty()) {
                throw new ServiceException("Academy id cannot be empty");
            }
        } else {
            throw new ServiceException("Accademy cannot be null");
        }
    }


    private void validateCompetitor(Competitor competitor) throws ServiceException {
        if (competitor.getFirstName().isEmpty() || competitor.getLastName().isEmpty()) {
            throw new ServiceException("Name information invalid");
        }
        if (competitor.getEmail().isEmpty()) {
            throw new ServiceException("Email is empty");
        }
        if (competitor.getCategory().getCategoryId().isEmpty()) {
            throw new ServiceException("Category empty");
        }
    }


    @ExceptionHandler(Exception.class)
    @ResponseBody
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionWrapper handleCustomized4Exception(Exception ex) {
        log.error("Server response with error:" + ex.getMessage(), ex);
        return new ExceptionWrapper(ex.getMessage(), ex.toString());
    }


}
