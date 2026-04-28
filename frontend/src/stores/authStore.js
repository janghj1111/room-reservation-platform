import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const currentUser = ref(null)

  const isAuthenticated = computed(() => Boolean(accessToken.value))

  function setAuth(payload) {
    accessToken.value = payload?.accessToken ?? null
    currentUser.value = payload?.user ?? null
  }

  function clearAuth() {
    accessToken.value = null
    currentUser.value = null
  }

  return {
    accessToken,
    currentUser,
    isAuthenticated,
    setAuth,
    clearAuth,
  }
})
