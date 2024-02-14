package com.example.chess_pro_backend.service;

import com.example.chess_pro_backend.model.Enrollment;
import com.example.chess_pro_backend.repository.EnrollmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class  EnrollmentService {

    @Autowired
    private EnrollmentRepo enrollmentRepo;


    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepo.findAll();
    }


    public Enrollment getEnrollmentById(int enrollmentId) {
        Optional<Enrollment> optionalEnrollment = enrollmentRepo.findById(enrollmentId);
        return optionalEnrollment.orElse(null);
    }

 
    public Enrollment createEnrollment(Enrollment enrollment) {
        return enrollmentRepo.save(enrollment);
    }

    public Enrollment updateEnrollment(int enrollmentId, Enrollment enrollment) {
        if (enrollmentRepo.existsById(enrollmentId)) {
            enrollment.setEnrollmentId(enrollmentId);
            return enrollmentRepo.save(enrollment);
        }
        return null;
    }

    public void deleteEnrollment(int enrollmentId) {
        enrollmentRepo.deleteById(enrollmentId);
    }
}
