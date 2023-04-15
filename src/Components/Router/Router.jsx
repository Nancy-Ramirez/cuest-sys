import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Error } from "../PaginaError";
import {Login} from "../Vistas/Login/Login";
import Inicio from "../Vistas/Inicio/Inicio";

//Rutas Cuestionario
import Cuestionario from "../Vistas/Cuestionario/Cuestionario";
import CrearCuestionario from "../Vistas/Cuestionario/Crear/CrearCuestionario";
import { AgregarPreguntas } from "../Vistas/Cuestionario/Crear/Preguntas";
import { VerCuestionario } from "../Vistas/Cuestionario/Ver/verCuestionario";

import { VerPreguntas } from "../Vistas/Cuestionario/Ver/verPreguntas";
import { TablaPreguntas } from "../Vistas/Cuestionario/Editar/TablaPreguntas";
import { EPregunta } from "../Vistas/Cuestionario/Editar/EPregunta";
import { AggNuevaPregunta } from "../Vistas/Cuestionario/Editar/NuevaPregunta";
import { EditarCuestionario } from "../Vistas/Cuestionario/Editar/editarCuestionario";
import { VerPregunta } from "../Vistas/Cuestionario/Ver/verPregunta";


//Rutas Estudiantes
import Estudiante from "../Vistas/Estudiantes/Estudiante";
import VerEstudiante from "../Vistas/Estudiantes/VerEstudiante";

//Rutas Insignias
import Insignia from "../Vistas/Insignias/Insignias";
import EditInsignia from "../Vistas/Insignias/EditarInsignia";

//Rutas Instituciones
import Institucion from "../Vistas/Instituciones/Instituciones";
import AgregarInstitucion from "../Vistas/Instituciones/AgregarInstitucion";
import { EditarInstitucion } from "../Vistas/Instituciones/editarInstitucion";

//Rutas Reportes
import Reporte from "../Vistas/Reportes/Reportes";

//Rutas Reseñas
import Reseña from "../Vistas/Reseñas/Reseñas";

//Rutas Unidades
import Unidad from "../Vistas/Unidades/Unidad";
import CrearUnidad from "../Vistas/Unidades/CrearUnidad";
import {EditarUnidad} from "../Vistas/Unidades/EditarUnidad";

//Rutas Usuario
import Usuario from "../Vistas/Usuarios/Usuarios";
import EditarUsuario from "../Vistas/Usuarios/AgregarUsuarios";




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reseña" element={<Reseña />} />

        {/*Cuestionario */}
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route
          path="/cuestionario/crear-cuestionario"
          element={<CrearCuestionario />}
        />
        <Route
          path="/cuestionario/crear-cuestionario/agregar-preguntas"
          element={<AgregarPreguntas />}
        />
        <Route
          path="/cuestionario/ver-cuestionario"
          element={<VerCuestionario />}
        />
        <Route path="/cuestionario/ver-preguntas" element={<VerPreguntas />} />
        <Route
          path="/cuestionario/editar-cuestionario"
          element={<EditarCuestionario />}
        />
        <Route
          path="/cuestionario/editar-cuestionario/preguntas"
          element={<TablaPreguntas />}
        />
        <Route
          path="/cuestionario/editar-cuestionario/preguntas/preg"
          element={<EPregunta />}
        />
        <Route
          path="/cuestionario/editar-cuestionario/nueva-pregunta"
          element={<AggNuevaPregunta />}
        />
        <Route
          path="/cuestionario/editar-cuestionario/preguntas/verP"
          element={<VerPregunta />}
        />

        {/*Estudiante */}
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/estudiante/estudiante/:id" element={<VerEstudiante />} />

        {/*Unidades */}
        <Route path="/unidad" element={<Unidad />} />
        <Route path="/unidad/unidad" element={<CrearUnidad />} />
        <Route path="/unidad/editar-unidad" element={<EditarUnidad />} />

        {/*Institución */}
        <Route path="/institucion" element={<Institucion />} />
        <Route
          path="/institucion/institucion"
          element={<AgregarInstitucion />}
        ></Route>
        <Route
          path="/institucion/editar-institucion"
          element={<EditarInstitucion />}
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
        <Route path="/inicio" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
