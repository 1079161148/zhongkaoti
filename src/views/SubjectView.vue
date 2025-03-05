<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuestionsStore } from '@/stores/questions'
import { useSubjectsStore } from '@/stores/subjects'
import * as marked from 'marked'
import { QuestionFilled } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const questionsStore = useQuestionsStore()
const subjectsStore = useSubjectsStore()

interface YearQuestion {
  year: number
  questions: {
    id: number
    subjectId: number
    year: number
    type: string
    source: string
    region?: string
    content: string
    options: string[] | null
    answer: string
    difficulty: number
    points: string[]
    analysis?: string
    tags?: string[]
  }[]
}

const subjectId = computed(() => Number(route.params.id))
const subject = computed(() => subjectsStore.subjects.find((s) => s.id === subjectId.value))
const subjectQuestions = computed(() => {
  const result = questionsStore.getQuestionsBySubject(subjectId.value)
  return result?.yearQuestions || []
})

// 如果科目不存在，重定向到首页
if (!subject.value) {
  router.push('/')
}

const getDifficultyTag = (difficulty: number) => {
  const tags: Record<number, { type: 'info' | 'success' | 'warning' | 'danger'; label: string }> = {
    1: { type: 'info', label: '简单' },
    2: { type: 'success', label: '较易' },
    3: { type: 'warning', label: '中等' },
    4: { type: 'danger', label: '较难' },
    5: { type: 'danger', label: '困难' }
  }
  return tags[difficulty] || tags[3] // 添加默认值
}
</script>

<template>
  <div class="subject-view">
    <h1 class="subject-title">{{ subject?.name }}中考真题及解析</h1>

    <el-timeline>
      <el-timeline-item
        v-for="yearQuestion in subjectQuestions"
        :key="yearQuestion.year"
        :timestamp="`${yearQuestion.year}年`"
        placement="top"
        type="primary"
      >
        <el-card class="year-card">
          <template #header>
            <div class="year-header">
              <h3>{{ yearQuestion.year }}年{{ subject?.name }}试题</h3>
              <el-tag>共{{ yearQuestion.questions.length }}题</el-tag>
            </div>
          </template>

          <div class="questions-container">
            <div
              v-for="question in yearQuestion.questions"
              :key="question.id"
              class="question-item"
            >
              <div class="question-header">
                <span class="question-type">{{ question.type }}</span>
                <el-tag :type="getDifficultyTag(question.difficulty).type" size="small">
                  {{ getDifficultyTag(question.difficulty).label }}
                </el-tag>
              </div>

              <div class="question-content markdown-body" v-html="marked.parse(question.content)"></div>

              <div class="question-options" v-if="question.options">
                <div v-for="(option, index) in question.options" :key="index" class="option-item">
                  {{ option }}
                </div>
              </div>

              <el-collapse class="answer-collapse">
                <el-collapse-item>
                  <template #title>
                    <div class="collapse-title">
                      <el-icon><QuestionFilled /></el-icon>
                      查看答案与解析
                    </div>
                  </template>

                  <div class="answer-content">
                    <div class="answer" v-if="question.answer">
                      <h4>参考答案：</h4>
                      <div class="markdown-body" v-html="marked.parse(question.answer)"></div>
                    </div>

                    <div class="analysis" v-if="question.analysis">
                      <h4>解析：</h4>
                      <div class="markdown-body" v-html="marked.parse(question.analysis)"></div>
                    </div>

                    <div class="knowledge-points">
                      <h4>考点：</h4>
                      <div class="tags">
                        <el-tag
                          v-for="point in question.points"
                          :key="point"
                          size="small"
                          effect="plain"
                        >
                          {{ point }}
                        </el-tag>
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style lang="scss" scoped>
.subject-view {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  min-height: 100vh;

  .subject-title {
    text-align: center;
    background: linear-gradient(120deg, #0ea5e9 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #0ea5e9, #2563eb);
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 24px;
    }
  }

  .year-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    box-shadow:
      0 4px 20px -2px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow:
        0 8px 30px -4px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(0, 0, 0, 0.05);
    }

    .year-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      background: linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8));

      h3 {
        font-size: 1.25rem;
        color: #0369a1;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        padding: 16px;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
    }
  }

  .questions-container {
    padding: 20px;

    @media (max-width: 768px) {
      padding: 16px;
    }
  }

  .question-item {
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 16px;
      margin-bottom: 16px;
    }

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .question-type {
        font-size: 1.1rem;
        font-weight: 600;
        color: #0369a1;
        position: relative;
        padding-left: 16px;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 16px;
          background: linear-gradient(to bottom, #0ea5e9, #2563eb);
          border-radius: 2px;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
    }

    .question-content {
      margin-bottom: 20px;
      line-height: 1.6;
      color: #1e293b;
    }

    .question-options {
      margin: 16px 0;

      .option-item {
        padding: 12px 16px;
        color: #334155;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
        margin-bottom: 8px;
        transition: all 0.2s ease;
        position: relative;
        padding-left: 20px;

        &:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateX(4px);
        }

        &::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #0ea5e9;
        }

        @media (max-width: 768px) {
          padding: 10px 12px;
          padding-left: 16px;
          
          &::before {
            left: 6px;
          }
        }
      }
    }

    .answer-collapse {
      margin-top: 24px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.05);
      background: rgba(255, 255, 255, 0.6);

      .collapse-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #0369a1;
        font-weight: 600;
        transition: all 0.3s ease;
        padding: 12px 16px;

        &:hover {
          color: #0ea5e9;
          background: rgba(255, 255, 255, 0.8);
        }
      }

      .answer-content {
        padding: 24px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 8px;

        h4 {
          color: #0369a1;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .knowledge-points {
          margin-top: 20px;

          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      }
    }
  }

  :deep(.markdown-body) {
    background: transparent;
    font-size: 1rem;
    line-height: 1.6;

    pre {
      background: #f1f5f9;
      padding: 16px;
      border-radius: 8px;
    }
  }

  :deep(.el-timeline-item__node--primary) {
    background: linear-gradient(135deg, #0ea5e9, #2563eb);
    border: 2px solid #fff;
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
  }

  :deep(.el-timeline-item__timestamp) {
    color: #0369a1;
    font-weight: 600;
    font-size: 1.1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
}
</style>
