import { SubjectQuestions } from '@/stores/questions'

export const geography: SubjectQuestions = {
  subjectId: 9,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 9,
          year: 2023,
          type: '选择题',
          content: '读江西省略图，下列说法正确的是（  ）',
          options: [
            'A. 赣江流经赣州、吉安、南昌等城市',
            'B. 武夷山位于江西省西部边界',
            'C. 鄱阳湖位于江西省南部',
            'D. 景德镇位于赣江下游'
          ],
          answer: 'A',
          analysis: `解析：
1) 赣江确实流经赣州、吉安、南昌
2) 武夷山在江西省东部
3) 鄱阳湖在江西省北部
4) 景德镇位于江西省东北部`,
          difficulty: 3,
          points: ['区域地理', '地形特征'],
          relatedKnowledge: ['江西地理', '水系分布']
        }
      ]
    }
  ]
} 