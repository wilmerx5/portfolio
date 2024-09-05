<script setup>
import ProjectTitle from '@/components/ProjectTitle.vue';
import { useProjectsStore } from '@/stores/Projects';
const projectsStore = useProjectsStore()
</script>
<template>
    <div class=" ml-5vw  bg-white dark:bg-blue-950  h-100vh">

        <div>
            <div :style="{ backgroundImage: `url('${projectsStore.showingProject}')` }"
                class=" dark:bg-white fixed bg-cover bg-center bg-no-repeat right-0 bottom-0 rounded-xl translate-x-10 translate-y-10 w-50vw h-60vh">

            </div>

            <div class="absolute bottom-0 mb-10 space-y-6">
                <ProjectTitle :url="'https://pos-practice-v1.vercel.app/'" :image="'/images/pos_bg.png'"> POS
                </ProjectTitle>
                <ProjectTitle :url="'https://weather-consultant.vercel.app/'" :image="'/images/weather_bg.png'">
                    Climate Consultant</ProjectTitle>
                <ProjectTitle 
                :url="'https://guitar-store-nine.vercel.app/'"
                :image="'/images/guitar_bg.png'">Guitar Store </ProjectTitle>
                <ProjectTitle :url="'https://budget-management-phi.vercel.app/'" :image="'/images/budget_bg.png'">
                    Budget Management</ProjectTitle>
                <ProjectTitle 
                 :url="'https://dates-managment-front-54qn.vercel.app/auth/SignIn'"
                :image="'/images/hair_bg.png'">Dates Management </ProjectTitle>
                <ProjectTitle 
                :url="'https://cripto-converter-three.vercel.app/'"
                :image="'/images/crypto_bg.png'">Cryto converter </ProjectTitle>
                <ProjectTitle :url="'  https://dates-veterinarian.vercel.app/'" :image="'/images/appointements_bg.png'">
                    Dates Veterinarian </ProjectTitle>
                <ProjectTitle 
                :url="'https://drinks-recipes-six.vercel.app/'"
            
                :image="'/images/drinks_bg.png'">DRINKS RECIPES </ProjectTitle>


            </div>
        </div>

    </div>
</template>