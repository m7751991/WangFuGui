window.__T3C__={"isLibrary":false,"filename":"versions","name":"wwc-ces","version":"0.1.5","hash":true,"pathOnly":false,"paths":[],"template":"","libraryEntry":"src/main.js"}
/*
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-24 15:13:40
 * @LastEditTime: 2021-05-03 21:03:20
 * @LastEditors: Wangwenchao
 */
import Vue from 'vue'
import App from './App.vue'
// import { Input } from 'wwc-ces'
import element from 'wwc-ces'
import { Input } from 'element-ui'
Vue.use(element);
Vue.use(Input);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
