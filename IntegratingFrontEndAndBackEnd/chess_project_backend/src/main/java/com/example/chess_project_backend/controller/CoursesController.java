package com.example.chess_project_backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.chess_project_backend.model.Courses;
import com.example.chess_project_backend.service.CoursesService;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    @Autowired
    private CoursesService courseService;

    @PostMapping("/{academyId}")
    public ResponseEntity<Courses> createCourse(@PathVariable int academyId, @RequestBody Courses course) {
        Courses createdCourse = courseService.createCourse(academyId, course);
        return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
    }

    @GetMapping("/academy/{academyId}")
    public ResponseEntity<List<Courses>> getCoursesByAcademyId(@PathVariable int academyId) {
    List<Courses> courses = courseService.getCoursesByAcademyId(academyId);
    return ResponseEntity.ok(courses);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<Courses> getCourseById(@PathVariable int courseId) {
        Courses course = courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PutMapping("/{courseId}")
    // @PutMapping("/academy/{academyId}/{courseId}")
    public ResponseEntity<Courses> updateCourse(@PathVariable int courseId, @RequestBody Courses course) {
        Courses updatedCourse = courseService.updateCourse(courseId, course);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable int courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.noContent().build();
    }
    
}