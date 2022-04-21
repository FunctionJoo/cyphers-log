import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    apiKey: 'op0BJXIb0rUOJ0HcUwTyMrcnOQ6zmIXh',
    testId: 'a52d4f6e8e4303f9e59c46354d2b92ba'
  }),
  getters: {
    //
  },
  actions: {
    loading() {
			document.querySelector('.loading').classList.add('on');
		},
		loadingOk() {
			document.querySelector('.loading').classList.remove('on');
			console.log('load ok');
		}
  }
})
