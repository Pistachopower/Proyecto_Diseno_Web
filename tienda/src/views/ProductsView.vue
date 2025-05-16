<script setup>
import SearchBar from '@/components/SearchBar.vue';
import { useProductsStore} from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { ref, onMounted, computed } from 'vue';

// Hacemos el enlace con el store de productos
const productsStore = useProductsStore();
const { allProduct, categories } = storeToRefs(productsStore);

// Variables reactivas para el texto de búsqueda y la categoría seleccionada
const textoBusqueda = ref('');
const selectedCategory = ref(''); // '' significa "todas las categorías"

// Variable reactiva para los productos filtrados
const filteredProducts = computed(() => {
  // Filtrar por categoría
  let productosFiltrados = selectedCategory.value
    ? allProduct.value.filter(product => product.category === selectedCategory.value)
    : allProduct.value;

  // Filtrar por texto de búsqueda
  if (textoBusqueda.value.trim()) {
    productosFiltrados = productosFiltrados.filter(product =>
      product.title.toLowerCase().includes(textoBusqueda.value.toLowerCase())
    );
  }

  return productosFiltrados;
});

// Cargar los productos y categorías al montar el componente
onMounted(async () => {
  await productsStore.fetchProducts(); // Carga los productos desde la API
});


//IMPLEMENTACION DEL TOAST DE BOOTSTRAP POR PROBAR
// Función para filtrar productos por categoría
const filterByCategory = (category) => {
  selectedCategory.value = category; // Actualiza la categoría seleccionada
};

const cartStore = useCartStore();
const showToast = ref(false); // Controla si el Toast se muestra o no

// Función para añadir un producto al carrito
const addToCart = (producto) => {
  cartStore.addToCart(producto); // Añade el producto al carrito
  showToast.value = true; // Muestra el Toast
  setTimeout(() => {
    showToast.value = false; // Oculta el Toast después de 3 segundos
  }, 3000);
};


</script>

<template>
  <div>
    <!-- Barra de búsqueda -->
    <SearchBar v-model:search="textoBusqueda" />

    <!-- Botones de categorías -->
    <div class="container my-4">
      <div class="d-flex flex-wrap gap-2 mb-4">
        <button
          v-for="category in categories"
          :key="category"
          class="btn btn-outline-primary"
          :class="{ active: selectedCategory === category }"
          @click="filterByCategory(category)"
        >
          {{ category }}
        </button>
        <button
          class="btn btn-outline-secondary"
          :class="{ active: selectedCategory === '' }"
          @click="filterByCategory('')"
        >
          Todas
        </button>
      </div>

      <!-- Mostrar productos filtrados -->
      <div class="row">
        <div
          v-for="producto in filteredProducts"
          :key="producto.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="card h-100">
            <img
              :src="producto.image"
              class="card-img-top"
              alt="Producto"
              style="object-fit: cover; height: 200px;"
            />
            <div class="card-body d-flex flex-column">
              <router-link :to="`/product/${producto.id}`">
                <h5 class="card-title">{{ producto.title }}</h5>
              </router-link>
              <p class="card-text mb-2">${{ producto.price }}</p>
              <button class="btn btn-primary mt-auto" @click="addToCart(producto)">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- Toast de Bootstrap -->
  <div>
    <!-- Toast de confirmación -->
    <div
      class="toast-container position-fixed bottom-0 end-0 p-3"
      style="z-index: 11"
      v-if="showToast"
    >
      <div class="toast align-items-center text-white bg-success border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            Producto añadido al carrito.
          </div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            @click="showToast = false"
          ></button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
button.active {
  background-color: #0d6efd;
  color: white;
}
</style>