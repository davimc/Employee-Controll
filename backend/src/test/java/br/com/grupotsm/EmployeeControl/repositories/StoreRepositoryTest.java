package br.com.grupotsm.EmployeeControl.repositories;

import br.com.grupotsm.EmployeeControl.entities.Store;
import br.com.grupotsm.EmployeeControl.entities.enums.StoreType;
import br.com.grupotsm.EmployeeControl.test.Factory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.Optional;

@DataJpaTest
public class StoreRepositoryTest {

    @Autowired
    private StoreRepository repository;
    private long existingId;
    private long nonExistingId;
    private long dependentId;
    private long countTotalIds;

    @BeforeEach
    public void setUp() {
        existingId = 1L;
        nonExistingId = 1000L;
        dependentId = 4L;
        countTotalIds = repository.count();
    }

    @Test
    public void findByIdShouldReturnNonEmptyOptionalStoreWhenIdExists() {
        Assertions.assertDoesNotThrow(() -> {
            Optional<Store> obj = repository.findById(existingId);
            Assertions.assertTrue(obj.isPresent());
            Assertions.assertEquals(obj.get().getId(), existingId);
            Assertions.assertEquals(obj.get().getName(), "Italy");
            Assertions.assertEquals(obj.get().getType(), StoreType.toEnum(1));
        });
    }
    @Test
    public void findByIdShouldReturnEmptyOptionalStoreWhenIdDoesNotExist() {
        Assertions.assertDoesNotThrow(()-> {
            Optional<Store> obj = repository.findById(nonExistingId);
            Assertions.assertFalse(obj.isPresent());
        });
    }
    @Test
    public void saveShouldCreateAndAutoincrementIdWhenIdIsNull() {
        Store obj = Factory.createStore();
        obj.setId(null);
        obj = repository.save(obj);

        Assertions.assertNotNull(obj.getId());
        Assertions.assertEquals(countTotalIds+1, obj.getId());
    }

    @Test
    public void deleteShouldDeleteStoreWhenIdExists() {


        repository.deleteById(existingId);

        Optional<Store> obj = repository.findById(existingId);
        Assertions.assertFalse(obj.isPresent());
    }

    @Test
    public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExist() {


        Assertions.assertThrows(EmptyResultDataAccessException.class,()->{
            repository.deleteById(nonExistingId);
        });
    }
}
