/*
 * @File name: questions.ts
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2024-03-05 16:40:26
 * @Description: 试题数据管理
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
 */
import { defineStore } from 'pinia'
import { questionsData } from '@/data/questions'

export interface Question {
  id: number
  subjectId: number
  year: number
  type: string
  source: string // 题目来源：真题/模拟题/专项练习等
  region?: string // 地区：江西/全国/其他省份
  content: string
  options: string[] | null
  answer: string
  analysis: string
  difficulty: number // 1-5
  points: string[] // 考点
  relatedKnowledge: string[] // 相关知识点
  similarQuestions?: number[] // 相似题目ID
  tags?: string[] // 标签：如"高频"、"重点"等
}

export interface YearQuestions {
  year: number
  questions: Question[]
}

export interface SubjectQuestions {
  subjectId: number
  yearQuestions: YearQuestions[]
}

export const useQuestionsStore = defineStore('questions', {
  state: () => ({
    questions: questionsData as SubjectQuestions[]
  }),
  getters: {
    getQuestionsBySubject: (state) => (subjectId: number) => {
      return state.questions.find((sq) => sq.subjectId === subjectId)
    },
    getQuestionsBySubjectAndYear: (state) => (subjectId: number, year: number) => {
      const subjectQuestions = state.questions.find((sq) => sq.subjectId === subjectId)
      return subjectQuestions?.yearQuestions.find((yq) => yq.year === year)
    }
  }
})
