import NavbarAdmin from "../../NavbarAdmin";

const AgregarInstitucion = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mr-10">
        <h1 className="p-12 text-center text-3xl text-white">
          Actualizar instituciones
        </h1>

        <form className="mx-80 mb-8 flex justify-between space-x-48">
          <div>
            <div className="mb-6">
              <label
                htmlFor="pMinima"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre de la institución
              </label>
              <input
                type="pMinima"
                id="pMinima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="pMaxima"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Género
              </label>
              <div className="">
                <select className="flex content-start text-center" name="" id="">
                    <option id="">Selecione</option>
                    <option id="F">Femenino</option>
                    <option id="M">Masculino</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-gree-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AgregarInstitucion;
