<script setup>
import { ref, onMounted } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();

    // ⚠️ IMPORTANTE: Inicializar el carrusel en Vue con Bootstrap
    import('bootstrap').then(({ Carousel }) => {
      new Carousel(document.querySelector('#carouselExampleDark'), {
        interval: 5000,
        ride: 'carousel'
      });
    });

  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
});
</script>

<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
    
    <!-- 🔹 Indicadores dinámicos -->
    <div class="carousel-indicators">
      <button v-for="(item, index) in products" :key="`indicator-${item.id}`"
        type="button" 
        data-bs-target="#carouselExampleDark" 
        :data-bs-slide-to="index" 
        :class="{ 'active': index === 0 }"
        :aria-current="index === 0 ? 'true' : null"
        :aria-label="`Slide ${index + 1}`">
      </button>
    </div>

    <!-- 🔹 Slides dinámicos -->
    <div class="carousel-inner">
      <div v-for="(item, index) in products" :key="item.id"
        class="carousel-item"
        :class="{ 'active': index === 0 }"
        data-bs-interval="5000">
        <img :src="item.image" class="d-block w-50 mx-auto" alt="Imagen del producto">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>${{ item.price }}</p>
        </div>
      </div>
    </div>

    <!-- 🔹 Controles de navegación -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-inner img {
  width: 100%; /* Hace que las imágenes ocupen todo el ancho disponible */
  max-width: 600px; /* Tamaño máximo para evitar imágenes muy grandes */
  height: 400px; /* Tamaño fijo para mantener proporción */
  object-fit: contain; /* Evita deformaciones */
  margin: auto; /* Centra las imágenes */
  display: block;
}

</style>
