import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";

const EditarInsignia = () => {

//!VALIDACIONES DE DATOS
  //Estado inicial del formulario
  const datosInsignia = {
    pMinima: "",
    pMaxima: "",
  };

  //Estado inicial de la elerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosInsignia);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Funcion para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;

    //Actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  };

  //Funcion que se va a encargar de validar los campos
  const handleLoginSession = (e) => {
    //Previene el comportamiento por defecto que trae consigo el evento
    e.preventDefault();

    //ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "pMinima", value: formulario.pMinima },
      { nombre: "pMaxima", value: formulario.pMaxima },
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtener el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validaciones", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
    }
  };

  const ValidarInputs = (data) => {
    console.log(data);

    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //Proceso de validacion
    datosDelFormulario.map((valorInput) => {
      // eslint-disable-next-line default-case
      switch (valorInput.nombre) {
        case "pMinima": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese la puntuación",
              estado: true,
            });
          } else {
            var num = false;
            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.value.charCodeAt(i) <= 57
              ) {
                num = true;
              }
            }
            if (num === true) {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "Ingrese un puntaje válido",
                estado: true,
              });
            }
            break;
          }
        }
        case "pMaxima": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese la puntuación",
              estado: true,
            });
          } else {
            var num = false;
            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.value.charCodeAt(i) <= 57
              ) {
                num = true;
              }
            }
            if (num === true) {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "Ingrese un puntaje válido",
                estado: true,
              });
            }
            break;
          }
        }
      }
    });
    //retornamos el total de validaciones
    return errors;
  };
  console.log(formulario);

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

        <form onSubmit={handleLoginSession} className=" mb-8 flex justify-center space-x-48">
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
                name="pMinima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formulario.pMinima}
                onChange={ManejarEventoDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput === "pMinima" &&
                    input.estado === true
                )
                .map((message) => (
                  <div className="py-2">
                    <span className="text-red-500 mt-2">
                      {message.mensaje}
                    </span>
                  </div>
                ))}
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
                name="pMaxima"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formulario.pMaxima}
                onChange={ManejarEventoDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput === "pMaxima" &&
                    input.estado === true
                )
                .map((message) => (
                  <div className="py-2">
                    <span className="text-red-500 mt-2">
                      {message.mensaje}
                    </span>
                  </div>
                ))}
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
