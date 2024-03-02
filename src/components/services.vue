<template>
    <section class="py-6 bg-red-cargo" id="contact_us">
        <div class="md:container lg:container xl:container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p class="p-2 text-sm font-medium tracki text-white text-center uppercase">Our Services</p>
            <h2 class="text-4xl font-bold leadi text-center sm:text-5xl">Elevate Your Business with Our Expert Solutions.
            </h2>

            <div class="flex flex-row flex-wrap justify-center mt-8">
                <template v-for="(item, index) in serviceData" :key="index">

                    <div
                        class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <div class="flex-1 my-4 max-h-[200px] object-cover overflow-hidden ">
                            <img :src="`../assets/images/services/${item.service_image}.jpg`">
                        </div>
                        <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <p>{{ item.service_name }}</p>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </section>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

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
<style lang="">
    
</style>