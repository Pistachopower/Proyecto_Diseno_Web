<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

import ProductosRelacionados from '@/components/ProductosRelacionados.vue';

const route = useRoute(); // Accede a la ruta actual
const productId = route.params.id; // Saca el ID del producto de la URL

const productsStore = useProductsStore(); // Accedemos al store de productos
const { allProduct } = storeToRefs(productsStore); // Sacamos la lista de productos

const cartStore = useCartStore(); // Accedemos al store del carrito

// Buscamos el producto en la lista de productos con el ID de la URL
const product = allProduct.value.find(p => p.id === parseInt(productId));

// Función para añadir el producto al carrito
const addToCart = () => {
  if (product) {
    cartStore.addToCart(product); // Añade el producto al carrito
    alert('Producto añadido al carrito'); // Feedback para el usuario
  }
};
</script>

<template>
  <div class="container my-5">
    <div v-if="product" class="row">
      <!-- Imagen del producto -->
      <div class="col-md-6">
        <img :src="product.image" alt="Imagen del producto" class="img-fluid rounded shadow" />
      </div>

      <!-- Información del producto -->
      <div class="col-md-6">
        <h1 class="fw-bold">{{ product.title }}</h1>
        <p class="text-muted">{{ product.description }}</p>
        <p class="fs-4 fw-bold text-primary">Precio: ${{ product.price }}</p>

        <!-- Botón para añadir al carrito -->
        <button class="btn btn-success btn-lg mt-3" @click="addToCart">
          <i class="bi bi-cart-plus"></i> Añadir al carrito
        </button>
      </div>
    </div>

    <!-- Productos relacionados -->
    <div class="mt-5">
      <ProductosRelacionados :categoria="product.category" />
    </div>
  </div>
</template>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}

button {
  font-size: 1.2rem;
}
</style>