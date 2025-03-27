<script setup>

</script>

<template>
    <div class="container text-center my-5">
        <h2 class="fw-bold">Nuestros productos.</h2>
        <p class="text-muted">Todos nuestros productos cuentan con una excelente calidad y han sido elaborados de manera
            artesanal por un equipo profesional.</p>

        <div class="row mt-4">
            <!-- Producto 1 -->
            <div class="col-md-3">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg"
                        class="card-img-top rounded-3" alt="Producto 1">
                    <div class="category-overlay">Frutas Deshidratadas</div>
                </div>
            </div>

            <!-- Producto 2 -->
            <div class="col-md-3">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg"
                        class="card-img-top rounded-3" alt="Producto 2">
                    <div class="category-overlay">Mermeladas Artesanales</div>
                </div>
            </div>

            <!-- Producto 3 -->
            <div class="col-md-3">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg"
                        class="card-img-top rounded-3" alt="Producto 3">
                    <div class="category-overlay">Snacks Saludables</div>
                </div>
            </div>

            <!-- Producto 4 -->
            <div class="col-md-3">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg"
                        class="card-img-top rounded-3" alt="Producto 4">
                    <div class="category-overlay">Bebidas Artesanales</div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* Estilos para la tarjeta */
.product-card {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}

/* Imagen con transición suave */
.product-card img {
    width: 100%;
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
}

/* Efecto zoom al pasar el mouse */
.product-card:hover img {
    transform: scale(1.05);
}

/* Capa de categoría (inicialmente oculta) */
.category-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

/* Mostrar la categoría al hacer hover */
.product-card:hover .category-overlay {
    opacity: 1;
}
</style>