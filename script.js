// === A. Google 表單設定與變數 ===

// **表單 A: 使用者資訊**
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

// **Google 表單欄位 ID 映射 (僅保留表單 A)**
const FORM_IDS = {
    // ------------------------------------------------------------------
    // 表單 A: 用戶資訊 (Google Entry ID)
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_DEPT_GRADE: 'entry.1169658860',
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_GRADE: 'entry.247937200',
    
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

// === B. 核心資料結構：題目與測驗設定 ===
const ALL_QUIZ_DATA = [
    // --- 工程數學 (Math) ---
{
    subject: "Math", topic: "一階常微分方程", question: "求解可分離變數微分方程：$\\frac{dy}{dx} = 3x^2 y$，且 $y(0)=1$，求 $y$ 的通解。",
    answerOptions: [
        { text: "$y = e^{x^3} + C$", isCorrect: false, rationale: "這是積分常數放錯位置的常見錯誤，正確應將常數合併到指數中。" },
        { text: "$y = e^{x^3}$", isCorrect: true, rationale: "分離變數得 $\\frac{dy}{y} = 3x^2 dx$，積分得 $\\ln|y| = x^3 + C$，代入初始條件 $y(0)=1$ 得 $C=0$，故 $y = e^{x^3}$。" },
        { text: "$y = x^3 + C$", isCorrect: false, rationale: "這是忘記指數運算的錯誤。" },
        { text: "$y = \\ln|x^3| + 1$", isCorrect: false, rationale: "這是混淆對數與指數函數的錯誤。" }
    ]
},
{
    subject: "Math", topic: "矩陣運算", question: "若 $A = \\begin{bmatrix} 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$，$B = \\begin{bmatrix} 1 & 0 \\\\ 2 & -1 \\end{bmatrix}$，求 $A + B$。",
    answerOptions: [
        { text: "$\\begin{bmatrix} 3 & 1 \\\\ 1 & 2 \\end{bmatrix}$", isCorrect: true, rationale: "矩陣加法為對應元素相加：$\\begin{bmatrix} 2+1 & 1+0 \\\\ -1+2 & 3+(-1) \\end{bmatrix} = \\begin{bmatrix} 3 & 1 \\\\ 1 & 2 \\end{bmatrix}$。" },
        { text: "$\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$", isCorrect: false, rationale: "錯誤的對應元素計算，第一列第一行應為 2+1=3，而非 2。" },
        { text: "$\\begin{bmatrix} 3 & 0 \\\\ 1 & 4 \\end{bmatrix}$", isCorrect: false, rationale: "錯誤的對應元素計算，第二列第一行應為 -1+2=1，但第二列第二行錯誤。" },
        { text: "$\\begin{bmatrix} 3 & 1 \\\\ -3 & 2 \\end{bmatrix}$", isCorrect: false, rationale: "第二列第一行計算錯誤：應為 -1+2=1，而非 -3。" }
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

// === C. 影片 ID、師資與 LINE 連結 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師 試聽課程", teacher: "周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師 試聽課程", teacher: "周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師 試聽課程", teacher: "張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師 試聽課程", teacher: "牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師 試聽課程", teacher: "梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師 試聽課程", teacher: "張翔 老師", youtubeId: "GhAxVkA1He8" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M";

// === D. 懸浮通知設定 ===
const NOTIFICATION_TEXTS = [
    "🔥 快！完成測驗就能有抽獎資格！",
    "⏰ 測驗只有5題，立即抽$500！",
    "🚀 頂大學生都在測驗，別落後！",
    "💡 5題測驗就能找出你的寒假進步關鍵！",
    "🎯 限時活動：今天完成測驗可找顧問一對一諮詢！",
    "⚡ 猶豫就會錯過！立即填寫，馬上測驗！",
    "📈 你的競爭對手已經在規劃寒假進度了！",
    "🌟 僅需1分鐘填寫資料，立即開啟學霸養成之路！",
    "🏆 測驗完成即可參與現金紅包抽獎！",
    "💪 別讓拖延成為你寒假進步的絆腳石！",
    "🚨 活動名額有限，立即行動獲取專屬計畫！",
    "✨ 你的寒假讀書計畫正在等待解鎖！",
    "🎁 完成測驗立即獲得$500紅包抽獎機會！",
    "📚 寒假逆襲就從這5題開始！",
    "💥 蹦!有一位清大學生完成測驗啦！",
    "🔔 提醒：有一交大學生完成測驗！",
    "🚨 時間正在流逝，立即開始你的學霸計畫！",
    "🏅 測驗高分者將獲得專屬潛力值！",
    "⚡ 加速！距離紅包抽獎只剩不到一個月！",
    "💎 你的專屬學習顧問正在等待你的測驗結果！"
];

let currentSubject = '';
let currentScore = 0;
let answeredQuestions = new Set();
let wrongQuestionsData = [];
let startTime;
let notificationTimer = null;
let notificationIndex = 0;

// === 新增變數 ===
let hasClickedFirstTime = false; // 記錄是否第一次點擊按鈕
let isNotificationActive = false; // 記錄通知是否正在顯示

// === E. 格式驗證函式 ===

function isValidName(name) {
    return /^[\u4e00-\u9fa5]{2,}$/.test(name);
}

function isValidTaiwanPhone(phone) {
    return /^\d{10}$/.test(phone);
}

// === F. 頁面控制 ===

function showPage(pageId) {
    console.log(`切換到頁面: ${pageId}`);
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    // 控制懸浮通知顯示
    const notification = document.getElementById('floatingNotification');
    const notification2 = document.getElementById('floatingNotification2');
    
    if (pageId === 'userInfoPage') {
        startNotificationCycle();
        // 隱藏第二個通知
        notification2.classList.remove('active');
        notification2.classList.add('hidden');
        isNotificationActive = false;
    } else if (pageId === 'quizPage') {
        stopNotificationCycle();
        notification.classList.add('hidden');
        // 隱藏第二個通知
        notification2.classList.remove('active');
        notification2.classList.add('hidden');
        isNotificationActive = false;
    } else if (pageId === 'subjectSelectPage' || pageId === 'resourcePage') {
        stopNotificationCycle();
        notification.classList.add('hidden');
        // 隱藏第二個通知
        notification2.classList.remove('active');
        notification2.classList.add('hidden');
        isNotificationActive = false;
    }
    // 測驗結果頁面不需要特別處理，因為按鈕點擊時會控制顯示
    
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan();
    }
}

// === G. 懸浮通知功能 ===

function startNotificationCycle() {
    // 清除現有的計時器
    stopNotificationCycle();
    
    // 初始化通知索引
    notificationIndex = Math.floor(Math.random() * NOTIFICATION_TEXTS.length);
    
    // 開始循環
    notificationTimer = setTimeout(showNotification, 3000); // 3秒後第一次顯示
}

function stopNotificationCycle() {
    if (notificationTimer) {
        clearTimeout(notificationTimer);
        notificationTimer = null;
    }
}

function showNotification() {
    const notification = document.getElementById('floatingNotification');
    const notificationText = document.getElementById('notificationText');
    
    // 隨機選擇一條通知文案
    notificationText.textContent = NOTIFICATION_TEXTS[notificationIndex];
    
    // 顯示通知
    notification.classList.remove('hidden');
    
    // 更新索引
    notificationIndex = (notificationIndex + 1) % NOTIFICATION_TEXTS.length;
    
    // 2秒後隱藏通知
    setTimeout(() => {
        notification.classList.add('hidden');
        
        // 3秒後再次顯示通知
        notificationTimer = setTimeout(showNotification, 3000);
    }, 2000);
}

// === H. 表單資料提交函數 (僅用於表單 A) ===

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
            mode: 'no-cors'
        });
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

// === I. 表單邏輯 ===

document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const userName = document.getElementById(FORM_IDS.HTML_NAME_ID).value.trim();
    const userDepartment = document.getElementById(FORM_IDS.HTML_DEPT_ID).value.trim();
    const userPhone = document.getElementById(FORM_IDS.HTML_PHONE_ID).value.trim();
    const uniOtherText = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID).value.trim();
    const formError = document.getElementById('formError');

    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]:checked`);
    const gradeRadio = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO_NAME}"]:checked`);

    formError.style.display = 'none';

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
        formError.textContent = "聯絡手機格式錯誤：請輸入 10 碼數字 (例如 09xxxxxxxx)。";
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
        localStorage.setItem('userData', JSON.stringify({
            name: userName,
            uni: uniValue,
            dept: userDepartment,
            grade: userGrade,
            phone: userPhone
        }));
        startTime = Date.now();
        showPage('subjectSelectPage');
    }
});

