package com.backend.backend.controller;

import com.backend.backend.model.FormularioModel;
import com.backend.backend.service.FormularioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins = "*")
public class FormularioController {

    private final FormularioService formularioService;

    public FormularioController(FormularioService formularioService) {
        this.formularioService = formularioService;
    }

    @PostMapping(value="/formulario", produces = MediaType.APPLICATION_JSON_VALUE, consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<FormularioModel> salvar(@RequestBody FormularioModel formulario) {
        System.out.println("Recebendo formulário: " + formulario);
        FormularioModel savedFormulario = formularioService.salvarFormulario(formulario);
        return ResponseEntity.ok(savedFormulario);
    }
    
    @GetMapping
    public ResponseEntity<List<FormularioModel>> listarTodos() {
        return ResponseEntity.ok(formularioService.listarFormularios());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormularioModel> buscarPorId(@PathVariable Long id) {
        FormularioModel formulario = formularioService.buscarPorId(id);
        return ResponseEntity.ok(formulario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        formularioService.deletarFormulario(id);
        return ResponseEntity.noContent().build();
    }
}
