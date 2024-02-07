import { createApp } from "vue";
import App from "./App.vue";
// import router from './router'
// import store from './store'

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
const app = createApp(App);

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);

app.mount("#app");
