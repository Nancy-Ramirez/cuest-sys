import ver from "../../../../images/iconos/ver.png";
import editar from "../../../../images/iconos/editar.png";
import eliminar from "../../../../images/iconos/eliminar.png";
import agregar from "../../../../images/iconos/agregar.png";
import NavbarAdmin from "../../../NavbarAdmin";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";

export const TablaPreguntas = () => {
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
        Swal.fire("Eliminado", "La pregunta se ha removido", "success");
      }
    });
  };

  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-15 mx-10">
        <div className="flex justify-between pt-28 p-10 text-center text-3xl text-white">
          <Link
            to="/cuestionario/editar-cuestionario"
            className="flex justify-start"
          >
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Resumen de preguntas</h1>
          <div></div>
        </div>

        <div className="">
          <div className="flex items-center px-20 md:justify-end m-2">
            <Link
              to="/cuestionario/editar-cuestionario/nueva-pregunta"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button className="btn btn-verCuestionario rounded-full hover:bg-green-400">
                <img src={agregar} alt="" width="40px" />
              </button>
            </Link>
          </div>
        </div>

        <div className="m-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-colo4 dark:bg-gray-700 dark:text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Pregunta
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Puntuación
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/*primer registro */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        Dos características importantes delconocimiento
                        cientíico son
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">12</td>
                  <td className="px-6 py-8 flex justify-between content-center">
                    <Link
                      to="/cuestionario/ver-cuestionario"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario rounded-full hover:bg-green-400 ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </Link>
                    <Link
                      to="/cuestionario/editar-cuestionario/preguntas/preg"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario rounded-full hover:bg-green-400">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </Link>
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button
                        onClick={FuncionEliminar}
                        className="btn btn-eliminarCuestionario rounded-full hover:bg-green-400"
                      >
                        <img src={eliminar} alt="" width="25px" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/*Segundo registro */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        Una caracteristica de los conocimientos adquiridos sa
                        través de la práctica
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-8 flex justify-between content-center">
                    <Link
                      to="/cuestionario/ver-cuestionario"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario rounded-full hover:bg-green-400 ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </Link>
                    <Link
                      to="/cuestionario/editar-cuestionario/preguntas/preg"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario rounded-full hover:bg-green-400">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </Link>
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button
                        className="btn btn-eliminarCuestionario rounded-full hover:bg-green-400"
                        onClick={FuncionEliminar}
                      >
                        <img src={eliminar} alt="" width="25px" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/*Tercer registro */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        Un ejemplo de ciencia formal es el de
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-8 flex justify-between content-center">
                    <Link
                      to="/cuestionario/ver-cuestionario"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario rounded-full hover:bg-green-400 ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </Link>
                    <Link
                      to="/cuestionario/editar-cuestionario/preguntas/preg"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario rounded-full hover:bg-green-400">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </Link>
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button
                        className="btn btn-eliminarCuestionario rounded-full hover:bg-green-400"
                        onClick={FuncionEliminar}
                      >
                        <img src={eliminar} alt="" width="25px" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/*cuarto registro */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        Una aplicación de la ciencia y de la tecnología se da en
                        el campo de
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-8 flex justify-between content-center">
                    <Link
                      to="/cuestionario/ver-cuestionario"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-verCuestionario rounded-full hover:bg-green-400 ">
                        <img src={ver} alt="" width="30px" />
                      </button>
                    </Link>
                    <Link
                      to="/cuestionario/editar-cuestionario/preguntas/preg"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-editarCuestionario rounded-full hover:bg-green-400">
                        <img src={editar} alt="" width="25px" />
                      </button>
                    </Link>
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button
                        className="btn btn-eliminarCuestionario rounded-full hover:bg-green-400"
                        onClick={FuncionEliminar}
                      >
                        <img src={eliminar} alt="" width="25px" />
                      </button>
                    </div>
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
                1-4
              </span>{" "}
              de{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                10
              </span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <Link
                  to="/"
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
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="/"
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

