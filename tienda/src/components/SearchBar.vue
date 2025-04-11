<script setup>
import { ref } from 'vue';
import { useListaProductos } from '@/stores/buscar';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const productosStore = useListaProductos();
const router = useRouter();

const buscarProductos = async () => {
  if (searchQuery.value.trim() === "") return;

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Error al buscar productos');

    const data = await response.json();
    
    const resultadosFiltrados = data.filter(producto =>
      producto.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    
    productosStore.clearProductos();
    productosStore.setProductos(resultadosFiltrados);

    if (router.currentRoute.value.name !== 'Products') {
      router.push({ name: 'Products' }); // Ahora navega hacia "Products"
    }

    console.log(data);
  } catch (error) {
    console.error(error.message);
    console.log('Ha saltado aqui.');
  }

  
};
</script>


<template>
    <form @submit.prevent="buscarProductos">
      <input v-model="searchQuery" placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  </template>