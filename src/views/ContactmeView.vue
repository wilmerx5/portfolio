<script setup>
import GitHubIcon from '@/components/Icons/GitHubIcon.vue';
import GmailIcon from '@/components/Icons/GmailIcon.vue';
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue';
import WhatsIcon from '@/components/Icons/WhatsIcon.vue';


</script>
<template>
    <div class="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center p-10">
        <h1 class="text-4xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">Contact Me</h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Feel free to reach out to me through the following means:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <!-- Email -->
            <a href="mailto:wilmercampos2004@gmail.com"
                class="flex flex-col items-center p-4 bg-red-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <GmailIcon class="h-8 w-8 mr-2" />
                <span class="mt-2">wilmercampos2004@gmail.com</span>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/wilmer-campos-arevalo-7a129a273/" target="_blank"
                class="flex  flex-col items-center p-4 bg-blue-700 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <LinkedinIcon class="h-8 w-8 mr-2" />
                <span class="mt-2">LinkedIn Profile</span>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/wilmerx5" target="_blank"
                class="flex flex-col  items-center p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <GitHubIcon class="h-8 w-8 mr-2" />
                <span class="mt-2">@Wilmerx5</span>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/573124547085" target="_blank"
                class="flex  flex-col items-center p-4 bg-green-500 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <WhatsIcon class="h-8 w-8 mr-2" />
                <span class="mt-2">+57 3124547085</span>
            </a>
        </div>

        <p class="text-lg text-gray-700 dark:text-gray-300 mt-8 text-center">
            I look forward to joining your team!
        </p>
    </div>
</template>
