<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import {onMounted } from 'vue'
import {useProductsStore} from './stores/productsStore'


const productsStore = useProductsStore()

onMounted(async () => {
    productsStore.fetchProducts() // Llama a la acción cuando el componente se monta
})



</script>

<template>
    <div class="app">
        <Header />
        <main>
            <RouterView />
            
        </main>
        
        <footer class="footer">
            <Footer />
        </footer>
    </div>


</template>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.footer {
    margin-top: auto;
}

</style>
