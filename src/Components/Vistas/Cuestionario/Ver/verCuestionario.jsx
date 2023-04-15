import NavbarAdmin from "../../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const VerCuestionario = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 pt-24 mx-24">
        <div className="flex justify-between p-12 text-center text-3xl text-white w-full">
          <Link to="/cuestionario" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <div className="flex flex-col">
            <h1 className="flex justify-center">
              Aprendamos a ser científicos y científicas{" "}
            </h1>
            <p className="flex justify-center text-sm pt-5">
              Unidad 1: Ciencia y Tecnología
            </p>
          </div>
          <div></div>
        </div>
        <div className="px-20 text-white">
          <div className="flex justify-start p-4">
            <p className="pr-2 leading-normal font-bold">Descripción: </p>
            <p className="leading-normal">
              Si la ciencia es una actividad que produce resultados que son
              aprovechados por las sociedades, de igual forma la tecnología
              permite la creación de aparatos que contribuyen a satisfacer
              necesidades vitales.{" "}
            </p>
          </div>
          <div className="flex justify-start p-4">
            <p className="pl-12 pr-2 font-bold">Grado: </p>
            <p>Séptimo </p>
          </div>
          <div className="flex justify-start p-4">
            <p className="pl-9 pr-2 font-bold">Materia: </p>
            <p>Ciencias Naturales </p>
          </div>
          <div className="flex justify-start p-4">
            <p className="-ml-8 pr-2 font-bold">Cant. Preguntas: </p>
            <p>4</p>
          </div>
          {/*!--Ver preguntas-->*/}
          <div className="flex justify-end py-4 text w-full">
            <Link
              to="/cuestionario/ver-preguntas"
              className="buttonP  text-white"
            >
              <button
                type="submit"
                className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
              >
                Preguntas
              </button>
            </Link>
          </div>

          <p></p>
        </div>
      </section>
    </main>
  );
};
