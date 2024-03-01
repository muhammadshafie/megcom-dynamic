<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="../../assets/images/megcom-dynamic-logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="item in navigations" :key="item.id">
          <template v-if="item.type !== 'dropdown'">
            <a :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{
              item.name
            }}</a>
          </template>
          <template v-else>
            <Popover class="relative">
              <PopoverButton
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none"
              >
                {{ item.name }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div class="p-4">
                    <div
                      v-for="dropdown in item.menu"
                      :key="dropdown.name"
                      class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                    >
                      <div class="flex-auto">
                        <a :href="dropdown.href" class="block font-semibold text-gray-900">
                          {{ dropdown.name }}
                          <template v-if="dropdown.name !== 'Other Brands'">
                            <span
                              :style="{ backgroundImage: `url('${dropdown.bg}')` }"
                              :class="{
                                'absolute inset-0 bg-cover opacity-0 hover:opacity-20  group-hover:grayscale': true,
                                'bg-top':
                                  dropdown.name === 'Schneider Electric' ||
                                  dropdown.name === 'Vacon',
                                'bg-center':
                                  dropdown.name !== 'Schneider Electric' ||
                                  dropdown.name !== 'Vacon'
                              }"
                            />
                          </template>
                          <template v-else>
                            <span
                              class="text-[110px] pt-6 overflow-hidden font-extrabold bg-clip-text absolute inset-0 bg-cover opacity-0 hover:opacity-20 group-hover:grayscale"
                            >
                              Others
                            </span>
                          </template>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </template>
        </template>
      </PopoverGroup>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in products"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'

import { ChevronDownIcon } from '@heroicons/vue/20/solid'
export default {
  name: 'NavbarComponent',
  components: {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon
  },
  setup() {
    const products = [
      {
        name: 'Schneider Electric',
        href: '#',
        bg: 'src/assets/images/schneider-electric-logo.png'
      },
      {
        name: 'ABB',
        href: '#',
        bg: 'src/assets/images/abb-logo.png'
      },
      {
        name: 'Danfoss',
        href: '#',
        bg: 'src/assets/images/danfoss-logo.png'
      },
      {
        name: 'Emotron',
        href: '#',
        bg: 'src/assets/images/emotron-logo.png'
      },
      {
        name: 'Vacon',
        href: '#',
        bg: 'src/assets/images/vacon-logo.png'
      },
      {
        name: 'Other Brands',
        href: '#',
        bg: 'src/assets/images/schneider-electric-logo.png'
      }
    ]

    const navigations = [
      {
        name: 'Home',
        href: '/',
        type: 'page'
      },
      {
        name: 'About Us',
        href: '/about-us',
        type: 'page'
      },
      {
        name: 'Product',
        href: null,
        type: 'dropdown',
        menu: products
      },
      {
        name: 'Gallery',
        href: '/gallery',
        type: 'page'
      },
      {
        name: 'Contact Us',
        href: '/contact-us',
        type: 'page'
      }
    ]

    const mobileMenuOpen = ref(false)

    return {
      products,
      mobileMenuOpen,
      navigations
    }
  }
}
</script>
