# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of standalone web applications organized by category. Each project is self-contained with HTML, CSS, and JavaScript in a single folder. The codebase follows Chinese naming conventions and primarily serves Chinese-speaking users.

## 🧭 项目快速导航

### 主导航页面
- **访问地址**: [`project-hub.html`](../project-hub.html) - 项目总览和快速导航中心
- **功能特性**:
  - 📱 响应式设计，支持手机和桌面端
  - 🔍 实时搜索和筛选功能
  - 🎨 深色/浅色主题切换
  - 📊 项目统计和分类展示
  - ⚡ 一键打开任何项目

### 快速查找指南
| 需求 | 推荐项目 | 文件位置 |
|------|----------|----------|
| 🎴 占卜算命 | 塔罗牌测算 | `tarot-reading-website/` |
| 📖 智慧问答 | 答案之书 | `answer-book-website/` |
| 🐍 休闲游戏 | 贪吃蛇/黄金矿工 | `snake-game/`, `gold-miner-game/` |
| 📝 日常管理 | 待办事项应用 | `todo-app/` |
| 🎨 UI学习 | 响应式布局演示 | `responsive-layout-demo/` |
| ⚛️ React学习 | React项目系列 | `react-*/` |
| 🛠️ 开发工具 | 各种实用工具 | `*-tool/`, `*-app/` |

## 📁 项目列表

### 1. 🎴 塔罗牌测算网站 (`tarot-reading-website/`)
- **功能**: 完整的在线塔罗牌测算平台
- **文件**:
  - `tarot-reading.html` - 主网页应用 (2411 lines)
  - `tarot-data.js` - 塔罗牌数据和牌阵配置 (460 lines)
  - `tarot-prd.md` - 产品需求文档
- **特色**: 支持多种牌阵、智能解读、美观界面
- **架构**: 78张完整塔罗牌，5种牌阵配置，智能解读引擎

### 2. 🏮 中文名字生成器 (`chinese-name-generator/`)
- **功能**: 根据用户需求生成中文名字
- **文件**: `chinese-name-generator.html` (569 lines)
- **特色**: 结合传统文化和现代需求

### 3. ⛏️ 黄金矿工游戏 (`gold-miner-game/`)
- **功能**: 经典黄金矿工游戏的网页版
- **文件**: `gold-miner-game.html` (846 lines)
- **特色**: 完整游戏逻辑和交互体验

### 4. 🐍 贪吃蛇游戏 (`snake-game/`)
- **功能**: 经典贪吃蛇游戏的网页版
- **文件**: `snake-game.html` (361 lines)
- **特色**: 响应式控制，流畅游戏体验

### 5. 📝 待办事项应用 (`todo-app/`)
- **功能**: 简洁高效的待办事项管理工具
- **文件**: `todo-app.html` (724 lines)
- **特色**: 本地存储、简洁界面

### 6. 📐 响应式布局演示 (`responsive-layout-demo/`)
- **功能**: 响应式网页布局演示
- **文件**: `index.html` (390 lines)
- **特色**: 现代CSS布局技术展示

### 7. 👋 问候语生成器 (`greeting-app/`)
- **功能**: 个性化问候语生成工具
- **文件**: `index.html` (280 lines)
- **特色**: 多种问候语模板、优雅界面、响应式设计

### 8. 📖 答案之书 (`answer-book-website/`)
- **功能**: 神秘的答案之书互动应用
- **文件**: `answer-book.html` - 主网页应用 (650+ lines)
- **特色**: 3D书本翻页效果、神秘视觉效果、50+种智慧答案
- **架构**: CSS3 3D变换、JavaScript动画、响应式设计

### 9. 🌓 夜间模式切换演示 (`dark-mode-toggle-demo/`)
- **功能**: 夜间模式主题切换演示应用
- **文件**: `index.html` - 主网页应用 (330 lines)
- **特色**: 平滑过渡动画、本地存储记忆、系统主题检测、键盘支持
- **架构**: CSS变量主题系统、JavaScript状态管理、响应式设计

### 10. ❓ 常见问题列表 (`faq-list-demo/`)
- **功能**: 可展开收起的常见问题列表演示
- **文件**: `index.html` - 主网页应用 (420 lines)
- **特色**: 平滑展开动画、键盘支持、查看统计、响应式设计
- **架构**: CSS3动画、JavaScript交互逻辑、无障碍访问支持

