import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [], // Lista de productos en el carrito
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        return;
      }

      this.cartItems.push({ ...product, quantity: 1 });
    },
    removeFromCart(productId) {
      // Elimina un producto del carrito por su ID(guarda los productos que no coinciden y deja fuera el que quieres eliminar)
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
  },
});