// === A. Google 表單設定 (僅保留表單 A) ===
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

const FORM_IDS = {
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860',
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
    // 已移除表單 B 的 ID
    HTML_UNI_RADIO_NAME: 'userUniversity',
    HTML_GRADE_RADIO_NAME: 'userGrade',
    HTML_NAME_ID: 'userName',
    HTML_UNI_OTHER_ID: 'uniOtherText',
    HTML_DEPT_ID: 'userDepartment',
    HTML_PHONE_ID: 'userPhone',
};

// === B. 完整題庫 ===
const ALL_QUIZ_DATA = [
    // --- 工程數學 (Math) ---
    {
        subject: "Math", topic: "二階線性 ODE", question: "考慮二階常係數 ODE $y'' + 4y' + 4y = 0$，其通解為何？",
        answerOptions: [
            { text: "$y = (c_1 + c_2 x)e^{-2x}$", isCorrect: true, rationale: "特徵方程為 $(r+2)^2=0$，有重根 $r=-2$。" },
            { text: "$y = c_1 e^{-2x} + c_2 e^{2x}$", isCorrect: false, rationale: "這不是重根的型式。" },
            { text: "$y = c_1 \cos(2x) + c_2 \sin(2x)$", isCorrect: false, rationale: "這是 $y''+4y=0$ 的解。" },
            { text: "$y = c_1 e^{-2x}$", isCorrect: false, rationale: "缺少第二個線性獨立解。" }
        ]
    },
    {
        subject: "Math", topic: "拉普拉斯轉換", question: "求函數 $f(t) = t \sin(at)$ 的拉普拉斯轉換 $L\{f(t)\}$？",
        answerOptions: [
            { text: "$\\frac{2as}{(s^2+a^2)^2}$", isCorrect: true, rationale: "利用頻域微分性質：$L\{tf(t)\} = -F'(s)$。" },
            { text: "$\\frac{a}{s^2+a^2}$", isCorrect: false, rationale: "這是 $L\{\sin(at)\}$。" },
            { text: "$\\frac{s}{s^2+a^2}$", isCorrect: false, rationale: "這是 $L\{\cos(at)\}$。" },
            { text: "$\\frac{a}{s^2-a^2}$", isCorrect: false, rationale: "這是 $L\{\sinh(at)\}$。" }
        ]
    },
    {
        subject: "Math", topic: "矩陣特徵值", question: "若 $3\times 3$ 矩陣 $A$ 的 Rank 為 2，則 $\lambda=0$ 必定為其特徵值嗎？",
        answerOptions: [
            { text: "是，至少有一個 $\lambda=0$", isCorrect: true, rationale: "Rank 不滿秩，則行列式為 0，必有零特徵值。" },
            { text: "否，不一定", isCorrect: false, rationale: "行列式為 0 的矩陣必有零特徵值。" },
            { text: "是，且必有兩個 $\lambda=0$", isCorrect: false, rationale: "Rank 為 2 只能保證至少一個零特徵值。" },
            { text: "視矩陣是否對稱而定", isCorrect: false, rationale: "無關對稱性。" }
        ]
    },
    {
        subject: "Math", topic: "一階 ODE", question: "解 $y' + y = e^{-x}$，其積分因子 (Integrating Factor) 為？",
        answerOptions: [
            { text: "$e^x$", isCorrect: true, rationale: "$I(x) = e^{\int 1 dx} = e^x$。" },
            { text: "$e^{-x}$", isCorrect: false, rationale: "符號錯誤。" },
            { text: "$x$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$1$", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "傅立葉級數", question: "週期為 $2L$ 的偶函數，其傅立葉係數中哪一項必為 0？",
        answerOptions: [
            { text: "$b_n$ (正弦項)", isCorrect: true, rationale: "偶函數與正弦函數(奇)相乘積分為 0。" },
            { text: "$a_n$ (餘弦項)", isCorrect: false, rationale: "偶函數保留餘弦項。" },
            { text: "$a_0$", isCorrect: false, rationale: "偶函數通常有常數項。" },
            { text: "以上皆非", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    // --- 線性代數 (Science) ---
    { subject: "Science", topic: "對稱矩陣", question: "什麼矩陣滿足 $A^T = A$？", answerOptions: [{ text: "對稱矩陣", isCorrect: true, rationale: "定義即為此。" }, { text: "反對稱矩陣", isCorrect: false }, { text: "正交矩陣", isCorrect: false }, { text: "單位矩陣", isCorrect: false }] },
    { subject: "Science", topic: "行列式", question: "若矩陣兩行互換，行列式值會？", answerOptions: [{ text: "變號", isCorrect: true, rationale: "行列式性質。" }, { text: "不變", isCorrect: false }, { text: "變為 0", isCorrect: false }, { text: "平方", isCorrect: false }] },
    { subject: "Science", topic: "向量獨立", question: "兩向量平行，則它們是？", answerOptions: [{ text: "線性相依", isCorrect: true, rationale: "其中一個是另一個的倍數。" }, { text: "線性獨立", isCorrect: false }, { text: "相互正交", isCorrect: false }, { text: "單位向量", isCorrect: false }] },
    { subject: "Science", topic: "特徵向量", question: "$A\mathbf{v} = \lambda\mathbf{v}$，其中 $\mathbf{v}$ 不能為？", answerOptions: [{ text: "零向量", isCorrect: true, rationale: "特徵向量定義必須是非零向量。" }, { text: "單位向量", isCorrect: false }, { text: "複數向量", isCorrect: false }, { text: "正交向量", isCorrect: false }] },
    { subject: "Science", topic: "正交矩陣", question: "正交矩陣的行列式值必為？", answerOptions: [{ text: "$\pm 1$", isCorrect: true, rationale: "因為 $\det(A^T A) = \det(I) = 1$。" }, { text: "$0$", isCorrect: false }, { text: "只能是 1", isCorrect: false }, { text: "不一定", isCorrect: false }] },
    // --- 計算機概論 (History) ---
    { subject: "History", topic: "RAM", question: "哪種記憶體斷電後資料會消失？", answerOptions: [{text: "RAM", isCorrect: true, rationale: "揮發性記憶體。"}, {text: "ROM", isCorrect: false}, {text: "HDD", isCorrect: false}, {text: "SSD", isCorrect: false}] },
    { subject: "History", topic: "HTTP", question: "網頁傳輸協定是？", answerOptions: [{text: "HTTP", isCorrect: true, rationale: "HyperText Transfer Protocol。"}, {text: "FTP", isCorrect: false}, {text: "SMTP", isCorrect: false}, {text: "DNS", isCorrect: false}] },
    { subject: "History", topic: "OS", question: "下列何者不屬於 OS？", answerOptions: [{text: "Chrome", isCorrect: true, rationale: "這是瀏覽器(應用程式)。"}, {text: "Windows", isCorrect: false}, {text: "Linux", isCorrect: false}, {text: "macOS", isCorrect: false}] },
    { subject: "History", topic: "DataStructure", question: "FIFO 是哪種結構？", answerOptions: [{text: "Queue", isCorrect: true, rationale: "佇列。"}, {text: "Stack", isCorrect: false}, {text: "Tree", isCorrect: false}, {text: "Graph", isCorrect: false}] },
    { subject: "History", topic: "Binary", question: "二進位 1010 是十進位的？", answerOptions: [{text: "10", isCorrect: true, rationale: "8+2=10。"}, {text: "8", isCorrect: false}, {text: "12", isCorrect: false}, {text: "14", isCorrect: false}] },
    // --- 微積分 (English) ---
    { subject: "English", topic: "微分", question: "$\frac{d}{dx} \ln(x) = $？", answerOptions: [{text: "$1/x$", isCorrect: true}, {text: "$e^x$", isCorrect: false}, {text: "$x$", isCorrect: false}, {text: "$1/x^2$", isCorrect: false}] },
    { subject: "English", topic: "積分", question: "$\int e^x dx = $？", answerOptions: [{text: "$e^x + C$", isCorrect: true}, {text: "$\ln(x)$", isCorrect: false}, {text: "$xe^x$", isCorrect: false}, {text: "$e^{x+1}$", isCorrect: false}] },
    { subject: "English", topic: "極限", question: "$\lim_{x \to 0} \frac{\sin x}{x} = $？", answerOptions: [{text: "1", isCorrect: true}, {text: "0", isCorrect: false}, {text: "$\infty$", isCorrect: false}, {text: "不存在", isCorrect: false}] },
    { subject: "English", topic: "連鎖律", question: "$\frac{d}{dx} \sin(x^2) = $？", answerOptions: [{text: "$2x \cos(x^2)$", isCorrect: true}, {text: "$\cos(x^2)$", isCorrect: false}, {text: "$2 \sin x$", isCorrect: false}, {text: "$-2x \cos(x^2)$", isCorrect: false}] },
    { subject: "English", topic: "局部極值", question: "一階導數為 0 的點稱為？", answerOptions: [{text: "臨界點", isCorrect: true}, {text: "拐點", isCorrect: false}, {text: "斷點", isCorrect: false}, {text: "虛點", isCorrect: false}] },
    // --- 統計學 (Coding) ---
    { subject: "Coding", topic: "平均數", question: "數據 2,4,6 的平均是？", answerOptions: [{text: "4", isCorrect: true}, {text: "3", isCorrect: false}, {text: "5", isCorrect: false}, {text: "2", isCorrect: false}] },
    { subject: "Coding", topic: "標準差", question: "標準差代表？", answerOptions: [{text: "離散程度", isCorrect: true}, {text: "中心趨勢", isCorrect: false}, {text: "樣本大小", isCorrect: false}, {text: "錯誤率", isCorrect: false}] },
    { subject: "Coding", topic: "機率", question: "丟一枚硬幣正面的機率？", answerOptions: [{text: "0.5", isCorrect: true}, {text: "1", isCorrect: false}, {text: "0.1", isCorrect: false}, {text: "0", isCorrect: false}] },
    { subject: "Coding", topic: "分佈", question: "鐘形曲線是哪種分佈？", answerOptions: [{text: "常態分佈", isCorrect: true}, {text: "帕松分佈", isCorrect: false}, {text: "均勻分佈", isCorrect: false}, {text: "指數分佈", isCorrect: false}] },
    { subject: "Coding", topic: "回歸", question: "回歸分析主要用於？", answerOptions: [{text: "預測關係", isCorrect: true}, {text: "計算總和", isCorrect: false}, {text: "畫圖", isCorrect: false}, {text: "找最大值", isCorrect: false}] },
    // --- 經濟學 (Geography) ---
    { subject: "Geography", topic: "GDP", question: "下列何者計入 GDP？", answerOptions: [{text: "新車銷售", isCorrect: true}, {text: "二手車", isCorrect: false}, {text: "家務勞動", isCorrect: false}, {text: "股票交易", isCorrect: false}] },
    { subject: "Geography", topic: "需求", question: "價格上升需求量通常？", answerOptions: [{text: "下降", isCorrect: true}, {text: "上升", isCorrect: false}, {text: "不變", isCorrect: false}, {text: "歸零", isCorrect: false}] },
    { subject: "Geography", topic: "市場", question: "只有一家廠商的市場是？", answerOptions: [{text: "獨佔", isCorrect: true}, {text: "完全競爭", isCorrect: false}, {text: "寡佔", isCorrect: false}, {text: "壟斷競爭", isCorrect: false}] },
    { subject: "Geography", topic: "通膨", question: "物價普遍上漲稱為？", answerOptions: [{text: "通貨膨脹", isCorrect: true}, {text: "通貨緊縮", isCorrect: false}, {text: "經濟成長", isCorrect: false}, {text: "失業", isCorrect: false}] },
    { subject: "Geography", topic: "機會成本", question: "做出選擇時放棄的最高價值？", answerOptions: [{text: "機會成本", isCorrect: true}, {text: "會計成本", isCorrect: false}, {text: "邊際成本", isCorrect: false}, {text: "固定成本", isCorrect: false}] }
];

// === C. 常數與變數 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師", youtubeId: "GhAxVkA1He8" }
};

let currentSubject = '';
let currentScore = 0;
let answeredQuestions = new Set();
let wrongQuestionsData = [];
let startTime;

// === D. 頁面控制 ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan();
    }
}

// === E. 提交資料函數 ===
async function submitToGoogle(url, data) {
    const body = new URLSearchParams();
    for (const key in data) body.append(key, data[key]);
    try {
        await fetch(url, { method: 'POST', body: body, mode: 'no-cors' });
        return true;
    } catch (e) { return false; }
}

// === F. 事件監聽 (提交表單 A) ===
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById(FORM_IDS.HTML_NAME_ID).value;
    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]:checked`);
    const uniOther = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID).value;
    const dept = document.getElementById(FORM_IDS.HTML_DEPT_ID).value;
    const grade = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO_NAME}"]:checked`).value;
    const phone = document.getElementById(FORM_IDS.HTML_PHONE_ID).value;

    const uniValue = uniRadio.value === '其他' ? uniOther : uniRadio.value;
    
    const data = {
        [FORM_IDS.FORM_A_NAME]: name,
        [FORM_IDS.FORM_A_UNI]: uniValue,
        [FORM_IDS.FORM_A_DEPT_GRADE]: `${dept} / ${grade}`,
        [FORM_IDS.FORM_A_PHONE]: phone,
        [FORM_IDS.FORM_A_GRADE]: grade
    };

    // 僅提交表單 A
    await submitToGoogle(GOOGLE_FORM_A_URL, data);
    startTime = Date.now();
    showPage('subjectSelectPage');
});

