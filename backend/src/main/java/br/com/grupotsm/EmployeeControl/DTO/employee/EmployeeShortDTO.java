package br.com.grupotsm.EmployeeControl.DTO.employee;

import br.com.grupotsm.EmployeeControl.entities.Employee;
import br.com.grupotsm.EmployeeControl.entities.enums.EmployeeState;

import java.io.Serializable;

public class EmployeeShortDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private long id;
    private String name;
    private String cpf;
    private String store;
    private String state;


    public EmployeeShortDTO() {
    }

    public EmployeeShortDTO(long id, String name, String cpf, String store, String state) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.store = store;
        this.state = state;
    }

    public EmployeeShortDTO(Employee obj) {
        id = obj.getId();
        name = obj.getName();
        cpf = obj.getCpf();
        store = obj.getStoreCurrent().getName();
        state = EmployeeState.getState(obj).getDescription();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
