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

import java.util.List;
import java.util.Optional;

@Service
public class EnrolledCoursesService {

    @Autowired
    private EnrolledCoursesRepo enrollRepo;

    @Autowired
    private AcademyRepo academyRepo;

    @Autowired
    private CoursesRepo courseRepo;

    @Autowired
    private UserRepository userRepo; // Autowire UserRepository



public boolean enrollCourse(Long userId, int academyId, int courseId) {
        try {
            Optional<User> userOptional = userRepo.findById(userId);
            Optional<String> academyNameOptional = academyRepo.findById(academyId).map(Academy::getAcademyName);
            Optional<String> academyImageOptional = academyRepo.findById(academyId).map(Academy::getImageUrl);
            Optional<String> academyContactOptional = academyRepo.findById(academyId).map(Academy::getContact);
            Optional<String> courseNameOptional = courseRepo.findById(courseId).map(Courses::getCourseName);
            Optional<String> courseLocationOptional = courseRepo.findById(courseId).map(Courses::getLocation);

            if (userOptional.isPresent() && academyNameOptional.isPresent() && courseNameOptional.isPresent()) {
                EnrolledCourses enrollment = new EnrolledCourses();
                enrollment.setUserId(userId);
                enrollment.setAcademyName(academyNameOptional.get());
                enrollment.setImageUrl(academyImageOptional.get());
                enrollment.setContact(academyContactOptional.get());
                enrollment.setCourseName(courseNameOptional.get());
                enrollment.setLocation(courseLocationOptional.get());
                // enrollment.setJoinDate(LocalDate.now());
                enrollRepo.save(enrollment);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<EnrolledCourses> getEnrolledCoursesByUserId(Long userId) {
        return enrollRepo.findByUserId(userId);
    }

}