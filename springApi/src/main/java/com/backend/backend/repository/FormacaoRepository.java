package com.backend.backend.repository;

import com.backend.backend.model.FormacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormacaoRepository extends JpaRepository<FormacaoModel, Long> {
}
