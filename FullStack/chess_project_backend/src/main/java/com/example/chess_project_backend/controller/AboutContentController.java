package com.example.chess_project_backend.controller;


import java.util.Optional;

// AboutContentController.java
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.chess_project_backend.model.AboutContent;
import com.example.chess_project_backend.service.AboutContentService;



@RestController
@RequestMapping("/api/about-content")
public class AboutContentController {

    @Autowired
    private AboutContentService aboutContentService;

    @GetMapping("/get/{id}")
    public Optional<AboutContent> getAboutContent(@PathVariable Long id) {
        return aboutContentService.getById(id);
    }

    @PostMapping
    public String addAboutContent(@RequestBody AboutContent aboutContent) {
        return aboutContentService.addAboutContent(aboutContent);
    }

    @PutMapping("/update/{id}")
    public AboutContent updateAboutContent(@PathVariable Long id, @RequestBody AboutContent aboutContent) {
        return aboutContentService.updateAboutContent(id, aboutContent);
    }
}
