import Vue from 'vue'
import App from './App.vue'
import 'vueify/lib/insert-css'; // required for .vue file <style> tags

new Vue({
  el: '#app',
  render: h => h(App)
})
