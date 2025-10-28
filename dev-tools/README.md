# 🛠️ 开发工具文件夹

这个文件夹包含了项目开发和管理相关的工具文件。

## 📁 文件说明

### 📖 文档文件
- **`CLAUDE.md`** - 项目开发指南和管理文档
  - 包含项目列表、开发规范、使用指南
  - 更新项目时需要同步更新此文档

### 🚀 启动工具
- **`project-launcher.js`** - 跨平台项目启动器
  ```bash
  # 使用方法
  node dev-tools/project-launcher.js [分类]

  # 示例
  node dev-tools/project-launcher.js apps    # 启动所有应用类项目
  node dev-tools/project-launcher.js n       # 打开导航中心
  node dev-tools/project-launcher.js all     # 启动所有项目（慎用）
  ```

- **`start-projects.bat`** - Windows图形化启动脚本
  ```bash
  # 使用方法
  # 双击运行或在命令行执行
  dev-tools\start-projects.bat
  ```

### 📦 依赖管理
- **`node_modules/`** - Node.js依赖包
  - 包含开发过程中使用的npm包
  - 可以定期清理不用的依赖

## 🎯 使用指南

### 快速启动项目
1. **推荐方式**: 打开根目录的 `project-hub.html` 导航中心
2. **命令行方式**: 使用 `project-launcher.js`
3. **Windows方式**: 双击 `start-projects.bat`

### 开发工作流
1. 新建项目 → 更新 `CLAUDE.md` → 更新 `project-hub.html` 导航数据
2. 定期清理 `node_modules` 中不用的依赖
3. 保持文档与实际项目同步

## 📂 项目结构

```
Code/
├── project-hub.html              # 🧭 项目导航中心（保留在根目录）
├── [项目文件夹]/                  # 📁 各个独立项目
│   ├── tarot-reading-website/
│   ├── answer-book-website/
│   ├── todo-app/
│   └── ...
└── dev-tools/                    # 🛠️ 开发工具（当前文件夹）
    ├── README.md                 # 本说明文件
    ├── CLAUDE.md                 # 项目开发文档
    ├── project-launcher.js       # 跨平台启动器
    ├── start-projects.bat        # Windows启动器
    └── node_modules/             # 依赖包
```

## 🔗 相关链接

- [项目导航中心](../project-hub.html) - 主导航页面
- [项目开发文档](CLAUDE.md) - 详细的开发指南

---

*最后更新: 2025-10-15*