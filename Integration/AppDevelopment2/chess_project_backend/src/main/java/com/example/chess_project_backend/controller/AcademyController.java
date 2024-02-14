package com.example.chess_project_backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.chess_project_backend.model.Academy;
import com.example.chess_project_backend.service.AcademyService;

@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping
    public ResponseEntity<Academy> createAcademy(@RequestBody Academy academy) {
        Academy createdAcademy = academyService.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }

    @GetMapping
public ResponseEntity<List<Academy>> getAllAcademies() {
    List<Academy> academies = academyService.getAllAcademies();
    return ResponseEntity.ok(academies);
}


    @GetMapping("/{academyId}")
    public ResponseEntity<Academy> getAcademyById(@PathVariable int academyId) {
        Academy academy = academyService.getAcademyById(academyId);
        return ResponseEntity.ok(academy);
    }

    @PutMapping("/{academyId}")
    public ResponseEntity<Academy> updateAcademy(@PathVariable int academyId, @RequestBody Academy academy) {
        Academy updatedAcademy = academyService.updateAcademy(academyId, academy);
        return ResponseEntity.ok(updatedAcademy);
    }

    @DeleteMapping("/{academyId}")
    public ResponseEntity<Void> deleteAcademy(@PathVariable int academyId) {
        academyService.deleteAcademy(academyId);
        return ResponseEntity.noContent().build();
    }
}

