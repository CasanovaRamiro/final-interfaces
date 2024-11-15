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
  