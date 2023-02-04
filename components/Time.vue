<script setup lang="ts">
import type { TimeDiff } from '~/types'

const { data, title } = defineProps<{
  data: TimeDiff
  title: string
}>()

const list = [
  {
    key: 'year',
    value: '年',
  },
  {
    key: 'month',
    value: '月',
  },
  {
    key: 'day',
    value: '日',
  },
  {
    key: 'hour',
    value: '时',
  },
  {
    key: 'minute',
    value: '分',
  },
  {
    key: 'second',
    value: '秒',
  },
]
</script>

<template>
  <div p-8 my-8 border rd-2 relative>
    <div
      p="x-4 y-2" bg-blue rd-2
      absolute top--4
    >
      {{ title }}
    </div>

    <div grid="~ cols-3" px-8 text-center>
      <div v-for="(item, index) in list" :key="index" mt-2>
        <span>{{ data[item.key] }}</span>
        <span ml-1 color-gray>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
