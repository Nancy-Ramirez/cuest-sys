import NavbarAdmin from "../../NavbarAdmin";
import { Link } from "react-router-dom";

const CrearCuestionario = () => {

    //Llamar al botón
    let nuevaP = document.getElementById("agregarP");
    //Crear contador de preguntas
    var contador = 1;

    function agregarP(){
      //Llamar al id del div donde se van a mostrar las preguntas
      let divP = document.getElementById("preguntasC");

      //Div creado para caja de pregunta
      let divAgregado = document.createElement("div");

      //Atributo a agregar a divAgregado
      const att = document.createAttribute("class");
      att.value = "preguntaAgregada" + contador;
      divAgregado.setAttributeNode(att);

      //Estilos a divAgregado
      divAgregado.style.padding = "20px";
      divAgregado.style.borderRadius = "25px";
      divAgregado.style.border = "medium solid #0D3B27";
       
      //Botón eliminar pregunta
      let divBorrar = document.createElement("div");
      let btnBorrar = document.createElement("button");
      btnBorrar.innerHTML=`
      <svg 
      className="h-8 w-8 text-black"  
      viewBox="0 0 24 24"  
      fill="none"  
      stroke="currentColor"  
      stroke-Width="2"  
      strokeLinecap="round"  
      strokeLinejoin="round"> 
    
      <circle 
      cx="12" 
      cy="12"
      r="10" />  
      <line x1="15" 
      y1="9" 
      x2="9" 
      y2="15" />  
      <line 
      x1="9" 
      y1="9" 
      x2="15" 
      y2="15" 
      /></svg>
    `;
    
    //Agregar atributos a borrar

    const att1 = document.createAttribute("id");
    att1.value = "btnB" + contador;
    btnBorrar.setAttributeNode(att1);

    const att2 = document.createAttribute("id");
    att2.value = "btnB" + contador;
    btnBorrar.setAttributeNode(att2);

    //Agregar estilos a borrar

    divBorrar.appendChild(btnBorrar);
    divAgregado.appendChild(divBorrar);
    divP.append(divAgregado);

    let divE = this.getElementsByClassName("divB" + contador);

    //!Onclick eliminar
    
    
    };


  return (
    <main>
      <NavbarAdmin />

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg p-25 pt-12 mx-12">
        <div className="min-h-screen p-6 bg-colo6 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              {/*<!--Contenedor verde mas oscurito-->*/}
              <div className="bg-colo4 rounded shadow-lg p-4 px-20 md:p-8 mb-6">
                {/*<!--Define el grid y sus columnas-->*/}
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                  {/*<!--Sección entrada de datos del cuestionario-->*/}
                  <div className="lg:col-span-2 ">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md-grid-cols-5">
                      {/*<!--Nombre-->¨*/}
                      <div className="md:col-span-5">
                        <label htmlFor="nombreC">Nombre</label>
                        <input
                          type="text"
                          name="nombreC"
                          id="nombreC"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          required
                        />
                      </div>

                      {/*<!--Grado-->¨*/}
                      <div className="md:col-span-5">
                        <label htmlFor="gradoC">Grado</label>
                        <select
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          id="gradoC"
                          name="gradoC"
                          required
                        >
                          <option>Seleccione una opción</option>
                          <option>Séptimo</option>
                          <option>Óctavo</option>
                          <option>Noveno</option>
                          <option>Primer año</option>
                          <option>Segundo año</option>
                        </select>
                      </div>

                      {/*<!--Materia-->*/}

                      <div className="md:col-span-5">
                        <label htmlFor="materiaC">Materia</label>
                        <select
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          id="materiaC"
                          name="materiaC"
                          required
                        >
                          <option>Seleccione una opción</option>
                          <option>Física</option>
                          <option>Química</option>
                          <option>Biología</option>
                        </select>
                      </div>

                      {/*<!--Unidad-->*/}
                      <div className="md:col-span-5">
                        <label htmlFor="unidadC">Materia</label>
                        <select
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          id="unidadC"
                          name="unidadC"
                          required
                        >
                          <option>Seleccione una opción</option>
                          <option>Unidad 1 – Ciencia y tecnología</option>
                          <option>Unidad 2 – Propiedades de la materia</option>
                          <option>Unidad 3 – Materia y energía</option>
                        </select>
                      </div>

                      {/*<!--Tema-->*/}
                      <div className="md:col-span-5">
                        <label htmlFor="temaC">Tema</label>
                        <input
                          type="text"
                          name="temaC"
                          id="temaC"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-300"
                          required
                        />
                      </div>

                      {/*<!--Descripción-->*/}
                      <div className="md:col-span-5">
                        <label htmlFor="descripC">Descripción</label>
                        <textarea
                          name="descripC"
                          id="descripC"
                          cols="30"
                          rows="6"
                          className="h-14 border mt-1 rounded px-4 w-full bg-gray-300"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      {/*!--Agregar nueva pregunta-->*/}
                      <div className="w-full flex justify-end">
                        <button onClick={agregarP()}
                          type="submit"
                          className="bg-colo3 hover:bg-colo4 text-white font-bold rounded-full"
                          id="agregarP"
                        >
                          <svg
                            className="h-8 w-8 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-colo3 p-4 ">
                    {/*<!--Sección de agregar las preguntas-->*/}
                    <div
                      className="grid gap-4 gap-y-2 text-sm grid-cols-1 md-grid-cols-5  "
                      id="preguntasC"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrearCuestionario;
