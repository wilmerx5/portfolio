<script setup>
import { useProjectsStore } from '@/stores/Projects';


const projectsStore = useProjectsStore()

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    url:{
        type:String
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
    <div class="pl-6 ">

        <a :href="url" target="_blank" rel="noopener noreferrer">
            <h3 @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="
    text-emerald-600 dark:text-white text-4xl font-extrabold italic flex">
                <slot></slot>
            </h3>

        </a>

        <hr>
    </div>

</template>