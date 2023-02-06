<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { config } = $(useUserStore())
const init = new InitGrid(config)

const num = 100
</script>

<template>
  <Time title="已经过去了" :data="init.formerly" />
  <Time title="剩下的时间" :data="init.future" />

  <div max-w-1200px m-auto flex="~ wrap" gap-2>
    <div
      v-for="item in num" :key="item"
      w-6 h-6
      bg="gray"
    />
  </div>
  <Tips :list="init.tipList" />
</template>
