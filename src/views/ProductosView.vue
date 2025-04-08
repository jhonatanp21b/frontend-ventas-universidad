<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSalesStore } from '@/stores/ventas'

const $salesStore = useSalesStore()
const { productsList } = storeToRefs($salesStore)
const { addProduct, removeProduct } = $salesStore

const productForm = ref({
  name: '',
  description: '',
  quantity: 0,
  price: 0,
})

function addProductList() {
  if (
    !productForm.value.name ||
    !productForm.value.description ||
    !productForm.value.quantity ||
    !productForm.value.price
  ) {
    alert('Por favor completa todos los campos del formulario')
    return
  }

  addProduct(productForm.value)

  productForm.value = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  }
}
</script>

<template>
  <main>
    <h2 class="title">Creacion de productos</h2>
    <div class="container">
      <form class="form" @submit.prevent="addProductList">
        <input class="name" v-model="productForm.name" placeholder="Nombre del producto" />
        <textarea class="desc" v-model="productForm.description" placeholder="Descripcion" />
        <input class="quantity" v-model="productForm.quantity" placeholder="Cantidad" />
        <input class="price" v-model="productForm.price" placeholder="Precio" />
        <div class="actions">
          <button type="submit">Confirmar</button>
        </div>
      </form>
      <section class="products">
        <div class="header">
          <h3>Productos</h3>
        </div>
        <ul class="products-list">
          <li v-for="(product, index) in productsList" :key="index">
            <span>{{ product.name }}</span>
            <div class="product-info">
              <span>${{ product.price }}</span>
              <button @click="removeProduct(product)">-</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 3em;

  .title {
    font-size: 5em;
    font-weight: 600;
    /* text-align: center; */
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    margin-top: 2em;

    .form {
      background-color: #101828;
      padding: 2em;
      border-radius: 10px;
      height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      grid-template-areas:
        'name name'
        'description description'
        'quantity price'
        'actions actions';

      .name {
        grid-area: name;
        padding: 1em;
        border-radius: 10px;
        border: none;
        background-color: #dbdbdb;
      }
      .desc {
        grid-area: description;
        padding: 1em;
        border-radius: 10px;
        border: none;
        background-color: #dbdbdb;
        height: 200px;
      }
      .quantity {
        grid-area: quantity;
        padding: 1em;
        border-radius: 10px;
        border: none;
        background-color: #dbdbdb;
      }
      .price {
        grid-area: price;
        padding: 1em;
        border-radius: 10px;
        border: none;
        background-color: #dbdbdb;
      }

      .actions {
        grid-area: actions;
        display: flex;
        justify-content: flex-end;

        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: 1px solid #fff;
          background-color: #000;
          color: #fff;
          font-size: 1.5em;
        }
      }
    }

    .products {
      background-color: #d9d9d9;
      /* padding: 2em; */
      border-radius: 10px;
      height: 100%;

      .header {
        padding: 2em;
        background-color: #101828;
        border-radius: 10px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 0;
        }

        button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background-color: #000;
          color: #fff;
          font-size: 2em;
        }
      }

      .products-list {
        list-style: none;
        padding: 0 2em 1em 2em;
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
              background-color: #000;
              color: #fff;
              font-size: 1.5em;
            }
          }
        }
      }
    }
  }
}
</style>
