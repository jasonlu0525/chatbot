import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/front/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/front/Product.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
