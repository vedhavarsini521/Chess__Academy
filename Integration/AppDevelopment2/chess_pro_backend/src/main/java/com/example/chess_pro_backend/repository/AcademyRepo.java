package com.example.chess_pro_backend.repository;

// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_pro_backend.model.Academy;


@Repository
public interface AcademyRepo extends JpaRepository <Academy ,Integer >{

}
