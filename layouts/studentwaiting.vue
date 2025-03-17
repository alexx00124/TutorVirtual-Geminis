<template>
  <WaitingSidebar>
    <!-- Contenido al lado del sidebar -->
    <slot />
  </WaitingSidebar>
</template>

<script setup>
import WaitingSidebar from '~/components/dashboard/Student/waitingarea.vue';
</script>
