import NavbarAdmin from "../../NavbarAdmin";

const EditarInsignia = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 mt-12 mx-32">
        <h1 className="p-20 text-center text-3xl text-white">
          Editar Insignia
        </h1>

        <form className=" flex justify-center space-x-14 shadow-md sm:rounded-lg p-25 mr-10 mx-12 ">
         <div className=""> 
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className=" flex text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            type="button"
          >
            Insignias{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sin clasificación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Bronce I
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Bronce II
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Bronce III
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Plata I
                </a>
              </li>





            </ul>
          </div>
          <div className="pt-12">
          <label htmlFor="" >Insignia seleccionada</label>
          </div>
          </div>
          <div>
            <div className="mb-6">
              <label
                htmlFor="pMinima"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Puntuación mímina
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
                Puntuación Máxima
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
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

export default EditarInsignia;
