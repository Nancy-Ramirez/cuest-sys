import NavbarAdmin from "../../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import preguntas from "./jsdeprueba";
import { useState, useEffect } from "react";
import React from 'react'

export const VerPregunta = () => {
  {
    /*Estados a usar */
  }
  const [preguntaActual, setPreguntaActual] = useState(0);
  return (
    <main className="verP">
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-21 mx-24">
        <div className="flex justify-start p-12 text-center  text-white w-full">
          <Link
            to="/cuestionario/editar-cuestionario/preguntas"
            className="flex justify-start"
          >
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
        </div>
        <div className="flex justify-center text-white">
          <div className="app">
            <div className="Lado-izquierdo">
              <div className="pregunta-numero p-2 text-end">
                12 pts
              </div>
              <div className="pregunta-titulo text-lg text-center">
                {preguntas[preguntaActual].pregunta}
              </div>
            </div>
            <div className="Lado-derecho">
              {preguntas[preguntaActual].opciones.map((resp) => (
                <button className="btnRespuesta" key={resp.respuesta}>{resp.respuesta}</button>
              ))}
            </div>
            <div className="px-20 text-white">

              <p></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
