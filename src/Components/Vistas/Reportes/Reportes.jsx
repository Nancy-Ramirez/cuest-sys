import "../Reportes/Reportes.css";
import SidebarAdmin from "../../Sidebar-menuAdmin";
import NavbarAdmin from "../../NavbarAdmin";

const gestionarReportes = () => {
  return (
    <main>
      <NavbarAdmin/>

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-15 mr-10">
        <h1 className="pt-20 text-center text-3xl text-white">Reportes</h1>

        <div className="filesReporte p-10 grid grid-cols-3 gap-9 place-content-stretch h-64  ">
          <a href="">
            <button className="btnReporte btnUsuarioMunicipio">
              Usuario por municipio
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnEdades">Edades</button>
          </a>

          <a href="">
            <button className="btnReporte btnFechaRegistro">
              Fecha de registro
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnInstituciones">
              Instituciones
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnTipoInstituciones">
              Tipo de Institución
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnSesiones">
              Sesiones Abiertas
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnGenero">
              Género
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnGrados">
              Grados
            </button>
          </a>

          <a href="">
            <button className="btnReporte btnMaterias">
              Materias
            </button>
          </a>

        </div>
      </section>
    </main>
  );
};

export default gestionarReportes;
