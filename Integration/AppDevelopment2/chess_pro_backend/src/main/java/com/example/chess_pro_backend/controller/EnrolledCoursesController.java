package com.example.chess_pro_backend.controller;

import com.example.chess_pro_backend.model.EnrolledCourses;
import com.example.chess_pro_backend.service.EnrolledCoursesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrolled-courses")
public class EnrolledCoursesController {

    @Autowired
    private EnrolledCoursesService enrolledCoursesService;

    @GetMapping
    public List<EnrolledCourses> getAllEnrolledCourses() {
        return enrolledCoursesService.getAllEnrolledCourses();
    }

    @GetMapping("/{enrolledCourseId}")
    public EnrolledCourses getEnrolledCourseById(@PathVariable int enrolledCourseId) {
        return enrolledCoursesService.getEnrolledCourseById(enrolledCourseId);
    }

    @PostMapping
    public EnrolledCourses createEnrolledCourse(@RequestBody EnrolledCourses enrolledCourse) {
        return enrolledCoursesService.createEnrolledCourse(enrolledCourse);
    }

    @PutMapping("/{enrolledCourseId}")
    public EnrolledCourses updateEnrolledCourse(@PathVariable int enrolledCourseId, @RequestBody EnrolledCourses enrolledCourse) {
        return enrolledCoursesService.updateEnrolledCourse(enrolledCourseId, enrolledCourse);
    }

    @DeleteMapping("/{enrolledCourseId}")
    public void deleteEnrolledCourse(@PathVariable int enrolledCourseId) {
        enrolledCoursesService.deleteEnrolledCourse(enrolledCourseId);
    }
}
