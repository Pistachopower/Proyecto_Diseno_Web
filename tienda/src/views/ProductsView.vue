<script setup>
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

import { useListaProductos } from '@/stores/buscar';
import { storeToRefs } from 'pinia';

const productosStore = useListaProductos();
const { productos } = storeToRefs(productosStore);
</script>


<template>
  <div>
    <SearchBar />
    <SearchResults :results="productos" />
  </div>
</template>

<style scoped></style>
