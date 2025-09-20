import { defineStore } from "pinia";
import { ref } from "vue";

export const userMainStore = defineStore("store", () => {
    const token = ref("")
    function setToken(newToken) {
        token.value = newToken
    }

    return {
        token, setToken
    }
}, {
    persist: true
})