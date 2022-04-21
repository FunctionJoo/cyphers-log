import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    apiKey: 'op0BJXIb0rUOJ0HcUwTyMrcnOQ6zmIXh',
    testId: 'a52d4f6e8e4303f9e59c46354d2b92ba'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
