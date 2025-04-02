<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">
        <i class="bi bi-shop-window fs-3"></i>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>

          <li class="nav-item">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar">
              <button class="btn btn-outline-light" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </li>

          <li class="nav-item d-flex align-items-center gap-2">
            <a class="btn btn-outline-light" href="">
              <i class="bi bi-pencil-square"></i> Registrarse
            </a>
            <a class="btn btn-warning" href="">
              <i class="bi bi-key"></i> Iniciar sesión
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link position-relative text-white" href="">
              <i class="bi bi-cart3 fs-4"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Mejoras en la navegación */
.navbar-nav .nav-link {
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover,
.navbar-nav .router-link-active {
  color: #f8d210 !important;
  /* Color destacado */
}

/* Forzar iconos en blanco */
.bi-cart3,
.bi-person-plus,
.bi-box-arrow-in-right {
  color: white;
}

/* Badge de la cesta de compra */
.badge {
  font-size: 0.8rem;
  padding: 5px 8px;
}

/* Ajustes responsivos */
@media (max-width: 992px) {
  .navbar-nav {
    text-align: center;
  }
}
</style>