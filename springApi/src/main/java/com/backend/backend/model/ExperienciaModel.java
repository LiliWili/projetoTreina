package com.backend.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor; 

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "experiencia")
public class ExperienciaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String empresa;
    private String mesInicio;
    private String anoInicio;
    private String mesFim;
    private String anoFim;
    private String funcao;

    @ManyToOne
    @JoinColumn(name = "formulario_id")
    @JsonIgnore
    private FormularioModel formulario;
}