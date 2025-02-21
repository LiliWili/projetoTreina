package com.backend.backend.repository;

import com.backend.backend.model.FormularioModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormularioRepository extends JpaRepository<FormularioModel, Long> {
}
