// Google Form 連結與欄位
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_FIELDS = { 
    name: 'entry.1711447572', uni: 'entry.651877505', dept: 'entry.1169658860', phone: 'entry.1253545059' 
};

// 題目庫 (簡略)
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

// 通用顯示頁面
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0,0);
}

// 懸浮通知邏輯
const msgs = ["🔥 剛剛有一位清大學生完成了測驗！", "⚡ 85% 的同學獲得了 S 級評分！", "🚀 交大電資系學生正在領取計畫...", "✨ 剛剛有人在 IG 標記了 @hsinchu.daso"];
function showNotification() {
    const box = document.getElementById('floating-notification');
    const txt = document.getElementById('notify-text');
    txt.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 4000);
}
// 啟動通知 (每10秒一次)
setInterval(showNotification, 10000);

// 提交資料
document.getElementById('userInfoForm').onsubmit = function(e) {
    e.preventDefault();
    const uni = document.querySelector('input[name="userUniversity"]:checked').value === '其他' ? 
                document.getElementById('uniOtherText').value : document.querySelector('input[name="userUniversity"]:checked').value;
    const f = new FormData();
    f.append(FORM_FIELDS.name, document.getElementById('userName').value);
    f.append(FORM_FIELDS.uni, uni);
    f.append(FORM_FIELDS.dept, document.getElementById('userDepartment').value);
    f.append(FORM_FIELDS.phone, document.getElementById('userPhone').value);
    fetch(GOOGLE_FORM_URL, { method: 'POST', body: f, mode: 'no-cors' });
    showPage('subjectSelectPage');
};

// 大學選單切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.onchange = () => document.getElementById('uniOtherText').disabled = (r.value !== '其他');
});

// 點擊科目
document.querySelectorAll('.subject-button').forEach(b => {
    b.onclick = function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz();
    };
});

function startQuiz() {
    currentScore = 0; answeredCount = 0;
    const data = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject).slice(0, 5);
    const box = document.getElementById('quiz-content');
    box.innerHTML = '';
    data.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.innerHTML = `<p class="question-text">Q${i+1}. ${q.question}</p>
            ${q.answerOptions.map((o, oi) => `<div class="option-item" onclick="check(this, ${i}, ${oi})">${o.text}</div>`).join('')}
            <div class="rationale" id="r-${i}"></div>`;
        box.appendChild(div);
    });
    showPage('quizPage');
    if(window.renderMathInElement) renderMathInElement(box, { delimiters: [{left: "$", right: "$", display: false}] });
}

function check(el, qi, oi) {
    const p = el.parentElement; if(p.dataset.done) return; p.dataset.done = true;
    const data = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const ok = data[qi].answerOptions[oi].isCorrect;
    el.classList.add(ok ? 'correct' : 'incorrect');
    if(ok) currentScore += 20;
    const rat = document.getElementById(`r-${qi}`);
    rat.innerHTML = `<strong>💡 解析：</strong>${data[qi].answerOptions.find(o=>o.isCorrect).rationale}`;
    rat.style.display = 'block';
    answeredCount++;
    if(answeredCount === 5) setTimeout(() => {
        document.getElementById('score').innerText = currentScore;
        let lv = currentScore >= 80 ? 'S級：學霸領袖' : (currentScore >= 60 ? 'A級：進步神速' : 'B級：穩打基礎');
        document.getElementById('scoreComment').innerText = `測驗結果：${lv}！`;
        document.getElementById('potentialLevelDisplay').innerText = lv;
        document.getElementById('finalScoreDisplay').innerText = currentScore;
        document.getElementById('finalSubjectName').innerText = currentSubject;
        showPage('scorePage'); // 關鍵：跳轉到分數頁面
    }, 1500);
}

document.getElementById('goToResourceBtn').onclick = function() {
    document.getElementById('videoSubjectName').innerText = currentSubject;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${VIDEO_LINKS[currentSubject]}" frameborder="0" allowfullscreen></iframe>`;
    const plans = STUDY_PLANS[currentSubject];
    for(let i=1; i<=4; i++) document.getElementById(`plan-week-${i}`).innerText = plans[i-1];
    showPage('resourcePage');
};
