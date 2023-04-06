import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas Gestionar
import Cuestionario from "../Vistas/Cuestionario/Cuestionario";
import Estudiante from "../Vistas/Estudiantes/Estudiante";
import Insignia from "../Vistas/Insignias/Insignias";
import Institucion from "../Vistas/Instituciones/Instituciones";
import Usuario from "../Vistas/Usuarios/Usuarios";
import Reporte from "../Vistas/Reportes/Reportes";
import Unidad from "../Vistas/Unidades/Unidad";
import Reseña from "../Vistas/Reseñas/Reseñas";

//Rutas Agregar o Crear
import AgregarInstitucion from "../Vistas/Instituciones/AgregarInstitucion";

//Rutas Editar
import EditInsignia from "../Vistas/Insignias/EditarInsignia";
import EditarUsuario from "../Vistas/Usuarios/AgregarUsuarios";
import Inicio from "../Vistas/Inicio/Inicio";
import VerEstudiante from "../Vistas/Estudiantes/VerEstudiante";
import { Error } from "../PaginaError";
import {Login} from "../Vistas/Login/Login"
import CrearCuestionario from "../Vistas/Cuestionario/CrearCuestionario";
import EditarUnidad from "../Vistas/Unidades/CrearUnidad";
import { AgregarPreguntas } from "../Vistas/Cuestionario/Preguntas";

export default function Router() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reseña" element={<Reseña/>} />

        {/*Cuestionario */}
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/crear-cuestionario" element={<CrearCuestionario />} />
        <Route path="/agregar-preguntas" element={<AgregarPreguntas />} />

        {/*Estudiante */}
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/estudiante/estudiante/:id" element={<VerEstudiante />} />

        {/*Unidades */}
        <Route path="/unidad" element={<Unidad />} />
        <Route path="/unidad/unidad" element={<EditarUnidad />} />

        {/*Institución */}
        <Route path="/institucion" element={<Institucion />} />
        <Route
          path="/institucion/institucion"
          element={<AgregarInstitucion />}
        ></Route>

        {/*Usuario */}
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuario/usuario" element={<EditarUsuario />} />

        {/*Reporte */}
        <Route path="/reporte" element={<Reporte />} />

        {/*Insignias */}
        <Route path="/insignia/insignia" element={<EditInsignia />}></Route>
        <Route path="/insignia" element={<Insignia />} />

        {/*Errores */}
        <Route path="/*" element={<Error />} />

        {/*Login */}
        <Route path="/inicio" element={<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
