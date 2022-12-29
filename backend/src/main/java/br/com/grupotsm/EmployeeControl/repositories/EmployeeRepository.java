package br.com.grupotsm.EmployeeControl.repositories;

import br.com.grupotsm.EmployeeControl.entities.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByCpf(String cpf);
    // TODO to implement available employees in findAllActives search
    // Available is when there are no licenses actives
    @Query("SELECT obj FROM Employee obj " +
            "WHERE (obj.dtResignation IS NULL) " +
            "ORDER BY obj.storeCurrent.name")
    Page<Employee> findAllActives(Pageable pageable);
}
