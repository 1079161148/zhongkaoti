import { SubjectQuestions } from '@/stores/questions'

export const english: SubjectQuestions = {
  subjectId: 3,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 3,
          year: 2023,
          type: '完形填空',
          content: `Read the passage and choose the best answer for each blank.

Last summer, I had an unforgettable ___1___ in London. It was my first time ___2___ abroad, and everything seemed so different ___3___ what I was used to.

1. A) experience  B) travel  C) journey  D) trip
2. A) travel  B) traveling  C) to travel  D) travelled
3. A) with  B) from  C) as  D) than`,
          options: [
            'A) experience',
            'B) travel',
            'C) journey',
            'D) trip'
          ],
          answer: `1. A) experience
2. B) traveling
3. B) from`,
          analysis: `解析：
1. experience（经历）符合语境，表达"难忘的经历"；其他选项不够准确
2. "it was my first time"后面要用动名词形式
3. "different from"是固定搭配，表示"与...不同"`,
          difficulty: 3,
          points: ['词语搭配', '动名词用法', '介词用法'],
          relatedKnowledge: ['名词辨析', '动名词', '固定搭配']
        }
      ]
    }
  ]
} 