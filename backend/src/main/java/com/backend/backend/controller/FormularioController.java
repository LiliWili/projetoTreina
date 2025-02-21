package com.backend.backend.controller;

import com.backend.backend.model.FormularioModel;
import com.backend.backend.service.FormularioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/formulario")
@CrossOrigin(origins = "*")
public class FormularioController {

    private final FormularioService formularioService;

    public FormularioController(FormularioService formularioService) {
        this.formularioService = formularioService;
    }

    @PostMapping
    public ResponseEntity<FormularioModel> salvar(@RequestBody FormularioModel formulario) {
        if (formulario == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(formularioService.salvarFormulario(formulario));
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
