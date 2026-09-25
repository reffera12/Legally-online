import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Views/HomeView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../Views/ServicesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../Views/ContactView.vue'),
    }
  ],
})

export default router
