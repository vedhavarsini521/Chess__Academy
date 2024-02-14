package com.example.chess_project_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.chess_project_backend.model.EnrolledCourses;
import com.example.chess_project_backend.model.Enrollment;
import com.example.chess_project_backend.service.EnrolledCoursesService;

import java.util.List;
import java.util.NoSuchElementException;
@RestController
@RequestMapping("/api/enroll")
public class EnrolledCoursesController {

    @Autowired
    private EnrolledCoursesService enrollService;

    @PostMapping("/{acadId}/{courseId}/{userId}") // Add userId parameter
public ResponseEntity<String> enrollStudent(@PathVariable int acadId,
                                            @PathVariable int courseId,
                                            @PathVariable int userId, // Add userId parameter
                                            @RequestBody Enrollment student) {
        boolean enrolled = enrollService.enrollStudent(student, acadId, courseId, userId); // Pass userId
        if (enrolled) {
            return ResponseEntity.ok("User enrolled successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to enroll user.");
        }
    }

    @DeleteMapping("/{enrollId}")
    public ResponseEntity<String> deleteEnrolledCourseById(@PathVariable int enrollId) {
        try {
            enrollService.deleteEnrolledCourseById(enrollId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Enrolled course deleted successfully.");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Enrolled course not found.");
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred.");
        }
    }
}