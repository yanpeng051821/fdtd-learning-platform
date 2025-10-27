// 参数调优指南数据模块
export const parameterGuides = [
    {
        id: 1,
        title: "网格参数优化",
        icon: "fa-th",
        color: "blue",
        parameters: [
            {
                name: "mesh accuracy",
                description: "网格精度等级（1-8）",
                recommended: "4-6（平衡精度与速度）",
                tips: "关键区域可局部加密至7-8"
            },
            {
                name: "mesh refinement",
                description: "网格细化选项",
                recommended: "conformal variant 1",
                tips: "更好地拟合曲面边界"
            },
            {
                name: "dx/dy/dz",
                description: "网格步长",
                recommended: "λ/20 到 λ/30",
                tips: "金属结构需要更细的网格"
            },
            {
                name: "mesh override",
                description: "局部网格加密",
                recommended: "在纳米结构周围使用",
                tips: "override区域应略大于结构"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">最佳实践：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>先用粗网格（accuracy=2）快速测试，确认模型无误</li>
                <li>逐步提高网格精度，观察结果收敛性</li>
                <li>对于超表面单元，推荐mesh accuracy=5，加mesh override</li>
                <li>金属纳米结构表面至少需要5-10个网格点</li>
                <li>使用mesh order控制不同材料的网格优先级</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "仿真时间与收敛",
        icon: "fa-clock",
        color: "green",
        parameters: [
            {
                name: "simulation time",
                description: "仿真总时长",
                recommended: "1000-3000 fs",
                tips: "观察时域监视器判断是否收敛"
            },
            {
                name: "auto shutoff min",
                description: "自动停止阈值",
                recommended: "1e-4 到 1e-5",
                tips: "能量衰减到此值时自动停止"
            },
            {
                name: "dt stability factor",
                description: "时间步长稳定因子",
                recommended: "0.99（默认）",
                tips: "一般不需要修改"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">收敛判断：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>添加时域监视器，观察场强随时间衰减</li>
                <li>如果场强持续振荡不衰减，说明存在高Q谐振</li>
                <li>高Q结构需要更长的仿真时间（5000-10000 fs）</li>
                <li>使用auto shutoff可自动判断收敛，节省时间</li>
                <li>宽带仿真比单频仿真需要更长时间</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "边界条件选择",
        icon: "fa-border-all",
        color: "purple",
        parameters: [
            {
                name: "PML layers",
                description: "PML吸收层层数",
                recommended: "12-16层",
                tips: "斜入射或高折射率材料需要更多层"
            },
            {
                name: "PML profile",
                description: "PML吸收曲线",
                recommended: "standard（默认）",
                tips: "特殊情况可尝试stabilized或steep angle"
            },
            {
                name: "PML distance",
                description: "PML距结构距离",
                recommended: "> λ/2",
                tips: "近场强的结构需要更大距离"
            },
            {
                name: "Periodic/Bloch",
                description: "周期边界条件",
                recommended: "用于周期阵列",
                tips: "斜入射时必须使用Bloch边界"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">边界设置技巧：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>PML反射率默认1e-12，一般足够</li>
                <li>如果观察到边界反射，增加PML层数或距离</li>
                <li>周期边界的仿真区域必须等于单元周期</li>
                <li>对称边界可减少一半计算量，但要注意偏振匹配</li>
                <li>Metal边界适用于波导或腔体结构</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "光源参数设置",
        icon: "fa-sun",
        color: "yellow",
        parameters: [
            {
                name: "wavelength range",
                description: "波长范围",
                recommended: "根据研究需求",
                tips: "范围越宽，所需仿真时间越长"
            },
            {
                name: "source position",
                description: "光源位置",
                recommended: "距结构 > λ",
                tips: "避免光源与结构重叠"
            },
            {
                name: "injection axis",
                description: "注入方向",
                recommended: "垂直于结构主平面",
                tips: "斜入射需设置angle theta/phi"
            },
            {
                name: "polarization",
                description: "偏振方向",
                recommended: "根据研究需求",
                tips: "0°为X偏振，90°为Y偏振"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">光源优化建议：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>平面波适用于大部分超表面仿真</li>
                <li>TFSF源用于精确计算散射截面</li>
                <li>高斯光束用于聚焦系统仿真</li>
                <li>偶极子源用于研究自发辐射增强</li>
                <li>宽带仿真时，频率点数建议20-50个</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "材料参数设置",
        icon: "fa-layer-group",
        color: "red",
        parameters: [
            {
                name: "material database",
                description: "材料数据库",
                recommended: "使用内置数据库",
                tips: "金属材料优先选择实验数据"
            },
            {
                name: "fit tolerance",
                description: "材料拟合精度",
                recommended: "0.1（默认）",
                tips: "更小的值提高精度但增加计算量"
            },
            {
                name: "max coefficients",
                description: "拟合系数数量",
                recommended: "10-20",
                tips: "复杂色散需要更多系数"
            },
            {
                name: "custom material",
                description: "自定义材料",
                recommended: "导入实验数据",
                tips: "确保数据覆盖仿真波长范围"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">材料选择指南：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>金属：Au (Palik) 或 Ag (Johnson and Christy)</li>
                <li>高折射率介质：TiO2, Si, GaN</li>
                <li>低损耗介质：SiO2, Al2O3, Si3N4</li>
                <li>自定义材料时，注意Kramers-Kronig关系</li>
                <li>避免使用理想无损材料，会导致不收敛</li>
            </ul>
        `
    },
    {
        id: 6,
        title: "监视器优化",
        icon: "fa-desktop",
        color: "indigo",
        parameters: [
            {
                name: "monitor type",
                description: "监视器类型",
                recommended: "根据需求选择",
                tips: "2D监视器比3D节省存储空间"
            },
            {
                name: "spatial resolution",
                description: "空间分辨率",
                recommended: "与网格一致或略粗",
                tips: "过高分辨率浪费存储空间"
            },
            {
                name: "frequency points",
                description: "频率采样点数",
                recommended: "20-100个",
                tips: "根据光谱特征密度调整"
            },
            {
                name: "output power",
                description: "是否输出功率",
                recommended: "按需开启",
                tips: "减少不必要的数据输出"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">监视器使用技巧：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>频域监视器：用于观察场分布和计算透射率</li>
                <li>时域监视器：用于检查收敛性</li>
                <li>模式监视器：用于波导模式分析</li>
                <li>功率监视器位置要避开近场区域</li>
                <li>3D监视器数据量大，仅在必要时使用</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "计算资源优化",
        icon: "fa-server",
        color: "gray",
        parameters: [
            {
                name: "memory",
                description: "内存需求",
                recommended: "根据网格数估算",
                tips: "约为 Nx×Ny×Nz×200 bytes"
            },
            {
                name: "threads",
                description: "线程数",
                recommended: "CPU核心数",
                tips: "超线程效果不明显"
            },
            {
                name: "GPU acceleration",
                description: "GPU加速",
                recommended: "大规模仿真启用",
                tips: "需要CUDA兼容显卡"
            },
            {
                name: "checkpoint",
                description: "检查点保存",
                recommended: "长时间仿真启用",
                tips: "可从中断处恢复"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">性能优化策略：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>利用对称性减少仿真区域（可减少50-75%计算量）</li>
                <li>先用粗网格验证设计，再用细网格精确计算</li>
                <li>参数扫描时，使用脚本自动化批量运行</li>
                <li>大规模仿真考虑使用集群或云计算</li>
                <li>定期清理不需要的监视器数据，释放存储空间</li>
            </ul>
        `
    },
    {
        id: 8,
        title: "常见问题排查",
        icon: "fa-tools",
        color: "orange",
        parameters: [
            {
                name: "仿真不收敛",
                description: "场强持续振荡",
                recommended: "增加仿真时间或降低Q值",
                tips: "检查是否有理想无损材料"
            },
            {
                name: "结果异常",
                description: "透射率>1或为负",
                recommended: "检查监视器位置和方向",
                tips: "确保监视器在远场区域"
            },
            {
                name: "内存不足",
                description: "仿真无法启动",
                recommended: "减小仿真区域或降低网格精度",
                tips: "利用对称性减少计算量"
            },
            {
                name: "计算时间过长",
                description: "仿真运行缓慢",
                recommended: "优化网格和仿真区域",
                tips: "使用GPU加速或集群"
            }
        ],
        bestPractices: `
            <h4 class="font-bold mb-2">调试技巧：</h4>
            <ul class="list-disc ml-6 space-y-1">
                <li>使用时域监视器观察场的演化过程</li>
                <li>检查材料拟合质量（Material Explorer）</li>
                <li>验证网格是否正确覆盖结构（Mesh Visualizer）</li>
                <li>对比不同网格精度的结果，确认收敛</li>
                <li>查看Log文件，了解警告和错误信息</li>
            </ul>
        `
    }
];

// 快速参考表
export const quickReference = {
    title: "快速参考表",
    categories: [
        {
            name: "典型结构参数",
            items: [
                { structure: "金纳米盘", size: "50-200 nm", height: "20-50 nm", period: "N/A" },
                { structure: "超表面单元", size: "80-300 nm", height: "400-800 nm", period: "300-600 nm" },
                { structure: "纳米天线", size: "100-300 nm", height: "50-150 nm", period: "N/A" },
                { structure: "光栅", size: "200-500 nm", height: "100-300 nm", period: "400-800 nm" }
            ]
        },
        {
            name: "推荐网格设置",
            items: [
                { structure: "金属纳米结构", meshAccuracy: "5-6", override: "2-5 nm", tips: "表面至少5个网格点" },
                { structure: "介质超表面", meshAccuracy: "4-5", override: "10-20 nm", tips: "边缘加密" },
                { structure: "大尺寸结构", meshAccuracy: "3-4", override: "λ/20", tips: "关键区域局部加密" }
            ]
        },
        {
            name: "仿真时间估算",
            items: [
                { scenario: "单个纳米结构", time: "5-15分钟", gridSize: "100³", memory: "~1 GB" },
                { scenario: "超表面单元", time: "10-30分钟", gridSize: "50³", memory: "~0.5 GB" },
                { scenario: "超表面阵列(10×10)", time: "1-3小时", gridSize: "500³", memory: "~10 GB" },
                { scenario: "超透镜(完整)", time: "数小时-数天", gridSize: "1000³+", memory: ">32 GB" }
            ]
        }
    ]
};
