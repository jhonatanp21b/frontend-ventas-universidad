import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useSalesStore = defineStore('sales', () => {
  const $authStore = useAuthStore()

  const productsList = ref(
    localStorage.getItem('productsList') ? JSON.parse(localStorage.getItem('productsList')) : [],
  )

  function addProduct(product) {
    if ($authStore.currentUser.role == 'user') {
      alert('No tienes permisos para agregar productos')
      return
    }

    const productReal = { id: nextId(), ...product }
    console.log('Adding product:', productReal)

    const existingProductIndex = productsList.value.findIndex((p) => p.id === productReal.id)
    if (existingProductIndex !== -1) {
      productsList.value[existingProductIndex].quantity += productReal.quantity
      console.log('Updated existing product:', productsList.value[existingProductIndex])
      localStorage.setItem('productsList', JSON.stringify(productsList.value))
    } else {
      console.log('Adding new product:', productReal)
      productsList.value.push(productReal)
      localStorage.setItem('productsList', JSON.stringify(productsList.value))

      alert('Producto agregado')
    }

    // productsList.value.push(productReal)
    // localStorage.setItem('productsList', JSON.stringify(productsList.value))
  }

  function removeProduct(product) {
    productsList.value = productsList.value.filter((p) => p.id !== product.id)
    localStorage.setItem('productsList', JSON.stringify(productsList.value))

    alert('Producto eliminado')
  }

  function nextId() {
    const lastId = Math.max(...productsList.value.map((product) => product.id), 0)
    return lastId + 1
  }

  return {
    productsList,
    addProduct,
    removeProduct,
    nextId,
  }
})
