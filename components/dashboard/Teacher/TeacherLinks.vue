<template>
  <CommonSidebar :links="teacherLinks">
    <slot />
  </CommonSidebar>
</template>

<script setup>
import CommonSidebar from '@/components/common/Sidebar.vue';

const teacherLinks = [
  { to: '/student/Asignaturas', label: 'Dashboard', icon: 'mdi:view-dashboard' },
];
</script>
