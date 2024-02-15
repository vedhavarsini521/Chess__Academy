package com.example.chess_project_backend.repository;


import java.util.List;

// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_project_backend.model.Courses;


@Repository
public interface CoursesRepo extends JpaRepository <Courses ,Integer >{
    List<Courses> findByAcademy_AcademyId(int academyId);
}

