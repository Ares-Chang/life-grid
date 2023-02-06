export default defineNuxtRouteMiddleware(() => {
  /**
   * 检查是否设置基础信息，登录鉴权
   */
  const isAuth = $(useCookie('isAuth'))
  if (!isAuth)
    return navigateTo('/setting')
})
