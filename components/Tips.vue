<script setup lang="ts">
import type { GridProps } from '~/types'

const { list } = defineProps<{
  list: GridProps[]
}>()

const { config } = $(useUserStore())
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

    <div mt-2 bg-gray:30 pl-3 py-1 rd>
      <i i-carbon-chevron-right inline-block vertical-sub />
      注: 据 2021 年统计，中国人人均寿命 {{ config.lifetime }} 岁，参考自
      <NuxtLink
        to="https://baike.baidu.com/item/%E4%BA%BA%E5%8F%A3%E5%B9%B3%E5%9D%87%E9%A2%84%E6%9C%9F%E5%AF%BF%E5%91%BD/7626803"
        target="_blank"
        color="blue hover:emerald"
      >
        百度百科
      </NuxtLink>
    </div>
  </div>
</template>
