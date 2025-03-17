<template>
    <div class="space-y-8">
      <!-- Primer apartado: Cantidades -->
      <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4 ">Cantidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold mb-4 dark:text-gray-900">Profesores</h3>
            <p class="text-xl font-bold mb-4 dark:text-gray-900">150</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Estudiantes</h3>
            <p class="text-2xl font-bold dark:text-gray-900">5000</p>
          </div>
          <div class="bg-purple-50 dark:bg-purple-100   p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Decanos</h3>
            <p class="text-2xl font-bold dark:text-gray-900">10</p>
          </div>
        </div>
      </div>
  
      <!-- Segundo apartado: Tiempos en la plataforma -->
      <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Tiempos en la plataforma</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Tiempo de inicio</h3>
            <p class="text-2xl font-bold dark:text-gray-900">2.5s</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Tiempo de ingreso</h3>
            <p class="text-2xl font-bold dark:text-gray-900">1.8s</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Duración promedio</h3>
            <p class="text-2xl font-bold dark:text-gray-900">15m</p>
          </div>
        </div>
      </div>
  
      <!-- Tercer apartado: Números de estudiantes por carrera -->
      <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4 ">Números de estudiantes por carrera</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-teal-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Ingeniería</h3>
            <p class="text-2xl font-bold dark:text-gray-900">2000</p>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Medicina</h3>
            <p class="text-2xl font-bold dark:text-gray-900">1500</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold dark:text-gray-900">Derecho</h3>
            <p class="text-2xl font-bold dark:text-gray-900">1000</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Aquí puedes agregar lógica si es necesario, como llamadas a una API para obtener los datos.
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>