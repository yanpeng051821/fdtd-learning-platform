// 导入数据模块
import { tutorials } from './data/tutorials.js';
import { cases } from './data/cases.js';
import { parameterGuides, quickReference } from './data/parameters.js';
import { resources, learningPaths, externalLinks } from './data/resources.js';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

// 初始化页面
function initializePage() {
    renderTutorials();
    renderCases();
    renderParameterGuides();
    renderResources();
}

// 渲染教程列表
function renderTutorials() {
    const container = document.getElementById('tutorial-container');
    if (!container) return;

    tutorials.forEach(tutorial => {
        const card = createTutorialCard(tutorial);
        container.appendChild(card);
    });
}

// 创建教程卡片
function createTutorialCard(tutorial) {
    const card = document.createElement('div');
    card.className = 'tutorial-card';
    card.onclick = () => openTutorialModal(tutorial);

    const badgeClass = `badge-${tutorial.level}`;
    const levelText = {
        'beginner': '入门',
        'intermediate': '进阶',
        'advanced': '高级'
    }[tutorial.level];

    card.innerHTML = `
        <div class="tutorial-header">
            <div class="flex items-center space-x-3">
                <i class="fas ${tutorial.icon} text-2xl text-indigo-600"></i>
                <div>
                    <h4 class="text-lg font-bold text-gray-900">${tutorial.title}</h4>
                    <p class="text-sm text-gray-500">${tutorial.duration}</p>
                </div>
            </div>
            <span class="tutorial-badge ${badgeClass}">${levelText}</span>
        </div>
        <p class="text-gray-600 mb-3">${tutorial.description}</p>
        <div class="flex flex-wrap gap-2">
            ${tutorial.topics.map(topic => 
                `<span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">${topic}</span>`
            ).join('')}
        </div>
    `;

    return card;
}

// 渲染案例
function renderCases() {
    const container = document.getElementById('cases-container');
    if (!container) return;

    // 清空容器并设置为grid布局
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full';

    cases.forEach(caseItem => {
        const card = createCaseCard(caseItem);
        container.appendChild(card);
    });
}

// 创建案例卡片
function createCaseCard(caseItem) {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.onclick = () => openCaseModal(caseItem);

    card.innerHTML = `
        <div class="case-image flex items-center justify-center">
            <i class="fas fa-cube text-6xl text-white opacity-80"></i>
        </div>
        <div class="case-content">
            <h4 class="text-xl font-bold text-gray-900 mb-2">${caseItem.title}</h4>
            <p class="text-gray-600 mb-3">${caseItem.description}</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span><i class="fas fa-signal mr-1"></i>${caseItem.difficulty}</span>
                <span><i class="fas fa-clock mr-1"></i>${caseItem.time}</span>
            </div>
            <div class="case-tags">
                ${caseItem.tags.map(tag => 
                    `<span class="case-tag">${tag}</span>`
                ).join('')}
            </div>
        </div>
    `;

    return card;
}

// 渲染参数指南
function renderParameterGuides() {
    const container = document.getElementById('parameter-guide');
    if (!container) return;

    // 清空容器并设置为grid布局
    container.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-full';

    parameterGuides.forEach(guide => {
        const card = createParameterCard(guide);
        container.appendChild(card);
    });
}

// 创建参数卡片
function createParameterCard(guide) {
    const card = document.createElement('div');
    card.className = 'parameter-card';

    const colorClasses = {
        'blue': 'text-blue-600',
        'green': 'text-green-600',
        'purple': 'text-purple-600',
        'yellow': 'text-yellow-600',
        'red': 'text-red-600',
        'indigo': 'text-indigo-600',
        'gray': 'text-gray-600',
        'orange': 'text-orange-600'
    };

    card.innerHTML = `
        <div class="flex items-center mb-4">
            <i class="fas ${guide.icon} text-3xl ${colorClasses[guide.color]} mr-3"></i>
            <h4 class="text-xl font-bold text-gray-900">${guide.title}</h4>
        </div>
        <div class="space-y-3">
            ${guide.parameters.map(param => `
                <div class="parameter-item">
                    <div class="parameter-name">${param.name}</div>
                    <div class="text-gray-600 text-sm mb-1">${param.description}</div>
                    <div class="parameter-value">
                        <strong>推荐值：</strong>${param.recommended}
                    </div>
                    <div class="text-gray-500 text-xs mt-1">
                        <i class="fas fa-lightbulb mr-1"></i>${param.tips}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="mt-4 p-3 bg-blue-50 rounded-lg text-sm">
            ${guide.bestPractices}
        </div>
    `;

    return card;
}

// 渲染资源
function renderResources() {
    const container = document.getElementById('resources-container');
    if (!container) return;

    // 清空容器并设置为grid布局
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 col-span-full';

    resources.forEach(resource => {
        const card = createResourceCard(resource);
        container.appendChild(card);
    });
}

// 创建资源卡片
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.onclick = () => openResourceModal(resource);

    card.innerHTML = `
        <div class="resource-icon">
            <i class="fas ${resource.icon}"></i>
        </div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">${resource.title}</h4>
        <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded">${resource.type}</span>
            <span>${resource.size}</span>
        </div>
        <p class="text-gray-600 text-sm">${resource.description}</p>
    `;

    return card;
}

