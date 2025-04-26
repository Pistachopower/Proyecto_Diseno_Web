<script setup>
import { ref, onMounted } from 'vue';
import * as bootstrap from 'bootstrap'; // Importa el objeto bootstrap

// Variables reactivas para el nombre y el avatar seleccionado
const userName = ref('');
const selectedAvatar = ref('');

// Lista de avatares disponibles
const avatars = [
  'https://cdn-icons-png.flaticon.com/512/1864/1864509.png',
  'https://cdn-icons-png.flaticon.com/512/4202/4202834.png',
  'https://cdn-icons-png.flaticon.com/512/924/924915.png',
];

// Función para guardar los datos en localStorage
const saveUserData = () => {
  if (userName.value.trim() === '' || selectedAvatar.value === '') {
    alert('Por favor, ingresa tu nombre y selecciona un avatar.');
    return;
  }

  // Guardar los datos en localStorage
  localStorage.setItem('userName', userName.value);
  localStorage.setItem('userAvatar', selectedAvatar.value);
  localStorage.setItem('isLoggedIn', 'true'); // Marca al usuario como logueado

  // Ocultar el modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('userModal'));
  modal.hide();

  // Recargar la página para reflejar los cambios en el header
  window.location.reload();
};

// Mostrar el modal automáticamente si no hay datos en localStorage
onMounted(() => {
  const storedName = localStorage.getItem('userName');
  const storedAvatar = localStorage.getItem('userAvatar');

  if (!storedName || !storedAvatar) {
    const modal = new bootstrap.Modal(document.getElementById('userModal'), {
      backdrop: 'static', // Evita que el usuario cierre el modal haciendo clic fuera
      keyboard: false, // Evita que el usuario cierre el modal con la tecla Esc
    });
    modal.show();
  }
});
</script>

<template>
  <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userModalLabel">Configura tu perfil</h5>
        </div>
        <div class="modal-body">
          <!-- Campo para el nombre -->
          <div class="mb-3">
            <label for="userName" class="form-label">Nombre</label>
            <input v-model="userName" type="text" id="userName" class="form-control" placeholder="Ingresa tu nombre" />
          </div>

          <!-- Selección de avatares -->
          <div class="mb-3">
            <label class="form-label">Selecciona un avatar</label>
            <div class="d-flex gap-3">
              <div
                v-for="avatar in avatars"
                :key="avatar"
                class="border p-2 rounded"
                :class="{ 'border-primary': selectedAvatar === avatar }"
                @click="selectedAvatar = avatar"
              >
                <img :src="avatar" alt="Avatar" class="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="saveUserData">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>