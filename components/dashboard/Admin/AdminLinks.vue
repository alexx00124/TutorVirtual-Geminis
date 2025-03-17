<template>
  <CommonSidebar :links="adminLinks">
      <slot />
  </CommonSidebar>
</template>

<script setup>
import CommonSidebar from '@/components/common/Sidebar.vue';

const adminLinks = [
  { to: '/admin', label: 'Noticias', icon: 'mdi:newspaper-check' },
  { to: '/admin/teachers', label: 'Docentes', icon: 'mdi:teach-poll' },
  { to: '/admin/students', label: 'Estudiantes', icon: 'mdi:account-student' },
  { to: '/admin/statistics', label: 'Estadísticas', icon: 'mdi:graph-line' },

  ];
 </script>