// 大學選項切換邏輯
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

// === J. 測驗邏輯 ===

document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz(currentSubject);
    });
});

function startQuiz(subject) {
    // 重置第一次點擊標記
    hasClickedFirstTime = false;
    isNotificationActive = false;
    
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

    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleAnswerClick);
    });

    showPage('quizPage');
    
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

    if (answeredQuestions.size === 5) {
        setTimeout(showQuizResult, 800);
    }
}

function showQuizResult() {
    console.log('顯示測驗結果，分數:', currentScore);
    document.getElementById('quiz-content').classList.add('hidden');
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');
    
    document.getElementById('score').innerText = currentScore;
    
    let potentialLevel = '';
    let comment = '';
    
    if (currentScore === 100) {
        potentialLevel = 'S 級頂尖';
        comment = `🌟  學霸潛能！您的知識結構扎實且應用能力極強，遠超多數清交學生！寒假目標：維持手感，挑戰更進階的題型。`;
    } else if (currentScore >= 80) {
        potentialLevel = 'A 級強者';
        comment = `💎 您的基礎知識掌握度高，但在特定章節仍有提升空間。寒假目標：鎖定弱點，精準補強，就能晉升 S 級！`;
    } else if (currentScore >= 60) {
        potentialLevel = 'B 級穩定';
        comment = `✨ 您已具備一定基礎，但面對高難度挑戰時，計算或觀念整合能力略顯不足。寒假目標：建立完整知識地圖，從頭打好根基。`;
    } else {
        potentialLevel = 'C 級覺醒中';
        comment = `💪  別灰心！這份測驗剛好幫您找出盲點。立即規劃補強，寒假後逆轉勝！`;
    }
    
    document.getElementById('scoreComment').innerHTML = `您的潛能等級：<strong>${potentialLevel}</strong><br>${comment}`;
    localStorage.setItem('potentialLevel', potentialLevel);
    
    // === 重要修正：在這裡直接綁定按鈕事件 ===
    bindResourceButton();
}

