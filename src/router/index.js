import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: () => import('../views/contact-page.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact-page.vue')
    },
    
    {
      path: '/majors',
      name: 'majors',
      component: () => import('../views/majors-page.vue')
    },
    
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/media-page.vue')
    },

    {
      path: '/workshops',
      name: 'workshops',
      component: () => import('../views/workshops-page.vue')
    },
    
    {
      path: '/fees',
      name: 'fees',
      component: () => import('../views/fees-page.vue')
    },
    
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/partners-page.vue')
    },
    
    {
      path: '/certifications',
      name: 'certifications',
      component: () => import('../views/certifications.vue')
    },
  ]
})

export default router
