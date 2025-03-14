<template>
  <div>
    <!-- Barra de búsqueda en el aside -->
    <aside class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar asignatura..."
        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
    </aside>

    <!-- Grid de asignaturas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard
        v-for="subject in filteredSubjects"
        :key="subject.code"
        class="hover:shadow-lg transition-shadow hover:cursor-pointer dark:hover:shadow-lg dark:hover:shadow-white"
      >
        <template #header>
          <div class="flex justify-between">
            <h2 class="text-xl font-semibold">{{ subject.name }}</h2>
            <p class="text-lg tracking-widest">{{ subject.code }}</p>
          </div>
        </template>

        <div class="space-y-2">
          <p><strong>Jornada:</strong> <strong class="text-green-500">{{ subject.journey }}</strong></p>
          <p><strong>Docente:</strong> {{ subject.teacher }}</p>
          <p><strong>Vencimiento:</strong> <strong class="text-red-500">{{ subject.expires }}</strong></p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Props para recibir las asignaturas
const props = defineProps({
  subjects: {
    type: Array,
    required: true,
  },
});

// Estado para la búsqueda
const searchQuery = ref('');

// Computed para filtrar las asignaturas
const filteredSubjects = computed(() => {
  if (!searchQuery.value) {
    return props.subjects; // Si no hay búsqueda, mostrar todas las asignaturas
  }
  const query = searchQuery.value.toLowerCase();
  return props.subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(query) ||
      subject.code.toLowerCase().includes(query) ||
      subject.teacher.toLowerCase().includes(query)
  );
});
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>