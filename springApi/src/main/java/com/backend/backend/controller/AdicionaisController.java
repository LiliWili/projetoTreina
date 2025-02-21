package com.backend.backend.controller;

import com.backend.backend.model.AdicionaisModel;
import com.backend.backend.service.AdicionaisService;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/adicionais")
@CrossOrigin(origins = "*")
public class AdicionaisController {
    private final AdicionaisService service;

    public AdicionaisController(AdicionaisService service) {
        this.service = service;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AdicionaisModel> salvar(@RequestBody AdicionaisModel adicionais) {
        return ResponseEntity.ok(service.salvarAdicionais(adicionais));
    }

    @GetMapping
    public ResponseEntity<List<AdicionaisModel>> listar() {
        return ResponseEntity.ok(service.listarAdicionais());
    }
}
