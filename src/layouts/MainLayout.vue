<template>
  <header>
    <div class="logo">Yo vendo</div>

    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Inicio</router-link>
        </li>
        <li><router-link :to="{ name: 'ventas' }">Ventas</router-link></li>
        <li v-if="$authStore.currentUser?.role == 'admin'">
          <router-link :to="{ name: 'productos' }">Productos</router-link>
        </li>
        <button class="logout" @click="logout">
          <LogoutIcon width="20px" height="20px" />
        </button>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LogoutIcon from '@/components/icons/LogoutIcon.vue'

const $authStore = useAuthStore()
const router = useRouter()

function logout() {
  router.push({ name: 'login' })
  $authStore.logout()
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #101828;
  color: white;
  font-size: 2em;

  nav ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;

    li a {
      color: white;
      text-decoration: none;
    }
    li a:hover {
      text-decoration: underline;
    }

    .logout {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 50%;
      border: none;
      background-color: #fff;
      color: #101828;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        background-color: #101828;
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
