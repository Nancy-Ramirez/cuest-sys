import { Link } from "react-router-dom";
import NavbarAdmin from "../../NavbarAdmin";
import { Icon } from "@iconify/react";

export const AgregarPreguntas = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-12 mx-24">
        <div className="flex justify-between p-12 text-center text-3xl text-white">
          <Link to="/crear-cuestionario" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Agregar Preguntas</h1>
          <div></div>
        </div>

        <form className="mb-8 flex justify-center space-x-48">
          <div>
            {/*Pregunta */}
            <div className="mb-6 w-96">
              <label
                htmlFor="pregunta"
                className="block text-sm font-medium text-white dark:text-white mb-1"
              >
                Pregunta
              </label>
              <input
                type="text"
                id="pregunta"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*Puntuación*/}
            <div className="mb-6 w-full">
              <label
                htmlFor="puntuacion"
                className="block text-sm font-medium text-white dark:text-white mb-1"
              >
                Puntuación
              </label>
              <input
                type="number"
                id="puntuacion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*AREA DE RESPUESTAS */}
            <div className="">
              <h2 className="text-lg text-white text-center p-2">
                Sección de respuestas
              </h2>
              {/*Respuesta 1*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta1"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 1
                </label>
                <input
                  type="text"
                  id="respuesta1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/*Respuesta 2*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta1"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 2
                </label>
                <input
                  type="text"
                  id="respuesta1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/*Respuesta 3*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta3"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 3
                </label>
                <input
                  type="text"
                  id="respuesta3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/*Respuesta 4*/}
              <div className="mb-6 w-full">
                <label
                  htmlFor="respuesta4"
                  className="block text-sm font-medium text-white dark:text-white mb-1"
                >
                  Respuesta 4
                </label>
                <input
                  type="text"
                  id="respuesta4"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/*Selecionar respuesta correcta*/}
            <div>
              <h2 className="text-lg text-white text-center p-2">
                ¿Cuál es la respuesta correcta?
              </h2>
              <div className="text-white flex justify-evenly">
                {/*Checkbox 1*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta1"
                    />{" "}
                    <span className="px-2">Respuesta 1</span>
                  </div>
                </div>
              
                {/*Checkbox 2*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta2"
                    />{" "}
                    <span className="px-2">Respuesta 2</span>
                  </div>
                </div>

                </div>
              <div className="text-white flex justify-between">
                {/*Checkbox 3*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta3"
                    />{" "}
                    <span className="px-2">Respuesta 3</span>
                  </div>
                </div>

                {/*Checkbox 4*/}
                <div className="w-full p-1 pt-4">
                  <div className="">
                    <input
                      type="radio"
                      className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      name="respcorrecta"
                      id="respcorrecta4"
                    />{" "}
                    <span className="px-2">Respuesta 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
              >
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
