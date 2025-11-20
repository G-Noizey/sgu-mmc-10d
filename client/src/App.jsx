import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get("http://localhost:8081/sgu-api/users").then((res) => setUsers(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId === null) {
      axios.post("http://localhost:8081/sgu-api/users", form).then(() => {
        loadUsers();
        setForm({ nombre: "", correo: "", telefono: "" });
      });
    } else {
      axios.put(`http://localhost:8081/sgu-api/users/${editingId}`, form).then(() => {
        loadUsers();
        setEditingId(null);
        setForm({ nombre: "", correo: "", telefono: "" });
      });
    }
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8081/sgu-api/users/${id}`).then(() => loadUsers());
  };

  const editUser = (user) => {
    setEditingId(user.id);
    setForm({
      nombre: user.nombre,
      correo: user.correo,
      telefono: user.telefono,
    });
  };

  return (
    <div className="container py-4">

      <h2 className="mb-4 text-center fw-bold text-primary">Gestión de Usuarios</h2>

      {/* Formulario */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-4">
              <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                className="form-control"
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </div>

            <div className="col-md-4">
              <input
                type="email"
                placeholder="Correo"
                value={form.correo}
                className="form-control"
                onChange={(e) => setForm({ ...form, correo: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                placeholder="Teléfono"
                value={form.telefono}
                className="form-control"
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              />
            </div>

            <div className="col-md-1 d-grid">
              <button className="btn btn-success">
                {editingId ? "Actualizar" : "Guardar"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Tabla de usuarios */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover table-bordered mb-0">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th className="text-center">Acción</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.telefono}</td>

                  <td className="text-center">
                    <button
                      onClick={() => editUser(u)}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => deleteUser(u.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-3 text-muted">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default App;
