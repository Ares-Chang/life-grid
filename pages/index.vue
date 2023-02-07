<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { config } = $(useUserStore())
const init = new InitGrid(config)
</script>

<template>
  <Time title="已经过去了" :data="init.formerly">
    <Card v-for="(group, index) in [init.renderList[0]]" :key="index">
      <div flex="~ wrap" gap-2>
        <div
          v-for="(_, _index) in group" :key="_index"
          w-6 h-6
          :class="init.tipList[index].color"
        />
      </div>
    </Card>
  </Time>
  <Time title="剩下的时间" :data="init.future">
    <Card v-for="(group, index) in [...init.renderList.splice(1)]" :key="index">
      <div flex="~ wrap" gap-2>
        <div
          v-for="(_, _index) in group" :key="_index"
          w-6 h-6
          :class="init.tipList[index + 1].color"
        />
      </div>
    </Card>
  </Time>
  <Tips :list="init.tipList" />
</template>
