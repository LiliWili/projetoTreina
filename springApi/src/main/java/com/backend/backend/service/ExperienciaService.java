package com.backend.backend.service;

import com.backend.backend.model.ExperienciaModel;
import com.backend.backend.repository.ExperienciaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienciaService {
    private final ExperienciaRepository repository;

    public ExperienciaService(ExperienciaRepository repository) {
        this.repository = repository;
    }

    public ExperienciaModel salvarExperiencia(ExperienciaModel experiencia) {
        return repository.save(experiencia);
    }

    public List<ExperienciaModel> listarExperiencias() {
        return repository.findAll();
    }

    public Optional<ExperienciaModel> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public void deletarExperiencia(Long id) {
        repository.deleteById(id);
    }
}
