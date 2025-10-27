// 案例数据模块
export const cases = [
    {
        id: 1,
        title: "案例1：金纳米盘的等离激元共振",
        difficulty: "入门",
        time: "1小时",
        tags: ["等离激元", "纳米结构", "共振"],
        description: "通过仿真金纳米盘，理解局域表面等离激元共振（LSPR）的基本特性",
        objectives: [
            "掌握简单纳米结构的建模方法",
            "理解LSPR的物理机制",
            "学习近场增强的计算"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">实验目标</h3>
            <p class="mb-4">设计一个金纳米盘，观察其在可见光波段的等离激元共振现象，计算近场增强因子。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">结构参数</h3>
            <div class="code-block">
纳米盘直径：D = 100 nm
纳米盘厚度：h = 30 nm
材料：Au (Gold)
基底：玻璃 (SiO2, n=1.46)
环境：空气 (n=1)
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-4">详细步骤</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>创建仿真区域</strong>
                    <div class="code-block">
Simulation → FDTD
x/y/z span = 500 nm
simulation time = 1000 fs
mesh accuracy = 4
                    </div>
                </li>
                <li class="step-item">
                    <strong>创建金纳米盘</strong>
                    <div class="code-block">
Structures → Circle
radius = 50 nm
z span = 30 nm
material = Au (Gold)
z = 15 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>创建玻璃基底</strong>
                    <div class="code-block">
Structures → Rectangle
x/y span = 500 nm
z span = 100 nm
material = SiO2 (Glass)
z = -50 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加平面波光源</strong>
                    <div class="code-block">
Sources → Plane Wave
wavelength: 400-800 nm
direction = Forward (Z+)
z = -200 nm
polarization angle = 0°
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加场监视器</strong>
                    <div class="code-block">
Monitors → Frequency-domain field
monitor type = 2D Z-normal
z = 15 nm (纳米盘中心)
x/y span = 300 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加透射/反射监视器</strong>
                    <div class="code-block">
Monitors → Power (T)
z = 200 nm

Monitors → Power (R)
z = -200 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>运行仿真</strong>
                    <p>点击Run按钮，等待计算完成（约5-10分钟）</p>
                </li>
                <li class="step-item">
                    <strong>分析结果</strong>
                    <div class="code-block">
# 查看消光谱
Ext = 1 - T - R;
plot(wavelength, Ext);

# 查看近场分布
双击场监视器，选择|E|²
在共振波长处观察场增强
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">预期结果</h3>
            <ul class="list-disc ml-6 mb-4">
                <li>消光谱在~550nm处出现共振峰</li>
                <li>共振波长处，纳米盘边缘电场增强可达10-50倍</li>
                <li>电场主要集中在纳米盘的边缘</li>
            </ul>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>拓展练习：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>改变纳米盘直径（80-120nm），观察共振波长的红移</li>
                    <li>改变基底折射率，研究环境对共振的影响</li>
                    <li>尝试椭圆形纳米盘，观察偏振相关的双共振</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "案例2：超表面相位调控单元库",
        difficulty: "进阶",
        time: "3小时",
        tags: ["超表面", "相位调控", "参数扫描"],
        description: "设计TiO2纳米柱阵列，建立完整的相位-几何参数数据库",
        objectives: [
            "掌握周期边界条件的使用",
            "学习参数扫描的自动化",
            "建立超表面相位库"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">设计目标</h3>
            <p class="mb-4">设计一组TiO2纳米柱，通过改变直径实现0-2π的相位调控，同时保持高透射率（>80%）。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">设计参数</h3>
            <div class="code-block">
工作波长：λ = 633 nm
周期：P = 400 nm
纳米柱高度：H = 600 nm
纳米柱材料：TiO2 (n≈2.4)
基底：SiO2 (n≈1.46)
扫描参数：直径 D = 80-320 nm
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-4">详细步骤</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>创建单元仿真</strong>
                    <div class="code-block">
Simulation → FDTD
x/y span = 400 nm (等于周期P)
z span = 2000 nm
x/y boundary = Periodic
z boundary = PML
                    </div>
                </li>
                <li class="step-item">
                    <strong>创建纳米柱</strong>
                    <div class="code-block">
Structures → Circle
radius = 80 nm (初始值，后续扫描)
z span = 600 nm
material = TiO2
命名为 "nanopillar"
                    </div>
                </li>
                <li class="step-item">
                    <strong>创建基底</strong>
                    <div class="code-block">
Structures → Rectangle
x/y span = 400 nm
z span = 500 nm
material = SiO2
z = -250 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置光源</strong>
                    <div class="code-block">
Sources → Plane Wave
wavelength = 633 nm
direction = Forward
injection axis = Z
z = -800 nm
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加透射监视器</strong>
                    <div class="code-block">
Monitors → Power
z = 800 nm
命名为 "T_monitor"
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置参数扫描</strong>
                    <div class="code-block">
# 在脚本窗口输入：
radius_list = linspace(40, 160, 13)*1e-9;  # 13个半径值
phase_list = matrix(length(radius_list));
trans_list = matrix(length(radius_list));

for(i=1:length(radius_list)) {
    switchtolayout;
    select("nanopillar");
    set("radius", radius_list(i));
    
    save("sweep_r" + num2str(i) + ".fsp");
    run;
    
    # 提取透射系数
    T = getresult("T_monitor", "T");
    t_complex = T.T;
    
    # 计算相位和透射率
    phase_list(i) = angle(t_complex);
    trans_list(i) = abs(t_complex)^2;
    
    ?"Radius = " + num2str(radius_list(i)*1e9) + " nm";
    ?"Phase = " + num2str(phase_list(i)*180/pi) + " deg";
    ?"Transmission = " + num2str(trans_list(i)*100) + " %";
}

# 保存结果
matlabsave("phase_library.mat", radius_list, phase_list, trans_list);

# 绘图
plot(radius_list*1e9, phase_list*180/pi, "Radius (nm)", "Phase (deg)");
plot(radius_list*1e9, trans_list*100, "Radius (nm)", "Transmission (%)");
                    </div>
                </li>
                <li class="step-item">
                    <strong>选择最优单元</strong>
                    <p>从扫描结果中选择8个单元，满足：</p>
                    <ul class="list-disc ml-6 mt-2">
                        <li>相位均匀分布在0-2π（间隔45°）</li>
                        <li>透射率 > 80%</li>
                        <li>相位曲线单调变化</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">预期结果</h3>
            <div class="success-box">
                <strong><i class="fas fa-check-circle mr-2"></i>成功标准：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>获得完整的相位-半径曲线</li>
                    <li>相位覆盖范围 > 300°</li>
                    <li>平均透射率 > 85%</li>
                    <li>建立8单元相位库</li>
                </ul>
            </div>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>优化建议：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>如果相位覆盖不足，增加纳米柱高度</li>
                    <li>如果透射率低，减小纳米柱直径或增大周期</li>
                    <li>可以同时扫描高度和直径，获得二维相位库</li>
                </ul>
            </div>
        `
    },
    {
        id: 3,
        title: "案例3：超透镜聚焦设计",
        difficulty: "高级",
        time: "4小时",
        tags: ["超透镜", "聚焦", "相位分布"],
        description: "设计平面超透镜，实现亚波长聚焦",
        objectives: [
            "理解超透镜的相位分布设计",
            "掌握大规模阵列仿真技巧",
            "学习聚焦性能评估"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">设计目标</h3>
            <p class="mb-4">设计一个直径20μm的平面超透镜，焦距f=10μm，工作波长633nm，实现衍射极限聚焦。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">理论基础</h3>
            <p class="mb-4">超透镜的相位分布遵循双曲相位公式：</p>
            <div class="code-block">
φ(r) = (2π/λ) × [f - √(r² + f²)]

其中：
r = √(x² + y²) 为径向坐标
f = 焦距
λ = 工作波长
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-4">设计流程</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>第一步：建立相位库</strong>
                    <p>使用案例2的方法，建立8单元相位库（0°, 45°, 90°, ..., 315°）</p>
                </li>
                <li class="step-item">
                    <strong>第二步：计算相位分布</strong>
                    <div class="code-block">
# MATLAB或Python脚本
lambda = 633e-9;  # 波长
f = 10e-6;  # 焦距
P = 400e-9;  # 单元周期
D = 20e-6;  # 透镜直径

# 创建坐标网格
N = round(D/P);  # 单元数量
x = linspace(-D/2, D/2, N);
[X, Y] = meshgrid(x, x);
R = sqrt(X.^2 + Y.^2);

# 计算相位分布
phase = (2*pi/lambda) * (f - sqrt(R.^2 + f^2));
phase = mod(phase, 2*pi);  # 归一化到0-2π

# 离散化为8个相位等级
phase_discrete = round(phase/(2*pi/8)) * (2*pi/8);

# 映射到单元库
unit_index = round(phase_discrete/(2*pi/8)) + 1;
                    </div>
                </li>
                <li class="step-item">
                    <strong>第三步：构建超透镜模型</strong>
                    <div class="code-block">
# 在Lumerical中使用脚本创建阵列
for(i=1:N) {
    for(j=1:N) {
        x_pos = (i - N/2) * P;
        y_pos = (j - N/2) * P;
        r = sqrt(x_pos^2 + y_pos^2);
        
        if(r < D/2) {  # 只在透镜区域内
            # 根据unit_index选择对应的纳米柱半径
            radius = radius_library(unit_index(i,j));
            
            addcircle;
            set("name", "unit_" + num2str(i) + "_" + num2str(j));
            set("x", x_pos);
            set("y", y_pos);
            set("radius", radius);
            set("z span", 600e-9);
            set("material", "TiO2");
        }
    }
}
                    </div>
                </li>
                <li class="step-item">
                    <strong>第四步：设置仿真</strong>
                    <div class="code-block">
# FDTD仿真区域
x/y span = 25 μm (略大于透镜)
z span = 20 μm (包含焦点)
boundary = PML (全部)

# 平面波光源
wavelength = 633 nm
z = -5 μm (在透镜下方)

# 场监视器
XZ截面：y=0, 观察聚焦
XY截面：z=10μm (焦平面)
                    </div>
                </li>
                <li class="step-item">
                    <strong>第五步：运行与分析</strong>
                    <div class="code-block">
# 提取焦平面场分布
E_focal = getelectric("focal_plane_monitor");
I = abs(E_focal)^2;

# 计算焦斑尺寸（FWHM）
I_max = max(I);
FWHM = 计算半高全宽;

# 计算聚焦效率
P_focal = integrate(I, focal_area);
P_incident = 入射功率;
efficiency = P_focal / P_incident;
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">性能指标</h3>
            <div class="success-box">
                <strong><i class="fas fa-check-circle mr-2"></i>设计目标：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>焦斑FWHM < 0.5λ (衍射极限)</li>
                    <li>聚焦效率 > 60%</li>
                    <li>焦深 > 2λ</li>
                    <li>数值孔径 NA ≈ 0.7</li>
                </ul>
            </div>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>计算资源提示：</strong>
                <p class="mt-2">完整超透镜仿真需要大量内存（>32GB）和计算时间（数小时）。建议：</p>
                <ul class="list-disc ml-6 mt-2">
                    <li>先仿真小尺寸透镜（5μm）验证设计</li>
                    <li>使用对称边界减少计算量</li>
                    <li>考虑使用集群或云计算资源</li>
                </ul>
            </div>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>拓展方向：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>设计消色差超透镜（多波长聚焦）</li>
                    <li>设计偏振复用超透镜</li>
                    <li>设计可调焦超透镜</li>
                    <li>设计超透镜阵列（多焦点）</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "案例4：偏振转换超表面",
        difficulty: "进阶",
        time: "2.5小时",
        tags: ["偏振", "超表面", "各向异性"],
        description: "设计线偏振到圆偏振的转换超表面",
        objectives: [
            "理解偏振转换原理",
            "掌握各向异性结构设计",
            "学习Stokes参数分析"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">设计目标</h3>
            <p class="mb-4">设计一个超表面，将线偏振光转换为圆偏振光，转换效率>90%，工作波长633nm。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">原理说明</h3>
            <p class="mb-4">线偏振到圆偏振的转换需要：</p>
            <ul class="list-disc ml-6 mb-4">
                <li>X和Y方向的相位差为90°（λ/4波片）</li>
                <li>X和Y方向的透射率相等</li>
                <li>使用各向异性结构（如椭圆、矩形）</li>
            </ul>

            <h3 class="text-2xl font-bold mt-6 mb-4">详细步骤</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>设计单元结构</strong>
                    <div class="code-block">
结构类型：矩形纳米柱
材料：TiO2
周期：P = 400 nm
高度：H = 600 nm
长度：Lx = 待优化
宽度：Ly = 待优化
                    </div>
                </li>
                <li class="step-item">
                    <strong>创建仿真模型</strong>
                    <div class="code-block">
# FDTD设置
x/y boundary = Periodic
z boundary = PML

# 添加矩形纳米柱
Structures → Rectangle
x span = Lx (初始值 200nm)
y span = Ly (初始值 100nm)
z span = 600 nm
material = TiO2
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置X偏振光源</strong>
                    <div class="code-block">
Sources → Plane Wave
wavelength = 633 nm
polarization angle = 0° (X偏振)
                    </div>
                </li>
                <li class="step-item">
                    <strong>添加透射监视器</strong>
                    <div class="code-block">
Monitors → Power
记录Ex和Ey分量
                    </div>
                </li>
                <li class="step-item">
                    <strong>参数扫描优化</strong>
                    <div class="code-block">
# 扫描Lx和Ly
Lx_list = linspace(120, 280, 9)*1e-9;
Ly_list = linspace(80, 200, 9)*1e-9;

for(i=1:length(Lx_list)) {
    for(j=1:length(Ly_list)) {
        # 设置参数
        set("x span", Lx_list(i));
        set("y span", Ly_list(j));
        
        run;
        
        # 提取透射系数
        tx = getresult("T", "Ex");
        ty = getresult("T", "Ey");
        
        # 计算相位差
        phase_diff = angle(ty) - angle(tx);
        
        # 计算透射率
        Tx = abs(tx)^2;
        Ty = abs(ty)^2;
        
        # 判断是否满足λ/4波片条件
        if(abs(phase_diff - pi/2) < 0.1 && abs(Tx-Ty) < 0.05) {
            ?"找到最优参数!";
            ?"Lx = " + num2str(Lx_list(i)*1e9) + " nm";
            ?"Ly = " + num2str(Ly_list(j)*1e9) + " nm";
        }
    }
}
                    </div>
                </li>
                <li class="step-item">
                    <strong>验证圆偏振</strong>
                    <div class="code-block">
# 计算Stokes参数
S0 = |Ex|² + |Ey|²
S1 = |Ex|² - |Ey|²
S2 = 2*Re(Ex*Ey*)
S3 = 2*Im(Ex*Ey*)

# 圆偏振度
DOP = S3/S0  # 应接近±1

# 椭圆度
ellipticity = S3/sqrt(S1² + S2² + S3²)
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">预期结果</h3>
            <div class="success-box">
                <strong><i class="fas fa-check-circle mr-2"></i>性能指标：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>相位差：90° ± 5°</li>
                    <li>透射率：Tx ≈ Ty > 80%</li>
                    <li>圆偏振度：|DOP| > 0.95</li>
                    <li>椭圆度：> 0.9</li>
                </ul>
            </div>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>拓展练习：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>设计宽带偏振转换器（工作带宽>100nm）</li>
                    <li>设计反射型偏振转换器</li>
                    <li>设计偏振分束器</li>
                    <li>设计可调偏振转换器</li>
                </ul>
            </div>
        `
    },
    {
        id: 5,
        title: "案例5：全息超表面设计",
        difficulty: "高级",
        time: "5小时",
        tags: ["全息", "相位调控", "图像重建"],
        description: "设计超表面全息图，实现任意图像的远场投影",
        objectives: [
            "理解计算全息原理",
            "掌握GS算法优化",
            "实现图像重建"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">设计目标</h3>
            <p class="mb-4">设计一个超表面全息图，在远场重建目标图像（如字母、Logo等）。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">理论基础</h3>
            <p class="mb-4">超表面全息基于相位调制：</p>
            <div class="code-block">
E(x,y) = A(x,y) × exp[iφ(x,y)]

其中：
A(x,y) - 振幅分布（通常为常数）
φ(x,y) - 相位分布（由算法优化得到）
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-4">设计流程</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>准备目标图像</strong>
                    <div class="code-block">
# Python代码
import numpy as np
from PIL import Image

# 读取目标图像
target = Image.open('target.png').convert('L')
target = np.array(target) / 255.0

# 调整尺寸
target = target.resize((100, 100))
                    </div>
                </li>
                <li class="step-item">
                    <strong>GS算法优化相位</strong>
                    <div class="code-block">
# Gerchberg-Saxton算法
def GS_algorithm(target, iterations=50):
    # 初始化随机相位
    phase = np.random.rand(*target.shape) * 2 * np.pi
    
    for i in range(iterations):
        # 前向传播（傅里叶变换）
        hologram = np.exp(1j * phase)
        far_field = np.fft.fftshift(np.fft.fft2(hologram))
        
        # 替换振幅，保留相位
        far_field_amp = np.abs(far_field)
        far_field_phase = np.angle(far_field)
        far_field_new = target * np.exp(1j * far_field_phase)
        
        # 反向传播
        hologram_new = np.fft.ifft2(np.fft.ifftshift(far_field_new))
        phase = np.angle(hologram_new)
        
        # 计算误差
        error = np.sum((np.abs(far_field) - target)**2)
        print(f"Iteration {i+1}, Error: {error}")
    
    return phase

# 运行优化
optimized_phase = GS_algorithm(target)

# 离散化为8个相位等级
phase_discrete = np.round(optimized_phase / (2*np.pi/8)) * (2*np.pi/8)
                    </div>
                </li>
                <li class="step-item">
                    <strong>映射到超表面单元</strong>
                    <div class="code-block">
# 使用案例2建立的相位库
unit_index = np.round(phase_discrete / (2*np.pi/8)).astype(int)

# 生成Lumerical脚本
with open('hologram_script.lsf', 'w') as f:
    for i in range(100):
        for j in range(100):
            x_pos = (i - 50) * 400e-9
            y_pos = (j - 50) * 400e-9
            radius = radius_library[unit_index[i,j]]
            
            f.write(f"addcircle;\\n")
            f.write(f"set('x', {x_pos});\\n")
            f.write(f"set('y', {y_pos});\\n")
            f.write(f"set('radius', {radius});\\n")
                    </div>
                </li>
                <li class="step-item">
                    <strong>FDTD仿真验证</strong>
                    <div class="code-block">
# 仿真设置
x/y span = 50 μm (包含全息图)
z span = 100 μm (包含远场)

# 平面波照明
wavelength = 633 nm

# 远场监视器
z = 50 μm (远场位置)
x/y span = 20 μm
                    </div>
                </li>
                <li class="step-item">
                    <strong>图像重建与评估</strong>
                    <div class="code-block">
# 提取远场强度分布
E_far = getelectric("far_field_monitor");
I_reconstructed = abs(E_far)^2;

# 计算重建质量
# 1. 相关系数
correlation = corr2(I_reconstructed, target);

# 2. 衍射效率
efficiency = sum(I_reconstructed .* target) / sum(I_reconstructed);

# 3. 信噪比
SNR = 10*log10(mean(signal) / mean(noise));
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">性能指标</h3>
            <div class="success-box">
                <strong><i class="fas fa-check-circle mr-2"></i>设计目标：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>图像相关系数 > 0.85</li>
                    <li>衍射效率 > 50%</li>
                    <li>信噪比 > 15 dB</li>
                    <li>图像清晰可辨</li>
                </ul>
            </div>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle mr-2"></i>注意事项：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>GS算法可能收敛到局部最优，多次运行选最佳结果</li>
                    <li>相位离散化会降低图像质量，可增加相位等级数</li>
                    <li>完整仿真计算量大，建议先仿真小区域验证</li>
                </ul>
            </div>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>高级拓展：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>多波长彩色全息</li>
                    <li>偏振复用全息（一个超表面，两个图像）</li>
                    <li>动态全息（可调超表面）</li>
                    <li>3D全息投影</li>
                </ul>
            </div>
        `
    },
    {
        id: 6,
        title: "案例6：光学涡旋发生器",
        difficulty: "进阶",
        time: "2小时",
        tags: ["涡旋光束", "轨道角动量", "相位奇点"],
        description: "设计产生涡旋光束的超表面，实现轨道角动量调控",
        objectives: [
            "理解涡旋光束的相位结构",
            "掌握螺旋相位板设计",
            "学习OAM模式分析"
        ],
        steps: `
            <h3 class="text-2xl font-bold mb-4">设计目标</h3>
            <p class="mb-4">设计一个超表面，将平面波转换为携带轨道角动量（OAM）的涡旋光束，拓扑荷数l=1。</p>

            <h3 class="text-2xl font-bold mt-6 mb-4">理论基础</h3>
            <p class="mb-4">涡旋光束的相位分布：</p>
            <div class="code-block">
φ(r,θ) = l × θ

其中：
l - 拓扑荷数（整数）
θ - 方位角
r - 径向坐标

特点：
- 中心相位奇点（强度为零）
- 携带轨道角动量 L = l×ℏ 每光子
- 相位绕中心旋转2πl
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-4">详细步骤</h3>
            <ol class="step-list">
                <li class="step-item">
                    <strong>计算螺旋相位分布</strong>
                    <div class="code-block">
# Python代码
import numpy as np

# 参数设置
l = 1  # 拓扑荷数
D = 20e-6  # 超表面直径
P = 400e-9  # 单元周期
N = int(D / P)  # 单元数量

# 创建坐标网格
x = np.linspace(-D/2, D/2, N)
X, Y = np.meshgrid(x, x)
R = np.sqrt(X**2 + Y**2)
Theta = np.arctan2(Y, X)

# 计算螺旋相位
phase = l * Theta
phase = np.mod(phase, 2*np.pi)  # 归一化到0-2π

# 离散化为8个相位等级
phase_discrete = np.round(phase / (2*np.pi/8)) * (2*np.pi/8)
unit_index = np.round(phase_discrete / (2*np.pi/8)).astype(int)
                    </div>
                </li>
                <li class="step-item">
                    <strong>构建超表面模型</strong>
                    <div class="code-block">
# 在Lumerical中创建阵列
for(i=1:N) {
    for(j=1:N) {
        x_pos = (i - N/2) * P;
        y_pos = (j - N/2) * P;
        r = sqrt(x_pos^2 + y_pos^2);
        
        if(r < D/2 && r > 0.5e-6) {  # 排除中心奇点
            radius = radius_library(unit_index(i,j));
            
            addcircle;
            set("x", x_pos);
            set("y", y_pos);
            set("radius", radius);
            set("z span", 600e-9);
            set("material", "TiO2");
        }
    }
}
                    </div>
                </li>
                <li class="step-item">
                    <strong>设置仿真</strong>
                    <div class="code-block">
# FDTD区域
x/y span = 25 μm
z span = 30 μm
boundary = PML

# 平面波光源
wavelength = 633 nm
z = -5 μm

# 场监视器
XY截面：z = 10 μm (近场)
XY截面：z = 20 μm (远场)
XZ截面：y = 0 (观察相位奇点)
                    </div>
                </li>
                <li class="step-item">
                    <strong>分析涡旋光束特性</strong>
                    <div class="code-block">
# 提取场数据
E = getelectric("near_field");
Ex = E.Ex;
Ey = E.Ey;

# 计算强度分布
I = abs(Ex)^2 + abs(Ey)^2;

# 计算相位分布
phase = angle(Ex + 1i*Ey);

# 验证中心暗斑
I_center = I(N/2, N/2);  # 应接近0

# 验证相位螺旋
# 沿圆周提取相位
theta_sample = linspace(0, 2*pi, 100);
r_sample = 5e-6;  # 采样半径
phase_circle = interp2(X, Y, phase, r_sample*cos(theta_sample), r_sample*sin(theta_sample));

# 绘制相位-角度曲线（应为线性）
plot(theta_sample, phase_circle);
                    </div>
                </li>
                <li class="step-item">
                    <strong>计算OAM纯度</strong>
                    <div class="code-block">
# OAM模式分解
# 计算与理想OAM模式的重叠积分
OAM_ideal = exp(1i * l * Theta);
overlap = sum(sum(E .* conj(OAM_ideal)));
purity = abs(overlap)^2 / (sum(abs(E)^2) * sum(abs(OAM_ideal)^2));

?"OAM purity = " + num2str(purity*100) + "%";
                    </div>
                </li>
            </ol>

            <h3 class="text-2xl font-bold mt-6 mb-4">预期结果</h3>
            <div class="success-box">
                <strong><i class="fas fa-check-circle mr-2"></i>验证标准：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>中心强度 < 5% 最大强度（暗斑）</li>
                    <li>相位绕中心旋转2π（l=1）</li>
                    <li>环形强度分布</li>
                    <li>OAM纯度 > 85%</li>
                </ul>
            </div>

            <div class="tip-box">
                <strong><i class="fas fa-lightbulb mr-2"></i>拓展练习：</strong>
                <ul class="list-disc ml-6 mt-2">
                    <li>设计高阶涡旋光束（l=2, 3, ...）</li>
                    <li>设计OAM复用器（同时产生多个OAM模式）</li>
                    <li>设计OAM模式转换器（l=1 → l=2）</li>
                    <li>设计矢量涡旋光束（偏振+OAM）</li>
                </ul>
            </div>
        `
    }
];
