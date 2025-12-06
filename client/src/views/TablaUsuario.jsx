import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuarios, eliminarUsuario } from "../services/usuarioService";

export default function TablaUsuario() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const response = await obtenerUsuarios();
    setUsuarios(response.result || []);
  };

  const handleEliminar = async (id) => {
    if (!confirm("¿Seguro de eliminar este usuario?")) return;

    await eliminarUsuario(id);
    cargarDatos();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Usuarios</h2>

        <button className="btn-main" onClick={() => navigate("/agregar")}>
          Agregar Usuario
        </button>
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-hover">
          <thead className="table-header-gradient">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((u) => (
              <tr key={u.idUser}>
                <td>{u.idUser}</td>
                <td>{u.nombre} {u.apellidoP} {u.apellidoM}</td>
                <td>{u.correo}</td>
                <td>{u.telefono}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => navigate(`/editar/${u.idUser}`)}
                  >
                    Actualizar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleEliminar(u.idUser)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
