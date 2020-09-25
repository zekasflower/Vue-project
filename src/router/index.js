import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import First from "../views/First.vue";
import Second from "../views/Second.vue";
import Third from "../views/Third.vue";
import Fourth from "../views/Fourth.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/help",
    name: "Help",
    component: Help
  },
  {
    path: "/first",
    name: "First",
    component: First
  },
  {
    path: "/second",
    name: "Second",
    component: Second
  },
  {
    path: "/third",
    name: "Third",
    component: Third
  },
  {
    path: "/fourth",
    name: "Fourth",
    component: Fourth
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
