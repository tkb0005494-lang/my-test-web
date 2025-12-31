// === A. Google 表單設定與變數 ===
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_IDS = {
    FORM_A_NAME: 'entry.1711447572', FORM_A_DEPT_GRADE: 'entry.1169658860', FORM_A_PHONE: 'entry.1253545059',
    FORM_A_UNI: 'entry.651877505', FORM_A_GRADE: 'entry.247937200', HTML_UNI_RADIO_NAME: 'userUniversity',
    HTML_GRADE_RADIO_NAME: 'userGrade', HTML_NAME_ID: 'userName', HTML_UNI_OTHER_ID: 'uniOtherText',
    HTML_DEPT_ID: 'userDepartment', HTML_PHONE_ID: 'userPhone',
};

// === B. 核心資料結構 ===
const ALL_QUIZ_DATA = [
    { subject: "Math", topic: "基本運算", question: "請問 $12 \\times 8$ 等於多少？", answerOptions: [ { text: "$96$", isCorrect: true, rationale: " $12 \\times 8 = 96$。" }, { text: "$84$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$102$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$72$", isCorrect: false, rationale: "計算錯誤。" } ] },
    { subject: "Math", topic: "一階 ODE", question: "解方程式 $2x + 5 = 15$，求 $x$。", answerOptions: [ { text: "$5$", isCorrect: true, rationale: " $2x = 15 - 5 = 10$，故 $x=5$。" }, { text: "$10$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$2$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$7$", isCorrect: false, rationale: "計算錯誤。" } ] },
    { subject: "Math", topic: "拉普拉斯轉換", question: "函數 $f(t) = e^{at}$ 的拉普拉斯轉換 $L\\{f(t)\\}$ 為何？", answerOptions: [ { text: "$1/(s-a)$", isCorrect: true, rationale: "基本拉普拉斯轉換公式。" }, { text: "$a/s^2$", isCorrect: false, rationale: "這是 $L\\{t^n\\}$ 的形式。" }, { text: "$1/(s^2+a^2)$", isCorrect: false, rationale: "這是 $L\\{\\sin(at)\\}$ 的形式。" }, { text: "$s/(s^2+a^2)$", isCorrect: false, rationale: "這是 $L\\{\\cos(at)\\}$ 的形式。" } ] },
    { subject: "Math", topic: "矩陣特徵值", question: "對於 $3\\times 3$ 矩陣，若其秩 (Rank) 為 2，則 $\\lambda=0$ 至少有多少個特徵值？", answerOptions: [ { text: "至少 1 個", isCorrect: true, rationale: "秩小於階數，表示矩陣是奇異的 (singular)，其行列式為 0，故 $\\lambda=0$ 必定為特徵值。" }, { text: "至少 2 個", isCorrect: false, rationale: "不一定，但至少 1 個。" }, { text: "0 個", isCorrect: false, rationale: "錯誤。" }, { text: "3 個", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "Math", topic: "傅立葉級數", question: "若函數 $f(x)$ 是週期為 $2L$ 的奇函數，其傅立葉級數只包含哪種項？", answerOptions: [ { text: "餘弦項 ($a_n$)", isCorrect: false, rationale: "奇函數不包含餘弦項。" }, { text: "正弦項 ($b_n$)", isCorrect: true, rationale: "奇函數只包含正弦項和 $a_0 = 0$。" }, { text: "常數項 $a_0$ 與餘弦項", isCorrect: false, rationale: "常數項 $a_0$ 為 0。" }, { text: "不包含任何項", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "Science", topic: "行列式", question: "判斷 $A = [[2, -1], [4, 3]]$ 的行列式值。", answerOptions: [ { text: "10", isCorrect: true, rationale: " $\\det(A) = 2(3) - (-1)(4) = 6 + 4 = 10$。" }, { text: "2", isCorrect: false, rationale: "計算錯誤。" }, { text: "-1", isCorrect: false, rationale: "計算錯誤。" }, { text: "4", isCorrect: false, rationale: "計算錯誤。" } ] },
    { subject: "Science", topic: "矩陣類型", question: "線性代數中，什麼矩陣的轉置等於其自身？", answerOptions: [ { text: "單位矩陣", isCorrect: false, rationale: "單位矩陣是特殊類型的對稱矩陣。" }, { text: "對稱矩陣", isCorrect: true, rationale: "定義為 $A^T = A$。" }, { text: "斜對稱矩陣", isCorrect: false, rationale: "定義為 $A^T = -A$。" }, { text: "三角矩陣", isCorrect: false, rationale: "轉置後仍為三角矩陣，但不一定等於自身。" } ] },
    { subject: "Science", topic: "向量空間", question: "在 $R^3$ 向量空間中，下列哪一組向量是線性獨立的？", answerOptions: [ { text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(1, 1, 0)$", isCorrect: false, rationale: " $v_3 = v_1 + v_2$。" }, { text: "$v_1=(1, 0, 0), v_2=(0, 1, 0), v_3=(0, 0, 1)$", isCorrect: true, rationale: "這組向量構成 $R^3$ 的標準基底，是線性獨立的。" }, { text: "$v_1=(1, 1, 1), v_2=(2, 2, 2)$", isCorrect: false, rationale: " $v_2 = 2v_1$。" }, { text: "任意三個向量", isCorrect: false, rationale: "錯誤，需滿足 $c_1v_1 + c_2v_2 + c_3v_3 = 0$ 只有平凡解 $c_i=0$。" } ] },
    { subject: "Science", topic: "正交矩陣", question: "若矩陣 $Q$ 滿足 $Q^T Q = I$ ($I$ 為單位矩陣)，則 $Q$ 稱為：", answerOptions: [ { text: "埃爾米特矩陣", isCorrect: false, rationale: " $A = A^*$。" }, { text: "正交矩陣", isCorrect: true, rationale: "正交矩陣的定義，其行向量和列向量都是正交單位向量。" }, { text: "對角化矩陣", isCorrect: false, rationale: "錯誤。" }, { text: "可逆矩陣", isCorrect: false, rationale: "正交矩陣必然可逆，但反之不一定。" } ] },
    { subject: "Science", topic: "特徵向量", question: "矩陣的特徵向量 $\\mathbf{v}$ 與其對應的特徵值 $\\lambda$ 滿足哪個方程？", answerOptions: [ { text: "$A \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: true, rationale: "特徵值與特徵向量的基本定義。" }, { text: "$A \\mathbf{v} = 0$", isCorrect: false, rationale: "這是齊次方程組。" }, { text: "$\\det(A - \\lambda I) = 0$", isCorrect: false, rationale: "這是特徵多項式，用於求特徵值。" }, { text: "$A^T \\mathbf{v} = \\lambda \\mathbf{v}$", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "History", topic: "主題範圍", question: "請問 '計概' 通常不包含哪個主題？", answerOptions: [ { text: "網路通訊", isCorrect: false, rationale: "包含。" }, { text: "資料結構", isCorrect: false, rationale: "包含。" }, { text: "作業系統", isCorrect: false, rationale: "包含。" }, { text: "生物化學", isCorrect: true, rationale: "這是獨立的生命科學領域。" } ] },
    { subject: "History", topic: "記憶體", question: "在計算機中，哪個儲存裝置在斷電後會丟失數據？", answerOptions: [ { text: "硬碟 (HDD)", isCorrect: false, rationale: "非揮發性儲存。" }, { text: "唯讀記憶體 (ROM)", isCorrect: false, rationale: "非揮發性儲存。" }, { text: "隨機存取記憶體 (RAM)", isCorrect: true, rationale: "RAM 是揮發性記憶體，斷電後數據遺失。" }, { text: "固態硬碟 (SSD)", isCorrect: false, rationale: "非揮發性儲存。" } ] },
    { subject: "History", topic: "網路協定", question: "網頁瀏覽器用於從伺服器請求網頁的協定是？", answerOptions: [ { text: "FTP", isCorrect: false, rationale: "用於檔案傳輸。" }, { text: "SMTP", isCorrect: false, rationale: "用於郵件傳輸。" }, { text: "HTTP/HTTPS", isCorrect: true, rationale: "超文本傳輸協定。" }, { text: "TCP", isCorrect: false, rationale: "用於連線的傳輸層協定。" } ] },
    { subject: "History", topic: "資料結構", question: "先進先出 (FIFO) 的資料結構是？", answerOptions: [ { text: "堆疊 (Stack)", isCorrect: false, rationale: "後進先出 (LIFO)。" }, { text: "佇列 (Queue)", isCorrect: true, rationale: "先進先出 (FIFO)。" }, { text: "連結串列 (Linked List)", isCorrect: false, rationale: "這是一種線性結構，但不是存取方式。" }, { text: "樹 (Tree)", isCorrect: false, rationale: "非線性結構。" } ] },
    { subject: "History", topic: "作業系統", question: "作業系統的主要功能不包含下列哪項？", answerOptions: [ { text: "處理器管理 (CPU 排程)", isCorrect: false, rationale: "包含。" }, { text: "記憶體管理", isCorrect: false, rationale: "包含。" }, { text: "輸入/輸出 (I/O) 設備管理", isCorrect: false, rationale: "包含。" }, { text: "繪製 3D 圖形", isCorrect: true, rationale: "這是應用程式或圖形卡驅動程式的功能。" } ] },
    { subject: "Geography", topic: "供需平衡", question: "在經濟學中，如果供給超過需求，市場會產生什麼？", answerOptions: [ { text: "短缺 (Shortage)", isCorrect: false, rationale: "需求超過供給會短缺。" }, { text: "過剩 (Surplus)", isCorrect: true, rationale: "供給超過需求會造成過剩，導致價格下跌。" }, { text: "平衡 (Equilibrium)", isCorrect: false, rationale: "供給等於需求時達到平衡。" }, { text: "通膨 (Inflation)", isCorrect: false, rationale: "物價普遍上漲的現象。" } ] },
    { subject: "Geography", topic: "價格彈性", question: "當某商品的需求價格彈性大於 1 時，稱該需求為？", answerOptions: [ { text: "缺乏彈性", isCorrect: false, rationale: "彈性小於 1。" }, { text: "單一彈性", isCorrect: false, rationale: "彈性等於 1。" }, { text: "富有彈性", isCorrect: true, rationale: "彈性大於 1，價格變動會導致需求量大幅變動。" }, { text: "完全彈性", isCorrect: false, rationale: "彈性趨近於無限大。" } ] },
    { subject: "Geography", topic: "GDP 計算", question: "計算 GDP 時，下列哪項不應計入？", answerOptions: [ { text: "新生產的汽車銷售額", isCorrect: false, rationale: "計入。" }, { text: "二手房屋交易佣金", isCorrect: false, rationale: "佣金是服務，計入；但房屋本身不計入。" }, { text: "政府提供的國防服務價值", isCorrect: false, rationale: "計入。" }, { text: "在股市買賣股票的金額", isCorrect: true, rationale: "股票交易只是資產轉移，不屬於當期生產的商品或服務。" } ] },
    { subject: "Geography", topic: "市場結構", question: "只有單一生產者，且產品沒有近似替代品的市場結構稱為？", answerOptions: [ { text: "寡占", isCorrect: false, rationale: "少數生產者。" }, { text: "壟斷性競爭", isCorrect: false, rationale: "多數生產者，產品差異化。" }, { text: "完全競爭", isCorrect: false, rationale: "許多生產者，同質產品。" }, { text: "獨佔 (Monopoly)", isCorrect: true, rationale: "單一生產者，沒有近似替代品。" } ] },
    { subject: "Geography", topic: "財政政策", question: "政府為了刺激經濟而增加開支，屬於哪種財政政策？", answerOptions: [ { text: "緊縮性財政政策", isCorrect: false, rationale: "用於抑制過熱的經濟。" }, { text: "擴張性財政政策", isCorrect: true, rationale: "透過增加政府支出或減稅來刺激總需求。" }, { text: "貨幣政策", isCorrect: false, rationale: "由中央銀行控制利率或貨幣供給。" }, { text: "中性財政政策", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "English", topic: "微分基本式", question: "微積分中，函數 $f(x) = x^2$ 的導數是？", answerOptions: [ { text: "$x$", isCorrect: false, rationale: "錯誤。" }, { text: "$2x$", isCorrect: true, rationale: "利用進階法則：$\\frac{d}{dx} x^n = nx^{n-1}$。" }, { text: "$x^3/3$", isCorrect: false, rationale: "這是 $x^2$ 的不定積分。" }, { text: "1", isCorrect: false, rationale: "這是 $x$ 的導數。" } ] },
    { subject: "English", topic: "定積分", question: "計算定積分 $\\int_0^1 (3x^2 + 1) dx$ 的值。", answerOptions: [ { text: "1", isCorrect: false, rationale: "錯誤。" }, { text: "2", isCorrect: true, rationale: " $\\int_0^1 (3x^2 + 1) dx = [x^3 + x]_0^1 = 2$。" }, { text: "3", isCorrect: false, rationale: "錯誤。" }, { text: "0", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "English", topic: "鏈鎖律", question: "若 $f(x) = \\sin(2x)$，則 $f'(x)$ 是什麼？", answerOptions: [ { text: "$\\cos(2x)$", isCorrect: false, rationale: "錯誤。" }, { text: "$2 \\cos(2x)$", isCorrect: true, rationale: "利用鏈鎖律。" }, { text: "$-2 \\cos(2x)$", isCorrect: false, rationale: "錯誤。" }, { text: "$2 \\sin(2x)$", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "English", topic: "極限", question: "計算極限 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$。", answerOptions: [ { text: "$0$", isCorrect: false, rationale: "錯誤。" }, { text: "$1$", isCorrect: true, rationale: "基本極限公式。" }, { text: "$\\infty$", isCorrect: false, rationale: "錯誤。" }, { text: "不存在", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "English", topic: "多變量", question: "函數 $f(x, y) = x^2 y$ 對 $x$ 的偏導數 $\\frac{\\partial f}{\\partial x}$ 是？", answerOptions: [ { text: "$2x$", isCorrect: false, rationale: "錯誤。" }, { text: "$2xy$", isCorrect: true, rationale: "偏微分運算。" }, { text: "$x^2$", isCorrect: false, rationale: "這是對 $y$ 的偏導。" }, { text: "$2x^2 y$", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "Coding", topic: "敘述統計", question: "統計學中，樣本與母體之間的差異，最常使用什麼指標衡量？", answerOptions: [ { text: "平均數", isCorrect: false, rationale: "集中趨勢測量。" }, { text: "標準差", isCorrect: true, rationale: "衡量數據分散程度。" }, { text: "變異係數", isCorrect: false, rationale: "相對分散測量。" }, { text: "P值", isCorrect: false, rationale: "假設檢定用。" } ] },
    { subject: "Coding", topic: "機率分佈", question: "若變數 $X$ 服從常態分佈，則其分佈圖形呈現何種形狀？", answerOptions: [ { text: "L 型", isCorrect: false, rationale: "錯誤。" }, { text: "J 型", isCorrect: false, rationale: "錯誤。" }, { text: "雙峰型", isCorrect: false, rationale: "錯誤。" }, { text: "鐘形", isCorrect: true, rationale: "常態分佈特徵。" } ] },
    { subject: "Coding", topic: "假設檢定", question: "在假設檢定中，拒絕虛無假設 ($H_0$) 但 $H_0$ 事實上為真時，稱為什麼錯誤？", answerOptions: [ { text: "型一錯誤", isCorrect: true, rationale: "型一錯誤定義。" }, { text: "型二錯誤", isCorrect: false, rationale: "接受錯誤 $H_0$。" }, { text: "抽樣錯誤", isCorrect: false, rationale: "錯誤。" }, { text: "測量錯誤", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "Coding", topic: "迴歸分析", question: "在簡單線性迴歸 $Y = \\beta_0 + \\beta_1 X + \\epsilon$ 中， $\\beta_1$ 代表什麼？", answerOptions: [ { text: "截距", isCorrect: false, rationale: "這是 $\\beta_0$。" }, { text: "殘差", isCorrect: false, rationale: "這是 $\\epsilon$。" }, { text: "斜率", isCorrect: true, rationale: "衡量 $X$ 對 $Y$ 的影響。" }, { text: "誤差項標準差", isCorrect: false, rationale: "錯誤。" } ] },
    { subject: "Coding", topic: "集中趨勢", question: "若數據集為 $\{2, 3, 5, 5, 10\}$，其中位數是多少？", answerOptions: [ { text: "5", isCorrect: true, rationale: "中間數值為 5。" }, { text: "5.5", isCorrect: false, rationale: "這是平均數。" }, { text: "2", isCorrect: false, rationale: "最小值。" }, { text: "10", isCorrect: false, rationale: "最大值。" } ] },
];

// === C. 其他設定 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易 老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸 老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰 老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修 老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔 老師", youtubeId: "GhAxVkA1He8" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M";

let currentSubject = '', currentScore = 0, answeredQuestions = new Set(), wrongQuestionsData = [], startTime;

// === D. 懸浮通知邏輯 (5秒跳一次，僅第一頁) ===
let urgencyAlertTimer = null;
const URGENCY_MESSAGES = ["⚡ 警告：考場氣氛凝重，請加快速度！", "⏰ 倒數計時中，猶豫是進步的敵人！", "👀 目前有 152 位清交同學正在挑戰...", "🔥 你的對手已完成測驗，你在等什麼？", "📈 前三題答題快的人，潛能分數更高！", "🛑 專注！別讓外物打斷你的思維！", "⏳ 寒假計畫名額有限，請盡速完成！", "💡 直覺往往最準，相信第一直覺！", "🏃 錄取與落榜的差距就在這一瞬間！", "⚠️ 測驗進行中，請勿隨意離開頁面！", "📢 已經有人獲得 $500 紅包，下一位是你嗎？", "🌟 S 級學霸平均 30 秒一題，你能行嗎？", "📊 目前全台平均：72 分，請努力超越！", "🎯 專注目標，你的專屬計畫正在生成..."];

function startUrgencyAlerts() {
    if (urgencyAlertTimer) clearInterval(urgencyAlertTimer);
    // 設定 5000ms (5秒) 跳出一次
    urgencyAlertTimer = setInterval(() => {
        const msg = URGENCY_MESSAGES[Math.floor(Math.random() * URGENCY_MESSAGES.length)];
        const alertEl = document.createElement('div');
        alertEl.className = 'alert-toast';
        alertEl.innerText = msg;
        document.body.appendChild(alertEl);
        setTimeout(() => { alertEl.remove(); }, 2000); // 顯示 2 秒後消失
    }, 5000); 
}
function stopUrgencyAlerts() { if (urgencyAlertTimer) { clearInterval(urgencyAlertTimer); urgencyAlertTimer = null; } }

// === E. 核心功能 ===
function isValidName(name) { return /^[\u4e00-\u9fa5]{2,}$/.test(name); }
function isValidTaiwanPhone(phone) { return /^\d{10}$/.test(phone); }

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    window.scrollTo(0, 0);
    // 只有第一頁跳通知
    if (pageId === 'userInfoPage') startUrgencyAlerts(); else stopUrgencyAlerts();
    if (pageId === 'resourcePage') { initYouTube(); generateStudyPlan(); }
}

async function submitDataToGoogleForm(url, dataToSubmit) {
    const formError = document.getElementById('formError');
    if (url === GOOGLE_FORM_A_URL) formError.style.display = 'none';
    const body = new URLSearchParams();
    for (const key in dataToSubmit) { body.append(key, dataToSubmit[key]); }
    try { await fetch(url, { method: 'POST', body: body, mode: 'no-cors' }); return true; } 
    catch (e) { if (url === GOOGLE_FORM_A_URL) { formError.textContent = '提交失敗。'; formError.style.display = 'block'; } return false; }
}

// === F. 事件監聽 ===
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById(FORM_IDS.HTML_NAME_ID).value.trim();
    const dept = document.getElementById(FORM_IDS.HTML_DEPT_ID).value.trim();
    const phone = document.getElementById(FORM_IDS.HTML_PHONE_ID).value.trim();
    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]:checked`);
    const gradeRadio = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO_NAME}"]:checked`);
    const otherUni = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID).value.trim();
    const formError = document.getElementById('formError');
    formError.style.display = 'none';
    if (!name || !uniRadio || (uniRadio.value === '其他' && !otherUni) || !dept || !gradeRadio || !phone) { formError.textContent = "請填寫完整。"; formError.style.display = 'block'; return; }
    if (!isValidName(name)) { formError.textContent = "姓名格式錯誤。"; formError.style.display = 'block'; return; }
    if (!isValidTaiwanPhone(phone)) { formError.textContent = "手機格式錯誤。"; formError.style.display = 'block'; return; }
    const uni = uniRadio.value === '其他' ? otherUni : uniRadio.value;
    const data = { [FORM_IDS.FORM_A_NAME]: name, [FORM_IDS.FORM_A_UNI]: uni, [FORM_IDS.FORM_A_DEPT_GRADE]: `${dept} / ${gradeRadio.value}`, [FORM_IDS.FORM_A_PHONE]: phone, [FORM_IDS.FORM_A_GRADE]: gradeRadio.value };
    if (await submitDataToGoogleForm(GOOGLE_FORM_A_URL, data)) {
        localStorage.setItem('userData', JSON.stringify({ name, uni, dept, grade: gradeRadio.value, phone }));
        startTime = Date.now(); showPage('subjectSelectPage');
    }
});

document.querySelectorAll(`input[name="${FORM_IDS.HTML_UNI_RADIO_NAME}"]`).forEach(r => {
    r.addEventListener('change', function() {
        const input = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
        input.disabled = this.value !== '其他';
        if (!input.disabled) { input.required = true; input.focus(); } else { input.required = false; input.value = ''; }
    });
});

document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() { currentSubject = this.getAttribute('data-subject'); startQuiz(currentSubject); });
});

// === G. 測驗與結果 ===
function startQuiz(subject) {
    currentScore = 0; answeredQuestions.clear(); wrongQuestionsData = [];
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    const list = ALL_QUIZ_DATA.filter(q => q.subject === subject);
    const container = document.getElementById('quiz-content'); container.innerHTML = '';
    const btn = document.querySelector(`.subject-button[data-subject="${subject}"]`);
    document.getElementById('quizTitle').innerText = `正在測驗：${btn.innerText.replace(/[^\u4e00-\u9fa5]/g, '')}`;
    list.forEach((q, i) => {
        const card = document.createElement('div'); card.className = 'question-card'; card.dataset.index = i;
        card.innerHTML = `<div class="question-text">Q${i+1}. ${q.question}</div><ul class="options-list">${q.answerOptions.map((opt, idx) => `<li class="option-item" data-idx="${idx}"><span style="font-weight:bold;margin-right:8px;">${String.fromCharCode(65+idx)}.</span> ${opt.text}</li>`).join('')}</ul><div class="rationale" id="rat-${i}"></div>`;
        container.appendChild(card);
    });
    document.querySelectorAll('.option-item').forEach(item => item.addEventListener('click', handleAnswerClick));
    showPage('quizPage');
    if (window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
}

function handleAnswerClick() {
    const card = this.closest('.question-card'), qIdx = parseInt(card.dataset.index);
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);
    const list = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject), currentQ = list[qIdx], isCorrect = currentQ.answerOptions[parseInt(this.dataset.idx)].isCorrect;
    this.classList.add('selected');
    if (isCorrect) { this.classList.add('correct'); currentScore += 20; } 
    else { this.classList.add('incorrect'); card.querySelectorAll('.option-item')[currentQ.answerOptions.findIndex(o => o.isCorrect)].classList.add('correct'); wrongQuestionsData.push({ topic: currentQ.topic }); }
    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `<strong>💡 解析：</strong> ${currentQ.answerOptions.find(o => o.isCorrect).rationale}`;
    rat.classList.add('visible');
    if (window.renderMathInElement) renderMathInElement(rat, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
    if (answeredQuestions.size === 5) setTimeout(showQuizResult, 800);
}

function showQuizResult() {
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('score').innerText = currentScore;
    let lv = currentScore === 100 ? 'S 級頂尖' : (currentScore >= 80 ? 'A 級強者' : (currentScore >= 60 ? 'B 級穩定' : 'C 級覺醒中'));
    document.getElementById('scoreComment').innerHTML = `您的潛能等級：<strong>${lv}</strong>`;
    localStorage.setItem('potentialLevel', lv);
}

document.getElementById('goToResourceBtn').addEventListener('click', function() {
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    const btn = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    document.getElementById('finalSubjectName').innerText = btn.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    document.getElementById('potentialLevelDisplay').innerText = localStorage.getItem('potentialLevel') || 'C 級覺醒中';
    document.getElementById('lineCtaButton').href = LINE_CTA_LINK;
    showPage('resourcePage');
});

// === H. 讀書計畫與影片 ===
function generateStudyPlan() {
    const w1 = document.getElementById('plan-week-1'), tag = document.getElementById('weaknessTag');
    const topics = wrongQuestionsData.map(d => d.topic);
    tag.innerText = topics.length > 0 ? topics.join('、') : "全數答對！菁英強化";
    w1.innerHTML = topics.length > 0 ? `<ul><li>🎯 <strong>補強：</strong>重讀 ${topics[0]}</li></ul>` : `<ul><li>🚀 <strong>超越：</strong>挑戰考古題</li></ul>`;
    document.getElementById('plan-week-3').innerHTML = `<ul><li>🧩 <strong>整合：</strong>繪製心智圖</li></ul>`;
    document.getElementById('plan-week-4').innerHTML = `<ul><li>🏁 <strong>模擬：</strong>正式模考</li></ul>`;
}

function initYouTube() {
    const container = document.getElementById('youtubePlayer'), vidId = VIDEO_LINKS[currentSubject].youtubeId;
    if (container.querySelector('iframe')) return;
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen></iframe>`;
}

// === I. 初始化啟動 ===
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('userData')) {
        showPage('subjectSelectPage');
    } else {
        showPage('userInfoPage');
        // 進入後立即啟動計時，5秒後跳出第一則
        startUrgencyAlerts(); 
    }
    const other = document.getElementById(FORM_IDS.HTML_UNI_OTHER_ID);
    if (other) other.disabled = true;
});
