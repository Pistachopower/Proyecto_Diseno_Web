<script setup>
import { onMounted, ref } from 'vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

// Arrays para guardar las categorías específicas y los productos filtrados
const allowedCategories = ["men's clothing", "jewelery", "electronics", "women's clothing"];
const filteredCategories = ref([]);
const productsByCategory = ref({});

onMounted(async () => {
  await productsStore.fetchProducts(); // Llamar a la acción para cargar los productos

  // Filtrar las categorías específicas
  filteredCategories.value = [...new Set(productsStore.products
    .map((product) => product.category)
    .filter((category) => allowedCategories.includes(category)))];

  // Crear un objeto con los productos separados por categoría
  productsByCategory.value = filteredCategories.value.reduce((acc, category) => {
    acc[category] = productsStore.products.filter((product) => product.category === category);
    return acc;
  }, {});

  // Mostrar los resultados en la consola
  console.log('Categorías filtradas:', filteredCategories.value);
  console.log('Productos por categoría:', productsByCategory.value);
});
</script>

<template>
  <div v-if="productsStore.loading">Cargando...</div>
  <div v-else-if="productsStore.error">Error: {{ productsStore.error }}</div>
  <div v-else>
    <div class="container p-4">
      <h1>Productos</h1>
      <p>Revisa la consola para ver los arrays generados.</p>

      <!-- Mostrar las categorías -->
      <h2>Categorías</h2>
      <ul>
        <li v-for="category in filteredCategories" :key="category">{{ category }}</li>
      </ul>

      <!-- Mostrar los productos por categoría -->
      <div v-for="(products, category) in productsByCategory" :key="category" class="mb-4">
        <h3>{{ category }}</h3>
        <ul>
          <li v-for="product in products" :key="product.id">{{ product.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>