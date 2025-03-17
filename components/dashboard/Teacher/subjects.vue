<template>
    <div>
      <!-- Título y botón de crear asignatura -->
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Asignaturas</h1>
        <button
          @click="isModalOpen = true"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Crear Asignatura
        </button>
      </div>
  
      <!-- Barra de búsqueda -->
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar asignatura..."
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
  
      <!-- Modal para crear asignatura -->
      <div v-if="isModalOpen" class="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <h2 class="text-xl font-bold mb-4">Crear Asignatura</h2>
          <form @submit.prevent="createSubject">
            <div class="space-y-4">
              <!-- Campo: Nombre -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                <input
                  v-model="newSubject.name"
                  type="text"
                  id="name"
                  required
                  class="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
  
              <!-- Campo: Jornada -->
              <div>
                <label for="journey" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Jornada</label>
                <select
                  v-model="newSubject.journey"
                  id="journey"
                  required
                  class="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="Mañana">Mañana</option>
                  <option value="Noche">Noche</option>
                </select>
              </div>
  
              <!-- Campo: Fecha de expiración -->
              <div>
                <label for="expires" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha de expiración</label>
                <input
                  v-model="newSubject.expires"
                  type="date"
                  id="expires"
                  required
                  class="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
  
              <!-- Botones del modal -->
              <div class="flex justify-end">
                <button
                  type="button"
                  @click="isModalOpen = false"
                  class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors mr-2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Crear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Lista de asignaturas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="subject in filteredSubjects"
          :key="subject.code"
          class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <h2 class="text-xl font-semibold">{{ subject.name }}</h2>
          <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Jornada:</strong> {{ subject.journey }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300"><strong>Expiración:</strong> {{ subject.expires }}</p>
          <button
            @click="showCode(subject.code)"
            class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Código Materia
          </button>
        </div>
      </div>
  
      <!-- Modal para mostrar el código -->
      <div v-if="showCodeModal" class="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <h2 class="text-xl font-bold mb-4">Código de la Materia</h2>
          <p class="text-center text-gray-700 dark:text-gray-300">{{ currentCode }}</p>
          <div class="flex justify-end mt-4">
            <button
              @click="showCodeModal = false"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Estado para controlar la visibilidad del modal
  const isModalOpen = ref(false);
  
  // Estado para almacenar la nueva asignatura
  const newSubject = ref({
    name: '',
    journey: '',
    expires: '',
  });
  
  // Estado para almacenar las asignaturas creadas
  const subjects = ref([]);
  
  // Estado para controlar la visibilidad del modal del código
  const showCodeModal = ref(false);
  
  // Estado para almacenar el código actual
  const currentCode = ref('');
  
  // Estado para la barra de búsqueda
  const searchQuery = ref('');
  
  // Función para crear una nueva asignatura
  const createSubject = () => {
    // Generar un código único para la asignatura
    const code = `MAT-${Math.floor(1000 + Math.random() * 9000)}`;
  
    // Agregar la asignatura a la lista
    subjects.value.push({
      ...newSubject.value,
      code,
    });
  
    // Limpiar el formulario y cerrar el modal
    newSubject.value = { name: '', journey: '', expires: '' };
    isModalOpen.value = false;
  };
  
  // Función para mostrar el código de la materia
  const showCode = (code) => {
    currentCode.value = code;
    showCodeModal.value = true;
  };
  
  // Computed para filtrar las asignaturas según la búsqueda
  const filteredSubjects = computed(() => {
    if (!searchQuery.value) {
      return subjects.value; // Si no hay búsqueda, mostrar todas las asignaturas
    }
    const query = searchQuery.value.toLowerCase();
    return subjects.value.filter((subject) =>
      subject.name.toLowerCase().includes(query)
    );
  });
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>