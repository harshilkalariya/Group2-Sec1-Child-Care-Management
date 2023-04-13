package com.capstone.jrdaycare.security;

import com.capstone.jrdaycare.security.jwt.AuthEntryPointJwt;
import com.capstone.jrdaycare.security.jwt.AuthTokenFilter;
import com.capstone.jrdaycare.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        // securedEnabled = true,
        // jsr250Enabled = true,
        prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers("/v2/api-docs",
                        "/swagger-resources/**",
                        "/swagger-ui.html",
                        "/webjars/**").permitAll()
                .antMatchers("/doc/**").permitAll()
                .antMatchers("/api/auth/_w/signin").permitAll()
                .antMatchers("/api/auth/_m/signin").permitAll()
                .antMatchers("/api/auth/reset*").permitAll()
                .antMatchers("/api/auth/otp/verify").permitAll()
                .antMatchers("/api/auth/reset/password").permitAll()
                .antMatchers("/api/auth/signup").permitAll()
                .antMatchers("/api/auth/current").authenticated()
                .antMatchers("/api/auth/add/user").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN", "ROLE_INSTRUCTOR", "ROLE_DEALER")
                .antMatchers("/api/test/**").permitAll()
                .antMatchers("/api/location/**").permitAll()
                .antMatchers("/api/user/add/device_id/**").permitAll()
                .antMatchers("/api/user/**").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN", "ROLE_INSTRUCTOR", "ROLE_DEALER")
                .antMatchers("/api/product/setting/color/hex/all**").authenticated()
                .antMatchers("/api/product/setting/icon/shape**").authenticated()
                .antMatchers("/api/product/setting/all/product**").authenticated()
                .antMatchers("/api/product/setting/all**").authenticated()
                .antMatchers("/api/order/dispatch").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN")
                .antMatchers("/api/order/change/status").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN")
                .antMatchers("/api/order/pending").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN")
                .antMatchers("/api/product/setting/**").hasAnyAuthority("ROLE_JRADMIN")
                .antMatchers("/api/enquiry**").authenticated()
                .antMatchers("/api/order/**").authenticated()
                .antMatchers("/api/stock/**").authenticated()
                .antMatchers("/api/rma/**").authenticated()
                .antMatchers("/api/feedback/**").authenticated()
                .antMatchers("/api/announcement/change/**").hasAnyAuthority("ROLE_JRADMIN", "ROLE_ADMIN")
                .antMatchers("/api/announcement/download/**").authenticated()
                .antMatchers("/api/notification/**").authenticated()
                .anyRequest().authenticated();

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
