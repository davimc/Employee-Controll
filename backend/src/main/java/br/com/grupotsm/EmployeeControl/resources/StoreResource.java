package br.com.grupotsm.EmployeeControl.resources;

import br.com.grupotsm.EmployeeControl.DTO.store.StoreDTO;
import br.com.grupotsm.EmployeeControl.DTO.store.StoreExpandedDTO;
import br.com.grupotsm.EmployeeControl.entities.enums.StoreType;
import br.com.grupotsm.EmployeeControl.services.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/stores")
public class StoreResource {

    @Autowired
    private StoreService service;

    @GetMapping("/types")
    public ResponseEntity<List<StoreType>> types() {
        return ResponseEntity.ok().body(service.getTypes());
    }
    @GetMapping()
    public ResponseEntity<List<StoreDTO>> findAll(@RequestParam(name = "name", defaultValue = "") String name,
                                                  @RequestParam(name = "type", defaultValue = "0") Integer type) {
        return ResponseEntity.ok().body(service.findStores(name,type));
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<StoreExpandedDTO> findExpanded(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.findExpanded(id));
    }
}
