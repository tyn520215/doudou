// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vuerouse from 'vue-resource'
import './utils/selfAdaption'
Vue.use(MintUI);
Vue.use(vuerouse);
let musicApi = 'http://musicapi.duapp.com/api.php?type=topPlayList&cat=全部&offset=0&limit=9';
let musicsonglist = 'https://api.imjad.cn/cloudmusic/?type=playlist&id=807761662'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
