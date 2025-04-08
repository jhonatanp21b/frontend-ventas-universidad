<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSalesStore } from '@/stores/ventas'

const $salesStore = useSalesStore()
const { productsList } = storeToRefs($salesStore)

const productSelected = ref(null)
const productListCart = ref([])
const moneyPayed = ref(0)

const totalSale = computed(() => {
  return productListCart.value.reduce((acc, product) => acc + parseInt(product.price), 0)
})

const totalChange = computed(() => {
  if (!moneyPayed.value) {
    return 0
  }

  return moneyPayed.value - totalSale.value
})

function addProductCart() {
  if (!productSelected.value) {
    alert('Por favor selecciona un producto')
    return
  }

  productListCart.value.push(productSelected.value)
}

function removeProductCart(index) {
  productListCart.value.splice(index, 1)
}
</script>

<template>
  <main>
    <section class="list-products">
      <h2>Venta de productos</h2>
      <article>
        <div class="header">
          <h3>Productos</h3>
          <div class="select">
            <select v-model="productSelected">
              <option disabled>Seleccionar producto</option>
              <option v-for="(item, index) in productsList" :key="index" :value="item">
                <span>{{ item.name }} - ${{ item.price }}</span>
              </option>
            </select>
            <button @click="addProductCart">+</button>
          </div>
        </div>
        <ul class="products">
          <li v-for="(product, index) in productListCart" :key="index">
            <span>{{ product.name }}</span>
            <div class="product-info">
              <span>${{ product.price }}</span>
              <button @click="removeProductCart(index)">-</button>
            </div>
          </li>

          <div class="no-data">
            <span v-if="productListCart.length === 0">No hay productos en la lista</span>
          </div>
        </ul>
      </article>
    </section>
    <section class="prices">
      <h2>Total Venta</h2>
      <span>{{ totalSale }}</span>
      <input v-model="moneyPayed" placeholder="Dinero entrante" />
      <h2>Total Cambio</h2>
      <span>{{ totalChange }}</span>
      <button>Confirmar</button>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3em;
  gap: 1rem;

  .list-products {
    border-radius: 8px;

    h2 {
      font-size: 5em;
      font-weight: 600;
      margin-bottom: 40px;
    }

    article {
      background-color: #101828;
      color: #fff;
      padding: 1em;
      border-radius: 10px;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 0;
        }

        .select {
          display: flex;
          align-items: center;
          gap: 10px;

          select {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #fff;
            font-size: 1em;
          }

          button {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background-color: #fff;
            color: #101828;
            font-size: 2em;
          }
        }
      }

      .products {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ccc;

          &:last-child {
            border-bottom: none;
          }

          .product-info {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: none;
              background-color: #fff;
              color: #101828;
              font-size: 1.5em;
            }
          }
        }
      }
    }
  }

  .prices {
    /* background-color: #d9d9d9; */
    padding: 1em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    h2 {
      font-size: 5em;
      font-weight: 600;
    }

    span {
      font-size: 3em;
      font-weight: 700;
      margin-bottom: 20px;
      color: #5a5a5a;
    }

    input {
      width: 50%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      background-color: #d9d9d9;
    }

    button {
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background-color: #101828;
      color: #fff;
      font-size: 1.5em;
    }
  }
}
</style>
