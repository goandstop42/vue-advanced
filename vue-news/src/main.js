import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.config.errorHandler = (err, vm, info) => {
  console.error(" ");
  console.error("Error:", err);
  console.error(" ");
  console.error("Vue component:", vm);
  console.error(" ");
  console.error("Additional info:", info);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



