<script setup lang="ts">
const { config, isAuth } = $(useUserStore())
const type = ref('text')

let errorAnimation = $ref('')

function submit() {
  errorAnimation = '' // 重置动画
  if (!isAuth) {
    // 定时器队列触发，需要重置动画
    return setTimeout(() => {
      errorAnimation = 'border-red! animate-bounce-alt animate-count-2 animate-duration-1s'
    }, 0)
  }

  navigateTo('/')
}
</script>

<template>
  <div w-md m-auto text-center>
    <h2 text-3xl text-left font-bold>
      Settings
    </h2>
    <input
      v-model="config.age"
      placeholder="Your date of birth?"
      :type="type" autocomplete="off"
      p="x-4 y-2" my-6 w-full h-40px
      text-center bg-transparent
      border="~ rd gray-200 dark:gray-700"
      outline-none
      :class="errorAnimation"
      @focus="type = 'date'"
      @blur="!config.age && (type = 'text')"
    >
    <button btn w-full p-2 @click="submit">
      Submit
    </button>
  </div>
</template>
