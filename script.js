// === A. Google 表單設定與變數 ===

// **表單 A: 使用者資訊 (請確認這是您正確的表單 A 連結)**
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

// **表單 B: 測驗結果 (請確認這是您正確的表單 B 連結)**
const GOOGLE_FORM_B_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScrCgzXQ2Rpi4ARsIQ7-KKYzgsADVW6syIJj37Hk0mapCc9Hw/formResponse';

// **Google 表單欄位 ID 映射 (HTML 欄位名稱已修正以匹配 index.html)**
const FORM_IDS = {
    // ------------------------------------------------------------------
    // 表單 A: 用戶資訊 (Google Entry ID)
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860',
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
    
    // ------------------------------------------------------------------
    // 表單 B: 測驗結果 (Google Entry ID)
    FORM_B_SCORE: 'entry.1428871778',
    FORM_B_TIME: 'entry.1695428454',
    
    // ------------------------------------------------------------------
    // HTML 欄位屬性名稱/ID (與 index.html 匹配)
    HTML_UNI_RADIO_NAME: 'userUniversity',
    HTML_GRADE_RADIO_NAME: 'userGrade',
    
    // 以下是 input 的 ID
    HTML_NAME_ID: 'userName',
    HTML_UNI_OTHER_ID: 'uniOtherText',
    HTML_DEPT_ID: 'userDepartment',
    HTML_PHONE_ID: 'userPhone',
};

