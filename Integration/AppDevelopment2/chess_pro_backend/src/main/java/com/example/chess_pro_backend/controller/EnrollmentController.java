package com.example.chess_pro_backend.controller;

import com.example.chess_pro_backend.model.Enrollment;
import com.example.chess_pro_backend.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @GetMapping
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getAllEnrollments();
    }

    @GetMapping("/{enrollmentId}")
    public Enrollment getEnrollmentById(@PathVariable int enrollmentId) {
        return enrollmentService.getEnrollmentById(enrollmentId);
    }

    @PostMapping
    public Enrollment createEnrollment(@RequestBody Enrollment enrollment) {
        return enrollmentService.createEnrollment(enrollment);
    }

    @PutMapping("/{enrollmentId}")
    public Enrollment updateEnrollment(@PathVariable int enrollmentId, @RequestBody Enrollment enrollment) {
        return enrollmentService.updateEnrollment(enrollmentId, enrollment);
    }

    @DeleteMapping("/{enrollmentId}")
    public void deleteEnrollment(@PathVariable int enrollmentId) {
        enrollmentService.deleteEnrollment(enrollmentId);
    }
}
