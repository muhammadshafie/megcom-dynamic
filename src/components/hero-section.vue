<template>
  <!-- {{ heroData }} -->
  <div
    v-for="item in heroData"
    :key="item.id"
    :style="{ 'background-image': `url(${item.bg_image})` }"
    class="bg-white bg-no-repeat bg-fixed bg-cover bg-center"
  >
    <!-- Hero Section Here -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="capitalize text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white"
          >
            {{ item.main_title }}
          </h1>
          <p
            class="mt-6 text-lg leading-8 text-gray-900 drop-shadow-lg font-bold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white"
          >
            {{ item.main_description }}
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              class="cursor-pointer flex items-center rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <p>{{ item.cta }}</p>
              <ArrowDownIcon class="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export default {
  name: 'HeroSection',
  components: {
    ArrowDownIcon
  },
  setup() {
    const store = useStore()
    const { heroData } = storeToRefs(store)
    onMounted(() => {
      store.getHeroData()
    })
    return {
      heroData
    }
  }
}
</script>

<style></style>
