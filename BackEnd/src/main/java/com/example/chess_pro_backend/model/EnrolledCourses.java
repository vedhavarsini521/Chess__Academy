package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "EnrolledCourses")
public class EnrolledCourses {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    int enrolledCourseId;
    int academyId;
    String academyName;
    String course;
    String duration;
    String mode;

}
