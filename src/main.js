// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css';
import App from './App';
import router from './router';

// 插件的使用
import MyAxios from '@/plugins/myaxios';
// 导入moment插件
import moment from 'moment';
Vue.use(MyAxios);
Vue.use(ElementUI);
// 全局时间格式化过滤
Vue.filter('dataftm', (value, dataStr) => {
  return moment(value).format(dataStr);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
