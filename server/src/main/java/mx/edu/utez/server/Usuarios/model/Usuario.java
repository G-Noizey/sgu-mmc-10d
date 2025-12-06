package mx.edu.utez.server.Usuarios.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column(name = "nombre", columnDefinition = "VARCHAR(100)")
    private String nombre;

    @Column(name = "apellidoP", columnDefinition = "VARCHAR(100)")
    private String apellidoP;

    @Column(name = "apellidoM", columnDefinition = "VARCHAR(100)")
    private String apellidoM;

    @Column(name = "correo", columnDefinition = "VARCHAR(100)", unique = true)
    private String correo;

    @Column(name = "telefono", columnDefinition = "VARCHAR(10)")
    private String telefono;

    public Usuario() {
    }

    public Usuario(String nombre, String apellidoP, String apellidoM, String correo, String telefono) {
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.correo = correo;
        this.telefono = telefono;
    }

    public Usuario(Long idUser, String nombre, String apellidoP, String apellidoM, String correo, String telefono) {
        this.idUser = idUser;
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.correo = correo;
        this.telefono = telefono;
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
