<script setup lang="ts">
const num = 900
</script>

<template>
  <div max-w-1200px m-auto flex="~ wrap" gap-2>
    <div
      v-for="item in num" :key="item"
      w-6 h-6
      bg-pink
    />
  </div>
</template>
