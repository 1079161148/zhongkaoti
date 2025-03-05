import { SubjectQuestions } from '@/stores/questions'

export const physics: SubjectQuestions = {
  subjectId: 4,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 4,
          year: 2023,
          type: '选择题',
          content: '在"探究杠杆的平衡条件"实验中，下列说法正确的是（  ）',
          options: [
            'A. 力臂是指力的方向与支点的距离',
            'B. 杠杆平衡时，两侧力的大小一定相等',
            'C. 杠杆平衡时，动力与阻力的比等于动力臂与阻力臂的比',
            'D. 测量力臂时应从支点到作用点的连线方向测量'
          ],
          answer: 'C',
          analysis: `解析：
1) 力臂是指力的作用线到支点的垂直距离
2) 杠杆平衡时，动力×动力臂=阻力×阻力臂
3) 因此动力/阻力=阻力臂/动力臂
4) 测量力臂应垂直于力的方向测量`,
          difficulty: 3,
          points: ['杠杆平衡条件', '力臂概念'],
          relatedKnowledge: ['简单机械', '力矩平衡']
        }
      ]
    }
  ]
} 