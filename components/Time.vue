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

/**
 * 将数字进行千分位分隔
 * @param num 数字
 * @returns 123,456,789
 */
function useFormat(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}
</script>

<template>
  <Card>
    <template #title>
      {{ title }}
    </template>

    <div grid="~ md:cols-3 cols-2" px-8 text-center>
      <div v-for="(item, index) in list" :key="index" mt-2>
        <span>{{ useFormat(data[item.key]) }}</span>
        <span ml-1 color-gray>{{ item.value }}</span>
      </div>
    </div>
    <slot />
  </Card>
</template>
