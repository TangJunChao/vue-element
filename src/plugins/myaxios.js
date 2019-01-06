import axios from 'axios';

const MyAxios = {};

MyAxios.install = function (Vue) {
  // 全局设置axios的baseURL
  // axios.defaults.baseURL = 'http://localhost:3003';
  // 可以定义多个服务器请求地址
  const instance = axios.create();
  instance.defaults.baseURL= 'http://localhost:5100';
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  instance.defaults.transformRequest = [(data) => {
    let ret = '';
    for (let i in data){
      ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
    };
    return ret.substring(0, ret.length-1);
  }];
  // 在请求前添加拦截信息
  // instance.interceptors.request.use(function (config) {
  //   // Do something before request is sent
  //   if(config.url.toLowerCase() !== 'login') {
  //     let token = localStorage.getItem('token');
  //     instance.headers.Authorization = token;
  //   };
  //   // return config;
  //   console.log(config);
  // }, function (error) {
  //   // Do something with request error
  //   return Promise.reject(error);
  // });
  Vue.prototype.$http = instance;
};

export default MyAxios;
