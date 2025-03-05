<script setup lang="ts">
import { useSubjectsStore } from '@/stores/subjects'

const store = useSubjectsStore()
</script>

<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="24">
        <h1>江西省中考真题题型大纲</h1>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col
        v-for="subject in store.subjects"
        :key="subject.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="6"
      >
        <el-card class="subject-card" @click="$router.push(`/subject/${subject.id}`)">
          <div class="subject-icon">
            <el-icon :size="40">
              <component :is="subject.icon" />
            </el-icon>
          </div>
          <h2>{{ subject.name }}</h2>
          <p>{{ subject.description }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: var(--el-text-color-primary);
  font-size: 2.5em;
}

.subject-card {
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s;
}

.subject-card:hover {
  transform: translateY(-5px);
}

.subject-icon {
  text-align: center;
  margin-bottom: 15px;
  color: var(--el-color-primary);
}

h2 {
  text-align: center;
  margin: 10px 0;
  color: var(--el-text-color-primary);
}

p {
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
</style> 