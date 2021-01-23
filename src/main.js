import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
