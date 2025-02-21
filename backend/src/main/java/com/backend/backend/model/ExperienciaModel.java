package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
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
    private FormularioModel formulario;

    public ExperienciaModel(){

    }
}