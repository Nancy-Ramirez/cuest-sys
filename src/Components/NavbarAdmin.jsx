import { Link } from "react-router-dom";
import menu from "../images/iconos/menu.png"


const NavbarAdmin = () => {
  return (
    <div className="bg-colo2 opacity-2 border-gray-200 mx-auto fixed w-full flex-wrap z-20 top-0">
      <div className="wrapper justify-between">
        <nav>
          <a href="/" className="logo">
            LOGO
          </a>
          <input type="checkbox" className="" id="toogle" />
          <label htmlFor="toogle">
            <img src={menu} width="25px" alt="" />
          </label>
          <div className="menu justify-between">
            <ul>
              <li>
                <Link to="/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/cuestionario">Cuestionario</Link>
              </li>
              <li>
                <Link to="/institucion">Institución</Link>
              </li>
              <li>
                <Link to="/insignia">Insignia</Link>
              </li>
              <li>
                <Link to="/estudiante">Estudiante</Link>
              </li>
              <li>
                <Link to="/usuario">Usuarios</Link>
              </li>
              <li>
                <Link to="/reporte">Reportes</Link>
              </li>
              <li>
                <Link to="/">Salir</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavbarAdmin;
