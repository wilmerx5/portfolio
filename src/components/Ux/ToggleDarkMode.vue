<script setup lang="ts">
import { useNavStore } from '@/stores/Nav';
import MoonIcon from './icons/MoonIcon.vue';
import SunIcon from './icons/SunIcon.vue';
const navStore = useNavStore()
</script>

<template>
    <div class="absolute cursor-pointer flex bg-yellow-100 dark:bg-gray-800 gap-5 mr-3 mt-2 p-2 rounded-full items-center shadow-lg transition-all duration-500 ease-in-out w-20 h-10">
      <!-- Sol -->
      <SunIcon class="z-20 transition-opacity duration-500 cursor-pointer"
        :class="{'opacity-0': navStore.darkMode, 'opacity-100': !navStore.darkMode}" 
      />
      
      <!-- Botón -->
      <button
        class="absolute w-7 h-7 rounded-full bg-orange-400 dark:bg-blue-700 shadow-md transform transition-transform duration-500 ease-in-out" 
        :class="{
          'translate-x-0': !navStore.darkMode,
          'translate-x-9': navStore.darkMode
        }"
        
      ></button>
  
      <!-- Luna -->
      <MoonIcon class="z-20 transition-opacity duration-500 cursor-pointer"
        :class="{'opacity-0': !navStore.darkMode, 'opacity-100': navStore.darkMode}" 
      />
    </div>
  </template>
  
<style scoped></style>