// 教程数据模块
export const tutorials = [
    {
        id: 1,
        title: "第1课：FDTD基础理论与原理",
        level: "beginner",
        duration: "2小时",
        icon: "fa-book",
        description: "理解FDTD方法的基本原理、麦克斯韦方程组的离散化、Yee网格结构",
        topics: ["麦克斯韦方程组", "Yee网格", "时间步进", "稳定性条件"],
        content: `
            <h2 class="text-3xl font-bold mb-6">FDTD基础理论</h2>
            
            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>学习目标：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>理解FDTD方法的物理意义</li>
                    <li>掌握Yee网格的空间离散化</li>
                    <li>了解时间步进算法</li>
                    <li>理解稳定性条件（CFL条件）</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">1. 什么是FDTD？</h3>
            <p class="mb-4">FDTD（Finite-Difference Time-Domain，时域有限差分）是一种直接在时域中求解麦克斯韦方程组的数值计算方法。它通过将连续的时间和空间离散化，将微分方程转化为差分方程进行求解。</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. 麦克斯韦方程组</h3>
            <p class="mb-4">FDTD方法求解的核心是麦克斯韦旋度方程：</p>
            <div class="code-block">
∂H/∂t = -(1/μ) × ∇×E
∂E/∂t = (1/ε) × ∇×H - (σ/ε)E
            </div>
            <p class="mb-4">其中：E为电场强度，H为磁场强度，ε为介电常数，μ为磁导率，σ为电导率</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. Yee网格结构</h3>
            <p class="mb-4">Yee网格是FDTD的核心创新，它将电场和磁场分量交错排列在空间网格中：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>电场分量（Ex, Ey, Ez）</strong>：位于立方体边的中点</li>
                <li><strong>磁场分量（Hx, Hy, Hz）</strong>：位于立方体面的中心</li>
                <li><strong>优势</strong>：自然满足法拉第定律和安培定律的积分形式</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. 时间步进算法</h3>
            <p class="mb-4">FDTD采用蛙跳式（Leapfrog）时间步进：</p>
            <ol class="list-decimal ml-6 mb-4">
                <li>在时刻 n·Δt 计算磁场 H</li>
                <li>在时刻 (n+0.5)·Δt 计算电场 E</li>
                <li>在时刻 (n+1)·Δt 计算磁场 H</li>
                <li>循环往复...</li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 稳定性条件（CFL条件）</h3>
            <p class="mb-4">为保证数值稳定性，时间步长Δt必须满足Courant-Friedrichs-Lewy条件：</p>
            <div class="code-block">
Δt ≤ 1 / (c × √(1/Δx² + 1/Δy² + 1/Δz²))
            </div>
            <p class="mb-4">其中c为光速，Δx、Δy、Δz为空间步长</p>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>重要提示：</strong>
                <p class="mt-2">违反CFL条件会导致仿真结果发散！Lumerical FDTD会自动计算合适的时间步长。</p>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">6. 实践练习</h3>
            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>动手练习：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>计算：如果网格尺寸为10nm，光速为3×10⁸ m/s，最大时间步长是多少？</li>
                    <li>思考：为什么Yee网格要将E和H分量交错排列？</li>
                    <li>绘制：画出一个Yee网格单元，标注E和H分量的位置</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "第2课：Lumerical FDTD软件界面与基本操作",
        level: "beginner",
        duration: "3小时",
        icon: "fa-desktop",
        description: "熟悉软件界面、学习基本建模操作、掌握仿真区域设置",
        topics: ["界面布局", "对象创建", "材料设置", "仿真区域"],
        content: `
            <h2 class="text-3xl font-bold mb-6">Lumerical FDTD软件入门</h2>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">1. 软件界面布局</h3>
            <p class="mb-4">Lumerical FDTD主要包含以下几个区域：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>对象树（Objects Tree）</strong>：左侧，显示所有仿真对象</li>
                <li><strong>3D视图窗口</strong>：中央，显示模型的三维视图</li>
                <li><strong>属性面板</strong>：右侧，编辑选中对象的参数</li>
                <li><strong>脚本窗口</strong>：底部，执行脚本命令</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. 创建第一个仿真项目</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>启动软件</strong>
                    <p>打开Lumerical FDTD Solutions</p>
                </li>
                <li class="step-item">
                    <strong>添加FDTD仿真区域</strong>
                    <p>点击菜单：Simulation → FDTD</p>
                    <p>在属性面板设置：</p>
                    <div class="code-block">
x span = 2 μm
y span = 2 μm  
z span = 2 μm
simulation time = 1000 fs
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加光源</strong>
                    <p>点击菜单：Sources → Plane Wave</p>
                    <p>设置参数：</p>
                    <div class="code-block">
wavelength start = 400 nm
wavelength stop = 800 nm
direction = Forward (Z轴正向)
injection axis = Z
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加结构</strong>
                    <p>点击菜单：Structures → Rectangle</p>
                    <p>设置参数：</p>
                    <div class="code-block">
x span = 500 nm
y span = 500 nm
z span = 100 nm
material = Au (Gold)
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加监视器</strong>
                    <p>点击菜单：Monitors → Frequency-domain field and power</p>
                    <p>设置参数：</p>
                    <div class="code-block">
monitor type = 2D Z-normal
x span = 3 μm
y span = 3 μm
z = 0 nm (与结构同一平面)
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. 材料设置</h3>
            <p class="mb-4">Lumerical提供了丰富的材料库：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>金属材料</strong>：Au, Ag, Al, Cu等（使用实验数据）</li>
                <li><strong>介质材料</strong>：SiO2, Si3N4, TiO2等</li>
                <li><strong>自定义材料</strong>：可以导入折射率数据或使用模型拟合</li>
            </ul>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>材料选择技巧：</strong>
                <p class="mt-2">对于超表面设计，常用材料组合：</p>
                <ul class="list-disc ml-6 mt-2">
                    <li>金属层：Au或Ag（高反射率）</li>
                    <li>介质层：SiO2或Al2O3（低损耗）</li>
                    <li>纳米结构：Si或TiO2（高折射率）</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. 网格设置</h3>
            <p class="mb-4">网格精度直接影响仿真准确性和计算时间：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>自动网格</strong>：软件根据结构自动生成（推荐初学者）</li>
                <li><strong>手动网格</strong>：在关键区域添加mesh override</li>
                <li><strong>网格精度</strong>：一般设置为最小特征尺寸的1/10到1/20</li>
            </ul>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>注意事项：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>网格过粗会导致结果不准确</li>
                    <li>网格过细会大幅增加计算时间和内存消耗</li>
                    <li>建议先用粗网格快速测试，再用细网格精确计算</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 运行仿真</h3>
            <ol class="list-decimal ml-6 mb-4">
                <li>点击工具栏的"Run"按钮或按F5</li>
                <li>观察仿真进度条和时间步数</li>
                <li>等待仿真完成（显示"Simulation completed successfully"）</li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">6. 查看结果</h3>
            <p class="mb-4">双击监视器对象，可以查看：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>电场分布</strong>：E, |E|², Ex, Ey, Ez</li>
                <li><strong>磁场分布</strong>：H, |H|², Hx, Hy, Hz</li>
                <li><strong>透射/反射谱</strong>：T, R随波长的变化</li>
            </ul>

            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>实践任务：</strong>
                <p class="mt-2">按照上述步骤，创建一个简单的金纳米盘结构，运行仿真并观察其共振模式。</p>
            </div>
        `
    },
    {
        id: 3,
        title: "第3课：超表面单元结构设计基础",
        level: "intermediate",
        duration: "4小时",
        icon: "fa-cube",
        description: "学习超表面单元的设计原理、相位调控方法、周期边界条件",
        topics: ["单元设计", "相位调控", "周期边界", "参数扫描"],
        content: `
            <h2 class="text-3xl font-bold mb-6">超表面单元结构设计</h2>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">1. 超表面基本概念</h3>
            <p class="mb-4">超表面是一种亚波长厚度的人工电磁表面，通过设计单元结构实现对光的相位、振幅、偏振的调控。</p>
            
            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>核心原理：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li><strong>相位调控</strong>：通过改变单元几何参数实现0-2π相位覆盖</li>
                    <li><strong>振幅调控</strong>：控制透射或反射效率</li>
                    <li><strong>偏振调控</strong>：实现偏振转换或分束</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. 典型单元结构类型</h3>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>纳米柱（Nanopillar）</strong>：最常用，通过改变直径或高度调相位</li>
                <li><strong>纳米孔（Nanohole）</strong>：在金属膜上打孔</li>
                <li><strong>V型天线（V-antenna）</strong>：用于偏振转换</li>
                <li><strong>十字结构（Cross）</strong>：各向异性响应</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. 设计透射型超表面单元</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>确定工作波长和材料</strong>
                    <div class="code-block">
工作波长：λ = 633 nm（红光）
基底材料：SiO2（折射率 n≈1.46）
纳米柱材料：TiO2（折射率 n≈2.4）
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置周期边界条件</strong>
                    <p>在FDTD仿真区域设置：</p>
                    <div class="code-block">
x boundary: Periodic
y boundary: Periodic
z boundary: PML (完美匹配层)
                    </div>
                    <p class="mt-2">周期大小P一般设置为：P = λ/2 到 λ</p>
                </li>
                <li class="step-item">
                    <strong>创建单元结构</strong>
                    <p>添加圆柱体（Cylinder）：</p>
                    <div class="code-block">
radius = 80 nm（变量，用于扫描）
height = 600 nm
material = TiO2
z center = 300 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加基底</strong>
                    <p>添加矩形（Rectangle）：</p>
                    <div class="code-block">
x span = P
y span = P
z span = 500 nm
material = SiO2
z center = -250 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置平面波光源</strong>
                    <div class="code-block">
wavelength = 633 nm
direction = Forward (Z+)
injection axis = Z
z position = -1000 nm（在结构下方）
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加透射监视器</strong>
                    <div class="code-block">
monitor type = 2D Z-normal
z position = 1000 nm（在结构上方）
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. 参数扫描获取相位库</h3>
            <p class="mb-4">使用Parameter Sweep功能扫描纳米柱半径：</p>
            <div class="code-block">
# 在脚本窗口输入：
radius_values = linspace(40, 120, 9);  # 9个半径值
for(i=1:length(radius_values)) {
    switchtolayout;
    select("nanopillar");
    set("radius", radius_values(i)*1e-9);
    save("sweep_" + num2str(i) + ".fsp");
    run;
}
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 提取相位和透射率</h3>
            <p class="mb-4">运行完成后，提取每个半径对应的相位和透射率：</p>
            <div class="code-block">
T = transmission("monitor");  # 透射率
phase = angle(T);  # 相位（弧度）
            </div>

            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>实践目标：</strong>
                <p class="mt-2">完成参数扫描后，绘制相位-半径曲线和透射率-半径曲线，选择8个单元实现0到2π的相位覆盖，且透射率>80%。</p>
            </div>
        `
    },
    {
        id: 4,
        title: "第4课：边界条件与吸收层设置",
        level: "intermediate",
        duration: "2.5小时",
        icon: "fa-border-style",
        description: "深入理解PML、周期边界、对称边界等不同边界条件的应用场景",
        topics: ["PML吸收层", "周期边界", "对称边界", "边界选择"],
        content: `
            <h2 class="text-3xl font-bold mb-6">边界条件详解</h2>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">1. 边界条件类型</h3>
            <p class="mb-4">FDTD仿真中常用的边界条件：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>PML（完美匹配层）</strong>：吸收出射波，模拟无限空间</li>
                <li><strong>Periodic（周期边界）</strong>：模拟周期性结构</li>
                <li><strong>Symmetric/Anti-Symmetric（对称边界）</strong>：利用对称性减少计算量</li>
                <li><strong>Metal（金属边界）</strong>：完美电导体边界</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. PML吸收层详解</h3>
            <p class="mb-4">PML是最常用的边界条件，用于吸收出射电磁波：</p>
            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>PML参数设置：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li><strong>层数（layers）</strong>：默认12层，一般足够</li>
                    <li><strong>理论反射率</strong>：默认1e-12，表示反射极小</li>
                    <li><strong>距离结构</strong>：至少λ/2以上，避免近场干扰</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. 周期边界条件</h3>
            <p class="mb-4">用于模拟无限周期阵列，如超表面、光栅等：</p>
            <div class="code-block">
# 设置周期边界
x boundary: Periodic
y boundary: Periodic
z boundary: PML

# 注意事项：
1. 仿真区域大小必须等于单元周期
2. 光源必须使用Bloch边界条件（斜入射时）
3. 监视器位置要避开边界
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. 对称边界条件</h3>
            <p class="mb-4">当结构具有对称性时，可以只仿真1/2或1/4区域：</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Symmetric</strong>：电场平行于边界（偶对称）</li>
                <li><strong>Anti-Symmetric</strong>：电场垂直于边界（奇对称）</li>
            </ul>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>对称边界使用条件：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>结构必须完全对称</li>
                    <li>光源和监视器也必须对称放置</li>
                    <li>不同偏振需要选择不同的对称类型</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 边界条件选择指南</h3>
            <table class="w-full border-collapse border border-gray-300 mt-4">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 p-2">应用场景</th>
                        <th class="border border-gray-300 p-2">推荐边界</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2">单个纳米结构</td>
                        <td class="border border-gray-300 p-2">全部使用PML</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">超表面单元</td>
                        <td class="border border-gray-300 p-2">XY周期，Z方向PML</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">光波导</td>
                        <td class="border border-gray-300 p-2">传播方向PML，其他方向PML或Metal</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">对称结构</td>
                        <td class="border border-gray-300 p-2">对称面用Symmetric，其他用PML</td>
                    </tr>
                </tbody>
            </table>

            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>实践练习：</strong>
                <p class="mt-2">设计一个圆形纳米盘，分别使用：1) 全PML边界；2) 利用对称性只仿真1/4区域。对比计算时间和结果。</p>
            </div>
        `
    },
    {
        id: 5,
        title: "第5课：光源设置与激发方式",
        level: "intermediate",
        duration: "3小时",
        icon: "fa-lightbulb",
        description: "掌握平面波、高斯光束、偶极子等不同光源的设置方法",
        topics: ["平面波", "高斯光束", "偶极子源", "TFSF源"],
        content: `
            <h2 class="text-3xl font-bold mb-6">光源设置详解</h2>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">1. 平面波光源（Plane Wave）</h3>
            <p class="mb-4">最常用的光源类型，模拟均匀照明：</p>
            <div class="code-block">
