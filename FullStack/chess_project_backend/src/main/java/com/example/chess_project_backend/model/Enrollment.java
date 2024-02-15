package com.example.chess_project_backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String firstName;
    private String lastName;
    private String gender;
    // private String level;
    private long phoneNumber;
    private long alternateNumber;
    private String email;
    private int age;
    private String houseNo;
    private String streetName;
    private String area;
    private int pincode;
    private String nationality;
    private String state;
}