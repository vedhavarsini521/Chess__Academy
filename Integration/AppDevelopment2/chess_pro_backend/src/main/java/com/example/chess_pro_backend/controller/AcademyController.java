package com.example.chess_pro_backend.controller;

import com.example.chess_pro_backend.model.Academy;
import com.example.chess_pro_backend.service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @GetMapping
    public List<Academy> getAllAcademies() {
        return academyService.getAllAcademies();
    }

    @GetMapping("/{academyId}")
    public Academy getAcademyById(@PathVariable int academyId) {
        return academyService.getAcademyById(academyId);
    }

    @PostMapping
    public Academy createAcademy(@RequestBody Academy academy) {
        return academyService.createAcademy(academy);
    }

    @PutMapping("/{academyId}")
    public Academy updateAcademy(@PathVariable int academyId, @RequestBody Academy academy) {
        return academyService.updateAcademy(academyId, academy);
    }

    @DeleteMapping("/{academyId}")
    public void deleteAcademy(@PathVariable int academyId) {
        academyService.deleteAcademy(academyId);
    }
}
