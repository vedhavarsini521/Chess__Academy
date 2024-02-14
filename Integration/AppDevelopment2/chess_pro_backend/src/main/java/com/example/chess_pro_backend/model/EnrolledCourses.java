package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "EnrolledCourses")
@Data
@NoArgsConstructor
public class EnrolledCourses {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int enrolledCourseId;
    private int academyId;
    private String academyName;
    private String course;
    private String duration;
    private String mode;

}
