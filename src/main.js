import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TheNotification from "./components/TheNotification.vue";
import ThePaging from "./components/ThePaging.vue";

const app = createApp(App);

app.use(store);

app.use(router)

app.component("the-notification", TheNotification);
app.component("the-paging", ThePaging);

app.mount("#app");

