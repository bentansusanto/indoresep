import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../views/homeView'
import aboutView from '../views/aboutView'
import foodView from '../views/foodView'
import tripView from '../views/tripView'

const routes = [
    {
      path : '/',
      name : 'Homepage',
      component : homeView 
    },
    {
      path : '/about',
      name : 'Tentang Kami',
      component : aboutView 
    },
    {
      path : '/food',
      name : 'Makanan Khas Batam',
      component : foodView 
    },
    {
      path : '/trip',
      name : 'Destinasi Terbaik Di Batam',
      component : tripView 
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
    next()
  })

  export default router

