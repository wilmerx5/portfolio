<script setup>
import { useProjectsStore } from '@/stores/Projects'

const projectsStore = useProjectsStore()

const featuredProjects = [
  {
    name: "POS System",
    url: "https://pos-practice-v1.vercel.app/",
    image: "/images/pos_bg.png",
    description: "A modern POS app with responsive UI and dynamic billing system."
  },
  {
    name: "Budget Management",
    url: "https://budget-management-phi.vercel.app/",
    image: "/images/budget_bg.png",
    description: "Manage your finances with visual dashboards and category tracking."
  },
]

    // { name: "Vinali", url: "https://guitar-store-nine.vercel.app/", image: "/images/guitar_bg.png" },
    // { name: "Crypto Converter", url: "https://cripto-converter-three.vercel.app/", image: "/images/crypto_bg.png" },
    // { name: "Dates Management", url: "https://dates-managment-front-54qn.vercel.app/auth/SignIn", image: "/images/hair_bg.png" },
    // { name: "Drinks Recipes", url: "https://drinks-recipes-six.vercel.app/", image: "/images/drinks_bg.png" },
    // { name: "Veterinarian", url: "https://dates-veterinarian.vercel.app/", image: "/images/appointements_bg.png" },
    // { name: "Climate Consultant", url: "https://weather-consultant.vercel.app/",image:''}

const collaboratedProjects = [
    
  { name: "Vinali", url: "https://vinaligroup.com/", image: "/images/vinali.png" },
  { name: "VTC", url: "https://veterantreecare.com", image: "/images/VTC.png" },
  { name: "NETVIN", url: "https://netvin.co", image: "/images/Netvin.png" },
  { name: "Holbie", url: "https://holisticbillingservices.com/", image: "/images/Holbie.png" },
  { name: "PPP", url: "https://prontopolloportal.com/", image: "/images/PPP.png" },
]
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white font-poppins">
    
    <!-- Hero -->
    <section class="text-center py-16 px-4">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Wilmer</h1>
      <p class="text-xl max-w-xl mx-auto">Full Stack developer passionate about crafting performant, responsive, and engaging websites. Let's build something amazing.</p>
    </section>

    <!-- Featured Projects -->
    <!-- <section class="px-6 md:px-12 py-10">
      <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-300">Featured Projects</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="project in featuredProjects" 
          :key="project.name"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition hover:scale-[1.01]">
          
          <img :src="project.image" alt="" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <a :href="project.url" target="_blank" class="text-indigo-500 hover:underline">Visit Project →</a>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Collaborated Projects -->
    <section class="px-6 md:px-12 py-10 bg-gray-200 dark:bg-gray-800">
      <h2 class="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-300">Projects I’ve Collaborated</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <a 
          v-for="project in collaboratedProjects"
          :key="project.name"
          :href="project.url" 
          target="_blank"
          class="block bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition">
          <img :src="project.image" alt="" class="w-full h-40 object-cover rounded-t-lg">
          <div class="p-4">
            <h3 class="font-semibold text-center">{{ project.name }}</h3>
          </div>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      © {{ new Date().getFullYear() }} Wilmer Campos A. All rights reserved.
    </footer>
  </div>
</template>
