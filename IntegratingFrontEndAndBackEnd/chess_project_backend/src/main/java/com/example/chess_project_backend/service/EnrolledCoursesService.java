package com.example.chess_project_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chess_project_backend.model.Academy;
import com.example.chess_project_backend.model.Courses;
import com.example.chess_project_backend.model.EnrolledCourses;
import com.example.chess_project_backend.model.Enrollment;
import com.example.chess_project_backend.model.User;
import com.example.chess_project_backend.repository.AcademyRepo;
import com.example.chess_project_backend.repository.CoursesRepo;
import com.example.chess_project_backend.repository.EnrolledCoursesRepo;
import com.example.chess_project_backend.repository.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EnrolledCoursesService {

    @Autowired
    private EnrolledCoursesRepo enrollRepository;

    @Autowired
    private AcademyRepo academyRepository;

    @Autowired
    private CoursesRepo courseRepository;

    @Autowired
    private UserRepository userRepository; // Autowire UserRepository

    public boolean enrollStudent(Enrollment student, int acadId, int courseId, long userId) {
        try {
            User user = userRepository.findById(userId).orElse(null); // Fetch user by ID
            Academy academy = academyRepository.findById(acadId).orElse(null);
            Courses course = courseRepository.findById(courseId).orElse(null);

            if (user != null && academy != null && course != null) { // Check if user, academy, and course exist
                EnrolledCourses enrollment = new EnrolledCourses();
                enrollment.setUser(user); // Set user
                enrollment.setAcademy(academy);
                enrollment.setCourse(course);
                enrollment.setJoinDate(LocalDate.now()); // Set join date to current date
                enrollRepository.save(enrollment);
                return true;
            } else {
                return false; 
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public void deleteEnrolledCourseById(int enrollId) {
        enrollRepository.deleteById(enrollId);
    }
}