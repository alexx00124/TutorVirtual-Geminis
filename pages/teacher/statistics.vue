<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Estadisticas</h1>
      <!-- Renderiza el componente de estadísticas -->
      <TeacherStatistics />
    </div>
  </template>
  
  <script setup>
  import TeacherStatistics from '~/components/dashboard/Teacher/statistics.vue';
  
  definePageMeta({
    layout: 'teacher',
  });
  </script>