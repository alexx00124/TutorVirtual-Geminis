<template>
  <CommonSidebar :links="studentLinks">
    <slot />
  </CommonSidebar>
</template>

<script setup>
import CommonSidebar from '@/components/common/Sidebar.vue';

const studentLinks = [
  { to: '/student/Asignaturas', label: 'Asignaturas', icon: 'mdi:book-open-variant-outline' },
  { to: '/student/Calendario', label: 'Calendario', icon: 'mdi:calendar' },
  { to: '/student/Materiales', label: 'Materiales', icon: 'mdi:book-open' },
];
</script>
