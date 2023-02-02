<script setup lang="ts">
import type { Tips } from '~/types'

const { list } = defineProps<{
  list: Tips[]
}>()
</script>

<template>
  <div p-8 my-8 border rd-2 relative>
    <div
      p="x-4 y-2" bg-blue rd-2
      absolute top--4
    >
      Tips
    </div>

    <div>
      <div v-for="(item, index) in list" :key="index">
        <div w-4 h-4 m="r-3 t-1" float-left :class="item.color" />
        <span>{{ item.tip }}</span>
      </div>
    </div>
  </div>
</template>
