<template>
    <CommonSidebar :links="superAdminLinks">
        <slot />
    </CommonSidebar>
</template>

<script setup>
import CommonSidebar from '@/components/common/Sidebar.vue';

const superAdminLinks = [
    { to: '/superadmin', label: 'Noticias', icon: 'mdi:newspaper-check' },
    { to: '/superadmin/management/admins', label: 'Administradores', icon: 'mdi:administrator' },
    { to: '/superadmin/management/teachers', label: 'Docentes', icon: 'mdi:teach-poll' },
    { to: '/superadmin/management/students', label: 'Estudiantes', icon: 'mdi:account-student' },
    { to: '/superadmin/statistics', label: 'Estadísticas', icon: 'mdi:graph-line' },
    
];
</script>