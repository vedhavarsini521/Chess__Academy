package com.example.chess_pro_backend.controller;

import com.example.chess_pro_backend.dto.UserDetailsDTO;
import com.example.chess_pro_backend.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping
    public List<UserDetailsDTO> getAllUsers() {
        return userDetailsService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public UserDetailsDTO getUserById(@PathVariable int userId) {
        return userDetailsService.getUserById(userId);
    }

    @PostMapping
    public UserDetailsDTO createUser(@RequestBody UserDetailsDTO userDetailsDTO) {
        return userDetailsService.createUser(userDetailsDTO);
    }

    @PutMapping("/{userId}")
    public UserDetailsDTO updateUser(@PathVariable int userId, @RequestBody UserDetailsDTO userDetailsDTO) {
        return userDetailsService.updateUser(userId, userDetailsDTO);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable int userId) {
        userDetailsService.deleteUser(userId);
    }
}
