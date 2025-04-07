<script setup>
import { onMounted, ref } from 'vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

// Arrays para guardar las categorías específicas y los productos filtrados
const allowedCategories = ["men's clothing", "jewelery", "electronics", "women's clothing"];
const filteredCategories = ref([]);
const productsByCategory = ref({});
const selectedCategory = ref(null); // Categoría seleccionada por el usuario

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
  <div v-if="productsStore.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>
  <div v-else-if="productsStore.error" class="alert alert-danger text-center">
    Error: {{ productsStore.error }}
  </div>
  <div v-else>
    <div class="container py-4">
      <h1 class="text-center mb-4">Productos</h1>
      <p class="text-center">Selecciona una categoría para ver los productos o deja el selector vacío para ver todos los productos.</p>

      <!-- Selector de categorías -->
      <div class="mb-4 text-center">
        <h2 class="h5">Categorías</h2>
        <select v-model="selectedCategory" class="form-select w-50 mx-auto">
          <option value="" disabled>Selecciona una categoría</option>
          <option value="">Todos los productos</option>
          <option v-for="category in filteredCategories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Mostrar los productos -->
      <div class="mt-4">
        <h3 class="text-center mb-4">
          {{ selectedCategory ? `Productos en la categoría: ${selectedCategory}` : "Todos los productos" }}
        </h3>
        <div class="row g-4">
          <div
            v-for="product in (selectedCategory ? productsByCategory[selectedCategory] : productsStore.products)"
            :key="product.id"
            class="col-md-4"
          >
            <div class="card h-100 shadow-sm">
              <!-- Imagen del producto -->
              <img
                :src="product.image"
                class="card-img-top img-fluid"
                :alt="product.title"
              />
              <div class="card-body">
                <h5 class="card-title text-truncate">{{ product.title }}</h5>
                <p class="card-text text-muted small">{{ product.description }}</p>
                <p class="card-text fw-bold">Precio: ${{ product.price }}</p>
              </div>
              <div class="card-footer text-center">
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>