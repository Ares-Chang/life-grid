import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Config } from '~/types'

export const useUserStore = defineStore('user', () => {
  const config = reactive<Config>({
    birthday: '', // 出生日期
    lifetime: 77, // 期待寿命
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
