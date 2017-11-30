package com.epitome.peatioj.controller.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class PeatiojUi {
    @RequestMapping({"/hello.htm"})
    public ModelAndView hello(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mav = new ModelAndView();

        mav.setViewName("hello");
        mav.addObject("title", "InputDefine");
        return mav;
    }
}
