import "../Reportes/Reportes.css";
import NavbarAdmin from "../../NavbarAdmin";
import { Icon } from "@iconify/react";
import { Municipio } from "../OpcionesReportes/Municipio";
import { Edades } from "../OpcionesReportes/Edades";
import { FechaRegistro } from "../OpcionesReportes/FechaRegistro";
import { InstitucionesR } from "../OpcionesReportes/InstitucionesR";

const gestionarReportes = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              REPORTES
            </h1>
          </div>
          <div className="flex flex-wrap m-4 ">
            {/* Usuario por municipio */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 bg-opacity-40">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white mb-4">
                  <Icon icon="lucide:moon" width="24" height="24" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Usuario por municipio
                </h2>
                <p className="leading-relaxed text-base">
                  <Municipio></Municipio>
                </p>
              </div>
            </div>

            {/* Edades */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 bg-opacity-40">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white mb-4">
                  <Icon icon="lucide:boxes" width="24" height="24" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Edades
                </h2>
                <p className="leading-relaxed text-base">
                  <Edades></Edades>
                </p>
              </div>
            </div>

            {/* Fecha de registro */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 bg-opacity-40">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white mb-4">
                  <Icon icon="lucide:calendar" width="24" height="24" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Fecha de registro
                </h2>
                <p className="leading-relaxed text-base">
                  <FechaRegistro></FechaRegistro>
                </p>
              </div>
            </div>

            {/* Instituciones */}
            <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
              <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 bg-opacity-40">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white mb-4">
                  <Icon icon="lucide:building-2" width="24" height="24" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Instituciones
                </h2>
                <p className="leading-relaxed text-base">
                  <InstitucionesR></InstitucionesR>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default gestionarReportes;
