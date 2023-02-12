<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { config } = $(useUserStore())
const init = new InitGrid(config)
</script>

<template>
  <Time title="已经过去了" :data="init.formerly" />
  <Time title="剩下的时间" :data="init.future" />
  <div max-w-1200px m-auto flex="~ wrap" gap-2>
    <template v-for="(group, index) in init.renderList" :key="index">
      <div
        v-for="(_, _index) in group" :key="_index"
        w-6 h-6
        :class="[
          init.tipList[index].color,
          (index === 0 && group === _index + 1) && 'animate-flicker',
        ]"
      />
    </template>
  </div>
  <Tips :list="init.tipList" />
</template>

<style>
@keyframes flicker {
  from,
  20%,
  90%,
  to {
    @apply op-100
  }
  50% {
    @apply op-20
  }
}
.animate-flicker {
  animation: flicker 3s linear infinite;
}
</style>
