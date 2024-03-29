package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="UserDetails")
@Data
@NoArgsConstructor

public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int userId;
    String name;
    String email;
    String mobileNumber;
    String password;

}
