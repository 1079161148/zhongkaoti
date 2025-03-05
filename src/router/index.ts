/*
 * @File name:
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2025-03-05 16:35:26
 * @Description:
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          redirect: '/subject/1'
        },
        {
          path: '/subject/:id',
          name: 'subject',
          component: () => import('@/views/SubjectView.vue')
        }
      ]
    }
  ]
})

export default router
