package li.jc.api.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${auth0.audience}")
    private String aud;
    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private String jwtIssuerURI;

    @Override
    public void configure(HttpSecurity auth) throws Exception {
        // Validate JWT token -- https://datatracker.ietf.org/doc/html/rfc7519#section-7.2
        // hasAuthority("SCOPE_create:posts")
        auth.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and().authorizeRequests()
                    .anyRequest().permitAll()
                    .and().cors()
                    .and().oauth2ResourceServer().jwt();

    }

    @Bean
    JwtDecoder jwtDecoder() {
        NimbusJwtDecoder decoder = JwtDecoders.fromOidcIssuerLocation(jwtIssuerURI);

        DelegatingOAuth2TokenValidator<Jwt> oAuth2TokenValidator = new DelegatingOAuth2TokenValidator<>(
                new Audience(this.aud),
                JwtValidators.createDefaultWithIssuer(jwtIssuerURI)
        );
        decoder.setJwtValidator(oAuth2TokenValidator);

        return decoder;

    }
}
