package frontend.controllers;

import com.compmanager.service.PaymentServiceProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Map;

@Controller
@RequestMapping(value = "/payment")
public class PaymentController {

    private final PaymentServiceProvider paymentService;

    private static final Logger log = LoggerFactory.getLogger(PaymentController.class);

    @Autowired
    public PaymentController(PaymentServiceProvider paymentService) {
        this.paymentService = paymentService;
    }

    @RequestMapping(value = "/yandex-callback", method = RequestMethod.POST, consumes = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void sendYandexCallback(@RequestBody Map<String, String> callback) throws Exception {
        log.info("Received callback from yandex and forwarding it to the payment system: {}", callback);
        paymentService.sendYandexCallback(callback);
    }
}
