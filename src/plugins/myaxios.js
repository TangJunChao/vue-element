import axios from 'axios';

const MyAxios = {};

MyAxios.install = function (Vue) {
  // 全局设置axios的baseURL
  // axios.defaults.baseURL = 'http://localhost:3003';
  // 可以定义多个服务器请求地址
  const instance = axios.create();
  instance.defaults.baseURL= 'http://localhost:3003';
  Vue.prototype.$http = instance;
};

export default MyAxios;