// "其他" 大學輸入框邏輯
document.querySelectorAll(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]`).forEach(r => {
    r.addEventListener('change', function() {
        const textInput = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
        textInput.disabled = (this.value !== '其他');
        if (!textInput.disabled) textInput.focus();
    });
});

// 科目選擇按鈕
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz(currentSubject);
    });
});

// === G. 測驗引擎 ===
function startQuiz(subject) {
    currentScore = 0;
    answeredQuestions.clear();
    wrongQuestionsData = [];
    
    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === subject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    
    document.getElementById('quizTitle').innerText = `正在挑戰：${subject === 'Math' ? '工程數學' : (subject === 'Science' ? '線性代數' : '精選測驗')}`;
    document.getElementById('quiz-result').classList.add('hidden');

    quizList.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.index = index;
        card.innerHTML = `
            <div class="question-text">Q${index+1}. ${q.question}</div>
            <div class="options-list">
                ${q.answerOptions.map((opt, i) => `
                    <div class="option-item" data-idx="${i}">${String.fromCharCode(65+i)}. ${opt.text}</div>
                `).join('')}
            </div>
            <div class="rationale" id="rat-${index}"></div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleAnswer);
    });

    showPage('quizPage');
    if (window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleAnswer() {
    const card = this.closest('.question-card');
    const qIdx = parseInt(card.dataset.index);
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);

    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const selectedIdx = parseInt(this.dataset.idx);
    const isCorrect = quizList[qIdx].answerOptions[selectedIdx].isCorrect;

    if (isCorrect) {
        this.classList.add('correct');
        currentScore += 20;
    } else {
        this.classList.add('incorrect');
        const correctBtn = card.querySelectorAll('.option-item')[quizList[qIdx].answerOptions.findIndex(o => o.isCorrect)];
        correctBtn.classList.add('correct');
        wrongQuestionsData.push({ topic: quizList[qIdx].topic });
    }

    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `<strong>解析：</strong> ${quizList[qIdx].answerOptions.find(o => o.isCorrect).rationale}`;
    rat.classList.add('visible');
    if (window.renderMathInElement) renderMathInElement(rat, { delimiters: [{left: "$", right: "$", display: false}] });

    if (answeredQuestions.size === 5) {
        setTimeout(showFinalResult, 1000);
    }
}

