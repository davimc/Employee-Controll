package br.com.grupotsm.EmployeeControl.repositories;

import br.com.grupotsm.EmployeeControl.DTO.store.StoreExpandedDTO;
import br.com.grupotsm.EmployeeControl.entities.Store;
import br.com.grupotsm.EmployeeControl.entities.enums.StoreType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
    @Query("SELECT obj FROM Store obj " +
            "WHERE (:type = 0 OR obj.type = :type ) " +
            "AND (UPPER(obj.name) LIKE UPPER(CONCAT(:name,'%')))")
    List<Store> findByNameOrType(String name, Integer type);
}
