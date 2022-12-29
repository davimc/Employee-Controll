package br.com.grupotsm.EmployeeControl.DTO.store;

import br.com.grupotsm.EmployeeControl.DTO.employee.EmployeeShortDTO;
import br.com.grupotsm.EmployeeControl.entities.Store;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StoreExpandedDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String typeName;

    private List<EmployeeShortDTO> employeesBeloging = new ArrayList<>();
    private List<EmployeeShortDTO> employeesCurrent = new ArrayList<>();

    public StoreExpandedDTO() {
    }

    public StoreExpandedDTO(Long id, String name, String typeName, List<EmployeeShortDTO> employeesBeloging, List<EmployeeShortDTO> employeesCurrent) {
        this.id = id;
        this.name = name;
        this.typeName = typeName;
        this.employeesBeloging = employeesBeloging;
        this.employeesCurrent = employeesCurrent;
    }

    public StoreExpandedDTO(Store obj) {
        id = obj.getId();
        name = obj.getName();
        typeName = obj.getType().getName();
        employeesCurrent = obj.getEmployeesCurrent().stream().map(EmployeeShortDTO::new).collect(Collectors.toList());
        employeesBeloging = obj.getEmployeesBeloging().stream().map(EmployeeShortDTO::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public List<EmployeeShortDTO> getEmployeesBeloging() {
        return employeesBeloging;
    }

    public void setEmployeesBeloging(List<EmployeeShortDTO> employeesBeloging) {
        this.employeesBeloging = employeesBeloging;
    }

    public List<EmployeeShortDTO> getEmployeesCurrent() {
        return employeesCurrent;
    }

    public void setEmployeesCurrent(List<EmployeeShortDTO> employeesCurrent) {
        this.employeesCurrent = employeesCurrent;
    }
}
