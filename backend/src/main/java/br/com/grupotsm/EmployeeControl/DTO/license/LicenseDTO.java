package br.com.grupotsm.EmployeeControl.DTO.license;

import br.com.grupotsm.EmployeeControl.entities.License;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;

public class LicenseDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private Long employeeId;
    private String employeeName;
    private LocalDate created;
    private LocalDate dtStart;
    private LocalDate dtExpected;
    private LocalDate dtEnd;


    public LicenseDTO() {
    }

    public LicenseDTO(Long id, Long employeeId, String employeeName, LocalDate created, LocalDate dtStart, LocalDate dtExpected, LocalDate dtEnd) {
        this.id = id;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.created = created;
        this.dtStart = dtStart;
        this.dtExpected = dtExpected;
        this.dtEnd = dtEnd;
    }

    public LicenseDTO(License obj) {
        id = obj.getId();
        employeeId = obj.getEmployee().getId();
        employeeName = obj.getEmployee().getName();
        created = obj.getCreated();
        dtStart = obj.getDtStart();
        dtExpected = obj.getDtExpected();
        dtEnd = obj.getDtEnd();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public LocalDate getDtStart() {
        return dtStart;
    }

    public void setDtStart(LocalDate dtStart) {
        this.dtStart = dtStart;
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
