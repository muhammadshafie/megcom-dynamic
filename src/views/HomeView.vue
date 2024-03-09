<template lang="">
  <div>
    <hero-section />
    <certified-section />
    <services />
    <about-us-section />
    <contact-us />
  </div>
</template>
<script>
import services from '@/components/services.vue'
import certifiedSection from '@/components/certified-section.vue'
import aboutUsSection from '@/components/about-us.vue'
import heroSection from '@/components/hero-section.vue'
import contactUs from '@/components/contact-us.vue'

export default {
  name: 'HomePage',
  components: {
    services,
    certifiedSection,
    aboutUsSection,
    heroSection,
    contactUs
  }
}
</script>
<style lang=""></style>
