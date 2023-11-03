<template>
  <button
    class="h-10 border bg-secondary rounded-lg min-w-[120px] hover:opacity-80"
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
