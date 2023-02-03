import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Config } from '~/types'

export const useUserStore = defineStore('user', () => {
  /**
   * SSR 持久化可参考 {@link https://pinia.vuejs.org/zh/cookbook/composables.html#ssr}
   */
  const config = $(useStorage<Config>('life-grid-config', {
    birthday: '', // 出生日期
    lifetime: 77, // 期待寿命
  }))

  /**
   * 基础信息是否完善，是否可进入
   */
  const isAuth = computed(() => !!config.birthday)

  return {
    config: skipHydrate($$(config)), // 暂停读取
    isAuth,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
