package com.backend.backend.controller;

import com.backend.backend.model.ExperienciaModel;
import com.backend.backend.service.ExperienciaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experiencia")
@CrossOrigin(origins = "*")
public class ExperienciaController {
    private final ExperienciaService service;

    public ExperienciaController(ExperienciaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ExperienciaModel> salvar(@RequestBody ExperienciaModel experiencia) {
        return ResponseEntity.ok(service.salvarExperiencia(experiencia));
    }

    @GetMapping
    public ResponseEntity<List<ExperienciaModel>> listar() {
        return ResponseEntity.ok(service.listarExperiencias());
    }
}
