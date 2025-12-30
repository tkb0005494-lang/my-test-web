// ==========================================
// 1. 設定區：在這裡修改所有的內容
// ==========================================
const CONFIG = {
    FORM_A: 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse',
    FORM_B: 'https://docs.google.com/forms/d/e/1FAIpQLScrCgzXQ2Rpi4ARsIQ7-KKYzgsADVW6syIJh37Hk0mapCc9Hw/formResponse',
    LINE_URL: 'https://lin.ee/Oj42w8M',
    ENTRIES: {
        NAME: 'entry.1711447572', UNI: 'entry.651877505', DEPT: 'entry.1169658860', PHONE: 'entry.1253545059',
        SCORE: 'entry.1428871778', TIME: 'entry.1695428454'
    },
    SUBJECTS: {
        Math: { name: "工程數學", icon: "📐", vid: "LiW8jvHZ7o4" },
        Linear: { name: "線性代數", icon: "🔢", vid: "dW4cUVU089Q" },
        CS: { name: "計算機概論", icon: "💻", vid: "ZC98Wmrtb7o" },
        Eco: { name: "經濟學", icon: "📊", vid: "2ZXmDGBC4c4" },
        Cal: { name: "微積分", icon: "∫", vid: "QNLL0qfEPmI" },
        Stat: { name: "統計學", icon: "📉", vid: "GhAxVkA1He8" }
    }
};

const QUESTIONS = [
    { sub: 'Math', topic: '拉普拉斯', q: '函數 $f(t) = e^{at}$ 的轉換為何？', opts: ['1/(s-a)', 'a/s^2', '1/s'], ans: 0, why: '基本公式。' },
    // ... (此處可按格式補齊所有 30 題，我先精簡示範)
    { sub: 'Math', topic: '一階 ODE', q: '解 $2x+5=15$', opts: ['2', '5', '10'], ans: 1, why: 'x=5' }
];

// ==========================================
// 2. 核心邏輯 (不需要頻繁修改)
// ==========================================
let state = { sub: '', score: 0, startTime: null, wrong: [] };

// 頁面切換
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${id}`).classList.remove('hidden');
    window.scrollTo(0,0);
}

// 懸浮通知：模擬社會認同
function startToasts() {
    const unis = ["清華大學", "陽明交通大學", "成功大學"];
    setInterval(() => {
        const uni = unis[Math.floor(Math.random()*unis.length)];
        const toast = document.getElementById('toast-social');
        document.getElementById('toast-text').innerText = `剛剛有一位${uni}同學完成了測驗`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    }, 8000);
}

// 倒數計時器
function startTimer() {
    let time = 86400;
    setInterval(() => {
        time--;
        let h = Math.floor(time/3600), m = Math.floor((time%3600)/60), s = time%60;
        document.getElementById('countdown').innerText = `${h}:${m}:${s}`;
    }, 1000);
}

// 提交表單 A
document.getElementById('user-form').onsubmit = async (e) => {
    e.preventDefault();
    const uni = document.getElementById('uni-other-radio').checked ? 
                document.getElementById('input-uni-other').value : 
                document.querySelector('input[name="uni"]:checked').value;
    
    const data = {
        [CONFIG.ENTRIES.NAME]: document.getElementById('input-name').value,
        [CONFIG.ENTRIES.UNI]: uni,
        [CONFIG.ENTRIES.DEPT]: `${document.getElementById('input-dept').value} / ${document.getElementById('input-grade').value}`,
        [CONFIG.ENTRIES.PHONE]: document.getElementById('input-phone').value
    };

    fetch(CONFIG.FORM_A, { method: 'POST', body: new URLSearchParams(data), mode: 'no-cors' });
    state.startTime = Date.now();
    renderSubjects();
    showPage('subject');
};

// 渲染科目按鈕
function renderSubjects() {
    const grid = document.getElementById('subject-grid');
    grid.innerHTML = Object.entries(CONFIG.SUBJECTS).map(([id, info]) => `
        <button class="sub-btn" onclick="startQuiz('${id}')">
            <div style="font-size:2em">${info.icon}</div>
            <div>${info.name}</div>
        </button>
    `).join('');
}

// 開始測驗
function startQuiz(sub) {
    state.sub = sub;
    const quizs = QUESTIONS.filter(q => q.sub === sub);
    const container = document.getElementById('quiz-container');
    container.innerHTML = quizs.map((q, i) => `
        <div class="question-card" id="q-${i}">
            <p>Q${i+1}. ${q.q}</p>
            ${q.opts.map((o, oi) => `<div class="option" onclick="check(${i}, ${oi})">${o}</div>`).join('')}
            <div class="rationale hidden" id="r-${i}"></div>
        </div>
    `).join('');
    renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
    showPage('quiz');
}

// 檢查答案
function check(qi, oi) {
    const quizs = QUESTIONS.filter(q => q.sub === state.sub);
    const q = quizs[qi];
    const card = document.getElementById(`q-${qi}`);
    if (card.classList.contains('done')) return;
    
    card.classList.add('done');
    const opts = card.querySelectorAll('.option');
    if (oi === q.ans) {
        opts[oi].classList.add('correct');
        state.score += 20;
    } else {
        opts[oi].classList.add('incorrect');
        opts[q.ans].classList.add('correct');
        state.wrong.push(q.topic);
    }
    const rat = document.getElementById(`r-${qi}`);
    rat.innerHTML = `💡 解析：${q.why}`;
    rat.classList.remove('hidden');

    if (document.querySelectorAll('.done').length === quizs.length) {
        setTimeout(showFinalResult, 1000);
    }
}

// 結算分數
function showFinalResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-result-box').classList.remove('hidden');
    document.getElementById('final-score').innerText = state.score;
    
    let lv = state.score >= 80 ? 'S 級頂尖' : (state.score >= 60 ? 'A 級強者' : 'B 級潛力');
    document.getElementById('potential-comment').innerText = `您的學霸潛能等級：${lv}`;
    
    // 提交 B 表單
    const duration = Math.floor((Date.now() - state.startTime)/1000);
    const dataB = { [CONFIG.ENTRIES.SCORE]: state.score, [CONFIG.ENTRIES.TIME]: `${duration}秒` };
    fetch(CONFIG.FORM_B, { method: 'POST', body: new URLSearchParams(dataB), mode: 'no-cors' });
}

// 前往資源頁
document.getElementById('btn-go-resource').onclick = () => {
    const subInfo = CONFIG.SUBJECTS[state.sub];
    document.getElementById('potential-level').innerText = state.score >= 80 ? 'S 級' : 'A 級';
    document.getElementById('yt-player').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${subInfo.vid}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById('weakness-list').innerText = state.wrong.length ? state.wrong.join('、') : '完美！';
    document.getElementById('line-link').href = CONFIG.LINE_URL;
    
    // 生成讀書計畫
    const planGrid = document.getElementById('plan-grid');
    planGrid.innerHTML = [1,2,3,4].map(w => `
        <div class="plan-item">
            <strong>第 ${w} 週</strong>
            <p>${w===1 ? '觀念重建' : (w===2 ? '題型演練' : '考古實戰')}</p>
        </div>
    `).join('');
    
    showPage('resource');
};

// 初始化
window.onload = () => {
    startToasts();
    startTimer();
    // 其他大學切換
    document.querySelectorAll('input[name="uni"]').forEach(r => {
        r.onchange = (e) => document.getElementById('input-uni-other').classList.toggle('hidden', e.target.value !== '其他');
    });
};
