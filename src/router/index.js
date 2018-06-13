import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Edit from '@/views/edit'
import Error from '@/views/404'

const Record = r => require.ensure([], () => r(require('@/views/record')), 'record')
const List = r => require.ensure([], () => r(require('@/views/list')), 'list')
const Generate = r => require.ensure([], () => r(require('@/views/generate')), 'generate')

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
