import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Error } from "../PaginaError";
import {Login} from "../Vistas/Login/Login";
import Inicio from "../Vistas/Inicio/Inicio";

//Rutas Cuestionario
import Cuestionario from "../Vistas/Cuestionario/Cuestionario";
import CrearCuestionario from "../Vistas/Cuestionario/CrearCuestionario";
import { AgregarPreguntas } from "../Vistas/Cuestionario/Preguntas";
import { VerCuestionario } from "../Vistas/Cuestionario/verCuestionario";

//Rutas Estudiantes
import Estudiante from "../Vistas/Estudiantes/Estudiante";
import VerEstudiante from "../Vistas/Estudiantes/VerEstudiante";

//Rutas Insignias
import Insignia from "../Vistas/Insignias/Insignias";
import EditInsignia from "../Vistas/Insignias/EditarInsignia";

//Rutas Instituciones
import Institucion from "../Vistas/Instituciones/Instituciones";
import AgregarInstitucion from "../Vistas/Instituciones/AgregarInstitucion";

//Rutas Reportes
import Reporte from "../Vistas/Reportes/Reportes";

//Rutas Reseñas
import Reseña from "../Vistas/Reseñas/Reseñas";

//Rutas Unidades
import Unidad from "../Vistas/Unidades/Unidad";
import EditarUnidad from "../Vistas/Unidades/CrearUnidad";

//Rutas Usuario
import Usuario from "../Vistas/Usuarios/Usuarios";
import EditarUsuario from "../Vistas/Usuarios/AgregarUsuarios";



export default function Router() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reseña" element={<Reseña/>} />

        {/*Cuestionario */}
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/cuestionario/crear-cuestionario" element={<CrearCuestionario />} />
        <Route path="/cuestionario/crear-cuestionario/agregar-preguntas" element={<AgregarPreguntas />} />
        <Route path="/cuestionario/ver-cuestionario" element={<VerCuestionario />} />


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
