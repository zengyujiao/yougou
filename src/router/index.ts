import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/contact/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contact",
    component: Contact
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import("../views/detail/detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
