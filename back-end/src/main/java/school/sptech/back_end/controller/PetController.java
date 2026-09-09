package school.sptech.back_end.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import school.sptech.back_end.entity.Pet;
import school.sptech.back_end.repository.PetRepository;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    private final PetRepository petRepository;

    // Injeção de dependência via construtor
    public PetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    // GET http://localhost:8080/pets -> lista todos os pets cadastrados
    @GetMapping
    public ResponseEntity<List<Pet>> listar() {
        List<Pet> pets = (List<Pet>) petRepository.findAll();
        return ResponseEntity.ok(pets);
    }

    // POST http://localhost:8080/pets -> cadastra um novo pet
    @PostMapping
    public ResponseEntity<Pet> cadastrar(@RequestBody Pet pet) {
        Pet petSalvo = petRepository.save(pet);
        return ResponseEntity.status(HttpStatus.CREATED).body(petSalvo);
    }
}
