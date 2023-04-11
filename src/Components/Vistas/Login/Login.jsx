import { Link } from "react-router-dom";
import logo from "../../../images/iconoF.png"
import {BtnOlvidarContra} from "../../BotoncitosModals/botonOlvidarContra"
import { useState } from "react";

export const Login = () => {
  //Estado inicial del formulario
  const datosLogin = {
    email: "",
    password: ""
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosLogin);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    
    //La propiedad target del event nos permitirá obtener los valores 
    const name = event.target.name;
    const value = event.target.value;

    //Actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  }

  //Funcion que se va a encargar de validar los campos
  const handleLoginSession = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto que trae consigo el evento

    //Ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "email", value: formulario.email },
      { nombre: "password", value: formulario.password },
    ];

    //Enviamos los datos a la funcion de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtenemos el total de validación
    const totalValidaciones = datosValidados.filter(input => input.estado === false).map((estado) => { return false });

    console.log("Total de validaciones", totalValidaciones.length);

    //Validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
    };
  }
  const ValidarInputs = (data) => {
    console.log(data);
    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //Proceso de validacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.nombre) {
        case "email": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }

        case "password": {
          if (
            valorInput.value === "" ||
            valorInput.value === null ||
            valorInput.value.length < 8
          ) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    //Retornamos el total de validaciones
    return errors;
  };

  console.log(formulario);
    return (
      <div>
        <section className=" min-h-screen flex justify-center opacity-90 py-2 px-4 sm:px-6 lg:px-8  relative items-center">
          <div className="max-w-md w-full space-y-8 p-2 bg-white rounded-xl shadow-lg z-10">
            <div className="grid  gap-2 grid-cols-1">
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center py-2 mx-auto md:h-screen lg:py-0">
                  <div className="flex items-center mb-6 ">
                    <img className="w-32 mr-2 " src={logo} alt="" />
                  </div>
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        ¡Bienvenido de vuelta!
                      </h1>
                      <form
                        onSubmit={handleLoginSession}
                        className="space-y-4 md:space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Correo electrónico
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="nombre@xxxxx.com"
                            value={formulario.email}
                            onChange={ManejarEventoDeInputs}
                          />
                          {
                            alerta.filter(input => input.valorInput === "email" && input.estado === true).map(message => (
                              <div className="py-2">
                                <span className="text-red-500 mt-2">
                                  {message.mensaje}
                                </span>
                              </div>
                            ))
                          }
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={formulario.password}
                            onChange={ManejarEventoDeInputs}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <BtnOlvidarContra></BtnOlvidarContra>
                        </div>
                        <div className="log flex justify-center">
                          <button className="button text">
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            Ingresar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
}