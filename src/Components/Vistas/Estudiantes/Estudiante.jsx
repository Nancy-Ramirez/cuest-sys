import imm1 from "../../../images/iconos/estudiante.png";
import ver from "../../../images/iconos/ver.png";
import eliminar from "../../../images/iconos/eliminar.png";
import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Paginacion } from "../../Paginacion";

export const Estudiante = () => {
  
  const [datosServidor, setDatosServidor] = useState([]);
  console.log("Listar datos", datosServidor);
  useEffect(() => {
    async function getInfo() {
      const url = "http://localhost:8000/api/estudiante/listar";

      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        console.log(resp.data);
        setDatosServidor(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);

  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mx-12">
        <h1 className="pt-24 text-center text-3xl text-white">ESTUDIANTES</h1>

        <div className="m-5">
          <div className="flex items-center md:justify-end pb-4 m-2">
            <label htmlFor="table-search" className="sr-only">
              Buscar
            </label>
            <div className="relative md:content-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black dark:text-black"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-black border border-gray-700 rounded-lg w-80 bg-green-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar estudiante"
              />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-colo5 dark:bg-gray-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NIE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Institución
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Municipio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {datosServidor.map((alumno) => {
                  return (
                    <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src={imm1}
                          alt="Jese imm"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {alumno.nombre}
                          </div>
                          <div className="font-normal text-gray-500 hover:text-white">
                            {alumno.correo}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{alumno.nie}</td>
                      <td className="px-6 py-4">
                        {" "}
                        {alumno.institucion}
                      </td>
                      <td className="px-6 py-4">{alumno.municipio}</td>
                      <td className="px-6 py-8 flex justify-between content-center">
                        <Link
                          to="/estudiante/estudiante/:id"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <button className="btn btn-verEstudiante ">
                            <img src={ver} alt="" width="30px" />
                          </button>
                        </Link>
                        <button className="btn btn-eliminarCuestionario ">
                          <img src={eliminar} alt="" width="25px" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
          <Paginacion/>
        </div>
      </section>
    </main>
  );
};

