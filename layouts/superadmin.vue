<template>
    <SuperAdminSidebar>
      <!-- Contenido al lado del sidebar -->
      <slot />
    </SuperAdminSidebar>
  </template>
  
  <script setup>
  import SuperAdminSidebar from '~/components/dashboard/SuperAdmin/SuperAdminLinks.vue';
  </script>
  