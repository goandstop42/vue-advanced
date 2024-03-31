import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store";

Vue.use(VueRouter);

function fetchListWithSpinner(to, next) {
  bus.$emit("start:spinner");
  store
    .dispatch("FETCH_LIST", to.name)
    .then(() => {
      console.log("fetched");
      bus.$emit("end:spinner");
      next();
    })
    .catch(error => {
      console.log(error);
    });
}

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      // component: NewsView,
      component: createListView("NewsView"),
      beforeEnter: (to, from, next) => {
        fetchListWithSpinner(to, next);
      }
    },
    {
      path: "/ask",
      name: "ask",
      // component: AskView,
      component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        fetchListWithSpinner(to, next);
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: JobsView,
      component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        fetchListWithSpinner(to, next);
      }
    },
    {
      path: "/item/:id",
      component: ItemView,
      beforeEnter: (to, from, next) => {
        fetchListWithSpinner(to, next);
      }
    },
    {
      path: "/user/:id",
      component: UserView,
      beforeEnter: (to, from, next) => {
        fetchListWithSpinner(to, next);
      }
    }
  ]
});