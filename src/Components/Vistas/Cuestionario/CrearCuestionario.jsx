import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";

const CrearCuestionario = () => {

  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 pt-12 mx-20">
        <div className="min-h-screen p-6 bg-colo6 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              {/*<!--Contenedor verde mas oscurito-->*/}
              <div className="bg-colo4 rounded shadow-lg mx-16 p-4 md:p-8 mb-6">
                {/*<!--Define el grid y sus columnas-->*/}
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                  {/*<!--Sección entrada de datos del cuestionario-->*/}
                  <div className="lg:col-span-2 ">
                    <div className="contCuestionario grid gap-4 gap-y-2 text-sm grid-cols-1 md-grid-cols-5">

                      {/*<!--Nombre-->¨*/}
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="nombreC">Nombre</label>
                        <input
                          type="text"
                          name="nombreC"
                          id="nombreC"
                          className="h-10 border mt-1 rounded  w-full bg-gray-300"
                          required
                        />
                      </div>

                      {/*<!--Grado-->¨*/}
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="gradoC">Grado</label>
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
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="materiaC">Materia</label>
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
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="unidadC">Unidad</label>
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
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="temaC">Tema</label>
                        <input
                          type="text"
                          name="temaC"
                          id="temaC"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          required
                        />
                      </div>

                      {/*<!--Descripción-->*/}
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="descripC">Descripción</label>
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
                      <div className="pb-2 md:col-span-5">
                        <label htmlFor="cantPC">¿Cuántas preguntas tendrá este cuestionario?</label>
                        <input
                          type="number"
                          name="cantPC"
                          id="cantPC"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          required
                        />
                      </div>
                      {/*!--Agregar preguntas-->*/}
                      <div className="aggP flex justify-end">
                          <Link to="/inicio" className="buttonP text">
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            Agregar preguntas
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrearCuestionario;
