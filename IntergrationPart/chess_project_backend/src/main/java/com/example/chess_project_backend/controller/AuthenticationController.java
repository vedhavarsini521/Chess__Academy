


package com.example.chess_project_backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.chess_project_backend.dto.request.AuthenticationRequest;
import com.example.chess_project_backend.dto.request.RegisterRequest;
import com.example.chess_project_backend.dto.response.AuthenticationResponse;
import com.example.chess_project_backend.exceptions.InvalidCredentialsException;
import com.example.chess_project_backend.exceptions.UserNotFoundException;
import com.example.chess_project_backend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            authenticationService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // @PostMapping("/authenticate")
    // public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
    //     try {
    //         // Authenticate user
    //         authenticationService.authenticate(request);
    //         return ResponseEntity.ok("Login successful");
    //     } catch (UserNotFoundException e) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
    //     } catch (InvalidCredentialsException e) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    //     }
    // }

    @PostMapping("/authenticate")
public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticationRequest request) {
    AuthenticationResponse authenticationResponse = authenticationService.authenticate(request);

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Login successful");
    response.put("authenticationResponse", authenticationResponse);

    return ResponseEntity.ok(response);
}
}