<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { config } = $(useUserStore())
const init = new InitGrid(config)

const num = 100
</script>

<template>
  <div>
    <div>年: {{ init.formerly.year }}</div>
    <div>月: {{ init.formerly.month }}</div>
    <div>日: {{ init.formerly.day }}</div>
    <div>时: {{ init.formerly.hour }}</div>
    <div>分: {{ init.formerly.minute }}</div>
    <div>秒: {{ init.formerly.second }}</div>
  </div>
  <div max-w-1200px m-auto flex="~ wrap" gap-2>
    <div
      v-for="item in num" :key="item"
      w-6 h-6
      bg="gray"
    />
  </div>
  <Tips :list="init.tipList" />
</template>
