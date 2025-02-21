package com.backend.backend.service;

import com.backend.backend.model.IdentificacaoModel;
import com.backend.backend.repository.IdentificacaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdentificacaoService {
    private final IdentificacaoRepository repository;

    public IdentificacaoService(IdentificacaoRepository repository) {
        this.repository = repository;
    }

    public IdentificacaoModel salvarIdentificacao(IdentificacaoModel identificacao) {
        return repository.save(identificacao);
    }

    public List<IdentificacaoModel> listarIdentificacoes() {
        return repository.findAll();
    }
}
