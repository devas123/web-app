package frontend.config;

import com.compmanager.service.PaymentServiceProvider;
import com.compmanager.service.RestExceptionProvider;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import compman.accsrv.model.ws.RegistrationServiceProvider;
import compman.compsrv.ws.*;
import org.apache.cxf.feature.Feature;
import org.apache.cxf.feature.LoggingFeature;
import org.apache.cxf.jaxrs.client.JAXRSClientFactory;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;


@Configuration
public class NetworkConfiguration {

    @Value("${backend.url}")
    private String backendUrl = "http://localhost:8090/";

    @Value("${payment.service.url}")
    private String paymentUrl = "http://localhost:8091/";

    @Value("${competition.service.url}")
    private String competitionServiceUrl = "http://localhost:8087/";


    @NotNull
    private List<Object> getProviders(ObjectMapper objectMapper) {
        List<Object> providers = new ArrayList<>();
        providers.add(new JacksonJsonProvider(objectMapper));
        providers.add(new RestExceptionProvider());
        return providers;
    }

    @NotNull
    private List<Feature> getFeatures() {
        List<Feature> features = new ArrayList<>();
        features.add(new LoggingFeature());
        return features;
    }

    @NotNull
    private <T> T getClientProxy(ObjectMapper objectMapper, String url, Class<T> tClass) {
        return JAXRSClientFactory.create(url, tClass, getProviders(objectMapper), getFeatures(), null);
    }


    @Bean
    public ObjectMapper objectMapperFactoryBean() {
        Jackson2ObjectMapperFactoryBean bean = new Jackson2ObjectMapperFactoryBean();
        bean.afterPropertiesSet();
        TimeZone tz = TimeZone.getTimeZone("UTC");
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        df.setTimeZone(tz);
        bean.getObject().setDateFormat(df);
        return bean.getObject();
    }

    @Bean
    public PaymentServiceProvider paymentService(ObjectMapper objectMapper) {
        List<Feature> features = getFeatures();
        List<Object> providers = getProviders(objectMapper);
        return JAXRSClientFactory.create(paymentUrl, PaymentServiceProvider.class, providers, features, null);
    }


    @Bean
    public CompetitionSettingsServiceProvider competitionSettingsService(ObjectMapper objectMapper) {
        return getClientProxy(objectMapper, backendUrl, CompetitionSettingsServiceProvider.class);
    }

    @Bean
    public RegistrationServiceProvider registrationService(ObjectMapper objectMapper) {
        return getClientProxy(objectMapper, backendUrl, RegistrationServiceProvider.class);
    }


    @Bean
    public CategoryServiceProvider categoryService(ObjectMapper objectMapper) {
        return getClientProxy(objectMapper, backendUrl, CategoryServiceProvider.class);
    }


    @Bean
    public FightServiceProvider fightServiceProvider(ObjectMapper objectMapper){
        return getClientProxy(objectMapper, competitionServiceUrl, FightServiceProvider.class);
    }


    @Bean
    public CompetitorServiceProvider competitorService(ObjectMapper objectMapper) {
        return getClientProxy(objectMapper, backendUrl, CompetitorServiceProvider.class);
    }

    @Bean
    public ScheduleServiceProvider scheduleServiceProvider(ObjectMapper objectMapper) {
        return getClientProxy(objectMapper, competitionServiceUrl, ScheduleServiceProvider.class);
    }
}
