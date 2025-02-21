package com.backend.backend.service;

import com.backend.backend.model.FormacaoModel;
import com.backend.backend.repository.FormacaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormacaoService {
    private final FormacaoRepository repository;

    public FormacaoService(FormacaoRepository repository) {
        this.repository = repository;
    }

    public FormacaoModel salvarFormacao(FormacaoModel formacao) {
        return repository.save(formacao);
    }

    public List<FormacaoModel> listarFormacoes() {
        return repository.findAll();
    }

    public Optional<FormacaoModel> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public void deletarFormacao(Long id) {
        repository.deleteById(id);
    }
}
