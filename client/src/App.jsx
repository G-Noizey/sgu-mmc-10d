import './App.css'
import TablaUsuario from './views/TablaUsuario'
import FormUsuario from './views/FormUsuario'
import FormUsuarioEditar from './views/FormUsuarioEditar';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand">SGU-MMC-10D</a>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<TablaUsuario/>}/>
          <Route path="/agregar" element={<FormUsuario/>}/>
          <Route path="/editar/:id" element={<FormUsuarioEditar />} />
        </Routes>
      </div>
    </>
  )
}

export default App
