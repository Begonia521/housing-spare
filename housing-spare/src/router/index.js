import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/home/headers'
import Login from '@/components/home/login'
import Loop from '@/components/home/loop'
import Home from '@/views/home'
import Rental from '@/components/home/rental'
import Centers from '@/components/home/centers'
import End from '@/components/home/end'

import Costom from '@/views/costom'
import Banner from '@/components/costom/banner'

import Fz from '@/views/fz'
import Rent from '@/components/costom/rent'

import Orders from '@/components/order/orders'

//new
import Boxs from '@/components/new/boxs'
import Unite from '@/components/new/unite'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/costom',
      name: 'costom',
      component: Costom
    },
    {
      path: '/fz',
      name: 'fz',
      component: Fz
    },
    {
      path: '/rent',
      name: 'rent',
      component: Rent
    },
    {
      path: '/headers',
      name: 'headers',
      component: Headers
    },
    {
      path: '/loop',
      name: 'loop',
      component: Loop
    },
    {
      path: '/rental',
      name: 'rental',
      component: Rental
    },
    {
      path: '/centers',
      name: 'centers',
      component: Centers
    },
    {
      path: '/end',
      name: 'end',
      component: End
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/unite',
      name: 'unite',
      component: Unite
    },
    {
      path: '/boxs',
      name: 'boxs',
      component: Boxs
    }
  ]
})
