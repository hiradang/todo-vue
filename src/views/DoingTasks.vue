<template>
  <PageTitle pageTitle="Doing Tasks" />
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <div>{{ task.name }}</div>
      <div>{{ task.description }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageTitle from "@/components/PageTitle.vue";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_ENDPOINT}/tasks`)
      .then((res) => (this.tasks = res.data));
  },
  components: {
    PageTitle,
  },
};
</script>

<style lang="scss" scoped></style>
