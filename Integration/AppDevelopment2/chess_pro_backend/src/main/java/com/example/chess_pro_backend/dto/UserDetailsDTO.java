package com.example.chess_pro_backend.dto;

import lombok.Data;

@Data
public class UserDetailsDTO {
    private String name;
    private String email;
    private String mobileNumber;
    private String password;

    // Constructors, getters, and setters
    // If you're using Lombok, you don't need to manually write getters and setters
}
