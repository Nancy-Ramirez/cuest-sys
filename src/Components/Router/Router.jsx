import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas Gestionar
import Cuestionario from "../Vistas/Cuestionario/Cuestionario"
import Estudiante from "../Vistas/Estudiantes/Estudiante"
import Insignia from "../Vistas/Insignias/Insignias";
import Institucion from "../Vistas/Instituciones/Instituciones";
import Materia from "../Vistas/Materias/Materias";
import Usuario from "../Vistas/Usuarios/Usuarios";
import Reporte from "../Vistas/Reportes/Reportes";

//Rutas Agregar o Crear
import AgregarInstitucion from "../Vistas/Instituciones/AgregarInstitucion";

//Rutas Editar
import EditInsignia from "../Vistas/Insignias/EditarInsignia"




export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/inicio" element={<h1>nananana</h1>} />
                <Route path="/cuestionario" element={<Cuestionario/>} />
                <Route path="/estudiante" element={<Estudiante/>} />
                <Route path="/insignia" element={<Insignia/>} />
                <Route path="/institucion" element={<Institucion/>} />
                <Route path="/materia" element={<Materia/>} />
                <Route path="/usuario" element={<Usuario/>} />
                <Route path="/reporte" element={<Reporte/>} />

                //*Subpantallas
                <Route path="/insignia/insignia" element={<EditInsignia/>}></Route>
                <Route path="/institucion/institucion" element={<AgregarInstitucion/>}></Route>
                

                
                <Route path="*" element={<>Error404</>}></Route>
            </Routes>

            
        </BrowserRouter>
    )
}