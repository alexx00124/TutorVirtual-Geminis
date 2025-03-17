<template>
    <div class="space-y-4">
      <!-- Recordatorio -->
      <div
        v-for="reminder in reminders"
        :key="reminder.date"
        class="p-4 rounded-lg"
        :class="getPriorityColor(reminder.priority)"
      >
        <p class="font-semibold">{{ reminder.title }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">{{ reminder.description }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Fecha:</strong> {{ reminder.date }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Prioridad:</strong> {{ reminder.priority }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Asignatura:</strong> {{ reminder.subject }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Docente:</strong> {{ reminder.teacher }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    reminders: {
      type: Array,
      required: true,
    },
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