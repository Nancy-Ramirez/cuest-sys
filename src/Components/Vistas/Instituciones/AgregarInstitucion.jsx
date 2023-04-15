import NavbarAdmin from "../../NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Swal from "sweetalert2";

const AgregarInstitucion = () => {
  //!VALIDACIONES DE DATOS
  //Navegacion del boton luego de validar correctamente
const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosInstitucion = {
    nomInstitucion: "",
  };

  //Estado inicial de la elerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState (datosInstitucion);

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
      { nombre: "nomInstitucion", value: formulario.nomInstitucion },
      { nombre: "temaC", value: formulario.temaC },
      { nombre: "descripC", value: formulario.descripC },
      { nombre: "cantPC", value: formulario.cantPC },
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtener el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validacioes", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
      console.log("Enviar al servidor");
         //Alerta de datos enviados
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Institución agregada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      //Navigate
      setTimeout(() => {Navigate("/institucion")},1500);
      ;
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
        case "nomInstitucion": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese el nombre de la institución",
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
      }
    });
    //retornamos el total de validaciones
    return errors;
  };
  console.log(formulario);

  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-40 pt-12 mx-12 ">
        <div className="flex justify-between p-16 text-center text-3xl text-white">
          <Link to="/institucion" className="flex justify-start">
            <Icon icon="lucide:arrow-big-left" width="35" height="35" />
          </Link>
          <h1 className="flex justify-center">Agregar Institución</h1>
          <div></div>
        </div>

        <form
          onSubmit={handleLoginSession}
          className="mb-8 flex justify-center space-x-48"
        >
          <div>
            {/*Nombre */}
            <div className="mb-6 w-96">
              <label
                htmlFor="nomInstitucion"
                className="block text-sm font-medium text-white dark:text-white mb-1"
              >
                Nombre de la institución
              </label>
              <input
                type="text"
                id="nomInstitucion"
                name="nomInstitucion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formulario.nomInstitucion}
                onChange={ManejarEventoDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput === "nomInstitucion" &&
                    input.estado === true
                )
                .map((message) => (
                  <div className="py-2">
                    <span className="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>

            {/*Tipo */}
            <div className="mb-6">
              <label
                htmlFor="tipoInstitucion"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Tipo
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="tipoInstitucion"
                  id="tipoInstitucion"
                >
                  <option id="priv">Privada</option>
                  <option id="public">Pública</option>
                </select>
              </div>
            </div>

            {/*DeptoInstitucion */}
            <div className="mb-6 ">
              <label
                htmlFor="deptoInstitucion"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Departamento
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="deptoInstitucion"
                  id="deptoInstitucion"
                >
                  <option id="1">San Salvador</option>
                  <option id="2">Cuscatlán</option>
                  <option id="3">Chalatenango</option>
                  <option id="4">La Libertad</option>
                </select>
              </div>
            </div>

            {/*Municipio */}
            <div className="mb-6 ">
              <label
                htmlFor="municipioInstitucion"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Municipio
              </label>
              <div className="">
                <select
                  className="rounded-lg w-96"
                  name="municipioInstitucion"
                  id="municipioInstitucion"
                >
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

export default AgregarInstitucion;
