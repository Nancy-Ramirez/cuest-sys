import NavbarAdmin from "../../NavbarAdmin";

const EditarMateria = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 pt-12 mr-10">
        <h1 className="p-12 text-center text-3xl text-white">
          Actualizar Materia
        </h1>

        <form className="mx-80 mb-8 flex justify-center space-x-48">
          <div>
            {/*Grado*/}
            <div className="mb-6 ">
              <label
                htmlFor="grado"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Grado
              </label>
              <div className="">
                <select className="rounded-lg w-96" name="grado" id="grado">
                  <option id="">Selecione</option>
                  <option id="1">Séptimo</option>
                  <option id="2">Octavo</option>
                  <option id="3">Noveno</option>
                  <option id="4">1° Bachillerato</option>
                  <option id="5">2° Bachillerato</option>
                </select>
              </div>
            </div>

            {/*Nombre materia*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="nombreMateria"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Materia
              </label>
              <input
                type="text"
                id="nombreMateria"
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

export default EditarMateria;
