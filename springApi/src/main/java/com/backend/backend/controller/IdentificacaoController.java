package com.backend.backend.controller;

import com.backend.backend.model.IdentificacaoModel;
import com.backend.backend.service.IdentificacaoService;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/identificacao")
@CrossOrigin(origins = "*")
public class IdentificacaoController {
    private final IdentificacaoService service;

    public IdentificacaoController(IdentificacaoService service) {
        this.service = service;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<IdentificacaoModel> salvar(@RequestBody IdentificacaoModel identificacao) {
        return ResponseEntity.ok(service.salvarIdentificacao(identificacao));
    }

    @GetMapping
    public ResponseEntity<List<IdentificacaoModel>> listar() {
        return ResponseEntity.ok(service.listarIdentificacoes());
    }
}
