package ual.dra.artifact19;

import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {

	@Autowired
	private CrudRepository repository;

	Controller(CrudRepository repository) {
		this.repository = repository;
	}

	// Devuelve todos los aditivos
	@GetMapping("/cartas")
	List<Carta> all() {
		return (List<Carta>) repository.findAll();
	}

	@PostMapping("/cartas")
	Carta newCarta(@RequestBody Carta carta) {
		return repository.save(carta);
	}

	// Busca por Id
	@GetMapping("/cartas/{id}")
	Carta getCarta(@PathVariable Long id) {
		return repository.findById(id)
			.orElseThrow(() -> new EntityNotFoundException());
	}
}
