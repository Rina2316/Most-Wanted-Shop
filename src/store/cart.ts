import { defineStore } from 'pinia';
import { IProduct } from '@/interfaces/product.interface';

interface CartItem extends IProduct {
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalAmount: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalQuantity: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    addToCart(product: IProduct) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
