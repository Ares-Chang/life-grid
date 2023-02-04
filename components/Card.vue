<script setup lang="ts">
const isTitle = !!useSlots().title // 判断 title 是否传入 slot
</script>

<template>
  <div p-8 my-8 border rd-2 relative>
    <div
      v-if="isTitle"
      p="x-4 y-2" bg-blue rd-2
      absolute top--4
    >
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
