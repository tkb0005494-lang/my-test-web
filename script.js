// === A. Google 表單 URL 與設定 ===
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_IDS = {
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860',
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
};

// === B. 完整題目資料庫 (共 30 題) ===
const ALL_QUIZ_DATA = [
    // 工程數學 (Math)
    { subject: "Math", topic: "拉氏轉換", question: "函數 $f(t) = e^{at}$ 的拉普拉斯轉換 $L\{f(t)\}$ 為何？", answerOptions: [{ text: "$1/(s-a)$", isCorrect: true, rationale: "基本公式：$L\{e^{at}\} = 1/(s-a)$。" }, { text: "$a/s^2$", isCorrect: false, rationale: "錯誤。" }, { text: "$1/(s^2+a^2)$", isCorrect: false, rationale: "這是 $\sin$ 的轉換。" }, { text: "$s/(s^2+a^2)$", isCorrect: false, rationale: "這是 $\cos$ 的轉換。" }] },
    { subject: "Math", topic: "線性 ODE", question: "解一階線性方程式 $y' + y = 0$，其通解為何？", answerOptions: [{ text: "$y = Ce^{-x}$", isCorrect: true, rationale: "分離變數法解得 $y = Ce^{-x}$。" }, { text: "$y = Ce^x$", isCorrect: false, rationale: "符號錯誤。" }, { text: "$y = x + C$", isCorrect: false, rationale: "這不是指數解。" }, { text: "$y = C$", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "Math", topic: "矩陣特徵值", question: "若 $3\\times 3$ 矩陣 $A$ 的行列式值為 0，則其特徵值必包含？", answerOptions: [{ text: "0", isCorrect: true, rationale: "行列式為特徵值之積，積為 0 則必有特徵值為 0。" }, { text: "1", isCorrect: false, rationale: "不一定。" }, { text: "-1", isCorrect: false, rationale: "不一定。" }, { text: "無解", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "Math", topic: "傅立葉級數", question: "奇函數的傅立葉級數展開中，只會包含？", answerOptions: [{ text: "正弦項 ($\sin$)", isCorrect: true, rationale: "奇函數的正交特性使得餘弦項為 0。" }, { text: "餘弦項 ($\cos$)", isCorrect: false, rationale: "這是偶函數。" }, { text: "常數項", isCorrect: false, rationale: "錯。" }, { text: "虛部", isCorrect: false, rationale: "錯。" }] },
    { subject: "Math", topic: "複變函數", question: "請問 $e^{i\\pi}$ 等於多少？", answerOptions: [{ text: "$-1$", isCorrect: true, rationale: "根據尤拉公式：$e^{i\pi} = \cos\pi + i\sin\pi = -1$。" }, { text: "$1$", isCorrect: false, rationale: "錯。" }, { text: "$i$", isCorrect: false, rationale: "錯。" }, { text: "$0$", isCorrect: false, rationale: "錯。" }] },

    // 線性代數 (Science)
    { subject: "Science", topic: "秩 (Rank)", question: "若 $A$ 為 $n \\times n$ 可逆矩陣，則其 Rank 為？", answerOptions: [{ text: "$n$", isCorrect: true, rationale: "可逆矩陣必為滿秩。" }, { text: "0", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }, { text: "$n-1$", isCorrect: false, rationale: "錯。" }] },
    { subject: "Science", topic: "投影", question: "向量 $b$ 投影到子空間 $V$，投影矩陣 $P$ 的性質為？", answerOptions: [{ text: "$P^2 = P$", isCorrect: true, rationale: "投影矩陣必須滿足冪等性。" }, { text: "$P^2 = I$", isCorrect: false, rationale: "這是對稱旋轉。" }, { text: "$P = I$", isCorrect: false, rationale: "錯。" }, { text: "$P = 0$", isCorrect: false, rationale: "錯。" }] },
    { subject: "Science", topic: "行列式", question: "交換矩陣的兩列，其行列式值會？", answerOptions: [{ text: "變號", isCorrect: true, rationale: "行列式基本性質。" }, { text: "不變", isCorrect: false, rationale: "錯。" }, { text: "變為 0", isCorrect: false, rationale: "錯。" }, { text: "變為倒數", isCorrect: false, rationale: "錯。" }] },
    { subject: "Science", topic: "特徵值", question: "對角矩陣的特徵值即為其？", answerOptions: [{ text: "對角線元素", isCorrect: true, rationale: "對角矩陣特徵值顯而易見。" }, { text: "行列式", isCorrect: false, rationale: "錯。" }, { text: "秩", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "Science", topic: "正交", question: "若兩向量正交，其內積為？", answerOptions: [{ text: "0", isCorrect: true, rationale: "正交定義即內積為 0。" }, { text: "1", isCorrect: false, rationale: "錯。" }, { text: "-1", isCorrect: false, rationale: "錯。" }, { text: "無限大", isCorrect: false, rationale: "錯。" }] },

    // 計算機概論 (History)
    { subject: "History", topic: "進位制", question: "二進位 $(1011)_2$ 轉換為十進位是多少？", answerOptions: [{ text: "11", isCorrect: true, rationale: "$8+2+1=11$。" }, { text: "13", isCorrect: false, rationale: "錯。" }, { text: "9", isCorrect: false, rationale: "錯。" }, { text: "15", isCorrect: false, rationale: "錯。" }] },
    { subject: "History", topic: "OS", question: "下列何者不是作業系統的核心功能？", answerOptions: [{ text: "文書處理", isCorrect: true, rationale: "文書處理是應用軟體。" }, { text: "記憶體管理", isCorrect: false, rationale: "是核心功能。" }, { text: "行程排程", isCorrect: false, rationale: "是核心功能。" }, { text: "檔案系統", isCorrect: false, rationale: "是核心功能。" }] },
    { subject: "History", topic: "網路", question: "HTTP 預設的連接埠 (Port) 是多少？", answerOptions: [{ text: "80", isCorrect: true, rationale: "標準協定 Port。" }, { text: "443", isCorrect: false, rationale: "那是 HTTPS。" }, { text: "21", isCorrect: false, rationale: "這是 FTP。" }, { text: "22", isCorrect: false, rationale: "這是 SSH。" }] },
    { subject: "History", topic: "資料結構", question: "後進先出 (LIFO) 是哪種資料結構的特性？", answerOptions: [{ text: "堆疊 (Stack)", isCorrect: true, rationale: "Stack 性質即 LIFO。" }, { text: "佇列 (Queue)", isCorrect: false, rationale: "Queue 是 FIFO。" }, { text: "鏈結串列", isCorrect: false, rationale: "錯。" }, { text: "樹狀結構", isCorrect: false, rationale: "錯。" }] },
    { subject: "History", topic: "邏輯閘", question: "NOT (A AND B) 等於？", answerOptions: [{ text: "NAND", isCorrect: true, rationale: "邏輯閘基本定義。" }, { text: "NOR", isCorrect: false, rationale: "錯。" }, { text: "XOR", isCorrect: false, rationale: "錯。" }, { text: "OR", isCorrect: false, rationale: "錯。" }] },

    // 經濟學 (Geography)
    { subject: "Geography", topic: "供需", question: "當價格上升時，需求量通常會？", answerOptions: [{ text: "減少", isCorrect: true, rationale: "需求法則。" }, { text: "增加", isCorrect: false, rationale: "錯。" }, { text: "不變", isCorrect: false, rationale: "錯。" }, { text: "先增後減", isCorrect: false, rationale: "錯。" }] },
    { subject: "Geography", topic: "機會成本", question: "為了得到某樣東西所必須放棄的最大價值稱為？", answerOptions: [{ text: "機會成本", isCorrect: true, rationale: "經濟學核心概念。" }, { text: "邊際成本", isCorrect: false, rationale: "錯。" }, { text: "沈沒成本", isCorrect: false, rationale: "錯。" }, { text: "變動成本", isCorrect: false, rationale: "錯。" }] },
    { subject: "Geography", topic: "GDP", question: "GDP 計算的是在國內生產的？", answerOptions: [{ text: "最終產品與勞務", isCorrect: true, rationale: "不計入中間投入。" }, { text: "總產出", isCorrect: false, rationale: "錯。" }, { text: "出口品", isCorrect: false, rationale: "錯。" }, { text: "二二手貨", isCorrect: false, rationale: "錯。" }] },
    { subject: "Geography", topic: "市場", question: "下列哪種市場有最多的廠商？", answerOptions: [{ text: "完全競爭", isCorrect: true, rationale: "完全競爭特點是廠商極多。" }, { text: "獨佔", isCorrect: false, rationale: "只有一家。" }, { text: "寡佔", isCorrect: false, rationale: "少數幾家。" }, { text: "獨佔競爭", isCorrect: false, rationale: "較完全競爭少。" }] },
    { subject: "Geography", topic: "外部性", question: "工廠排放廢氣屬於？", answerOptions: [{ text: "負外部性", isCorrect: true, rationale: "對社會造成額外成本。" }, { text: "正外部性", isCorrect: false, rationale: "錯。" }, { text: "公共財", isCorrect: false, rationale: "錯。" }, { text: "資訊不對稱", isCorrect: false, rationale: "錯。" }] },

    // 微積分 (English)
    { subject: "English", topic: "微分", question: "$\frac{d}{dx} (\sin x)$ 等於？", answerOptions: [{ text: "$\cos x$", isCorrect: true, rationale: "基本微分公式。" }, { text: "$-\cos x$", isCorrect: false, rationale: "符號錯。" }, { text: "$\sin x$", isCorrect: false, rationale: "錯。" }, { text: "$\sec^2 x$", isCorrect: false, rationale: "這是 $\tan$ 的微分。" }] },
    { subject: "English", topic: "積分", question: "$\int \frac{1}{x} dx$ 等於？", answerOptions: [{ text: "$\ln |x| + C$", isCorrect: true, rationale: "基本積分公式。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$-1/x^2$", isCorrect: false, rationale: "這是微分。" }, { text: "$x$", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "極限", question: "當 $x \to 0$ 時，$\frac{\sin x}{x}$ 的極限是？", answerOptions: [{ text: "1", isCorrect: true, rationale: "重要極限公式。" }, { text: "0", isCorrect: false, rationale: "錯。" }, { text: "$\infty$", isCorrect: false, rationale: "錯。" }, { text: "不存在", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "連鎖律", question: "微分 $f(g(x))$ 的結果為？", answerOptions: [{ text: "$f'(g(x))g'(x)$", isCorrect: true, rationale: "連鎖律 (Chain Rule) 定義。" }, { text: "$f'(x)g'(x)$", isCorrect: false, rationale: "錯。" }, { text: "$f(x)g'(x)$", isCorrect: false, rationale: "錯。" }, { text: "$f'(g(x))$", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "二階微分", question: "若二階微分大於 0，則該處函數圖形為？", answerOptions: [{ text: "凹向上", isCorrect: true, rationale: "判斷凹凸性。" }, { text: "凹向下", isCorrect: false, rationale: "錯。" }, { text: "遞增", isCorrect: false, rationale: "那是階微分。" }, { text: "反曲點", isCorrect: false, rationale: "那是二階為 0。" }] },

    // 統計學 (Coding)
    { subject: "Coding", topic: "平均數", question: "一組數據 $(2, 4, 6)$ 的平均數是？", answerOptions: [{ text: "4", isCorrect: true, rationale: "$(2+4+6)/3 = 4$。" }, { text: "5", isCorrect: false, rationale: "錯。" }, { text: "6", isCorrect: false, rationale: "錯。" }, { text: "2", isCorrect: false, rationale: "錯。" }] },
    { subject: "Coding", topic: "機率", question: "擲一個公正骰子，點數大於 4 的機率是？", answerOptions: [{ text: "1/3", isCorrect: true, rationale: "點數 5, 6，共 2/6 = 1/3。" }, { text: "1/2", isCorrect: false, rationale: "錯。" }, { text: "1/6", isCorrect: false, rationale: "錯。" }, { text: "2/3", isCorrect: false, rationale: "錯。" }] },
    { subject: "Coding", topic: "常態分佈", question: "標準常態分佈的平均值為？", answerOptions: [{ text: "0", isCorrect: true, rationale: "標準常態分佈定義為 $N(0, 1)$。" }, { text: "1", isCorrect: false, rationale: "那是標準差。" }, { text: "0.5", isCorrect: false, rationale: "錯。" }, { text: "100", isCorrect: false, rationale: "錯。" }] },
    { subject: "Coding", topic: "假設檢定", question: "P-value 小於顯著水準 $\alpha$ 時，我們應該？", answerOptions: [{ text: "拒絕虛無假設 $H_0$", isCorrect: true, rationale: "P-value 越小越顯著。" }, { text: "接受虛無假設 $H_0$", isCorrect: false, rationale: "錯。" }, { text: "無法判斷", isCorrect: false, rationale: "錯。" }, { text: "重新採樣", isCorrect: false, rationale: "錯。" }] },
    { subject: "Coding", topic: "中位數", question: "數據 $(1, 3, 10)$ 的中位數是？", answerOptions: [{ text: "3", isCorrect: true, rationale: "排序後的中間值。" }, { text: "1", isCorrect: false, rationale: "錯。" }, { text: "10", isCorrect: false, rationale: "錯。" }, { text: "4.6", isCorrect: false, rationale: "那是平均數。" }] }
];

const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師", youtubeId: "GhAxVkA1He8" }
};

// === C. 核心邏輯變數 ===
let currentSubject = '';
let currentScore = 0;
let answeredCount = 0;
let wrongQuestionsData = [];

// === D. 功能函式 ===

// 頁面切換
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan();
    }
}

// 欄位驗證
function isValidName(name) { return /^[\u4e00-\u9fa5]{2,}$/.test(name); }
function isValidPhone(phone) { return /^09\d{8}$/.test(phone); }

// 表單提交
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const dept = document.getElementById('userDepartment').value.trim();
    const uniRadio = document.querySelector('input[name="userUniversity"]:checked');
    const gradeRadio = document.querySelector('input[name="userGrade"]:checked');
    const err = document.getElementById('formError');

    if (!name || !phone || !dept || !uniRadio || !gradeRadio) {
        err.innerText = "⚠️ 請完整填寫所有欄位！"; err.style.display = 'block'; return;
    }
    if (!isValidName(name)) { err.innerText = "⚠️ 請輸入真實姓名（至少兩個中文字）"; err.style.display = 'block'; return; }
    if (!isValidPhone(phone)) { err.innerText = "⚠️ 手機格式錯誤（例：0912345678）"; err.style.display = 'block'; return; }

    const uniVal = uniRadio.value === '其他' ? document.getElementById('uniOtherText').value : uniRadio.value;
    
    // 異步發送到 Google 表單
    const formData = new URLSearchParams();
    formData.append(FORM_IDS.FORM_A_NAME, name);
    formData.append(FORM_IDS.FORM_A_UNI, uniVal);
    formData.append(FORM_IDS.FORM_A_DEPT_GRADE, `${dept} / ${gradeRadio.value}`);
    formData.append(FORM_IDS.FORM_A_PHONE, phone);
    formData.append(FORM_IDS.FORM_A_GRADE, gradeRadio.value);

    fetch(GOOGLE_FORM_A_URL, { method: 'POST', body: formData, mode: 'no-cors' });

    localStorage.setItem('userName', name);
    showPage('subjectSelectPage');
});

// 大學「其他」輸入框切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.addEventListener('change', () => {
        const textInput = document.getElementById('uniOtherText');
        textInput.disabled = (r.value !== '其他');
        if(!textInput.disabled) textInput.focus();
    });
});

// 選擇科目
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz(currentSubject);
    });
});

