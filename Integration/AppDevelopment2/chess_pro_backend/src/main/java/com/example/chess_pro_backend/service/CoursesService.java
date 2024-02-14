package com.example.chess_pro_backend.service;
import com.example.chess_pro_backend.model.Courses;
import com.example.chess_pro_backend.repository.CoursesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class  CoursesService {

    @Autowired
    private CoursesRepo coursesRepo;

    public List<Courses> getAllCourses() {
        return coursesRepo.findAll();
    }


    public Courses getCourseById(int courseId) {
        Optional<Courses> optionalCourse = coursesRepo.findById(courseId);
        return optionalCourse.orElse(null);
    }


    public Courses createCourse(Courses course) {
        return coursesRepo.save(course);
    }

    public Courses updateCourse(int courseId, Courses course) {
        if (coursesRepo.existsById(courseId)) {
            course.setCourseId(courseId);
            return coursesRepo.save(course);
        }
        return null;
    }


    public void deleteCourse(int courseId) {
        coursesRepo.deleteById(courseId);
    }
}
