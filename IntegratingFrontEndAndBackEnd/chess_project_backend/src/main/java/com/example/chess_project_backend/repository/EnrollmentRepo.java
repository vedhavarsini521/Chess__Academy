package com.example.chess_project_backend.repository;



// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_project_backend.model.Enrollment;



@Repository
public interface EnrollmentRepo extends JpaRepository <Enrollment ,Integer >{

}

