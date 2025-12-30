// === A. Google 表單設定與變數 ===

// **表單 A: 使用者資訊**
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

// **Google 表單欄位 ID 映射**
const FORM_IDS = {
    // 表單 A: 用戶資訊 (Google Entry ID)
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860',
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
    
    // HTML 欄位屬性名稱/ID (與 index.html 匹配)
    HTML_UNI_RADIO_NAME: 'userUniversity',
    HTML_GRADE_RADIO_NAME: 'userGrade',
    
    // 以下是 input 的 ID
    HTML_NAME_ID: 'userName',
    HTML_UNI_OTHER_ID: 'uniOtherText',
    HTML_DEPT_ID: 'userDepartment',
    HTML_PHONE_ID: 'userPhone',
};

// === B. 核心資料結構：題目與測驗設定 ===
const ALL_QUIZ_DATA = [
    // --- 工程數學 (Math) ---
    {
        subject: "Math", topic: "二階線性 ODE", question: "考慮二階常係數齊次線性方程式 $y'' - 5y' + 6y = 0$，其通解為何？",
        answerOptions: [
            { text: "$y = c_1 e^{2x} + c_2 e^{3x}$", isCorrect: true, rationale: "特徵方程為 $r^2 - 5r + 6 = 0$，解得 $r = 2, 3$。因此通解為 $c_1 e^{2x} + c_2 e^{3x}$。" },
            { text: "$y = c_1 e^{-2x} + c_2 e^{-3x}$", isCorrect: false, rationale: "特徵根符號錯誤。" },
            { text: "$y = (c_1 + c_2 x)e^{2x}$", isCorrect: false, rationale: "這是重根時的解形式，本題非重根。" },
            { text: "$y = c_1 \cos(2x) + c_2 \sin(3x)$", isCorrect: false, rationale: "這是特徵根為虛根時的解形式。" }
        ]
    },
    {
        subject: "Math", topic: "拉普拉斯轉換", question: "利用位移性質，求 $L\{e^{3t} \cos(2t)\}$ 的拉普拉斯轉換結果？",
        answerOptions: [
            { text: "$\\frac{s-3}{(s-3)^2 + 4}$", isCorrect: true, rationale: "根據位移性質 $L\{e^{at}f(t)\} = F(s-a)$，且 $L\{\cos(2t)\} = \frac{s}{s^2+4}$，故結果為 $\frac{s-3}{(s-3)^2+4}$。" },
            { text: "$\\frac{s}{(s-3)^2 + 4}$", isCorrect: false, rationale: "分子未進行 $s \to s-3$ 的位移。" },
            { text: "$\\frac{2}{(s-3)^2 + 4}$", isCorrect: false, rationale: "這是正弦函數 $L\{e^{3t}\sin(2t)\}$ 的形式。" },
            { text: "$\\frac{s-3}{s^2 + 4}$", isCorrect: false, rationale: "分母未進行位移運算。" }
        ]
    },
    {
        subject: "Math", topic: "矩陣特徵值", question: "對於 $3\\times 3$ 矩陣，若其秩 (Rank) 為 2，則 $\\lambda=0$ 至少有多少個特徵值？",
        answerOptions: [
            { text: "至少 1 個", isCorrect: true, rationale: "秩小於階數，表示矩陣是奇異的 (singular)，其行列式為 0，故 $\\lambda=0$ 必定為特徵值。" },
            { text: "至少 2 個", isCorrect: false, rationale: "不一定，但至少 1 個。" },
            { text: "0 個", isCorrect: false, rationale: "錯誤。" },
            { text: "3 個", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "一階 ODE", question: "解方程式 $y' + \frac{1}{x}y = x$，其積分因子 (Integrating Factor) 為何？",
        answerOptions: [
            { text: "$x$", isCorrect: true, rationale: "積分因子 $\mu(x) = e^{\int P(x) dx} = e^{\int \frac{1}{x} dx} = e^{\ln x} = x$。" },
            { text: "$1/x$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$e^x$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$\ln x$", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "傅立葉級數", question: "若函數 $f(x)$ 是週期為 $2L$ 的奇函數，其傅立葉級數只包含哪種項？",
        answerOptions: [
            { text: "餘弦項 ($a_n$)", isCorrect: false, rationale: "奇函數不包含餘弦項。" },
            { text: "正弦項 ($b_n$)", isCorrect: true, rationale: "奇函數只包含正弦項和 $a_0 = 0$。" },
            { text: "常數項 $a_0$ 與餘弦項", isCorrect: false, rationale: "常數項 $a_0$ 為 0。" },
            { text: "不包含任何項", isCorrect: false, rationale: "錯誤。" }
        ]
    },

    // --- 線性代數 (Science) ---
    { subject: "Science", topic: "行列式", question: "判斷 $A = [[2, -1], [4, 3]]$ 的行列式值。", answerOptions: [{ text: "10", isCorrect: true, rationale: " $\\det(A) = 2(3) - (-1)(4) = 6 + 4 = 10$。" }, { text: "2", isCorrect: false, rationale: "計算錯誤。" }, { text: "-1", isCorrect: false, rationale: "計算錯誤。" }, { text: "4", isCorrect: false, rationale: "計算錯誤。" }] },
    { subject: "Science", topic: "矩陣類型", question: "線性代數中，什麼矩陣的轉置等於其自身？", answerOptions: [{ text: "單位矩陣", isCorrect: false, rationale: "單位矩陣是特殊類型的對稱矩陣。" }, { text: "對稱矩陣", isCorrect: true, rationale: "定義為 $A^T = A$。" }, { text: "斜對稱矩陣", isCorrect: false, rationale: "定義為 $A^T = -A$。" }, { text: "三角矩陣", isCorrect: false, rationale: "轉置後仍為三角矩陣，但不一定等於自身。" }] },
    { subject: "Science", topic: "向量空間", question: "在 $R^3$ 向量空間中，下列哪一組向量是線性獨立的？", answerOptions: [{ text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(1, 1, 0)$", isCorrect: false, rationale: " $v_3 = v_1 + v_2$。" }, { text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(0, 0, 1)$", isCorrect: true, rationale: "這組向量構成 $R^3$ 的標準基底，是線性獨立的。" }, { text: "$v_1=(1, 1, 1), v_2=(2, 2, 2)$", isCorrect: false, rationale: " $v_2 = 2v_1$。" }, { text: "任意三個向量", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "Science", topic: "正交矩陣", question: "若矩陣 $Q$ 滿足 $Q^T Q = I$ ($I$ 為單位矩陣)，則 $Q$ 稱為：", answerOptions: [{ text: "埃爾米特矩陣", isCorrect: false, rationale: " $A = A^*$。" }, { text: "正交矩陣", isCorrect: true, rationale: "正交矩陣的定義，其行向量和列向量都是正交單位向量。" }, { text: "對角化矩陣", isCorrect: false, rationale: "錯誤。" }, { text: "可逆矩陣", isCorrect: false, rationale: "正交矩陣必然可逆，但反之不一定。" }] },
    { subject: "Science", topic: "特徵向量", question: "矩陣的特徵向量 $\\mathbf{v}$ 與其對應的特徵值 $\\lambda$ 滿足哪個方程？", answerOptions: [{ text: "$A \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: true, rationale: "特徵值與特徵向量的基本定義。" }, { text: "$A \\mathbf{v} = 0$", isCorrect: false, rationale: "這是齊次方程組。" }, { text: "$\\det(A - \\lambda I) = 0$", isCorrect: false, rationale: "這是特徵多項式。" }, { text: "$A^T \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: false, rationale: "錯誤。" }] },
    
    // --- 計算機概論 (History) ---
    { subject: "History", topic: "主題範圍", question: "請問 '計概' 通常不包含哪個主題？", answerOptions: [{ text: "網路通訊", isCorrect: false }, { text: "資料結構", isCorrect: false }, { text: "作業系統", isCorrect: false }, { text: "生物化學", isCorrect: true, rationale: "這是獨立的生命科學領域。" }] },
    { subject: "History", topic: "記憶體", question: "在計算機中，哪個儲存裝置在斷電後會丟失數據？", answerOptions: [{ text: "硬碟 (HDD)", isCorrect: false }, { text: "唯讀記憶體 (ROM)", isCorrect: false }, { text: "隨機存取記憶體 (RAM)", isCorrect: true, rationale: "RAM 是揮發性記憶體。" }, { text: "固態硬碟 (SSD)", isCorrect: false }] },
    { subject: "History", topic: "網路協定", question: "網頁瀏覽器用於從伺服器請求網頁的協定是？", answerOptions: [{ text: "FTP", isCorrect: false }, { text: "SMTP", isCorrect: false }, { text: "HTTP/HTTPS", isCorrect: true }, { text: "TCP", isCorrect: false }] },
    { subject: "History", topic: "資料結構", question: "先進先出 (FIFO) 的資料結構是？", answerOptions: [{ text: "堆疊 (Stack)", isCorrect: false }, { text: "佇列 (Queue)", isCorrect: true }, { text: "連結串列 (Linked List)", isCorrect: false }, { text: "樹 (Tree)", isCorrect: false }] },
    { subject: "History", topic: "作業系統", question: "作業系統的主要功能不包含下列哪項？", answerOptions: [{ text: "處理器管理", isCorrect: false }, { text: "記憶體管理", isCorrect: false }, { text: "I/O 設備管理", isCorrect: false }, { text: "繪製 3D 圖形", isCorrect: true }] },

    // --- 經濟學 (Geography) ---
    { subject: "Geography", topic: "供需平衡", question: "在經濟學中，如果供給超過需求，市場會產生什麼？", answerOptions: [{ text: "短缺", isCorrect: false }, { text: "過剩", isCorrect: true }, { text: "平衡", isCorrect: false }, { text: "通膨", isCorrect: false }] },
    { subject: "Geography", topic: "價格彈性", question: "當某商品的需求價格彈性大於 1 時，稱該需求為？", answerOptions: [{ text: "缺乏彈性", isCorrect: false }, { text: "單一彈性", isCorrect: false }, { text: "富有彈性", isCorrect: true }, { text: "完全彈性", isCorrect: false }] },
    { subject: "Geography", topic: "GDP 計算", question: "計算 GDP 時，下列哪項不應計入？", answerOptions: [{ text: "汽車銷售額", isCorrect: false }, { text: "房屋交易佣金", isCorrect: false }, { text: "國防服務", isCorrect: false }, { text: "買賣股票的金額", isCorrect: true }] },
    { subject: "Geography", topic: "市場結構", question: "只有單一生產者，且產品沒有近似替代品的市場結構稱為？", answerOptions: [{ text: "寡占", isCorrect: false }, { text: "壟斷性競爭", isCorrect: false }, { text: "完全競爭", isCorrect: false }, { text: "獨佔 (Monopoly)", isCorrect: true }] },
    { subject: "Geography", topic: "財政政策", question: "政府增加開支，屬於哪種財政政策？", answerOptions: [{ text: "緊縮性", isCorrect: false }, { text: "擴張性", isCorrect: true }, { text: "貨幣政策", isCorrect: false }, { text: "中性", isCorrect: false }] },

    // --- 微積分 (English) ---
    { subject: "English", topic: "微分基本式", question: "微積分中，函數 $f(x) = x^2$ 的導數是？", answerOptions: [{ text: "$x$", isCorrect: false }, { text: "$2x$", isCorrect: true }, { text: "$x^3/3$", isCorrect: false }, { text: "1", isCorrect: false }] },
    { subject: "English", topic: "定積分", question: "計算定積分 $\int_0^1 (3x^2 + 1) dx$ 的值。", answerOptions: [{ text: "1", isCorrect: false }, { text: "2", isCorrect: true }, { text: "3", isCorrect: false }, { text: "0", isCorrect: false }] },
    { subject: "English", topic: "鏈鎖律", question: "若 $f(x) = \sin(2x)$，則 $f'(x)$ 是什麼？", answerOptions: [{ text: "$\cos(2x)$", isCorrect: false }, { text: "$2 \cos(2x)$", isCorrect: true }, { text: "$-2 \cos(2x)$", isCorrect: false }, { text: "$2 \sin(2x)$", isCorrect: false }] },
    { subject: "English", topic: "極限", question: "計算極限 $\lim_{x \to 0} \frac{\sin x}{x}$。", answerOptions: [{ text: "$0$", isCorrect: false }, { text: "$1$", isCorrect: true }, { text: "$\infty$", isCorrect: false }, { text: "不存在", isCorrect: false }] },
    { subject: "English", topic: "多變量", question: "函數 $f(x, y) = x^2 y$ 對 $x$ 的偏導數 $\frac{\partial f}{\partial x}$ 是？", answerOptions: [{ text: "$2x$", isCorrect: false }, { text: "$2xy$", isCorrect: true }, { text: "$x^2$", isCorrect: false }, { text: "$2x^2 y$", isCorrect: false }] },

    // --- 統計學 (Coding) ---
    { subject: "Coding", topic: "敘述統計", question: "統計學中，樣本與母體之間的差異，最常使用什麼指標衡量？", answerOptions: [{ text: "平均數", isCorrect: false }, { text: "標準差", isCorrect: true }, { text: "變異係數", isCorrect: false }, { text: "P值", isCorrect: false }] },
    { subject: "Coding", topic: "機率分佈", question: "若變數 $X$ 服從常態分佈，其圖形呈現？", answerOptions: [{ text: "L 型", isCorrect: false }, { text: "J 型", isCorrect: false }, { text: "雙峰型", isCorrect: false }, { text: "鐘形", isCorrect: true }] },
    { subject: "Coding", topic: "假設檢定", question: "拒絕虛無假設 ($H_0$) 但 $H_0$ 事實上為真，稱為什麼？", answerOptions: [{ text: "型一錯誤", isCorrect: true }, { text: "型二錯誤", isCorrect: false }, { text: "抽樣錯誤", isCorrect: false }, { text: "測量錯誤", isCorrect: false }] },
    { subject: "Coding", topic: "迴歸分析", question: "在線性迴歸 $Y = \beta_0 + \beta_1 X + \epsilon$ 中， $\beta_1$ 代表什麼？", answerOptions: [{ text: "截距", isCorrect: false }, { text: "殘差", isCorrect: false }, { text: "斜率", isCorrect: true }, { text: "標準差", isCorrect: false }] },
    { subject: "Coding", topic: "集中趨勢", question: "若數據集為 $\{2, 3, 5, 5, 10\}$，其平均數與中位數分別是？", answerOptions: [{ text: "5, 5", isCorrect: true, rationale: "平均為 (2+3+5+5+10)/5=5，中位數排序後中間值亦為 5。" }, { text: "5.5, 5", isCorrect: false }, { text: "5, 4", isCorrect: false }, { text: "6, 5", isCorrect: false }] },
];

// === C. 影片 ID、師資與 LINE 連結 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師 試聽課程", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師 試聽課程", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師 試聽課程", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師 試聽課程", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師 試聽課程", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師 試聽課程", youtubeId: "GhAxVkA1He8" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M";

let currentSubject = '';
let currentScore = 0;
let answeredQuestions = new Set();
let wrongQuestionsData = [];
let startTime;

// === D. 驗證與工具函式 ===

function isValidName(name) {
    return /^[\u4e00-\u9fa5]{2,}$/.test(name);
}

function isValidTaiwanPhone(phone) {
    return /^\d{10}$/.test(phone);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    window.scrollTo(0, 0);
    
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan();
    }
}

// === E. 表單資料提交 (只保留 A 表單) ===

async function submitDataToGoogleForm(url, dataToSubmit) {
    const formError = document.getElementById('formError');
    if (url === GOOGLE_FORM_A_URL) formError.style.display = 'none';

    const body = new URLSearchParams();
    for (const key in dataToSubmit) {
        body.append(key, dataToSubmit[key]);
    }
    
    try {
        await fetch(url, { method: 'POST', body: body, mode: 'no-cors' });
        return true;
    } catch (error) {
        console.error('Google Forms 提交失敗:', error);
        return false;
    }
}

// === F. 表單邏輯 ===

document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const userName = document.getElementById(FORM_IDS.HTML_NAME_ID).value.trim();
    const userDepartment = document.getElementById(FORM_IDS.HTML_DEPT_ID).value.trim();
    const userPhone = document.getElementById(FORM_IDS.HTML_PHONE_ID).value.trim();
    const uniOtherText = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID).value.trim();
    const formError = document.getElementById('formError');

    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]:checked`);
    const gradeRadio = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO_NAME}"]:checked`);

    if (!userName || !uniRadio || (uniRadio.value === '其他' && !uniOtherText) || !userDepartment || !gradeRadio || !userPhone) {
        formError.textContent = "請完整填寫所有必填欄位。";
        formError.style.display = 'block';
        return;
    }

    if (!isValidName(userName)) {
        formError.textContent = "姓名格式錯誤：請填寫至少 2 個中文字。";
        formError.style.display = 'block';
        return;
    }

    if (!isValidTaiwanPhone(userPhone)) {
        formError.textContent = "聯絡手機格式錯誤：請輸入 10 碼數字。";
        formError.style.display = 'block';
        return;
    }

    const uniValue = uniRadio.value === '其他' ? uniOtherText : uniRadio.value;
    const userGrade = gradeRadio.value;
    
    const dataToSubmit = {
        [FORM_IDS.FORM_A_NAME]: userName,
        [FORM_IDS.FORM_A_UNI]: uniValue,
        [FORM_IDS.FORM_A_DEPT_GRADE]: `${userDepartment} / ${userGrade}`,
        [FORM_IDS.FORM_A_PHONE]: userPhone,
        [FORM_IDS.FORM_A_GRADE]: userGrade,
    };

    const isSubmitted = await submitDataToGoogleForm(GOOGLE_FORM_A_URL, dataToSubmit);

    if (isSubmitted) {
        localStorage.setItem('userData', JSON.stringify({ name: userName, grade: userGrade }));
        startTime = Date.now();
        showPage('subjectSelectPage');
    }
});