# 基本参数
wavelength start = 400 nm
wavelength stop = 800 nm
direction = Forward/Backward
injection axis = X/Y/Z
angle theta = 0°  # 极角
angle phi = 0°    # 方位角
polarization angle = 0°  # 偏振角
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. 高斯光束（Gaussian Beam）</h3>
            <p class="mb-4">模拟聚焦光束，适用于高数值孔径系统：</p>
            <div class="code-block">
# 高斯光束参数
waist radius w0 = 500 nm  # 束腰半径
distance from waist = 0   # 距离束腰位置
beam parameters = Waist size and position
            </div>
            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>应用场景：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>显微镜物镜聚焦</li>
                    <li>光纤耦合</li>
                    <li>激光加工仿真</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. 偶极子光源（Dipole）</h3>
            <p class="mb-4">模拟点光源，如量子点、荧光分子：</p>
            <div class="code-block">
# 偶极子参数
dipole type = Electric/Magnetic
theta = 0°  # 偶极子方向
phi = 0°
phase = 0°
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. TFSF光源（Total-Field Scattered-Field）</h3>
            <p class="mb-4">分离入射场和散射场，精确计算散射截面：</p>
            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>TFSF使用要点：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>TFSF盒子必须完全包围散射体</li>
                    <li>散射体不能接触TFSF边界</li>
                    <li>适合计算消光、散射、吸收截面</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 斜入射设置</h3>
            <p class="mb-4">对于周期结构的斜入射：</p>
            <ol class="step-list">
                <li class="step-item">
                    <strong>设置Bloch边界条件</strong>
                    <p>在周期边界上启用Bloch选项</p>
                </li>
                <li class="step-item">
                    <strong>设置入射角度</strong>
                    <div class="code-block">
