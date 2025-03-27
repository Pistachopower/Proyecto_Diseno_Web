import {defineStore} from 'pinia'

export const useProductsStore = defineStore('products',{
  id: 'products',
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      this.products = await response.json()
    }
  }
})
