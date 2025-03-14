<template>
  <div>
    <!-- Contenedor flexible para alinear el título y los enlaces -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Mis Asignaturas</h1>
    </div>
    <SubjectCard :subjects="subjects" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'student'
})

// Datos de ejemplo en formato JSON
const subjects = [
  { name: 'Matemáticas', code: 'MAT101', teacher: 'Profesor Pérez', journey: 'Manana', expires: '2025-09-01' },
  { name: 'Física', code: 'FIS101', teacher: 'Profesora Gómez', journey: 'Tarde', expires: '2025-09-15' },
  { name: 'Química', code: 'QUI101', teacher: 'Profesor López', journey: 'Noche', expires: '2025-09-30' },
  { name: 'Historia', code: 'HIS101', teacher: 'Profesora Martínez', journey: 'Manana', expires: '2025-10-15' },
];
</script>