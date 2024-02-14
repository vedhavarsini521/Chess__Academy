package com.example.chess_project_backend.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int academyId;
    private String academyName;
    private String duration;
    private String contact;
    private String rate;
    private String imageUrl;
    // private String location;
    // private String duration;
    // private long contact;

    // @OneToMany(mappedBy = "academy", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    // private List<Courses> courses;

    @OneToMany(mappedBy = "academy", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Courses> courses;
}

