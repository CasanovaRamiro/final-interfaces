const step = document.getElementById('step-container');
const sedes = ['Teleconsulta','Sede Caballito', 'Hospital Central', 'Anexo Microcentro', 'Htal Escuela North Zone', 'Htal Gral South Zone', 'Htal Gral Far West Zone']
// Fechas habilitadas
const fechasDisponibles = ["2024-11-24","2024-11-25", "2024-11-27","2024-11-29","2024-11-30","2024-12-02","2024-12-03", "2024-12-04", "2024-12-06", "2024-12-10", "2024-12-11", "2024-12-14"];


const medicosCardiologia = [
  'Torres, María Micaela', 
  'Gimenez, Horacio Anibal', 
  'Uschauk, Gimena', 
  'Wittgenstein, Emilio'
];
const medicosObstetricia = [
  'Becerra, María Emilia',
  'Milei, Javier Gerardo',
  'Sorín, Juan Pablo',
  'Mazza, Valeria',
  'Ardohain, Carolina',
  'Espósito, Lali',
  'Bullrich, Patricia'
];
const medicosPediatria = [
  'Fernandez, Lucia Valentina', 
  'Gomez, Santiago Andres', 
  'Lopez, Martina Rocio', 
  'Mendoza, Tomas Ignacio'
];

const medicosTraumatologia = [
  'Ramirez, Jorge Luis', 
  'Diaz, Camila Gabriela', 
  'Herrera, Juan Manuel', 
  'Castro, Melisa Agustina'
];

const medicosDermatologia = [
  'Martinez, Clara Alejandra', 
  'Perez, Ignacio Matias', 
  'Sanchez, Juliana Florencia', 
  'Alvarez, Esteban Javier'
];

const medicosGinecologia = [
  'Rodriguez, Ana Sofia', 
  'Gutierrez, Francisco Martin', 
  'Ortiz, Valeria Cecilia', 
  'Medina, Damian Leonardo'
];

const medicosNeurologia = [
  'Mendez, Pablo Emilio', 
  'Ruiz, Daniela Beatriz', 
  'Morales, Gabriela Lourdes', 
  'Vega, Fabian Adrian'
];

const medicosOftalmologia = [
  'Silva, Carla Julieta', 
  'Cabrera, Diego Esteban', 
  'Navarro, Laura Patricia', 
  'Ortiz, Matias Federico'
];

const medicosOncologia = [
  'Castillo, Lucas Emanuel', 
  'Rios, Noelia Veronica', 
  'Luna, Santiago Nicolas', 
  'Farias, Mariana Andrea'
];

const medicosPsiquiatria = [
  'Vargas, Ricardo Daniel', 
  'Correa, Paula Mariana', 
  'Cruz, Victoria Alejandra', 
  'Espinoza, Roberto Gaston'
];

const medicosFlebologia = [
  'Perez, Javier Sebastian', 
  'Lopez, Monica Alejandra', 
  'Rojas, Federico Leonardo', 
  'Suarez, Antonella Giselle'
];

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    
    // Agregar event listener a cada paso
    steps.forEach((step, index) => {
      step.addEventListener("click", function () {
        // Limpiar todos los pasos
        steps.forEach(s => {
          s.classList.remove("text-indigo-600");
          s.classList.add("text-gray-600");
          s.querySelector("span").classList.remove("bg-indigo-600", "text-white");
          s.querySelector("span").classList.add("bg-gray-100");
        });
  
        // Marcar el paso actual
        step.classList.add("text-indigo-600");
        step.querySelector("span").classList.add("bg-indigo-600", "text-white");
        step.querySelector("span").classList.remove("bg-gray-100");
      });
    });
  });

function goStep1(){
  var step1 = document.createElement('div');
  step1.innerHTML = ``;
  step.appendChild(step1);
}

