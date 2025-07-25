// 九龍殿網站主要 JavaScript 功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initLoadingAnimations();
    loadDynamicContent();
    initInteractiveElements();
});

// 載入活動公告內容
function loadAnnouncementsContent() {
    const announcementList = document.querySelector('.announcement-list');
    if (!announcementList) return;

    const announcementsData = [
        {
            date: '2025/01/15',
            title: '九龍大帝聖誕慶典',
            content: '歡迎各界信眾前來參拜，共同慶祝九龍大帝聖誕，當日將舉行盛大法會。',
            priority: 'high',
            type: '慶典活動'
        },
        {
            date: '2025/01/10',
            title: '春節期間開放時間調整',
            content: '春節期間(2/9-2/17)開放時間調整為 05:30 - 22:00，敬請信眾注意。',
            priority: 'normal',
            type: '時間公告'
        },
        {
            date: '2025/01/05',
            title: '新年祈福法會',
            content: '新年期間將舉辦連續三日祈福法會，為信眾祈求新年平安順利。',
            priority: 'normal',
            type: '法會活動'
        },
        {
            date: '2025/01/01',
            title: '元旦開運祈福',
            content: '元旦當日特別開放24小時參拜，歡迎信眾前來為新的一年祈福。',
            priority: 'high',
            type: '特別活動'
        }
    ];

    const announcementsHTML = announcementsData.map((announcement, index) => `
        <div class="announcement-item loading ${announcement.priority}" style="animation-delay: ${index * 0.1}s">
            <div class="announcement-header">
                <span class="announcement-type">${announcement.type}</span>
                <span class="announcement-date">${announcement.date}</span>
            </div>
            <h3 class="announcement-title">${announcement.title}</h3>
            <p class="announcement-content">${announcement.content}</p>
        </div>
    `).join('');

    announcementList.innerHTML = announcementsHTML;

    // 添加公告樣式
    const style = document.createElement('style');
    style.textContent = `
        .announcement-item {
            background: var(--background-white);
            border-radius: var(--radius-lg);
            padding: var(--spacing-md);
            margin-bottom: var(--spacing-md);
            box-shadow: 0 4px 15px var(--shadow-soft);
            border-left: 4px solid var(--accent-color);
            transition: all var(--transition-normal);
        }
        
        .announcement-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px var(--shadow-medium);
        }
        
        .announcement-item.high {
            border-left-color: var(--secondary-color);
            background: linear-gradient(135deg, #fff 0%, #fdfcfa 100%);
        }
        
        .announcement-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-sm);
        }
        
        .announcement-type {
            background: var(--accent-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .announcement-item.high .announcement-type {
            background: var(--secondary-color);
        }
        
        .announcement-date {
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        
        .announcement-title {
            font-family: var(--font-serif);
            color: var(--primary-color);
            margin-bottom: var(--spacing-sm);
            font-size: 1.2rem;
        }
        
        .announcement-content {
            color: var(--text-light);
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
}

// 載入神明內容 - 中國風展示
function loadDeitiesContent() {
    const deityList = document.querySelector('.deity-list');
    if (!deityList) return;

    const deitiesData = [
        {
            name: '九龍大帝',
            image: '九龍大帝.jpg',
            description: '九龍大帝為本殿主神，威靈顯赫，護佑一方平安，信眾遍及各地。傳說中九龍大帝乃天界龍神轉世，擁有呼風喚雨、驅邪避災之神力，是信眾心中最為尊崇的神祇。',
            role: '護國佑民',
            power: '呼風喚雨',
            seal: '主神',
            isMain: true
        },
        {
            name: '九龍大帝分身',
            image: '九龍大帝-分身.jpg',
            description: '主神分身，同樣具有神威庇佑。分身神像承載著九龍大帝的部分神力，能夠分擔主神的職責，為更多信眾提供護佑與指引。',
            role: '分身護佑',
            power: '神威庇護',
            seal: '分身',
            isMain: false
        },
        {
            name: '瑶池金母',
            image: '瑤池金母.jpg',
            description: '瑤池金母，道教中的至尊女神，西王母之尊稱。掌管長壽與福祿，慈悲為懷，庇佑女性與家庭和睦，為求子求福的信眾所敬仰。',
            role: '長壽福祿',
            power: '慈悲庇佑',
            seal: '母神',
            isMain: false
        },
        {
            name: '東王木公',
            image: '東王木公.jpg',
            description: '東華帝君，與西王母相對的仙界領袖。掌管東方青木之氣，主宰春生萬物，為男性修道者的典範，庇佑事業功名。',
            role: '東方帝君',
            power: '春生萬物',
            seal: '帝君',
            isMain: false
        },
        {
            name: '神農藥王',
            image: '神農藥王.jpg',
            description: '神農大帝，上古三皇之一，醫藥之神。嘗百草以療民疾，教民稼穡，濟世救人。凡有病痛者虔誠祈求，必能獲得庇佑。',
            role: '醫藥之神',
            power: '濟世救人',
            seal: '藥王',
            isMain: false
        },
        {
            name: '福德正神',
            image: '福德正神(土地公).jpg',
            description: '土地公，民間最親近的神祇，守護地方平安與財運。慈祥和藹，有求必應，是百姓生活中不可或缺的守護神。',
            role: '地方守護',
            power: '福德財運',
            seal: '正神',
            isMain: false
        },
        {
            name: '金光老主',
            image: '金光老主.jpg',
            description: '金光仙師，道教重要神祇，修道有成的仙人典範。以金光護體聞名，能驅邪避凶，為修道者指引明路。',
            role: '道教仙師',
            power: '金光護體',
            seal: '仙師',
            isMain: false
        },
        {
            name: '魁斗星君',
            image: '魁斗星君.jpg',
            description: '文昌帝君，掌管功名利祿與文運。北斗七星之首，庇佑讀書人金榜題名，為求學考試者所敬奉。',
            role: '文昌帝君',
            power: '功名文運',
            seal: '星君',
            isMain: false
        },
        {
            name: '中央老祖',
            image: '中央老祖.jpg',
            description: '中央聖帝，統領四方神明的至尊存在。居於中央，調和五行，維持天地秩序，是道教中地位崇高的神祇。',
            role: '中央聖帝',
            power: '統領四方',
            seal: '老祖',
            isMain: false
        }
    ];

    // 創建神明列表
    const listHTML = deitiesData.map((deity, index) => `
        <li class="deity-item ${index === 0 ? 'active' : ''}" 
            data-index="${index}"
            data-name="${deity.name}"
            data-image="${deity.image}"
            data-description="${deity.description}"
            data-role="${deity.role}"
            data-power="${deity.power}"
            data-seal="${deity.seal}">
            ${deity.name}
        </li>
    `).join('');

    deityList.innerHTML = listHTML;

    // 添加點擊事件
    const deityItems = document.querySelectorAll('.deity-item');
    deityItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有 active 狀態
            deityItems.forEach(i => i.classList.remove('active'));
            // 添加當前項目的 active 狀態
            item.classList.add('active');
            
            // 更新顯示內容
            updateDeityDisplay(item);
        });
    });

    // 初始化顯示第一個神明
    if (deityItems.length > 0) {
        updateDeityDisplay(deityItems[0]);
    }
}

// 更新神明顯示內容
function updateDeityDisplay(item) {
    const image = document.getElementById('currentDeityImage');
    const name = document.getElementById('currentDeityName');
    const desc = document.getElementById('currentDeityDesc');
    const role = document.getElementById('currentDeityRole');
    const power = document.getElementById('currentDeityPower');
    const seal = document.querySelector('.deity-seal');

    if (image) image.src = item.dataset.image;
    if (name) name.textContent = item.dataset.name;
    if (desc) desc.textContent = item.dataset.description;
    if (role) role.textContent = item.dataset.role;
    if (power) power.textContent = item.dataset.power;
    if (seal) seal.textContent = item.dataset.seal;

    // 添加切換動畫
    const portrait = document.querySelector('.deity-portrait');
    const infoPanel = document.querySelector('.deity-info-panel');
    
    if (portrait && infoPanel) {
        portrait.style.opacity = '0';
        infoPanel.style.opacity = '0';
        portrait.style.transform = 'scale(0.95)';
        infoPanel.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            portrait.style.opacity = '1';
            infoPanel.style.opacity = '1';
            portrait.style.transform = 'scale(1)';
            infoPanel.style.transform = 'translateX(0)';
        }, 150);
    }
}

// 導航功能
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 移動端選單切換
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // 動畫效果
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.style.transform = 
                navMenu.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)');
        });
    }

    // 平滑滾動到章節
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 90; // 考慮導航欄高度和額外間距
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // 移動端選單關閉
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // 滾動時更新導航欄樣式 - 使用節流函數優化性能
    const throttledNavbarUpdate = throttle(() => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(253, 252, 250, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(44, 62, 80, 0.15)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(253, 252, 250, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }, 16); // 約60fps
    
    window.addEventListener('scroll', throttledNavbarUpdate);
}

// 滾動效果
function initScrollEffects() {
    // 滾動時顯示元素動畫
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll(
        '.feature-item, .section-header, .contact-item, .footer-section'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// 載入動畫
function initLoadingAnimations() {
    // 頁面載入完成後顯示內容
    setTimeout(() => {
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('loaded');
            }, index * 100);
        });
    }, 500);
}

// 動態內容載入
function loadDynamicContent() {
    loadAnnouncementsContent();
    loadDeitiesContent();
    loadTimelineContent();
    loadEventsContent();
    loadServicesContent();
}

// 載入時間軸內容
function loadTimelineContent() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const timelineData = [
        {
            year: '待補充',
            title: '九龍殿創建',
            description: '九龍殿正式創建，開始為當地信眾提供宗教服務'
        },
        {
            year: '待補充',
            title: '重要擴建',
            description: '殿宇進行重要擴建，規模進一步擴大'
        },
        {
            year: '待補充',
            title: '文化保存',
            description: '開始重視傳統文化保存與傳承工作'
        },
        {
            year: '2025',
            title: '現代化發展',
            description: '結合現代科技與傳統文化，打造全新網站平台'
        }
    ];

    const timelineHTML = timelineData.map((item, index) => `
        <div class="timeline-item loading" style="animation-delay: ${index * 0.2}s">
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');

    timeline.innerHTML = timelineHTML;

    // 添加時間軸樣式
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item {
            position: relative;
            padding: 2rem 0;
            border-left: 3px solid var(--accent-color);
            margin-left: 1rem;
            padding-left: 2rem;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 2rem;
            width: 15px;
            height: 15px;
            background: var(--accent-color);
            border-radius: 50%;
            border: 3px solid var(--background-white);
        }
        
        .timeline-year {
            font-family: var(--font-serif);
            font-size: 1.1rem;
            color: var(--secondary-color);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .timeline-title {
            font-family: var(--font-serif);
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .timeline-description {
            color: var(--text-light);
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .timeline-item {
                margin-left: 0.5rem;
                padding-left: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// 載入活動內容
function loadEventsContent() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;

    const eventsData = [
        {
            title: '春季祭典',
            date: '待補充',
            description: '傳統春季祭典，祈求風調雨順、國泰民安',
            image: '🌸'
        },
        {
            title: '中元普渡',
            date: '農曆七月',
            description: '中元節普渡法會，超度亡靈、祈求平安',
            image: '🕯️'
        },
        {
            title: '文化講座',
            date: '每月舉辦',
            description: '定期舉辦傳統文化講座，傳承宗教智慧',
            image: '📚'
        },
        {
            title: '祈福法會',
            date: '每週舉行',
            description: '定期祈福法會，為信眾祈求平安健康',
            image: '🙏'
        }
    ];

    const eventsHTML = eventsData.map((event, index) => `
        <div class="event-card loading" style="animation-delay: ${index * 0.1}s">
            <div class="event-icon">${event.image}</div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-date">${event.date}</p>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
    `).join('');

    eventsGrid.innerHTML = eventsHTML;

    // 添加活動卡片樣式
    const style = document.createElement('style');
    style.textContent = `
        .event-card {
            background: var(--background-white);
            border-radius: var(--radius-lg);
            padding: var(--spacing-md);
            box-shadow: 0 5px 15px var(--shadow-soft);
            transition: all var(--transition-normal);
            border: 1px solid var(--border-light);
            text-align: center;
        }
        
        .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px var(--shadow-medium);
        }
        
        .event-icon {
            font-size: 3rem;
            margin-bottom: var(--spacing-sm);
        }
        
        .event-title {
            font-family: var(--font-serif);
            color: var(--primary-color);
            margin-bottom: var(--spacing-xs);
            font-size: 1.3rem;
        }
        
        .event-date {
            color: var(--secondary-color);
            font-weight: 500;
            margin-bottom: var(--spacing-sm);
        }
        
        .event-description {
            color: var(--text-light);
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
}

// 載入服務內容
function loadServicesContent() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;

    const servicesData = [
        {
            title: '祈福服務',
            description: '為信眾提供各種祈福服務，包括個人祈福、家庭平安等',
            icon: '🙏',
            features: ['個人祈福', '家庭平安', '事業順利', '健康長壽']
        },
        {
            title: '婚喪喜慶',
            description: '協助信眾處理人生重要時刻的宗教儀式',
            icon: '💒',
            features: ['婚禮祝福', '喪禮超度', '滿月祝福', '成年禮']
        },
        {
            title: '文化教育',
            description: '推廣傳統宗教文化，舉辦各種文化教育活動',
            icon: '📖',
            features: ['經典講座', '文化課程', '書法教學', '禪修指導']
        },
        {
            title: '社區服務',
            description: '積極參與社區服務，關懷弱勢族群',
            icon: '🤝',
            features: ['慈善活動', '社區關懷', '環保推廣', '志工服務']
        }
    ];

    const servicesHTML = servicesData.map((service, index) => `
        <div class="service-card loading" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    servicesGrid.innerHTML = servicesHTML;

    // 添加服務卡片樣式
    const style = document.createElement('style');
    style.textContent = `
        .service-card {
            background: var(--background-white);
            border-radius: var(--radius-lg);
            padding: var(--spacing-md);
            box-shadow: 0 5px 15px var(--shadow-soft);
            transition: all var(--transition-normal);
            border: 1px solid var(--border-light);
            text-align: center;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px var(--shadow-medium);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: var(--spacing-sm);
        }
        
        .service-title {
            font-family: var(--font-serif);
            color: var(--primary-color);
            margin-bottom: var(--spacing-sm);
            font-size: 1.3rem;
        }
        
        .service-description {
            color: var(--text-light);
            line-height: 1.6;
            margin-bottom: var(--spacing-md);
        }
        
        .service-features {
            list-style: none;
            text-align: left;
        }
        
        .service-features li {
            color: var(--text-dark);
            margin-bottom: var(--spacing-xs);
            position: relative;
            padding-left: 1.5rem;
        }
        
        .service-features li::before {
            content: '•';
            color: var(--accent-color);
            font-size: 1.2rem;
            position: absolute;
            left: 0;
        }
    `;
    document.head.appendChild(style);
}

// 互動元素初始化
function initInteractiveElements() {
    // 滾動指示器點擊事件
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 按鈕點擊效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // 添加漣漪動畫
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// 工具函數
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('頁面錯誤:', e.error);
});

// 性能優化
window.addEventListener('load', function() {
    // 預載入圖片（當有圖片時）
    // 啟用服務工作程序（如果需要）
    console.log('九龍殿網站載入完成');
});
