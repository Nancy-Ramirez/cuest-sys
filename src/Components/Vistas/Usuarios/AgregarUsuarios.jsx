import NavbarAdmin from "../../NavbarAdmin";

const EditarUsuario = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 pt-12 mx-12">
        <h1 className="p-12 text-center text-3xl text-white">
          Actualizar Usuario
        </h1>

        <form className="mb-8 flex justify-center space-x-48">
          <div>
            {/*Nombre del usuario*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="nombreUsuario"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombreUSuario"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*Username*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/*Rol*/}
            <div className="mb-6 ">
              <label
                htmlFor="rol"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rol
              </label>
              <div className="">
                <select className="rounded-lg w-96" name="rol" id="rol">
                  <option id="">Seleccione</option>
                  <option id="facilitador">Facilitador</option>
                  <option id="admin">Administrador</option>
                </select>
              </div>
            </div>

            {/*Contraseña*/}
            <div className="mb-6 w-96">
              <label
                htmlFor="contraseña"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="contraseña"
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

export default EditarUsuario;
