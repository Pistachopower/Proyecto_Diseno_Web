<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../stores/products';
import Products from './Products.vue';

const productsStore = useProductsStore();

// Recibir la categoría seleccionada como prop
defineProps({
  selectedCategory: {
    type: String,
    required: true,
  },
});

// Filtrar los productos según la categoría seleccionada
const filteredProducts = computed(() =>
  productsStore.products.filter((product) => product.category === selectedCategory)
);
</script>

<template>
  <div>
    <h2>Productos en la categoría: {{ selectedCategory }}</h2>
    <div class="row">
      <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-3">
        <Products :product="product" />
      </div>
    </div>
  </div>
</template>