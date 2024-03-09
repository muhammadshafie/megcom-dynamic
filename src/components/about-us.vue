<template lang="">
  <section id="about-us" class="py-6">
    <div class="mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <p
        class="text-base font-semibold leading-7 text-red-600 mb-6 text-center lg:hidden xl:hidden"
      >
        About Us
      </p>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 justify-center items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="relative lg:mr-8 rounded-3xl overflow-hidden">
          <div class="relative rounded-3xl bg-transparent overflow-hidden">
            <img
              class="h-full w-full object-cover brightness-125"
              src="https://shafieramli.com/megcom-dynamic/images/about-bg.jpg"
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gray-900 opacity-40 mix-blend-multiply"></div>

          <div class="absolute bottom-0 left-0">
            <template v-for="item in aboutData" :key="item.id" class="px-8 pb-10 text-white">
              <template v-if="item.id === 1">
                <div class="px-8 pb-10 text-white font-bold">
                  <p>
                    {{ item.section_description }}
                  </p>
                </div>
              </template>
              <template v-else />
            </template>
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-red-600 mb-6 max-[890px]:hidden">
              About Us
            </p>
            <template v-for="item in aboutData" :key="item.id">
              <template v-if="item.section_title !== 'Intro' && item.section_title !== 'Reach Us'">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
                    {{ item.section_title }}
                  </h3>
                  <div class="max-w-xl">
                    <p class="mt-6 text-white">
                      {{ item.section_description }}
                    </p>
                  </div>
                </div>
              </template>
              <template v-else-if="item.section_title === 'Reach Us'">
                <div class="mt-6 flex">
                  <a
                    :href="item.CTA_url"
                    target="_blank"
                    class="text-base font-bold leading-7 text-green-600"
                  >
                    {{ item.CTA }} <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </template>
              <template v-else />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export default {
  setup() {
    const store = useStore()
    const { aboutData } = storeToRefs(store)

    onMounted(() => {
      store.getAboutData()
    })
    return {
      aboutData
    }
  }
}
</script>
<style></style>
