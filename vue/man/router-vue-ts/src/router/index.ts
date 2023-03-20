import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";

declare module "vue-router" {
  export interface RouteMeta {
    title?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "loginPage",
    },
    component: () => import("../views/route/LoginView.vue"),
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("../views/route/RegView.vue"),
  },
  {
    path: "/details/:name",
    name: "details",
    component: () => import("../views/route/DetailsView.vue"),
  },
  {
    path: "/user",

    // redirect:{
    //   path:'/user/log1',
    //   query:{
    //     time:Date.now()
    //   }
    // },
    redirect: (to) => {
      console.log(to);
      return {
        path: "/user/log1",
        query: {
          time: Date.now(),
        },
      };
    },
    component: () => import("../views/route/coms/Foo.vue"),
    children: [
      {
        path: "log1",
        components: {
          default: () => import("../views/route/coms/A.vue"),
          bbb: () => import("../views/route/coms/D.vue"),
        },
      },
      {
        path: "log2",
        components: {
          bbb: () => import("../views/route/coms/B.vue"),
          default: () => import("../views/route/coms/C.vue"),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // 滚动行为
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition;
    } else {
      return {
        top: 100,
      };
    }
  },
  routes,
});

export default router;

// hash location.hash='/' window.addEventListener('hashchange',e=>{console.log(e)})
