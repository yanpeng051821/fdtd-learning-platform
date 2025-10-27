// 学习资源数据模块
export const resources = [
    {
        id: 1,
        title: "FDTD理论基础",
        icon: "fa-book",
        type: "文档",
        size: "2.5 MB",
        description: "FDTD方法的数学原理、Yee网格、稳定性分析",
        items: [
            "麦克斯韦方程组离散化",
            "Yee网格详解",
            "CFL稳定性条件",
            "数值色散分析",
            "吸收边界条件理论"
        ]
    },
    {
        id: 2,
        title: "Lumerical官方教程",
        icon: "fa-graduation-cap",
        type: "视频",
        size: "1.2 GB",
        description: "官方提供的软件操作视频教程和示例文件",
        items: [
            "软件界面介绍",
            "基础建模教程",
            "脚本编程入门",
            "高级功能讲解",
            "案例分析"
        ]
    },
    {
        id: 3,
        title: "超表面设计手册",
        icon: "fa-file-pdf",
        type: "PDF",
        size: "8.3 MB",
        description: "超表面设计原理、相位调控方法、应用案例",
        items: [
            "超表面基本概念",
            "相位调控原理",
            "单元结构设计",
            "全息超表面",
            "超透镜设计",
            "偏振调控"
        ]
    },
    {
        id: 4,
        title: "材料数据库",
        icon: "fa-database",
        type: "数据",
        size: "15 MB",
        description: "常用光学材料的折射率数据库",
        items: [
            "金属材料（Au, Ag, Al, Cu等）",
            "介质材料（SiO2, TiO2, Si3N4等）",
            "半导体材料（Si, GaAs, GaN等）",
            "2D材料（石墨烯、MoS2等）",
            "自定义材料导入模板"
        ]
    },
    {
        id: 5,
        title: "脚本代码库",
        icon: "fa-code",
        type: "代码",
        size: "5 MB",
        description: "常用的Lumerical脚本和Python后处理代码",
        items: [
            "参数扫描自动化脚本",
            "数据提取与可视化",
            "相位库生成脚本",
            "GS算法全息优化",
            "批量仿真管理",
            "结果分析工具"
        ]
    },
    {
        id: 6,
        title: "经典论文合集",
        icon: "fa-newspaper",
        type: "论文",
        size: "120 MB",
        description: "超表面领域的重要文献和综述",
        items: [
            "超表面综述论文",
            "相位调控经典论文",
            "超透镜里程碑工作",
            "全息超表面",
            "偏振调控",
            "动态超表面",
            "非线性超表面"
        ]
    },
    {
        id: 7,
        title: "仿真模板库",
        icon: "fa-folder-open",
        type: "模板",
        size: "50 MB",
        description: "预设的仿真模板文件，可直接修改使用",
        items: [
            "金纳米结构模板",
            "超表面单元模板",
            "超透镜设计模板",
            "偏振转换器模板",
            "全息超表面模板",
            "光学涡旋发生器模板"
        ]
    },
    {
        id: 8,
        title: "在线工具集",
        icon: "fa-tools",
        type: "工具",
        size: "在线",
        description: "实用的在线计算和设计工具",
        items: [
            "相位分布计算器",
            "网格参数估算器",
            "材料色散拟合工具",
            "傅里叶光学计算器",
            "单位转换工具",
            "光学常数查询"
        ]
    },
    {
        id: 9,
        title: "常见问题FAQ",
        icon: "fa-question-circle",
        type: "文档",
        size: "1 MB",
        description: "常见问题解答和故障排除指南",
        items: [
            "安装与配置问题",
            "仿真不收敛怎么办",
            "内存不足解决方案",
            "结果异常排查",
            "性能优化技巧",
            "许可证问题"
        ]
    },
    {
        id: 10,
        title: "社区与论坛",
        icon: "fa-users",
        type: "链接",
        size: "在线",
        description: "FDTD和超表面研究社区资源",
        items: [
            "Lumerical官方论坛",
            "超表面研究QQ群",
            "学术交流微信群",
            "GitHub代码仓库",
            "知乎专栏",
            "B站教学视频"
        ]
    },
    {
        id: 11,
        title: "实验验证指南",
        icon: "fa-flask",
        type: "文档",
        size: "3 MB",
        description: "从仿真到实验制备的完整流程",
        items: [
            "纳米加工工艺介绍",
            "电子束光刻（EBL）",
            "聚焦离子束（FIB）",
            "光学测试方法",
            "仿真与实验对比",
            "误差分析"
        ]
    },
    {
        id: 12,
        title: "进阶专题",
        icon: "fa-rocket",
        type: "课程",
        size: "视频",
        description: "高级主题和前沿研究方向",
        items: [
            "拓扑光子学",
            "非线性超表面",
            "量子超表面",
            "动态可调超表面",
            "机器学习辅助设计",
            "逆向设计方法"
        ]
    }
];

// 推荐学习路径
export const learningPaths = [
    {
        phase: "入门阶段（1-2周）",
        resources: [1, 2, 9],
        goals: [
            "理解FDTD基本原理",
            "熟悉软件界面操作",
            "完成简单结构仿真"
        ]
    },
    {
        phase: "进阶阶段（2-4周）",
        resources: [3, 4, 5, 7],
        goals: [
            "掌握超表面设计方法",
            "学会参数扫描优化",
            "建立相位库"
        ]
    },
    {
        phase: "高级阶段（1-2月）",
        resources: [6, 8, 11, 12],
        goals: [
            "完成复杂超表面设计",
            "阅读经典文献",
            "准备实验验证"
        ]
    }
];

// 外部链接资源
export const externalLinks = [
    {
        category: "官方资源",
        links: [
            { name: "Lumerical官网", url: "https://www.lumerical.com", description: "软件下载、文档、支持" },
            { name: "Lumerical知识库", url: "https://support.lumerical.com", description: "官方教程和示例" },
            { name: "Ansys Learning Hub", url: "https://courses.ansys.com", description: "在线课程" }
        ]
    },
    {
        category: "学术资源",
        links: [
            { name: "arXiv光学分类", url: "https://arxiv.org/list/physics.optics/recent", description: "最新预印本论文" },
            { name: "Nature Photonics", url: "https://www.nature.com/nphoton/", description: "顶级光学期刊" },
            { name: "ACS Photonics", url: "https://pubs.acs.org/journal/apchd5", description: "光子学期刊" }
        ]
    },
    {
        category: "开源工具",
        links: [
            { name: "MEEP", url: "https://meep.readthedocs.io", description: "开源FDTD软件" },
            { name: "Reticolo", url: "https://www.lp2n.institutoptique.fr/Membres-Services/Responsables-d-equipe/LALANNE-Philippe", description: "RCWA方法" },
            { name: "PyMieScatt", url: "https://pymiescatt.readthedocs.io", description: "Mie散射计算" }
        ]
    },
    {
        category: "数据库",
        links: [
            { name: "RefractiveIndex.INFO", url: "https://refractiveindex.info", description: "材料折射率数据库" },
            { name: "NIST数据库", url: "https://www.nist.gov/pml/productsservices/physical-reference-data", description: "物理参考数据" },
            { name: "Filmetrics", url: "https://www.filmetrics.com/refractive-index-database", description: "薄膜材料数据" }
        ]
    }
];