// === B. 核心資料結構：題目與測驗設定 (保持不變) ===
const ALL_QUIZ_DATA = [
    // --- 工程數學 (Math) ---
    {
        subject: "Math", topic: "基本運算", question: "請問 $12 \\times 8$ 等於多少？",
        answerOptions: [
            { text: "$96$", isCorrect: true, rationale: " $12 \\times 8 = 96$。" },
            { text: "$84$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$102$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$72$", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "一階 ODE", question: "解方程式 $2x + 5 = 15$，求 $x$。",
        answerOptions: [
            { text: "$5$", isCorrect: true, rationale: " $2x = 15 - 5 = 10$，故 $x=5$。" },
            { text: "$10$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$2$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$7$", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "拉普拉斯轉換", question: "函數 $f(t) = e^{at}$ 的拉普拉斯轉換 $L\\{f(t)\\}$ 為何？",
        answerOptions: [
            { text: "$1/(s-a)$", isCorrect: true, rationale: "基本拉普拉斯轉換公式。" },
            { text: "$a/s^2$", isCorrect: false, rationale: "這是 $L\\{t^n\\}$ 的形式。" },
            { text: "$1/(s^2+a^2)$", isCorrect: false, rationale: "這是 $L\\{\\sin(at)\\}$ 的形式。" },
            { text: "$s/(s^2+a^2)$", isCorrect: false, rationale: "這是 $L\\{\\cos(at)\\}$ 的形式。" }
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
        subject: "Math", topic: "傅立葉級數", question: "若函數 $f(x)$ 是週期為 $2L$ 的奇函數，其傅立葉級數只包含哪種項？",
        answerOptions: [
            { text: "餘弦項 ($a_n$)", isCorrect: false, rationale: "奇函數不包含餘弦項。" },
            { text: "正弦項 ($b_n$)", isCorrect: true, rationale: "奇函數只包含正弦項和 $a_0 = 0$。" },
            { text: "常數項 $a_0$ 與餘弦項", isCorrect: false, rationale: "常數項 $a_0$ 為 0。" },
            { text: "不包含任何項", isCorrect: false, rationale: "錯誤。" }
        ]
    },

    // --- 線性代數 (Science) ---
    {
        subject: "Science", topic: "行列式", question: "判斷 $A = [[2, -1], [4, 3]]$ 的行列式值。",
        answerOptions: [
            { text: "10", isCorrect: true, rationale: " $\\det(A) = 2(3) - (-1)(4) = 6 + 4 = 10$。" },
            { text: "2", isCorrect: false, rationale: "計算錯誤。" },
            { text: "-1", isCorrect: false, rationale: "計算錯誤。" },
            { text: "4", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    {
        subject: "Science", topic: "矩陣類型", question: "線性代數中，什麼矩陣的轉置等於其自身？",
        answerOptions: [
            { text: "單位矩陣", isCorrect: false, rationale: "單位矩陣是特殊類型的對稱矩陣。" },
            { text: "對稱矩陣", isCorrect: true, rationale: "定義為 $A^T = A$。" },
            { text: "斜對稱矩陣", isCorrect: false, rationale: "定義為 $A^T = -A$。" },
            { text: "三角矩陣", isCorrect: false, rationale: "轉置後仍為三角矩陣，但不一定等於自身。" }
        ]
    },
    {
        subject: "Science", topic: "向量空間", question: "在 $R^3$ 向量空間中，下列哪一組向量是線性獨立的？",
        answerOptions: [
            { text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(1, 1, 0)$", isCorrect: false, rationale: " $v_3 = v_1 + v_2$。" },
            { text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(0, 0, 1)$", isCorrect: true, rationale: "這組向量構成 $R^3$ 的標準基底，是線性獨立的。" },
            { text: "$v_1=(1, 1, 1), v_2=(2, 2, 2)$", isCorrect: false, rationale: " $v_2 = 2v_1$。" },
            { text: "任意三個向量", isCorrect: false, rationale: "錯誤，需滿足 $c_1v_1 + c_2v_2 + c_3v_3 = 0$ 只有平凡解 $c_i=0$。" }
        ]
    },
    {
        subject: "Science", topic: "正交矩陣", question: "若矩陣 $Q$ 滿足 $Q^T Q = I$ ($I$ 為單位矩陣)，則 $Q$ 稱為：",
        answerOptions: [
            { text: "埃爾米特矩陣", isCorrect: false, rationale: " $A = A^*$。" },
            { text: "正交矩陣", isCorrect: true, rationale: "正交矩陣的定義，其行向量和列向量都是正交單位向量。" },
            { text: "對角化矩陣", isCorrect: false, rationale: "錯誤。" },
            { text: "可逆矩陣", isCorrect: false, rationale: "正交矩陣必然可逆，但反之不一定。" }
        ]
    },
    {
        subject: "Science", topic: "特徵向量", question: "矩陣的特徵向量 $\\mathbf{v}$ 與其對應的特徵值 $\\lambda$ 滿足哪個方程？",
        answerOptions: [
            { text: "$A \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: true, rationale: "特徵值與特徵向量的基本定義。" },
            { text: "$A \\mathbf{v} = 0$", isCorrect: false, rationale: "這是齊次方程組。" },
            { text: "$\\det(A - \\lambda I) = 0$", isCorrect: false, rationale: "這是特徵多項式，用於求特徵值。" },
            { text: "$A^T \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    
    // --- 計算機概論 (History) ---
    {
        subject: "History", topic: "主題範圍", question: "請問 '計概' 通常不包含哪個主題？",
        answerOptions: [
            { text: "網路通訊", isCorrect: false, rationale: "包含。" },
            { text: "資料結構", isCorrect: false, rationale: "包含。" },
            { text: "作業系統", isCorrect: false, rationale: "包含。" },
            { text: "生物化學", isCorrect: true, rationale: "這是獨立的生命科學領域。" }
        ]
    },
    {
        subject: "History", topic: "記憶體", question: "在計算機中，哪個儲存裝置在斷電後會丟失數據？",
        answerOptions: [
            { text: "硬碟 (HDD)", isCorrect: false, rationale: "非揮發性儲存。" },
            { text: "唯讀記憶體 (ROM)", isCorrect: false, rationale: "非揮發性儲存。" },
            { text: "隨機存取記憶體 (RAM)", isCorrect: true, rationale: "RAM 是揮發性記憶體，斷電後數據遺失。" },
            { text: "固態硬碟 (SSD)", isCorrect: false, rationale: "非揮發性儲存。" }
        ]
    },
    {
        subject: "History", topic: "網路協定", question: "網頁瀏覽器用於從伺服器請求網頁的協定是？",
        answerOptions: [
            { text: "FTP", isCorrect: false, rationale: "用於檔案傳輸。" },
            { text: "SMTP", isCorrect: false, rationale: "用於郵件傳輸。" },
            { text: "HTTP/HTTPS", isCorrect: true, rationale: "超文本傳輸協定。" },
            { text: "TCP", isCorrect: false, rationale: "用於連線的傳輸層協定。" }
        ]
    },
    {
        subject: "History", topic: "資料結構", question: "先進先出 (FIFO) 的資料結構是？",
        answerOptions: [
            { text: "堆疊 (Stack)", isCorrect: false, rationale: "後進先出 (LIFO)。" },
            { text: "佇列 (Queue)", isCorrect: true, rationale: "先進先出 (FIFO)。" },
            { text: "連結串列 (Linked List)", isCorrect: false, rationale: "這是一種線性結構，但不是存取方式。" },
            { text: "樹 (Tree)", isCorrect: false, rationale: "非線性結構。" }
        ]
    },
    {
        subject: "History", topic: "作業系統", question: "作業系統的主要功能不包含下列哪項？",
        answerOptions: [
            { text: "處理器管理 (CPU 排程)", isCorrect: false, rationale: "包含。" },
            { text: "記憶體管理", isCorrect: false, rationale: "包含。" },
            { text: "輸入/輸出 (I/O) 設備管理", isCorrect: false, rationale: "包含。" },
            { text: "繪製 3D 圖形", isCorrect: true, rationale: "這是應用程式或圖形卡驅動程式的功能。" }
        ]
    },

    // --- 經濟學 (Geography) ---
    {
        subject: "Geography", topic: "供需平衡", question: "在經濟學中，如果供給超過需求，市場會產生什麼？",
        answerOptions: [
            { text: "短缺 (Shortage)", isCorrect: false, rationale: "需求超過供給會短缺。" },
            { text: "過剩 (Surplus)", isCorrect: true, rationale: "供給超過需求會造成過剩，導致價格下跌。" },
            { text: "平衡 (Equilibrium)", isCorrect: false, rationale: "供給等於需求時達到平衡。" },
            { text: "通膨 (Inflation)", isCorrect: false, rationale: "物價普遍上漲的現象。" }
        ]
    },
    {
        subject: "Geography", topic: "價格彈性", question: "當某商品的需求價格彈性大於 1 時，稱該需求為？",
        answerOptions: [
            { text: "缺乏彈性", isCorrect: false, rationale: "彈性小於 1。" },
            { text: "單一彈性", isCorrect: false, rationale: "彈性等於 1。" },
            { text: "富有彈性", isCorrect: true, rationale: "彈性大於 1，價格變動會導致需求量大幅變動。" },
            { text: "完全彈性", isCorrect: false, rationale: "彈性趨近於無限大。" }
        ]
    },
    {
        subject: "Geography", topic: "GDP 計算", question: "計算 GDP 時，下列哪項不應計入？",
        answerOptions: [
            { text: "新生產的汽車銷售額", isCorrect: false, rationale: "計入。" },
            { text: "二手房屋交易佣金", isCorrect: false, rationale: "佣金是服務，計入；但房屋本身不計入。" },
            { text: "政府提供的國防服務價值", isCorrect: false, rationale: "計入。" },
            { text: "在股市買賣股票的金額", isCorrect: true, rationale: "股票交易只是資產轉移，不屬於當期生產的商品或服務。" }
        ]
    },
    {
        subject: "Geography", topic: "市場結構", question: "只有單一生產者，且產品沒有近似替代品的市場結構稱為？",
        answerOptions: [
            { text: "寡占", isCorrect: false, rationale: "少數生產者。" },
            { text: "壟斷性競爭", isCorrect: false, rationale: "多數生產者，產品差異化。" },
            { text: "完全競爭", isCorrect: false, rationale: "許多生產者，同質產品。" },
            { text: "獨佔 (Monopoly)", isCorrect: true, rationale: "單一生產者，沒有近似替代品。" }
        ]
    },
    {
        subject: "Geography", topic: "財政政策", question: "政府為了刺激經濟而增加開支，屬於哪種財政政策？",
        answerOptions: [
            { text: "緊縮性財政政策", isCorrect: false, rationale: "用於抑制過熱的經濟。" },
            { text: "擴張性財政政策", isCorrect: true, rationale: "透過增加政府支出或減稅來刺激總需求。" },
            { text: "貨幣政策", isCorrect: false, rationale: "由中央銀行控制利率或貨幣供給。" },
            { text: "中性財政政策", isCorrect: false, rationale: "錯誤。" }
        ]
    },

    // --- 微積分 (English) ---
    {
        subject: "English", topic: "微分基本式", question: "微積分中，函數 $f(x) = x^2$ 的導數是？",
        answerOptions: [
            { text: "$x$", isCorrect: false, rationale: "錯誤。" },
            { text: "$2x$", isCorrect: true, rationale: "利用冪次法則：$\\frac{d}{dx} x^n = nx^{n-1}$。" },
            { text: "$x^3/3$", isCorrect: false, rationale: "這是 $x^2$ 的不定積分。" },
            { text: "1", isCorrect: false, rationale: "這是 $x$ 的導數。" }
        ]
    },
    {
        subject: "English", topic: "定積分", question: "計算定積分 $\\int_0^1 (3x^2 + 1) dx$ 的值。",
        answerOptions: [
            { text: "1", isCorrect: false, rationale: "錯誤。" },
            { text: "2", isCorrect: true, rationale: " $\\int_0^1 (3x^2 + 1) dx = [x^3 + x]_0^1 = (1^3 + 1) - (0) = 2$。" },
            { text: "3", isCorrect: false, rationale: "錯誤。" },
            { text: "0", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "English", topic: "鏈鎖律", question: "若 $f(x) = \\sin(2x)$，則 $f'(x)$ 是什麼？",
        answerOptions: [
            { text: "$\\cos(2x)$", isCorrect: false, rationale: "忘記乘內部函數的導數。" },
            { text: "$2 \\cos(2x)$", isCorrect: true, rationale: "利用鏈鎖律：$\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)$。" },
            { text: "$-2 \\cos(2x)$", isCorrect: false, rationale: "錯誤。" },
            { text: "$2 \\sin(2x)$", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "English", topic: "極限", question: "計算極限 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$。",
        answerOptions: [
            { text: "$0$", isCorrect: false, rationale: "錯誤。" },
            { text: "$1$", isCorrect: true, rationale: "這是微積分中常見的基本極限公式。" },
            { text: "$\\infty$", isCorrect: false, rationale: "錯誤。" },
            { text: "不存在", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "English", topic: "多變量", question: "函數 $f(x, y) = x^2 y$ 對 $x$ 的偏導數 $\\frac{\\partial f}{\\partial x}$ 是？",
        answerOptions: [
            { text: "$2x$", isCorrect: false, rationale: " $y$ 視為常數。" },
            { text: "$2xy$", isCorrect: true, rationale: " $y$ 視為常數，$\\frac{\\partial}{\\partial x} (x^2 y) = y \\cdot \\frac{d}{dx} (x^2) = 2xy$。" },
            { text: "$x^2$", isCorrect: false, rationale: "這是對 $y$ 的偏導數。" },
            { text: "$2x^2 y$", isCorrect: false, rationale: "錯誤。" }
        ]
    },

    // --- 統計學 (Coding) ---
    {
        subject: "Coding", topic: "敘述統計", question: "統計學中，樣本與母體之間的差異，最常使用什麼指標衡量？",
        answerOptions: [
            { text: "平均數 (Mean)", isCorrect: false, rationale: "平均數是集中趨勢的測量。" },
            { text: "標準差 (Standard Deviation)", isCorrect: true, rationale: "標準差衡量數據的分散程度，間接反映樣本對母體的代表性。" },
            { text: "變異係數 (Coefficient of Variation)", isCorrect: false, rationale: "是相對分散程度的測量。" },
            { text: "P值 (P-value)", isCorrect: false, rationale: "用於假設檢定。" }
        ]
    },
    {
        subject: "Coding", topic: "機率分佈", question: "若變數 $X$ 服從常態分佈 (Normal Distribution)，則其分佈圖形呈現何種形狀？",
        answerOptions: [
            { text: "L 型", isCorrect: false, rationale: "錯誤。" },
            { text: "J 型", isCorrect: false, rationale: "錯誤。" },
            { text: "雙峰型 (Bimodal)", isCorrect: false, rationale: "錯誤。" },
            { text: "鐘形 (Bell-shaped)", isCorrect: true, rationale: "常態分佈的典型特徵。" }
        ]
    },
    {
        subject: "Coding", topic: "假設檢定", question: "在假設檢定中，拒絕虛無假設 ($H_0$) 但 $H_0$ 事實上為真時，稱為什麼錯誤？",
        answerOptions: [
            { text: "型一錯誤 (Type I Error)", isCorrect: true, rationale: "型一錯誤的定義為：拒絕真實的 $H_0$。" },
            { text: "型二錯誤 (Type II Error)", isCorrect: false, rationale: "型二錯誤為：接受錯誤的 $H_0$。" },
            { text: "抽樣錯誤", isCorrect: false, rationale: "錯誤。" },
            { text: "測量錯誤", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "Coding", topic: "迴歸分析", question: "在簡單線性迴歸 $Y = \\beta_0 + \\beta_1 X + \\epsilon$ 中， $\\beta_1$ 代表什麼？",
        answerOptions: [
            { text: "截距 (Intercept)", isCorrect: false, rationale: "這是 $\\beta_0$。" },
            { text: "殘差 (Residual)", isCorrect: false, rationale: "這是 $\\epsilon$。" },
            { text: "斜率 (Slope)", isCorrect: true, rationale: " $\\beta_1$ 衡量 $X$ 變化對 $Y$ 變化的影響。" },
            { text: "誤差項的標準差", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "Coding", topic: "集中趨勢", question: "若數據集為 $\{2, 3, 5, 5, 10\}$，其中位數 (Median) 是多少？",
        answerOptions: [
            { text: "5", isCorrect: true, rationale: "數據排序後為 $2, 3, 5, 5, 10$。中間的數是 $5$。" },
            { text: "5.5", isCorrect: false, rationale: "這是平均數 $(2+3+5+5+10)/5 = 5$。" },
            { text: "2", isCorrect: false, rationale: "這是最小值。" },
            { text: "10", isCorrect: false, rationale: "這是眾數 (Mode) 也是 $5$。" }
        ]
    },
];

// === C. 影片 ID、師資與 LINE 連結 (已修正為 11 位元標準 ID) ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師 試聽課程", teacher: "周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師 試聽課程", teacher: "周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師 試聽課程", teacher: "張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師 試聽課程", teacher: "牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師 試聽課程", teacher: "梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師 試聽課程", teacher: "張翔 老師", youtubeId: "GhAxVkA1He8" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M"; // 您的 LINE 連結

let currentSubject = '';
let currentScore = 0;
let answeredQuestions = new Set();
let wrongQuestionsData = [];
let startTime;
let player;

// **[已移除] 積分變數與規則**
// let userPoints = 0;
// const POINT_SYSTEM = { ... };


// === D. 頁面控制 ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    if (pageId === 'resourcePage') {
        initYouTube(); // 確保每次進入資源頁都嘗試初始化 YT 播放器
        generateStudyPlan();
    }
}


// === E. 表單資料提交函數 (發送 POST 請求到 Google Forms) ===
async function submitDataToGoogleForm(url, dataToSubmit) {
    const formError = document.getElementById('formError');
    if (url === GOOGLE_FORM_A_URL) formError.style.display = 'none';

    const body = new URLSearchParams();

    for (const key in dataToSubmit) {
        body.append(key, dataToSubmit[key]);
    }
    
    try {
        await fetch(url, {
            method: 'POST',
            body: body,
            mode: 'no-cors' // 必須設定為 no-cors 才能避免跨域錯誤
        });

        console.log(`資料已發送到 Google Forms (${url})`);
        return true;

    } catch (error) {
        console.error('Google Forms 提交失敗:', error);
        if (url === GOOGLE_FORM_A_URL) {
            formError.textContent = '使用者資訊提交失敗，請檢查網路。';
            formError.style.display = 'block';
        }
        return false;
    }
}


// === F. 表單邏輯 ===
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 1. 驗證欄位
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
    formError.style.display = 'none';

    const uniValue = uniRadio.value === '其他' ? uniOtherText : uniRadio.value;
    const userGrade = gradeRadio.value;
    
    // 2. 準備提交數據 (表單 A)
    const dataToSubmit = {
        [FORM_IDS.FORM_A_NAME]: userName,
        [FORM_IDS.FORM_A_UNI]: uniValue,
        [FORM_IDS.FORM_A_DEPT_GRADE]: `${userDepartment} / ${userGrade}`,
        [FORM_IDS.FORM_A_PHONE]: userPhone,
        [FORM_IDS.FORM_A_GRADE]: userGrade,
    };

    // 3. 提交資料到 Google Form A
    const isSubmitted = await submitDataToGoogleForm(GOOGLE_FORM_A_URL, dataToSubmit);

    if (isSubmitted) {
        // 4. 提交成功後，跳轉到第二頁
        localStorage.setItem('userData', JSON.stringify({
            name: userName,
            uni: uniValue,
            dept: userDepartment,
            grade: userGrade,
            phone: userPhone
        }));
        startTime = Date.now();

        showPage('subjectSelectPage'); // 成功跳轉
    }
});

// "其他" 大學的顯示/隱藏邏輯
document.querySelectorAll(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]`).forEach(r => {
    r.addEventListener('change', function() {
        const textInput = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
        if (this.value === '其他') {
            textInput.disabled = false;
            textInput.required = true;
            textInput.focus();
        } else {
            textInput.disabled = true;
            textInput.required = false;
            textInput.value = '';
        }
    });
});


// === G. 測驗邏輯 (第二頁開始) ===

// **第二頁點擊科目按鈕的事件監聽器**
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz(currentSubject); // 呼叫 startQuiz 函式
    });
});

function startQuiz(subject) {
    currentScore = 0;
    answeredQuestions.clear();
    wrongQuestionsData = [];
    
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    
    // 取得該科目的試題
    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === subject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    
    // 處理科目名稱顯示
    const button = document.querySelector(`.subject-button[data-subject="${subject}"]`);
    const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    
    document.getElementById('quizTitle').innerText = `正在測驗：${subjectName}`;

    // 渲染題目
    quizList.forEach((q, index) => {
        const qNum = index + 1;
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="question-text">Q${qNum}. ${q.question}</div>
            <ul class="options-list">
                ${q.answerOptions.map((opt, i) => `
                    <li class="option-item" data-idx="${i}">
                        <span style="font-weight:bold; margin-right:8px;">${String.fromCharCode(65+i)}.</span> ${opt.text}
                    </li>
                `).join('')}
            </ul>
            <div class="rationale" id="rat-${index}"></div>
        `;
        container.appendChild(card);
    });

    // 監聽選項點擊事件
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleAnswerClick);
    });

    showPage('quizPage'); // 跳轉到測驗頁
    
    // 渲染數學公式
    if (window.renderMathInElement) {
        renderMathInElement(container, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    }
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
        
        wrongQuestionsData.push({
            topic: currentQ.topic,
            question: currentQ.question
        });
    }

    // 顯示解析
    const ratDiv = document.getElementById(`rat-${qIdx}`);
    ratDiv.innerHTML = `<strong>💡 解析：</strong> ${currentQ.answerOptions.find(o => o.isCorrect).rationale}`;
    ratDiv.classList.add('visible');
    
    if (window.renderMathInElement) {
        renderMathInElement(ratDiv, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    }

    // 檢查是否所有題目都已作答 (5 題)
    if (answeredQuestions.size === 5) {
        setTimeout(showQuizResult, 800);
    }
}

/**
 * 顯示測驗結果，並計算潛能等級 (取代積分)
 */
function showQuizResult() {
    document.getElementById('quiz-content').classList.add('hidden');
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');
    
    document.getElementById('score').innerText = currentScore;
    
    let potentialLevel = '';
    let comment = '';
    
    // **[已修改] 設定潛能等級和評語**
    if (currentScore === 100) {
        potentialLevel = 'S 級頂尖';
        comment = `🌟 ${potentialLevel} 學霸潛能！您的知識結構扎實且應用能力極強，遠超多數清交學生！寒假目標：維持手感，挑戰更進階的題型。`;
    } else if (currentScore >= 80) {
        potentialLevel = 'A 級強者';
        comment = `💎 ${potentialLevel} 您的基礎知識掌握度高，但在特定章節仍有提升空間。寒假目標：鎖定弱點，精準補強，就能晉升 S 級！`;
    } else if (currentScore >= 60) {
        // *** 此處為 B 級修改 ***
        potentialLevel = 'B 級穩定';
        comment = `✨ ${potentialLevel} 您已具備一定基礎，但面對高難度挑戰時，計算或觀念整合能力略顯不足。寒假目標：建立完整知識地圖，從頭打好根基。`;
    } else {
        // *** 此處為 C 級修改 ***
        potentialLevel = 'C 級潛能覺醒中';
        comment = `💪 ${potentialLevel} 別灰心！這份測驗剛好幫您找出盲點。立即規劃補強，寒假後逆轉勝！`;
    }
    
    document.getElementById('scoreComment').innerHTML = `您的潛能等級：<strong>${potentialLevel}</strong><br>${comment}`;

    // 儲存潛能等級，用於下一頁顯示
    localStorage.setItem('potentialLevel', potentialLevel);

    sendScoreAndTime();
}

/**
 * 計算作答時間並提交分數與時間到 Google Form B
 */
function sendScoreAndTime() {
    if (!startTime) return;
    
    const endTime = Date.now();
    const durationMs = endTime - startTime;
    
    // 格式化時間
    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const timeString = `${hours}小時${minutes}分${seconds}秒`;
    
    // 準備第二次提交的數據 (表單 B)
    const scoreDataToSubmit = {
        [FORM_IDS.FORM_B_SCORE]: currentScore,
        [FORM_IDS.FORM_B_TIME]: timeString,
    };
    
    // 提交到 Google Form B
    submitDataToGoogleForm(GOOGLE_FORM_B_URL, scoreDataToSubmit).then(success => {
        if (success) {
            console.log("分數與時間已成功提交到 Form B。");
        } else {
            console.error("分數與時間提交到 Form B 失敗。");
        }
    });
}

// 點擊前往資源頁
document.getElementById('goToResourceBtn').addEventListener('click', function() {
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    
    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    document.getElementById('finalSubjectName').innerText = subjectName;
    
    document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    
    // **[修正] 顯示潛能等級 (取代積分)**
    const potentialLevel = localStorage.getItem('potentialLevel') || 'C 級覺醒中';
    document.getElementById('potentialLevelDisplay').innerText = potentialLevel;


    let msg = "";
    if (currentScore === 100) msg = "實力驚人！看這部進階影片來挑戰極限吧！";
    else msg = "針對您的測驗結果，顧問推薦您先由這部影片打底：";
    document.getElementById('scoreMessage').innerText = msg;
    
    document.getElementById('lineCtaButton').href = LINE_CTA_LINK;

    showPage('resourcePage');
});


// === H. 讀書計畫生成引擎 (修正多餘冒號) ===
function generateStudyPlan() {
    const week1 = document.getElementById('plan-week-1');
    const week2 = document.getElementById('plan-week-2');
    const week3 = document.getElementById('plan-week-3');
    const week4 = document.getElementById('plan-week-4');
    const weaknessTag = document.getElementById('weaknessTag');

    [week1, week2, week3, week4].forEach(el => el.innerHTML = '');

    let topics = [];
    if (wrongQuestionsData.length > 0) {
        topics = wrongQuestionsData.map(d => d.topic);
        weaknessTag.innerText = topics.join('、');
        
        const half = Math.ceil(topics.length / 2);
        const w1Topics = topics.slice(0, half);
        const w2Topics = topics.slice(half);

        week1.innerHTML = `<ul>${w1Topics.map(t => `<li>🎯 <strong>重點補強：</strong>重讀 ${t} 章節觀念</li>`).join('')}<li>📖 <strong>基礎複習：</strong>整理該章節筆記與公式推導</li></ul>`;
        
        if (w2Topics.length > 0) {
            week2.innerHTML = `<ul>${w2Topics.map(t => `<li>🎯 <strong>重點補強：</strong>針對 ${t} 進行題型演練</li>`).join('')}<li>📝 <strong>自我檢測：</strong>完成相關單元練習題 20 題</li></ul>`;
        } else {
            week2.innerHTML = `<ul><li>💪 <strong>延伸練習：</strong>針對第一週弱點進行進階題型挑戰</li><li>🔄 <strong>混合題型：</strong>開始練習跨章節綜合題</li></ul>`;
        }

    } else {
        weaknessTag.innerText = "全數答對！菁英強化版";
        week1.innerHTML = `<ul><li>🚀 <strong>超前部署：</strong>直接挑戰研究所考古題 (108-110年)</li><li>📚 <strong>廣度閱讀：</strong>閱讀相關原文書章節補充觀念</li></ul>`;
        week2.innerHTML = `<ul><li>⚡ <strong>速度訓練：</strong>計時完成一份完整模擬試卷</li><li>🔍 <strong>難題鑽研：</strong>尋找該科目最困難的特殊題型解析</li></ul>`;
    }

    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const sName = button ? button.innerText.replace(/[^\u4e00-\u9fa5]/g, '') : "該科目";

    // 修正：這裡的 <strong> 標籤內移除了多餘的冒號
    week3.innerHTML = `
        <ul>
            <li>🧩 <strong>${sName} 跨章節整合：</strong>將各單元觀念串聯，繪製心智圖。</li>
            <li>✍️ <strong>五年考古題演練 (Part 1)：</strong>完成近五年台聯大/台大試題。</li>
        </ul>`;
    
    week4.innerHTML = `
        <ul>
            <li>🏁 <strong>考前實戰模擬：</strong>完全比照考試時間 (80-100分鐘) 作答。</li>
            <li>❤️ <strong>調整身心狀態：</strong>複習錯誤筆記，不再鑽牛角尖，保持手感。</li>
        </ul>`;
}


// === I. YouTube 嵌入邏輯 (簡化版) ===
function initYouTube() {
    const container = document.getElementById('youtubePlayer');
    // 防止重複載入 iframe
    if (container.querySelector('iframe')) return;
    
    const vidId = VIDEO_LINKS[currentSubject].youtubeId;
    
    // 檢查 ID 是否為 11 位元且存在
    if (vidId && vidId.length === 11) {
        // 使用標準 YouTube 嵌入連結
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${vidId}?autoplay=0&controls=1`;
        container.innerHTML = `<iframe width="100%" height="100%" src="${youtubeEmbedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<p style="color: red; padding: 20px; text-align: center;">影片 ID 錯誤或缺失。請檢查 script.js 檔案中的 ID 格式是否為 11 個字元。</p>`;
    }
}


// 初始化：檢查是否有儲存的使用者資料，決定顯示哪個頁面
document.addEventListener('DOMContentLoaded', () => {
    // 預設跳轉到科目選擇頁（如果已有資料）或用戶資訊頁
    if (localStorage.getItem('userData')) {
        showPage('subjectSelectPage');
    } else {
        showPage('userInfoPage');
    }
    
    // 處理其他大學輸入框的初始狀態
    const uniOtherText = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
    if (uniOtherText) {
        uniOtherText.disabled = true;
        uniOtherText.required = false;
    }
});
