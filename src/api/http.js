import Axios from 'axios';
import qs from 'qs';
const baseUrl = 'http://192.168.0.103:8866';
const http = Axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 30000 // 请求超时时间
});
// 请求拦截(加token&&过渡动画)
http.interceptors.request.use(
  config => {
    // config.data = Qs.stringify(config.data);
    // config.headers = {
    //   'X-AUTH-TOKEN': postBear ? postBear.token : ''
    // };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// 响应拦截(隐藏过渡动画)
http.interceptors.response.use(
  res => {
    return res;
  },
  function(err) {
    return Promise.reject(err);
  }
);
export default {
  post: (url, params = {}) => {
    return new Promise((resolve, reject) => {
      http
        .post(url, params)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
};
