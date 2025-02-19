package com.backend.backend.dto;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Identificacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String telefone;
    private String rua;
    private String numero;
    private String bairro;
    private String cep;
    private String cidade;
    private String uf;
}