// === K. 按鈕事件監聽器 ===

function setupEventListeners() {
    console.log('設定事件監聽器...');
    
    // 簡化方法：直接在document上監聽點擊事件
    document.addEventListener('click', function(event) {
        const notification2 = document.getElementById('floatingNotification2');
        
        // 如果通知是活躍狀態，且點擊的不是通知內容區域
        if (notification2 && notification2.classList.contains('active')) {
            const content = notification2.querySelector('.notification-content2');
            
            // 檢查點擊是否在內容區域之外
            if (content && !content.contains(event.target)) {
                console.log('點擊通知以外區域，關閉通知');
                closeSecondNotification();
            }
        }
    });
}

// 關閉第二個通知的函數
function closeSecondNotification() {
    const notification2 = document.getElementById('floatingNotification2');
    if (notification2) {
        notification2.classList.remove('active');
        notification2.classList.add('hidden');
        isNotificationActive = false;
        console.log('通知已關閉');
    }
}

// === 修正：直接綁定資源按鈕事件 ===
function bindResourceButton() {
    const goToResourceBtn = document.getElementById('goToResourceBtn');
    if (goToResourceBtn) {
        console.log('找到按鈕元素 goToResourceBtn，準備綁定事件');
        
        // 移除所有現有的事件監聽器（通過克隆和替換）
        const newBtn = goToResourceBtn.cloneNode(true);
        goToResourceBtn.parentNode.replaceChild(newBtn, goToResourceBtn);
        
        // 重新獲取按鈕引用
        const btn = document.getElementById('goToResourceBtn');
        
        // 先移除之前的事件監聽器，避免重複綁定
        btn.removeEventListener('click', handleFirstClick);
        btn.removeEventListener('click', handleSecondClick);
        
        // 重置點擊狀態
        hasClickedFirstTime = false;
        isNotificationActive = false;
        
        // 綁定第一次點擊事件
        btn.addEventListener('click', handleFirstClick);
        
        console.log('按鈕事件綁定完成');
    } else {
        console.log('警告：找不到按鈕元素 goToResourceBtn');
    }
}

