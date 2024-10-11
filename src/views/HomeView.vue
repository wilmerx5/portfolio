<script setup>
import { format } from 'date-fns';
import { ref } from 'vue';

const dateString = format(new Date(), 'MMMM do');

const activeCard = ref(null)
const timelineItems = [
  { title: "Software Engineering - Fundacion Universitaria del Area Andina", date: "2021-2025", description: "Focused on full stack development and modern web technologies." },
  { title: "Software Programming Technician - SENA", date: "2020-2022", description: "Hands-on experience in programming and software development." },
  { title: "Vue.js - Udemy", date: "40 hours", description: "In-depth knowledge of building front-end applications with Vue.js." },
  { title: "Spring Boot - Udemy", date: "32 hours", description: "Experience building back-end applications with Spring Boot." },
  { title: "Express.j s - Udemy", date: "25 hours", description: "Mastering server-side development with Node.js and Express." },
  { title: "Java General - Udemy", date: "80 hours", description: "Comprehensive course covering the fundamentals of Java programming, object-oriented principles, and best practices for building robust applications." },
{ title: "Git Hub- Udemy", date: "20 hours", description: "In-depth training on version control using Git and GitHub, focusing on collaboration, branching, merging, and managing repositories effectively." },
{ title: "Docker- Udemy", date: "20 hours", description: "Learn to containerize applications with Docker, including creating Docker images, managing containers, and orchestrating multi-container setups." },
{ title: "AWS- Udemy", date: "45 hours", description: "Explore Amazon Web Services (AWS) and its cloud solutions, covering deployment, scalability, and security best practices for modern cloud architectures." }



]

function toggleCard(index) {
  // Toggle the active card
  activeCard.value = activeCard.value === index ? null : index;
}
</script>
<template>
  <div class="home min-h-screen bg-white dark:bg-gray-950">
    <!-- Header Section -->
    <div class="flex justify-between items-center px-10 py-5 pl-20 bg-gray-100 dark:bg-gray-800 shadow-md">
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{{ dateString }}</h2>
      <h3 class="text-xl text-emerald-500 dark:text-emerald-400">Available to work</h3>
    </div>

    <!-- Main Greeting Section -->
    <div class="text-center mt-16">
      <h3 class="animate__animated animate__fadeInUp text-6xl font-bold text-indigo-600 dark:text-indigo-300">Hello! I'm
        <span class="text-gray-900 dark:text-gray-200">WILMER</span></h3>
      <p class="text-2xl mt-4 text-slate-800 dark:text-slate-300">Full Stack Developer</p>
    </div>

    <!-- Education and Experience Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-4/5 mx-auto mt-20">
      <!-- Education Section -->
      <div class="education-container">
        <h3 class="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">Education</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(item, index) in timelineItems" :key="index"
            class="card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            @click="toggleCard(index)">
            <h4 class="text-xl font-bold text-indigo-600 dark:text-indigo-300">{{ item.title }}</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300">{{ item.date }}</p>

            <!-- Expanding Content -->
            <div v-if="activeCard === index" class="mt-3 text-slate-800 dark:text-slate-200">
              <p class="text-base">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="experience-container">
        <h3 class="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">Experience</h3>
        <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          I don't yet have professional experience, but I've been developing software for over five years. I’ve built
          production-level applications and worked on several projects using technologies like Vue.js, React.js, Spring
          Boot, MySQL, MongoDB, and Node.js.
        </p>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="py-8 text-center text-sm text-slate-600 dark:text-slate-400 mt-16">
      <p>&copy; 2024 Wilmer - Full Stack Developer</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}
</style>
