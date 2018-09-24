package frontend.controllers;



import com.compmanager.service.ServiceException;
import compman.compsrv.model.competition.*;
import compman.compsrv.ws.CategoryServiceProvider;
import compman.compsrv.ws.CompetitionSettingsServiceProvider;
import compman.compsrv.ws.CompetitorServiceProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.QueryParam;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
public class IndexController {

    private final CategoryServiceProvider categoryService;

    private final CompetitionSettingsServiceProvider settingsServiceProvider;
    private final Logger log = LoggerFactory.getLogger(IndexController.class);
    private final CompetitorServiceProvider competitorService;

    @Autowired
    public IndexController(CategoryServiceProvider categoryService, CompetitionSettingsServiceProvider competitionSettingsServiceProvider, CompetitorServiceProvider competitorService) {
        this.categoryService = categoryService;
        this.settingsServiceProvider = competitionSettingsServiceProvider;
        this.competitorService = competitorService;
    }

    @RequestMapping({"/", "/home", "/brackets", "/callback", "/participants", "/categories", "/about", "/admin", "/login", "/schedule"})
    public String index(HttpServletRequest request) {
        return "forward:index.html";
    }


    @RequestMapping(value = "/brackets/{[id:[^\\.]+}")
    public String redirectWithParams() {
        return "forward:/brackets";
    }


    @RequestMapping(value = "/admin/dashboard/{[id:[^\\.]+}")
    public String matsScheduleRedirect() {
        return "forward:/admin/dashboard";
    }

    @RequestMapping(value = "/admin/{[id:[^\\.]+}")
    public String adminRedirect() {
        return "forward:/admin";
    }

    @RequestMapping("/getWeightsForDivisions")
    @ResponseBody
    public Map<String, List<Weight>> getWeightsForDivisions(@QueryParam("gender") String gender, @QueryParam("competitionId") String competitionId) {
        return categoryService.getWeightsForDivisions(gender, competitionId);
    }

    @RequestMapping("/getCompetitionsInfo")
    @ResponseBody
    public List<CompetitionProperties> getCompetitionsInfo() {
        return settingsServiceProvider.getCompetitions();
    }

    @RequestMapping("/getCompetitionSettings")
    @ResponseBody
    public CompetitionProperties getCompetitionSettings(@RequestParam("competitionId") String competitionId) {
        return settingsServiceProvider.getCompetitionSettings(competitionId);
    }



    @RequestMapping("/getConfirmedCompetitors")
    @ResponseBody
    public List<Competitor> getConfirmedCompetitors(@QueryParam("competitionId") String competitionId) {
        if (competitionId == null) {
            return new ArrayList<>();
        }
        List<Competitor> result = competitorService.getConfirmedCompetitors(competitionId);
        return result;
    }

    @RequestMapping("/getCompetitor")
    @ResponseBody
    public Competitor getCompetitor(@QueryParam("competitionId") String competitionId, @QueryParam("id") String id) {
        List<Competitor> results = competitorService.get(competitionId, id);
        if (!results.isEmpty()) {
            return results.get(0);
        }
        return null;
    }

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    @ResponseBody
    public Gh greeting(String message) throws Exception {
        Thread.sleep(3000); // simulated delay
        return new Gh("bla");
    }

    class Gh{
        String h;

        Gh(String h) {
            this.h = h;
        }

        public String getH() {
            return h;
        }

        public void setH(String h) {
            this.h = h;
        }
    }



    @RequestMapping(value = "/belts", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<String> belts(@QueryParam("ageDivision") String ageDivision, @QueryParam("gender") String gender, @QueryParam("competitionId") String competitionId) throws ServiceException {
        if (ageDivision == null || ageDivision.isEmpty() || gender == null || gender.isEmpty()) {
            throw new ServiceException("Age division and gender cannot be empty");
        }
        return categoryService.getCategories(ageDivision, gender, competitionId).stream().map(Category::getBeltType).distinct().collect(Collectors.toList());
    }
}
