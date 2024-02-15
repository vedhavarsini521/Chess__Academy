package com.example.chess_project_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Feedback {

      @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int feedbackId;

    private String email;
    private String name;
    private String mobileNumber;
    private String message;

}
