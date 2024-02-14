package com.example.chess_pro_backend.repository;



import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