function showFinalResult() {
    document.getElementById('score').innerText = currentScore;
    let comment = "";
    let level = "";
    if (currentScore >= 80) { level = "S 級"; comment = "學霸潛能全開！你非常適合挑戰頂大研究所。"; }
    else if (currentScore >= 60) { level = "A 級"; comment = "基礎扎實，只要加強進階題型就能脫穎而出。"; }
    else { level = "B 級"; comment = "還有很大的進步空間，現在開始複習還來得及！"; }
    
    document.getElementById('scoreComment').innerText = comment;
    document.getElementById('potentialLevelDisplay').innerText = level;
    document.getElementById('quiz-result').classList.remove('hidden');

    // 已移除表單 B 的提交邏輯
}

document.getElementById('goToResourceBtn').addEventListener('click', () => showPage('resourcePage'));

// === H. 計畫生成 ===
function generateStudyPlan() {
    const weakness = wrongQuestionsData.map(d => d.topic).join('、') || '基礎觀念';
    document.getElementById('weaknessTag').innerText = weakness;

    document.getElementById('plan-week-1').innerHTML = `<ul><li>複習 ${currentSubject} 核心定義</li><li>整理個人筆記</li></ul>`;
    document.getElementById('plan-week-2').innerHTML = `<ul><li>攻克 ${weakness} 相關題型</li><li>參加大碩模擬考</li></ul>`;
    document.getElementById('plan-week-3').innerHTML = `<ul><li>跨章節觀念整合</li><li>建立公式心智圖</li></ul>`;
    document.getElementById('plan-week-4').innerHTML = `<ul><li>近五年考古題實戰</li><li>調整考試作息</li></ul>`;
}

function initYouTube() {
    const vid = VIDEO_LINKS[currentSubject].youtubeId;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen></iframe>`;
}

document.getElementById('lineCtaButton').href = "https://lin.ee/Oj42w8M";
