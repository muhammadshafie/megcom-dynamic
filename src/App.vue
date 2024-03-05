<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/small-components/navbar.vue'
import footerSection from './components/small-components/footer-section.vue'
</script>

<template>
  <navbar />
  <RouterView />
  <footer-section />
</template>

<style scoped></style>
