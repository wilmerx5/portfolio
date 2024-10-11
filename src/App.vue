<script setup>
import NavSide from '@/components/Nav/NavSide.vue';
import 'animate.css';
import { RouterView } from 'vue-router';
import { useNavStore } from './stores/Nav';

const navStore = useNavStore()

</script>

<template>
  <div :class="{'dark':navStore.darkMode}">
    
    <NavSide></NavSide>
    <RouterView class="min-h-100vh  bg-white dark:bg-black ml-5vw"  />
  </div>



</template>

