//***CREAR CUESTIONARIO***

//!Agregar preguntas

//llamar boton
let nuevaP = document.getElementById("agregarP");
//Crear contador de preguntas
var contador = 1;

nuevaP.onclick = function () {
  //Llamar al id del div donde se van a mostrar las preguntas
  let divP = document.getElementById("preguntasC");

  //Div creado para cada caja de pregunta
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
  btnBorrar.innerHTML = `
  <svg 
  class="h-8 w-8 text-black"  
  viewBox="0 0 24 24"  
  fill="none"  
  stroke="currentColor"  
  stroke-width="2"  
  stroke-linecap="round"  
  stroke-linejoin="round"> 

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

  const att2 = document.createAttribute("class");
  att2.value = "divB" + contador;
  divBorrar.setAttributeNode(att2);

  //Agregar estilos a borrar

  divBorrar.appendChild(btnBorrar);
  divAgregado.appendChild(divBorrar);
  divP.append(divAgregado);

  let divE = this.getElementsByClassName("divB" + contador);

  //!Onclick eliminar
  btnBorrar.addEventListener("click", function (e) {
    divP.removeChild(divAgregado);
    contador = contador - 1;
  });
  //Retroalimentación
  let divRetro = document.createElement("div");
  divRetro.innerHTML = `
                 <div class="md:col-span-5">
                     <label for="descripP">Descripción</label>
                     <textarea
                         name="descripP"
                         id="descripP"
                         cols="30"
                         rows="6"
                         class="h-14 border mt-1 rounded px-4 w-full bg-gray-50"
                         style="resize: none"
                    ></textarea>
                 </div>
`;
  divAgregado.appendChild(divRetro);
  divP.append(divAgregado);

  //Pregunta
  let divPregunta = document.createElement("div");
  divPregunta.innerHTML = `
                 <div class="md:col-span-5">
                    <label for="preguntaC ${contador}">Pregunta</label>
                    <input
                      type="text"
                      name="preguntaC ${contador}"
                      id="preguntaC ${contador}"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
`;
  divAgregado.appendChild(divPregunta);
  divP.append(divAgregado);

  //Puntuación
  let divPuntuacion = document.createElement("div");
  divPuntuacion.innerHTML = `
                 <div class="md:col-span-5">
                    <label for="puntuacionP ${contador}">Puntuación</label>
                    <input
                      type="number"
                      name="puntuacionP ${contador}"
                      id="puntuacionP ${contador}"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
`;
  divAgregado.appendChild(divPuntuacion);
  divP.append(divAgregado);

  //Agregar tipo de respuestas
  let divRespuestas = document.createElement("div");
  divRespuestas.innerHTML += `
                 <div class="md:col-span-5">
                    <label for="tipoRespuesta">Tipo de respuesta</label>
                    <select
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      id="tRespuesta"
                      name="tRespuesta"
                      required
                    >
                      <option>Seleccione una opción</option>
                      <option id="corta">Respuesta corta</option>
                      <option id="unica">Opción única</option>
                      <option id="multiple">Opciones multiples</option>
                    </select>
                  </div> <br>
`;
  divAgregado.appendChild(divRespuestas);
  divP.append(divAgregado);

  //!TIPO DE RESPUESTAS
  let divTipoRespuestas = document.createElement("div");

  //Estilos a TipoRespuestas
  divTipoRespuestas.style.padding = "20px";
  divTipoRespuestas.style.borderRadius = "25px";
  divTipoRespuestas.style.border = "medium solid #0D3B27";

  let opcionT = document.getElementById("tRespuesta");
  let fraseP = document.createElement("h1");


  let inputDiv = document.createElement("input");
  const att3 = document.createAttribute("class");
  att3.value = "inputDiv" + contador;
  inputDiv.setAttributeNode(att3);

  //Evaluar cual fue la eleccion en el select
  opcionT.addEventListener("change", function (e) {
    console.log("click onChange", e.target.value);
    pruebaT(e.target.value);
  });

  //Funcion para mostrar el tipo de respuesta
  function pruebaT(e) {
    switch (e) {
      //Respuesta corta
      case "Respuesta corta":
        //nombre
        fraseP.textContent = "Respuesta corta";
        divTipoRespuestas.appendChild(fraseP);
        divAgregado.appendChild(divTipoRespuestas);
        divP.append(divAgregado);

        //Opciones

        inputDiv.innerHTML += `
        <div class="md:col-span-5">
        <input
          type="text"
          name="RespCorta ${contador}"
          id="RespCorta ${contador}"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          required
        />
      </div>
        `
        divTipoRespuestas.appendChild(inputDiv);
        divAgregado.appendChild(divTipoRespuestas);
        divP.append(divAgregado);
        break;
        case "Opción única":
          document.getElementById("RespCorta ${contador}" ).hidden= true;
          break;
    }
  }
  //Contador incremental
  contador = contador + 1;
};

//?Funciones a utilizar
//boton eliminar pregunta
