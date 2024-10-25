<script setup lang="ts">
import { useNavStore } from '@/stores/Nav';
import { RouterLink } from 'vue-router';
import BarsIcons from '../Ux/icons/BarsIcons.vue';
import CloseIcon from '../Ux/icons/CloseIcon.vue';
import Mask from '../Ux/Mask.vue';
import ToggleDarkMode from '../Ux/ToggleDarkMode.vue';
const navStore = useNavStore()
</script>

<template>
<div
  class="absolute mt-4 lg:mt-0 ml-3 lg:ml-0 lg:m-0 p-3 lg:p-0 rounded-full shadow-lg bg-gradient-to-r from-indigo-700 to-indigo-900 lg:rounded-none lg:fixed top-0 left-0 lg:h-full lg:w-5vw lg:bg-indigo-900 lg:flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110"
>
  <BarsIcons class="size-5 lg:size-6" @click="navStore.handleShowNav()" />
</div>


  <Mask v-if="navStore.showNav" @click="navStore.handleShowNav" />
  
  <div class="fixed top-0 h-full w-80vw md:w-30vw bg-indigo-900 flex justify-between z-20" :class="{
    'left-0 animate__fadeInLeft animate__animated': navStore.showNav,
    'hideNav ': !navStore.showNav
  }">
    <ToggleDarkMode class="absolute right-0" @click="navStore.handleTheme()" />

    <div class="flex-1 flex flex-col items-center justify-center text-white uppercase text-2xl font-semibold gap-3">
      <RouterLink 
      active-class="text-emerald-400 "
      :to="{name:'home'}" @click="navStore.handleShowNav">
        <h2 class="hover:text-emerald-400 transition-colors duration-300">About Me</h2>
      </RouterLink>

      <RouterLink 
        active-class="text-emerald-400 "
      :to="{name:'projects'}" @click="navStore.handleShowNav">
        <h2 class="hover:text-emerald-400 transition-colors duration-300">Projects</h2>
      </RouterLink>

      <RouterLink
        active-class="text-emerald-400 "
      :to="{name:'contact'}" @click="navStore.handleShowNav">
        <h2 class="hover:text-emerald-400 transition-colors duration-300">Contact Me</h2>
      </RouterLink>
    </div>

    <div class="space-x-2 flex flex-col justify-center">
      <CloseIcon @click="navStore.handleShowNav" v-if="navStore.showNav" />
    </div>
  </div>
</template>

<style scoped>
.hideNav {
  transition: left 1.5s;
  left: -100vw;
}
</style>