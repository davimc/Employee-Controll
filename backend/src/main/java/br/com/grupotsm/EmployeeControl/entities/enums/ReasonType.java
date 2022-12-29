package br.com.grupotsm.EmployeeControl.entities.enums;

public enum ReasonType {

    ABSCENSE(1,"Ausência"),
    CERTIFICATE(2,"Atestado"),
    SUSPENSION(3, "Suspensão"),
    PATERNITY(5,"Paternidade"),
    VACATION(30,"Férias"),
    MATERNITY(120,"Maternidade");

    private int periodSuggestion;
    private String description;
    ReasonType(int periodSuggestion, String description) {
        this.periodSuggestion = periodSuggestion;
        this.description = description;
    }

    public int getPeriodSuggestion() {
        return periodSuggestion;
    }

    public void setPeriodSuggestion(int periodSuggestion) {
        this.periodSuggestion = periodSuggestion;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public static ReasonType toEnum(Integer cod) {
        if(cod == null) return null;
        for(ReasonType l: ReasonType.values())
            if(cod.equals(l.getPeriodSuggestion()))
                return l;
        throw new IllegalArgumentException("Motivo inválido");
    }
}
