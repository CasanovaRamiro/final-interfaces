//Eliminar turnos
document.querySelectorAll(".eliminar-turno").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".turno-proximo").remove();
  });
});

//Calendario
let currentMonth = 0; // Empezamos con Enero
const year = 2024; // Año fijo

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Función para generar el calendario del mes actual
function generateCalendar(month) {
  const calendarContainer = document.getElementById("calendar");
  calendarContainer.innerHTML = ""; // Limpiar el calendario anterior

  // Crear contenedor para el mes
  const monthDiv = document.createElement("div");
  monthDiv.classList.add("month");

  // Agregar el nombre del mes
  const monthTitle = document.createElement("h2");
  monthTitle.textContent = ` ${months[month]} ${year} `;
  monthDiv.appendChild(monthTitle);

  // Crear la cuadrícula de días
  const daysDiv = document.createElement("div");
  daysDiv.classList.add("days");

  // Agregar los nombres de los días de la semana
  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  weekDays.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;
    daysDiv.appendChild(dayDiv);
  });

  // Obtener el primer día del mes y la cantidad de días en el mes
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Agregar días vacíos hasta el primer día del mes
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    daysDiv.appendChild(emptyDiv);
  }

  // Agregar los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = day;
    daysDiv.appendChild(dateDiv);
    const link = document.createElement("a");
    link.href = "turnos.html";
    link.appendChild(dateDiv);
    daysDiv.appendChild(link);
    link.classList.add("a-date");
  }

  // Añadir la cuadrícula de días al mes y el mes al contenedor del calendario
  monthDiv.appendChild(daysDiv);
  calendarContainer.appendChild(monthDiv);
}

// Funciones para cambiar el mes
document.getElementById("prevMonth").addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11; // Volver a diciembre
  } else {
    currentMonth--;
  }
  generateCalendar(currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0; // Volver a enero
  } else {
    currentMonth++;
  }
  generateCalendar(currentMonth);
});

// Llamar a la función para mostrar el mes inicial (Enero)
generateCalendar(currentMonth);

//widget de chat
const chatWidget = document.getElementById("chatWidget");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

function toggleChat() {
  chatWidget.classList.toggle("minimized");
}

