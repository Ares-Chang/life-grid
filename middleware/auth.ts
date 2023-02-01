export default defineNuxtRouteMiddleware(() => {
  /**
   * 检查是否设置基础信息
   */
  const { isAuth } = useUserStore()
  if (!isAuth)
    return navigateTo('/setting')
})
