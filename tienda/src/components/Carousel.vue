<script setup>
import { ref, onMounted } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useProductsStore } from '../stores/products';

//Creamos una conexión al store de productos
const productsStore = useProductsStore();

// Creamos una caja (reactiva) donde vamos a guardar 3 productos destacados
const productsDestacados = ref([]); 

//onMounted: cuando el componente ya aparece en pantalla, ejecutamos esta función
onMounted(async () => {
    // 1. Esperamos que el store vaya a buscar los productos de Internet
  await productsStore.fetchProducts(); 

    // 2. Cuando ya tenemos todos los productos, tomamos solo los primeros 3
  productsDestacados.value = productsStore.products.slice(0, 3);

  console.log('Productos destacados:', productsDestacados.value);
});
</script>

<template>
    <!-- Contenedor principal para darle márgenes al carrusel -->
  <div class="carousel-container">

    <!-- Carrusel de Bootstrap -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
     
      <!-- Parte 1: Indicadores (los botones/círculos pequeños debajo del carrusel) -->
      <div class="carousel-indicators">
        <!-- Recorremos los productos destacados para crear un indicador por cada uno -->
        <button
          v-for="(product, index) in productsDestacados"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Parte 2: Slides del carrusel (donde aparecen las imágenes) -->
      <div class="carousel-inner">

        <!-- Recorremos los productos destacados para crear un slide por cada uno -->
        <div
          v-for="(product, index) in productsDestacados"
          :key="product.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
        
          <!-- Imagen del producto -->
          <img
            :src="product.image"
            class="d-block w-100 carousel-image"
            :alt="product.title"
          >

          <!-- Texto sobre la imagen (título y precio) -->
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5>{{ product.title }}</h5>
            <p>${{ product.price }}</p>
          </div>
        </div>
      </div>

       <!-- Botón para ir al slide anterior -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>

      <!-- Botón para ir al siguiente slide -->
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  margin-top: 3rem; /* Espacio arriba */
  margin-bottom: 3rem; /* Espacio abajo */
}

.carousel-image {
  height: 400px;
  object-fit: contain;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
  width: 3rem;
  height: 3rem;
  opacity: 0.8;
}

</style>
