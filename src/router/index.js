import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/ventas',
          name: 'ventas',
          component: () => import('../views/VentasView.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/productos',
          name: 'productos',
          component: () => import('../views/ProductosView.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/about',
          component: () => import('../views/AboutView.vue'),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        { path: 'login', name: 'login', component: () => import('../views/LoginView.vue') },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/RegisterView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const $authStore = useAuthStore()
  const isAuthenticated = $authStore.userIsLoggedIn

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
