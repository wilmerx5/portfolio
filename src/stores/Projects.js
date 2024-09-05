import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore('projects',()=>{

    const showingProject = ref('/images/guitar_bg.png')
    return{
        showingProject
        
    }
})