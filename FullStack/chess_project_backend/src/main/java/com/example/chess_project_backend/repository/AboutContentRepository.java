package com.example.chess_project_backend.repository;



import org.springframework.data.repository.CrudRepository;

import com.example.chess_project_backend.model.AboutContent;


public interface AboutContentRepository extends CrudRepository<AboutContent, Long> {
    // Custom queries can be added here if needed
}