// 大學「其他」切換
document.querySelectorAll(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]`).forEach(r => {
    r.addEventListener('change', function() {
        const textInput = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
        textInput.disabled = this.value !== '其他';
        if (this.value === '其他') { textInput.required = true; textInput.focus(); }
    });
});

// === G. 測驗邏輯 ===

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
    
    const button = document.querySelector(`.subject-button[data-subject="${subject}"]`);
    const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    document.getElementById('quizTitle').innerText = `正在測驗：${subjectName}`;

    quizList.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.index = index;
        card.innerHTML = `
            <div class="question-text">Q${index+1}. ${q.question}</div>
            <ul class="options-list">
                ${q.answerOptions.map((opt, i) => `<li class="option-item" data-idx="${i}"><span style="font-weight:bold; margin-right:8px;">${String.fromCharCode(65+i)}.</span> ${opt.text}</li>`).join('')}
            </ul>
            <div class="rationale" id="rat-${index}"></div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.option-item').forEach(item => item.addEventListener('click', handleAnswerClick));
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
    
    this.classList.add('selected');
    if (isCorrect) {
        this.classList.add('correct');
        currentScore += 20;
    } else {
        this.classList.add('incorrect');
        const correctIdx = currentQ.answerOptions.findIndex(o => o.isCorrect);
        card.querySelectorAll('.option-item')[correctIdx].classList.add('correct');
        wrongQuestionsData.push({ topic: currentQ.topic });
    }

    const ratDiv = document.getElementById(`rat-${qIdx}`);
    ratDiv.innerHTML = `<strong>💡 解析：</strong> ${currentQ.answerOptions.find(o => o.isCorrect).rationale || '正確答案如上所示。'}`;
    ratDiv.classList.add('visible');
    
    if (window.renderMathInElement) renderMathInElement(ratDiv, { delimiters: [{left: "$", right: "$", display: false}] });
    if (answeredQuestions.size === 5) setTimeout(showQuizResult, 800);
}

