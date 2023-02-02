<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { config } = $(useUserStore())
const init = new InitGrid(config.age)

const formerly = computed(() => init.formerly)

const num = 100

const tipList = [
  {
    color: 'bg-green',
    tip: '你已经走过的生命',
  },
  {
    color: 'bg-blue',
    tip: '如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间',
  },
  {
    color: 'bg-yellow-900',
    tip: '如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间',
  },
  {
    color: 'bg-yellow',
    tip: '65 岁，你退休了',
  },
  {
    color: 'bg-pink-300',
    tip: '如果你 28 岁生孩子，孩子 18 岁出门上大学，这 18 年里你平均每天能花 5 小时陪伴孩子，这是你余下生命里所用去的时间',
  },
  {
    color: 'bg-blue-600/80',
    tip: '如果你每个月能看望父母一天，在他们 80 岁前，这是你的余生里还能陪伴他们的时光',
  },
  {
    color: 'bg-gray',
    tip: '除了以上之外，你剩下的所有日子',
  },
]
</script>

<template>
  <div>
    <div>年: {{ formerly.year }}</div>
    <div>月: {{ formerly.month }}</div>
    <div>日: {{ formerly.day }}</div>
    <div>时: {{ formerly.hour }}</div>
    <div>分: {{ formerly.minute }}</div>
    <div>秒: {{ formerly.second }}</div>
  </div>
  <div max-w-1200px m-auto flex="~ wrap" gap-2>
    <div
      v-for="item in num" :key="item"
      w-6 h-6
      bg="gray"
    />
  </div>
  <div p-8 my-8 border rd-2 relative>
    <div
      p="x-4 y-2" bg-blue rd-2
      absolute top--4
    >
      Tips
    </div>

    <div>
      <div v-for="(item, index) in tipList" :key="index">
        <div w-4 h-4 m="r-3 t-1" float-left :class="item.color" />
        <span>{{ item.tip }}</span>
      </div>
    </div>
  </div>
</template>
