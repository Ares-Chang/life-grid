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
  <Card>
    <template #title>
      {{ title }}
    </template>

    <div grid="~ md:cols-3 cols-2" px-8 text-center>
      <div v-for="(item, index) in list" :key="index" mt-2>
        <span>{{ data[item.key] }}</span>
        <span ml-1 color-gray>{{ item.value }}</span>
      </div>
    </div>
  </Card>
</template>
