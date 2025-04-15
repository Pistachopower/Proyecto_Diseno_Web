<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';

// Obtenemos el ID del producto desde la URL
const route = useRoute();
const productId = route.params.id;

// Accedemos al store de productos
const productsStore = useProductsStore();
const { allProduct } = storeToRefs(productsStore);

// Buscamos el producto en la lista de productos
const product = allProduct.value.find(p => p.id === parseInt(productId));
</script>

<template>
  <div class="container my-5">
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" alt="Imagen del producto" class="img-fluid mb-4" />
      <p>{{ product.description }}</p>
      <p class="fw-bold">Precio: ${{ product.price }}</p>
    </div>
    <div v-else>
      <p>Producto no encontrado.</p>
    </div>
  </div>
</template>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>