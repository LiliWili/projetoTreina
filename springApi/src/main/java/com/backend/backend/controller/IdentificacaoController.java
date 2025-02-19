package com.backend.backend.controller;

import com.backend.backend.dto.Identificacao;
import com.backend.backend.repository.IdentificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/identificacao")
public class IdentificacaoController {

    @Autowired
    private IdentificacaoRepository identificacaoRepository;

    @PostMapping
    public Identificacao salvar(@RequestBody Identificacao identificacao) {
        return identificacaoRepository.save(identificacao);
    }

    @GetMapping
    public List<Identificacao> listar() {
        return identificacaoRepository.findAll();
    }
}
