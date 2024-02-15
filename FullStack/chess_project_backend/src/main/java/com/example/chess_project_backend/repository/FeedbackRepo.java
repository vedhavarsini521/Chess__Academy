package com.example.chess_project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_project_backend.model.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Integer>{

}
