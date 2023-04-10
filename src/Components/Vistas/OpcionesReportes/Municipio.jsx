import { useState } from "react";

export const Municipio = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="Contra ModalMunicipio p-2 ">
        <a
          className="btnContra btnModalMunicipio px-6 py-3 rounded-md"
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
                    Reportes de usuario por municipio
                  </h4>

                  {/*Opciones de busqueda */}

                  {/*Departamentos */}
                  <div className="w-full p-1 ">
                    <label
                      htmlFor="repUsuarioMunicipio"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Departamentos
                    </label>

                    <div className="">
                      <select
                        className="rounded-lg border border-black w-full"
                        name="repUsuarioMunicipio"
                        id="repUsuarioMunicipio"
                      >
                        <option id="">Selecione</option>
                        <option id="1">San Salvador</option>
                        <option id="2">Cuscatlán</option>
                        <option id="3">...</option>
                      </select>
                    </div>
                  </div>
                  {/*Municipios */}
                  <div className="w-full p-1">
                    <label
                      htmlFor="repUsuarioMunicipio"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Municipios
                    </label>
                    <div className="">
                      <select
                        className="rounded-lg w-full"
                        name="repUsuarioMunicipio"
                        id="repUsuarioMunicipio"
                      >
                        <option id="">Selecione</option>
                        <option id="1">Soyapango</option>
                        <option id="2">Ilopango</option>
                        <option id="3">...</option>
                      </select>
                    </div>
                  </div>

                  {/*TODOS */}
                  <div className="w-full p-1 pt-4">
                    <div className="">
                      <input
                      type="checkbox"
                        className="w-4 h-4 text-black bg-gray-300 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="repTodosMunicipios"
                        id="repTodosMunicipios"
                      /> <span className="px-2">Todos los municipios</span>

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
