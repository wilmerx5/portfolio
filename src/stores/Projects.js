import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore('projects',()=>{

    const showingProject = ref('')
    return{
        showingProject
        
    }
})