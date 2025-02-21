package com.backend.backend.repository;

import com.backend.backend.model.IdentificacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdentificacaoRepository extends JpaRepository<IdentificacaoModel, Long> {
}
