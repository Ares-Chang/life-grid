export default defineNuxtRouteMiddleware(() => {
  /**
   * 检查是否设置基础信息
   */
  const { config } = useUserStore()
  if (!config.age)
    return navigateTo('/setting')
})
