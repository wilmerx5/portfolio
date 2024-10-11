<script setup>
import { useProjectsStore } from '@/stores/Projects';


const projectsStore = useProjectsStore()

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
})

const handleMouseEnter = () => {
    projectsStore.showingProject = props.image;

    console.log(projectsStore.value)
};

const handleMouseLeave = () => {
    projectsStore.showingProject = ''

    console.log(projectsStore.value)

};
</script>


<template>
    <div class="pl-6 group transition-all duration-300" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <h3 class="text-gray-800 dark:text-gray-300 text-3xl font-semibold group-hover:text-teal-500 transition-colors duration-300">
          <slot></slot>
        </h3>
        <div class="mt-2 h-1 w-0 group-hover:w-full bg-teal-500 transition-all duration-300"></div>
      </a>
    </div>
  </template>
