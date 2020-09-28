import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Work from '../views/work.vue'
import Edu from '../views/edu.vue'
import Port from '../views/port.vue'
import Contact from '../views/contact.vue'
import NotFound from '../views/not-found.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/education',
      name: 'edu',
      component: Edu
    },
    {
      path: '/portfolio',
      name: 'port',
      component: Port
    },
    {
      path: '/contact-me',
      name: 'contact',
      component: Contact
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
