package com.backend.backend.controller;

import com.backend.backend.model.FormacaoModel;
import com.backend.backend.service.FormacaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/formacao")
@CrossOrigin(origins = "*")
public class FormacaoController {
    private final FormacaoService service;

    public FormacaoController(FormacaoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<FormacaoModel> salvar(@RequestBody FormacaoModel formacao) {
        return ResponseEntity.ok(service.salvarFormacao(formacao));
    }

    @GetMapping
    public ResponseEntity<List<FormacaoModel>> listar() {
        return ResponseEntity.ok(service.listarFormacoes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<FormacaoModel>> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletarFormacao(id);
        return ResponseEntity.noContent().build();
    }
}
