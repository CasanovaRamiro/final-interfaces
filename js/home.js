let currentMonth = 0; // Empezamos con Enero
const year = 2024; // Año fijo

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
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
    weekDays.forEach(day => {
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
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    chatBody.appendChild(newMessage);
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}