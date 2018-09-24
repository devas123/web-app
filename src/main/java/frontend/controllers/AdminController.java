package frontend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import compman.compsrv.model.competition.FightDescription;
import compman.compsrv.model.schedule.Schedule;
import compman.compsrv.ws.CategoryServiceProvider;
import compman.compsrv.ws.FightServiceProvider;
import compman.compsrv.ws.ScheduleServiceProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.QueryParam;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.OK;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

    private static final Logger log = LoggerFactory.getLogger(AdminController.class);
    private FightServiceProvider fightServiceProvider;
    private ScheduleServiceProvider scheduleServiceProvider;
    private CategoryServiceProvider categoryServiceProvider;
    private ObjectMapper mapper = new ObjectMapper()
            .registerModule(new JavaTimeModule());


    private <T> T getPayloadAs(Object payload, Class<T> clazz) {
        if (payload != null) {
            return mapper.convertValue(payload, clazz);
        }
        return null;
    }



    @Autowired
    public AdminController(FightServiceProvider fightServiceProvider, ScheduleServiceProvider scheduleServiceProvider, CategoryServiceProvider categoryServiceProvider) {
        this.fightServiceProvider = fightServiceProvider;
        this.scheduleServiceProvider = scheduleServiceProvider;
        this.categoryServiceProvider = categoryServiceProvider;
    }

    @RequestMapping(value = "/getFights", method = RequestMethod.GET)
    @ResponseBody
    public List<FightDescription> getFights(@QueryParam("competitionId") String competitionId) {
        return fightServiceProvider.getAllFights(competitionId);
    }




    @RequestMapping(value = "/generateFights", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ADMIN')")
    @ResponseBody
    public List<FightDescription> generateFights(@QueryParam("competitionId") String competitionId) {
        return fightServiceProvider.generateFights(competitionId);
    }



    @RequestMapping("/getBrackets")
    @ResponseBody
    public List<FightDescription> getBrackets(@QueryParam("competitionId") String competitionId) {
        return fightServiceProvider.getAllFights(competitionId);
    }

    @RequestMapping(value = "/saveSchedule", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ADMIN')")
    @ResponseStatus(OK)
    public void saveSchedule(@RequestBody Schedule schedule) {
        scheduleServiceProvider.saveSchedule(schedule);
    }


    @RequestMapping(value = "/getSchedule", produces = "application/json")
    @ResponseBody
    public Schedule getSchedule(@QueryParam("competitionId") String competitionId) {
        return scheduleServiceProvider.getSchedule(competitionId);
    }

    @RequestMapping("/getFightDurations")
    @ResponseBody
    public Map<String, BigDecimal> getFightDurations(@QueryParam("competitionId") String competitionId) {
        Map<String, BigDecimal> result = new HashMap<>();
        categoryServiceProvider.getCategories(null, null, competitionId).forEach(cat -> {
            result.put(cat.getCategoryId(), cat.getFightDuration());
            result.put(cat.getCategoryId().substring(0, cat.getCategoryId().lastIndexOf("/")) + "/ABSOLUTE", cat.getFightDuration());
        });
        return result;
    }
}
