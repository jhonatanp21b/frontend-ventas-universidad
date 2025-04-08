import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // Check if usersList exists in localStorage, if not, create it
  if (!localStorage.getItem('usersList')) {
    localStorage.setItem(
      'usersList',
      JSON.stringify([
        {
          username: 'admin',
          password: 'admin',
          role: 'admin',
        },
        {
          username: 'user',
          password: 'user',
          role: 'user',
        },
      ]),
    )
  }

  const currentUser = ref(null)

  const usersList = ref(
    localStorage.getItem('usersList') ? JSON.parse(localStorage.getItem('usersList')) : [],
  )

  const userIsLoggedIn = ref(false)

  function login(user) {
    const userFound = usersList.value.find((u) => u.username === user.username)

    if (userFound && userFound.password === user.password) {
      alert('Bienvenido usuario')

      currentUser.value = userFound
      userIsLoggedIn.value = true
      return true
    } else {
      alert('Usuario o contraseña incorrectos')
      userIsLoggedIn.value = false
      return false
    }
  }

  function registerUser(user) {
    const userFound = usersList.value.find((u) => u.username === user.username)

    if (userFound) {
      alert('El usuario ya existe')
      return false
    } else {
      usersList.value.push(user)
      localStorage.setItem('usersList', JSON.stringify(usersList.value))
      alert('Usuario registrado')
      return true
    }
  }

  function logout() {
    currentUser.value = null
    userIsLoggedIn.value = false
  }

  return {
    userIsLoggedIn,
    currentUser,

    login,
    registerUser,
    logout,
  }
})
