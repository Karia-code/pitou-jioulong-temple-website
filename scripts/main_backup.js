// 九龍殿網站主要 JavaScript 功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initLoadingAnimations();
    loadDynamicContent();
    initInteractiveElements();
    initInkDropTransition(); // 初始化潑墨轉場動畫
    initScrollFish(); // 初始化滾動鯉魚動畫
    initContactForm(); // 初始化聯絡表單
    initFestivalCalendar(); // 初始化農曆聖誕月曆
});

// 載入活動公告內容
function loadAnnouncementsContent() {
    const announcementList = document.querySelector('.announcement-list');
    if (!announcementList) return;

    const announcementsData = [
        {
            date: '農曆2/18',
            title: '九龍大帝聖誕慶典',
            content: '本殿主神九龍大帝聖誕盛典，當日將舉行盛大慶典法會，歡迎各界信眾前來參拜祈福。',
            priority: 'high',
            type: '主神聖誕'
        },
        {
            date: '農曆7/15',
            title: '中元普渡法會',
            content: '中元節普渡法會，超度亡靈、祈求平安，廣施功德，歡迎信眾隨緣參與。',
            priority: 'high',
            type: '重要法會'
        },
        {
            date: '農曆新年',
            title: '新春太歲燈禮斗安奉',
            content: '新春期間為信眾安奉太歲燈與禮斗，祈求新年平安順遂，功名利祿。',
            priority: 'normal',
            type: '新春祈福'
        },
        {
            date: '年末舉行',
            title: '年末謝斗科儀',
            content: '年末感謝神恩的謝斗科儀，為來年祈福，感恩一年來的庇佑與恩典。',
            priority: 'normal',
            type: '謝恩科儀'
        },
        {
            date: '全年度',
            title: '各神明聖誕慶典',
            content: '農曆2/3文昌梓潼帝君、2/18九龍大帝、3/4天父東王木公、4/8神農藥王、7/7魁斗星君、7/18天母西王瑤池金母娘娘、12/5金光老祖聖誕慶典。',
            priority: 'normal',
            type: '神明聖誕'
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
            image: 'src/assets/god-jiulong.jpg',
            description: '九龍下降八鳳齊共收圓，大帝上台乾坤扭轉到歸一。',
            role: '主神',
            power: '乾坤歸一、八鳳共圓',
            seal: '主神',
            isMain: true
        },
        {
            name: '瑶池金母',
            image: 'src/assets/god-yao-chi-jin-mu.jpg',
            description: '瑤池金仙下降中台收果圓，金母慈慧幻化靈兒渡慈航。',
            role: '配祀',
            power: '慈慧渡化、收果圓滿',
            seal: '母神',
            isMain: false
        },
        {
            name: '東王木公',
            image: 'src/assets/god-mu-gong.jpg',
            description: '東王顯化三教九流道為尊，木公收圓五湖四海靈皆歸。',
            role: '配祀',
            power: '三教統攝、四海歸真',
            seal: '帝君',
            isMain: false
        },
        {
            name: '神農藥王',
            image: 'src/assets/god-shen-nong.jpg',
            description: '神農慈悲賜藥炁，農士工商皆平等，藥炁轉化蓮花心，王族庶民無分別。',
            role: '配祀',
            power: '藥炁濟世、平等慈悲',
            seal: '藥王',
            isMain: false
        },
        {
            name: '福德正神',
            image: 'src/assets/god-tu-di-gong.jpg',
            description: '福德正神安社稷，土地護佑萬家春，財庫廣開添福壽，慈心應化濟黎民。',
            role: '配祀',
            power: '護境賜福、安宅興財',
            seal: '正神',
            isMain: false
        },
        {
            name: '金光老祖',
            image: 'src/assets/god-jin-guang.jpg',
            description: '金光護體照玄門，老祖垂慈定道魂，驅邪化煞開明路，法炁長存引善根。',
            role: '配祀',
            power: '金光護體、驅邪開道',
            seal: '仙師',
            isMain: false
        },
        {
            name: '魁斗星君',
            image: 'src/assets/god-kui-dou.jpg',
            description: '魁星點斗天機顯，星宿之首領七星，獨占鰲頭點狀元，功名官運因果論。',
            role: '配祀',
            power: '點斗顯機、功名官運',
            seal: '星君',
            isMain: false
        },
        {
            name: '中央混元黃老君',
            image: 'src/assets/god-central-ancestor.jpg',
            description: '五方五老源木公，五老之首黃老君，中央混元一炁在，黃老渡化存道心。',
            role: '配祀',
            power: '混元一炁、渡化存心',
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

function initContactForm() {
    const form = document.getElementById('contactEmailForm');
    if (!form) return;

    const feedback = document.getElementById('contactFormFeedback');
    const recipient = 'jiulongdian2009@gmail.com';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const category = String(formData.get('category') || '').trim();
        const senderEmail = String(formData.get('senderEmail') || '').trim();
        const subject = String(formData.get('subject') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!category || !senderEmail || !subject || !message) {
            if (feedback) {
                feedback.textContent = '請完整填寫分類、電子郵件、主旨與內容後再寄送。';
            }
            return;
        }

        const mailSubject = `[${category}] ${subject}`;
        const mailBody = [
            `聯絡分類：${category}`,
            `寄件者信箱：${senderEmail}`,
            '',
            '聯絡內容：',
            message
        ].join('\n');

        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

        if (feedback) {
            feedback.textContent = '正在為你開啟寄信視窗，若未跳出可檢查裝置是否已設定電子郵件程式。';
        }

        window.location.href = mailtoUrl;
    });
}

function initFestivalCalendar() {
    const calendarGrid = document.getElementById('festivalCalendarGrid');
    const calendarTitle = document.getElementById('calendarTitle');
    const calendarEvents = document.getElementById('festivalCalendarEvents');
    const prevButton = document.getElementById('calendarPrevMonth');
    const nextButton = document.getElementById('calendarNextMonth');
    const todayButton = document.getElementById('calendarTodayButton');

    if (!calendarGrid || !calendarTitle || !calendarEvents || !prevButton || !nextButton || !todayButton) {
        return;
    }

    const now = new Date();
    let currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const birthdayDefinitions = [
        { name: '文昌梓潼帝君聖誕', lunarMonth: 2, lunarDay: 3 },
        { name: '九龍大帝聖誕', lunarMonth: 2, lunarDay: 18 },
        { name: '天父東王木公降生聖誕', lunarMonth: 3, lunarDay: 4 },
        { name: '神農葯王聖誕', lunarMonth: 4, lunarDay: 8 },
        { name: '魁斗星君聖誕', lunarMonth: 7, lunarDay: 7 },
        { name: '天母西王瑤池金母娘娘聖誕', lunarMonth: 7, lunarDay: 18 },
        { name: '金光老祖聖誕', lunarMonth: 12, lunarDay: 5 }
    ];

    const chineseCalendarFormatter = new Intl.DateTimeFormat('zh-TW-u-ca-chinese', {
        month: 'numeric',
        day: 'numeric'
    });

    const weekdayLabels = ['日', '一', '二', '三', '四', '五', '六'];

    prevButton.addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        renderCalendar();
    });

    todayButton.addEventListener('click', () => {
        currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        renderCalendar();
    });

    function renderCalendar() {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const firstWeekday = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        const birthdayMap = buildBirthdayMap(year);

        calendarTitle.textContent = `${year} 年 ${month + 1} 月`;

        const cells = [];

        weekdayLabels.forEach((label) => {
            cells.push(`<div class="calendar-weekday">${label}</div>`);
        });

        for (let i = firstWeekday - 1; i >= 0; i -= 1) {
            const date = new Date(year, month - 1, daysInPrevMonth - i);
            cells.push(renderDayCell(date, true, birthdayMap));
        }

        for (let day = 1; day <= daysInMonth; day += 1) {
            const date = new Date(year, month, day);
            cells.push(renderDayCell(date, false, birthdayMap));
        }

        const totalDayCells = cells.length - weekdayLabels.length;
        const trailingDays = (7 - (totalDayCells % 7)) % 7;
        for (let day = 1; day <= trailingDays; day += 1) {
            const date = new Date(year, month + 1, day);
            cells.push(renderDayCell(date, true, birthdayMap));
        }

        calendarGrid.innerHTML = cells.join('');
        renderMonthlyEventList(year, month, birthdayMap);
    }

    function renderDayCell(date, isOtherMonth, birthdayMap) {
        const key = formatDateKey(date);
        const lunarInfo = getLunarMonthDay(date);
        const dayEvents = birthdayMap.get(key) || [];
        const isToday = isSameDate(date, now);
        const classNames = [
            'calendar-day',
            isOtherMonth ? 'is-other-month' : '',
            isToday ? 'is-today' : '',
            dayEvents.length > 0 ? 'is-festival' : ''
        ].filter(Boolean).join(' ');

        const badge = dayEvents.length > 0 ? '<span class="calendar-day-badge">祝壽</span>' : '';
        const eventsMarkup = dayEvents.length > 0
            ? `<div class="calendar-day-events">${dayEvents.map((event) => `<div class="calendar-event-pill">${event.name}</div>`).join('')}</div>`
            : '';

        return `
            <div class="${classNames}">
                <div class="calendar-day-number">${date.getDate()}</div>
                <div class="calendar-day-lunar">農曆 ${lunarInfo.month}月${lunarInfo.day}日</div>
                ${badge}
                ${eventsMarkup}
            </div>
        `;
    }

    function renderMonthlyEventList(year, month, birthdayMap) {
        const entries = Array.from(birthdayMap.entries())
            .map(([key, events]) => ({
                key,
                date: parseDateKey(key),
                events
            }))
            .filter((entry) => entry.date.getFullYear() === year && entry.date.getMonth() === month)
            .sort((a, b) => a.date - b.date);

        if (entries.length === 0) {
            calendarEvents.innerHTML = `
                <div class="calendar-event-card empty">
                    <span class="calendar-event-date">${year} 年 ${month + 1} 月</span>
                    <p class="calendar-event-name">本月沒有預設的神明祝壽日。</p>
                </div>
            `;
            return;
        }

        calendarEvents.innerHTML = entries.map((entry) => `
            <div class="calendar-event-card">
                <span class="calendar-event-date">${entry.date.getFullYear()} 年 ${entry.date.getMonth() + 1} 月 ${entry.date.getDate()} 日</span>
                <p class="calendar-event-name">${entry.events.map((event) => event.name).join('、')}</p>
            </div>
        `).join('');
    }

    function buildBirthdayMap(year) {
        const map = new Map();
        const start = new Date(year, 0, 1);
        const end = new Date(year, 11, 31);

        for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
            const date = new Date(cursor);
            const lunarInfo = getLunarMonthDay(date);
            const matches = birthdayDefinitions.filter((festival) =>
                festival.lunarMonth === lunarInfo.month && festival.lunarDay === lunarInfo.day
            );

            if (matches.length > 0) {
                map.set(formatDateKey(date), matches);
            }
        }

        return map;
    }

    function getLunarMonthDay(date) {
        const parts = chineseCalendarFormatter.formatToParts(date);
        const monthPart = parts.find((part) => part.type === 'month');
        const dayPart = parts.find((part) => part.type === 'day');

        return {
            month: normalizeChineseNumber(monthPart ? monthPart.value : ''),
            day: normalizeChineseNumber(dayPart ? dayPart.value : '')
        };
    }

    function normalizeChineseNumber(value) {
        const cleaned = String(value).replace(/[^0-9一二三四五六七八九十正冬臘閏]/g, '');
        const withoutLeap = cleaned.replace(/^閏/, '');

        if (/^\d+$/.test(withoutLeap)) {
            return Number(withoutLeap);
        }

        const specialMap = {
            正: 1,
            冬: 11,
            臘: 12
        };

        if (specialMap[withoutLeap]) {
            return specialMap[withoutLeap];
        }

        const charMap = {
            一: 1,
            二: 2,
            三: 3,
            四: 4,
            五: 5,
            六: 6,
            七: 7,
            八: 8,
            九: 9
        };

        if (withoutLeap === '十') return 10;
        if (withoutLeap.startsWith('十')) {
            return 10 + (charMap[withoutLeap.slice(1)] || 0);
        }
        if (withoutLeap.endsWith('十')) {
            return (charMap[withoutLeap[0]] || 0) * 10;
        }
        if (withoutLeap.includes('十')) {
            const [tens, ones] = withoutLeap.split('十');
            return (charMap[tens] || 0) * 10 + (charMap[ones] || 0);
        }

        return charMap[withoutLeap] || 0;
    }

    function formatDateKey(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${month}-${day}`;
    }

    function parseDateKey(key) {
        const [year, month, day] = key.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    function isSameDate(a, b) {
        return a.getFullYear() === b.getFullYear()
            && a.getMonth() === b.getMonth()
            && a.getDate() === b.getDate();
    }

    renderCalendar();
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
            title: '神聖誕日慶典',
            date: '全年度',
            description: '農曆2/3文昌梓潼帝君、2/18九龍大帝、3/4天父東王木公、4/8神農藥王、7/7魁斗星君、7/18天母西王瑤池金母娘娘、12/5金光老祖聖誕',
            image: '🐲',
            type: 'major'
        },
        {
            title: '新春太歲燈禮斗安奉',
            date: '農曆新年',
            description: '新春期間為信眾安奉太歲燈與禮斗，祈求新年平安順遂',
            image: '🏮',
            type: 'seasonal'
        },
        {
            title: '九龍大帝聖誕慶典',
            date: '農曆2月18日',
            description: '本殿主神九龍大帝聖誕盛典，全年最重要的宗教慶典',
            image: '🐉',
            type: 'major'
        },
        {
            title: '中元普渡法會',
            date: '農曆7月15日',
            description: '中元節普渡法會，超度亡靈、祈求平安，廣施功德',
            image: '🕯️',
            type: 'traditional'
        },
        {
            title: '年末謝斗科儀',
            date: '年末舉行',
            description: '年末感謝神恩的謝斗科儀，為來年祈福',
            image: '🪭',
            type: 'seasonal'
        }
    ];

    const eventsHTML = eventsData.map((event, index) => `
        <div class="event-card loading ${event.type}" style="animation-delay: ${index * 0.1}s">
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

// 潑墨轉場效果
function initInkDropTransition() {
    const inkContainer = document.querySelector('.ink-drop-transition');
    const heroSection = document.querySelector('.hero');
    
    if (!inkContainer || !heroSection) return;
    
    let isInkActive = false;
    let lastScrollTop = 0;
    
    // 監聽滾動事件，觸發潑墨效果
    window.addEventListener('scroll', debounce(function() {
        const scrollTop = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const scrollPercent = scrollTop / heroHeight;
        
        // 當從首頁向下滾動時觸發潑墨效果
        if (scrollTop > lastScrollTop && scrollPercent > 0.1 && scrollPercent < 0.9 && !isInkActive) {
            triggerInkDrop();
        }
        
        lastScrollTop = scrollTop;
    }, 100));
    
    // 創建潑墨滴落效果
    function triggerInkDrop() {
        if (isInkActive) return;
        isInkActive = true;
        
        // 創建多個墨滴
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createInkDrop();
            }, i * 200);
        }
        
        // 3秒後重置，允許再次觸發
        setTimeout(() => {
            isInkActive = false;
        }, 3000);
    }
    
    // 創建單個墨滴
    function createInkDrop() {
        const inkDrop = document.createElement('div');
        inkDrop.className = 'ink-drop';
        
        // 隨機位置
        const leftPos = 10 + Math.random() * 80; // 10% 到 90% 的位置
        inkDrop.style.left = leftPos + '%';
        inkDrop.style.top = '-20px';
        
        // 隨機大小
        const size = 3 + Math.random() * 5;
        inkDrop.style.width = size + 'px';
        inkDrop.style.height = size + 'px';
        
        // 隨機動畫延遲
        inkDrop.style.animationDelay = Math.random() * 0.5 + 's';
        
        inkContainer.appendChild(inkDrop);
        
        // 當墨滴到達底部時創建濺射效果
        setTimeout(() => {
            createInkSplash(leftPos);
        }, 2500);
        
        // 動畫結束後移除元素
        setTimeout(() => {
            if (inkDrop.parentNode) {
                inkDrop.remove();
            }
        }, 3000);
    }
    
    // 創建墨水濺射效果
    function createInkSplash(leftPos) {
        const splash = document.createElement('div');
        splash.className = 'ink-splash';
        splash.style.left = (leftPos - 5) + '%'; // 稍微偏移一點
        
        // 隨機大小的濺射
        const splashSize = 80 + Math.random() * 60;
        splash.style.width = splashSize + 'px';
        splash.style.height = (splashSize / 2) + 'px';
        
        inkContainer.appendChild(splash);
        
        // 移除濺射效果
        setTimeout(() => {
            if (splash.parentNode) {
                splash.remove();
            }
        }, 1000);
    }
    
    // 不在頁面載入時自動觸發，只有滾動時才觸發
}

