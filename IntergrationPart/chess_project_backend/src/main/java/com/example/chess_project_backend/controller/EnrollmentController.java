package com.example.chess_project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.chess_project_backend.model.Enrollment;
import com.example.chess_project_backend.repository.EnrollmentRepo;

@RestController
public class EnrollmentController {

    @Autowired
    private EnrollmentRepo enrollmentRepo;

    @PostMapping("/api/enrollments")
    public ResponseEntity<String> enroll(@RequestBody Enrollment enrollment) {
        enrollmentRepo.save(enrollment);
        return ResponseEntity.status(HttpStatus.CREATED).body("Enrollment successful");
    }
}

