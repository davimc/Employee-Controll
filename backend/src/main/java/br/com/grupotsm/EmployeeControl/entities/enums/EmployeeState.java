package br.com.grupotsm.EmployeeControl.entities.enums;

import br.com.grupotsm.EmployeeControl.entities.Employee;

public enum EmployeeState {

    ACTIVE(1,"Ativo"),
    LICENSED(2,"Afastado"),
    RESIGNED(3, "Desligado");
    private int cod;
    private String description;
    EmployeeState(int cod, String description) {
        this.cod = cod;
        this.description = description;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public static EmployeeState toEnum(Integer cod) {
        if(cod == null) return null;
        for(EmployeeState l: EmployeeState.values())
            if(cod.equals(l.getCod()))
                return l;
        throw new IllegalArgumentException("Motivo inválido");
    }
    public static EmployeeState getState(Employee obj) {
        if(obj.getDtResignation() != null) return EmployeeState.RESIGNED;
        if(!obj.isActive()) return EmployeeState.LICENSED;
        return EmployeeState.ACTIVE;
    }
}
