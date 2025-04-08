<script setup></script>

<template>
  <main>
    <div class="home-container">
      <h1>¡Bienvenido a nuestra Tienda Virtual!</h1>

      <div class="features">
        <div class="feature-card">
          <h2>Productos</h2>
          <p>
            Explora nuestro catálogo completo de productos disponibles. Encuentra lo que necesitas
            con facilidad.
          </p>
          <router-link to="/productos" class="feature-link">Ver Productos</router-link>
        </div>

        <div class="feature-card">
          <h2>Ventas</h2>
          <p>Gestiona tus transacciones y revisa el historial de ventas realizadas.</p>
          <router-link to="/ventas" class="feature-link">Ir a Ventas</router-link>
        </div>
      </div>

      <div class="welcome-message">
        <p>Simplifica tu experiencia de compra y venta en una sola plataforma</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
  height: 80dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.feature-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.welcome-message {
  margin-top: 40px;
  font-size: 1.2em;
  color: #555;
}
</style>
