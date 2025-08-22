<template>
    <div class="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
     
      <MenuSection />
      <HowItWorks />
      <AboutSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  </template>
  
  <script setup>
  import NavBar from '../components/Navbar.vue'
  import HeroSection from '../components/HeroSection.vue'
  import HowItWorks from '../components/HowItWorks.vue'
  import AboutSection from '../components/AboutSection.vue'
  import MenuSection from '../components/MenuSection.vue'
  import TestimonialSection from '../components/TestimonialSection.vue'
  import FooterSection from '../components/FooterSection.vue'
  </script>