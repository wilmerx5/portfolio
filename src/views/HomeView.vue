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
    <div class="flex justify-between items-center px-10 py-5 pl-20 bg-gray-100 dark:bg-gray-800 shadow-lg">
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{{ dateString }}</h2>
      <h3 class="text-xl text-emerald-500 dark:text-emerald-400">Available to work</h3>
    </div>

    <!-- Main Greeting Section -->
    <div class="text-center mt-16">
      <h3 class="animate__animated animate__fadeInUp text-6xl font-bold text-indigo-600 dark:text-indigo-300">Hello! I'm
        <span class="text-gray-900 dark:text-gray-200">WILMER</span>
      </h3>
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

        <!-- Devs Valhalla Experience -->
        <div class="mb-6">
          <h4 class="text-xl font-semibold text-slate-800 dark:text-slate-200">Web Developer</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Devs Valhalla, Bogotá, D.C., Capital District, Colombia</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">April 2022 - April 2024</p>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            During this time, I worked as a freelance Web Developer, creating websites for clients and acquaintances. My
            responsibilities included managing hosting services, file systems, and databases to ensure efficient
            performance and scalability. I utilized technologies such as WordPress, jQuery, PHP, and Git for version control.
            Currently, I am leading a rebuild of these projects with modern technologies like Vue.js for the frontend, 
            Spring Boot for the backend, and AWS for cloud services. This experience has significantly enhanced my 
            full-stack development skills and adaptability to the latest industry standards.
          </p>
        </div>

        <!-- Kodland Experience -->
        <div>
          <h4 class="text-xl font-semibold text-slate-800 dark:text-slate-200">Programming Tutor</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Kodland, Bogotá, D.C., Capital District, Colombia</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">August 2023 - April 2024</p>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            As a Programming Tutor, I mentored adolescents in web development, focusing on HTML, CSS, JavaScript, and
            foundational frameworks. I guided students through hands-on projects, fostering creativity and problem-solving
            skills while providing a solid foundation in front-end and back-end technologies. This role prepared them for
            potential opportunities in tech, helping them gain essential skills for their future careers.
          </p>
        </div>
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

.education-container,
.experience-container {
  padding: 20px;
}

.education-container h3,
.experience-container h3 {
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .card {
    padding: 30px;
  }
}
</style>