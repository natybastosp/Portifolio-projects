import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/standings",
  },
  {
    path: "/standings",
    name: "standings",
    //component: () => import("../views/StandingsView.vue"),
  },
  {
    path: "/drivers",
    name: "drivers",
    //component: () => import("../views/DriversView.vue"),
  },
  {
    path: "/constructors",
    name: "constructors",
    //component: () => import("../views/ConstructorsView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    //component: () => import("../views/CalendarView.vue"),
  },
  {
    path: "/race/:round",
    name: "race",
    // component: () => import("../views/RaceView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
