package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "identificacao")
@Data
public class IdentificacaoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String telefone;
    private String email;
    private String rua;
    private String numero;
    private String bairro;
    private String cep;
    private String cidade;
    private String uf;

    @OneToOne
    @JoinColumn(name = "formulario_id", nullable = false, unique = true)
    private FormularioModel formulario;
    
    public IdentificacaoModel(){}

}


