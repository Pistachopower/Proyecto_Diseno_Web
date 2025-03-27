<script setup>

</script>

<template>
  
  <div class="container my-5 p-4 border rounded shadow bg-light">
  <h2 class="mb-4">Contacto</h2>

  <form>
    <!-- Nombre -->
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" id="nombre" class="form-control" placeholder="Tu nombre" />
      <div class="invalid-feedback">El nombre es obligatorio.</div>
    </div>

    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" class="form-control" placeholder="nombre@ejemplo.com" />
      <div class="invalid-feedback">El correo es obligatorio.</div>
    </div>

    <!-- Mensaje -->
    <div class="mb-3">
      <label for="mensaje" class="form-label">Mensaje</label>
      <textarea id="mensaje" class="form-control" rows="4" placeholder="Tu mensaje"></textarea>
      <div class="invalid-feedback">El mensaje es obligatorio.</div>
    </div>

    <!-- Botón Enviar -->
    <button type="submit" class="btn btn-primary w-100">Enviar</button>
  </form>

  <!-- Toast de éxito -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div class="toast align-items-center text-white bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">¡Correo enviado con éxito!</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>  </style>