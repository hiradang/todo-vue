<template>
  <div class="bg-primary">
    <div class="h-20 flex justify-between mx-4 items-center">
      <div class="text-4xl cursor-pointer" @click="returnHome">Hiradang</div>
      <div class="space-x-3">
        <a
          v-for="navbar in NAVBARS"
          :key="navbar.linkName"
          class="hover:text-white hover:scale-110 text-[20px] font-light"
        >
          <router-link :to="{ name: navbar.linkName }">{{
            navbar.displayName
          }}</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { NAVBARS } from "@/const/navbar";
export default {
  name: "CustomHeader",
  data() {
    console.log(NAVBARS);
    return {
      NAVBARS,
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
