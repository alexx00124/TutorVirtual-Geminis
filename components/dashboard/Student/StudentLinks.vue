<template>
  <CommonSidebar :links="studentLinks">
    <slot />
  </CommonSidebar>
</template>

<script setup>
import CommonSidebar from '@/components/common/Sidebar.vue';

const studentLinks = [
  { to: '/student/newsoverview', label: 'Noticias', icon: 'mdi:rss' },
  { to: '/student/virtualtutor', label: 'Tutor Virtual', icon: 'mdi:book-open-variant-outline' },
  { to: '/student/calendar', label: 'Calendario', icon: 'mdi:calendar' },
  { to: '/student/studymaterial', label: 'Material de Estudio', icon: 'mdi:calendar' },
];
</script>