import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";

const gestionarInicio = () => {
  return (
    <main>
      <NavbarAdmin />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="contenedorSaludo">
            <p>Hola,</p>
            <ul>
              <li>bienvenido</li>
              <li>usuario</li>
              <li>bienvenido</li>
            </ul>
          </div>

          <div className="lg:flex lg:justify-between pt-5 ">
            <div className="p-2">
              {/*Carta de ultimos 5 registros */}
              <div className="p-4 ">
                <div className="h-full bg-gray-100 bg-opacity-25 px-8 pt-12 pb-12 rounded-lg overflow-hidden text-center relative">
                  <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    Ultimos 5 registros
                  </h1>
                  <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
                  <thead className="text-xs text-black uppercase bg-colo5 dark:bg-gray-700 dark:text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Estudiante
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hora
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/*PRIMER DATO */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Ariana Esther Luna Sorto</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">08:25am</td>
                  <td className="px-2 py-4">31/03/2023</td>
                </tr>
                {/*SEGUNDO DATO */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Karina Paola Castro Runez</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">10:36pm</td>
                  <td className="px-2 py-4">30/03/2023</td>
                </tr>
                {/*TERCER DATO */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Carlos Adonay Nuñez Santos</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">11:02pm</td>
                  <td className="px-2 py-4">30/03/2023</td>
                </tr>
                {/*CUARTO DATO */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Manuel Esteban Ramos Ascencio</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">07:15pm</td>
                  <td className="px-2 py-4">30/03/2023</td>
                </tr>
                {/*QUINTO DATO */}
                <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">Carlos Alexander Peña Fernandez </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">06:12pm</td>
                  <td className="px-2 py-4">30/03/2023</td>
                </tr>
              </tbody>
            </table>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap m-4 pt-8 justify-center">
              {/*Primera carta estadistica */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="text-3xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none">
                    N° Estudiantes registrados
                  </h1>
                  <h1 className="title-font p-2 sm:text-4xl text-xl font-medium text-gray-900 mb-3">
                    21
                  </h1>
                  <Link to="/estudiante" className="text-lg bold">Ver estudiantes</Link>
                </div>
                
              </div>
              {/*Primera carta estadistica */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="text-3xl text-gray-600 pb-8 pt-4 mb-4 border-b border-gray-200 leading-none">
                    Grado más activo
                  </h1>
                  <h1 className="title-font p-2 sm:text-4xl text-xl font-medium text-gray-900 mb-3">
                    8° grado
                  </h1>
                  <Link to="/cuestionario" className="text-lg bold">Ver cuestionarios</Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default gestionarInicio;