angle theta = 30°  # 入射角
                    </div>
                </li>
                <li class="step-item">
                    <strong>调整仿真区域</strong>
                    <p>确保PML层足够厚，避免斜入射波反射</p>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">6. 光源选择指南</h3>
            <table class="w-full border-collapse border border-gray-300 mt-4">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 p-2">研究对象</th>
                        <th class="border border-gray-300 p-2">推荐光源</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2">超表面</td>
                        <td class="border border-gray-300 p-2">Plane Wave</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">纳米天线</td>
                        <td class="border border-gray-300 p-2">Dipole</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">散射截面</td>
                        <td class="border border-gray-300 p-2">TFSF</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">聚焦系统</td>
                        <td class="border border-gray-300 p-2">Gaussian Beam</td>
                    </tr>
                </tbody>
            </table>

            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>实践任务：</strong>
                <p class="mt-2">设计一个金纳米球，分别使用平面波和TFSF光源，计算其散射截面并对比结果。</p>
            </div>
        `
    },
    {
        id: 6,
        title: "第6课：监视器设置与数据提取",
        level: "intermediate",
        duration: "2.5小时",
        icon: "fa-chart-area",
        description: "学习各类监视器的使用方法和数据后处理技巧",
        topics: ["场监视器", "功率监视器", "模式监视器", "数据提取"],
        content: `
            <h2 class="text-3xl font-bold mb-6">监视器与数据分析</h2>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">1. 频域场监视器（Frequency-domain Field）</h3>
            <p class="mb-4">记录特定频率的电磁场分布：</p>
            <div class="code-block">
