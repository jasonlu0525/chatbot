<script setup>
import Header from '@/components/Header.vue';
import BackToTopBtn from '@/components/BackToTopBtn.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <BackToTopBtn />
</template>

<style lang="scss"></style>