function closeChat(event) {
  event.stopPropagation();
  chatWidget.classList.add("minimized");
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    // Crear burbuja de mensaje del usuario
    const userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("user-message-container");
    chatBody.appendChild(userMessageContainer);


    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = message;
    userMessageContainer.appendChild(userMessage);

    // Crear burbuja de respuesta automática
    const botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("bot-message-container");
    chatBody.appendChild(botMessageContainer);

    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "Buenos días! En qué podemos ayudarte?";
    botMessageContainer.appendChild(botMessage);

    // Limpiar campo de entrada y hacer scroll hasta el final del chat
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

//Horarios de los medicos
const medicos = [
  {
    id: 1,
    nombre: "Soledad Ramirez",
    especialidad: "Clínica Médica",
    foto: "img/medico 1.jfif",
    disponibilidad: {
      Lunes: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00"],
      Martes: ["08:00", "10:00", "13:00", "15:00"],
      Miércoles: ["09:00", "11:00", "14:00", "16:00", "19:00"],
      Jueves: ["08:00", "12:00", "16:00"],
      Viernes: ["10:00", "13:00", "16:40", "17:00", "19:00"],
      Sábado: ["08:00", "10:00", "12:00", "14:00"],
    },
  },
  {
    id: 2,
    nombre: "Roberto Sánchez",
    especialidad: "Dermatología",
    foto: "img/medico 2.jfif",
    disponibilidad: {
      Lunes: ["09:00", "14:00", "17:00", "19:00"],
      Martes: ["08:00", "11:00", "15:00"],
      Miércoles: ["10:00", "12:00", "16:00", "17:00", "19:00"],
      Jueves: ["09:00", "10:00" , "12:00","13:00"],
      Viernes: ["09:00", "14:00", "16:00", "17:00", "18:00", "19:00"],
      Sábado: ["09:00", "10:00", "13:00", "15:00"],
    },
  },
  {
    id: 3,
    nombre: "Leandro Delrio",
    especialidad: "Cardiología",
    foto: "img/medico 3.jfif",
    disponibilidad: {
      Lunes: ["13:00", "14:00", "15:00", "16:00"],
      Martes: ["08:00", "11:00", "15:00", "16:00", "17:00", "18:00"],
      Miércoles: ["11:00", "12:00", "13:00"],
      Jueves: ["02:00", "13:00", "15:00", "16:00"],
      Viernes: ["10:00", "11:00", "15:00"],
      Sábado: ["08:00", "11:00", "13:00", "15:00"],
    },
  },
  {
    id: 4,
    nombre: "Ezequiel Álvarez",
    especialidad: "Clínica médica",
    foto: "img/medico 4.jpg",
    disponibilidad: {
      Lunes: ["13:00", "14:00", "17:00", "15:00"],
      Martes: ["08:00", "09:00", "10:00", "11:00", "15:00"],
      Miércoles: ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00"],
      Jueves: ["09:00", "10:00", "12:00", "13:00"],
      Viernes: ["08:00", "14:00", "18:00"],
      Sábado: ["08:00", "10:00", "13:00", "14:00"],
    },
  },
  ,
  {
    id: 5,
    nombre: "Edgardo López",
    especialidad: "Traumatología",
    foto: "img/medico 5.jpg",
    disponibilidad: {
      Lunes: ["09:00", "10:00", "11:00", "12:00", "14:00", "17:00"],
      Martes: ["08:00", "11:00", "15:00", "16:00"],
      Miércoles: ["10:00", "12:00", "16:00", "17:00"],
      Jueves: ["09:00", "13:00", "14:00", "15:00"],
      Viernes: ["08:00", "14:00", "18:00"],
      Sábado: ["08:00", "10:00", "13:00", "14:00"],
    },
  },
  ,
  {
    id: 6,
    nombre: "Sandra García",
    especialidad: "Anatomía Patológica",
    foto: "img/medico 6.png",
    disponibilidad: {
      Lunes: ["09:00", "14:00", "17:00", "18:00", "19:00"],
      Martes: ["09:00", "11:00", "15:00"],
      Miércoles: ["10:00", "12:00", "16:00", "17:00", "18:00"],
      Jueves: ["12:00", "13:00", "14:00"],
      Viernes: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Sábado: ["09:00", "10:00", "13:00", "15:00"],
    },
  },
  ,
  {
    id: 7,
    nombre: "Gonzalo Gimenez",
    especialidad: "Endrcrinología",
    foto: "img/medico 7.jfif",
    disponibilidad: {
      Lunes: ["08:00", "09:00", "17:00", "18:00", "19:00"],
      Martes: ["08:00", "10:00", "15:00"],
      Miércoles: ["08:00", "09:00", "10:00", "16:00"],
      Jueves: ["08:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      Viernes: ["08:00", "14:00", "18:00", "19:00"],
      Sábado: ["08:00", "11:00", "13:00"],
    },
  },
  ,
  {
    id: 8,
    nombre: "Gustavo Leguizamón",
    especialidad: "Hematología",
    foto: "img/medico 8.jfif",
    disponibilidad: {
      Lunes: ["09:00", "13:00", "14:00", "17:00", "18:00"],
      Martes: ["09:00", "11:00", "15:00"],
      Miércoles: ["10:00", "11:00", "12:00", "16:00"],
      Jueves: ["09:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      Viernes: ["09:00", "13:00", "14:00", "18:00"],
      Sábado: ["09:00", "10:00", "11:00", "12:00"],
    },
  },
  ,
  {
    id: 9,
    nombre: "Gabriel Lozano",
    especialidad: "Fisiatría",
    foto: "img/medico 9.jfif",
    disponibilidad: {
      Lunes: ["09:00", "12:00", "13:00", "14:00", "15:00"],
      Martes: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
      Miércoles: ["10:00", "12:00", "16:00"],
      Jueves: ["10:00", "11:00", "12:00", "13:00"],
      Viernes: ["08:00", "13:00", "14:00", "18:00"],
      Sábado: ["08:00", "10:00", "11:00", "13:00"],
    },
  },
  ,
  {
    id: 10,
    nombre: "María Laura Santillán",
    especialidad: "Otorrinolaringología",
    foto: "img/medico 10.jfif",
    disponibilidad: {
      Lunes: ["11:00", "13:00", "14:00", "19:00"],
      Martes: ["08:00", "10:00", "11:00", "15:00"],
      Miércoles: ["10:00", "12:00", "16:00"],
      Jueves: ["09:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      Viernes: ["08:00", "14:00", "16:00", "18:00"],
      Sábado: ["08:00", "10:00", "13:00"],
    },
  },
];

let medicoIndex = 0;

function mostrarMedico() {
  const medico = medicos[medicoIndex];
  document.getElementById("foto-medico").src = medico.foto;
  document.getElementById("nombre-medico").textContent = medico.nombre;
  document.getElementById("especialidad-medico").textContent =
    medico.especialidad;
  mostrarHorarios(medico.disponibilidad);
}

function cambiarMedico(direccion) {
  medicoIndex += direccion;

  if (medicoIndex < 0) {
    medicoIndex = medicos.length - 1;
  } else if (medicoIndex >= medicos.length) {
    medicoIndex = 0;
  }

  mostrarMedico();
}

function mostrarHorarios(disponibilidad) {
  const horariosContainer = document.getElementById("horarios-container");
  horariosContainer.innerHTML = "";

  for (const dia in disponibilidad) {
    const diaDiv = document.createElement("div");
    diaDiv.classList.add("dia");

    const tituloDia = document.createElement("h4");
    tituloDia.textContent = dia;
    diaDiv.appendChild(tituloDia);

    disponibilidad[dia].forEach((hora) => {
      const horaDiv = document.createElement("div");
      horaDiv.classList.add("hora");
      horaDiv.textContent = hora;
      horaDiv.onclick = () => seleccionarHorario(medicoIndex, dia, hora);
      diaDiv.appendChild(horaDiv);
    });

    horariosContainer.appendChild(diaDiv);
  }
}

function seleccionarHorario(medicoIndex, dia, hora) {
  const medico = medicos[medicoIndex];
  const url =
    "turnos.html?medico=${encodeURIComponent(medico.nombre)}&especialidad=${encodeURIComponent(medico.especialidad)}&dia=${encodeURIComponent(dia)}&hora=${encodeURIComponent(hora)}";
  window.location.href = url;
}

mostrarMedico();


//seccion preguntas frecuentes
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
      question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          answer.classList.toggle("visible");
      });
  });
});