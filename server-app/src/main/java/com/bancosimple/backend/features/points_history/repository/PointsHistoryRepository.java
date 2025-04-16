package com.bancosimple.backend.features.points_history.repository;

import com.bancosimple.backend.features.points_history.model.PointsHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointsHistoryRepository extends JpaRepository<PointsHistory, Long> {
}
