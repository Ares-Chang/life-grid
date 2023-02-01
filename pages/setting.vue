<script setup lang="ts">
const { config } = useUserStore()
const type = ref('text')

function submit() {
  if (!config.age)
    return alert('请填写基础数据')
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
      @focus="type = 'date'"
      @blur="!config.age && (type = 'text')"
    >
    <button btn w-full p-2 @click="submit">
      Submit
    </button>
  </div>
</template>
