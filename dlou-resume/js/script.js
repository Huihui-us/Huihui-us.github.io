// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 技能雷达图初始化
    initSkillRadar();

    // 技能进度条动画
    skillProgressAnimation();

    // 平滑滚动
    smoothScroll();

    // 导航栏滚动效果
    navbarScroll();

    // 移动端菜单（简易实现）
    mobileMenu();

    // 元素渐入动画
    scrollReveal();
});

// 技能雷达图
function initSkillRadar() {
    const radarChart = echarts.init(document.getElementById('skill-radar'));
    const option = {
        title: {
            text: '技能能力雷达图',
            textStyle: {
                fontSize: 18,
                fontWeight: 600,
                color: '#165DFF'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontSize: 12
            }
        },
        radar: {
            indicator: [
                { name: 'HTML5/CSS3', max: 100 },
                { name: 'JavaScript', max: 100 },
                { name: 'Vue.js', max: 100 },
                { name: '响应式布局', max: 100 },
                { name: 'Git版本控制', max: 100 },
                { name: 'UI/UX设计', max: 100 }
            ],
            radius: '70%',
            axisName: {
                fontSize: 14,
                color: '#333'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(22, 93, 255, 0.1)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(22, 93, 255, 0.05)'
                }
            }
        },
        series: [
            {
                name: '技能评分',
                type: 'radar',
                data: [
                    {
                        value: [95, 85, 80, 90, 75, 70],
                        name: '个人技能',
                        itemStyle: {
                            color: '#165DFF'
                        },
                        areaStyle: {
                            color: 'rgba(22, 93, 255, 0.2)'
                        },
                        lineStyle: {
                            width: 2
                        }
                    }
                ]
            }
        ]
    };
    radarChart.setOption(option);
    // 窗口缩放重绘
    window.addEventListener('resize', function() {
        radarChart.resize();
    });
}

// 技能进度条动画
function skillProgressAnimation() {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(item => {
        const width = item.style.width;
        item.style.width = '0';
        setTimeout(() => {
            item.style.width = width;
        }, 500);
    });
}

// 平滑滚动
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 导航栏滚动效果
function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(5px)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// 移动端菜单（简易）
function mobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    menuBtn.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#fff';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
        navMenu.style.zIndex = '999';
        navMenu.querySelectorAll('li').forEach(li => {
            li.style.margin = '10px 0';
            li.style.textAlign = 'center';
        });
    });
}

// 滚动元素渐入动画
function scrollReveal() {
    const elements = document.querySelectorAll('.section > .container > div');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
}