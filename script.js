// === A. Google 表單設定 ===
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

const FORM_IDS = {
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860', 
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
    HTML_UNI_RADIO_NAME: 'userUniversity',
    HTML_GRADE_RADIO_NAME: 'userGrade',
    HTML_NAME_ID: 'userName',
    HTML_UNI_OTHER_ID: 'uniOtherText',
    HTML_DEPT_ID: 'userDepartment',
    HTML_PHONE_ID: 'userPhone',
};

// === B. 核心資料結構：30 題完整內容 ===
const ALL_QUIZ_DATA = [
    // --- 工程數學 (Math) ---
    { subject: "Math", topic: "基本運算", question: "請問 $12 \\times 8$ 等於多少？", answerOptions: [{ text: "$96$", isCorrect: true, rationale: "$12 \\times 8 = 96$。" }, { text: "$84$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$102$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$72$", isCorrect: false, rationale: "計算錯誤。" }] },
    { subject: "Math", topic: "一階 ODE", question: "解方程式 $2x + 5 = 15$，求 $x$。", answerOptions: [{ text: "$5$", isCorrect: true, rationale: "$2x = 10$，故 $x=5$。" }, { text: "$10$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$2$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$7$", isCorrect: false, rationale: "計算錯誤。" }] },
    { subject: "Math", topic: "拉普拉斯轉換", question: "函數 $f(t) = e^{at}$ 的拉普拉斯轉換 $L\\{f(t)\\}$ 為何？", answerOptions: [{ text: "$1/(s-a)$", isCorrect: true, rationale: "基本公式。" }, { text: "$a/s^2$", isCorrect: false, rationale: "錯誤。" }, { text: "$1/(s^2+a^2)$", isCorrect: false, rationale: "那是 sin。" }, { text: "$s/(s^2+a^2)$", isCorrect: false, rationale: "那是 cos。" }] },
    { subject: "Math", topic: "矩陣特徵值", question: "對於 $3\\times 3$ 矩陣，若其秩 (Rank) 為 2，則 $\\lambda=0$ 至少有多少個特徵值？", answerOptions: [{ text: "至少 1 個", isCorrect: true, rationale: "行列式為 0 必有 0 特徵值。" }, { text: "至少 2 個", isCorrect: false, rationale: "不一定。" }, { text: "0 個", isCorrect: false, rationale: "錯誤。" }, { text: "3 個", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "Math", topic: "傅立葉級數", question: "若函數 $f(x)$ 是週期為 $2L$ 的奇函數，其傅立葉級數只包含哪種項？", answerOptions: [{ text: "餘弦項", isCorrect: false, rationale: "奇函數無餘弦。" }, { text: "正弦項", isCorrect: true, rationale: "奇函數只含正弦。" }, { text: "常數項", isCorrect: false, rationale: "錯誤。" }, { text: "不包含任何項", isCorrect: false, rationale: "錯誤。" }] },

    // --- 線性代數 (Science) ---
    { subject: "Science", topic: "行列式", question: "判斷 $A = [[2, -1], [4, 3]]$ 的行列式值。", answerOptions: [{ text: "10", isCorrect: true, rationale: "$2(3) - (-1)(4) = 10$。" }, { text: "2", isCorrect: false, rationale: "錯。" }, { text: "-1", isCorrect: false, rationale: "錯。" }, { text: "4", isCorrect: false, rationale: "錯。" }] },
    { subject: "Science", topic: "矩陣類型", question: "什麼矩陣的轉置等於其自身？", answerOptions: [{ text: "單位矩陣", isCorrect: false, rationale: "太狹隘。" }, { text: "對稱矩陣", isCorrect: true, rationale: "$A^T = A$。" }, { text: "斜對稱矩陣", isCorrect: false, rationale: "那是負號。" }, { text: "三角矩陣", isCorrect: false, rationale: "不一定。" }] },
    { subject: "Science", topic: "向量空間", question: "在 $R^3$ 中，哪一組是線性獨立的？", answerOptions: [{ text: "$(1,0,0), (0,1,0), (1,1,0)$", isCorrect: false, rationale: "相加等於第三個。" }, { text: "$(1,0,0), (0,1,0), (0,0,1)$", isCorrect: true, rationale: "標準基底。" }, { text: "$(1,1,1), (2,2,2)$", isCorrect: false, rationale: "倍數關係。" }, { text: "任意三個", isCorrect: false, rationale: "不一定。" }] },
    { subject: "Science", topic: "正交矩陣", question: "若 $Q^T Q = I$，則 $Q$ 稱為：", answerOptions: [{ text: "埃爾米特", isCorrect: false, rationale: "錯。" }, { text: "正交矩陣", isCorrect: true, rationale: "定義。" }, { text: "對角化", isCorrect: false, rationale: "錯。" }, { text: "可逆", isCorrect: false, rationale: "正交必可逆，但名稱非此。" }] },
    { subject: "Science", topic: "特徵向量", question: "特徵向量 $\\mathbf{v}$ 滿足哪個方程？", answerOptions: [{ text: "$A \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: true, rationale: "定義。" }, { text: "$A \\mathbf{v} = 0$", isCorrect: false, rationale: "齊次。" }, { text: "$\\det(A - \\lambda I) = 0$", isCorrect: false, rationale: "求值用。" }, { text: "$A^T \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: false, rationale: "錯。" }] },

    // --- 計算機概論 (History) ---
    { subject: "History", topic: "主題範圍", question: "請問 '計概' 通常不包含哪個主題？", answerOptions: [{ text: "網路通訊", isCorrect: false, rationale: "包含。" }, { text: "資料結構", isCorrect: false, rationale: "包含。" }, { text: "作業系統", isCorrect: false, rationale: "包含。" }, { text: "生物化學", isCorrect: true, rationale: "不同領域。" }] },
    { subject: "History", topic: "記憶體", question: "斷電後會丟失數據的是？", answerOptions: [{ text: "HDD", isCorrect: false, rationale: "持久。" }, { text: "ROM", isCorrect: false, rationale: "持久。" }, { text: "RAM", isCorrect: true, rationale: "揮發性。" }, { text: "SSD", isCorrect: false, rationale: "持久。" }] },
    { subject: "History", topic: "網路協定", question: "請求網頁的協定是？", answerOptions: [{ text: "FTP", isCorrect: false, rationale: "檔案。" }, { text: "SMTP", isCorrect: false, rationale: "郵件。" }, { text: "HTTP/HTTPS", isCorrect: true, rationale: "網頁。" }, { text: "TCP", isCorrect: false, rationale: "傳輸。" }] },
    { subject: "History", topic: "資料結構", question: "先進先出 (FIFO) 的是？", answerOptions: [{ text: "Stack", isCorrect: false, rationale: "LIFO。" }, { text: "Queue", isCorrect: true, rationale: "FIFO。" }, { text: "List", isCorrect: false, rationale: "線性。" }, { text: "Tree", isCorrect: false, rationale: "非線性。" }] },
    { subject: "History", topic: "作業系統", question: "OS 功能不含？", answerOptions: [{ text: "CPU排程", isCorrect: false, rationale: "有。" }, { text: "記憶體管理", isCorrect: false, rationale: "有。" }, { text: "I/O管理", isCorrect: false, rationale: "有。" }, { text: "繪製 3D 圖形", isCorrect: true, rationale: "顯卡/App功能。" }] },

    // --- 經濟學 (Geography) ---
    { subject: "Geography", topic: "供需平衡", question: "供給超過需求會？", answerOptions: [{ text: "短缺", isCorrect: false, rationale: "需求多才會。" }, { text: "過剩", isCorrect: true, rationale: "供給多則過剩。" }, { text: "平衡", isCorrect: false, rationale: "相等才是。" }, { text: "通膨", isCorrect: false, rationale: "貨幣現象。" }] },
    { subject: "Geography", topic: "價格彈性", question: "彈性大於 1 稱為？", answerOptions: [{ text: "缺乏彈性", isCorrect: false, rationale: "小於1。" }, { text: "單一彈性", isCorrect: false, rationale: "等於1。" }, { text: "富有彈性", isCorrect: true, rationale: "大於1。" }, { text: "完全彈性", isCorrect: false, rationale: "無限大。" }] },
    { subject: "Geography", topic: "GDP 計算", question: "哪項不計入 GDP？", answerOptions: [{ text: "新車", isCorrect: false, rationale: "計入。" }, { text: "房仲佣金", isCorrect: false, rationale: "計入服務。" }, { text: "國防服務", isCorrect: false, rationale: "計入。" }, { text: "股市買賣金額", isCorrect: true, rationale: "資產移轉。" }] },
    { subject: "Geography", topic: "市場結構", question: "單一生產者是？", answerOptions: [{ text: "寡占", isCorrect: false, rationale: "少數。" }, { text: "壟斷競爭", isCorrect: false, rationale: "多數差異化。" }, { text: "完全競爭", isCorrect: false, rationale: "同質。" }, { text: "獨佔 (Monopoly)", isCorrect: true, rationale: "唯一。" }] },
    { subject: "Geography", topic: "財政政策", question: "增加支出屬於？", answerOptions: [{ text: "緊縮性", isCorrect: false, rationale: "減少支出。" }, { text: "擴張性財政政策", isCorrect: true, rationale: "刺激經濟。" }, { text: "貨幣政策", isCorrect: false, rationale: "那是央行。" }, { text: "中性", isCorrect: false, rationale: "錯。" }] },

    // --- 微積分 (English) ---
    { subject: "English", topic: "微分基本式", question: "$f(x) = x^2$ 的導數？", answerOptions: [{ text: "$x$", isCorrect: false, rationale: "錯。" }, { text: "$2x$", isCorrect: true, rationale: "冪次法則。" }, { text: "$x^3/3$", isCorrect: false, rationale: "積分。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "定積分", question: "$\\int_0^1 (3x^2 + 1) dx$？", answerOptions: [{ text: "1", isCorrect: false, rationale: "錯。" }, { text: "2", isCorrect: true, rationale: "$[x^3+x]_0^1 = 2$。" }, { text: "3", isCorrect: false, rationale: "錯。" }, { text: "0", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "鏈鎖律", question: "$f(x) = \\sin(2x)$，則 $f'(x)$？", answerOptions: [{ text: "$\\cos(2x)$", isCorrect: false, rationale: "沒鎖鍊。" }, { text: "$2 \\cos(2x)$", isCorrect: true, rationale: "正確。" }, { text: "$-2 \\cos(2x)$", isCorrect: false, rationale: "正負號錯。" }, { text: "$2 \\sin(2x)$", isCorrect: false, rationale: "微分錯。" }] },
    { subject: "English", topic: "極限", question: "$\\lim_{x \\to 0} \\frac{\\sin x}{x}$？", answerOptions: [{ text: "0", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: true, rationale: "基本極限。" }, { text: "$\\infty$", isCorrect: false, rationale: "錯。" }, { text: "不存在", isCorrect: false, rationale: "錯。" }] },
    { subject: "English", topic: "多變量", question: "$x^2 y$ 對 $x$ 的偏導？", answerOptions: [{ text: "2x", isCorrect: false, rationale: "y勒？" }, { text: "2xy", isCorrect: true, rationale: "正確。" }, { text: "x^2", isCorrect: false, rationale: "那是對y。" }, { text: "2x^2 y", isCorrect: false, rationale: "錯。" }] },

    // --- 統計學 (Coding) ---
    { subject: "Coding", topic: "敘述統計", question: "衡量樣本與母體差異指標？", answerOptions: [{ text: "平均數", isCorrect: false, rationale: "集中趨勢。" }, { text: "標準差", isCorrect: true, rationale: "分散程度。" }, { text: "變異係數", isCorrect: false, rationale: "相對分散。" }, { text: "P值", isCorrect: false, rationale: "檢定用。" }] },
    { subject: "Coding", topic: "機率分佈", question: "常態分佈形狀？", answerOptions: [{ text: "L型", isCorrect: false, rationale: "錯。" }, { text: "J型", isCorrect: false, rationale: "錯。" }, { text: "雙峰", isCorrect: false, rationale: "錯。" }, { text: "鐘形", isCorrect: true, rationale: "經典。" }] },
    { subject: "Coding", topic: "假設檢定", question: "拒絕真實的 $H_0$ 是？", answerOptions: [{ text: "型一錯誤", isCorrect: true, rationale: "定義。" }, { text: "型二錯誤", isCorrect: false, rationale: "接受假$H_0$。" }, { text: "抽樣錯誤", isCorrect: false, rationale: "非此。" }, { text: "測量錯誤", isCorrect: false, rationale: "非此。" }] },
    { subject: "Coding", topic: "迴歸分析", question: "$\\beta_1$ 代表？", answerOptions: [{ text: "截距", isCorrect: false, rationale: "那是$\\beta_0$。" }, { text: "殘差", isCorrect: false, rationale: "那是$\\epsilon$。" }, { text: "斜率", isCorrect: true, rationale: "正確。" }, { text: "標準差", isCorrect: false, rationale: "非此。" }] },
    { subject: "Coding", topic: "集中趨勢", question: "$\{2, 3, 5, 5, 10\}$ 中位數？", answerOptions: [{ text: "5", isCorrect: true, rationale: "中間值。" }, { text: "5.5", isCorrect: false, rationale: "錯。" }, { text: "2", isCorrect: false, rationale: "最小。" }, { text: "10", isCorrect: false, rationale: "最大。" }] }
];

const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師", youtubeId: "GhAxVkA1He8" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M";

let currentSubject = '';
let currentScore = 0;
let answeredQuestions = new Set();
let wrongQuestionsData = [];

// === 輔助功能 ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    if (pageId === 'resourcePage') { initYouTube(); generateStudyPlan(); }
}

// === 表單邏輯 ===
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById(FORM_IDS.HTML_NAME_ID).value;
    const phone = document.getElementById(FORM_IDS.HTML_PHONE_ID).value;
    const dept = document.getElementById(FORM_IDS.HTML_DEPT_ID).value;
    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]:checked`);
    const gradeRadio = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO_NAME}"]:checked`);

    if (!uniRadio || !gradeRadio) return;

    const uni = uniRadio.value === '其他' ? document.getElementById('uniOtherText').value : uniRadio.value;
    const data = {
        [FORM_IDS.FORM_A_NAME]: name,
        [FORM_IDS.FORM_A_UNI]: uni,
        [FORM_IDS.FORM_A_DEPT_GRADE]: dept,
        [FORM_IDS.FORM_A_PHONE]: phone,
        [FORM_IDS.FORM_A_GRADE]: gradeRadio.value
    };

    const params = new URLSearchParams();
    for (let key in data) params.append(key, data[key]);
    
    fetch(GOOGLE_FORM_A_URL, { method: 'POST', body: params, mode: 'no-cors' });
    localStorage.setItem('userData', JSON.stringify({name: name}));
    showPage('subjectSelectPage');
});

