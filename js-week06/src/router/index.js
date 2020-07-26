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

];

const router = new VueRouter({
  routes,
});

export default router;
