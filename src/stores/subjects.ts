/*
 * @File name:
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2025-03-05 16:35:35
 * @Description:
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
 */
import { defineStore } from 'pinia'

export interface Subject {
  id: number
  name: string
  icon: string
  description: string
}

export const useSubjectsStore = defineStore('subjects', {
  state: () => ({
    subjects: [
      { id: 1, name: '语文', icon: 'Reading' },
      { id: 2, name: '数学', icon: 'DataLine' },
      { id: 3, name: '英语', icon: 'ChatDotSquare' },
      { id: 4, name: '物理', icon: 'Lightning' },
      { id: 5, name: '化学', icon: 'ElementPlus' },
      { id: 6, name: '生物', icon: 'Leaf' },
      { id: 7, name: '政治', icon: 'Flag' },
      { id: 8, name: '历史', icon: 'Timer' },
      { id: 9, name: '地理', icon: 'Location' }
    ] as Subject[]
  }),
  getters: {
    getSubjectById: (state) => (id: number) => {
      return state.subjects.find((subject) => subject.id === id)
    }
  }
})
