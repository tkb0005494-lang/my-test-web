// Google Form 連結
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_FIELDS = { 
    name: 'entry.1711447572', 
    uni: 'entry.651877505', 
    dept: 'entry.1169658860', 
    phone: 'entry.1253545059' 
};

// 題目資料庫 (完整 30 題)
const ALL_QUIZ_DATA = [
    // 工程數學
    { subject: "工程數學", question: "請問 $y' + y = 0$ 的通解為何？", answerOptions: [{ text: "$y = Ce^{-x}$", isCorrect: true, rationale: "一階線性 ODE 基本解。" }, { text: "$y = Ce^x$", isCorrect: false, rationale: "符號錯誤。" }, { text: "$y = C\\sin x$", isCorrect: false, rationale: "這是二階振盪解。" }, { text: "$y = x + C$", isCorrect: false, rationale: "這是積分。" }] },
    { subject: "工程數學", question: "$\\mathcal{L}\{1\}$ 等於？", answerOptions: [{ text: "$1/s$", isCorrect: true, rationale: "拉氏轉換基本公式。" }, { text: "$s$", isCorrect: false, rationale: "錯。" }, { text: "$1/s^2$", isCorrect: false, rationale: "那是 $t$。" }, { text: "$e^s$", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", question: "二階齊次 ODE $y'' + y = 0$ 的特徵根為何？", answerOptions: [{ text: "$\pm i$", isCorrect: true, rationale: "特徵方程式為 $r^2+1=0$。" }, { text: "$\pm 1$", isCorrect: false, rationale: "那是 $y''-y=0$。" }, { text: "$0, 1$", isCorrect: false, rationale: "錯。" }, { text: "無解", isCorrect: false, rationale: "有複數根。" }] },
    { subject: "工程數學", question: "矩陣 $A$ 為正交矩陣，則 $A^{-1}$ 等於？", answerOptions: [{ text: "$A^T$", isCorrect: true, rationale: "定義為 $AA^T = I$。" }, { text: "$A$", isCorrect: false, rationale: "對稱矩陣才可能。" }, { text: "$-A$", isCorrect: false, rationale: "錯。" }, { text: "$I$", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", question: "傅立葉級數中，偶函數的展開只含有？", answerOptions: [{ text: "餘弦項 (cos)", isCorrect: true, rationale: "偶函數與 cos 皆為偶對稱。" }, { text: "正弦項 (sin)", isCorrect: false, rationale: "那是奇函數。" }, { text: "指數項", isCorrect: false, rationale: "錯。" }, { text: "不一定", isCorrect: false, rationale: "定論。" }] },

    // 線性代數
    { subject: "線性代數", question: "哪一組是 $\\mathbb{R}^2$ 的基底？", answerOptions: [{ text: "$(1,0), (0,1)$", isCorrect: true, rationale: "標準基底。" }, { text: "$(1,1), (2,2)$", isCorrect: false, rationale: "線性相依。" }, { text: "$(1,0)$", isCorrect: false, rationale: "數量不足。" }, { text: "$(0,0), (1,1)$", isCorrect: false, rationale: "含零向量必相依。" }] },
    { subject: "線性代數", question: "若矩陣不可逆，其行列式值為？", answerOptions: [{ text: "0", isCorrect: true, rationale: "奇異矩陣定義。" }, { text: "1", isCorrect: false, rationale: "單位矩陣。" }, { text: "-1", isCorrect: false, rationale: "可逆。" }, { text: "無限大", isCorrect: false, rationale: "錯。" }] },
    { subject: "線性代數", question: "特徵值滿足的方程式稱為？", answerOptions: [{ text: "特徵方程式", isCorrect: true, rationale: "$\det(A-\lambda I)=0$。" }, { text: "尤拉方程式", isCorrect: false, rationale: "那是 ODE。" }, { text: "伯努利方程式", isCorrect: false, rationale: "錯。" }, { text: "線性方程式", isCorrect: false, rationale: "不精確。" }] },
    { subject: "線性代數", question: "投影矩陣 $P$ 的性質為何？", answerOptions: [{ text: "$P^2 = P$", isCorrect: true, rationale: "冪等性質。" }, { text: "$P^2 = I$", isCorrect: false, rationale: "那是反射。" }, { text: "$P = 0$", isCorrect: false, rationale: "零投影。" }, { text: "$P = I$", isCorrect: false, rationale: "全空間投影。" }] },
    { subject: "線性代數", question: "若向量空間維度為 3，則 4 個向量必為？", answerOptions: [{ text: "線性相依", isCorrect: true, rationale: "超過維度數量必相依。" }, { text: "線性獨立", isCorrect: false, rationale: "不可能。" }, { text: "基底", isCorrect: false, rationale: "基底須恰好 3 個且獨立。" }, { text: "零向量", isCorrect: false, rationale: "不一定。" }] },

    // 計算機概論
    { subject: "計算機概論", question: "十進制 10 轉二進制？", answerOptions: [{ text: "1010", isCorrect: true, rationale: "8+2=10。" }, { text: "1100", isCorrect: false, rationale: "12。" }, { text: "1001", isCorrect: false, rationale: "9。" }, { text: "1111", isCorrect: false, rationale: "15。" }] },
    { subject: "計算機概論", question: "下列何者非作業系統？", answerOptions: [{ text: "HTTP", isCorrect: true, rationale: "這是通訊協定。" }, { text: "Windows", isCorrect: false, rationale: "OS。" }, { text: "Linux", isCorrect: false, rationale: "OS。" }, { text: "macOS", isCorrect: false, rationale: "OS。" }] },
    { subject: "計算機概論", question: "CPU 內部最快的儲存單位是？", answerOptions: [{ text: "暫存器", isCorrect: true, rationale: "Register。" }, { text: "快取 (Cache)", isCorrect: false, rationale: "次之。" }, { text: "記憶體 (RAM)", isCorrect: false, rationale: "較慢。" }, { text: "硬碟", isCorrect: false, rationale: "最慢。" }] },
    { subject: "計算機概論", question: "OSI 模型中，負責路由的是哪一層？", answerOptions: [{ text: "網路層", isCorrect: true, rationale: "Network Layer。" }, { text: "傳輸層", isCorrect: false, rationale: "TCP/UDP。" }, { text: "資料連結層", isCorrect: false, rationale: "MAC。" }, { text: "實體層", isCorrect: false, rationale: "位元流。" }] },
    { subject: "計算機概論", question: "Python 中 list 的 append 時間複雜度？", answerOptions: [{ text: "$O(1)$", isCorrect: true, rationale: "平均攤提時間。" }, { text: "$O(n)$", isCorrect: false, rationale: "錯。" }, { text: "$O(\log n)$", isCorrect: false, rationale: "錯。" }, { text: "$O(n^2)$", isCorrect: false, rationale: "錯。" }] },

    // 經濟學
    { subject: "經濟學", question: "所得增加導致需求減少的商品？", answerOptions: [{ text: "劣等財", isCorrect: true, rationale: "所得效果為負。" }, { text: "正常財", isCorrect: false, rationale: "正向。" }, { text: "季芬財", isCorrect: false, rationale: "價格向。" }, { text: "奢侈品", isCorrect: false, rationale: "正向。" }] },
    { subject: "經濟學", question: "需求曲線通常是？", answerOptions: [{ text: "負斜率", isCorrect: true, rationale: "需求法則。" }, { text: "正斜率", isCorrect: false, rationale: "供給。" }, { text: "水平線", isCorrect: false, rationale: "完全彈性。" }, { text: "垂直線", isCorrect: false, rationale: "完全無彈性。" }] },
    { subject: "經濟學", question: "GDP 計算不包含下列何者？", answerOptions: [{ text: "二手車交易", isCorrect: true, rationale: "非當期產出。" }, { text: "新成屋", isCorrect: false, rationale: "包含。" }, { text: "政府支出", isCorrect: false, rationale: "包含。" }, { text: "淨出口", isCorrect: false, rationale: "包含。" }] },
    { subject: "經濟學", question: "獨佔廠商的邊際收益 (MR) 與價格 (P) 關係？", answerOptions: [{ text: "$P > MR$", isCorrect: true, rationale: "產量增加需降價。" }, { text: "$P = MR$", isCorrect: false, rationale: "完全競爭。" }, { text: "$P < MR$", isCorrect: false, rationale: "不可能。" }, { text: "無關", isCorrect: false, rationale: "錯。" }] },
    { subject: "經濟學", question: "凱因斯學派認為市場失靈時需靠？", answerOptions: [{ text: "政府干預", isCorrect: true, rationale: "財政政策。" }, { text: "看不見的手", isCorrect: false, rationale: "古典學派。" }, { text: "貨幣供給縮減", isCorrect: false, rationale: "錯。" }, { text: "放任自流", isCorrect: false, rationale: "錯。" }] },

    // 微積分
    { subject: "微積分", question: "$\\ln(x)$ 的導數？", answerOptions: [{ text: "$1/x$", isCorrect: true, rationale: "基本公式。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$x$", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "$\sin(x)$ 的積分（不計常數）？", answerOptions: [{ text: "$-\cos(x)$", isCorrect: true, rationale: "注意負號。" }, { text: "$\cos(x)$", isCorrect: false, rationale: "那是微分。" }, { text: "$\tan(x)$", isCorrect: false, rationale: "錯。" }, { text: "$\sec(x)$", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "$x^n$ 的微分？", answerOptions: [{ text: "$nx^{n-1}$", isCorrect: true, rationale: "冪次規則。" }, { text: "$\frac{x^{n+1}}{n+1}$", isCorrect: false, rationale: "那是積分。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$n^x$", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "微積分基本定理連結了微分與？", answerOptions: [{ text: "積分", isCorrect: true, rationale: "互為逆運算。" }, { text: "限度", isCorrect: false, rationale: "基礎。" }, { text: "極值", isCorrect: false, rationale: "應用。" }, { text: "體積", isCorrect: false, rationale: "應用。" }] },
    { subject: "微積分", question: "若 $f''(x) > 0$，則圖形為？", answerOptions: [{ text: "凹向上", isCorrect: true, rationale: "二階導數判斷凹向。" }, { text: "凹向下", isCorrect: false, rationale: "那是 $f'' < 0$。" }, { text: "遞增", isCorrect: false, rationale: "那是 $f' > 0$。" }, { text: "遞減", isCorrect: false, rationale: "那是 $f' < 0$。" }] },

    // 統計學
    { subject: "統計學", question: "哪種分佈具「無記憶性」？", answerOptions: [{ text: "指數分佈", isCorrect: true, rationale: "唯一具無記憶性的連續分佈。" }, { text: "常態分佈", isCorrect: false, rationale: "無。" }, { text: "二項分佈", isCorrect: false, rationale: "無。" }, { text: "卜瓦松分佈", isCorrect: false, rationale: "無。" }] },
    { subject: "統計學", question: "樣本平均數的標準差稱為？", answerOptions: [{ text: "標準誤 (Standard Error)", isCorrect: true, rationale: "定義。" }, { text: "變異數", isCorrect: false, rationale: "平方。" }, { text: "全距", isCorrect: false, rationale: "Max-Min。" }, { text: "信心水準", isCorrect: false, rationale: "機率。" }] },
    { subject: "統計學", question: "P 值小於顯著水準 $\alpha$ 時？", answerOptions: [{ text: "拒絕虛無假設 $H_0$", isCorrect: true, rationale: "達到統計顯著。" }, { text: "接受 $H_0$", isCorrect: false, rationale: "錯。" }, { text: "資料不足", isCorrect: false, rationale: "錯。" }, { text: "重新抽樣", isCorrect: false, rationale: "非必要。" }] },
    { subject: "統計學", question: "常態分佈的圖形是對稱的嗎？", answerOptions: [{ text: "是，對稱於平均數", isCorrect: true, rationale: "鐘型曲線特徵。" }, { text: "否", isCorrect: false, rationale: "錯。" }, { text: "看樣本數決定", isCorrect: false, rationale: "定論。" }, { text: "左偏", isCorrect: false, rationale: "錯。" }] },
    { subject: "統計學", question: "貝氏定理用於計算？", answerOptions: [{ text: "條件機率", isCorrect: true, rationale: "事前轉事後機率。" }, { text: "加法規則", isCorrect: false, rationale: "錯。" }, { text: "排列組合", isCorrect: false, rationale: "錯。" }, { text: "期望值", isCorrect: false, rationale: "錯。" }] }
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

// 切換頁面
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 1. 10秒全域循環通知
const msgs = [
    "🔥 剛剛有一位清大學生完成了測驗！", 
    "⚡ 85% 的同學獲得了 S 級評分！", 
    "🚀 交大電資系學生正在領取讀書計畫...", 
    "✨ 剛剛有人在 IG 標記了 @hsinchu.daso",
    "🧧 限量寒假紅包剩餘 12 份！"
];
function showGlobalNotification() {
    const box = document.getElementById('floating-notification');
    const txt = document.getElementById('notify-text');
    if (!box || !txt) return;
    txt.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    box.classList.remove('hidden');
    setTimeout(() => { box.classList.add('hidden'); }, 4000);
}
setInterval(showGlobalNotification, 10000);

// 大學切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.onchange = () => document.getElementById('uniOtherText').disabled = (r.value !== '其他');
});

// 資料頁提交
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

// 科目按鈕點擊
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.onclick = function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz();
    };
});

// 開始測驗
function startQuiz() {
    currentScore = 0; answeredCount = 0;
    const quizData = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    document.getElementById('quizTitle').innerText = `正在挑戰：${currentSubject}`;
    
    // 取該科前 5 題
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

// 處理選項點擊
function handleSelect(el, qIdx, oIdx) {
    const parent = el.parentElement;
    if (parent.dataset.done === "true") return;
    parent.dataset.done = "true";
    
    const quizDataForSubject = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const isCorrect = quizDataForSubject[qIdx].answerOptions[oIdx].isCorrect;
    
    el.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) currentScore += 20;
    
    const rationale = document.getElementById(`rat-${qIdx}`);
    rationale.innerHTML = `<strong>💡 解析：</strong>${quizDataForSubject[qIdx].answerOptions.find(o=>o.isCorrect).rationale}`;
    rationale.classList.add('visible');
    
    answeredCount++;
    if (answeredCount === 5) {
        setTimeout(finishQuiz, 1200);
    }
}

// 完成測驗：跳轉分數頁並彈出 IG 提示
function finishQuiz() {
    document.getElementById('score').innerText = currentScore;
    let level = currentScore >= 80 ? 'S級：學霸領袖' : (currentScore >= 60 ? 'A級：進步神速' : 'B級：穩打基礎');
    document.getElementById('scoreComment').innerText = `測驗結果：${level}！恭喜你完成了這場極具挑戰性的測試。現在就領取你的專屬分析與獎勵吧！`;
    
    document.getElementById('potentialLevelDisplay').innerText = level;
    document.getElementById('finalScoreDisplay').innerText = currentScore + " 分";
    document.getElementById('finalSubjectName').innerText = currentSubject;
    
    showPage('scorePage');
    // 自動顯示 IG 彈窗
    document.getElementById('igModal').classList.remove('hidden');
}

// IG 彈窗關閉
document.getElementById('igModal').onclick = function(e) {
    if (e.target === this) this.classList.add('hidden');
};

// 前往資源頁
document.getElementById('goToResourceBtn').onclick = function() {
    document.getElementById('videoSubjectName').innerText = currentSubject;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${VIDEO_LINKS[currentSubject]}" frameborder="0" allowfullscreen></iframe>`;
    
    const plans = STUDY_PLANS[currentSubject];
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`plan-week-${i}`).innerText = plans[i-1];
    }
    showPage('resourcePage');
};
