<template>
    <CommonSidebar :links="waitingarea">
      <slot />
    </CommonSidebar>
  </template>
  
  <script setup>
  import CommonSidebar from '@/components/common/Sidebar.vue';
  
  const waitingarea = [
    { to: '/student/', label: 'Noticias', icon: 'mdi:rss' },
    { to: '/student/subjectsview', label: 'Asignaturas', icon: 'mdi:book-open-variant-outline' },
  ];
  </script>
  