function goStep2(event) {
  var h2Data = event.target.getElementsByTagName("h2");
  let epr = event.target.textContent;
  let especialidadParaRegistrar = "";
  if(h2Data.length != 0)
    {
      especialidadParaRegistrar = h2Data[0].textContent;
      localStorage.setItem("especialidad", especialidadParaRegistrar);
    }
  else if(event.target.childNodes[0].textContent != null || event.target.childNodes[0].textContent != 'undefined')
   {
     especialidadParaRegistrar = event.target.childNodes[0].textContent;
     localStorage.setItem("especialidad", especialidadParaRegistrar);
   }
   else localStorage.setItem("especialidad", epr)

    const step = document.getElementById('step-container');
    const step2Circle = document.getElementById('step-2');
    
    var step2 = document.createElement('div');
    let especialidad = document.getElementById('esp');
    especialidad.classList.replace("text-blue-900", "text-gray-600");
    // especialidad.classList.add('hover-effect');

    let step1Circle = document.getElementById('step-1');
    step1Circle.style.backgroundColor = 'gray';

    let instalaciones = document.getElementById('inst');
    instalaciones.classList.replace("text-gray-600", "text-blue-900");
    step2Circle.classList.add("hover-effect");
    
    step2Circle.style.backgroundColor = '#003366';
    
    
    let containerChildren = Array.from(step.children);
    containerChildren.forEach(child => child.remove());

    let formu = `<div class="flex flex-col">
      <form action="./home.html" class="">
        <div class="flex gap-x-6 mb-6">
          <div class="w-full relative">
            <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Nombre <svg width="7" height="7"
              class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444" />
            </svg>
            </label>
            <input type="text" id="default-search"
              class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="Coloca tu nombre por favor" required>
          </div>
          <div class="w-full relative">
            <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Apellido<svg width="7" height="7"
                class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444" />
              </svg>
            </label>
            <input type="text" id="default-search"
              class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="Y tu apellido aquí" required>
          </div>
        </div>
        <div class="relative mb-6">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email<svg width="7"
              height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444" />
            </svg>
          </label>
          <input type="text" id="default-search"
            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="tu.email@mail.com" required>
        </div>
        <div class="flex gap-x-6 mb-6">
          <div class="w-full relative">
            <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">DOB <svg width="7" height="7"
                class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444" />
              </svg>
            </label>
            <input type="text" id="default-search"
              class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="" required>
          </div>
          <div class="w-full relative">
            <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Country <svg width="7" height="7"
                class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444" />
              </svg>
            </label>
            <input type="text" id="default-search"
              class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
              placeholder="" required>
          </div>
        </div>
        <div class="relative mb-6">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Phone Number <svg width="7"
              height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444" />
            </svg>
          </label>
          <input type="text" id="default-search"
            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="" required>
        </div>
        <button
          class="w-52 h-12 shadow-sm rounded-full bg-green-600 hover:bg-gray-800 transition-all duration-700 text-white text-base font-semibold leading-7">Next</button>
      </form>
    </div>`;
    

    for(let sede of sedes){
      step2.innerHTML += 
      `<a class="areas block p-4" href="javascript:void(0)" onclick="goStep3(event)">
        <div class="especialidad text-center">
          <i class="fas fa-building text-black-500 text-4xl mr-2"></i>
          <h2 class="text-lg font-semibold">`+`${sede}`+`</h2>
        </div>
      </a>`;
    }

    step.appendChild(step2);
  }

function goStep4(event){
  const fechaReserva = event.target.children[2].value;
  if(fechaReserva != null || fechaReserva != 'undefined')
    {
      localStorage.setItem('fechaReserva', fechaReserva);
    }
    //removemos todos los valores previos...
    let containerChildren = Array.from(step.children);
    containerChildren.forEach(child => child.remove());

    //actualizamos colores de bolas para el paso 4
    const step4Circle = document.getElementById('step-4');
      step4Circle.style.backgroundColor = '#003366';
      step4Circle.style.color = 'white';
      let step3Circle = document.getElementById('step-3');
      step3Circle.style.backgroundColor = 'gray';

    let profesionales = document.getElementById('prof');
      profesionales.classList.replace("text-blue-900", "text-gray-600");
    let confirmacion = document.getElementById('conf');
    confirmacion.classList.replace('text-gray-600', 'text-blue-900');

    let divFondo = document.createElement('div');
      divFondo.className = "space-y-4";
      divFondo.classList.add('confirmacion');
    // let divLinea = document.createElement('hr');
      // divLinea.classList.add('divLinea');
      // divFondo.appendChild(divLinea);
      let titulo = document.createElement('h1');
      titulo.textContent = "Por favor lea atentamente y confirme su cita";
      titulo.classList.add('text-black-600');
      titulo.classList.add('text-center');
      titulo.classList.add('text-2xl');
      titulo.classList.add('font-bold');
      let especialidad = document.createElement('h1');
        especialidad.className = "text-xl ml-4";
        especialidad.textContent = `Especialidad: ${localStorage.getItem('especialidad')}`;
      let sede = document.createElement('h1');
        sede.className = "text-xl ml-4";
        sede.textContent = `Sede : ${localStorage.getItem('sede')}`;
      let profesional = document.createElement('h1');
      profesional.className = "text-xl ml-4";
        profesional.textContent = `Profesional : ${event.target.children[1].textContent}`;
      let fechaReser = document.createElement('h1');
        fechaReser.className = "text-xl ml-4";
        fechaReser.textContent = `Fecha de cita médica : ${event.target.children[2].value}`;

        //agregamos los botones
      let buttonsDiv = document.createElement('div');
        buttonsDiv.className = "flex justify-center items-center h-64 space-x-4";
      let button1 = document.createElement('button');
        button1.textContent = "Confirmar";
        button1.className = "bg-green-500 text-white py-2 px-4 m-2 rounded";
        button1.addEventListener('click', function() {
          alert("Confirmación realizada exitosamente");
          console.log("turno confirmado.");
          window.location.href = "../final-interfaces/home.html"; // Cambia a tu URL
        });
        let button2 = document.createElement('button');
        button2.textContent = "Cancelar";
        button2.className = "bg-red-500 text-white py-2 px-4 m-2 rounded";
        button2.onclick = function () {
          window.location.href = "../final-interfaces/home.html"; // Cambia a tu URL
        };
      buttonsDiv.append(button1);
      buttonsDiv.append(button2);
      divFondo.append(titulo);
      divFondo.append(especialidad);
      divFondo.append(sede);
      divFondo.append(profesional);
      divFondo.append(fechaReser);
      divFondo.append(buttonsDiv);
      step.appendChild(divFondo);

}

