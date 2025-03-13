<template>
  <AdminSidebar>
    <!-- Contenido al lado del sidebar -->
    <slot />
  </AdminSidebar>
</template>

<script setup>
import AdminSidebar from '@/components/dashboard/Admin/Sidebar.vue';
</script>
