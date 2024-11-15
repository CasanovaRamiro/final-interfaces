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
    const step = document.getElementById('step-container');
    var step1 = document.createElement('div');
    step1.innerHTML = ``;
    step.appendChild(step1);
}

  function goStep2(){
    const step = document.getElementById('step-container');
    var step2 = document.createElement('div');
    step2.innerHTML = `<div class="flex flex-col">
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
    step.appendChild(step2);
    var areas = document.getElementsByClassName('areas');
    array.forEach( (a, index, areas) => {
        document.removeChild(areas[index])
    });
  }

function goStep3(){

}
  