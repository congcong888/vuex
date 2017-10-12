import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Icrement from '@/components/Icrement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Icrement',
      component: Icrement
    }
  ]
})
