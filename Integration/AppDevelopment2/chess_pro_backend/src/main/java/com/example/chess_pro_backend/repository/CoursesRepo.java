package com.example.chess_pro_backend.repository;

// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.chess_pro_backend.model.Courses;


@Repository
public interface CoursesRepo extends JpaRepository <Courses ,Integer >{

}
