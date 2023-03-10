const axios = require("axios");
// localStorage.setItem('wjl','666666')
const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 2000,
});

instance.interceptors.request.use(
  // 发送请求之前做些什么
  function (config) {
    config.params.wjl = "NB";
    config.headers["wjl"] = "wjl";
    return config;
  },
  // 请求失败做些什么
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (config) {
    config.data += " 123";
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance
  .get("/", {
    params: {
      wjl: "zhangsan",
    },
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log("error", error);
  });
