import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas
import NavbarAdmin from "../NavbarAdmin";
import Cuestionario from "../Vistas/Cuestionario/Cuestionario"
import Estudiante from "../Vistas/Estudiantes/Estudiante"
import Insignia from "../Vistas/Insignias/Insignias";
import Institucion from "../Vistas/Instituciones/Instituciones";
import Materias from "../Vistas/Materias/Materias";


export default function Router() {
    return (
        <BrowserRouter>
            <NavbarAdmin/>
            <Routes>
                <Route path="/inicio" element={<h1>nananana</h1>} />
                <Route path="/cuestionario" element={<Cuestionario/>} />
                <Route path="/estudiante" element={<Estudiante/>} />
                <Route path="/insignia" element={<Insignia/>} />
                <Route path="/institucion" element={<Institucion/>} />
                <Route path="/materia" element={<Materias/>} />
                

                
                <Route path="*" element={<>Error404</>}></Route>
            </Routes>

            
        </BrowserRouter>
    )
}