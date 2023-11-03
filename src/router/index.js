import { createRouter, createWebHashHistory } from "vue-router";
import CreateTask from "@/views/CreateTask.vue";
import DoneTasks from "@/views/DoneTasks.vue";
import DoingTasks from "@/views/DoingTasks.vue";

const routes = [
  {
    path: "/",
    name: "CreateTask",
    component: CreateTask,
  },
  {
    path: "/doing",
    name: "DoingTasks",
    component: DoingTasks,
  },
  {
    path: "/done",
    name: "DoneTasks",
    component: DoneTasks,
  },
  {
    path: "/new",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
