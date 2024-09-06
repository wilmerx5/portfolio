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
    <div class="pl-6 " @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

        <a :href="url" target="_blank" rel="noopener noreferrer">
            <h3 class="
    text-emerald-600 dark:text-white text-4xl font-extrabold italic flex py-2 border-solid border-2 pl-4 dark:border-white border-indigo-600 border-l-0 border-r-0 border-t-0">
                <slot></slot>
            </h3>

        </a>
    </div>

</template>