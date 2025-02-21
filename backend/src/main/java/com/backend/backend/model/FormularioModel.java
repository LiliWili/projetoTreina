package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
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

    @OneToOne(mappedBy = "formulario", cascade = CascadeType.ALL, orphanRemoval = true)
    private IdentificacaoModel identificacao;

    @OneToMany(mappedBy = "formulario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExperienciaModel> experiencias = new ArrayList<>();

    @OneToMany(mappedBy = "formulario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FormacaoModel> formacoes = new ArrayList<>();
    
    @OneToOne(mappedBy = "formulario", cascade = CascadeType.ALL, orphanRemoval = true)
    private AdicionaisModel adicionais;

    public void setIdentificacao(IdentificacaoModel identificacao) {
        this.identificacao = identificacao;
        if (identificacao != null) {
            identificacao.setFormulario(this);
        }
    }

    public void setAdicionais(AdicionaisModel adicionais) {
        this.adicionais = adicionais;
        if (adicionais != null) {
            adicionais.setFormulario(this);
        }
    }

    public void addExperiencia(ExperienciaModel experiencia) {
        experiencias.add(experiencia);
        experiencia.setFormulario(this);
    }

    public void addFormacao(FormacaoModel formacao) {
        formacoes.add(formacao);
        formacao.setFormulario(this);
    }
}
