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
  <a :href="url" target="_blank" rel="noopener noreferrer">
        <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="group transition-all duration-300 p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-1">
        <h3 class="text-gray-800 dark:text-gray-300 text-xl font-semibold group-hover:text-teal-500 transition-colors duration-300">
          <slot></slot>
        </h3>
        <div class="mt-1 h-1 w-0 group-hover:w-full bg-teal-500 transition-all duration-300"></div>
      </div>
      </a>
  </template>
  
  <style scoped>
  /* Opcional: Cambia el color del borde al pasar el mouse */
  .group:hover {
    border-color: teal; /* Cambia el color del borde al pasar el mouse */
  }
  </style>
  