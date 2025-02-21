package com.backend.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.backend.backend.model.FormularioModel;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "formulario")
public class FormularioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "identificacao_id")
    private IdentificacaoModel identificacao;

    @JsonManagedReference
    @OneToMany(mappedBy = "formulario", cascade = CascadeType.ALL)
    private List<ExperienciaModel> experiencias = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "formulario", cascade = CascadeType.ALL)
    private List<FormacaoModel> formacoes = new ArrayList<>();
    
    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adicionais_id")
    private AdicionaisModel adicionais;
}
