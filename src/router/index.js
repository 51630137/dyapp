import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'index', 
  },
  {
    path: '/',
    name: 'Home', 
    component: Home,
    children:[
      {
        path: '/index',
        name: 'index', 
        component:()=>import('../views/index/Index.vue'),
        children:[
         {
          path: '/index',
          name: 'index',
          component:()=>import('../views/index/VideoList.vue')
         },
         
        ]
      },
      {
        path: '/follow',
        name: 'follow', 
        component:()=>import('../views/follow/Follow.vue')
      },
      {
        path: '/sign',
        name: 'sign', 
        component:()=>import('../views/sign.vue')
      },
      {
        path: '/tpsign',
        name: 'tpsign', 
        component:()=>import('../views/tpsign.vue')
      },
      {
        path: '/code',
        name: 'code', 
        component:()=>import('../views/code.vue')
      },
      {
        path: '/me',
        name: 'me',
        component:()=>import('../views/me/me.vue')
       },
      {
        path: '/edit',
        name: 'edit',
        component:()=>import('../views/me/edit.vue')
       },
       {
        path: '/msg',
        name: 'msg',
        component:()=>import('../views/msg/msg.vue')
       },
       {
        path: '/publish',
        name: 'publish',
        component:()=>import('../views/publish/publish.vue')
       },
       {
        path: '/upload',
        name: 'upload',
        component:()=>import('../views/publish/upload.vue')
       }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
