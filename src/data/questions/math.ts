import { SubjectQuestions } from '@/stores/questions'

export const math: SubjectQuestions = {
  subjectId: 2,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 2,
          year: 2023,
          type: '选择题',
          content: '已知集合A={x|x²-4x+3=0}，B={1,3}，则A∩B=（  ）',
          options: ['A. {1}', 'B. {3}', 'C. {1,3}', 'D. ∅'],
          answer: 'C',
          analysis: `解：
1) 解方程x²-4x+3=0
(x-1)(x-3)=0
x=1或x=3
所以A={1,3}
2) 因此A∩B={1,3}`,
          difficulty: 2,
          points: ['集合', '二次方程'],
          relatedKnowledge: ['集合的交集', '二次方程的解法']
        }
      ]
    }
  ]
} 