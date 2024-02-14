package com.example.chess_pro_backend.service;

import com.example.chess_pro_backend.model.EnrolledCourses;
import com.example.chess_pro_backend.repository.EnrolledCoursesRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class  EnrolledCoursesService {

    @Autowired
    private EnrolledCoursesRepo enrolledCoursesRepo;

    public List<EnrolledCourses> getAllEnrolledCourses() {
        return enrolledCoursesRepo.findAll();
    }


    public EnrolledCourses getEnrolledCourseById(int enrolledCourseId) {
        Optional<EnrolledCourses> optionalEnrolledCourse = enrolledCoursesRepo.findById(enrolledCourseId);
        return optionalEnrolledCourse.orElse(null);
    }

    public EnrolledCourses createEnrolledCourse(EnrolledCourses enrolledCourse) {
        return enrolledCoursesRepo.save(enrolledCourse);
    }

 
    public EnrolledCourses updateEnrolledCourse(int enrolledCourseId, EnrolledCourses enrolledCourse) {
        if (enrolledCoursesRepo.existsById(enrolledCourseId)) {
            enrolledCourse.setEnrolledCourseId(enrolledCourseId);
            return enrolledCoursesRepo.save(enrolledCourse);
        }
        return null;
    }


    public void deleteEnrolledCourse(int enrolledCourseId) {
        enrolledCoursesRepo.deleteById(enrolledCourseId);
    }
}
