import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'index',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path:'/home',
    name:'home',
    component: () => import('../views/home/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由导航守卫
router.beforeEach((to,from,next) => {
  let token = window.sessionStorage.token
  if(to.path === '/login'){
    return next()
  }
  if(!token){
    console.log(111)
    return next('/login')
  }
  next()
})

export default router
