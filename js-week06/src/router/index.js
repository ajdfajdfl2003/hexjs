import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Home'),
    children: [
      {
        path: '',
        component: () => import('../views/home/Products'),
      }, {
        path: 'product/:id',
        component: () => import('../views/home/Product'),
      }, {
        path: 'cart',
        component: () => import('../views/home/Cart'),
      }, {
        path: 'payment',
        component: () => import('../views/home/Payment'),
      }, {
        path: 'payment/finish',
        component: () => import('../views/home/PaymentFinish'),
      }, {
        path: 'about',
        component: () => import('../views/home/About'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Dashboard'),
    children: [
      {
        path: '',
        component: () => import('../views/dashboard/Products'),
      }, {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons'),
      }, {
        path: 'order-list',
        component: () => import('../views/dashboard/OrderList'),
      }, {
        path: 'photos',
        component: () => import('../views/dashboard/Photos'),
      }, {
        path: 'logout',
        component: () => import('../views/dashboard/Logout'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
