<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import ProductosRelacionados from '@/components/ProductosRelacionados.vue';

const productsStore = useProductsStore();
const { allProduct } = storeToRefs(productsStore);

//creamos el objeto de la ruta para obtener el ID del producto
const route = useRoute();

// Obtenemos el ID del producto desde los parámetros de la ruta
const productId = route.params.id;

// Buscamos el producto en la lista de productos con el ID de la URL
const product = allProduct.value.find(p => p.id === parseInt(productId));


const cartStore = useCartStore();



// Toast reactivo
const showToast = ref(false);

// Función para añadir el producto al carrito y mostrar el toast
const addToCart = () => {
  if (product) {
    cartStore.addToCart(product);
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 2000);
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
.img-fluid {
  max-width: 100%;
  height: auto;
}
button {
  font-size: 1.2rem;
}
.toast-container {
  z-index: 1055;
}
</style>