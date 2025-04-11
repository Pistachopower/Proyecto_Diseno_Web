<script setup>
const props = defineProps({
  results: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="container my-5">
    <div v-if="results.length">
      <h3 class="mb-4">Resultados de Productos</h3>
      <div class="row">
        <div v-for="producto in results" :key="producto.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img :src="producto.image" class="card-img-top" alt="Producto" style="object-fit: cover; height: 200px;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ producto.title }}</h5>
              <p class="card-text mb-2">{{ producto.price }} $</p>
              <button class="btn btn-success mt-auto">Ver Detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center my-5">
      <p class="text-muted">No se encontraron productos.</p>
    </div>
  </div>

</template>


<style scoped></style>