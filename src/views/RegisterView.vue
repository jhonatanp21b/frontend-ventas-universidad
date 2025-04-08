<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const $authStore = useAuthStore()

const router = useRouter()
const userForm = ref({
  username: '',
  password: '',
  role: 'user',
})

function register() {
  const result = $authStore.registerUser(userForm.value)
  if (result) {
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="register">
      <h2 class="title">Registrate</h2>
      <div class="container">
        <input class="name" v-model="userForm.username" placeholder="Nombre de usuario" />
        <input
          class="password"
          type="password"
          v-model="userForm.password"
          placeholder="Contraseña"
        />
        <select v-model="userForm.role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div class="actions">
          <button type="submit">Registrarse</button>

          <router-link :to="{ name: 'login' }">Iniciar sesion</router-link>
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #101828;

  form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    max-width: 400px;
    padding: 2em;
    background-color: #ffffff17;
    border: 1px solid #cccccc3f;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    .title {
      font-size: 2em;
      font-weight: 600;
      text-align: center;
      margin-bottom: 1em;
      color: #fff;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 1em;

      input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 1em;
      }

      select {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 1em;
      }

      .actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #007bff;
          color: white;
          font-size: 1em;
          cursor: pointer;

          &:hover {
            background-color: #0056b3;
          }
        }

        a {
          margin-top: 1em;
          color: #007bff;
          font-size: 0.9em;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
