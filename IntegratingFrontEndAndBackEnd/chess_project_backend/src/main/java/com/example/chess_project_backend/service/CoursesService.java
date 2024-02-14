package com.example.chess_project_backend.service;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chess_project_backend.model.Academy;
import com.example.chess_project_backend.model.Courses;
import com.example.chess_project_backend.repository.AcademyRepo;
import com.example.chess_project_backend.repository.CoursesRepo;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepo courseRepository;

    @Autowired
    private AcademyRepo academyRepository;

    public Courses createCourse(int academyId, Courses course) {
        Academy academy = academyRepository.findById(academyId).orElse(null);
        if (academy != null) {
            course.setAcademy(academy);
            return courseRepository.save(course);
        }
        return null;
    }

    public List<Courses> getCoursesByAcademyId(int academyId) {
        return courseRepository.findByAcademy_AcademyId(academyId);
    }

    public Courses getCourseById(int courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    // public Courses updateCourse(int courseId, Courses updatedCourse) {
    //     if (!courseRepository.existsById(courseId)) {
    //         return null;
    //     }
    //     updatedCourse.setCourseId(courseId);
    //     return courseRepository.save(updatedCourse);
    // }


    public Courses updateCourse(int courseId, Courses updatedCourse) {
        // Retrieve the existing course from the database
        Courses existingCourse = courseRepository.findById(courseId).orElse(null);
        if (existingCourse == null) {
            return null; // Return null if the course doesn't exist
        }
    
        // Retrieve the associated academy of the existing course
        Academy associatedAcademy = existingCourse.getAcademy();
    
        // Update the fields of the existing course with the values from the updatedCourse
        existingCourse.setCourseName(updatedCourse.getCourseName());
        existingCourse.setLocation(updatedCourse.getLocation());
        existingCourse.setMode(updatedCourse.getMode());
        existingCourse.setHours(updatedCourse.getHours());
    
        // Ensure that the associated academy is preserved
        existingCourse.setAcademy(associatedAcademy);
    
        // Save the updated course to the database
        return courseRepository.save(existingCourse);
    }
    
    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }
    
}