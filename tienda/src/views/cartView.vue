<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);

// Creamos un objeto reactivo para las cantidades
const cantidades = ref({});
cartItems.value.forEach(item => {
  if (!cantidades.value[item.id]) cantidades.value[item.id] = 1;
});

// Cambiar cantidad
const cambiarCantidad = (id, cambio) => {
  if (cantidades.value[id] + cambio >= 1) {
    cantidades.value[id] += cambio;
  }
};

// Calcular subtotal
const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * (cantidades.value[item.id] || 1), 0)
);

// Simular impuestos y total
const salesTax = computed(() => +(subtotal.value * 0.1).toFixed(2)); // 10% de impuestos
const grandTotal = computed(() => (subtotal.value + salesTax.value).toFixed(2));
</script>

<template>
  <div class="container my-5">
    <h2 class="mb-4">Productos en el carrito ({{ cartItems.length }} items)</h2>
    <div class="row">
      <!-- Tabla de productos -->
      <div class="col-lg-8">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>Artículo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <img :src="item.image" alt="" style="width:60px; height:60px; object-fit:cover; margin-right:10px;">
                <strong>{{ item.title }}</strong>
              </td>
              <td>${{ item.price }}</td>
              <td>
                <div class="input-group" style="width:120px;">
                  <button class="btn btn-outline-secondary" @click="cambiarCantidad(item.id, -1)">-</button>
                  <input type="text" class="form-control text-center" :value="cantidades[item.id]" readonly>
                  <button class="btn btn-outline-secondary" @click="cambiarCantidad(item.id, 1)">+</button>
                </div>
              </td>
              <td>${{ (item.price * (cantidades[item.id] || 1)).toFixed(2) }}</td>
              <td>
                <button class="btn btn-sm btn-danger" @click="cartStore.removeFromCart(item.id)">
                  <i class="bi bi-x"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Resumen del pedido -->
      <div class="col-lg-4">
        <div class="card p-3">
          <h5>Resumen del pedido</h5>
          <div class="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Impuesto:</span>
            <span>${{ salesTax }}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Cupón:</span>
            <a href="#" class="text-primary">Añadir cupón</a>
          </div>
          <hr>
          <div class="d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span>${{ grandTotal }}</span>
          </div>
          <div class="alert alert-success mt-3 p-2">
           ¡Felicidades! Calificas para <b>envío gratuito</b>
          </div>
          <button class="btn btn-dark w-100 mt-2">Finalizar compra</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>