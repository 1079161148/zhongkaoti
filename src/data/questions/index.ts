/*
 * @File name: index.ts
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2024-03-05 17:20:26
 * @Description: 试题数据统一导出
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
 */
import { SubjectQuestions } from '@/stores/questions'
import { chinese } from './chinese'
import { math } from './math'
import { english } from './english'
import { physics } from './physics'
import { chemistry } from './chemistry'
import { biology } from './biology'
import { politics } from './politics'
import { history } from './history'
import { geography } from './geography'

export const questionsData: SubjectQuestions[] = [
  chinese, // subjectId: 1
  math, // subjectId: 2
  english, // subjectId: 3
  physics, // subjectId: 4
  chemistry, // subjectId: 5
  biology, // subjectId: 6
  politics, // subjectId: 7
  history, // subjectId: 8
  geography // subjectId: 9
]

export default questionsData
