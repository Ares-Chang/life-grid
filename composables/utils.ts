/**
 * 检查是否设置基础信息，可通过鉴权
 */
export function useAuth() {
  const { isAuth } = $(useUserStore())
  if (!isAuth)
    return navigateTo('/setting')
}
