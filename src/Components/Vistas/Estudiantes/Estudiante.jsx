import SidebarAdmin from "../../Sidebar-menuAdmin";
import image1 from "../../../images/iconos/estudiante.png"
import ver from "../../../images/iconos/ver.png"

const gestionarEstudiante = () => {
  return (
    <main>
      <SidebarAdmin></SidebarAdmin>

      <section class="relative overflow-x-auto shadow-md sm:rounded-lg p-25">
        <h1 class="p-5 text-center text-3xl text-white">ESTUDIANTES</h1>

        <div class="m-5">
          <div class="flex items-center justify-between pb-4  m-2">
            <button
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              class=" border-current text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              type="button"
            >
              Filtrar{""}
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownDefaultCheckbox"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li>
                  <div class="flex items-center">
                    <input
                      id="checkbox-item-1"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Aceptados
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input
                      checked
                      id="checkbox-item-2"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      En espera
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input
                      id="checkbox-item-3"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-3"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rechazados
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <label for="table-search" class="sr-only">
              Buscar
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-black dark:text-black"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                class="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-80 bg-green-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar estudiante"
              />
            </div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-200 dark:text-gray-400">
              <tr>
                
                <th scope="col" class="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                  NIE
                </th>
                <th scope="col" class="px-6 py-3">
                  Institución
                </th>
                <th scope="col" class="px-6 py-3">
                  Municipio
                </th>
                <th scope="col" class="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={image1}
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Katherine Stefani Lopez Chavez</div>
                    <div class="font-normal text-gray-500">
                      KatherineLopez@gmail.com
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">3542842</td>
                <td class="px-6 py-4"> Colegio Santa Lucia
                </td>
                <td class="px-6 py-4">San Bartolo</td>
                <td class="px-6 py-8 flex justify-center content-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <button class="btn btn-verEstudiante ">
                        <img src={ver} alt="" width= "30px"/>
                    </button>
                  </a>
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={image1}
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Katherine Stefani Lopez Chavez</div>
                    <div class="font-normal text-gray-500">
                      KatherineLopez@gmail.com
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">3542842</td>
                <td class="px-6 py-4"> Colegio Santa Lucia
                </td>
                <td class="px-6 py-4">San Bartolo</td>
                <td class="px-6 py-8 flex justify-center content-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <button class="btn btn-verEstudiante ">
                        <img src={ver} alt="" width= "30px"/>
                    </button>
                  </a>
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={image1}
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Alejandro Antonio Juarez Medina </div>
                    <div class="font-normal text-gray-500">
                      MedinaMedina@gmail.com
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">31425842</td>
                <td class="px-6 py-4"> Complejo San Luis
                </td>
                <td class="px-6 py-4">Soyapango</td>
                <td class="px-6 py-8 flex justify-center content-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <button class="btn btn-verEstudiante ">
                        <img src={ver} alt="" width= "30px"/>
                    </button>
                  </a>
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={image1}
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Romina Caldea Carmona Perez</div>
                    <div class="font-normal text-gray-500">
                      CarmonaCaldea@gmail.com
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">3542542</td>
                <td class="px-6 py-4"> Complejo Santa Eduviges
                </td>
                <td class="px-6 py-4">San Benito</td>
                <td class="px-6 py-8 flex justify-center content-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <button class="btn btn-verEstudiante ">
                        <img src={ver} alt="" width= "30px"/>
                    </button>
                  </a>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default gestionarEstudiante;
