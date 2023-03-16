import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "首页",
    },
    redirect: { name: "test" },
    children: [
      {
        path: "goods",
        name: "goods",
        component: () => import("@/views/goods/GoodsView.vue"),
        meta: {
          title: "商品管理",
          menu: "商品管理",
          isShow: true,
        },
      },
      {
        path: "users",
        name: "users",
        component: () => import("@/views/user/UserView.vue"),
        meta: {
          title: "用户列表",
          menu: "用户列表",
          isShow: true,
        },
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/TestView.vue"),
        meta: {
          title: "测试页面",
          menu: "测试",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue"),
    meta: { title: "登录页" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to) => {
  if (to.meta.title && typeof to.meta.title === "string") {
    document.title = to.meta.title;
  }
  return true;
});

export default router;
