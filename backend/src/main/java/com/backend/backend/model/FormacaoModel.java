package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;
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
    private FormularioModel formulario;

}
