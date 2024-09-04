<script setup lang="ts">
import { useNavStore } from '@/stores/Nav';
import MoonIcon from './icons/MoonIcon.vue';
import SunIcon from './icons/SunIcon.vue';
const navStore = useNavStore()
</script>

<template>
    <div class="flex bg-yellow-100 dark:bg-black gap-5 mr-3 mt-2 p-1 py-2 rounded-lg items-center"    v-if="navStore.showNav">
        <SunIcon  class="z-20"
        :class="{'opacity-0':navStore.darkMode}"
        />
        <button
     
        class="opacity-100 mx-1 z-10 rounded-full w-6 h-6 absolute transition-left transition-right duration-500 bg-orange-400 dark:bg-blue-700" :class="{
            'left-0': !navStore.darkMode,
            'left-9': navStore.darkMode,
        }"></button>
        <MoonIcon class="z-20"
                :class="{'opacity-0':!navStore.darkMode}"
        />
    </div>
</template>

<style scoped></style>