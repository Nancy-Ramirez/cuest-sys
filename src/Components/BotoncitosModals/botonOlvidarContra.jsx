import { useState } from "react";

export const BtnOlvidarContra = () => {
  const [showModal, setShowModal] = useState(false);
  return (
      <>
          <div className="flex items-center justify-center h-60">
              <button
                  className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
                  type="button"
                  onClick={() => setShowModal(true)}
              >
                  Open Modal
              </button>
          </div>
          {showModal ? (
              <>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                          className="fixed inset-0 w-full h-full bg-black opacity-40"
                          onClick={() => setShowModal(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                              <div className="mt-3 sm:flex">
                                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                  </div>
                                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                      <h4 className="text-lg font-medium text-gray-800">
                                          Contraseña olvidada
                                      </h4>
                                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                          
                                      </p>
                                      <div className="items-center gap-2 mt-3 sm:flex">
                                          <button
                                              className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                              onClick={() =>
                                                  setShowModal(false)
                                              }
                                          >
                                              Delete
                                          </button>
                                          <button
                                              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                              onClick={() =>
                                                  setShowModal(false)
                                              }
                                          >
                                              Aceptar
                                          </button>
                                      </div>
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
