<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';

import ProductosRelacionados from '@/components/ProductosRelacionados.vue';


const route = useRoute(); // Accede a la ruta actual
const productId = route.params.id; // Saca el ID del producto de la URL

const productsStore = useProductsStore(); // Accedemos al store
const { allProduct } = storeToRefs(productsStore); // Sacamos la lista de productos

// Buscamos el producto en la lista de productos con el ID de la URL
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

       <!-- Componente de productos relacionados -->
   <ProductosRelacionados :categoria="product.category" />
  </div>


</template>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>