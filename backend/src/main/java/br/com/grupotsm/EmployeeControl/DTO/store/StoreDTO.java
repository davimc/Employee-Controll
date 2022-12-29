package br.com.grupotsm.EmployeeControl.DTO.store;

import br.com.grupotsm.EmployeeControl.entities.Store;

import java.io.Serializable;

public class StoreDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String type;
    private Integer qttBeloging;
    private Integer qttCurrent;

    public StoreDTO() {
    }

    public StoreDTO(Long id, String name, String type, Integer qttBeloging, Integer qttCurrent) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.qttBeloging = qttBeloging;
        this.qttCurrent = qttCurrent;
    }

    public StoreDTO(Store obj) {
        this.id = obj.getId();
        this.name = obj.getName();
        this.type = obj.getType().getName();
        qttBeloging = obj.getEmployeesBeloging().size();
        qttCurrent = obj.getEmployeesCurrent().size();
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getQttBeloging() {
        return qttBeloging;
    }

    public void setQttBeloging(Integer qttBeloging) {
        this.qttBeloging = qttBeloging;
    }

    public Integer getQttCurrent() {
        return qttCurrent;
    }

    public void setQttCurrent(Integer qttCurrent) {
        this.qttCurrent = qttCurrent;
    }
}
