package br.com.grupotsm.EmployeeControl.resources;

import br.com.grupotsm.EmployeeControl.DTO.employee.EmployeeDTO;
import br.com.grupotsm.EmployeeControl.DTO.employee.EmployeeShortDTO;
import br.com.grupotsm.EmployeeControl.entities.Employee;
import br.com.grupotsm.EmployeeControl.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeResource {

    @Autowired
    private EmployeeService service;

    // TODO for now isAvailable isn't work
    @GetMapping
    public ResponseEntity<Page<EmployeeShortDTO>> findAll(
            Pageable pageable,
            @RequestParam(name = "avaiable", defaultValue = "false") boolean isAvailable) {
        return ResponseEntity.ok().body(service.findAll(pageable, isAvailable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> findById(@PathVariable Long id) {

        return ResponseEntity.ok().body(service.findById(id));
    }
}
