package br.com.grupotsm.EmployeeControl.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Autowired
    private Environment env;
    @Autowired
    private JwtTokenStore tokenStore;

    //TODO alterar caminhos
    private static final String[] PUBLIC = {"/oauth/token", "/h2-console/**"};
    private static final String[] ALL_USERS = {"/employees/**"};

    private static final String[] CLIENT_OR_ADMIN = {"/events/**"};
    private static final String[] ONLY_ADMIN = {"/users/**"};

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.tokenStore(tokenStore);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {

        if(Arrays.asList(env.getActiveProfiles()).contains("test"))
            http.headers().frameOptions().disable();

        http.authorizeRequests()
                .antMatchers(PUBLIC).permitAll()
                /*
                .antMatchers(HttpMethod.GET, ALL_USERS).permitAll()
                .antMatchers(ALL_USERS).hasAnyRole("OPERATOR","ADMIN")
                .antMatchers(ALL_USERS).hasAnyRole("ADMIN")
                .antMatchers(CLIENT_OR_ADMIN).hasAnyRole("CLIENT")
                .antMatchers(ONLY_ADMIN).hasAnyRole("ADMIN")*/
                .anyRequest().permitAll();
    }
}