// 第一次點擊處理函數
function handleFirstClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('第一次點擊按鈕');
    
    // 標記為已點擊
    hasClickedFirstTime = true;
    
    // 顯示第二個懸浮通知
    const notification2 = document.getElementById('floatingNotification2');
    if (notification2) {
        notification2.classList.remove('hidden');
        notification2.classList.add('active');
        isNotificationActive = true;
        console.log('第二個通知已顯示');
        
        // 移除第一次點擊事件，綁定第二次點擊事件
        const btn = document.getElementById('goToResourceBtn');
        btn.removeEventListener('click', handleFirstClick);
        btn.addEventListener('click', handleSecondClick);
    } else {
        console.log('錯誤：找不到第二個通知元素');
        // 如果找不到通知，直接跳轉到資源頁面
        goToResourcePage();
    }
}

// 第二次點擊處理函數
function handleSecondClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('第二次點擊按鈕，前往資源頁面');
    
    // 確保通知已關閉
    closeSecondNotification();
    
    // 短暫延遲後跳轉，確保動畫完成
    setTimeout(() => {
        goToResourcePage();
    }, 300);
}

// 跳轉到資源頁面的函數
function goToResourcePage() {
    console.log('前往資源頁面');
    
    // 設置資源頁面的數據
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    if (button) {
        const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
        document.getElementById('finalSubjectName').innerText = subjectName;
    }
    
    if (VIDEO_LINKS[currentSubject]) {
        document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    }
    
    const potentialLevel = localStorage.getItem('potentialLevel') || 'C 級覺醒中';
    document.getElementById('potentialLevelDisplay').innerText = potentialLevel;

    let msg = "";
    if (currentScore === 100) msg = "實力驚人！看這部進階影片來挑戰極限吧！";
    else msg = "針對您的測驗結果，顧問推薦您先由這部影片打底：";
    document.getElementById('scoreMessage').innerText = msg;
    
    const lineCtaButton = document.getElementById('lineCtaButton');
    if (lineCtaButton) {
        lineCtaButton.href = LINE_CTA_LINK;
    }

    showPage('resourcePage');
}

// === L. 讀書計畫生成引擎 ===

