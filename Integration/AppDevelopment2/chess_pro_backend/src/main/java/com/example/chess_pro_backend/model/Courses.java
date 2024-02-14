package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Courses")
@Data
@NoArgsConstructor

public class Courses {

    @Id
    @GeneratedValue(strategy  = GenerationType.AUTO)

    private int courseId;
    private int academyId;
    private String location;
    private String courseName;
    private String contact;
    private String mode;
    private String duration;

}
