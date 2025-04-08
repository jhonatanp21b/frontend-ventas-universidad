<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.1111 26.6667L33 17.5M33 17.5L24.1111 8.33333M33 17.5H11.6667M11.6667 1H9.53333C6.54639 1 5.05291 1 3.91205 1.59946C2.90852 2.12677 2.09262 2.96816 1.5813 4.00305C1 5.17957 1 6.71971 1 9.8V25.2C1 28.2803 1 29.8204 1.5813 30.9969C2.09262 32.0318 2.90852 32.8732 3.91205 33.4005C5.05291 34 6.54639 34 9.53333 34H11.6667"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: '34',
  },
  height: {
    type: String,
    default: '35',
  },
})
</script>

<style scoped></style>
