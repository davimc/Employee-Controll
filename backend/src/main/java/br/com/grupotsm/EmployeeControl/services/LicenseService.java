package br.com.grupotsm.EmployeeControl.services;

import br.com.grupotsm.EmployeeControl.DTO.license.LicenseDTO;
import br.com.grupotsm.EmployeeControl.entities.Employee;
import br.com.grupotsm.EmployeeControl.entities.License;
import br.com.grupotsm.EmployeeControl.repositories.LicenseRepository;
import br.com.grupotsm.EmployeeControl.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


@Service
public class LicenseService {
    @Autowired
    private LicenseRepository repository;

    @Transactional(readOnly = true)
    public Page<LicenseDTO> findAllActives(Pageable pageable, String min, String max, boolean justActives) {
        LocalDate dtMin = min.equals("") ? LocalDate.now().minusYears(1)
                : LocalDate.parse(min);
        LocalDate dtMax = max.equals("") ? LocalDate.now()
                : LocalDate.parse(max);
        Page<LicenseDTO> dto = repository.findAllActives(pageable, dtMin, dtMax, justActives);

        return dto;
    }
    @Transactional(readOnly = true)
    public LicenseDTO findById(Long id) {
        License obj = repository.findById(id).orElseThrow(() -> {
            throw new ObjectNotFoundException(id, Employee.class);
        });
        return new LicenseDTO(obj);
    }
}
