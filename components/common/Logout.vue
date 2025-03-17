<template>
  <UButton
    class="cursor-pointer"
    icon="i-heroicons-arrow-left-circle"
    size="md"
    color="red"
    :ui="{ rounded: 'rounded-full' }"
    variant="solid"
    @click="logout"
  />
</template>

<script setup>
// Importar la función de navegación de Nuxt
const router = useRouter();

// Función para redirigir al usuario a la página de inicio de sesión
const logout = () => {
  router.push('/'); // Redirige al usuario a la página de inicio (index.vue)
};
</script>