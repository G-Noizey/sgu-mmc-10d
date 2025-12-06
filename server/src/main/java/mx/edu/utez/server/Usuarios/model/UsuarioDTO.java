package mx.edu.utez.server.Usuarios.model;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UsuarioDTO {

    @NotNull(message = "El id del usuario no puede estar nulo")
    private Long idUser;

    @NotBlank(message = "El nombre no puede estar vacio")
    private String nombre;

    @NotBlank(message = "El apellido paterno no puede estar vacio")
    private String apellidoP;

    @NotBlank(message = "El apellido materno no puede estar vacio")
    private String apellidoM;

    @NotBlank(message = "El correo no puede estar vacio")
    @Email(message = "Formato del correo electronico invalido")
    private String correo;

    @NotBlank(message = "El telefono no puede estar vacio")
    private String telefono;

    public UsuarioDTO() {
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoP() {
        return apellidoP;
    }

    public void setApellidoP(String apellidoP) {
        this.apellidoP = apellidoP;
    }

    public String getApellidoM() {
        return apellidoM;
    }

    public void setApellidoM(String apellidoM) {
        this.apellidoM = apellidoM;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
