<script setup>
import Hero from './Hero.vue'
import Category from './Categories.vue'
import Contacto from './Contacto.vue'


import { onMounted, watch } from 'vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});

watch(
  () => productsStore.products,
  (newProducts) => {
    console.log('Productos de la API:', newProducts);
  }
);

</script>

<template>
    <Hero />
    
    <Category />

    <Contacto />
</template>

<style scoped>
</style>