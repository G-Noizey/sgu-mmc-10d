import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { actualizarUsuario, obtenerUsuarios } from "../services/usuarioService";

export default function FormUsuarioEditar() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    correo: "",
    telefono: "",
  });

  useEffect(() => {
    cargarUsuario();
  }, []);

  const cargarUsuario = async () => {
    const response = await obtenerUsuarios();
    const lista = response.result || [];

    const usuario = lista.find((u) => u.idUser == id);

    if (!usuario) {
      alert("Usuario no encontrado");
      navigate("/");
      return;
    }

    setForm(usuario);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await actualizarUsuario(id, form);

    alert("Usuario actualizado con éxito");
    navigate("/");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "650px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold text-warning">Editar Usuario</h3>

        <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
          Página Principal
        </button>
      </div>

      <div className="card shadow border-warning" style={{ borderRadius: "14px" }}>
        <div className="card-header bg-warning text-white fw-bold">
          Modificar Datos
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control input-modern"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Apellido Paterno</label>
              <input
                type="text"
                className="form-control input-modern"
                name="apellidoP"
                value={form.apellidoP}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Apellido Materno</label>
              <input
                type="text"
                className="form-control input-modern"
                name="apellidoM"
                value={form.apellidoM}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control input-modern"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control input-modern"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-edit w-100">
              Actualizar Usuario
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
