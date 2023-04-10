import { useState } from "react";

export const FechaRegistro = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="Contra ModalFechaRegistro p-2 ">
        <a
          className="btnContra btnModalFechaRegistro px-6 py-3 rounded-md"
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
                    Reportes de usuario por fecha de registro
                  </h4>

                  {/*Opciones de busqueda */}

                  {/*Desde Fecha */}
                  <div className=" w-full p-1">
                    <label
                      htmlFor="repFechaRInicio"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white w-full"
                    >
                      Desde:
                    </label>
                    <input
                      type="date"
                      id="repFechaRInicio"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  {/*Hasta Fecha */}
                  <div className=" w-full p-1">
                    <label
                      htmlFor="repFechaRFinal"
                      className="block text-sm font-medium text-gray-900 dark:text-white mb-2 mt-5  w-full"
                    >
                      Hasta:
                    </label>
                    <input
                      type="date"
                      id="repFechaRFinal"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  {/*TODOS */}
                  <div className="w-full p-1 pt-4">
                    <div className="">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="repTodasFechas"
                        id="repTodasFechas"
                      />{" "}
                      <span className="px-2">Todas los registros</span>
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
