<template>
  <nav>
    <Header />
  </nav>
  <div class="px-4 mt-8 flex flex-col items-center">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@import "/src/assets/style";
</style>
