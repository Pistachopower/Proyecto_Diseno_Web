<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../stores/products';
import Products from '../components/Products.vue';
import Filters from '../components/Filters.vue';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<template>
  <div v-if="productsStore.loading">Cargando...</div>
  <div v-else-if="productsStore.error">Error: {{ productsStore.error }}</div>
  <div v-else>
    <div class="container p-4"> 
      <div class="row">
        <div class="col-md-3">
          <Filters />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div v-for="product in productsStore.products" :key="product.id" class="col-md-4 mb-3">
              <Products :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