// 大學「其他」輸入切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.addEventListener('change', function() {
        document.getElementById('uniOtherText').disabled = (this.value !== '其他');
    });
});

// === 測驗核心 ===
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz(currentSubject);
    });
});

function startQuiz(subject) {
    currentScore = 0;
    answeredQuestions.clear();
    wrongQuestionsData = [];
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    
    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === subject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    document.getElementById('quizTitle').innerText = `正在測驗：${subject}`;

    quizList.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.index = index;
        card.innerHTML = `
            <div class="question-text">Q${index+1}. ${q.question}</div>
            <div class="options-list">
                ${q.answerOptions.map((opt, i) => `<div class="option-item" data-idx="${i}">${String.fromCharCode(65+i)}. ${opt.text}</div>`).join('')}
            </div>
            <div class="rationale" id="rat-${index}"></div>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleAnswerClick);
    });
    showPage('quizPage');
    if (window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleAnswerClick() {
    const card = this.closest('.question-card');
    const qIdx = parseInt(card.dataset.index);
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);

    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const currentQ = quizList[qIdx];
    const selectedIdx = parseInt(this.dataset.idx);
    const isCorrect = currentQ.answerOptions[selectedIdx].isCorrect;

    this.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        const correctBtn = card.querySelectorAll('.option-item')[currentQ.answerOptions.findIndex(o => o.isCorrect)];
        correctBtn.classList.add('correct');
        wrongQuestionsData.push({ topic: currentQ.topic });
    } else {
        currentScore += 20;
    }

    const ratDiv = document.getElementById(`rat-${qIdx}`);
    ratDiv.innerHTML = `<strong>💡 解析：</strong> ${currentQ.answerOptions.find(o => o.isCorrect).rationale}`;
    ratDiv.classList.add('visible');

    if (answeredQuestions.size === 5) setTimeout(showQuizResult, 1200);
}

function showQuizResult() {
    document.getElementById('score').innerText = currentScore;
    let level = currentScore >= 80 ? 'S 級頂尖' : (currentScore >= 60 ? 'A 級強者' : 'B 級穩定');
    let comment = currentScore >= 80 ? '太強了！這實力考研絕對是台清交等級！' : '基礎不錯，寒假稍微補強就能逆襲！';
    document.getElementById('scoreComment').innerHTML = `<strong>潛能等級：${level}</strong><br>${comment}`;
    localStorage.setItem('potentialLevel', level);
    
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('igModal').classList.remove('hidden');
}

// IG Modal 控制
document.getElementById('igModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
        document.getElementById('screenshotHint').style.display = 'block';
    }
});

document.getElementById('goToResourceBtn').addEventListener('click', function() {
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    document.getElementById('finalSubjectName').innerText = currentSubject;
    document.getElementById('potentialLevelDisplay').innerText = localStorage.getItem('potentialLevel');
    document.getElementById('lineCtaButton').href = LINE_CTA_LINK;
    showPage('resourcePage');
});

function initYouTube() {
    const vid = VIDEO_LINKS[currentSubject];
    const container = document.getElementById('youtubePlayer');
    document.getElementById('videoSubjectName').innerText = vid.title;
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${vid.youtubeId}?rel=0" allowfullscreen></iframe>`;
}

function generateStudyPlan() {
    const topics = wrongQuestionsData.map(d => d.topic).join('、') || '全方位進階';
    document.getElementById('weaknessTag').innerText = topics;
    for(let i=1; i<=4; i++) {
        document.getElementById(`plan-week-${i}`).innerHTML = `<ul><li><strong>Week ${i}：</strong> 針對「${topics}」進行強化練習。</li></ul>`;
    }
}
