<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

// Hacemos el enlace con el store del carrito
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);


// Calculamos el total del pedido
const totalPedido = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price, 0)
);
</script>

<template>
  <div class="container my-5">
    <h1>Carrito de Compras</h1>

    <!-- Mostrar productos del carrito -->
    <div v-if="cartItems.length > 0">
      <div class="row">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="card h-100">
            <img
              :src="item.image"
              class="card-img-top"
              alt="Producto"
              style="object-fit: cover; height: 200px;"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text mb-2">Precio: ${{ item.price }}</p>
              <button
                class="btn btn-danger mt-auto"
                @click="cartStore.removeFromCart(item.id)"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mostrar el total del pedido -->
      <div class="mt-4 text-end">
        <h4>Total del Pedido: ${{ totalPedido }}</h4>
      </div>
    </div>

    <!-- Mensaje si el carrito está vacío -->
    <div v-else>
      <p class="text-muted">El carrito está vacío HOLA.</p>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>