import { Link } from "react-router-dom";
import NavbarAdmin from "../../NavbarAdmin";

export const AgregarPreguntas = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 pt-12 mx-12">
        <Link to="/cuestionario/cuestionario"></Link>
      <Icon icon="lucide:arrow-big-left" width="24" height="24" />
        <h1 className="p-12 text-center text-3xl text-white">
          Agregar Preguntas
        </h1>

        <form className="mb-8 flex justify-center space-x-48">
          <div>
            <div className="mb-6 w-96">
              <label
                htmlFor="pMinima"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Nombre de la institución
              </label>
              <input
                type="nomInstitucion"
                id="pMinima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="tipoInstitucion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="tipoInstitucion"
                  id="tipoInstitucion"
                >
                  <option id="">Selecione</option>
                  <option id="priv">Privada</option>
                  <option id="public">Pública</option>
                </select>
              </div>
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="tipoInstitucion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Municipio
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="municipioInstitucion"
                  id="municipioInstitucion"
                >
                  <option id="">Selecione</option>
                  <option id="1">Soyapango</option>
                  <option id="2">Ilopango</option>
                  <option id="all">...</option>
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

