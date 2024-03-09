<template>
  <section id="services" class="py-6">
    <div
      class="md:container lg:container xl:container flex flex-col items-center justify-center p-4 mx-auto sm:p-10"
    >
      <p class="p-2 text-sm font-medium tracki text-white text-red-600 text-center uppercase">
        Our Services
      </p>
      <h2 class="text-4xl font-bold leadi text-center text-green-600 sm:text-5xl">
        Elevate Your Business with Our Expert Solutions.
      </h2>

      <div class="flex flex-row flex-wrap justify-center mt-8">
        <template v-for="(item, index) in serviceData" :key="index">
          <!-- <div
            :id="`service-${index}`"
            class="flex flex-col justify-center w-full px-6 mx-6 my-6 lg:my-12 xl:my-12 md:my-6 text-center rounded-2xl md:w-96 lg:w-80 xl:w-80 dark:bg-gray-100 dark:text-gray-800"
          >
            <div
              class="flex-1 my-6 max-h-[200px] object-cover overflow-hidden flex flex-col rounded-xl"
              :class="`justify-${item.img_position}`"
            >
              <img
                :src="`https://shafieramli.com/megcom-dynamic/images/services/${item.service_image}.jpg`"
              />
            </div>
            <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
              <p>{{ item.service_name }}</p>
            </div>
          </div> -->
          <div
            class="flex flex-col justify-center w-full mx-6 my-6 overflow-hidden lg:my-12 xl:my-12 md:my-6 text-center rounded-2xl md:w-96 lg:w-80 xl:w-80 dark:bg-gray-100 dark:text-gray-800"
          >
            <div class="h-[200px] w-full relative overflow-hidden">
              <img
                :src="`https://shafieramli.com/megcom-dynamic/images/services/${item.service_image}.jpg`"
                class="h-full w-full object-cover"
                :style="`object-position: ${item.img_position}`"
                :alt="item.service_name"
              />
            </div>
            <div class="px-6 py-4 flex justify-between">
              <div
                class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
              >
                0{{ index + 1 }}
              </div>
              <div class="flex items-end">
                <h3 class="text-xl font-bold text-black">{{ item.service_name }}</h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

export default {
  name: 'ServicesComponent',
  setup() {
    const store = useStore()
    const { serviceData } = storeToRefs(store)
    onMounted(() => {
      store.getServiceData()
    })
    return {
      serviceData
    }
  }
}
</script>
<style lang=""></style>
