package com.epitome.peatioj.config;

import com.google.common.base.Predicate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.base.Predicates.or;
import static springfox.documentation.builders.PathSelectors.regex;

/**
 * https://github.com/swagger-api/swagger-core/wiki/Annotations-1.5.X
 */
@Configuration
@ComponentScan(basePackages = {
        "com.epitome.peatioj.api"
})
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket petApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("api")
                .apiInfo(apiInfo())
                .select()
                .paths(apiPath())
                .build();
    }

    private Predicate<String> apiPath() {
        return or(
                regex("/api.*")
        );
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("PAPRIKA API")
                .description("PAPRIKA 에서 제공하는 API를 확인하고 테스트 해볼 수 있습니다.")
//                .termsOfServiceUrl("127.0.0.1:8000")
                .contact(new Contact("SDWK", "", "jdlee726@gmail.com"))
//                .license("Apache License Version 2.0")
//                .licenseUrl("127.0.0.1:8000/LICENSE")
                .version("1.0.0")
                .build();
    }
}