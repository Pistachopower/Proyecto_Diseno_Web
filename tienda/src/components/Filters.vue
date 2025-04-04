<script setup>
//const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3']; // Reemplaza con tus categorías

import { useProductsStore } from '../stores/products';
const productsStore = useProductsStore();
const categories = productsStore.categories;
</script>

<template>
  <div class="card p-3 mb-3">
    <h2>Filtros</h2>
    <div class="mb-3">
      <label for="search" class="form-label">Buscar</label>
      <div class="input-group">
        <input type="text" id="search" class="form-control" placeholder="Buscar productos...">
        <button class="btn btn-primary" type="button">Buscar</button>
      </div>
    </div>
    <div class="mb-3">
      <h3>Categorías</h3>
      <div v-for="category in categories" :key="category" class="form-check">
        <input type="checkbox" :id="category" :value="category" class="form-check-input">
        <label :for="category" class="form-check-label">{{ category }}</label>
      </div>
    </div>
    <div class="mb-3">
      <h3>Ingredientes</h3>
      <select class="form-select">
        <option value="">Todos</option>
        <option value="ingrediente1">Ingrediente 1</option>
        <option value="ingrediente2">Ingrediente 2</option>
      </select>
    </div>
  </div>
  </template>
  
