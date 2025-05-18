<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'




</script>

<template>
  <div class="app-layout">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
