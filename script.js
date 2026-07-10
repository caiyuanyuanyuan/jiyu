// ========== 歌曲列表（17首合作曲） ==========
const songList = [
    '2018 试训时期《泡沫》',
    '2018.8.29《改变自己》',
    '2020.7.3《Because of you》',
    '2020.11.6《只对你有感觉》',
    '2022.2.3《R&B all right》',
    '2022.10.24《决爱》',
    '2023.1.26《流浪记》',
    '2023.4.16《Rolling In The Deep》',
    '2023.8.13《连名带姓》',
    '2024.2.3/4《勇敢》',
    '2024.2.3/4《Bite me》',
    '2024.8.10《笼》',
    '2024.8.25《Paris In The Rain》',
    '2024.8.25《Senorita》',
    '2025.5.2《不值得》',
    '2025.8.30《过》',
    '2026.2.1《暗香》'
];

let tripleClickTimer = null;
let tripleClickCount = 0;

// ========== 页面初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initBigStars();
    initSongRain();
    initTimeline();
    initMusic();
    initPhotoClick();
    initSidebar();
    initCheckin();
    
    // 开屏结束显示主页
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('mainPage').classList.remove('hidden');
    }, 2500);

    // 首次点击播放音乐
    document.body.addEventListener('click', function firstClick() {
        const music = document.getElementById('bgMusic');
        if (music.paused) {
            music.play().catch(() => {});
            document.getElementById('musicBtn').classList.add('playing');
        }
        document.body.removeEventListener('click', firstClick);
    }, { once: true });
});

// ========== 小星星氛围 ==========
function initStars() {
    const layer = document.getElementById('starsLayer');
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star-item';
        star.textContent = '✦';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = (8 + Math.random() * 14) + 'px';
        star.style.animationDuration = (3 + Math.random() * 4) + 's, ' + (2 + Math.random() * 3) + 's';
        star.style.animationDelay = Math.random() * 3 + 's, ' + Math.random() * 2 + 's';
        star.style.opacity = 0.4 + Math.random() * 0.6;
        layer.appendChild(star);
    }
}

// ========== 大际遇星横向飘过 ==========
function initBigStars() {
    const layer = document.getElementById('bigStarsLayer');
    
    function spawnBigStar() {
        const star = document.createElement('div');
        star.className = 'big-star';
        star.textContent = '✦';
        star.style.top = (10 + Math.random() * 75) + '%';
        star.style.fontSize = (22 + Math.random() * 18) + 'px';
        star.style.animationDuration = (12 + Math.random() * 10) + 's';
        layer.appendChild(star);
        setTimeout(() => star.remove(), 22000);
    }
    
    for (let i = 0; i < 3; i++) {
        setTimeout(spawnBigStar, i * 3000);
    }
    setInterval(spawnBigStar, 5000);
}

// ========== 歌曲碎片+花瓣雨 ==========
function initSongRain() {
    const layer = document.getElementById('songRain');
    
    function spawnCard() {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.textContent = songList[Math.floor(Math.random() * songList.length)];
        card.style.left = Math.random() * 92 + '%';
        card.style.animationDuration = (8 + Math.random() * 8) + 's';
        card.style.fontSize = (10 + Math.random() * 4) + 'px';
        card.style.opacity = 0.5 + Math.random() * 0.4;
        const rotateDir = Math.random() > 0.5 ? 1 : -1;
        card.style.transform = `rotate(${rotateDir * Math.random() * 20}deg)`;
        layer.appendChild(card);
        setTimeout(() => card.remove(), 16000);
    }
    
    function spawnPetal() {
        const petal = document.createElement('div');
        petal.className = 'rain-petal';
        const petals = ['🌸', '💮', '💗', '💕'];
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (6 + Math.random() * 6) + 's';
        petal.style.fontSize = (12 + Math.random() * 10) + 'px';
        layer.appendChild(petal);
        setTimeout(() => petal.remove(), 12000);
    }
    
    // 初始生成
    for (let i = 0; i < 8; i++) {
        setTimeout(spawnCard, i * 600);
    }
    for (let i = 0; i < 5; i++) {
        setTimeout(spawnPetal, i * 800 + 200);
    }
    
    // 持续生成
    setInterval(spawnCard, 1200);
    setInterval(spawnPetal, 1800);
}

// ========== 际遇星盘时光轴（圆形排列，点击弹出歌曲+图片） ==========
function initTimeline() {
    const container = document.getElementById('timelineDots');
    const modal = document.getElementById('songModal');
    const songImg = document.getElementById('songImg');
    const songName = document.getElementById('songName');
    const closeBtn = document.getElementById('songClose');
    
    // 歌曲图片文件名（对应 songList 顺序）
    const songImgNames = [
        '泡沫.jpg',
        '改变自己.jpg',
        'Because of you.jpg',
        '只对你有感觉.jpg',
        'R&B all right.jpg',
        '决爱.jpg',
        '流浪记.jpg',
        'Rolling In The Deep.jpg',
        '连名带姓.jpg',
        '勇敢.jpg',
        'Bite me.jpg',
        '笼.jpg',
        'Paris In The Rain.jpg',
        'Senorita.jpg',
        '不值得.jpg',
        '过.jpg',
        '暗香.jpg'
    ];
    
    // 中间大星
    const center = document.createElement('div');
    center.className = 'timeline-center';
    center.textContent = '✦';
    container.appendChild(center);
    
    const radius = 80; // 圆环半径
    const total = 17;
    
    for (let i = 0; i < total; i++) {
        const angle = (Math.PI * 2 / total) * i - Math.PI / 2; // 从正上方开始
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        dot.dataset.index = i;
        dot.style.transform = `translate(${x}px, ${y}px)`;
        
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            const idx = parseInt(this.dataset.index);
            songImg.src = songImgNames[idx];
            songImg.style.display = 'block';
            songName.textContent = songList[idx];
            modal.classList.remove('hidden');
            
            // 点击的点亮一下
            this.classList.add('lit');
            setTimeout(() => this.classList.remove('lit'), 700);
        });
        
        container.appendChild(dot);
    }
    
    // 自动随机点亮
    setInterval(() => {
        const dots = document.querySelectorAll('.timeline-dot');
        const randomDot = dots[Math.floor(Math.random() * dots.length)];
        randomDot.classList.add('lit');
        setTimeout(() => randomDot.classList.remove('lit'), 900);
    }, 450);
    
    // 关闭弹窗
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

