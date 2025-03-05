import { SubjectQuestions } from '@/stores/questions'

export const chemistry: SubjectQuestions = {
  subjectId: 5,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 5,
          year: 2023,
          type: '选择题',
          content: '下列有关氧气的说法正确的是（  ）',
          options: [
            'A. 氧气是一种淡黄色有刺激性气味的气体',
            'B. 氧气能与CO反应生成CO₂',
            'C. 实验室制取氧气的化学方程式：2KClO₃ = 2KCl + 3O₂↑',
            'D. 收集氧气应采用向上排水法'
          ],
          answer: 'B',
          analysis: `解析：
1) 氧气是无色无味气体
2) 氧气确实能与CO反应生成CO₂
3) 实验室制取氧气：2KClO₃ =2KCl + 3O₂↑需要加入MnO₂作催化剂
4) 氧气比空气重，应用向下排水法收集`,
          difficulty: 3,
          points: ['氧气性质', '气体制备'],
          relatedKnowledge: ['气体的性质', '化学方程式']
        }
      ]
    }
  ]
} 