import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png";
import logo from "../images/Logo.png";

import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavbarAdmin = () => {
  const cookies = new Cookies();
  const Navigate = useNavigate();

  const validateSSession = cookies.get("tokenSessionApp");

  console.log(validateSSession);

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Salir",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      
      if (result.isConfirmed) {
        cookies.remove("tokenSessionApp")
        Swal.fire(
          "¡Nos vemos!",
          "",
          setTimeout(() => {
            window.location.href = "http://localhost:3000/";
          }, 2000)
          ,
          
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="bg-colo2 opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
      <div className="wrapper justify-between">
        <nav>
          <a href="/inicio" className="logo">
            <img src={logo} width="60px" alt="" />
          </a>
          <input type="checkbox" className="" id="toogle" />
          <label htmlFor="toogle">
            <img src={menu} width="25px" alt="" />
          </label>
          <div className="menu justify-between">
            <ul>
              {(validateSSession.type === 1 || validateSSession.type === 2) && (
                <li>
                  <Link to="/inicio">Inicio</Link>
                </li>
              )}

              {(validateSSession.type === 1 || validateSSession.type === 2) && (
                <li>
                  <Link to="/cuestionario">Cuestionario</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/institucion">Institución</Link>
                </li>
              )}

              {(validateSSession.type === 1 || validateSSession.type === 2) && (
                <li>
                  <Link to="/unidad">Unidad</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/insignia">Insignia</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/estudiante">Estudiante</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/usuario">Usuarios</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/reporte">Reportes</Link>
                </li>
              )}

              {validateSSession.type === 1 && (
                <li>
                  <Link to="/reseña">Reseñas</Link>
                </li>
              )}

              <li>
                <Link onClick={() => cerrarSesion()}>Salir</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavbarAdmin;
