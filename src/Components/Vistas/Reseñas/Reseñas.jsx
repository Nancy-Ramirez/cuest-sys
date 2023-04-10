import ver from "../../../images/iconos/ver.png";
import editar from "../../../images/iconos/editar.png";
import NavbarAdmin from "../../NavbarAdmin";

const  gestionarReseña = () => {
  return (
    <main>
      <NavbarAdmin/>

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mx-12">
        <h1 className="pt-32 text-center text-3xl text-white">ÚLTIMAS RESEÑAS</h1>

        <div className="m-5">
          <div className="mx-24 my-12 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-colo5 dark:bg-gray-700 dark:text-white text-center">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Fecha
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Puntuación
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/*Dato 1 */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">04/04/2023</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">3.5</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                 {/*Dato 2 */}
                 <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">03/04/2023</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                {/*Dato 3 */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">03/04/2023</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">4.0</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </a>
                    
                  </td>
                </tr>

                {/*Dato 4 */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">01/04/2023</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">5.0</td>
                  <td className="px-6 py-8 flex justify-center content-center">
                    <a
                      href="#"
                      className="font-medium pr-5 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario ">
                        <img src={ver} alt="" width="30px" />
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

export default  gestionarReseña;
