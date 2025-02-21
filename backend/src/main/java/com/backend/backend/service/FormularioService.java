package com.backend.backend.service;

import com.backend.backend.model.FormularioModel;
import com.backend.backend.repository.FormularioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormularioService {

    private final FormularioRepository repository;

    public FormularioService(FormularioRepository repository) {
        this.repository = repository;
    }

    public FormularioModel salvarFormulario(FormularioModel formulario) {
        if (formulario.getIdentificacao() != null) {
            formulario.getIdentificacao().setFormulario(formulario);
        }
    
        if (formulario.getExperiencias() != null) {
            formulario.getExperiencias().forEach(exp -> exp.setFormulario(formulario));
        }
    
        if (formulario.getFormacoes() != null) {
            formulario.getFormacoes().forEach(form -> form.setFormulario(formulario));
        }
    
        if (formulario.getAdicionais() != null) {
            formulario.getAdicionais().setFormulario(formulario);
        }
    
        return repository.save(formulario);
    }

    public List<FormularioModel> listarFormularios() {
        return repository.findAll();
    }

    public FormularioModel buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formulário não encontrado com ID: " + id));
    }

    public void deletarFormulario(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Formulário não encontrado para exclusão com ID: " + id);
        }
        repository.deleteById(id);
    } 
}