// 打开教程模态框
function openTutorialModal(tutorial) {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-3xl font-bold text-gray-900">${tutorial.title}</h2>
                <span class="tutorial-badge badge-${tutorial.level}">
                    ${{'beginner': '入门', 'intermediate': '进阶', 'advanced': '高级'}[tutorial.level]}
                </span>
            </div>
            <div class="flex items-center space-x-4 text-gray-600 mb-4">
                <span><i class="fas fa-clock mr-2"></i>${tutorial.duration}</span>
                <span><i class="fas ${tutorial.icon} mr-2"></i>${tutorial.description}</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
                ${tutorial.topics.map(topic => 
                    `<span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">${topic}</span>`
                ).join('')}
            </div>
        </div>
        <div class="prose max-w-none">
            ${tutorial.content}
        </div>
        <div class="mt-8 flex justify-end space-x-4">
            <button onclick="closeModal()" class="btn-secondary">关闭</button>
            <button class="btn-primary">
                <i class="fas fa-check mr-2"></i>标记为已完成
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// 打开案例模态框
function openCaseModal(caseItem) {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="mb-6">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">${caseItem.title}</h2>
            <div class="flex items-center space-x-4 text-gray-600 mb-4">
                <span><i class="fas fa-signal mr-2"></i>难度：${caseItem.difficulty}</span>
                <span><i class="fas fa-clock mr-2"></i>预计时间：${caseItem.time}</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
                ${caseItem.tags.map(tag => 
                    `<span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">${tag}</span>`
                ).join('')}
            </div>
            <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 class="font-bold text-lg mb-2"><i class="fas fa-bullseye mr-2"></i>学习目标</h3>
                <ul class="list-disc ml-6 space-y-1">
                    ${caseItem.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="prose max-w-none">
            ${caseItem.steps}
        </div>
        <div class="mt-8 flex justify-end space-x-4">
            <button onclick="closeModal()" class="btn-secondary">关闭</button>
            <button class="btn-primary">
                <i class="fas fa-download mr-2"></i>下载模板文件
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// 打开资源模态框
function openResourceModal(resource) {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="mb-6">
            <div class="flex items-center mb-4">
                <div class="resource-icon mr-4">
                    <i class="fas ${resource.icon}"></i>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-gray-900">${resource.title}</h2>
                    <div class="flex items-center space-x-4 text-gray-600 mt-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded">${resource.type}</span>
                        <span><i class="fas fa-hdd mr-2"></i>${resource.size}</span>
                    </div>
                </div>
            </div>
            <p class="text-gray-600 mb-6">${resource.description}</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 class="font-bold text-lg mb-4"><i class="fas fa-list mr-2"></i>包含内容</h3>
            <ul class="space-y-2">
                ${resource.items.map(item => `
                    <li class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-3"></i>
                        <span>${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <div class="mt-8 flex justify-end space-x-4">
            <button onclick="closeModal()" class="btn-secondary">关闭</button>
            <button class="btn-primary">
                <i class="fas fa-download mr-2"></i>下载资源
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// 关闭模态框
window.closeModal = function() {
    const modal = document.getElementById('tutorial-modal');
    modal.style.display = 'none';
};

// 滚动到指定区域
window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('tutorial-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// 导出函数供HTML使用
window.openTutorialModal = openTutorialModal;
window.openCaseModal = openCaseModal;
window.openResourceModal = openResourceModal;