// 滾動鯉魚動畫
function initScrollFish() {
    const scrollFish = document.querySelector('.scroll-fish');
    const historySection = document.querySelector('.history');
    
    if (!scrollFish || !historySection) return;
    
    // 創建Intersection Observer來檢測元素是否在視窗中
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollFish.classList.add('in-view');
            } else {
                scrollFish.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.3, // 當30%的區域可見時觸發
        rootMargin: '0px 0px -100px 0px' // 提前觸發
    });
    
    observer.observe(historySection);
    
    // 滾動時的額外動畫效果
    let ticking = false;
    
    function updateFishPosition() {
        if (!historySection.getBoundingClientRect) return;
        
        const rect = historySection.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, 
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        ));
        
        if (scrollPercent > 0 && scrollPercent < 1) {
            // 根據滾動進度調整魚的位置和動畫
            const translateY = (scrollPercent - 0.5) * 100; // -50px to 50px
            const rotate = (scrollPercent - 0.5) * 20; // -10deg to 10deg
            const scale = 0.8 + (scrollPercent * 0.4); // 0.8 to 1.2
            
            scrollFish.style.transform = `
                scaleX(-1) scaleY(-1) 
                translateY(${translateY}px) 
                rotate(${rotate}deg) 
                scale(${scale})
            `;
            
            // 調整透明度 - 提高基礎透明度
            scrollFish.style.opacity = 0.7 + (scrollPercent * 0.25); // 0.7 to 0.95
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateFishPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
    
    // 添加滑鼠懸停效果
    scrollFish.addEventListener('mouseenter', function() {
        this.style.transform += ' scale(1.3)';
        this.style.opacity = '1';
        this.style.filter = 'drop-shadow(0 8px 20px rgba(139, 69, 19, 0.6)) brightness(1.2) contrast(1.2)';
    });
    
    scrollFish.addEventListener('mouseleave', function() {
        this.style.transform = this.style.transform.replace(' scale(1.3)', '');
        this.style.filter = 'drop-shadow(0 4px 12px rgba(139, 69, 19, 0.4)) brightness(1.1) contrast(1.1)';
    });
}
