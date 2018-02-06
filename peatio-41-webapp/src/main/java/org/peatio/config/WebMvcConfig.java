package org.peatio.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@ComponentScan(basePackages = {
        "org.peatio.controller",
        "app.controllers"
})
public class WebMvcConfig extends WebMvcConfigurerAdapter {

}
