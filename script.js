// ========== 歌曲列表（17首合作曲） ==========
const songList = [
    '2018 试训时期《泡沫》',
    '2018.8.29《改变自己》',
    '2020.7.3《Because of you》',
    '2020.11.6《只对你有感觉》',
    '2022.2.3《R&B all right》',
    '2022.10.24《诀爱》',
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
// 不参与歌词挑战的歌曲索引
const noChallengeSongs = [2, 4, 7, 10, 12, 13];

// 歌词挑战题库（索引对应 songList）
const lyricData = {
    0: { // 泡沫
        lines: [
            { text: '美丽的泡沫 虽然一刹____', answer: '花火' },
            { text: '你所有承诺 虽然都太脆弱', answer: '' },
            { text: '爱本是泡沫 如果能够看破 有什么____', answer: '难过' },
            { text: '再美的花朵 盛开过就____', answer: '凋落' },
            { text: '再亮眼的星 一闪过就坠落', answer: '' }
        ]
    },
    1: { // 改变自己
        lines: [
            { text: '我可以改变世界 ____', answer: '改变自己' },
            { text: '改变隔膜 改变小气', answer: '' },
            { text: '要一直 努力努力 ____', answer: '永不放弃' },
            { text: '才可以改变世界 Come on ____', answer: '改变自己' }
        ]
    },
    3: { // 只对你有感觉
        lines: [
            { text: '微笑再美再甜 不是你的都不特别', answer: '' },
            { text: '眼泪再苦再咸 有你安慰又是____', answer: '晴天' },
            { text: '靠的再近再贴 少了拥抱就算太远', answer: '' },
            { text: '全世界只对你有____', answer: '感觉' },
            { text: '玩的再疯再野 你瞪一眼我就____', answer: '收敛' }
        ]
    },
    5: { // 诀爱
        lines: [
            { text: '等天崩地裂的那一瞬间', answer: '' },
            { text: '待坍塌破碎了睁开双眼', answer: '' },
            { text: '无处安放____ 只能降落', answer: '灵魂' },
            { text: '拔情诀爱的最后', answer: '' },
            { text: '指尖缠绕的____', answer: '温柔' },
            { text: '化作一把锋利剑 刺向了我', answer: '' },
            { text: '说再见____ 开不了口的惋惜', answer: '来不及' }
        ]
    },
    6: { // 流浪记
        lines: [
            { text: '怎样才能够看穿面具里的____', answer: '谎话' },
            { text: '别让我的真心散的像____', answer: '沙' },
            { text: '如果有一天我变得更____', answer: '复杂' },
            { text: '还能不能唱出歌声里的puyuma', answer: '' }
        ]
    },
    8: { // 连名带姓
        lines: [
            { text: '再被你提起 已是连名带姓', answer: '' },
            { text: '谎称是友谊 却疏远得可以', answer: '' },
            { text: '多少人爱我 偏放不下你', answer: '' },
            { text: '是公开的____', answer: '秘密' },
            { text: '算不清多少个____一起过', answer: '跨年夜' },
            { text: '我且爱且走 其实在等你', answer: '' },
            { text: '是仅有的____', answer: '默契' }
        ]
    },
    9: { // 勇敢
        lines: [
            { text: '是我勇敢太久', answer: '' },
            { text: '决定为你一个人而活', answer: '' },
            { text: '不能说出口 那么____', answer: '折磨' },
            { text: '勇敢了太久 城市充满短暂的____', answer: '烟火' },
            { text: '无处躲', answer: '' },
            { text: '照亮了沉默', answer: '' },
            { text: '明白是____', answer: '寂寞' }
        ]
    },
    11: { // 笼
        lines: [
            { text: '为何绚烂 叫人扑空', answer: '' },
            { text: '为何爱我者予我____', answer: '牢笼' },
            { text: '为何等待 都徒劳无功', answer: '' },
            { text: '为何囚人者也像____', answer: '困兽' },
            { text: '越珍贵 越浪费', answer: '' },
            { text: '致命的伤 诞生于____', answer: '亲密' }
        ]
    },
    14: { // 不值得
        lines: [
            { text: '这感情不值得我犹豫', answer: '' },
            { text: '不值得我考虑', answer: '' },
            { text: '不值得我爱过你', answer: '' },
            { text: '不值得想起', answer: '' },
            { text: '不值得____', answer: '哭泣' },
            { text: '这段感情早就应该放弃', answer: '' },
            { text: '早就不该让我浪费时间找____', answer: '奇迹' },
            { text: '我决定不为你而____ 放弃爱你', answer: '毁了心' }
        ]
    },
    15: { // 过
        lines: [
            { text: '爱情自带寂寞', answer: '' },
            { text: '爱情各种____', answer: '错过' },
            { text: '却在多年以后 还想回头', answer: '' },
            { text: '不见天日的____', answer: '伤口' },
            { text: '残留的快乐是无底漩涡', answer: '' },
            { text: '没有如果的____', answer: '结果' },
            { text: '我来不及说的话在永远里沉没', answer: '' }
        ]
    },
    16: { // 暗香
        lines: [
            { text: '当花瓣离开花朵 暗香残留', answer: '' },
            { text: '如果爱告诉我走下去', answer: '' },
            { text: '我会拼到____', answer: '爱尽头' },
            { text: '心若在灿烂中死去', answer: '' },
            { text: '爱会在灰烬里____', answer: '重生' },
            { text: '难忘缠绵细语时', answer: '' },
            { text: '用你笑容为我____', answer: '祭奠' }
        ]
    }
};

// 全局状态
let unlockedSongs = JSON.parse(localStorage.getItem('jiyu_unlocked') || '[]');
let sequenceProgress = parseInt(localStorage.getItem('jiyu_sequence') || '0');
let lyricDone = JSON.parse(localStorage.getItem('jiyu_lyric_done') || '[]');
let currentSongIndex = -1;
let lastBgmSrc = 'bite me.ogg';
let tripleClickTimer = null;
let tripleClickCount = 0;

// ========== 页面初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initBigStars();
    initSongRain();
    initTypewriter(); 
    initTimeline();
    initMusic();
    initPhotoClick();
    initSidebar();
    initInviteName(); // 新增
    initLyricChallenge(); // 新增
    initBanquetPage();
    
    // 恢复专属背景
    if (localStorage.getItem('jiyu_special_bg') === '1') {
        document.body.classList.add('special-bg');
    }
    
    // 开屏结束显示主页
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('mainPage').classList.remove('hidden');
    }, 3500);

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

