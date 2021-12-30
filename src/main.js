import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss"
import { required, email } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});

// Add the email rule
extend('email', {
  ...email,
  message: 'This field must be a valid email'
});

// import VeeValidate from 'VeeValidate';
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

// with typescript
for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
    message: messages[rule], // assign message
  })
}
// // Vue.component('ValidationProvider', ValidationProvider);
// Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
 
  render: (h) => h(App),
}).$mount("#app");
