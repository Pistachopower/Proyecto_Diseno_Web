<script setup>
import { computed } from 'vue';
import { useProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';

const props = defineProps({
  categoria: {
    type: String,
    required: true, // La categoría es obligatoria
  },
});

console.log('Categoría recibida:', props.categoria);

const productsStore = useProductsStore();
const { allProduct } = storeToRefs(productsStore);

// Filtramos los productos que coinciden con la categoría
const productosRelacionados = computed(() =>
  allProduct.value.filter(producto => producto.category === props.categoria)
);
</script>

<template>
  <div class="mt-5">
    <h3>Productos Relacionados</h3>
    <div class="row">
      <div
        v-for="producto in productosRelacionados"
        :key="producto.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      >
        <div class="card h-100">
          <img
            :src="producto.image"
            class="card-img-top"
            alt="Producto"
            style="object-fit: cover; height: 200px;"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ producto.title }}</h5>
            <p class="card-text mb-2">{{ producto.price }} $</p>
            <router-link
              :to="`/product/${producto.id}`"
              class="btn btn-primary mt-auto"
            >
              Ver Detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>