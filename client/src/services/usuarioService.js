const ENV = import.meta.env;

const API_URL = `${ENV.VITE_API_PROTOCOL}://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

export async function obtenerUsuarios() {
    const response = await fetch(`${API_URL}`);
    return await response.json();
}

export async function crearUsuario(usuario) {
  const resp = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return resp.json();
}

export async function actualizarUsuario(id, usuario) {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return resp.json();
}

export async function eliminarUsuario(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
