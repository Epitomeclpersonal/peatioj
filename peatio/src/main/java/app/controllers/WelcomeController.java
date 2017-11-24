package app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WelcomeController extends ApplicationController {

    @RequestMapping("")
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("app/views/layouts/landing");

        mav.addObject("body_id", "welcome-index");
        mav.addObject("locale_name", "ko");

        mav.addObject("browser_modern", true);
        mav.addObject("image_path", "/app/assets/images/");
        mav.addObject("current_user", false);
        mav.addObject("signin_path", "/signin");
        mav.addObject("signup_path", "/signup");
        mav.addObject("Peatio_VERSION", "0.2.1");

        String[] available_locales = {"en", "zh-CN", "ko"};
        mav.addObject("available_locales", available_locales);

        String csrf_meta_tags =
                "  <meta name=\"csrf-param\" content=\"authenticity_token\"/>\n" +
                        "  <meta name=\"csrf-token\" content=\"p76WwraegOlyxMj8g1dtnu0RMPbGgZZRwPZ6zgNbbR0=\"/>\n";
        mav.addObject("csrf_meta_tags", csrf_meta_tags);

        mav.addObject("yield", "/app/views/welcome/index.ftl");

        return mav;
    }
}
