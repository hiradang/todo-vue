<template>
  <div
    class="border border-1 border-primary py-4 w-[500px] rounded-lg mt-5 px-8 flex justify-between items-center"
  >
    <div>
      <div class="flex space-x-2">
        <div class="font-bold text-lg">
          {{ taskName }}
        </div>
        <span
          :class="[
            status === TaskStatus.Doing ? 'bg-primary' : 'bg-secondary',
            'px-2 rounded-md',
          ]"
        >
          {{ status }}
        </span>
      </div>
      <div>{{ description }}</div>
    </div>
    <CustomButton
      :title="status === TaskStatus.Doing ? 'Check done' : 'Undo'"
      :type="status === TaskStatus.Done ? 'danger' : ''"
      :handleClick="handleClick"
    />
  </div>
</template>

<script>
import { TaskStatus } from "@/const/taskStatus";
import CustomButton from "@/components/CustomButton";
import axios from "axios";
export default {
  props: ["taskName", "description", "status", "id", "customHandleClick"],
  data() {
    return {
      TaskStatus,
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    async handleClick() {
      await axios.patch(
        `${process.env.VUE_APP_API_ENDPOINT}/tasks/${this.id}`,
        {
          status:
            this.status === TaskStatus.Done
              ? TaskStatus.Doing
              : TaskStatus.Done,
        }
      );
      this.customHandleClick && this.customHandleClick();
    },
  },
};
</script>

<style lang="scss" scoped></style>
