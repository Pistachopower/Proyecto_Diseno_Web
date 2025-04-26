<script setup>
import { ref, onMounted } from 'vue';

const userName = ref('');
const userAvatar = ref('');
const isLoggedIn = ref(false); // Variable para controlar si el usuario está logueado

// Recuperar los datos del localStorage al cargar el componente
onMounted(() => {
  userName.value = localStorage.getItem('userName') || 'Invitado';
  userAvatar.value = localStorage.getItem('userAvatar') || '';
  isLoggedIn.value = !!localStorage.getItem('isLoggedIn'); // Verifica si el usuario está logueado
});

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('isLoggedIn'); // Elimina el estado de sesión
  localStorage.removeItem('userName'); // Elimina el nombre del usuario
  localStorage.removeItem('userAvatar'); // Elimina el avatar del usuario
  isLoggedIn.value = false; // Actualiza el estado de sesión
  userName.value = 'Invitado'; // Restablece el nombre del usuario
  userAvatar.value = ''; // Restablece el avatar

  // Recargar la página para mostrar el modal nuevamente
  window.location.reload();
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand fw-bold" href="#">
        <i class="bi bi-shop-window fs-3"></i>
      </a>

      <!-- Botón para colapsar el menú en pantallas pequeñas -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
          <!-- Enlaces principales -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>

          <!-- Mostrar botones según el estado de sesión -->
          <li class="nav-item d-flex align-items-center gap-2" v-if="!isLoggedIn">
            <button class="btn btn-outline-light">
              <i class="bi bi-pencil-square"></i> Registrarse
            </button>
            <button class="btn btn-warning">
              <i class="bi bi-key"></i> Iniciar sesión
            </button>
          </li>

          <li class="nav-item d-flex align-items-center gap-2" v-else>
            <!-- Avatar y nombre del usuario -->
            <img v-if="userAvatar" :src="userAvatar" alt="Avatar" class="rounded-circle border border-light"
              style="width: 40px; height: 40px;" />
            <span class="text-white">{{ userName }}</span>
            <!-- Botón de cerrar sesión -->
            <button class="btn btn-danger" @click="logout">
              <i class="bi bi-box-arrow-right"></i> Cerrar sesión
            </button>
          </li>

          <!-- Ícono del carrito -->
          <li class="nav-item">
            <router-link class="nav-link position-relative text-white" to="/cart">
              <i class="bi bi-cart3 fs-4"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Estilo para el avatar */
.rounded-circle {
  border: 2px solid white;
}
</style>