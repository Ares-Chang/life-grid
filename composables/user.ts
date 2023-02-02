import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const config = reactive({
    birthday: '',
  })

  /**
   * 基础信息是否完善，是否可进入
   */
  const isAuth = computed(() => !!config.birthday)

  return {
    config,
    isAuth,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
