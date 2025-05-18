<script setup>
import { ref, watch } from 'vue';

const textoBusqueda = ref(''); // Variable para almacenar la consulta de búsqueda

// Emitir el texto de búsqueda al componente padre
const emit = defineEmits(['update:search']);
watch(textoBusqueda, (newValue) => {
  emit('update:search', newValue); // Emitimos el texto de búsqueda al padre
});
</script>

<template>
  <form class="searchbar-form d-flex justify-content-center align-items-center">
    <input
      v-model="textoBusqueda"
      type="text"
      class="form-control searchbar-input"
      placeholder="Buscar productos..."
      aria-label="Buscar"
    />
    <button type="button" class="btn btn-primary ms-2 searchbar-btn">
      <i class="bi bi-search"></i> Buscar
    </button>
  </form>


  
</template>

<style scoped>
.searchbar-form {
  margin: 32px 0 32px 0; /* Arriba y abajo */
  padding: 0 24px;        /* Izquierda y derecha */
}

.searchbar-input {
  min-width: 250px;
  max-width: 400px;
  padding: 12px 16px;
}

.searchbar-btn {
  padding: 10px 20px;
}
</style>
