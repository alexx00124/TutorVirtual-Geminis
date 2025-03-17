<template>
    <div>
      <!-- Botones para alternar entre las vistas -->
      <div class="flex space-x-4 mb-6">
        <button
          @click="activeTab = 'time'"
          :class="{
            'bg-blue-500 text-white': activeTab === 'time',
            'bg-gray-200 text-gray-700': activeTab !== 'time',
          }"
          class="px-4 py-2 rounded-lg transition-colors"
        >
          Tiempo
        </button>
        <button
          @click="activeTab = 'interaction'"
          :class="{
            'bg-blue-500 text-white': activeTab === 'interaction',
            'bg-gray-200 text-gray-700': activeTab !== 'interaction',
          }"
          class="px-4 py-2 rounded-lg transition-colors"
        >
          Interacción
        </button>
      </div>
  
      <!-- Contenido dinámico según la pestaña activa -->
      <div v-if="activeTab === 'time'" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Estadísticas de Tiempo</h2>
        <p>Aquí puedes ver las estadísticas relacionadas con el tiempo.</p>
        <!-- Aquí irían gráficos o datos específicos -->
      </div>
  
      <div v-if="activeTab === 'interaction'" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Estadísticas de Interacción</h2>
        <p>Aquí puedes ver las estadísticas relacionadas con la interacción.</p>
        <!-- Aquí irían gráficos o datos específicos -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Estado para controlar la pestaña activa
  const activeTab = ref('time');
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>