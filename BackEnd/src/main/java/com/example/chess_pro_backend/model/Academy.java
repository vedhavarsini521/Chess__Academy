package com.example.chess_pro_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Academy")
@Data
@NoArgsConstructor
public class Academy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int academyId;
    String academyName;
    int duration;
    float star;


}
