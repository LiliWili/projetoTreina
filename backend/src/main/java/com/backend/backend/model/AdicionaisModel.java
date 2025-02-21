package com.backend.backend.model;
import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity(name = "adicional")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdicionaisModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String github;
    private String linkedin;
    private String whatsapp;

    @OneToOne
    @JoinColumn(name = "formulario_id", nullable = false, unique = true)
    private FormularioModel formulario;
}
