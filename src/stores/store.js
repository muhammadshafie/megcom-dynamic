import { defineStore } from 'pinia'
import getData from '@/utils/google'

export const useStore = defineStore('store', {
  state: () => ({
    heroData: [],
    // layoutData: [],
    serviceData: [],
    footerData: [],
    certifiedData: [],
    aboutData: [],
    productData:[]
  }),
  actions: {
    async getHeroData() {
      try {
        const tab = 'home'
        const result = await getData(tab)
        this.heroData = result
      } catch (error) {
        console.error(error)
      }
    },
    async getFooterData() {
      try {
        const tab = 'footer'
        const result = await getData(tab)
        this.footerData = result[0]
      } catch (error) {
        console.error(error)
      }
    },
    async getServiceData() {
      try {
        const tab = 'services'
        const result = await getData(tab)
        this.serviceData = result
      } catch (error) {
        console.error(error)
      }
    },
    async getCertifiedData() {
      try {
        const tab = 'certified'
        const result = await getData(tab)
        this.certifiedData = result
      } catch (error) {
        console.error(error)
      }
    },
    async getAboutData() {
      try {
        const tab = 'about_us'
        const result = await getData(tab)
        this.aboutData = result
      } catch (error) {
        console.error(error)
      }
    },
    async getProducData(productName) {
      try {
        const tab = productName
        const result = await getData(tab)
        this.productData = result
      } catch (error) {
        console.error(error)
      }
    }
  }
})
