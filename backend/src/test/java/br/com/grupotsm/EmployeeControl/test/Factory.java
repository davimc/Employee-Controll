package br.com.grupotsm.EmployeeControl.test;

import br.com.grupotsm.EmployeeControl.DTO.employee.EmployeeDTO;
import br.com.grupotsm.EmployeeControl.DTO.store.StoreDTO;
import br.com.grupotsm.EmployeeControl.entities.Employee;
import br.com.grupotsm.EmployeeControl.entities.License;
import br.com.grupotsm.EmployeeControl.entities.Store;
import br.com.grupotsm.EmployeeControl.entities.enums.ReasonType;
import br.com.grupotsm.EmployeeControl.entities.enums.StoreType;

import java.time.LocalDate;

public class Factory {

    public static Employee createEmployee() {
        Employee obj =  new Employee(1L, "Davi", 'M', "davimatosc@hotmail.com", "607.272.893-65", "123456", LocalDate.now(), LocalDate.of(1995,06,02), new Store());
        return obj;
    }

    public static EmployeeDTO createEmployeeDTO() {
        Employee obj = createEmployee();
        EmployeeDTO dto = new EmployeeDTO(obj);
        dto.setId(1L);

        return dto;
    }

    public static License createLicenseActive() {
        License obj = new License(1L, LocalDate.now(), LocalDate.now().plusMonths(1L), null, ReasonType.VACATION, createEmployee());
        return obj;
    }

    public static License createLicenseInactive() {
        License obj = new License(1L, LocalDate.now().minusDays(4), LocalDate.now(),LocalDate.now().minusDays(3), ReasonType.ABSCENSE, new Employee());
        return obj;
    }
    /*

    public static EmployeeDTO createLicenseDTO() {
        Employee obj = createEmployee();
        EmployeeDTO dto = new EmployeeDTO(obj);
        dto.setId(1L);

        return dto;
    }
    */
    public static Store createStore() {
        Store obj =  new Store(1L, "Narnia", StoreType.SUBWAY);
        return obj;
    }

    public static StoreDTO createStoreDTO() {
        Store obj = createStore();
        StoreDTO dto = new StoreDTO(obj);
        dto.setId(1L);

        return dto;
    }
    /*public static Exchange createExchange() {
        Employee otherEmp = createEmployee();
        otherEmp.setName("Saad");
        Store otherStore = createStore();
        otherStore.setName("Hogwarts");
        Exchange obj =  new Exchange(1L, createEmployee(), otherEmp, createStore(), otherStore, LocalDate.now());
        return obj;
    }*/


}
