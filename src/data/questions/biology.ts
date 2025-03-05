import { SubjectQuestions } from '@/stores/questions'

export const biology: SubjectQuestions = {
  subjectId: 6,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 6,
          year: 2023,
          type: '选择题',
          content: '下列关于细胞呼吸的叙述正确的是（  ）',
          options: [
            'A. 细胞呼吸只在叶绿体中进行',
            'B. 细胞呼吸的场所是线粒体',
            'C. 细胞呼吸只在晚上进行',
            'D. 细胞呼吸不需要氧气参与'
          ],
          answer: 'B',
          analysis: `解析：
1) 细胞呼吸在线粒体中进行
2) 所有活细胞都进行细胞呼吸
3) 细胞呼吸昼夜都在进行
4) 有氧呼吸需要氧气参与`,
          difficulty: 3,
          points: ['细胞呼吸', '细胞器功能'],
          relatedKnowledge: ['细胞生理', '能量代谢']
        }
      ]
    }
  ]
} 