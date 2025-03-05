<!--
 * @File name: DefaultLayout.vue
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2024-03-05 16:19:22
 * @Description: 默认布局组件
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useSubjectsStore } from '@/stores/subjects'
import { Top, Menu, Fold, Expand, DataBoard } from '@element-plus/icons-vue'

const subjectsStore = useSubjectsStore()
const subjects = subjectsStore.subjects
const showSidebar = ref(false)
const isCollapsed = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="app-container">
    <!-- 移动端顶部导航 -->
    <div class="mobile-header">
      <div class="menu-btn" @click="toggleSidebar">
        <el-icon><Menu /></el-icon>
      </div>
      <h1 class="page-title">中考题库</h1>
    </div>

    <!-- 侧边栏遮罩 -->
    <div class="sidebar-overlay" :class="{ show: showSidebar }" @click="toggleSidebar"></div>

    <!-- 侧边栏 -->
    <div class="sidebar" :class="{ show: showSidebar, collapsed: isCollapsed }">
      <!-- Logo区域 -->
      <div class="logo-container">
        <el-icon class="logo-icon"><DataBoard /></el-icon>
        <span class="logo-text" v-show="!isCollapsed">中考题库</span>
      </div>

      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="toggleCollapse">
        <el-icon><Fold v-if="!isCollapsed" /><Expand v-else /></el-icon>
      </div>

      <!-- 导航菜单 -->
      <nav class="subject-nav">
        <router-link
          v-for="subject in subjects"
          :key="subject.id"
          :to="{ name: 'subject', params: { id: subject.id } }"
          class="subject-item"
          @click="showSidebar = false"
        >
          <el-icon class="subject-icon">
            <component :is="subject.icon || 'Document'" />
          </el-icon>
          <span class="subject-text" v-show="!isCollapsed">{{ subject.name }}</span>
        </router-link>
      </nav>
    </div>

    <!-- 主内容区 -->
    <div class="main-content" :class="{ 'collapsed-margin': isCollapsed }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="tool-button" @click="scrollToTop">
        <el-icon><Top /></el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #409eff;
  --el-color-primary: #409eff;
  --sidebar-width: 200px;
  --sidebar-collapsed-width: 50px;
  --header-height: 60px;
  --mobile-breakpoint: 768px;
}

.app-container {
  display: flex;
  min-height: 100vh;
  background: #f0f9ff;
  position: relative;

  .mobile-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--header-height);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0 16px;
    z-index: 1001;
    
    .menu-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #64748b;
      
      &:hover {
        color: #0ea5e9;
      }
    }
    
    .page-title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.2rem;
      font-weight: 600;
      color: #0369a1;
    }
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: var(--sidebar-width);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    
    &.collapsed {
      width: var(--sidebar-collapsed-width);
    }
    
    @media (max-width: 768px) {
      transform: translateX(-100%);
      
      &.show {
        transform: translateX(0);
      }
    }
    
    .logo-container {
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      background: rgba(255, 255, 255, 0.8);
      
      .logo-icon {
        font-size: 24px;
        color: #0ea5e9;
      }
      
      .logo-text {
        margin-left: 8px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #0369a1;
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s ease;
        
        .collapsed & {
          opacity: 0;
        }
      }
    }

    .collapse-btn {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 32px;
      height: 32px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      color: #64748b;
      transition: all 0.3s ease;
      
      &:hover {
        color: #0ea5e9;
        background: rgba(14, 165, 233, 0.2);
        transform: translateX(-50%) scale(1.1);
      }
      
      .el-icon {
        font-size: 16px;
      }
    }
  }

  .main-content {
    flex: 1;
    padding-left: var(--sidebar-width);
    transition: all 0.3s ease;
    min-height: 100vh;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    
    &.collapsed-margin {
      padding-left: var(--sidebar-collapsed-width);
    }
    
    @media (max-width: 768px) {
      padding-left: 0;
      padding-top: var(--header-height);
      
      &.collapsed-margin {
        padding-left: 0;
      }
    }
  }

  .subject-nav {
    padding: 12px 0;
    flex: 1;
    overflow-y: auto;
    
    .subject-item {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      color: #1e293b;
      text-decoration: none;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(14, 165, 233, 0.1);
        color: #0ea5e9;
      }
      
      &.router-link-active {
        background: rgba(14, 165, 233, 0.15);
        color: #0ea5e9;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #0ea5e9;
          border-radius: 3px 0 0 3px;
        }
      }
      
      .subject-icon {
        font-size: 18px;
        margin-right: 8px;
        flex-shrink: 0;
      }
      
      .subject-text {
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s ease;
        
        .collapsed & {
          opacity: 0;
        }
      }
    }
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
  }

  .sidebar-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    &.show {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      display: block;
      pointer-events: none;
      
      &.show {
        pointer-events: auto;
      }
    }
  }
}

.toolbar {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  
  .tool-button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    color: #64748b;
    
    &:hover {
      transform: translateY(-2px);
      background: #0ea5e9;
      color: white;
      box-shadow: 0 6px 16px rgba(14, 165, 233, 0.25);
    }
    
    .el-icon {
      font-size: 20px;
    }
  }
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
  }
}
</style>
