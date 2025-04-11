<script setup>
import { ref } from 'vue';
import { listaProductos } from '@/stores/buscar';
import { useRouter } from 'vue-router';

const textoBusqueda = ref(''); // Variable para almacenar la consulta de búsqueda
const productosStore = listaProductos();
const router = useRouter();

const buscarProductos = async () => {
  //si searchQuery no es valido detenemos la busqueda
  if (textoBusqueda.value.trim() === "") return;

  try {
    //Obtiene todos los productos de la API
    const response = await fetch('https://fakestoreapi.com/products');


    if (!response.ok) throw new Error('Error al buscar productos');

    // Convierte la respuesta a JSON
    const data = await response.json();

    // Filtra los productos que coinciden con la consulta de búsqueda searchQuery
    const resultadosFiltrados = data.filter(producto =>
      producto.title.toLowerCase().includes(textoBusqueda.value.toLowerCase())
    );

    //Limpiamos la lista de productos antigua
    productosStore.clearProductos();

    // Añadimos los productos filtrados 
    productosStore.setProductos(resultadosFiltrados);

    // if (router.currentRoute.value.name !== 'Products') {
    //   router.push({ name: 'Products' }); // Ahora navega hacia "Products"
    // }

    console.log(data);
  } catch (error) {
    console.error(error.message);
    console.log('Ha saltado aqui.');
  }


};
</script>


<template>
  <!--
    @submit.prevent="buscarProductos": ejecuta la funcion buscarProductos
    -->
  <form @submit.prevent="buscarProductos" class="d-flex my-4">
    <input v-model="textoBusqueda" type="text" class="form-control me-2" placeholder="Buscar productos..."
      aria-label="Buscar">
      <button type="submit" class="btn btn-primary">
  <i class="bi bi-search"></i> Buscar
</button>

  </form>

</template>