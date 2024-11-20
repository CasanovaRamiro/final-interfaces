const step = document.getElementById('step-container');
const sedes = ['Sede Caballito', 'Hospital Central', 'Anexo Microcentro', 'Htal Escuela North Zone', 'Htal Gral South Zone', 'Htal Gral Far West Zone']
const medicosCardiologia = [
  'Torres, María Micaela', 
  'Gimenez, Horacio Anibal', 
  'Uschauk, Gimena', 
  'Wittgenstein, Emilio'
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

step.addEventListener("click", (event) => {
  var especialidad = event.target.childNodes[0].data;
  localStorage.setItem("especialidad", especialidad);
});

function goStep1(){
    var step1 = document.createElement('div');
    step1.innerHTML = ``;
    step.appendChild(step1);
}

  function goStep2(){
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
      `<a class="areas block p-4" href="javascript:void(0)" onclick="goStep3()">
        <div class="especialidad text-center">
          <i class="fas fa-building text-black-500 text-4xl mr-2"></i>
          <h2 class="text-lg font-semibold">`+`${sede}`+`</h2>
        </div>
      </a>`;
    }

    step.appendChild(step2);
  }

function goStep3(){
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
      step3.innerHTML += 
      `<a class="areas block p-4" href="javascript:void(0)" onclick="goStep4()">
        <div class="especialidad text-center">
          <i class="fas fa-user-md text-black-500 text-4xl mr-2"></i>
          <h2 class="text-lg font-semibold">`+`${medico}`+`</h2>
        </div>
      </a>`;
    }
    step.appendChild(step3);
}

function goStep4(){

}
  