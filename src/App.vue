<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>

<style>
@import '@/assets/base.css';

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
} */

.content {
  display: flex;
  min-height: 90vh;
  padding: 3rem;
  padding-left: calc(3rem + 100px);
  box-sizing: border-box;
}

a,
.green {
  text-decoration: none;
  color: hsla(0, 0%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(0, 0%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
}
</style>
