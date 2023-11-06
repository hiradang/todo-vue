<template>
  <PageTitle pageTitle="Done Tasks" />
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <TaskItem
        :taskName="task.taskName"
        :description="task.description"
        :status="task.status"
        :id="task.id"
        :customHandleClick="fetchData"
      />
    </div>
  </div>
  <div v-else class="mt-2 text-xl">There are no tasks.</div>
</template>

<script>
import axios from "axios";
import PageTitle from "@/components/PageTitle.vue";
import TaskItem from "@/components/TaskItem.vue";
import { TaskStatus } from "@/const/taskStatus";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}/tasks`)
        .then(
          (res) =>
            (this.tasks = res.data.filter(
              (task) => task.status === TaskStatus.Done
            ))
        );
    },
  },
  created() {
    this.fetchData();
  },
  components: {
    PageTitle,
    TaskItem,
  },
};
</script>

<style lang="scss" scoped></style>
