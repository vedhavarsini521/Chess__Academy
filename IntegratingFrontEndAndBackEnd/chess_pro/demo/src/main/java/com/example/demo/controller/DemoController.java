package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class DemoController {

    @GetMapping("/")
    public String dem() {
        return "This is Demo2 Project";
    }
    
}
