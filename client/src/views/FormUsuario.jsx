import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { crearUsuario } from "../services/usuarioService";

export default function FormUsuario() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await crearUsuario(form);

    alert("Usuario creado con éxito");
    navigate("/");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "620px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Agregar Usuario</h3>

        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Página Principal
        </button>
      </div>

      <div className="card-modern shadow">
        <div className="card-modern-header">
          <h5 className="m-0">Nuevo Registro</h5>
        </div>

        <div className="card-modern-body">
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

            <button type="submit" className="btn-main w-100">
              Guardar Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
