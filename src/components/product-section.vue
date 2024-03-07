<template>
  <div class="about py-24 px-36 max-[468px]:px-2">
    <template v-for="(item, index) in product" :key="index">
      <template v-if="item.id !== null">
        <div class="flex items-center max-[468px]:flex-col justify-center">
          <div
            class="rounded-2xl overflow-hidden md:relative md:border-2 flex-none max-[468px]:mx-10 max-[468px]:py-4 max-[468px]:px-3 max-[468px]:border-x-2 max-[468px]:border-x-2 max-[468px]:border-t-2 border-[#006839] flex flex-col items-center bg-white shadow-[5px_5px_0px_0px_rgba(0,104,57)]"
          >
            <div class="relative items-center">
              <img class="h-32 max-[468px]:h-20 w-auto object-cover" :src="item.logo" />
            </div>
            <div class="relative p-4">
              <h3 class="text-xl lg:text-2xl xl:text-2xl font-bold italic text-gray-900">
                {{ item.specialize }}
              </h3>
              <p class="text-gray-600 font-bold mt-2">
                {{ item.description }}
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl overflow-hidden -mx-6 max-[468px]:-my-4 border max-[468px]:border-2 border-[#d92826] flex-auto md:p-12 max-[468px]:p-6 max-[468px]:mx-4 text-gray-900 shadow-[5px_5px_0px_0px_rgba(217,40,38)]"
          >
            <div class="mb-3" v-if="item.catalogue !== null">
              <h6>
                {{ item.catalogue !== null ? item.company_name + ' Catalogue:' : null }}
              </h6>
              <template v-for="item in catalogue" :key="item.id">
                <p>
                  {{ item.id }}.
                  <a :href="item.catalogue_url" targe="_blank">{{ item.catalogue }}</a>
                </p>
              </template>
            </div>
            <div class="mb-3" v-else-if="item.manual !== null">
              <h6>{{ item.manual !== null ? item.company_name + ' Manual:' : null }}</h6>
              <template v-for="item in manual" :key="item.id">
                <p>
                  {{ item.id }}. <a :href="item.manual_url" targe="_blank">{{ item.manual }}</a>
                </p>
              </template>
            </div>
            <template v-else></template>
          </div>
        </div>
      </template>
      <template v-else />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProductSection',
  props: {
    catalogue: {
      type: Array,
      require: true
    },
    product: {
      type: Array,
      require: true
    },
    manual: {
      type: Array,
      require: true
    }
  }
}
</script>

<style></style>
