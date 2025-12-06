package mx.edu.utez.server.Usuarios.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    Optional<Usuario> findByCorreo(String correo);
    boolean existsByCorreo(String correo);
}
