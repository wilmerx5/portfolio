<script setup lang="ts">
import { useNavStore } from '@/stores/Nav';

import BarsIcons from '../Ux/icons/BarsIcons.vue';
import CloseIcon from '../Ux/icons/CloseIcon.vue';
import Mask from '../Ux/Mask.vue';
import ToggleDarkMode from '../Ux/ToggleDarkMode.vue';
const navStore = useNavStore()
</script>

<template>

  <div class="fixed top-0 left-0  h-full w-5vw bg-indigo-900 flex flex-col justify-center items-center">
    <BarsIcons @click="navStore.handleShowNav()" />
  </div>


  <Mask v-if="navStore.showNav" @click="navStore.handleShowNav" />
  <div class="fixed top-0  h-full w-30vw bg-indigo-900 flex  justify-between z-20 " :class="{
    'left-0 animate__fadeInLeft animate__animated ': navStore.showNav,
    'hideNav ': !navStore.showNav
  }">


<ToggleDarkMode  class="absolute right-0" @click="navStore.handleTheme()"/>


    <div class="flex-1 flex flex-col items-center justify-center text-white uppercase text-1xl gap-3">

      <h2>About Me</h2>
      <h2>Projects</h2>
      <h2>Contact me</h2>
 
    </div>

    <div class="space-x-2 class flex flex-col justify-center">
      <CloseIcon @click="navStore.handleShowNav" v-if="navStore.showNav"/>
    </div>
  </div>
</template>

<style scoped>
.hideNav {
  transition: left 1s;
  left: -30vw;
}
</style>