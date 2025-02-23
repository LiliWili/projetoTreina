package com.backend.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.model.Endereco;
import com.backend.backend.service.EnderecoService;

@RestController
@RequestMapping(value = "/endereco")
public class EnderecoController {

    private final EnderecoService enderecoService;

    public EnderecoController(EnderecoService enderecoService) {
        this.enderecoService = enderecoService;
    }

    @GetMapping("/{cep}")
    public ResponseEntity<Endereco> getCep(@PathVariable String cep) {
        Endereco endereco = enderecoService.buscarEnderecoPorCep(cep);
        return endereco != null ? ResponseEntity.ok().body(endereco) : ResponseEntity.notFound().build();
    }
}
