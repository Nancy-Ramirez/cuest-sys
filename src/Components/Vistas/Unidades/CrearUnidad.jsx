import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const EditarUnidad = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-40 pt-12 mx-12">
      <div className="flex justify-between p-16 text-center text-3xl text-white">
          <Link to="/unidad" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Editar unidad</h1>
          <div></div>
        </div>

        <form className=" mb-8 flex justify-center space-x-48">
          <div>
            {/*Numero de unidad*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="nUnidad"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                {" "}
                Número de unidad
              </label>
              <input
                type="number"
                id="nUnidad"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*Nombre de unidad*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="nomUnidad"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                {" "}
                Nombre de unidad
              </label>
              <input
                type="text"
                id="nomUnidad"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*Grado*/}
            <div className="mb-6 ">
              <label
                htmlFor="gradoUnidad"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Grado
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="gradoUnidad"
                  id="gradoUnidad"
                >
                  <option id="">Selecione</option>
                  <option id="1">Séptimo</option>
                  <option id="2">Octavo</option>
                  <option id="3">Noveno</option>
                  <option id="4">Primer Año</option>
                  <option id="5">Segundo Año</option>
                </select>
              </div>
            </div>

            {/*Materia*/}
            <div className="mb-6 ">
              <label
                htmlFor="materiaUnidad"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Grado
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="materiaUnidad"
                  id="materiaUnidad"
                >
                  <option id="">Selecione</option>
                  <option id="1">Biología</option>
                  <option id="2">Química</option>
                  <option id="3">Física</option>

                </select>
              </div>
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

export default EditarUnidad;
