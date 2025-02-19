package com.backend.backend.service;

import com.backend.backend.dto.Identificacao;
import com.backend.backend.repository.IdentificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdentificacaoService {

    @Autowired
    private IdentificacaoRepository identificacaoRepository;

    public Identificacao salvar(Identificacao identificacao) {
        return identificacaoRepository.save(identificacao);
    }

    public List<Identificacao> listar() {
        return identificacaoRepository.findAll();
    }
}
