import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ethers from "./plugins/ether";
import store from "./store/vuex.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ethers);
app.mount("#app");
