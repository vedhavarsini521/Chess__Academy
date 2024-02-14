// // UserController.java
// package com.example.chess_project_backend.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import com.example.chess_project_backend.model.User;
// import com.example.chess_project_backend.service.UserService;

// import java.util.List;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @GetMapping
//     public List<User> getAllUsers() {
//         return userService.getAllUsers();
//     }

//     @GetMapping("/{userId}")
//     public ResponseEntity<User> getUserById(@PathVariable Long userId) {
//         User user = userService.getUserById(userId);
//         return ResponseEntity.ok().body(user);
//     }

//     @PostMapping
//     public ResponseEntity<?> createUser(@RequestBody User user) {
//         try {
//             userService.createUser(user);
//             return ResponseEntity.status(HttpStatus.CREATED).build();
//         } catch (RuntimeException e) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//         }
//     }

//     @PutMapping("/{userId}")
//     public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User user) {
//         User updatedUser = userService.updateUser(userId, user);
//         return ResponseEntity.ok().body(updatedUser);
//     }

//     @DeleteMapping("/{userId}")
//     public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
//         userService.deleteUser(userId);
//         return ResponseEntity.noContent().build();
//     }
// }
