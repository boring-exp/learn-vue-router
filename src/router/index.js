import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import DefaultTab from '@/components/navbar/DefaultTab.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'home', // 随意给
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    // 路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainView,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'default',
        component: DefaultTab,
      },
    ]
  }
]

const router = new VueRouter({
  routes: routesArr
})

export default router
