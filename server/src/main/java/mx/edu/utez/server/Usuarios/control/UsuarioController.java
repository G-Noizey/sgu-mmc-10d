package mx.edu.utez.server.Usuarios.control;

import mx.edu.utez.server.Usuarios.model.UsuarioDTO;
import mx.edu.utez.server.utils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
// @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
@CrossOrigin(origins = {"*"})
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<Message> getUsuarios() {
        return usuarioService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> findById(@PathVariable Long id){
        return usuarioService.UsuarioById(id);
    }

    @PostMapping
    public ResponseEntity<Message> create(@RequestBody UsuarioDTO usuarioDTO){
        return usuarioService.crear(usuarioDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Message> update(@PathVariable Long id, @RequestBody UsuarioDTO usuarioDTO){
        usuarioDTO.setIdUser(id);
        return usuarioService.actualizar(usuarioDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Message> delete(@PathVariable Long id){
        return usuarioService.eliminar(id);
    }
}
