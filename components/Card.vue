<template>
  <div p-8 my-8 border rd-2 relative>
    <div
      p="x-4 y-2" bg-blue rd-2
      absolute top--4
    >
      <slot name="title">
        Tisp
      </slot>
    </div>
    <slot />
  </div>
</template>
