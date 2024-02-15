package com.example.chess_project_backend.service;


import java.util.Optional;

// AboutContentService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chess_project_backend.model.AboutContent;
import com.example.chess_project_backend.repository.AboutContentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AboutContentService {

    @Autowired
    private AboutContentRepository aboutContentRepository;

    @SuppressWarnings("null")
    public Optional<AboutContent> getById(Long id) {
        return aboutContentRepository.findById(id);
    }

    @SuppressWarnings("null")
    public String addAboutContent(AboutContent aboutContent) {
        aboutContentRepository.save(aboutContent);
        return "About content added successfully!";
    }

    public AboutContent updateAboutContent(Long id, AboutContent aboutContent) {
        @SuppressWarnings("null")
        Optional<AboutContent> existingAboutContentOptional = aboutContentRepository.findById(id);

        if (existingAboutContentOptional.isPresent()) {
            AboutContent existingAboutContent = existingAboutContentOptional.get();
            existingAboutContent.setHeading1(aboutContent.getHeading1());
            // existingAboutContent.setHeading2(aboutContent.getHeading2());
            existingAboutContent.setText1(aboutContent.getText1());
            existingAboutContent.setText2(aboutContent.getText2());
            existingAboutContent.setP1(aboutContent.getP1());
            existingAboutContent.setP2(aboutContent.getP2());
            existingAboutContent.setP3(aboutContent.getP3());
            existingAboutContent.setP4(aboutContent.getP4());
            existingAboutContent.setP5(aboutContent.getP5());
            existingAboutContent.setP6(aboutContent.getP6());

            return aboutContentRepository.save(existingAboutContent);
        } else {
            throw new EntityNotFoundException("About content not found with ID: " + id);
        }
    }
}
