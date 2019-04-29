import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/home';
import UserList from '@/views/userlist/user-list';
import Login from '@/views/login';
import Rights from '@/views/roles/rights';
import Roles from '@/views/roles/roles';
import GoodsList from '@/views/goodslist/goods-list';
import Order from '@/views/order/order';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'user',
          path: '/user',
          component: UserList
        },
        {
          name: 'roles',
          path: '/roles',
          component: Roles
        },
        {
          name: 'rights',
          path: '/rights',
          component: Rights
        },
        {
          name: 'goodslist',
          path: '/goods',
          component: GoodsList
        },
        {
          name: 'order',
          path: '/order',
          component: Order
        }
      ]
    }
  ]
});

export default router;
