import { SubjectQuestions } from '@/stores/questions'

export const history: SubjectQuestions = {
  subjectId: 8,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 8,
          year: 2023,
          type: '选择题',
          content: '下列史实按时间先后顺序排列正确的是（  ）',
          options: [
            'A. 戊戌变法→辛亥革命→五四运动→北伐战争',
            'B. 辛亥革命→戊戌变法→北伐战争→五四运动',
            'C. 五四运动→北伐战争→戊戌变法→辛亥革命',
            'D. 北伐战争→五四运动→辛亥革命→戊戌变法'
          ],
          answer: 'A',
          analysis: `解析：
主要历史事件时间：
1) 戊戌变法：1898年
2) 辛亥革命：1911年
3) 五四运动：1919年
4) 北伐战争：1926-1928年`,
          difficulty: 3,
          points: ['近代史', '重大历史事件'],
          relatedKnowledge: ['历史年代', '革命历程']
        }
      ]
    }
  ]
} 