// ========== 音乐选择器 ==========
function initMusic() {
    const btn = document.getElementById('musicBtn');
    const menu = document.getElementById('musicMenu');
    const music = document.getElementById('bgMusic');
    const items = document.querySelectorAll('.menu-item');
    
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('hidden');
    });
    
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const src = this.dataset.src;
            
            items.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            music.src = src;
            music.play();
            btn.classList.add('playing');
            menu.classList.add('hidden');
        });
    });
    
    document.addEventListener('click', function() {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
}

// ========== 合照点击 + 三击彩蛋 ==========
function initPhotoClick() {
    const photo = document.getElementById('couplePhoto');
    
    photo.addEventListener('click', function(e) {
        const rect = photo.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        
        // 三击检测
        tripleClickCount++;
        clearTimeout(tripleClickTimer);
        tripleClickTimer = setTimeout(() => {
            tripleClickCount = 0;
        }, 800);
        
        if (tripleClickCount >= 2) {
            tripleClickCount = 0;
            triggerEaster();
            return;
        }
        
        burstHearts(cx, cy);
    });
}

function burstHearts(cx, cy) {
    const container = document.getElementById('heartBurst');
    const hearts = ['💗', '💕', '💖', '💝', '🌸', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const h = document.createElement('div');
        h.className = 'burst-heart';
        h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = cx + 'px';
        h.style.top = cy + 'px';
        
        const angle = (Math.PI * 2 / 20) * i + Math.random() * 0.4;
        const dist = 80 + Math.random() * 120;
        h.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        h.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        h.style.animationDelay = Math.random() * 0.3 + 's';
        h.style.fontSize = (16 + Math.random() * 14) + 'px';
        
        container.appendChild(h);
        setTimeout(() => h.remove(), 2500);
    }
}

// ========== 三击彩蛋 ==========
function triggerEaster() {
    const modal = document.getElementById('easterModal');
    modal.classList.remove('hidden');
    
    // 满屏爱心花瓣
    const container = document.getElementById('petalBurst');
    const items = ['💗', '💕', '🌸', '💮', '✨', '💖'];
    
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-petal';
        p.textContent = items[Math.floor(Math.random() * items.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (2 + Math.random() * 2.5) + 's';
        p.style.animationDelay = Math.random() * 0.8 + 's';
        p.style.fontSize = (14 + Math.random() * 16) + 'px';
        container.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 2500);
}

// ========== 请柬侧边栏 ==========
function initSidebar() {
    const btn = document.getElementById('inviteBtn');
    const sidebar = document.getElementById('inviteSidebar');
    const closeBtn = document.getElementById('inviteClose');
    
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
    });
    
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.remove('open');
    });
}

// ========== 签到 ==========
function initCheckin() {
    const btn = document.getElementById('checkinBtn');
    const modal = document.getElementById('checkinModal');
    
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        let firstDate = localStorage.getItem('jiyu_first_date');
        if (!firstDate) {
            firstDate = new Date().toISOString().split('T')[0];
            localStorage.setItem('jiyu_first_date', firstDate);
        }
        
        const first = new Date(firstDate);
        const today = new Date();
        const diffDays = Math.floor((today - first) / (1000 * 60 * 60 * 24)) + 1;
        document.getElementById('daysCount').textContent = diffDays;
        
        let total = parseInt(localStorage.getItem('jiyu_checkin_total') || '0');
        const lastCheckin = localStorage.getItem('jiyu_last_checkin');
        const todayStr = today.toISOString().split('T')[0];
        
        if (lastCheckin !== todayStr) {
            total++;
            localStorage.setItem('jiyu_checkin_total', total);
            localStorage.setItem('jiyu_last_checkin', todayStr);
            spawnPetalConfetti();
        }
        
        document.getElementById('totalCheckin').textContent = total;
        modal.classList.remove('hidden');
    });
    
    document.getElementById('checkinOk').addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

function spawnPetalConfetti() {
    const container = document.getElementById('petalBurst');
    const items = ['🌸', '💮', '💗', '💕', '✨'];
    const colors = ['#ffb8d1', '#ff94b8', '#ffd6e5', '#fff0f5', '#ffc8dd'];
    
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-petal';
        p.textContent = items[Math.floor(Math.random() * items.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (2 + Math.random() * 2) + 's';
        p.style.animationDelay = Math.random() * 0.5 + 's';
        p.style.fontSize = (12 + Math.random() * 14) + 'px';
        container.appendChild(p);
        setTimeout(() => p.remove(), 4500);
    }
}