### 11. 🐱 随机猫咪图片查看器 (`cat-viewer-app/`)
- **功能**: 随机获取和显示猫咪图片的应用
- **文件**: `index.html` - 主网页应用 (480 lines)
- **特色**: API集成、加载动画、统计功能、图片下载、错误处理
- **架构**: 异步API调用、本地存储统计、响应式图片处理

### 12. 💼 React个人名片 (`personal-card-react/`)
- **功能**: 使用React和TailwindCSS制作的现代化个人名片
- **文件**: `index.html` - React应用 (200 lines)
- **特色**: React组件化、TailwindCSS样式、动画效果、响应式设计
- **架构**: React Hooks、CDN集成、组件化思维、现代UI设计

### 13. 🔢 React计数器组件 (`react-counter-demo/`)
- **功能**: 最简单的React计数器组件演示
- **文件**: `index.html` - React应用 (95 lines)
- **特色**: React Hooks使用、状态管理、现代化UI设计、渐变背景、交互动画
- **架构**: React 18、useState Hook、CDN集成、组件化思维、现代CSS样式

### 14. ⚡ React+TypeScript应用 (`react-ts-app/`)
- **功能**: 使用Vite创建的现代化React+TypeScript项目
- **文件**:
  - `src/App.tsx` - 主应用组件 (903 lines)
  - `src/main.tsx` - 应用入口文件 (230 lines)
  - `package.json` - 项目配置和依赖 (713 lines)
  - `tsconfig.json` - TypeScript配置 (119 lines)
  - `vite.config.ts` - Vite构建配置 (161 lines)
- **特色**: Vite构建工具、TypeScript类型安全、ESLint代码规范、现代化开发体验
- **架构**: React 19、TypeScript 5.9、Vite 7.1、ESLint集成、模块化开发

### 15. 🛠️ Claude安装脚本 (`claude-installer-script/`)
- **功能**: Claude Code自动安装配置脚本
- **文件**: `install-claude.sh`
- **特色**: 一键安装Node.js和Claude Code

## Architecture

### Common Patterns
- **Single-file architecture**: Most apps use single HTML files with embedded CSS and JavaScript
- **Vanilla JavaScript**: No external frameworks or dependencies
- **Chinese UI**: All applications use Chinese language interfaces
- **Responsive design**: Mobile-first approach with media queries
- **Local storage**: Client-side data persistence where applicable

### Key Data Structure Patterns
```javascript
// Tarot cards structure
{
  id: "fool",
  name: "愚者",
  nameEn: "The Fool",
  type: "major",
  upright: { keywords: [], meaning: "", love: "", career: "", finance: "", health: "" },
  reversed: { keywords: [], meaning: "", love: "", career: "", finance: "", health: "" }
}

// Spread configurations
{
  id: "celtic-cross",
  name: "凯尔特十字",
  cards: 10,
  positions: [{ id: "present", name: "现状", position: {x: 0, y: 0} }]
}
```

## Development Commands

### Running Applications

#### 🚀 推荐方式：使用主导航页面
1. **打开导航中心**: 直接打开 [`project-hub.html`](../project-hub.html)
2. **浏览项目**: 通过卡片界面查看所有项目
3. **搜索筛选**: 使用搜索框或分类按钮快速定位
4. **一键启动**: 点击"打开项目"按钮直接访问

#### 📂 直接访问方式
Since these are static HTML files, you can also open them directly in a browser:
```bash
# Open any application
start tarot-reading-website/tarot-reading.html
start chinese-name-generator/chinese-name-generator.html
start responsive-layout-demo/index.html

# Open navigation center (推荐)
start project-hub.html
```

#### 🏷️ 项目分类快速访问
```bash
# 应用类项目
start tarot-reading-website/tarot-reading.html
start answer-book-website/answer-book.html
start todo-app/todo-app.html

# 游戏类项目
start gold-miner-game/gold-miner-game.html
start snake-game/snake-game.html

# 演示学习项目
start responsive-layout-demo/index.html
start dark-mode-toggle-demo/index.html
start react-counter-demo/index.html

# 工具类项目
start chinese-name-generator/chinese-name-generator.html
start cat-viewer-app/index.html
```

