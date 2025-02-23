package com.backend.backend.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.backend.backend.model.Endereco;

@FeignClient(name = "viacep", url = "https://viacep.com.br/ws")
public interface EnderecoService {
    @GetMapping("/{cep}/json/")
    Endereco buscarEnderecoPorCep(@PathVariable("cep") String cep);
}
