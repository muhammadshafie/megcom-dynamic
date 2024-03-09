<template>
  <div class="about py-24 px-36 max-[843px]:px-2 h-full">
    <template v-for="(item, index) in product" :key="index">
      <template v-if="item.id !== null">
        <div class="flex items-center max-[843px]:flex-col justify-center">
          <div
            class="max-w-xl p-4 rounded-2xl overflow-hidden md:relative md:border-2 flex-none max-[843px]:mx-10 max-[843px]:py-4 max-[843px]:px-3 max-[843px]:border-x-2 max-[843px]:border-x-2 max-[843px]:border-t-2 border-[#006839] flex flex-col items-center bg-white shadow-[5px_5px_0px_0px_rgba(0,104,57)]"
          >
            <div class="relative items-center">
              <img class="h-20 max-[843px]:h-10 w-auto object-cover" :src="item.logo" />
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
            class="bg-white rounded-2xl overflow-hidden -mx-6 max-[843px]:-my-4 border max-[843px]:border-2 border-[#d92826] flex-auto md:p-12 max-[843px]:p-6 max-[843px]:mx-4 text-gray-900 shadow-[5px_5px_0px_0px_rgba(217,40,38)]"
          >
            <div class="mb-3" v-if="item.catalogue !== null">
              <h6 class="font-bold">
                {{ item.company_name + ' Catalogue:' }}
              </h6>
              <template v-for="item in catalogue" :key="item.id">
                <p>
                  {{ item.id }}.
                  <a
                    :href="`https://shafieramli.com/megcom-dynamic/products/schneider-electric/pdf/catalogue/${item.catalogue_url}.pdf`"
                    target="_blank"
                    >{{ item.catalogue }}</a
                  >
                </p>
              </template>
            </div>
            <div class="mb-3" v-if="item.manual !== null">
              <h6 class="font-bold">{{ item.company_name + ' Manual:' }}</h6>
              <template v-for="item in manual" :key="item.id">
                <p>
                  {{ item.id }}.
                  <a
                    :href="`https://shafieramli.com/megcom-dynamic/products/schneider-electric/pdf/manual/${item.manual_url}.pdf`"
                    target="_blank"
                    >{{ item.manual }}</a
                  >
                </p>
              </template>
            </div>
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
