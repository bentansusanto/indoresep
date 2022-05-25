import { createRouter, createWebHistory } from 'vue-router'


const routes = [

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

