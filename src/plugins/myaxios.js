import axios from 'axios';

const MyAxios = {};

MyAxios.install = function (Vue) {
  // 全局设置axios的baseURL
  // axios.defaults.baseURL = 'http://localhost:3003';
  // 可以定义多个服务器请求地址
  const instance = axios.create();
  instance.defaults.baseURL= 'http://localhost:3003';
  // 捕获之前的拦截请求或相应
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // return config;
    console.log(config);
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  Vue.prototype.$http = instance;
};

export default MyAxios;
