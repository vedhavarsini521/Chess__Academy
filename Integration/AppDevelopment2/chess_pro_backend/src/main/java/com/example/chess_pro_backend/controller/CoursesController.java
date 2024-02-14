package com.example.chess_pro_backend.controller;

import com.example.chess_pro_backend.model.Courses;
import com.example.chess_pro_backend.service.CoursesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    @Autowired
    private CoursesService coursesService;

    @GetMapping
    public List<Courses> getAllCourses() {
        return coursesService.getAllCourses();
    }

    @GetMapping("/{courseId}")
    public Courses getCourseById(@PathVariable int courseId) {
        return coursesService.getCourseById(courseId);
    }

    @PostMapping
    public Courses createCourse(@RequestBody Courses course) {
        return coursesService.createCourse(course);
    }

    @PutMapping("/{courseId}")
    public Courses updateCourse(@PathVariable int courseId, @RequestBody Courses course) {
        return coursesService.updateCourse(courseId, course);
    }

    @DeleteMapping("/{courseId}")
    public void deleteCourse(@PathVariable int courseId) {
        coursesService.deleteCourse(courseId);
    }
}