// ========== 际遇星盘时光轴（新版：解锁+进度+连线） ==========
function initTimeline() {
    const container = document.getElementById('timelineDots');
    const modal = document.getElementById('songModal');
    const songImg = document.getElementById('songImg');
    const songName = document.getElementById('songName');
    const closeBtn = document.getElementById('songClose');
    const challengeBtn = document.getElementById('lyricChallengeBtn');
    const lineCanvas = document.getElementById('lineCanvas');
    
    const songImgNames = [
        '泡沫.jpg', '改变自己.jpg', 'Because of you.jpg',
        '只对你有感觉.jpg', 'R&B all right.jpg', '诀爱.jpg',
        '流浪记.jpg', 'Rolling In The Deep.jpg', '连名带姓.jpg',
        '勇敢.jpg', 'Bite me.jpg', '笼.jpg',
        'Paris In The Rain.jpg', 'Senorita.jpg', '不值得.jpg',
        '过.jpg', '暗香.jpg'
    ];
    
    // 中间大星
    const center = document.createElement('div');
    center.className = 'timeline-center';
    center.textContent = '✦';
    container.appendChild(center);
    
    const radius = 80;
    const total = 17;
    const dots = [];
    
    // 生成光点
    for (let i = 0; i < total; i++) {
        const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        dot.dataset.index = i;
        dot.style.setProperty('--x', x + 'px');
        dot.style.setProperty('--y', y + 'px');
        dot.style.transform = `translate(${x}px, ${y}px)`;
        
        // 恢复已解锁状态
        if (unlockedSongs.includes(i)) {
            dot.classList.add('unlocked');
        }
        
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            const idx = parseInt(this.dataset.index);
            currentSongIndex = idx;
            
            // 解锁逻辑
            if (!unlockedSongs.includes(idx)) {
                unlockedSongs.push(idx);
                localStorage.setItem('jiyu_unlocked', JSON.stringify(unlockedSongs));
                this.classList.add('unlocked');
                updateProgress();
                updateUnlockCards();
                checkAllUnlocked();
            }
            
            // 顺序连线逻辑
            if (idx === sequenceProgress) {
                sequenceProgress++;
                localStorage.setItem('jiyu_sequence', sequenceProgress);
                drawLines();
                if (sequenceProgress >= total) {
                    unlockSpecialBg();
                }
            } else if (idx !== sequenceProgress - 1) {
                // 点错轻微晃动
                this.style.animation = 'shake 0.3s ease';
                setTimeout(() => this.style.animation = '', 300);
            }
            
            // 当前激活状态
            document.querySelectorAll('.timeline-dot.active').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // 打开弹窗
            songImg.src = songImgNames[idx];
            songImg.style.display = 'block';
            songName.textContent = songList[idx];
            modal.classList.remove('hidden');
            
            // 挑战按钮显示控制
            if (noChallengeSongs.includes(idx)) {
                challengeBtn.classList.add('hidden');
            } else {
                challengeBtn.classList.remove('hidden');
                if (lyricDone.includes(idx)) {
                    challengeBtn.classList.add('done');
                    challengeBtn.textContent = '已通关 ✨';
                } else {
                    challengeBtn.classList.remove('done');
                    challengeBtn.textContent = '来挑战歌词 ✨';
                }
            }
        });
        
        dots.push(dot);
        container.appendChild(dot);
    }
    
    // 初始化连线
    drawLines();
    
    // 双击中心大星重置连线
    center.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        sequenceProgress = 0;
        localStorage.setItem('jiyu_sequence', '0');
        drawLines();
    });
    
    // 关闭弹窗清除激活
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.add('hidden');
        document.querySelectorAll('.timeline-dot.active').forEach(d => d.classList.remove('active'));
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.querySelectorAll('.timeline-dot.active').forEach(d => d.classList.remove('active'));
        }
    });
    
    // 初始化进度和封面栏
    updateProgress();
    updateUnlockCards();
}

