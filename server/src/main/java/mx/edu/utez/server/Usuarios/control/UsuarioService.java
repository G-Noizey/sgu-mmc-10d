package mx.edu.utez.server.Usuarios.control;

import mx.edu.utez.server.Usuarios.model.Usuario;
import mx.edu.utez.server.Usuarios.model.UsuarioDTO;
import mx.edu.utez.server.Usuarios.model.UsuarioRepository;
import mx.edu.utez.server.utils.Message;
import mx.edu.utez.server.utils.TypesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> listar(){
        List<Usuario> usuarios = usuarioRepository.findAll();
        return new ResponseEntity<>(new Message("Lista de usuarios", TypesResponse.SUCCESS, usuarios), HttpStatus.OK);

    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> UsuarioById(Long id){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if(usuario.isPresent()){
            return new ResponseEntity<>(new Message("Usuario encontrado", TypesResponse.SUCCESS, usuario.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("Usuario no encontrado", TypesResponse.WARNING, null), HttpStatus.NOT_FOUND);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> crear(UsuarioDTO dto){
        Usuario usuario = new Usuario(
                dto.getNombre(),
                dto.getApellidoP(),
                dto.getApellidoM(),
                dto.getCorreo(),
                dto.getTelefono()
        );

        usuario =  usuarioRepository.saveAndFlush(usuario);
        return new ResponseEntity<>(new Message("Usuario registrado correctamente", TypesResponse.SUCCESS, usuario), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> actualizar(UsuarioDTO dto){
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(dto.getIdUser());

        Usuario usuario = optionalUsuario.get();

        usuario.setNombre(dto.getNombre());
        usuario.setApellidoP(dto.getApellidoP());
        usuario.setApellidoM(dto.getApellidoM());
        usuario.setCorreo(dto.getCorreo());
        usuario.setTelefono(dto.getTelefono());

        usuarioRepository.saveAndFlush(usuario);

        return new ResponseEntity<>(new Message("Usuario actualizado correctamente", TypesResponse.SUCCESS, usuario), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> eliminar(Long id) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);

        if (!optionalUsuario.isPresent()) {
            return new ResponseEntity<>(
                    new Message("Usuario no encontrado", TypesResponse.WARNING, null),
                    HttpStatus.NOT_FOUND
            );
        }

        try {
            usuarioRepository.deleteById(id);
            return new ResponseEntity<>(
                    new Message("Usuario eliminado correctamente", TypesResponse.SUCCESS, null),
                    HttpStatus.OK
            );
        } catch (Exception e) {
            return new ResponseEntity<>(
                    new Message("Error al eliminar el usuario", TypesResponse.ERROR, e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
