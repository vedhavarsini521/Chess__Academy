package com.example.chess_pro_backend.service;

import com.example.chess_pro_backend.model.Academy;
import com.example.chess_pro_backend.repository.AcademyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class  AcademyService {

    @Autowired
    private AcademyRepo academyRepo;


    public List<Academy> getAllAcademies() {
        return academyRepo.findAll();
    }


    public Academy getAcademyById(int academyId) {
        Optional<Academy> optionalAcademy = academyRepo.findById(academyId);
        return optionalAcademy.orElse(null);
    }

    public Academy createAcademy(Academy academy) {
        return academyRepo.save(academy);
    }

    public Academy updateAcademy(int academyId, Academy academy) {
        if (academyRepo.existsById(academyId)) {
            academy.setAcademyId(academyId);
            return academyRepo.save(academy);
        }
        return null;
    }

    public void deleteAcademy(int academyId) {
        academyRepo.deleteById(academyId);
    }
}
