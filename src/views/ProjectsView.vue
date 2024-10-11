<script setup>
import ProjectTitle from '@/components/ProjectTitle.vue';
import { useProjectsStore } from '@/stores/Projects';
const projectsStore = useProjectsStore()

const projects = [{ name: "POS", url: "https://pos-practice-v1.vercel.app/", image: "/images/pos_bg.png" },
    { name: "Climate Consultant", url: "https://weather-consultant.vercel.app/", image: "/images/weather_bg.png" },
    { name: "Guitar Store", url: "https://guitar-store-nine.vercel.app/", image: "/images/guitar_bg.png" },
    { name: "Budget Management", url: "https://budget-management-phi.vercel.app/", image: "/images/budget_bg.png" },
    { name: "Dates Management", url: "https://dates-managment-front-54qn.vercel.app/auth/SignIn", image: "/images/hair_bg.png" },
    { name: "Crypto Converter", url: "https://cripto-converter-three.vercel.app/", image: "/images/crypto_bg.png" },
    { name: "Dates Veterinarian", url: "https://dates-veterinarian.vercel.app/", image: "/images/appointements_bg.png" },
    { name: "Drinks Recipes", url: "https://drinks-recipes-six.vercel.app/", image: "/images/drinks_bg.png" }] 
</script>
<template>
    <div class="ml-[5vw] bg-gray-100 dark:bg-gray-900 min-h-screen py-10 font-poppins">
        <h2 class="text-center dark:text-indigo-300 text-indigo-700 font-extrabold text-5xl uppercase mb-12">
            Projects
        </h2>
        <div class="flex justify-between items-start gap-10">
      <!-- Project list -->
      <div class="flex flex-col gap-6">
        <ProjectTitle 
          v-for="project in projects" 
          :key="project.name" 
          :url="project.url" 
          :image="project.image"
          @hover="projectsStore.showingProject = project.image">
          {{ project.name }}
        </ProjectTitle>
      </div>


            <!-- Dynamic background image for selected project -->
            <div class="w-[50vw] h-[60vh] bg-cover bg-center bg-no-repeat rounded-lg shadow-xl transition-all"
                :style="{ backgroundImage: `url('${projectsStore.showingProject}')` }">
            </div>
        </div>
    </div>
</template>