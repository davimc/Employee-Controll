package br.com.grupotsm.EmployeeControl.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_exchange_temporary")
public class ExchangeTemporary extends Exchange{
    private LocalDate dtExpected;
    private LocalDate dtEnd;

    public ExchangeTemporary() {
    }

    public ExchangeTemporary(Long id, LocalDate dtStart, Employee employeeGenerator, Employee employeeChanged, LocalDate dtExpected, LocalDate dtEnd) {
        super(id, dtStart, employeeGenerator, employeeChanged);
        this.dtExpected = dtExpected;
        this.dtEnd = dtEnd;
    }

    public LocalDate getDtExpected() {
        return dtExpected;
    }

    public void setDtExpected(LocalDate dtExpected) {
        this.dtExpected = dtExpected;
    }

    public LocalDate getDtEnd() {
        return dtEnd;
    }

    public void setDtEnd(LocalDate dtEnd) {
        this.dtEnd = dtEnd;
    }
}
