package li.jc.api.security;

import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;

class Audience implements OAuth2TokenValidator<Jwt> {
    private final String aud;

    Audience(String aud) {
        this.aud = aud;
    }

    @Override
    public OAuth2TokenValidatorResult validate(Jwt token) {
        System.out.println("HERE 3");
        if (token.getAudience().contains(this.aud)) {
            return OAuth2TokenValidatorResult.success();
        }
        return OAuth2TokenValidatorResult.failure(
                new OAuth2Error("invalid_token", "The required audience field is missing!", null)
        );
    }
}
