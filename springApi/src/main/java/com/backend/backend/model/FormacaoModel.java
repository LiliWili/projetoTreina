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
@Entity(name = "formacao")
public class FormacaoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String mesConclusao;
    private String anoConclusao;
    private String curso;
    private String instituicao;
    
    @ManyToOne
    @JoinColumn(name = "formulario_id")
    @JsonIgnore
    private FormularioModel formulario;
}
