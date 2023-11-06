<template>
  <button
    :class="[
      type === 'danger' ? 'bg-red-300' : 'bg-secondary',
      'h-10 border rounded-lg min-w-[120px] hover:opacity-80 cursor-pointer',
    ]"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    handleClick: null,
    className: String,
  },
};
</script>