function generateStudyPlan() {
    const week1 = document.getElementById('plan-week-1');
    const week2 = document.getElementById('plan-week-2');
    const week3 = document.getElementById('plan-week-3');
    const week4 = document.getElementById('plan-week-4');
    const weaknessTag = document.getElementById('weaknessTag');

    [week1, week2, week3, week4].forEach(el => {
        if (el) el.innerHTML = '';
    });

    let topics = [];
    if (wrongQuestionsData.length > 0) {
        topics = wrongQuestionsData.map(d => d.topic);
        if (weaknessTag) weaknessTag.innerText = topics.join('、');
        
        const half = Math.ceil(topics.length / 2);
        const w1Topics = topics.slice(0, half);
        const w2Topics = topics.slice(half);

        if (week1) {
            week1.innerHTML = `<ul>${w1Topics.map(t => `<li>🎯 <strong>重點補強：</strong>重讀 ${t} 章節觀念</li>`).join('')}<li>📖 <strong>基礎複習：</strong>整理該章節筆記與公式推導</li></ul>`;
        }
        
        if (week2) {
            if (w2Topics.length > 0) {
                week2.innerHTML = `<ul>${w2Topics.map(t => `<li>🎯 <strong>重點補強：</strong>針對 ${t} 進行題型演練</li>`).join('')}<li>📝 <strong>自我檢測：</strong>完成相關單元練習題 20 題</li></ul>`;
            } else {
                week2.innerHTML = `<ul><li>💪 <strong>延伸練習：</strong>針對第一週弱點進行進階題型挑戰</li><li>🔄 <strong>混合題型：</strong>開始練習跨章節綜合題</li></ul>`;
            }
        }

    } else {
        if (weaknessTag) weaknessTag.innerText = "全數答對！菁英強化版";
        if (week1) {
            week1.innerHTML = `<ul><li>🚀 <strong>超前部署：</strong>直接挑戰研究所考古題 (108-110年)</li><li>📚 <strong>廣度閱讀：</strong>閱讀相關原文書章節補充觀念</li></ul>`;
        }
        if (week2) {
            week2.innerHTML = `<ul><li>⚡ <strong>速度訓練：</strong>計時完成一份完整模擬試卷</li><li>🔍 <strong>難題鑽研：</strong>尋找該科目最困難的特殊題型解析</li></ul>`;
        }
    }

    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const sName = button ? button.innerText.replace(/[^\u4e00-\u9fa5]/g, '') : "該科目";

    if (week3) {
        week3.innerHTML = `
            <ul>
                <li>🧩 <strong>${sName} 跨章節整合：</strong>將各單元觀念串聯，繪製心智圖。</li>
                <li>✍️ <strong>五年考古題演練 (Part 1)：</strong>完成近五年台聯大/台大試題。</li>
            </ul>`;
    }
    
    if (week4) {
        week4.innerHTML = `
            <ul>
                <li>🏁 <strong>考前實戰模擬：</strong>完全比照考試時間 (80-100分鐘) 作答。</li>
                <li>❤️ <strong>調整身心狀態：</strong>複習錯誤筆記，不再鑽牛角尖，保持手感。</li>
            </ul>`;
    }
}

// === M. YouTube 嵌入邏輯 ===

function initYouTube() {
    const container = document.getElementById('youtubePlayer');
    if (!container) return;
    
    if (container.querySelector('iframe')) return;
    
    const vidId = VIDEO_LINKS[currentSubject]?.youtubeId;
    if (vidId && vidId.length === 11) {
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${vidId}?autoplay=0&controls=1`;
        container.innerHTML = `<iframe width="100%" height="100%" src="${youtubeEmbedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<p style="color: red; padding: 20px; text-align: center;">影片 ID 錯誤或缺失。</p>`;
    }
}

// === N. 初始化 ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 載入完成，開始初始化...');
    
    // 設定事件監聽器
    setupEventListeners();
    
    // 檢查是否有已儲存的用戶資料
    if (localStorage.getItem('userData')) {
        showPage('subjectSelectPage');
    } else {
        showPage('userInfoPage');
    }
    
    // 初始化大學其他選項
    const uniOtherText = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
    if (uniOtherText) {
        uniOtherText.disabled = true;
        uniOtherText.required = false;
    }
    
    // 初始化 KaTeX 渲染
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ],
            throwOnError: false
        });
    }
    
    console.log('初始化完成');
});
