<script setup>
import { useProductsStore } from '../stores/products';
const productsStore = useProductsStore();

// Emitir la categoría seleccionada
const emit = defineEmits(['filterCategory']);
const selectCategory = (category) => {
  emit('filterCategory', category);
};
</script>

<template>
  <div class="card p-3 mb-3">
    <h2>Filtros</h2>
    <div class="mb-3">
      <h3>Categorías</h3>
      <div v-for="category in productsStore.categories" :key="category" class="form-check">
        <input
          type="radio"
          :id="category"
          :value="category"
          class="form-check-input"
          name="category"
          @change="selectCategory(category)"
        />
        <label :for="category" class="form-check-label">{{ category }}</label>
      </div>
    </div>
  </div>
</template>