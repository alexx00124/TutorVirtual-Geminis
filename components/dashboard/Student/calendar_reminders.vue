<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <!-- Lado izquierdo: Calendario -->
    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Calendario</h2>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <!-- Calendario de solo lectura -->
        <UCalendar :attributes="calendarAttributes" :is-date-disabled="() => true" />
      </div>
    </div>

    <!-- Lado derecho: Recordatorios -->
    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Recordatorios</h2>
      <RemindersList :reminders="reminders" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CalendarDate } from '@internationalized/date';

// Importar el componente RemindersList
import RemindersList from '~/components/dashboard/Student/reminderlist.vue';

// Datos de ejemplo para los recordatorios
const reminders = [
  {
    title: "Revisar tarea de Matemáticas",
    description: "Resolver los ejercicios de la página 45.",
    date: "2023-10-10", // Formato YYYY-MM-DD
    priority: "low", // Verde
    subject: "Matemáticas",
    teacher: "Profesor Pérez",
  },
  {
    title: "Estudiar para parcial de Física",
    description: "Repasar los temas de cinemática y dinámica.",
    date: "2023-10-15", // Formato YYYY-MM-DD
    priority: "medium", // Amarillo
    subject: "Física",
    teacher: "Profesora Gómez",
  },
  {
    title: "Entregar proyecto de Química",
    description: "Preparar la presentación del proyecto sobre reacciones químicas.",
    date: "2023-10-20", // Formato YYYY-MM-DD
    priority: "high", // Rojo
    subject: "Química",
    teacher: "Profesor López",
  },
];

// Convertir las fechas de los recordatorios a objetos CalendarDate
const selectedDates = ref(
  reminders.map((reminder) => {
    const [year, month, day] = reminder.date.split('-').map(Number);
    return new CalendarDate(year, month, day);
  })
);

// Atributos para resaltar fechas en el calendario
const calendarAttributes = computed(() => {
  return reminders.map((reminder) => ({
    key: reminder.date,
    highlight: {
      color: getPriorityColor(reminder.priority).replace("bg-", "").replace("dark:bg-", ""), // Extraer el color
      fillMode: "light", // Resaltar la fecha
    },
    dates: new CalendarDate(...reminder.date.split('-').map(Number)), // Convertir la fecha a CalendarDate
    popover: {
      label: reminder.title, // Mostrar el título del recordatorio al hacer hover
    },
  }));
});

// Función para obtener el color según la prioridad
const getPriorityColor = (priority) => {
  switch (priority) {
    case "low":
      return "bg-green-100 dark:bg-green-900";
    case "medium":
      return "bg-yellow-100 dark:bg-yellow-900";
    case "high":
      return "bg-red-100 dark:bg-red-900";
    default:
      return "bg-gray-100 dark:bg-gray-700";
  }
};
</script>