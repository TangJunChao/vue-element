import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import UserList from '@/components/userlist/user-list';

Vue.use(Router);

export default new Router({
  routes: [
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