function showQuizResult() {
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('score').innerText = currentScore;
    
    let level = currentScore >= 80 ? 'S 級頂尖' : (currentScore >= 60 ? 'A 級強者' : 'B 級穩定');
    if (currentScore < 60) level = 'C 級覺醒中';
    
    document.getElementById('scoreComment').innerHTML = `您的潛能等級：<strong>${level}</strong><br>測驗完成！點擊下方領取您的寒假攻略。`;
    localStorage.setItem('potentialLevel', level);
}

// 點擊前往資源頁
document.getElementById('goToResourceBtn').addEventListener('click', function() {
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    document.getElementById('finalSubjectName').innerText = subjectName;
    document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    document.getElementById('potentialLevelDisplay').innerText = localStorage.getItem('potentialLevel');
    document.getElementById('lineCtaButton').href = LINE_CTA_LINK;
    showPage('resourcePage');
});

// === H. 讀書計畫生成 ===

function generateStudyPlan() {
    const weeks = [document.getElementById('plan-week-1'), document.getElementById('plan-week-2'), document.getElementById('plan-week-3'), document.getElementById('plan-week-4')];
    weeks.forEach(el => el.innerHTML = '');
    const weaknessTag = document.getElementById('weaknessTag');

    if (wrongQuestionsData.length > 0) {
        const topics = wrongQuestionsData.map(d => d.topic);
        weaknessTag.innerText = topics.join('、');
        weeks[0].innerHTML = `<ul><li>🎯 <strong>重點補強：</strong>複習 ${topics[0]}</li></ul>`;
        weeks[1].innerHTML = `<ul><li>📝 <strong>題型練習：</strong>針對弱點進行專項演練</li></ul>`;
    } else {
        weaknessTag.innerText = "全數答對！菁英強化";
        weeks[0].innerHTML = `<ul><li>🚀 <strong>超前部署：</strong>挑戰進階考古題</li></ul>`;
        weeks[1].innerHTML = `<ul><li>⚡ <strong>速度訓練：</strong>計時模擬考</li></ul>`;
    }
    
    const sName = document.getElementById('finalSubjectName').innerText;
    weeks[2].innerHTML = `<ul><li>🧩 <strong>${sName} 整合：</strong>繪製章節心智圖</li></ul>`;
    weeks[3].innerHTML = `<ul><li>🏁 <strong>考前衝刺：</strong>全真模擬試卷練習</li></ul>`;
}

// === I. YouTube 嵌入 ===

function initYouTube() {
    const container = document.getElementById('youtubePlayer');
    if (container.querySelector('iframe')) return;
    const vidId = VIDEO_LINKS[currentSubject].youtubeId;
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen></iframe>`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    showPage(localStorage.getItem('userData') ? 'subjectSelectPage' : 'userInfoPage');
});
