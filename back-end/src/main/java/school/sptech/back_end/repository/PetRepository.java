package school.sptech.back_end.repository;

import org.springframework.data.repository.CrudRepository;
import school.sptech.back_end.entity.Pet;

public interface PetRepository extends CrudRepository<Pet, Long> {
    // O Spring Data JDBC já implementa save(), findAll(), findById(), deleteById(), etc.
}
