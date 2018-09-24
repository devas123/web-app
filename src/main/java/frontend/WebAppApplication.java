package frontend;

import frontend.model.security.Authority;
import frontend.model.security.AuthorityName;
import frontend.model.security.User;
import frontend.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.charset.Charset;
import java.time.Instant;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@Configuration
@ComponentScan(basePackages = {"frontend.config", "frontend.repository", "frontend.controllers"})
public class WebAppApplication implements WebMvcConfigurer {
	public static void main(String[] args) {

		ConfigurableApplicationContext ctx = SpringApplication.run(WebAppApplication.class, args);

		PasswordEncoder passwordEncoder = ctx.getBean(PasswordEncoder.class);

		UserRepository repository = ctx.getBean(UserRepository.class);
		User admin = new User();
		Authority adminAuth = new Authority();
		adminAuth.setName(AuthorityName.ROLE_ADMIN);
		admin.setAuthorities(Collections.singletonList(adminAuth));
		admin.setEmail("pobjj.service@gmail.com");
		admin.setEnabled(true);
		admin.setFirstname("Botsuha");
		admin.setLastname("Semenov");
		admin.setUsername("admin");
		admin.setLastPasswordResetDate(Date.from(Instant.parse("2016-12-03T10:15:30.00Z")));
		admin.setPassword(passwordEncoder.encode("bortsuhinakontora1234321"));
		repository.save(admin);
	}

	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		FormHttpMessageConverter converter = new FormHttpMessageConverter();
		MediaType mediaType = new MediaType("application","x-www-form-urlencoded", Charset.forName("UTF-8"));
		converter.setSupportedMediaTypes(Collections.singletonList(mediaType));
		converters.add(converter);
	}
}