### Development Workflow
1. **Create new project**: Follow naming convention `project-name-type/`
2. **File organization**: Use single HTML file for simple projects, separate data.js for complex apps
3. **Testing**: Test in multiple browsers (Chrome, Firefox, Safari)
4. **Mobile testing**: Use browser dev tools for responsive testing

## Development Rules

### ✅ Mandatory Project Creation Process
**RULE 1: Auto-generate project folders**
- When creating a new project, ALWAYS create a dedicated folder in the Code directory
- Use the naming convention: `project-name-type/` (kebab-case with descriptive suffix)
- Example: `weather-forecast-app/`, `puzzle-game/`, `calculator-tool/`
- NEVER create files directly in the root Code directory
- All project files must be contained within their respective project folders

### ✅ Mandatory Code Development Process
**RULE 2: DRY Principle Enforcement**
- Before writing ANY code, ALWAYS index and search existing projects for reusable modules
- Search for similar patterns, functions, components, or data structures across all projects
- Abstract common functionality into reusable modules whenever possible
- NEVER duplicate existing code - maintain DRY (Don't Repeat Yourself) principle
- Prefer refactoring existing shared components over creating new implementations

**Code Reuse Search Pattern:**
```bash
# Search for similar functionality before coding
grep -r "function\|class\|const" */*.js
grep -r "style\|animation\|layout" */*.html
# Look for patterns in CSS and JavaScript across projects
```

**Refactoring Priority:**
1. Identify duplicate or similar code patterns
2. Abstract into shared utilities or components
3. Update all projects to use the refactored code
4. Maintain consistency across the codebase

### ✅ Mandatory Project List Update Process
**RULE 3: Auto-update project list**
- After creating ANY new project folder, IMMEDIATELY update the project list in this CLAUDE.md file
- Add the new project to the "📁 项目列表" section with proper formatting
- Include all relevant information: 功能, 文件, 特色, 架构 (if applicable)
- Update the "📋 项目状态跟踪" table with the new project entry
- **新增步骤**: 更新 [`project-hub.html`](../project-hub.html) 导航页面的项目数据
- Use the existing format and maintain consistent styling
- Update the "最后更新" timestamp at the bottom of this file

**导航页面更新流程:**
1. 在 [`project-hub.html`](../project-hub.html) 的 `projects` 数组中添加新项目
2. 填写完整的项目信息：id、title、description、category、tech、status、icon、color、files、lastUpdated、path
3. 确保项目路径正确，可以正常打开
4. 测试导航页面的搜索和筛选功能

**Project List Update Template:**
```markdown
### X. 🎯 项目名称 (`project-folder-name/`)
- **功能**: [项目功能描述]
- **文件**:
  - `main-file.html` - [文件描述] ([行数] lines)
  - `data-file.js` - [数据文件描述] ([行数] lines) (if applicable)
- **特色**: [项目特色和亮点]
- **架构**: [技术架构说明] (if applicable)
```

**Project Status Table Update:**
Add new row to the tracking table with:
- 项目名称: [项目中文名称]
- 类型: [项目分类]
- 完成状态: [开发状态]
- 最后更新: [当前日期]


## 🗂️ 项目管理规范

### 新建项目流程
1. 创建项目文件夹：`项目名称-类型` (用英文连字符分隔)
2. 在文件夹内组织相关文件
3. 如有复杂项目，创建 `README.md` 说明文档
4. 如有必要，创建 `docs/` 文件夹存放文档

### 文件命名规范
- **项目文件夹**: `kebab-case-with-type/` (e.g., `chinese-name-generator/`)
- **主文件**: `index.html` 或 `项目名.html`
- **数据文件**: `data.js` 或 `config.js`
- **样式文件**: `style.css`
- **文档文件**: `README.md`, `PRD.md`

### 项目分类
- **网站应用**: 以 `-website` 结尾
- **游戏**: 以 `-game` 结尾
- **工具**: 以 `-tool` 或 `-app` 结尾
- **演示**: 以 `-demo` 结尾
- **脚本**: 以 `-script` 结尾
- **文档**: 以 `-docs` 结尾

### 项目交付标准
- ✅ 功能完整可用
- ✅ 界面美观友好
- ✅ 代码结构清晰
- ✅ 有基本文档说明
- ✅ 响应式设计（如适用）

## 📋 项目状态跟踪

| 项目名称 | 类型 | 完成状态 | 最后更新 |
|---------|------|----------|----------|
| 塔罗牌测算网站 | 网站应用 | ✅ 完成 | 2025-09-27 |
| 中文名字生成器 | 工具应用 | ✅ 完成 | 2025-09-21 |
| 黄金矿工游戏 | 网页游戏 | ✅ 完成 | 2025-09-25 |
| 贪吃蛇游戏 | 网页游戏 | ✅ 完成 | 2025-09-21 |
| 待办事项应用 | 工具应用 | ✅ 完成 | 2025-09-21 |
| 响应式布局演示 | 演示项目 | ✅ 完成 | 2025-10-08 |
| 问候语生成器 | 工具应用 | ✅ 完成 | 2025-10-09 |
| 答案之书 | 网站应用 | ✅ 完成 | 2025-10-11 |
| 夜间模式切换演示 | 演示项目 | ✅ 完成 | 2025-10-13 |
| 常见问题列表 | 演示项目 | ✅ 完成 | 2025-10-13 |
| 随机猫咪图片查看器 | 工具应用 | ✅ 完成 | 2025-10-13 |
| React个人名片 | 工具应用 | ✅ 完成 | 2025-10-13 |
| React计数器组件 | 演示项目 | ✅ 完成 | 2025-10-13 |
| React+TypeScript应用 | 网站应用 | ✅ 完成 | 2025-10-13 |
| Claude安装脚本 | 工具脚本 | ✅ 完成 | 2025-10-08 |

## Technical Considerations

### Browser Compatibility
- **Modern browsers**: All applications use modern CSS (Flexbox, Grid) and ES6+ JavaScript
- **Mobile optimization**: Responsive design with touch event handling
- **Performance**: No external dependencies, fast loading

### Chinese Language Support
- **Character encoding**: UTF-8
- **Fonts**: System font stacks with Chinese fallbacks
- **Typography**: Considerations for Chinese character layout and spacing

### Data Management
- **Static data**: Embedded in JavaScript files
- **Local storage**: Used for persistent state in applications
- **No backend**: All processing client-side

## Common Development Tasks

### Adding New Tarot Cards
Edit `tarot-reading-website/tarot-data.js`:
```javascript
// Add to tarotCards array following existing structure
{
  id: "unique-id",
  name: "中文名称",
  nameEn: "English Name",
  type: "major|minor",
  // ... rest of card structure
}
```

### Creating New Applications
1. **规划文件夹结构** - 根据项目复杂度决定是否需要子文件夹
2. **Create folder** following naming conventions
3. **Start with basic HTML5 boilerplate**
4. **Add embedded CSS with responsive design**
5. **Implement JavaScript functionality**
6. **编写README文档** - 记录项目功能、技术栈和使用方法
7. **版本控制** - 重要节点提交到git
8. **代码规范** - 保持一致的编码风格
9. **Test across devices and browsers**

### Updating Existing Applications
- **Backup first**: Copy existing files before modification
- **Test thoroughly**: Ensure changes don't break existing functionality
- **Maintain consistency**: Follow existing code patterns and styling

### Code Quality
- **Linting**: No linting setup - maintain consistent formatting manually
- **Testing**: Manual testing through browser interaction
- **Validation**: Test all interactive elements and user flows

## 🌟 项目导航中心使用指南

### 🎯 如何使用主导航页面
1. **打开导航**: 双击 [`project-hub.html`](../project-hub.html) 或在浏览器中打开
2. **搜索项目**: 在搜索框中输入关键词（支持项目名称、描述、技术栈搜索）
3. **分类筛选**: 点击分类按钮快速筛选特定类型项目
4. **主题切换**: 右上角按钮切换深色/浅色主题
5. **项目详情**: 点击"详情"按钮查看项目信息
6. **快速启动**: 点击"打开项目"按钮直接访问

### 📊 项目统计信息
- **总项目数**: 17个已完成项目
- **项目类型**: 应用类(4个)、游戏类(2个)、演示类(8个)、工具类(3个)
- **技术栈**: HTML/CSS/JS(12个)、React(3个)、TypeScript(1个)
- **最新更新**: 所有项目均在2025年9-10月完成

### ⚡ 快捷操作
- **Ctrl+K**: 快速聚焦搜索框（可自定义）
- **Esc**: 清空搜索条件
- **Enter**: 在搜索结果中第一个项目上按Enter直接打开

---

*最后更新：2025-10-15 (新增项目导航中心功能)*