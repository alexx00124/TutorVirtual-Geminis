<template>
    <div>
      <Subjects />
    </div>
  </template>
  
  <script setup>
  import Subjects from '~/components/dashboard/Teacher/subjects.vue';
  
  definePageMeta({
    layout: 'teacher',
  });
  </script>