// 開始測驗
function startQuiz(subject) {
    currentScore = 0; answeredCount = 0; wrongQuestionsData = [];
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-content').innerHTML = '';
    
    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === subject);
    const container = document.getElementById('quiz-content');

    quizList.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <div class="question-text">Q${idx+1}. ${q.question}</div>
            <div class="option-item" data-q="${idx}" data-o="0">${q.answerOptions[0].text}</div>
            <div class="option-item" data-q="${idx}" data-o="1">${q.answerOptions[1].text}</div>
            <div class="option-item" data-q="${idx}" data-o="2">${q.answerOptions[2].text}</div>
            <div class="option-item" data-q="${idx}" data-o="3">${q.answerOptions[3].text}</div>
            <div class="rationale" id="rat-${idx}"></div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleAnswer);
    });

    showPage('quizPage');
    if(window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

// 處理答題
function handleAnswer() {
    const qIdx = parseInt(this.dataset.q);
    const oIdx = parseInt(this.dataset.o);
    const parent = this.parentNode;

    if (parent.classList.contains('answered')) return;
    parent.classList.add('answered');
    answeredCount++;

    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const isCorrect = quizList[qIdx].answerOptions[oIdx].isCorrect;

    if (isCorrect) {
        this.classList.add('correct');
        currentScore += 20;
    } else {
        this.classList.add('incorrect');
        wrongQuestionsData.push(quizList[qIdx]);
        const correctBtn = parent.querySelector(`[data-o="${quizList[qIdx].answerOptions.findIndex(o => o.isCorrect)}"]`);
        correctBtn.classList.add('correct');
    }

    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `💡 <b>解析：</b> ${quizList[qIdx].answerOptions.find(o => o.isCorrect).rationale}`;
    rat.classList.add('visible');
    if(window.renderMathInElement) renderMathInElement(rat, { delimiters: [{left: "$", right: "$", display: false}] });

    if (answeredCount === 5) setTimeout(showQuizResult, 1000);
}

// 顯示測驗結果並觸發通知
function showQuizResult() {
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('score').innerText = currentScore;
    
    let level = currentScore >= 80 ? 'S 級頂尖' : (currentScore >= 60 ? 'A 級強者' : 'B 級穩定');
    document.getElementById('scoreComment').innerHTML = `您的學霸潛能等級：<strong>${level}</strong><br>現在您可以截圖此畫面並追蹤 IG 領取獎勵！`;
    localStorage.setItem('potentialLevel', level);

    const overlay = document.getElementById('notificationOverlay');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 50);
}

