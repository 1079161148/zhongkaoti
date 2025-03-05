import { SubjectQuestions } from '@/stores/questions'

export const politics: SubjectQuestions = {
  subjectId: 7,
  yearQuestions: [
    {
      year: 2023,
      questions: [
        {
          id: 1,
          subjectId: 7,
          year: 2023,
          type: '选择题',
          content: '下列关于我国社会主义核心价值观的说法正确的是（  ）',
          options: [
            'A. 富强、民主、文明、和谐是国家层面的价值目标',
            'B. 爱国、敬业、诚信、友善是社会层面的价值取向',
            'C. 自由、平等、公正、法治是个人层面的价值准则',
            'D. 社会主义核心价值观包含了中华传统美德的内容'
          ],
          answer: 'A',
          analysis: `解析：
社会主义核心价值观分为三个层面：
- 国家层面：富强、民主、文明、和谐
- 社会层面：自由、平等、公正、法治
- 个人层面：爱国、敬业、诚信、友善`,
          difficulty: 3,
          points: ['社会主义核心价值观', '价值体系层次'],
          relatedKnowledge: ['思想政治教育', '价值观教育']
        }
      ]
    }
  ]
} 