package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "EnrollmentForm")
@Data
@NoArgsConstructor

public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int enrollmentId;
    private int academyId;
    private String firstname;
    private String lastname;
    private String phoneNumber;
    private String alternateNumber;
    private String email;
    private String age;
    private String gender;
    private String level;

}
