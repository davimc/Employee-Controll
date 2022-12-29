package br.com.grupotsm.EmployeeControl.repositories;

import br.com.grupotsm.EmployeeControl.DTO.license.LicenseDTO;
import br.com.grupotsm.EmployeeControl.entities.License;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;


@Repository
public interface LicenseRepository extends JpaRepository<License, Long> {
    @Query("SELECT new br.com.grupotsm.EmployeeControl.DTO.license.LicenseDTO(obj.id, obj.employee.id, obj.employee.name, obj.created, obj.dtStart, obj.dtExpected, obj.dtEnd) " +
            "FROM License obj " +
            "WHERE (:justActives = False OR CURRENT_DATE BETWEEN obj.dtStart AND obj.dtExpected) " +
            "AND obj.dtStart BETWEEN :dtMin AND :dtMax")
    Page<LicenseDTO> findAllActives(Pageable pageable, LocalDate dtMin, LocalDate dtMax, boolean justActives);
}
