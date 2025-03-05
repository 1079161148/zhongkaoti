

```markdown:package.json
# 中考题库系统

一个基于 Vue 3 + TypeScript + Vite 的中考题库系统，提供各学科的真题练习和解析。

## 技术栈

- **前端框架**: Vue 3
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI 框架**: Element Plus
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **样式处理**: SCSS
- **Markdown 渲染**: Marked
- **图标**: Element Plus Icons

## 项目结构

```
src/
├── assets/            # 静态资源
├── components/        # 公共组件
├── data/             # 题库数据
│   └── questions/    # 各学科题目
├── layouts/          # 布局组件
├── router/           # 路由配置
├── stores/           # Pinia 状态管理
├── styles/           # 全局样式
│   ├── variables.scss  # 变量定义
│   ├── mixins.scss    # 混入定义
│   ├── global.scss    # 全局样式
│   └── index.scss     # 样式入口
└── views/            # 页面组件
```

## 功能特点

1. **响应式布局**
   - 适配桌面端和移动端
   - 可折叠侧边栏
   - 流畅的过渡动画

2. **题目展示**
   - 按年份分类展示
   - 题目难度标识
   - 选项清晰展示
   - 答案和解析可折叠

3. **用户体验**
   - 毛玻璃效果
   - 渐变色标题
   - 平滑滚动
   - 悬浮效果

4. **样式系统**
   - 模块化 SCSS
   - 响应式混入
   - 主题变量
   - 可复用组件

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 样式指南

### 颜色系统

- 主色: `#0ea5e9`
- 渐变色: `linear-gradient(120deg, #0ea5e9 0%, #2563eb 100%)`
- 背景色: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`
- 文本色: `#1e293b`

### 响应式断点

```scss
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1400px
);
```

### 布局变量

```scss
--sidebar-width: 200px;
--sidebar-collapsed-width: 50px;
--header-height: 60px;
```

## 项目配置

### Vite 配置

- 自动导入 Vue 相关 API
- 自动导入 Element Plus 组件
- 配置 SCSS 全局变量
- 配置路径别名
- 启用 sourcemap

### TypeScript 配置

- 严格模式
- Vue 3 类型支持
- 组件类型声明自动生成

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 推送到分支
5. 提交 Pull Request

## 许可证

Copyright (C) 2024 Tsing Micro Technology Inc All rights reserved.
```