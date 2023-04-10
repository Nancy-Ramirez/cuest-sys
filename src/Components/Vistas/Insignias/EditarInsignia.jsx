import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const EditarInsignia = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-40 pt-12 mx-12">
      <div className="flex justify-between p-16 text-center text-3xl text-white">
          <Link to="/insignia" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Editar Insignia</h1>
          <div></div>
        </div>

        <form className=" mb-8 flex justify-center space-x-48">
          <div>
            {/*Nombre insignia*/}
            <div className="mb-6 ">
              <label
                htmlFor="tipoInstitucion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre de insignia
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="nombreInsignia"
                  id="nombreInsignia"
                >
                  <option id="">Selecione</option>
                  <option id="1">Sin clasificación</option>
                  <option id="2">Bronce I</option>
                  <option id="3">Bronce II</option>
                  <option id="4">Bronce III</option>
                  <option id="all">...</option>
                </select>
              </div>
            </div>
            {/*Puntuación mínima*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="pMinima"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >Puntuación mínima</label>
              <input
                type="number"
                id="pMinima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {/*Puntuación máxima*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="pMaxima"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              > Puntuación Máxima</label>
              <input
                type="number"
                id="pMaxima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="  text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditarInsignia;
