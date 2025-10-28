@echo off
chcp 65001 >nul
title 项目快速启动器

:main
cls
echo.
echo 🚀 项目快速启动器
echo ====================
echo.
echo 📱 应用类项目:
echo   1. 塔罗牌测算 - 在线塔罗牌测算平台
echo   2. 答案之书 - 神秘的答案之书互动应用
echo   3. 待办事项 - 简洁高效的待办事项管理工具
echo   4. 猫咪图片查看器 - 随机猫咪图片查看器
echo.
echo 🎮 游戏类项目:
echo   5. 黄金矿工 - 经典黄金矿工游戏
echo   6. 贪吃蛇 - 经典贪吃蛇游戏
echo.
echo 🎨 演示类项目:
echo   7. 响应式布局 - 响应式网页布局演示
echo   8. 夜间模式切换 - 夜间模式主题切换演示
echo   9. FAQ列表 - 可展开收起的常见问题列表
echo   10. React个人名片 - React个人名片展示
echo   11. React计数器 - React计数器组件演示
echo   12. React+TS应用 - React+TypeScript应用
echo.
echo 🛠️ 工具类项目:
echo   13. 中文名字生成器 - 中文名字生成工具
echo   14. 问候语生成器 - 个性化问候语生成工具
echo.
echo ⚡ 快捷操作:
echo   n - 打开项目导航中心
echo   a - 启动所有应用类项目
echo   g - 启动所有游戏类项目
echo   d - 启动所有演示类项目
echo   t - 启动所有工具类项目
echo   all - 启动所有项目
echo   q - 退出
echo.
set /p choice=请选择要启动的项目或操作 (1-14, n, a, g, d, t, all, q):

if "%choice%"=="1" (
    echo 🚀 启动塔罗牌测算...
    start "" "..\tarot-reading-website\tarot-reading.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="2" (
    echo 🚀 启动答案之书...
    start "" "..\answer-book-website\answer-book.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="3" (
    echo 🚀 启动待办事项...
    start "" "..\todo-app\todo-app.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="4" (
    echo 🚀 启动猫咪图片查看器...
    start "" "..\cat-viewer-app\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="5" (
    echo 🚀 启动黄金矿工...
    start "" "..\gold-miner-game\gold-miner-game.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="6" (
    echo 🚀 启动贪吃蛇...
    start "" "..\snake-game\snake-game.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="7" (
    echo 🚀 启动响应式布局演示...
    start "" "..\responsive-layout-demo\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="8" (
    echo 🚀 启动夜间模式切换演示...
    start "" "..\dark-mode-toggle-demo\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="9" (
    echo 🚀 启动FAQ列表演示...
    start "" "..\faq-list-demo\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="10" (
    echo 🚀 启动React个人名片...
    start "" "..\personal-card-react\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="11" (
    echo 🚀 启动React计数器...
    start "" "..\react-counter-demo\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="12" (
    echo 🚀 启动React+TS应用...
    start "" "..\react-ts-app\index.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="13" (
    echo 🚀 启动中文名字生成器...
    start "" "..\chinese-name-generator\chinese-name-generator.html"
    timeout /t 2 >nul
    goto main
)
if "%choice%"=="14" (
    echo 🚀 启动问候语生成器...
    start "" "..\greeting-app\index.html"
    timeout /t 2 >nul
    goto main
)

if /i "%choice%"=="n" (
    echo 🧭 打开项目导航中心...
    start "" "..\project-hub.html"
    timeout /t 2 >nul
    goto main
)

if /i "%choice%"=="a" (
    echo 🚀 启动所有应用类项目...
    start "" "..\tarot-reading-website\tarot-reading.html"
    timeout /t 1 >nul
    start "" "..\answer-book-website\answer-book.html"
    timeout /t 1 >nul
    start "" "..\todo-app\todo-app.html"
    timeout /t 1 >nul
    start "" "..\cat-viewer-app\index.html"
    echo ✅ 所有应用类项目已启动
    timeout /t 3 >nul
    goto main
)

if /i "%choice%"=="g" (
    echo 🚀 启动所有游戏类项目...
    start "" "..\gold-miner-game\gold-miner-game.html"
    timeout /t 1 >nul
    start "" "..\snake-game\snake-game.html"
    echo ✅ 所有游戏类项目已启动
    timeout /t 3 >nul
    goto main
)

if /i "%choice%"=="d" (
    echo 🚀 启动所有演示类项目...
    start "" "..\responsive-layout-demo\index.html"
    timeout /t 1 >nul
    start "" "..\dark-mode-toggle-demo\index.html"
    timeout /t 1 >nul
    start "" "..\faq-list-demo\index.html"
    timeout /t 1 >nul
    start "" "..\personal-card-react\index.html"
    timeout /t 1 >nul
    start "" "..\react-counter-demo\index.html"
    timeout /t 1 >nul
    start "" "..\react-ts-app\index.html"
    echo ✅ 所有演示类项目已启动
    timeout /t 3 >nul
    goto main
)

if /i "%choice%"=="t" (
    echo 🚀 启动所有工具类项目...
    start "" "..\chinese-name-generator\chinese-name-generator.html"
    timeout /t 1 >nul
    start "" "..\greeting-app\index.html"
    echo ✅ 所有工具类项目已启动
    timeout /t 3 >nul
    goto main
)

if /i "%choice%"=="all" (
    echo ⚠️  警告: 将启动所有项目，这可能需要一些时间...
    echo 按任意键继续，或按 Ctrl+C 取消
    pause >nul
    echo 🚀 启动所有项目...

    REM 启动所有项目
    start "" "..\project-hub.html"
    timeout /t 1 >nul
    start "" "..\tarot-reading-website\tarot-reading.html"
    timeout /t 1 >nul
    start "" "..\answer-book-website\answer-book.html"
    timeout /t 1 >nul
    start "" "..\todo-app\todo-app.html"
    timeout /t 1 >nul
    start "" "..\cat-viewer-app\index.html"
    timeout /t 1 >nul
    start "" "..\gold-miner-game\gold-miner-game.html"
    timeout /t 1 >nul
    start "" "..\snake-game\snake-game.html"
    timeout /t 1 >nul
    start "" "..\responsive-layout-demo\index.html"
    timeout /t 1 >nul
    start "" "..\dark-mode-toggle-demo\index.html"
    timeout /t 1 >nul
    start "" "..\faq-list-demo\index.html"
    timeout /t 1 >nul
    start "" "..\personal-card-react\index.html"
    timeout /t 1 >nul
    start "" "..\react-counter-demo\index.html"
    timeout /t 1 >nul
    start "" "..\react-ts-app\index.html"
    timeout /t 1 >nul
    start "" "..\chinese-name-generator\chinese-name-generator.html"
    timeout /t 1 >nul
    start "" "..\greeting-app\index.html"

    echo ✅ 所有项目已启动
    timeout /t 3 >nul
    goto main
)

if /i "%choice%"=="q" (
    echo 👋 再见!
    timeout /t 1 >nul
    exit
)

echo ❌ 无效选择，请重新输入
timeout /t 2 >nul
goto main