// 點擊通知外部關閉
document.getElementById('notificationOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('visible');
        setTimeout(() => this.classList.add('hidden'), 400);
    }
});

// 最後一頁資源
document.getElementById('goToResourceBtn').addEventListener('click', function() {
    document.getElementById('finalSubjectName').innerText = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`).innerText;
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    document.getElementById('potentialLevelDisplay').innerText = localStorage.getItem('potentialLevel');
    
    let msg = currentScore >= 80 ? "太強了！您已具備頂大研究所競爭力，寒假建議超前部署複習核心考點。" : "表現不錯！寒假是拉開差距的關鍵，建議針對弱點科目進行 4 週強化。";
    document.getElementById('scoreMessage').innerText = msg;
    document.getElementById('lineCtaButton').href = "https://lin.ee/Oj42w8M";
    showPage('resourcePage');
});

function initYouTube() {
    const vid = VIDEO_LINKS[currentSubject].youtubeId;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen></iframe>`;
}

function generateStudyPlan() {
    const topics = wrongQuestionsData.length > 0 ? wrongQuestionsData.map(q => q.topic) : ["進階考點回顧"];
    document.getElementById('plan-week-1').innerText = `觀念重整：針對「${topics[0] || '核心單元'}」進行基礎複習，並搭配大碩雲端影音。`;
    document.getElementById('plan-week-2').innerText = `題型演練：練習${currentSubject === 'Math' ? '工程數學' : '該科目'}歷屆考題，掌握 60% 基本分。`;
    document.getElementById('plan-week-3').innerText = `強化訓練：針對錯誤題目進行二刷，並開始整理個人專屬筆記。`;
    document.getElementById('plan-week-4').innerText = `模擬測驗：進行限時模擬考，維持手感，並預約大碩專業諮詢。`;
    document.getElementById('weaknessTag').innerText = topics.slice(0, 2).join('、') || "無明顯弱點";
}
