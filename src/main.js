// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css';
import BreadCrumb from '@/components/common/breadcrumb.vue';
import App from './App';
import router from './router';

// 插件的使用
import MyAxios from '@/plugins/myaxios';
// 导入moment插件
// import moment form "moment";
Vue.use(MyAxios);
Vue.use(ElementUI);
// Vue.use(moment);

Vue.config.productionTip = false;
// 全局的面包屑组件
Vue.component(BreadCrumb.name, BreadCrumb);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
