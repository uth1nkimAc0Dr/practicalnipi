import { createApp } from "vue";
import App from "./App.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import "primeicons/primeicons.css";
const app = createApp(App);

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);

app.mount("#app");
