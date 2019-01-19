// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.scss'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
let mytoken = localStorage.getItem('mytoken')
router.beforeEach((to, from, next) => {
  if (mytoken) {
    next()
  } else {
    if (to.name !== 'login') {
      next('/login')
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
