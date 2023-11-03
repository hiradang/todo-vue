<template>
  <PageTitle pageTitle="Create new task" />
  <div class="flex flex-start flex-col">
    <label>Task name</label>
    <input
      type="text"
      v-model="taskName"
      class="border border-1 border-primary rounded-lg h-8 w-[400px] px-4"
    />
  </div>
  <div class="flex flex-start flex-col">
    <label>Description</label>
    <input
      type="text"
      v-model="description"
      class="border border-1 border-primary rounded-lg h-8 w-[400px] px-4 mb-6"
    />
  </div>
  <CustomButton title="Create" :handleClick="createNewTask" />
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import axios from "axios";
import { TaskStatus } from "@/const/taskStatus";
import PageTitle from "@/components/PageTitle.vue";

export default {
  data() {
    return {
      taskName: "",
      description: "",
    };
  },
  methods: {
    async createNewTask() {
      await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/tasks`, {
        taskName: this.taskName,
        description: this.description,
        status: TaskStatus.Doing,
      });
      this.taskName = "";
      this.description = "";
      window.alert("Create successfully!!!");
    },
  },
  components: {
    CustomButton,
    PageTitle,
  },
};
</script>

<style lang="scss" scoped></style>
