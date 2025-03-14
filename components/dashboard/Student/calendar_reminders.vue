<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <!-- Lado izquierdo: Calendario -->
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Calendario</h2>
        <!-- Aquí puedes integrar un componente de calendario -->
        <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <p class="text-center text-gray-500 dark:text-gray-400">
            Integra aquí un calendario (puedes usar VCalendar o similar).
          </p>
        </div>
      </div>
  
      <!-- Lado derecho: Recordatorios -->
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Recordatorios</h2>
        <div class="space-y-4">
          <!-- Recordatorio 1: Poco grave (Verde) -->
          <div class="p-4 rounded-lg bg-green-100 dark:bg-green-900">
            <p class="font-semibold">Revisar tarea de Matemáticas</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Fecha: 2023-10-10</p>
          </div>
  
          <!-- Recordatorio 2: Intermedio (Amarillo) -->
          <div class="p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900">
            <p class="font-semibold">Estudiar para parcial de Física</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Fecha: 2023-10-15</p>
          </div>
  
          <!-- Recordatorio 3: Urgente (Rojo) -->
          <div class="p-4 rounded-lg bg-red-100 dark:bg-red-900">
            <p class="font-semibold">Entregar proyecto de Química</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Fecha: 2023-10-20</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Puedes agregar lógica para manejar los recordatorios dinámicamente
  const reminders = [
    {
      title: "Revisar tarea de Matemáticas",
      date: "2023-10-10",
      urgency: "low", // Verde
    },
    {
      title: "Estudiar para parcial de Física",
      date: "2023-10-15",
      urgency: "medium", // Amarillo
    },
    {
      title: "Entregar proyecto de Química",
      date: "2023-10-20",
      urgency: "high", // Rojo
    },
  ];
  
  // Función para obtener el color según la urgencia
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
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
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>