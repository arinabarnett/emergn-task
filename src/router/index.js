import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/characters",
    name: "characters",
    component: Characters
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
