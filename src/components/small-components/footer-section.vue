<template>
  <div id="footer">
    <!-- <p>{{ footerData
        }}</p> -->
    <div
      class="flex flex-col justify-center items-center pt-5 pb-10 border-t border-deep-purple-accent-200"
    >
      <p data-v-2cb4637e="" class="text-center text-sm text-gray-100">
        © Copyright 2023 {{ footerData.company_name }}. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

export default {
  name: 'FooterComponent',
  setup() {
    const store = useStore()
    const { footerData } = storeToRefs(store)
    onMounted(() => {
      store.getFooterData()
    })
    return {
      footerData
    }
  }
}
</script>
<style lang="css">
#footer {
  background-color: rgb(0, 104, 56);
}
</style>
