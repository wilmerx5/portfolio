<script setup>
import EducationIcon from '@/components/Ux/icons/EducationIcon.vue';
import ExperienceIcon from '@/components/Ux/icons/ExperienceIcon.vue';
import { format } from 'date-fns';

const dateString = format(new Date(), 'MMMM do');


</script>
<template>


  <div class="home min-h-100vh  ml-5vw ">
    <div class="text-2xl px-10 pt-10 text-indigo-600 text-right animate__animated animate__bounceIn">

      <h2>{{ dateString }}</h2>

      <h3 class="text-2xl text-emerald-500 dark:text-white">Available to work </h3>
    </div>
    <h3 class=" pt-20 text-5xl font-extrabold text-indigo-600 text-center animate__animated animate__zoomInUp">
      Hello! My name is <span class="text-black dark:text-slate-200 ">WILMER</span>
    </h3>
    <p class=" pt-5 text-slate-800 dark:text-slate-200 text-2xl text-center animate__animated  animate__slideInLeft">
      Full stack developer</p>


    <div class="pb-5 grid grid-cols-1 lg:grid-cols-2 w-2/3 gap-5 mx-auto dark:text-slate-300 text-slate-800 mt-20">
      <div class="text-center">
        <h3 class="text-3xl py-2 font-bold uppercase text-indigo-600 dark:text-white flex items-center justify-center gap-2 text-center"> Experience <ExperienceIcon/></h3>

        <div class="border-indigo-600  rounded-md border-2 p-2 h-60">
          <p>I don't yet have professional work experience, but I have over five years of study in software development
            and
            have worked on several projects, including production-level applications for small businesses
            , working with many technologies like, vue js, react js, spring-boot, mysql, mongo db, node js</p>
        </div>

      </div>
      <div class=" ">
        <h3 class="py-2 text-3xl font-bold text-center uppercase text-indigo-600 dark:text-white flex gap-2 items-center justify-center"> Education <EducationIcon/> </h3>
        <div class="p-2 border-solid border-2 border-indigo-600 rounded-md h-100">
          <ol class="list-disc list-inside lowercase ">
            <li>software engineering - FUNDACION UNIVERSITARIA DEL AREA ANDINA 2021-2025  </li>
            <li>SOFTWARE PROGRAMMING TECHNICIAN - SENA 2020-2022</li>
          </ol>
          <h3 class="py-1 text-indigo-600  dark:text-emerald-400 font-bold uppercase text-1xl">Courses</h3>
          <ol class="list-disc list-inside " >
            <li>Vue Js - Udemy 40 hours</li>
            <li>Spring-boot - Udemy 32 hours</li>
            <li>Express - Udemy 25 hours</li>
            <li>Java - Udemy 80 hours</li>
            <li>Git Hub - Udemy 10 hours</li>
            <li>Aws - Udemy 45 hours</li>
            <li>Docker - Udemy 15 hours</li>



          </ol>
        </div>

      </div>
    </div>

  </div>
</template>
<style></style>
