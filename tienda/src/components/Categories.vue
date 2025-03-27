<script setup>
</script>

<template>
    <div class="container text-center my-5">
        <h2 class="fw-bold">Nuestros productos.</h2>
        <p class="text-muted">Todos nuestros productos cuentan con una excelente calidad y han sido elaborados de manera
            artesanal por un equipo profesional.</p>

        <div class="row g-4 mt-4">
            <!-- Producto 1 -->
            <div class="col-md-3 mb-4">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://t1.uc.ltmcdn.com/es/posts/1/9/8/nombres_para_tiendas_de_ropa_de_mujer_50891_1_600.jpg"
                        class="card-img-top rounded-3" alt="Producto 1">
                    <div class="category-overlay">Ropa mujer</div>
                </div>
            </div>

            <!-- Producto 2 -->
            <div class="col-md-3 mb-4">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.gmarfil.com/img/cms/tienda_red.jpg"
                        class="card-img-top rounded-3" alt="Producto 2">
                    <div class="category-overlay">Ropa hombre</div>
                </div>
            </div>

            <!-- Producto 3 -->
            <div class="col-md-3 mb-4">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://www.marthadebayle.com/wp-content/uploads/2021/09/Accesorios-moda.jpeg"
                        class="card-img-top rounded-3" alt="Producto 3">
                    <div class="category-overlay">Accesorio</div>
                </div>
            </div>

            <!-- Producto 4 -->
            <div class="col-md-3 mb-4">
                <div class="card border-0 shadow-lg product-card">
                    <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309628.jpg"
                        class="card-img-top rounded-3" alt="Producto 4">
                    <div class="category-overlay">Tecnología</div>
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