// 绘制连线
function drawLines() {
    const canvas = document.getElementById('lineCanvas');
    const radius = 80;
    const total = 17;
    const centerX = 90; // 180px容器的一半
    const centerY = 90;
    
    canvas.innerHTML = '';
    if (sequenceProgress < 2) return;
    
    for (let i = 0; i < sequenceProgress - 1; i++) {
        const angle1 = (Math.PI * 2 / total) * i - Math.PI / 2;
        const angle2 = (Math.PI * 2 / total) * (i + 1) - Math.PI / 2;
        
        const x1 = centerX + Math.cos(angle1) * radius;
        const y1 = centerY + Math.sin(angle1) * radius;
        const x2 = centerX + Math.cos(angle2) * radius;
        const y2 = centerY + Math.sin(angle2) * radius;
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        canvas.appendChild(line);
    }
}

// 更新进度条
function updateProgress() {
    const count = unlockedSongs.length;
    document.getElementById('unlockCount').textContent = count;
    document.getElementById('progressFill').style.width = (count / 17 * 100) + '%';
}

// 更新解锁封面栏
function updateUnlockCards() {
    const container = document.getElementById('unlockCards');
    const songImgNames = [
        '泡沫.jpg', '改变自己.jpg', 'Because of you.jpg',
        '只对你有感觉.jpg', 'R&B all right.jpg', '诀爱.jpg',
        '流浪记.jpg', 'Rolling In The Deep.jpg', '连名带姓.jpg',
        '勇敢.jpg', 'Bite me.jpg', '笼.jpg',
        'Paris In The Rain.jpg', 'Senorita.jpg', '不值得.jpg',
        '过.jpg', '暗香.jpg'
    ];
    
    container.innerHTML = '';
    for (let i = 0; i < 17; i++) {
        const card = document.createElement('div');
        card.className = 'mini-card' + (unlockedSongs.includes(i) ? '' : ' locked');
        
        if (unlockedSongs.includes(i)) {
            card.innerHTML = `
                <img src="${songImgNames[i]}" alt="">
                <div class="mini-name">${songList[i].split('《')[1].replace('》', '')}</div>
            `;
            card.addEventListener('click', () => {
                document.querySelectorAll('.timeline-dot')[i].click();
            });
        } else {
            card.textContent = '🔒';
        }
        
        container.appendChild(card);
    }
}

// 检查是否全部解锁
function checkAllUnlocked() {
    if (unlockedSongs.length === 17) {
        triggerFullEaster();
    }
}

// 解锁专属背景
function unlockSpecialBg() {
    document.body.classList.add('special-bg');
    localStorage.setItem('jiyu_special_bg', '1');
}

