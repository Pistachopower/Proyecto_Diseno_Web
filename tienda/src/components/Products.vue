<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card mb-3 h-100 p-3">
    <img :src="product.image" class="card-img-top" alt="product.title" style="max-height: 200px; object-fit: contain; padding: 1rem;">
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">Precio: ${{ product.price }}</p>
      <a href="#" class="btn btn-primary">Ver detalles</a>
    </div>
  </div>
</template>

<style scoped>  </style>