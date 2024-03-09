<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/small-components/navbar.vue'
import footerSection from './components/small-components/footer-section.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <navbar />
    <RouterView class="flex-grow" />
    <footer-section />
  </div>
</template>

<style scoped></style>
