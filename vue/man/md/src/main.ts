import { createApp } from "vue";
import mavonEditor from "mavon-editor";
import "./style.css";
import App from "./App.vue";

import "mavon-editor/dist/css/index.css";
// use
createApp(App).use(mavonEditor).mount("#app");
