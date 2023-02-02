<script setup lang="ts">
const { config, isAuth } = $(useUserStore())
const type = ref('text')

let errorAnimate = $ref('')
/**
 * 获取校验结果并重置动画
 * @returns 校验是否通过
 */
function resetAnimate() {
  errorAnimate = '' // 重置动画
  if (!isAuth) {
    // 定时器队列触发，需要重置动画
    setTimeout(() => {
      errorAnimate = 'border-red! animate-bounce-alt animate-count-2 animate-duration-1s'
    }, 0)
  }
  return isAuth
}

watchEffect(() => {
  /**
   * 监听校验结果，校验通过，重置动画
   */
  if (isAuth)
    resetAnimate()
})

/**
 * 进行校验并跳转首页
 */
function submit() {
  if (!resetAnimate())
    return

  navigateTo('/')
}
</script>

<template>
  <div w-md m-auto text-center>
    <h2 text-3xl text-left font-bold>
      Settings
    </h2>
    <input
      v-model="config.birthday"
      placeholder="Your date of birth?"
      :type="type" autocomplete="off"
      :class="`input ${errorAnimate}`"
      @focus="type = 'date'"
      @blur="!config.birthday && (type = 'text')"
    >
    <input
      v-model="config.lifetime" disabled
      placeholder="Your life expectancy?"
      type="text" autocomplete="off"
      class="input"
    >
    <button btn w-full p-2 @click="submit">
      Submit
    </button>
  </div>
</template>

<style>
.input {
  @apply px-4 py-2 my-6 block
  w-full h-40px text-center bg-transparent
  border rd border-gray-200 dark:border-gray-700 outline-none;
}
</style>
