import { defineStore } from "pinia";

import { onMounted, ref, watch } from "vue";
export const useNavStore = defineStore('nav',()=>{

    const darkMode = ref(true)

    watch(darkMode,()=>{
        darkMode.value? localStorage.setItem("THEME","DARK"): localStorage.setItem("THEME","LIGHT")
    })
    onMounted(()=>{
        const theme = localStorage.getItem('THEME')

        console.log(theme)

        if(theme){
            darkMode.value = theme == "DARK" ? true :false
        }
        else{
            localStorage.setItem("THEME","DARK")
        }

    })

function handleTheme(){
    darkMode.value = !darkMode.value
}

    const showNav=ref(false)

    function handleShowNav(){

        showNav.value = !showNav.value
    }
    return{
        showNav,
        handleShowNav,
        darkMode,
        handleTheme

    }
})