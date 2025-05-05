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
  <form class="d-flex my-4">
    <input
      v-model="textoBusqueda"
      type="text"
      class="form-control me-2"
      placeholder="Buscar productos..."
      aria-label="Buscar"
    />
    <button type="button" class="btn btn-primary">
      <i class="bi bi-search"></i> Buscar
    </button>
  </form>
</template>