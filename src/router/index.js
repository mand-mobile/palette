import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Record from '@/views/record'
import List from '@/views/list'
import Edit from '@/views/edit'
import Generate from '@/views/generate'
import Error from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/generate',
      name: 'Generate',
      component: Generate
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
