package com.example.chess_project_backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.chess_project_backend.dto.request.AuthenticationRequest;
import com.example.chess_project_backend.dto.request.RegisterRequest;
import com.example.chess_project_backend.dto.response.AuthenticationResponse;
import com.example.chess_project_backend.exceptions.RegistrationException;
import com.example.chess_project_backend.exceptions.UserAlreadyExistsException;
import com.example.chess_project_backend.model.Role;
import com.example.chess_project_backend.model.User;
import com.example.chess_project_backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.AuthenticationException;


import java.util.Optional;
@Service
@RequiredArgsConstructor

public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public void register(RegisterRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("User already exists");
        }

        // Create a new user entity
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .mobileNumber(request.getMobileNumber())
                .role(Role.USER)
                .build();

        try {
            // Save the user to the database
            userRepository.save(user);
        } catch (Exception e) {
            // If any error occurs during user registration, throw a custom exception
            throw new RegistrationException("Error registering user: " + e.getMessage());
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        // Authenticate user with Spring Security AuthenticationManager
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username/password");
        }
        
        // Retrieve user from database by email
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

        // Generate JWT token for authenticated user
        String jwtToken = jwtService.generateToken(user);

        // Build and return authentication response with JWT token
        return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
    }
}



// public class AuthenticationService {

//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final JwtService jwtService;
//     private final AuthenticationManager authenticationManager;

//     public AuthenticationResponse register(RegisterRequest request) {
//         if (userRepository.existsByEmail(request.getEmail())) {
//             throw new RuntimeException("User already exists");
//         }

//         var user = User
//                 .builder()
//                 .name(request.getName())
//                 .email(request.getEmail())
//                 // .mobileNumber(request.getMobileNumber())
//                 .password(passwordEncoder.encode(request.getPassword()))
//                 .role(Role.USER)
//                 .build();
        
//         try {
//             userRepository.save(user);
//         } catch (Exception e) {
//             throw new RuntimeException("Error registering user");
//         }

//         var jwtToken = jwtService.generateToken(user);
//         return AuthenticationResponse.builder()
//                 .token(jwtToken)
//                 .build();
//     }

//     public AuthenticationResponse authenticate(AuthenticationRequest request) {
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//         var user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));
//         var jwtToken = jwtService.generateToken(user);
//         return AuthenticationResponse.builder()
//                 .token(jwtToken)
//                 .build();
//     }
// }