import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import NewHome from "../views/NewHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/limpia&claro",
      name: "Limpio&claro",
      component: NewHome, 
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

// control access
let access = 0;

router.beforeEach((to, from, next) => {
  const token =
    localStorage.getItem("token") === "undefined" ||
    localStorage.getItem("token") == null
      ? false
      : true;

  if (to.name !== "login" && to.meta.requiresAuth && !token) {
    console.log(to.meta.requiresAuth);
    next({ name: "login" });
  } else {
    access++;
    if (access < 2) {
      next({ name: "home" });
    }
    next();
  }
});

export default router;
