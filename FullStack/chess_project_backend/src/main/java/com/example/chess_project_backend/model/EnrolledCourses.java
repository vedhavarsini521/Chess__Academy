package com.example.chess_project_backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;



@Entity
@Data
@NoArgsConstructor
public class EnrolledCourses {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int enrollId;

    private String academyName; // Store academyName instead of academyId
    private String contact;
    private String imageUrl;

    private String courseName;
    private String location; // Store courseName instead of courseId

    private Long userId; // Store userId
    
    // private LocalDate joinDate;
}