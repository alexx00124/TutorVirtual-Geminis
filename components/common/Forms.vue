<template>
  <div>
    <!-- Botón para abrir el modal -->
    <button
      @click="openModal"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Agregar Nuevo Usuario
    </button>

    <!-- Modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50">
      <!-- Fondo oscuro semi-transparente con efecto borroso -->
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

      <!-- Contenedor del modal -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 class="text-xl font-bold mb-4 dark:text-white">Agregar Nueva Persona</h2>

          <!-- Formulario -->
          <form @submit.prevent="submitForm">
            <!-- Campo: ID -->
            <div class="mb-4">
              <label for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">ID</label>
              <input
                v-model="form.id"
                type="text"
                id="id"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <!-- Campo: Name -->
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <!-- Campo: Email -->
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <!-- Campo: Role -->
            <div class="mb-4">
              <label for="role" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
              <select
                v-model="form.role"
                id="role"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="" disabled>Selecciona un rol</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Profesor">Profesor</option>
                <option value="Decano">Decano</option>
              </select>
            </div>

            <!-- Botones de acción -->
            <div class="flex justify-end gap-2">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado del modal
const isOpen = ref(false);

// Datos del formulario
const form = ref({
  id: '',
  name: '',
  email: '',
  role: '',
});

// Abrir el modal
const openModal = () => {
  isOpen.value = true;
};

// Cerrar el modal
const closeModal = () => {
  isOpen.value = false;
};

// Enviar el formulario
const submitForm = () => {
  console.log('Nueva persona:', form.value);
  // Aquí puedes agregar la lógica para guardar la persona (por ejemplo, enviar a una API)
  closeModal();
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>