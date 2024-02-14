package com.example.chess_project_backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chess_project_backend.model.Academy;
import com.example.chess_project_backend.repository.AcademyRepo;


@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepository;

    public Academy createAcademy(Academy academy) {
        return academyRepository.save(academy);
    }

    public List<Academy> getAllAcademies() {
        return academyRepository.findAll();
    }
    

    public Academy getAcademyById(int academyId) {
        return academyRepository.findById(academyId).orElse(null);
    }

    public Academy updateAcademy(int academyId, Academy updatedAcademy) {
        if (!academyRepository.existsById(academyId)) {
            return null;
        }
        updatedAcademy.setAcademyId(academyId);
        return academyRepository.save(updatedAcademy);
    }

    public void deleteAcademy(int academyId) {
        academyRepository.deleteById(academyId);
    }
}