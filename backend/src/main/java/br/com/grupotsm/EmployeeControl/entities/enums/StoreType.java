package br.com.grupotsm.EmployeeControl.entities.enums;

public enum StoreType {

    SUBWAY(1,"Subway"),
    COFFEE_SHOP(2, "Cafeteria"),
    RESTAURANT(3, "Restaurante");

    private int cod;
    private String name;
    StoreType(int cod, String name) {
        this.cod = cod;
        this.name = name;
    }

    public int getCod() {
        return cod;
    }

    public void setCod(int cod) {
        this.cod = cod;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static StoreType toEnum(Integer cod) {
        if(cod == null) return null;
        for(StoreType s: StoreType.values())
            if(cod.equals(s.getCod()))
                return s;
        throw new IllegalArgumentException("Tipo de Loja inválida");
    }
}
