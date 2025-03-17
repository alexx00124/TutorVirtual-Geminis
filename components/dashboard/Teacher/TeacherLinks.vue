<template>
    <CommonSidebar :links="teacherLinks">
      <slot />
    </CommonSidebar>
  </template>
  
  <script setup>
  import CommonSidebar from '@/components/common/Sidebar.vue';
  
  const teacherLinks = [
    { to: '/teacher/', label: 'Noticias', icon: 'mdi:rss' },
    { to: '/teacher/subjects', label: 'Asignaturas', icon: 'mdi:book-open-variant-outline' },
    { to: '/teacher/statistics', label: 'Estadisticas', icon: 'mdi:graph-line' },
  ];
  </script>
