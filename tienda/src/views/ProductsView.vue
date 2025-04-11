<script setup>
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

import { listaProductos } from '@/stores/buscar';
import { useProductsStore } from '@/stores/products';

import { storeToRefs } from 'pinia';

import { onMounted, watch } from 'vue';

//hacemos el enlace con el store de product
const allProductsStore = useProductsStore();

//guardamos los productos de la API en el store
const { allProduct } = storeToRefs(allProductsStore);



onMounted(() => {
  allProductsStore.fetchProducts();
});

// Monitoreamos los cambios en allProduct
watch(allProduct, (newValue) => {
  if (newValue.length > 0) {
    console.log('Productos cargados:', newValue);
  }
});

//hacemos el enlace con el store de productos
const productosStore = listaProductos();

//aqui guardamos los productos filtrados para pasarselos al componente SearchResults
const { productos } = storeToRefs(productosStore);  
</script>


<template>
  <div>
    <SearchBar />

    <div v-if="productos.length > 0">
      <SearchResults :results="productos" />
    </div>

    <div v-else>
      <div class="container my-4">
        <div class="row">
          <div v-for="(producto, index) in allProduct" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img :src="producto.image" class="card-img-top" alt="Producto" style="object-fit: cover; height: 200px;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ producto.title }}</h5>
                <p class="card-text mb-2">{{ producto.price }} $</p>
                <button class="btn btn-primary mt-auto">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<style scoped></style>
