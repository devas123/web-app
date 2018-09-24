package frontend.controllers;

import compman.compsrv.model.es.events.EventHolder;
import compman.compsrv.model.es.events.EventType;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private static final Logger log = LoggerFactory.getLogger(EventService.class);

    @Autowired
    public EventService(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @RequestMapping(value = "/events/accept", method = RequestMethod.POST)
    public void acceptEvent(@RequestBody @NotNull EventHolder event) {
        sendEvent(event);
    }

    private void sendEvent(EventHolder event) {
        log.info("Received event: dispatching: {}", event);
        if (EventType.ERROR_EVENT.equals(event.getType())) {
            simpMessagingTemplate.convertAndSend("/state/errors", event);
        } else {
            simpMessagingTemplate.convertAndSend("/state/events", event);
        }
    }
}
