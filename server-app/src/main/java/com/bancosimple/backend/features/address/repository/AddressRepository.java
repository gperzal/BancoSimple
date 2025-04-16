package com.bancosimple.backend.features.address.repository;

import com.bancosimple.backend.features.address.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {}
