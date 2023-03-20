import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas Gestionar
import Cuestionario from "../Vistas/Cuestionario/Cuestionario";
import Estudiante from "../Vistas/Estudiantes/Estudiante";
import Insignia from "../Vistas/Insignias/Insignias";
import Institucion from "../Vistas/Instituciones/Instituciones";
import Materia from "../Vistas/Materias/Materias";
import Usuario from "../Vistas/Usuarios/Usuarios";
import Reporte from "../Vistas/Reportes/Reportes";

//Rutas Agregar o Crear
import AgregarInstitucion from "../Vistas/Instituciones/AgregarInstitucion";

//Rutas Editar
import EditInsignia from "../Vistas/Insignias/EditarInsignia";
import EditarMateria from "../Vistas/Materias/AgregarMateria";
import EditarUsuario from "../Vistas/Usuarios/AgregarUsuarios";
import Inicio from "../Vistas/Inicio/Inicio";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />

        {/*Cuestionario */}
        <Route path="/cuestionario" element={<Cuestionario />} />

        {/*Estudiante */}
        <Route path="/estudiante" element={<Estudiante />} />

        {/*institución */}
        <Route path="/institucion" element={<Institucion />} />
        <Route
          path="/institucion/institucion"
          element={<AgregarInstitucion />}
        ></Route>

        {/*Materia */}
        <Route path="/materia" element={<Materia />} />
        <Route path="/materia/materia" element={<EditarMateria />} />

        {/*Usuario */}
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuario/usuario" element={<EditarUsuario />} />

        {/*Reporte */}
        <Route path="/reporte" element={<Reporte />} />

        {/*Insignias */}
        <Route path="/insignia/insignia" element={<EditInsignia />}></Route>
        <Route path="/insignia" element={<Insignia />} />

        {/*Errores */}

        <Route path="*" element={<>Error404</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
