import { useState } from "react";

export const Genero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="Contra ModalGenero p-2 ">
        <a
          className="btnContra btnModalGenero px-6 py-3 rounded-md"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Seleccionar
        </a>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto p-18">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen  py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-gray-100 rounded-md shadow-lg">
                <div className="mt-2 py-5 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-medium text-center text-gray-800">
                    Reportes de usuarios por género
                  </h4>

                  {/*Opciones de busqueda */}

                  {/*Genero */}
                  <div className="w-full p-1 ">
                    <label
                      htmlFor="repGenero"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Género
                    </label>

                    <div className="">
                      <select
                        className="rounded-lg border border-black w-full"
                        name="repGenero"
                        id="repGenero"
                      >
                        <option id="">Selecione</option>
                        <option id="F">Femenino</option>
                        <option id="M">Masculino</option>
                      </select>
                    </div>
                  </div>
                  {/*TODOS */}
                  <div className="w-full p-1 pt-4">
                    <div className="">
                      <input
                      type="checkbox"
                        className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="repTodosGeneros"
                        id="repTodosGeneros"
                      /> <span className="px-2">Todos los géneros</span>

                    </div>
                  </div>

                  {/*Botones*/}
                  <div className=" items-center gap-2 mt-8 sm:flex">
                    <a
                      className="btnReportes w-full"
                      onClick={() => setShowModal(false)}
                    >
                      <span class="btn__text">
                        <span>Generar Reporte</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
