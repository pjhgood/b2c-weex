/* global Vue */
import Router from 'vue-router'
import HelloWorld from
import ElementUI from 'element-ui'
  '@/components/HelloWorld'

Vue.use(Router)
Vue.use(ElementUI)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
