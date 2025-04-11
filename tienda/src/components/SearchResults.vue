<template>
    <div class="search-results">
      <div v-if="results.length">
        <h3 class="my-4">Resultados de Productos</h3>
        <div class="results-list">
          <div v-for="producto in results" :key="producto.id" class="product-card">
            <img :src="producto.image" alt="Producto" />
            <h2>{{ producto.title }}</h2>
            <p>{{ producto.price }} $</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No se encontraron productos.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    results: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .search-results {
    margin-top: 20px;
  }
  
  .results-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .product-card img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
  }
  </style>
  