<template lang="">
  <div>
    <product-section
      :catalogue="filteredProductCatalogue"
      :product="productData"
      :manual="filteredProductManual"
    />
  </div>
</template>
<script>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import productSection from '@/components/product-section.vue'

export default {
  name: 'ProductPage',
  components: {
    productSection
  },
  setup() {
    const store = useStore()
    const { productData } = storeToRefs(store)
    const route = useRoute()
    const productName = ref([])
    const filteredProductCatalogue = ref([])
    const filteredProductManual = ref([])

    productName.value = route.params.productName

    console.log(route)

    onMounted(async () => {
      await store.getProducData(productName.value)

      filteredProductCatalogue.value = productData.value
        .filter((item) => item.catalogue !== null)
        .map((item, index) => ({
          id: index + 1,
          catalogue: item.catalogue,
          catalogue_url: item.catalogue_url
        }))

      filteredProductManual.value = productData.value
        .filter((item) => item.manual !== null)
        .map((item, index) => ({
          id: index + 1,
          manual: item.manual,
          manual_url: item.manual_url
        }))
      return { filteredProductCatalogue, filteredProductManual }
    })

    return {
      productData,
      productName,
      filteredProductCatalogue,
      filteredProductManual
    }
  }
}
</script>
<style lang=""></style>
