import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import SubMain from '../views/layout/SubMain'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    },{
      path: 'updatePassword',
      component: () => import('@/views/dashboard/updatePassword')
    }]
  },

  //人员管理
  {
    path: '/menber',
    component: Layout,
    // redirect: '/menber/table',
    name: 'menber',
    meta: { title: '人员管理', icon: 'example' },
    children: [
      {
        path: 'student',
        name: 'student',
        component: () => import('@/views/menber/student/list'),
        meta: { title: '会员管理', icon: 'table' }
      },{
        path: 'doctor',
        name: 'doctor',
        component: SubMain,
        meta: { title: '医师管理', icon: 'table' },
        children: [
          {
            path: 'list',
            name: 'doctorList',
            component: () => import('@/views/menber/doctor/list'),
            meta: { title: '医师列表', icon: 'table' },
          },{
            path: 'add',
            name: 'doctorAdd',
            component: () => import('@/views/menber/doctor/add'),
            meta: { title: '添加医师', icon: 'table' },
          },{
            path: 'update',
            name: 'doctorUpdate',
            component: () => import('@/views/menber/doctor/update'),
            meta: { title: '更新医师信息', icon: 'table' },
            hidden: true,
          },
        ]
      },
    ]
  },

  
  //订单管理
  {
    path: '/order',
    component: Layout,
    // redirect: '/menber/table',
    name: 'order',
    meta: { title: '订单列表', icon: 'example' },
    children: [
      {
        path: 'waituse',
        name: 'orderwaituse',
        component: () => import('@/views/order/waitUse'),
        meta: { title: '待使用订单', icon: 'table' }
      },{
        path: 'waitPay',
        name: 'orderwaitPay',
        component: () => import('@/views/order/waitPay'),
        meta: { title: '待付款订单', icon: 'table' }
      },{
        path: 'close',
        name: 'orderclose',
        component: () => import('@/views/order/close'),
        meta: { title: '超时订单', icon: 'table' }
      },{
        path: 'finish',
        name: 'orderfinish',
        component: () => import('@/views/order/finish'),
        meta: { title: '已完成订单', icon: 'table' }
      },{
        path: 'cancel',
        name: 'ordercancel',
        component: () => import('@/views/order/cancel'),
        meta: { title: '已取消订单', icon: 'table' }
      },
    ]
  },

  
  //订单管理
  {
    path: '/note',
    component: Layout,
    // redirect: '/menber/table',
    name: 'note',
    meta: { title: '公告', icon: 'example' },
    children: [
      {
        path: 'lsit',
        name: 'notelist',
        component: () => import('@/views/note/list'),
        meta: { title: '公告列表', icon: 'table' }
      },{
        path: 'add',
        name: 'noteadd',
        component: () => import('@/views/note/add'),
        meta: { title: '添加公告', icon: 'table' }
      },{
        path: 'update',
        name: 'noteupdate',
        component: () => import('@/views/note/update'),
        meta: { title: '更新公告', icon: 'table' },
        hidden: true,
      },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