function goStep3(event){
  var h2Data = event.target.getElementsByTagName("h2");
  if(h2Data.length != 0)
    {
      var sedeParaRegistrar = h2Data[0].textContent;
      localStorage.setItem("sede", sedeParaRegistrar);
    }
  else{localStorage.setItem("sede", event.target.childNodes[0].textContent)}

  let especialidadElegida = localStorage.getItem("especialidad");
  const step = document.getElementById('step-container');
    const step3Circle = document.getElementById('step-3');
    
    var step3 = document.createElement('div');
    let instalaciones = document.getElementById('inst');
    instalaciones.classList.replace("text-blue-900", "text-gray-600");
    // especialidad.classList.add('hover-effect');

    let step2Circle = document.getElementById('step-2');
    step2Circle.style.backgroundColor = 'gray';

    let profesionales = document.getElementById('prof');
    profesionales.classList.replace("text-gray-600", "text-blue-900");
    // step2Circle.classList.add("hover-effect");
    
    step3Circle.style.backgroundColor = '#003366';
    
    
    let containerChildren = Array.from(step.children);
    containerChildren.forEach(child => child.remove());
    let medicosSegunEsp = [];
    switch (especialidadElegida) {
      case 'Cardiología':
        medicosSegunEsp = medicosCardiologia;
        break;
      case 'Traumatología':
        medicosSegunEsp = medicosTraumatologia;
        break;
      case 'Obstetricia':
        medicosSegunEsp = medicosObstetricia;
        break;
      case 'Dermatología':
        medicosSegunEsp = medicosDermatologia;
        break;
      case 'Flebología':
        medicosSegunEsp = medicosFlebologia;
        break;
      case 'Ginecología':
        medicosSegunEsp = medicosGinecologia;
          break;
      case 'Neurología':
        medicosSegunEsp = medicosNeurologia;
          break;
      case 'Oftalmología':
        medicosSegunEsp = medicosOftalmologia;
          break;
      case 'Oncología':
        medicosSegunEsp = medicosOncologia;
          break;
      case 'Pediatría':
        medicosSegunEsp = medicosPediatria;
          break;
      case 'Psiquiatría':
        medicosSegunEsp = medicosPsiquiatria;
          break;
      default:
        break;
    }

    
    for(let medico of medicosSegunEsp){
      // Crear el enlace <a>
    const enlace = document.createElement("a");
      enlace.className = "areas block p-4";
      enlace.href = "javascript:void(0)";
      enlace.onclick = goStep4; // Pasar la referencia de la función
      
    // Crear el div de la especialidad
    const divMedico = document.createElement("div");
      divMedico.className = "especialidad text-center";
      
    // Crear el ícono
    const icono = document.createElement("i");
      icono.className = "fas fa-user-md text-black-500 text-4xl mr-2";
      
    // Crear el título <h2>
    const titulo = document.createElement("h2");
      titulo.className = "flex text-lg font-semibold";
      titulo.textContent = medico;
      
    // Crear el input único para este médico
    const nuevoInput = document.createElement("input");
      nuevoInput.type = "text";
      nuevoInput.placeholder = "selecciona una fecha";
      nuevoInput.className = "flex mb-1 ml-4";

      // Ensamblar los elementos
    divMedico.appendChild(icono);
    divMedico.appendChild(titulo);
    divMedico.appendChild(nuevoInput); // Agregar el input
    enlace.appendChild(divMedico);

    flatpickr(nuevoInput, {
      altInput: true,
      altFormat: "F j, Y",
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minTime: "09:00",
      maxTime: "21:30", // Formato de la fecha
      enable: ["2024-11-25", "2024-11-27"], // Fechas habilitadas
    });
    step3.appendChild(enlace);
    }
    
    // for(let child of step3.children){
    //   let divMedico = child.children[0];
    //   divMedico.appendChild(nuevoInput);
    // }
    step.appendChild(step3);

    let flatpickerdiv = document.getElementById("fp");

    

    flatpickerdiv.appendChild(nuevoInput);

    

}


  