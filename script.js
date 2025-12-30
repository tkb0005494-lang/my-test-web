// Google Form 連結
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_FIELDS = { 
    name: 'entry.1711447572', 
    uni: 'entry.651877505', 
    dept: 'entry.1169658860', 
    phone: 'entry.1253545059' 
};

// 題目資料庫
const ALL_QUIZ_DATA = [
    { subject: "工程數學", question: "請問 $y' + y = 0$ 的通解為何？", answerOptions: [{ text: "$y = Ce^{-x}$", isCorrect: true, rationale: "一階線性 ODE 基本解。" }, { text: "$y = Ce^x$", isCorrect: false, rationale: "符號錯誤。" }, { text: "$y = C\\sin x$", isCorrect: false, rationale: "這是二階振盪解。" }, { text: "$y = x + C$", isCorrect: false, rationale: "這是積分。" }] },
    { subject: "工程數學", question: "$\\mathcal{L}\{1\}$ 等於？", answerOptions: [{ text: "$1/s$", isCorrect: true, rationale: "拉氏轉換基本公式。" }, { text: "$s$", isCorrect: false, rationale: "錯。" }, { text: "$1/s^2$", isCorrect: false, rationale: "那是 $t$。" }, { text: "$e^s$", isCorrect: false, rationale: "錯。" }] },
    { subject: "線性代數", question: "哪一組是 $\\mathbb{R}^2$ 的基底？", answerOptions: [{ text: "$(1,0), (0,1)$", isCorrect: true, rationale: "標準基底。" }, { text: "$(1,1), (2,2)$", isCorrect: false, rationale: "線性相依。" }, { text: "$(1,0)$", isCorrect: false, rationale: "數量不足。" }, { text: "$(0,0), (1,1)$", isCorrect: false, rationale: "含零向量必相依。" }] },
    { subject: "計算機概論", question: "十進制 10 轉二進制？", answerOptions: [{ text: "1010", isCorrect: true, rationale: "8+2=10。" }, { text: "1100", isCorrect: false, rationale: "12。" }, { text: "1001", isCorrect: false, rationale: "9。" }, { text: "1111", isCorrect: false, rationale: "15。" }] },
    { subject: "經濟學", question: "所得增加導致需求減少的商品？", answerOptions: [{ text: "劣等財", isCorrect: true, rationale: "定義。" }, { text: "正常財", isCorrect: false, rationale: "增加。" }, { text: "季芬財", isCorrect: false, rationale: "價格向。" }, { text: "奢侈品", isCorrect: false, rationale: "正常財。" }] },
    { subject: "微積分", question: "$\\ln(x)$ 的導數？", answerOptions: [{ text: "$1/x$", isCorrect: true, rationale: "公式。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$x$", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "統計學", question: "哪種分佈具「無記憶性」？", answerOptions: [{ text: "指數分佈", isCorrect: true, rationale: "正確。" }, { text: "常態分佈", isCorrect: false, rationale: "無。" }, { text: "二項分佈", isCorrect: false, rationale: "無。" }, { text: "卜瓦松分佈", isCorrect: false, rationale: "無。" }] }
];

const STUDY_PLANS = {
    "工程數學": ["基礎 ODE 求解公式判別。", "拉普拉斯轉換定理運用。", "傅立葉級數展開分析。", "矩陣特徵值與空間結構。"],
    "線性代數": ["向量空間獨立性判定。", "線性映射核空間矩陣表示。", "正交化程序與投影矩陣。", "特徵分解與對角化應用。"],
    "計算機概論": ["補數運算與進位制。", "CPU 排程與記憶體管理。", "OSI 模型與網路層級。", "資料結構與演算法基礎。"],
    "經濟學": ["供給需求分析與彈性。", "市場結構與廠商理論。", "國民所得與 IS-LM 模型。", "貨幣政策與通膨。"],
    "微積分": ["極限與導數基本公式。", "積分技巧與基本定理。", "偏微分與拉格朗日乘數。", "級數檢定與泰勒展開。"],
    "統計學": ["敘述統計與機率論。", "抽樣分佈與估計。", "假設檢定與 P 值判斷。", "迴歸分析與變異數分析。"]
};

const VIDEO_LINKS = { "工程數學": "LiW8jvHZ7o4", "線性代數": "dW4cUVU089Q", "計算機概論": "ZC98Wmrtb7o", "經濟學": "2ZXmDGBC4c4", "微積分": "QNLL0qfEPmI", "統計學": "GhAxVkA1He8" };

let currentSubject = '', currentScore = 0, answeredCount = 0;

// --- 新增：懸浮通知邏輯 ---
const notifications = [
    "🔥 剛剛有一位清大學生完成了測驗！",
    "⚡ 統計：85% 的同學獲得了 S 級評分！",
    "🚀 交大電資系學生正在領取讀書計畫...",
    "🧧 限量紅包領取倒數最後 12 名！",
    "✨ 剛剛有人在 IG 標記了 @hsinchu.daso"
];

function showNotification() {
    const notifyDiv = document.getElementById('floating-notification');
    const notifyText = document.getElementById('notify-text');
    if (!notifyDiv || !notifyText) return;

    const randomMsg = notifications[Math.floor(Math.random() * notifications.length)];
    notifyText.innerText = randomMsg;
    notifyDiv.classList.remove('hidden');

    setTimeout(() => {
        notifyDiv.classList.add('hidden');
    }, 4000); // 顯示 4 秒
}

// 每 10 秒觸發一次通知
setInterval(showNotification, 10000);

// --- 你的原始邏輯 (完整保留) ---

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById(id);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.onchange = function() {
        document.getElementById('uniOtherText').disabled = (this.value !== '其他');
    };
});