# 监视器类型
2D X-normal / Y-normal / Z-normal  # 二维截面
3D  # 三维体积（慎用，数据量大）

# 输出数据
E, H  # 电场、磁场矢量
|E|², |H|²  # 场强
Ex, Ey, Ez, Hx, Hy, Hz  # 各分量
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">2. 功率监视器（Power Monitor）</h3>
            <p class="mb-4">计算透射率、反射率、吸收率：</p>
            <div class="code-block">
# 典型设置
T = transmission("monitor_T");  # 透射率
R = transmission("monitor_R");  # 反射率（注意方向）
A = 1 - T - R;  # 吸收率
            </div>
            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>监视器放置技巧：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>透射监视器：放在结构上方，远离近场</li>
                    <li>反射监视器：放在光源和结构之间</li>
                    <li>距离结构至少λ/4以上</li>
                </ul>
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">3. 时域监视器（Time Monitor）</h3>
            <p class="mb-4">记录场随时间的演化，用于观察动态过程：</p>
            <div class="code-block">
# 应用场景
- 观察脉冲传播
- 检查仿真是否收敛
- 分析瞬态响应
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">4. 模式监视器（Mode Expansion Monitor）</h3>
            <p class="mb-4">用于波导和光纤，分解为模式：</p>
            <div class="code-block">
# 提取模式系数
T_mode1 = getresult("mode_monitor", "expansion for mode_1/T");
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">5. 数据提取与可视化</h3>
            <p class="mb-4">常用脚本命令：</p>
            <div class="code-block">
# 提取电场数据
E = getelectric("monitor");
Ex = getdata("monitor", "Ex");
x = getdata("monitor", "x");
y = getdata("monitor", "y");

# 绘图
image(x*1e6, y*1e6, abs(Ex)^2, "X (μm)", "Y (μm)", "|Ex|²");

# 导出数据
matlabsave("results.mat", E, x, y);
            </div>

            <h3 class="text-2xl font-bold mt-8 mb-4">6. 高级分析技巧</h3>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>近场增强因子</strong>：|E|²/|E₀|²</li>
                <li><strong>Purcell因子</strong>：荧光增强计算</li>
                <li><strong>Q因子</strong>：谐振腔品质因子</li>
                <li><strong>相位分布</strong>：angle(Ex + i*Ey)</li>
            </ul>

            <div class="success-box">
                <strong><i class="fas fa-tasks mr-2"></i>实践练习：</strong>
                <p class="mt-2">设计一个超表面单元，提取透射相位和振幅，绘制相位-参数曲线。</p>
            </div>
        `
    }
];
