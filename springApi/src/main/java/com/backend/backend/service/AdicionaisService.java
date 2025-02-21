package com.backend.backend.service;

import com.backend.backend.model.AdicionaisModel;
import com.backend.backend.repository.AdicionaisRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdicionaisService {
    private final AdicionaisRepository repository;

    public AdicionaisService(AdicionaisRepository repository) {
        this.repository = repository;
    }

    public AdicionaisModel salvarAdicionais(AdicionaisModel adicionais) {
        return repository.save(adicionais);
    }

    public List<AdicionaisModel> listarAdicionais() {
        return repository.findAll();
    }

    public Optional<AdicionaisModel> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public void deletarAdicionais(Long id) {
        repository.deleteById(id);
    }
}