// ========== 开屏打字机动画 ==========
function initTypewriter() {
    const text = '欢迎来到我们的婚礼星球';
    const el = document.getElementById('splashTypewriter');
    const sub = document.getElementById('splashSub');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
            i++;
            setTimeout(type, 220); // 单字间隔从150ms→220ms，明显放缓
        } else {
            setTimeout(() => {
                sub.classList.remove('hidden');
            }, 400); // 打完后稍作停顿再出副标题
        }
    }
    
    setTimeout(type, 600); // 从1500ms提前到600ms开始，配合光晕扩散
}

// ========== 请柬昵称功能 ==========
function initInviteName() {
    const input = document.getElementById('hostNameInput');
    const saved = localStorage.getItem('jiyu_host_name');
    if (saved) input.value = saved;
    
    input.addEventListener('blur', function() {
        localStorage.setItem('jiyu_host_name', this.value);
    });
    
    input.addEventListener('click', e => e.stopPropagation());
}

// ========== 歌词挑战 ==========
function initLyricChallenge() {
    const modal = document.getElementById('lyricModal');
    const content = document.getElementById('lyricContent');
    const result = document.getElementById('lyricResult');
    const submitBtn = document.getElementById('lyricSubmit');
    const retryBtn = document.getElementById('lyricRetry');
    const closeBtn = document.getElementById('lyricClose');
    const challengeBtn = document.getElementById('lyricChallengeBtn');
    
    challengeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (lyricDone.includes(currentSongIndex)) return;
        openLyricModal();
    });
    
    function openLyricModal() {
        const data = lyricData[currentSongIndex];
        content.innerHTML = '';
        result.textContent = '';
        submitBtn.classList.remove('hidden');
        retryBtn.classList.add('hidden');
        
        data.lines.forEach((line, idx) => {
            const p = document.createElement('p');
            p.className = 'lyric-line';
            
            if (line.answer) {
                p.innerHTML = line.text.replace('____', 
                    `<input type="text" class="lyric-blank" data-answer="${line.answer}" maxlength="6">`);
            } else {
                p.textContent = line.text;
            }
            
            content.appendChild(p);
        });
        
        modal.classList.remove('hidden');
    }
    
    submitBtn.addEventListener('click', function() {
        const inputs = document.querySelectorAll('.lyric-blank');
        let allCorrect = true;
        
        inputs.forEach(input => {
            const correct = input.dataset.answer;
            const val = input.value.trim();
            
            if (val === correct) {
                input.classList.add('correct');
                input.classList.remove('wrong');
            } else {
                input.classList.add('wrong');
                input.classList.remove('correct');
                allCorrect = false;
            }
        });
        
        if (allCorrect) {
            result.textContent = '✨ 答对啦！星光印记已点亮 ✨';
            result.style.color = '#48a87e';
            submitBtn.classList.add('hidden');
            retryBtn.classList.add('hidden');
            
            // 标记完成
            if (!lyricDone.includes(currentSongIndex)) {
                lyricDone.push(currentSongIndex);
                localStorage.setItem('jiyu_lyric_done', JSON.stringify(lyricDone));
                challengeBtn.classList.add('done');
                challengeBtn.textContent = '已通关 ✨';
            }
            
            // 星光动画
            burstStarlight();
        } else {
            result.textContent = '还差一点点哦，再试试吧~';
            result.style.color = '#d9534f';
            submitBtn.classList.add('hidden');
            retryBtn.classList.remove('hidden');
        }
    });
    
    retryBtn.addEventListener('click', function() {
        openLyricModal();
    });
    
    closeBtn.addEventListener('click', e => {
        e.stopPropagation();
        modal.classList.add('hidden');
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

// 答对星光特效
function burstStarlight() {
    const container = document.getElementById('heartBurst');
    for (let i = 0; i < 30; i++) {
        const s = document.createElement('div');
        s.className = 'burst-heart';
        s.textContent = '✨';
        s.style.left = '50%';
        s.style.top = '50%';
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 100;
        s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        s.style.animationDelay = Math.random() * 0.3 + 's';
        s.style.fontSize = (14 + Math.random() * 10) + 'px';
        
        container.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }
}

// ========== 全屏彩蛋（修复关闭问题 + 4秒自动关闭） ==========
let easterCloseTimer = null;

function triggerFullEaster() {
    const modal = document.getElementById('easterModal');
    const music = document.getElementById('bgMusic');
    
    // 先清除之前的定时器，避免重复触发
    if (easterCloseTimer) clearTimeout(easterCloseTimer);
    
    // 记录当前BGM并切换
    lastBgmSrc = music.src.split('/').pop();
    music.src = '流浪记.ogg';
    music.volume = 0.6;
    music.play().catch(() => {});
    
    // 显示彩蛋
    modal.classList.remove('hidden');
    startFireworks();
    
    // 关闭函数
    function closeEaster() {
        if (easterCloseTimer) clearTimeout(easterCloseTimer);
        modal.classList.add('hidden');
        // 恢复原BGM
        music.src = lastBgmSrc;
        music.volume = 1;
        music.play().catch(() => {});
    }
    
    // 4秒后自动关闭
    easterCloseTimer = setTimeout(closeEaster, 8000);
    
    // 点击任意处关闭（只绑定一次）
    modal.onclick = closeEaster;
}

// 烟花动画
function startFireworks() {
    const container = document.getElementById('fireworksContainer');
    const colors = ['#ffb8d1', '#ff94b8', '#fff0f5', '#ffd6e5', '#ffc8dd', '#ffffff'];
    
    function launchFirework() {
        const x = Math.random() * 100;
        const y = 20 + Math.random() * 50;
        
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'firework';
            p.style.left = x + '%';
            p.style.top = y + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.boxShadow = `0 0 6px ${p.style.background}`;
            
            const angle = (Math.PI * 2 / 30) * i;
            const dist = 40 + Math.random() * 40;
            p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
            p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
            p.style.animationDelay = Math.random() * 0.2 + 's';
            
            container.appendChild(p);
            setTimeout(() => p.remove(), 1800);
        }
    }
    
    // 持续放烟花
    const timer = setInterval(launchFirework, 800);
    // 10秒后停止
    setTimeout(() => clearInterval(timer), 10000);
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

// ========== 三击彩 ==========
// 原三击彩蛋保留，触发全屏彩蛋
function triggerEaster() {
    triggerFullEaster();
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

// 清空解锁记录
document.getElementById('resetBtn').addEventListener('click', function() {
    if (!confirm('确定要清空所有解锁记录、连线进度、歌词通关记录吗？')) return;
    
    localStorage.removeItem('jiyu_unlocked');
    localStorage.removeItem('jiyu_sequence');
    localStorage.removeItem('jiyu_lyric_done');
    localStorage.removeItem('jiyu_special_bg');
    
    alert('已清空所有记录！页面即将刷新');
    location.reload();
});

// ====================== 婚宴页面｜JSONBin云端座位同步 ======================
const BIN_ID = "6a562594da38895dfe5ba70a";
const ACCESS_KEY = "$2a$10$WvSYWhjxICFpZAf3.cxEbe/3BjIz1sFB22Pjqnq4uLBJawRI.pR0G";

// 用户唯一ID
let userId = localStorage.getItem("jiyu_star_user_id");
if (!userId) {
    userId = "u_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("jiyu_star_user_id", userId);
}

let seatData = null;
let pendingSeat = null;

// 云端读取座位
async function loadRemoteSeat() {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`);
        if (!res.ok) throw new Error("读取失败");
        const json = await res.json();
        seatData = json.record;
        localStorage.setItem("seatBackup", JSON.stringify(seatData));
        renderAllSeat();
        return true;
    } catch (err) {
        console.warn("云端读取失败", err);
        const backup = localStorage.getItem("seatBackup");
        if(backup) seatData = JSON.parse(backup);
        showTip("⚠️网络异常，加载本地缓存座位");
        renderAllSeat();
        return false;
    }
}

// 云端写入座位（Header使用X-Access-Key 解决401）
async function saveRemoteSeat() {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "X-Access-Key": ACCESS_KEY
            },
            body: JSON.stringify(seatData)
        });
        if (!res.ok) throw new Error("写入失败 "+res.status);
        localStorage.setItem("seatBackup", JSON.stringify(seatData));
        return true;
    } catch(err){
        console.error("座位保存失败",err);
        showTip("❌座位保存失败，请稍后重试");
        return false;
    }
}

// 初始化婚宴页面
function initBanquetPage(){
    const seatBtn = document.getElementById("seatBtn");
    const banquetPage = document.getElementById("banquetPage");
    const backBtn = document.getElementById("banquetBackBtn");
    const refreshBtn = document.getElementById("refreshSeatBtn");
    const confirmModal = document.getElementById("seatConfirmModal");
    const tipModal = document.getElementById("tipModal");
    const confirmCancel = confirmModal.querySelector(".confirm-cancel");
    const confirmOk = confirmModal.querySelector(".confirm-ok");
    const tipOk = tipModal.querySelector(".tip-ok");

    // 生成8个环形座位
    document.querySelectorAll(".round-table").forEach(table=>{
        const ringWrap = table.querySelector(".seats-ring");
        const tableId = table.dataset.table;
        const seatCount = 8;
        const radius = 62;
        for(let i=0;i<seatCount;i++){
            const seat = document.createElement("div");
            seat.className = "seat";
            seat.dataset.table = tableId;
            seat.dataset.seatIdx = i;
            const angle = (Math.PI * 2 / seatCount) * i;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            seat.style.left = `${x}%`;
            seat.style.top = `${y}%`;
            ringWrap.appendChild(seat);

            // 点击空位
            seat.addEventListener("click",async ()=>{
                const tid = seat.dataset.table;
                const sid = Number(seat.dataset.seatIdx);
                await loadRemoteSeat();
                if(!seatData?.seats) return;
                if(seatData.seats[tid][sid] !== null){
                    showTip("该座位已经被占用！");
                    return;
                }
                pendingSeat = {tableId:tid, seatIndex:sid};
                openConfirm();
            });
        }
    });

    // 打开婚宴页面
    seatBtn.addEventListener("click",async ()=>{
        banquetPage.classList.remove("hidden");
        resetEntrance();
        await loadRemoteSeat();
        renderAllSeat();
        startWalkAnimation();
    });
    // 返回主页
    backBtn.addEventListener("click",()=>{
        banquetPage.classList.add("hidden");
        resetEntrance();
    });
    // 手动刷新座位
    refreshBtn.addEventListener("click",async ()=>{
        await loadRemoteSeat();
        showTip("座位已刷新");
    });

    // 确认落座逻辑
    confirmOk.onclick = async ()=>{
        if(!pendingSeat) return;
        const {tableId, seatIndex} = pendingSeat;
        // 清除用户旧座位
        outer: for(let t in seatData.seats){
            const arr = seatData.seats[t];
            for(let i=0;i<arr.length;i++){
                if(arr[i] === userId){
                    arr[i] = null;
                    break outer;
                }
            }
        }
        seatData.seats[tableId][seatIndex] = userId;
        const ok = await saveRemoteSeat();
        if(ok){
            renderAllSeat();
            showTip("落座成功✨");
        }
        confirmModal.classList.add("hidden");
        pendingSeat = null;
    };
    confirmCancel.onclick = ()=>{
        confirmModal.classList.add("hidden");
        pendingSeat = null;
    };
    tipOk.onclick = ()=>tipModal.classList.add("hidden");
}

// 重置入场动画状态
function resetEntrance(){
    const walkGroup = document.getElementById("walkMemberGroup");
    const stageGroup = document.getElementById("stageMemberGroup");
    walkGroup.style.display = "flex";
    stageGroup.classList.add("hidden");
    document.querySelectorAll(".walk-emoji").forEach(em=>{
        em.classList.remove("walk-move");
        void em.offsetWidth;
    });
}

// 启动5秒入场动画
function startWalkAnimation(){
    const walkEmojis = document.querySelectorAll(".walk-emoji");
    const stageGroup = document.getElementById("stageMemberGroup");
    const walkWrap = document.getElementById("walkMemberGroup");
    walkEmojis.forEach(em=>{
        em.classList.add("walk-move");
    });
    // 5秒动画结束切换画面
    setTimeout(() => {
        walkWrap.style.display = "none";
        stageGroup.classList.remove("hidden");
    }, 5000);
}

function openConfirm(){
    document.getElementById("seatConfirmModal").classList.remove("hidden");
}
function showTip(text){
    document.getElementById("tipText").textContent = text;
    document.getElementById("tipModal").classList.remove("hidden");
}

// 渲染全部座位，占用显示✨
function renderAllSeat(){
    if(!seatData?.seats) return;
    document.querySelectorAll(".seat").forEach(seat=>{
        const tid = seat.dataset.table;
        const sid = Number(seat.dataset.seatIdx);
        const occupier = seatData.seats[tid][sid];
        if(occupier !== null){
            seat.classList.add("occupied");
        }else{
            seat.classList.remove("occupied");
        }
    })
}

// ===== 【重点】找到页面初始化DOMContentLoaded函数内部末尾添加这一行 =====
// initBanquetPage();
