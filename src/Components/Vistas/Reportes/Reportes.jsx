import "../Reportes/Reportes.css";
import NavbarAdmin from "../../NavbarAdmin";

const gestionarReportes = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="shadow-md sm:rounded-lg  mx-12 md:flex flex-col">
        <h1 className="pt-24 text-center text-3xl text-white">Reportes</h1>

        <div className="filesReporte p-10 md:grid md:grid-cols-3 gap-9 place-content-stretch flex flex-col  ">
          <a href="/" className="pb-10">
            <button className="btnReporte btnUsuarioMunicipio" >
              Usuario por municipio
            </button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnEdades">Edades</button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnFechaRegistro">
              Fecha de registro
            </button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnInstituciones">
              Instituciones
            </button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnTipoInstituciones">
              Tipo de Institución
            </button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnSesiones">
              Sesiones Abiertas
            </button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnGenero">Género</button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnGrados">Grados</button>
          </a>

          <a href="/" className="pb-10">
            <button className="btnReporte btnMaterias">Materias</button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default gestionarReportes;
