import SidebarAdmin from "../../Sidebar-menuAdmin";
import ver from "../../../images/iconos/ver.png";
import editar from "../../../images/iconos/editar.png";

const gestionarInsignia = () => {
  return (
    <main>
      <SidebarAdmin></SidebarAdmin>

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mr-10">
        <h1 className="p-5 text-center text-3xl text-white">Insignias</h1>

        <div className="m-5">
          <div className="flex items-center justify-end pb-4  m-2">
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
                placeholder="Buscar insignia"
              />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-green-400 dark:bg-gray-700 dark:text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Puntaje mínimo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Puntaje máximo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Sin clasificación</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">250</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    <a
                      href="/insignia/insignia"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="btn btn-editarCuestionario ">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Bronce I</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">251</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario ">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Bronce II</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">1001</td>
                  <td className="px-6 py-4">2500</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario ">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Bronce III</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">2501</td>
                  <td className="px-6 py-4">5000</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario ">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex items-center justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Mostrando{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>{" "}
              de{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                10
              </span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Anterior</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Siguiente</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default gestionarInsignia;
