import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    individualData: [],
    layoutData: []
  }),
  actions: {
    getMainData() {}
  }
})
