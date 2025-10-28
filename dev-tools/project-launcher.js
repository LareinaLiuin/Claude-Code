#!/usr/bin/env node

/**
 * 项目快速启动器
 * 用于快速启动不同类型的项目
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// 项目配置
const projects = {
    // 应用类项目
    apps: [
        { name: '塔罗牌测算', path: '../tarot-reading-website/tarot-reading.html', description: '在线塔罗牌测算平台' },
        { name: '答案之书', path: '../answer-book-website/answer-book.html', description: '神秘的答案之书互动应用' },
        { name: '待办事项', path: '../todo-app/todo-app.html', description: '简洁高效的待办事项管理工具' },
        { name: '猫咪图片查看器', path: '../cat-viewer-app/index.html', description: '随机猫咪图片查看器' },
    ],

    // 游戏类项目
    games: [
        { name: '黄金矿工', path: '../gold-miner-game/gold-miner-game.html', description: '经典黄金矿工游戏' },
        { name: '贪吃蛇', path: '../snake-game/snake-game.html', description: '经典贪吃蛇游戏' },
    ],

    // 演示类项目
    demos: [
        { name: '响应式布局', path: '../responsive-layout-demo/index.html', description: '响应式网页布局演示' },
        { name: '夜间模式切换', path: '../dark-mode-toggle-demo/index.html', description: '夜间模式主题切换演示' },
        { name: 'FAQ列表', path: '../faq-list-demo/index.html', description: '可展开收起的常见问题列表' },
        { name: 'React个人名片', path: '../personal-card-react/index.html', description: 'React个人名片展示' },
        { name: 'React计数器', path: '../react-counter-demo/index.html', description: 'React计数器组件演示' },
        { name: 'React+TS应用', path: '../react-ts-app/index.html', description: 'React+TypeScript应用' },
    ],

    // 工具类项目
    tools: [
        { name: '中文名字生成器', path: '../chinese-name-generator/chinese-name-generator.html', description: '中文名字生成工具' },
        { name: '问候语生成器', path: '../greeting-app/index.html', description: '个性化问候语生成工具' },
    ]
};

/**
 * 打开URL或文件
 */
function openUrl(url) {
    const platform = process.platform;

    let command;
    switch (platform) {
        case 'darwin':  // macOS
            command = `open "${url}"`;
            break;
        case 'win32':   // Windows
            command = `start "" "${url}"`;
            break;
        default:        // Linux
            command = `xdg-open "${url}"`;
            break;
    }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`启动失败: ${error.message}`);
            return;
        }
        console.log(`✅ 已打开: ${url}`);
    });
}

/**
 * 显示菜单
 */
function showMenu() {
    console.log('\n🚀 项目快速启动器');
    console.log('====================\n');

    console.log('📱 应用类项目 (apps):');
    projects.apps.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.name} - ${project.description}`);
    });

    console.log('\n🎮 游戏类项目 (games):');
    projects.games.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.name} - ${project.description}`);
    });

    console.log('\n🎨 演示类项目 (demos):');
    projects.demos.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.name} - ${project.description}`);
    });

    console.log('\n🛠️ 工具类项目 (tools):');
    projects.tools.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.name} - ${project.description}`);
    });

    console.log('\n⚡ 快捷操作:');
    console.log('  n - 打开项目导航中心');
    console.log('  a - 启动所有应用类项目');
    console.log('  g - 启动所有游戏类项目');
    console.log('  d - 启动所有演示类项目');
    console.log('  t - 启动所有工具类项目');
    console.log('  all - 启动所有项目 (慎用!)');
    console.log('  q - 退出');

    console.log('\n使用方法:');
    console.log('  node project-launcher.js [分类/编号]');
    console.log('  例如: node project-launcher.js apps 1 (启动第1个应用)');
    console.log('  例如: node project-launcher.js n (打开导航中心)');
}

/**
 * 启动指定分类的项目
 */
function launchCategory(category) {
    const categoryProjects = projects[category];
    if (!categoryProjects) {
        console.log(`❌ 未找到分类: ${category}`);
        return;
    }

    console.log(`\n🚀 启动 ${category} 分类项目...`);
    categoryProjects.forEach((project, index) => {
        setTimeout(() => {
            console.log(`${index + 1}. 启动 ${project.name}...`);
            openUrl(project.path);
        }, index * 1000); // 每隔1秒启动一个项目
    });
}

/**
 * 启动所有项目
 */
function launchAll() {
    console.log('\n⚠️  警告: 将启动所有项目，这可能需要一些时间...');
    console.log('按 Ctrl+C 取消操作');

    setTimeout(() => {
        let delay = 0;
        Object.keys(projects).forEach(category => {
            projects[category].forEach(project => {
                setTimeout(() => {
                    console.log(`启动 ${project.name}...`);
                    openUrl(project.path);
                }, delay);
                delay += 1000;
            });
        });
    }, 3000);
}

/**
 * 主函数
 */
function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        showMenu();
        return;
    }

    const command = args[0].toLowerCase();

    switch (command) {
        case 'n':
            console.log('🧭 打开项目导航中心...');
            openUrl('../project-hub.html');
            break;

        case 'a':
        case 'apps':
            launchCategory('apps');
            break;

        case 'g':
        case 'games':
            launchCategory('games');
            break;

        case 'd':
        case 'demos':
            launchCategory('demos');
            break;

        case 't':
        case 'tools':
            launchCategory('tools');
            break;

        case 'all':
            launchAll();
            break;

        case 'q':
        case 'quit':
        case 'exit':
            console.log('👋 再见!');
            process.exit(0);
            break;

        default:
            // 尝试解析为数字编号
            const projectNumber = parseInt(command);
            if (!isNaN(projectNumber)) {
                // 第二个参数为分类
                const category = args[1] ? args[1].toLowerCase() : 'apps';
                const categoryProjects = projects[category];

                if (categoryProjects && projectNumber > 0 && projectNumber <= categoryProjects.length) {
                    const project = categoryProjects[projectNumber - 1];
                    console.log(`🚀 启动 ${project.name}...`);
                    openUrl(project.path);
                } else {
                    console.log(`❌ 无效的项目编号: ${projectNumber}`);
                }
            } else {
                console.log(`❌ 未知命令: ${command}`);
                showMenu();
            }
            break;
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = {
    projects,
    openUrl,
    launchCategory,
    launchAll
};