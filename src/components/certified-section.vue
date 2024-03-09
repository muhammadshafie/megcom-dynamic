<template lang="">
  <section class="py-6 px-8 mx-auto md:px-14 lg:px-16 lg:w-4/5 w-full">
    <p class="px-2 py-4 text-sm font-medium tracki text-white text-center uppercase">
      We are Certified by
    </p>
    <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
      <div v-for="item in certifiedData" :key="item.id">
        <a
          :href="`https://shafieramli.com/megcom-dynamic/pdf/${item.pdf_url}.pdf`"
          class="flex justify-center"
        >
          <img
            class="lg:h-[60px] h-[40px]"
            :class="item.company_logo2 !== null ? 'px-2' : ''"
            :src="`https://shafieramli.com/megcom-dynamic/images/${item.company_logo1}.png`"
            alt=""
          />
          <template v-if="item.company_logo2 !== null">
            <img
              class="lg:h-[60px] h-[40px]"
              :class="item.company_logo2 !== null ? 'px-2' : ''"
              :src="`https://shafieramli.com/megcom-dynamic/images/${item.company_logo2}.png`"
              alt=""
            />
          </template>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export default {
  name: 'CertifiedSectionComponent',
  setup() {
    const store = useStore()
    const { certifiedData } = storeToRefs(store)

    onMounted(() => {
      store.getCertifiedData()
    })

    return {
      certifiedData
    }
  }
}
</script>
<style lang=""></style>
