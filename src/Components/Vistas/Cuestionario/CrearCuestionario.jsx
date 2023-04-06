import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CrearCuestionario = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-24 mx-24">
        <div className="flex justify-between p-8 text-center text-3xl text-white">
          <Link to="/cuestionario" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Crear Cuestionario</h1>
          <div></div>
        </div>
        <div>
          <div className="container max-w-screen-lg mx-auto">
            <div>
              {/*<!--Contenedor verde mas oscurito-->*/}

              {/*<!--Sección entrada de datos del cuestionario-->*/}

              <form className="mb-8 flex justify-center space-x-48 ">
                <div>
                  {/*<!--Nombre-->¨*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="nombreC" className="text-white">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombreC"
                      id="nombreC"
                      className="h-10 border mt-1 rounded  w-full bg-gray-300"
                      required
                    />
                  </div>

                  {/*<!--Grado-->¨*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="gradoC" className="text-white">
                      Grado
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      id="gradoC"
                      name="gradoC"
                      required
                    >
                      <option>Seleccione una opción</option>
                      <option>Séptimo</option>
                      <option>Óctavo</option>
                      <option>Noveno</option>
                      <option>Primer año</option>
                      <option>Segundo año</option>
                    </select>
                  </div>

                  {/*<!--Materia-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="materiaC" className="text-white">
                      Materia
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      id="materiaC"
                      name="materiaC"
                      required
                    >
                      <option>Seleccione una opción</option>
                      <option>Física</option>
                      <option>Química</option>
                      <option>Biología</option>
                    </select>
                  </div>

                  {/*<!--Unidad-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="unidadC" className="text-white">
                      Unidad
                    </label>
                    <select
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      id="unidadC"
                      name="unidadC"
                      required
                    >
                      <option>Seleccione una opción</option>
                      <option>Unidad 1 – Ciencia y tecnología</option>
                      <option>Unidad 2 – Propiedades de la materia</option>
                      <option>Unidad 3 – Materia y energía</option>
                    </select>
                  </div>

                  {/*<!--Tema-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="temaC" className="text-white">
                      Tema
                    </label>
                    <input
                      type="text"
                      name="temaC"
                      id="temaC"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      required
                    />
                  </div>

                  {/*<!--Descripción-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="descripC" className="text-white">
                      Descripción
                    </label>
                    <textarea
                      name="descripC"
                      id="descripC"
                      cols="30"
                      rows="6"
                      className="h-14 border mt-1 rounded px-4 w-full bg-gray-300"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>

                  {/*<!--Cantidad de preguntas-->*/}
                  <div className="pb-2 w-full py-4">
                    <label htmlFor="cantPC" className="text-white">
                      ¿Cuántas preguntas tendrá este cuestionario?
                    </label>
                    <input
                      type="number"
                      name="cantPC"
                      id="cantPC"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                      required
                    />
                  </div>
                  {/*!--Agregar preguntas-->*/}
                  <div className="flex justify-end py-4 text w-full">
                    <Link
                      to="/cuestionario/crear-cuestionario/agregar-preguntas"
                      className="buttonP  text-white"
                    >
                      <button
                        type="submit"
                        className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
                      >
                        Agregar preguntas
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrearCuestionario;