document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uniInput = document.querySelector('input[name="userUniversity"]:checked');
    const university = uniInput.value === '其他' ? document.getElementById('uniOtherText').value : uniInput.value;
    const formData = new FormData();
    formData.append(FORM_FIELDS.name, document.getElementById('userName').value);
    formData.append(FORM_FIELDS.uni, university);
    formData.append(FORM_FIELDS.dept, document.getElementById('userDepartment').value);
    formData.append(FORM_FIELDS.phone, document.getElementById('userPhone').value);
    fetch(GOOGLE_FORM_URL, { method: 'POST', body: formData, mode: 'no-cors' });
    showPage('subjectSelectPage');
});

document.querySelectorAll('.subject-button').forEach(btn => {
    btn.onclick = function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz();
    };
});

function startQuiz() {
    currentScore = 0;
    answeredCount = 0;
    const quizData = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    document.getElementById('quizTitle').innerText = `正在挑戰：${currentSubject}`;
    const displayData = quizData.slice(0, 5);
    displayData.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.innerHTML = `
            <div class="question-text">Q${idx+1}. ${q.question}</div>
            <div class="opt-box">
                ${q.answerOptions.map((opt, i) => `
                    <div class="option-item" onclick="handleSelect(this, ${idx}, ${i})">
                        ${String.fromCharCode(65+i)}. ${opt.text}
                    </div>
                `).join('')}
            </div>
            <div class="rationale" id="rat-${idx}"></div>
        `;
        container.appendChild(div);
    });
    showPage('quizPage');
    if(window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleSelect(el, qIdx, oIdx) {
    const parent = el.parentElement;
    if (parent.classList.contains('done')) return;
    parent.classList.add('done');
    const quizDataForSubject = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const isCorrect = quizDataForSubject[qIdx].answerOptions[oIdx].isCorrect;
    el.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) currentScore += 20;
    const rationale = document.getElementById(`rat-${qIdx}`);
    rationale.innerHTML = `<strong>💡 解析：</strong>${quizDataForSubject[qIdx].answerOptions.find(o=>o.isCorrect).rationale}`;
    rationale.classList.add('visible');
    answeredCount++;
    if (answeredCount === 5 || answeredCount === quizDataForSubject.length) {
        setTimeout(finishQuiz, 1000);
    }
}

function finishQuiz() {
    document.getElementById('score').innerText = currentScore;
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('igModal').classList.remove('hidden');
    let level = currentScore >= 80 ? 'S級：學霸領袖' : (currentScore >= 60 ? 'A級：進步神速' : 'B級：穩打基礎');
    document.getElementById('scoreComment').innerText = `測驗結果：${level}！`;
    document.getElementById('potentialLevelDisplay').innerText = level;
    document.getElementById('finalScoreDisplay').innerText = currentScore + " 分";
    document.getElementById('finalSubjectName').innerText = currentSubject;
}

document.getElementById('igModal').onclick = function(e) {
    if (e.target === this) this.classList.add('hidden');
};

document.getElementById('goToResourceBtn').onclick = function() {
    document.getElementById('videoSubjectName').innerText = currentSubject;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${VIDEO_LINKS[currentSubject]}" frameborder="0" allowfullscreen></iframe>`;
    const plans = STUDY_PLANS[currentSubject];
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`plan-week-${i}`).innerText = plans[i-1];
    }
    showPage('resourcePage');
};
