import ver from "../../../images/iconos/ver.png";
import editar from "../../../images/iconos/editar.png";
import eliminar from "../../../images/iconos/eliminar.png";
import agregar from "../../../images/iconos/agregar.png";
import NavbarAdmin from "../../NavbarAdmin";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Paginacion } from "../../Paginacion";

const GestionarUsuario = () => {
  const [dataPage, setDataPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablaData, setTablaData] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const sigIndex = currentPage * dataPage;
  const primerIndex = sigIndex - dataPage;

  //Llamar api

  const [datosServidor, setDatosServidor] = useState([]);
  const totalData = datosServidor.length;
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
        setTablaData(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);

  //Busqueda

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaData.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.nie
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setDatosServidor(resultadosBusqueda);
  };

  const FuncionEliminar = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "El usuario se ha removido", "success");
      }
    });
  };

  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mx-12">
        <h1 className="pt-24 text-center text-3xl text-white">USUARIOS</h1>

        <div className="mx-5">
          <div className="flex items-center md:justify-end px-5 m-2">
            <a
              href="/usuario/usuario"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button className="btn btn-verCuestionario rounded-full hover:bg-green-400">
                <img src={agregar} alt="" width="40px" />
              </button>
            </a>
          </div>
        </div>

        <div className="m-5">
          <div className="flex items-center md:justify-end pb-4 m-2">
            <label htmlFor="table-search" className="sr-only">
              Buscar
            </label>
            <div className="relative">
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
                placeholder="Buscar usuario o rol"
                value={busqueda}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-colo5 dark:bg-gray-700 dark:text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rol
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {datosServidor &&
                  datosServidor
                    .map((usuario) => {
                      return (
                        <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="pl-3">
                              <div className="text-base font-semibold">
                                {usuario.nombre}
                              </div>
                            </div>
                          </th>
                          <td className="px-6 py-4">{usuario.correo}</td>
                          <td className="px-6 py-4">{usuario.rol }</td>
                          <td className="px-6 py-8 flex justify-between content-center">
                            <a
                              href="/usuario/editar-usuario"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <button className="btn btn-editarCuestionario ">
                                <img src={editar} alt="" width="25px" />
                              </button>
                            </a>
                            <button
                              onClick={FuncionEliminar}
                              className="btn btn-eliminarCuestionario "
                            >
                              <img src={eliminar} alt="" width="25px" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                    .slice(primerIndex, sigIndex)}
              </tbody>
            </table>
          </div>
          <Paginacion
            dataPage={dataPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalData={totalData}
          />
        </div>
      </section>
    </main>
  );
};

export default GestionarUsuario;
