import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import UserList from '@/components/userlist/user-list';
import Login from '@/views/login';

Vue.use(Router);

export default new Router({
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
        }
      ]
    }
  ]
});
