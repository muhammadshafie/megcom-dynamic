import { defineStore } from 'pinia'
import getData from '@/utils/google'

export const useStore = defineStore('store', {
  state: () => ({
    individualData: [],
    layoutData: [],
    serviceData:[],
    footerData:[],
  }),
  actions: {
    getMainData() {},
    async getFooterData () {
        try {
          const tab = 'footer' // Replace with the actual tab name you want to fetch
          const result = await getData(tab)
          // console.log(result)
          this.footerData = result[0]
        } catch (error) {
          console.error(error)
        }
    },
    async getServiceData () {
      try {
        const tab = 'services' // Replace with the actual tab name you want to fetch
        const result = await getData(tab)
        // console.log(result)
        this.serviceData = result
      } catch (error) {
        console.error(error)
      }
  }
  }
})
