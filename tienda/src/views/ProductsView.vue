<script setup>
import SearchBar from '@/components/SearchBar.vue';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { ref, onMounted, computed } from 'vue';

// Enlace con el store de productos
const productsStore = useProductsStore();
const { allProduct, categories } = storeToRefs(productsStore);

// Variables reactivas para búsqueda y categoría
const textoBusqueda = ref('');
const selectedCategory = ref('');

// Cargar productos al entrar en la página
onMounted(async () => {
  await productsStore.fetchProducts();
});

// Filtro por categoría
const filterByCategory = (category) => {
  selectedCategory.value = category;
};

// Computed para productos filtrados
const filteredProducts = computed(() => {
  let productosFiltrados = 
  selectedCategory.value? 
  //Si selectedCategory tiene un valor, filtrar por categoría
  //sino muestra todos los productos
    allProduct.value.filter(product => product.category === selectedCategory.value)
    : allProduct.value;

  //Si el usuario escribe un producto con
  //que pertenece a la categoría seleccionada
  //guardar en productosFiltrados
  if (textoBusqueda.value.trim()) {
    productosFiltrados = productosFiltrados.filter(product =>
      product.title.toLowerCase().includes(textoBusqueda.value.toLowerCase())
    );
  }
  return productosFiltrados;
});





// Carrito y Toast
const cartStore = useCartStore();
const showToast = ref(false);

// Añadir al carrito y mostrar Toast
const addToCart = (producto) => {
  cartStore.addToCart(producto);
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <!-- Barra de búsqueda -->
    <SearchBar v-model:search="textoBusqueda" />

    <!--Botones de categorías-->
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

    <!-- Toast de confirmación -->
    <div
      class="toast-container position-fixed bottom-0 end-0 p-3"
      style="z-index: 1055"
      v-if="showToast"
    >
      <div class="toast show align-items-center text-white bg-success border-0" role="alert">
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
.card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

/* 👇 Botón más compacto y centrado */
.card-body .btn {
  align-self: center;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
}

.toast-container {
  z-index: 1055;
}
</style>