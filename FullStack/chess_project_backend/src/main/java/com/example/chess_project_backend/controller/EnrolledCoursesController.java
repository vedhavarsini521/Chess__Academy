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

    @PostMapping("/{userId}/{academyId}/{courseId}")
    public ResponseEntity<String> enrollCourse(@PathVariable Long userId,
                                            @PathVariable int academyId,
                                            @PathVariable int courseId) {
        boolean enrolled = enrollService.enrollCourse(userId, academyId, courseId);
        if (enrolled) {
            return ResponseEntity.ok("User enrolled successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to enroll user.");
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<EnrolledCourses>> getEnrolledCoursesByUserId(@PathVariable Long userId) {
        List<EnrolledCourses> enrolledCourses = enrollService.getEnrolledCoursesByUserId(userId);
        return ResponseEntity.ok(enrolledCourses);
    }

}