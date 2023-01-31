<script setup lang="ts">
const num = 900
</script>

<template>
  <div flex justify-center>
    <div max-w-1200px p-6 flex="~ wrap" gap-2>
      <div
        v-for="item in num" :key="item"
        w-6 h-6
        bg-pink
      />
    </div>
  </div>
</template>
