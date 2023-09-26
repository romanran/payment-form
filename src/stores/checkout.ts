import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
export const useCheckoutStore = defineStore('checkout', () => {
  const total = computed({
    get(): number {
      return order.products.reduce((reducer: number, value: { price: number }) => {
        return (reducer += value.price)
      }, 0)
    },
    set() {}
  })
  const order = reactive({
    products: [
      { name: 'Apple Watch Sport', price: 580 },
      { name: 'Modern Buckle', price: 380 }
    ],
    total
  })
  return { order }
})
