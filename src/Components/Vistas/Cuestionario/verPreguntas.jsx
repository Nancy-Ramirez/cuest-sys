import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import preguntas from "./jsdeprueba";
import { useState, useEffect } from "react";

export const VerPreguntas = () => {
  {
    /*Estados a usar */
  }
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizo, setFinalizo] = useState(false);

  function pasarPregunta() {
    if (preguntaActual === preguntas.length - 1) {
      setFinalizo(true);
    }
    setPreguntaActual(preguntaActual + 1);
  }

  function regresarPregunta() {
    setPreguntaActual(preguntaActual - 1);
  }
  return (
    <main className="verP">
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-21 mx-24">
        <div className="flex justify-start p-12 text-center  text-white w-full">
          <Link
            to="/cuestionario/ver-cuestionario"
            className="flex justify-start"
          >
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
        </div>
        <div className="flex justify-center text-white">
          <div className="app">
            <div className="Lado-izquierdo text-center">
              <div className="pregunta-numero p-2 ">
                <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
              </div>
              <div className="pregunta-titulo text-lg">
                {preguntas[preguntaActual].pregunta}
              </div>
            </div>
            <div className="Lado-derecho">
              {preguntas[preguntaActual].opciones.map((resp) => (
                <button className="btnRespuesta" key={resp.respuesta}>{resp.respuesta}</button>
              ))}
            </div>
            <div className="px-20 text-white">
              {/*!--Ver preguntas-->*/}
              <div className="flex justify-center pt-12 text w-full">
                <button
                  type="submit"
                  className="mx-5 text-white bg-colo1 hover:bg-colo2 focus:ring-4 focus:outline-none focus:ring-colo1 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-colo1 dark:hover:bg-colo2 dark:focus:ring-colo2"
                  onClick={regresarPregunta}
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  className=" text-white bg-colo1 hover:bg-colo2 focus:ring-4 focus:outline-none focus:ring-colo1 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-colo1 dark:hover:bg-colo2 dark:focus:ring-colo2"
                  onClick={() => pasarPregunta(preguntaActual)}
                >
                  Siguiente
                </button>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
