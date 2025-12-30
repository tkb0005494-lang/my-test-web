const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_FIELDS = { name: 'entry.1711447572', uni: 'entry.651877505', dept: 'entry.1169658860', phone: 'entry.1253545059' };

// 完整題目數據
const ALL_QUIZ_DATA = [
    { subject: "工程數學", question: "請問 $y' + y = 0$ 的通解為何？", answerOptions: [{ text: "$y = Ce^{-x}$", isCorrect: true, rationale: "一階線性 ODE 基本解。" }, { text: "$y = Ce^x$", isCorrect: false, rationale: "符號錯誤。" }, { text: "$y = C\\sin x$", isCorrect: false, rationale: "這是二階振盪解。" }, { text: "$y = x + C$", isCorrect: false, rationale: "這是積分。" }] },
    { subject: "工程數學", question: "$\\mathcal{L}\{1\}$ 等於？", answerOptions: [{ text: "$1/s$", isCorrect: true, rationale: "拉氏轉換基本公式。" }, { text: "$s$", isCorrect: false, rationale: "錯。" }, { text: "$1/s^2$", isCorrect: false, rationale: "那是 $t$。" }, { text: "$e^s$", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", question: "若矩陣 $A$ 可逆，則其行列式值必？", answerOptions: [{ text: "不等於 0", isCorrect: true, rationale: "可逆條件為 $\\det(A) \\neq 0$。" }, { text: "等於 0", isCorrect: false, rationale: "不可逆。" }, { text: "等於 1", isCorrect: false, rationale: "不一定。" }, { text: "大於 0", isCorrect: false, rationale: "負數也可以。" }] },
    { subject: "工程數學", question: "偶函數的傅立葉展開只包含？", answerOptions: [{ text: "餘弦項", isCorrect: true, rationale: "偶函數對稱於 Y 軸。" }, { text: "正弦項", isCorrect: false, rationale: "那是奇函數。" }, { text: "指數項", isCorrect: false, rationale: "錯。" }, { text: "無解", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", question: "若兩向量點積為 0，則它們？", answerOptions: [{ text: "互相垂直", isCorrect: true, rationale: "$\\mathbf{a} \\cdot \\mathbf{b} = 0$。" }, { text: "互相平行", isCorrect: false, rationale: "外積才為 0。" }, { text: "長度相等", isCorrect: false, rationale: "不一定。" }, { text: "反向", isCorrect: false, rationale: "錯。" }] },
    // 線性代數
    { subject: "線性代數", question: "哪一組是 $\\mathbb{R}^2$ 的基底？", answerOptions: [{ text: "$(1,0), (0,1)$", isCorrect: true, rationale: "標準基底。" }, { text: "$(1,1), (2,2)$", isCorrect: false, rationale: "線性相依。" }, { text: "$(1,0)$", isCorrect: false, rationale: "數量不足。" }, { text: "$(0,0), (1,1)$", isCorrect: false, rationale: "含零向量必相依。" }] },
    { subject: "線性代數", question: "矩陣對角化的條件是？", answerOptions: [{ text: "有足夠的線性獨立特徵向量", isCorrect: true, rationale: "幾何重數等於代數重數。" }, { text: "必須是對稱矩陣", isCorrect: false, rationale: "不一定。" }, { text: "行列式不為 0", isCorrect: false, rationale: "無關。" }, { text: "必須是三角矩陣", isCorrect: false, rationale: "無關。" }] },
    { subject: "線性代數", question: "$rank(A) + nullity(A) = $？", answerOptions: [{ text: "n (行數)", isCorrect: true, rationale: "秩次定理。" }, { text: "m", isCorrect: false, rationale: "列數。" }, { text: "0", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "線性代數", question: "正交矩陣 $Q$ 滿足？", answerOptions: [{ text: "$Q^T = Q^{-1}$", isCorrect: true, rationale: "定義。" }, { text: "$Q^T = Q$", isCorrect: false, rationale: "對稱矩陣。" }, { text: "$\\det(Q) = 0$", isCorrect: false, rationale: "必可逆。" }, { text: "$Q=I$", isCorrect: false, rationale: "太特殊。" }] },
    { subject: "線性代數", question: "核空間映射後必為？", answerOptions: [{ text: "零向量", isCorrect: true, rationale: "定義。" }, { text: "單位向量", isCorrect: false, rationale: "錯。" }, { text: "自己", isCorrect: false, rationale: "錯。" }, { text: "不存在", isCorrect: false, rationale: "錯。" }] },
    // 這裡補齊 計算機概論、經濟學、微積分、統計學 題目...
    { subject: "計算機概論", question: "十進制 10 轉二進制？", answerOptions: [{ text: "1010", isCorrect: true, rationale: "8+2=10。" }, { text: "1100", isCorrect: false, rationale: "12。" }, { text: "1001", isCorrect: false, rationale: "9。" }, { text: "1111", isCorrect: false, rationale: "15。" }] },
    { subject: "計算機概論", question: "何者負責管理硬體資源？", answerOptions: [{ text: "作業系統", isCorrect: true, rationale: "核心功能。" }, { text: "編譯器", isCorrect: false, rationale: "轉譯。" }, { text: "瀏覽器", isCorrect: false, rationale: "應用層。" }, { text: "資料庫", isCorrect: false, rationale: "存儲。" }] },
    { subject: "計算機概論", question: "IP 地址屬於哪一層？", answerOptions: [{ text: "網路層", isCorrect: true, rationale: "OSI 第三層。" }, { text: "物理層", isCorrect: false, rationale: "第一層。" }, { text: "應用層", isCorrect: false, rationale: "第七層。" }, { text: "傳輸層", isCorrect: false, rationale: "第四層。" }] },
    { subject: "計算機概論", question: "Stack 的特性是？", answerOptions: [{ text: "LIFO", isCorrect: true, rationale: "後進先出。" }, { text: "FIFO", isCorrect: false, rationale: "Queue。" }, { text: "隨機存取", isCorrect: false, rationale: "Array。" }, { text: "不變性", isCorrect: false, rationale: "錯。" }] },
    { subject: "計算機概論", question: "何者為低階語言？", answerOptions: [{ text: "組合語言", isCorrect: true, rationale: "正確。" }, { text: "Python", isCorrect: false, rationale: "高階。" }, { text: "Java", isCorrect: false, rationale: "高階。" }, { text: "C++", isCorrect: false, rationale: "中高階。" }] },
    { subject: "經濟學", question: "所得增加導致需求減少的商品？", answerOptions: [{ text: "劣等財", isCorrect: true, rationale: "定義。" }, { text: "正常財", isCorrect: false, rationale: "增加。" }, { text: "季芬財", isCorrect: false, rationale: "價格向。" }, { text: "奢侈品", isCorrect: false, rationale: "正常財。" }] },
    { subject: "經濟學", question: "邊際報酬遞減發生在？", answerOptions: [{ text: "短期", isCorrect: true, rationale: "要素固定時。" }, { text: "長期", isCorrect: false, rationale: "變動規模。" }, { text: "永遠", isCorrect: false, rationale: "錯。" }, { text: "市場崩盤", isCorrect: false, rationale: "錯。" }] },
    { subject: "經濟學", question: "實質 GDP 排除何種影響？", answerOptions: [{ text: "物價變動", isCorrect: true, rationale: "採用基期。" }, { text: "人口", isCorrect: false, rationale: "那是平均。" }, { text: "進出口", isCorrect: false, rationale: "計入。" }, { text: "政府支出", isCorrect: false, rationale: "計入。" }] },
    { subject: "經濟學", question: "寡占市場的特徵是？", answerOptions: [{ text: "廠商相互依賴", isCorrect: true, rationale: "決策互相影響。" }, { text: "單一生產者", isCorrect: false, rationale: "獨佔。" }, { text: "產品同質", isCorrect: false, rationale: "不一定。" }, { text: "進出自由", isCorrect: false, rationale: "完全競爭。" }] },
    { subject: "經濟學", question: "央行調升利率會？", answerOptions: [{ text: "抑制通膨", isCorrect: true, rationale: "減少貨幣量。" }, { text: "促進消費", isCorrect: false, rationale: "抑制。" }, { text: "台幣貶值", isCorrect: false, rationale: "升值。" }, { text: "股市大漲", isCorrect: false, rationale: "利空。" }] },
    { subject: "微積分", question: "$\\ln(x)$ 的導數？", answerOptions: [{ text: "$1/x$", isCorrect: true, rationale: "公式。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$x$", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "$\\int \\cos x dx = $？", answerOptions: [{ text: "$\\sin x + C$", isCorrect: true, rationale: "基本積分。" }, { text: "$-\\sin x + C$", isCorrect: false, rationale: "那是微分。" }, { text: "$\\tan x$", isCorrect: false, rationale: "錯。" }, { text: "$\\cos x$", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "L'Hopital 法則適用於？", answerOptions: [{ text: "$0/0$ 型", isCorrect: true, rationale: "不定型。" }, { text: "$1/0$ 型", isCorrect: false, rationale: "錯。" }, { text: "$0 \\times 1$", isCorrect: false, rationale: "須先轉。" }, { text: "所有函數", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "等比級數收斂條件 $|r|$？", answerOptions: [{ text: "$< 1$", isCorrect: true, rationale: "定義。" }, { text: "$= 1$", isCorrect: false, rationale: "發散。" }, { text: "$> 1$", isCorrect: false, rationale: "發散。" }, { text: "無關", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", question: "鞍點 (Saddle point) 是？", answerOptions: [{ text: "非極大極小臨界點", isCorrect: true, rationale: "正確。" }, { text: "絕對極值", isCorrect: false, rationale: "錯。" }, { text: "轉折點", isCorrect: false, rationale: "錯。" }, { text: "不存在", isCorrect: false, rationale: "錯。" }] },
    { subject: "統計學", question: "哪種分佈具「無記憶性」？", answerOptions: [{ text: "指數分佈", isCorrect: true, rationale: "正確。" }, { text: "常態", isCorrect: false, rationale: "無。" }, { text: "二項", isCorrect: false, rationale: "無。" }, { text: "卜瓦松", isCorrect: false, rationale: "無。" }] },
    { subject: "統計學", question: "信心水準越高，信賴區間長度會？", answerOptions: [{ text: "變長", isCorrect: true, rationale: "擴大寬容度。" }, { text: "變短", isCorrect: false, rationale: "錯。" }, { text: "不變", isCorrect: false, rationale: "錯。" }, { text: "歸零", isCorrect: false, rationale: "錯。" }] },
    { subject: "統計學", question: "P值小於 $\\alpha$ 時？", answerOptions: [{ text: "拒絕 $H_0$", isCorrect: true, rationale: "顯著。" }, { text: "不拒絕", isCorrect: false, rationale: "大於才是不拒絕。" }, { text: "數據錯", isCorrect: false, rationale: "無關。" }, { text: "接受 $H_1$", isCorrect: true, rationale: "對。" }] },
    { subject: "統計學", question: "$r= -0.9$ 代表？", answerOptions: [{ text: "高度負相關", isCorrect: true, rationale: "接近-1。" }, { text: "低度正相關", isCorrect: false, rationale: "錯。" }, { text: "無相關", isCorrect: false, rationale: "0。" }, { text: "因果", isCorrect: false, rationale: "非因果。" }] },
    { subject: "統計學", question: "中心極限定理要求 $n$ 至少大於？", answerOptions: [{ text: "30", isCorrect: true, rationale: "經驗值。" }, { text: "100", isCorrect: false, rationale: "太多。" }, { text: "5", isCorrect: false, rationale: "太少。" }, { text: "無限大", isCorrect: false, rationale: "錯。" }] }
];

const STUDY_PLANS = {
    "工程數學": ["一階 ODE、二階線性齊次、非齊次求解公式判別。", "拉普拉斯轉換 (Laplace) 定義與平移定理運用。", "傅立葉級數 (Fourier) 展開與奇偶函數分析。", "矩陣運算、特徵值與線性方程組解空間結構。"],
    "線性代數": ["向量空間、子空間判定與線性獨立基本功。", "基底變換、線性映射的核空間與矩陣表示。", "Gram-Schmidt 正交化、投影矩陣與最小平方法。", "對角化 (Diagonalization) 與對稱矩陣特徵分解。"],
    "計算機概論": ["進位轉換、補數運算與 IEEE 754 浮點數表示。", "CPU 排程、記憶體分頁機制與死鎖 (Deadlock) 預防。", "OSI 模型、TCP/UDP 差異與網路安全協議基礎。", "常用資料結構 (Stack, Tree, Hash) 的時間分析。"],
    "經濟學": ["需求彈性、消費者行為理論與效用極大化分析。", "廠商理論：完全競爭、獨佔、寡占市場定價行為。", "IS-LM 模型、AD-AS 模型與國民所得計算。", "財政與貨幣政策工具、通膨與失業連動分析。"],
    "微積分": ["導數公式、鏈鎖律、隱函數微分與均值定理。", "積分技巧 (代換、分部、部分分式) 與積分定理。", "多變量函數偏微分、全微分與拉格朗日乘數法。", "無窮級數收斂檢定與泰勒 (Taylor) 展開式。"],
    "統計學": ["機率論基礎、條件機率與貝氏定理應用。", "抽樣分佈、點估計與區間估計 (CI) 的推導。", "假設檢定 (Hypothesis)：Z/t/F 檢定與 P 值判斷。", "線性迴歸分析、相關係數與變異數分析 (ANOVA)。"]
};

const VIDEO_LINKS = { "工程數學": "LiW8jvHZ7o4", "線性代數": "dW4cUVU089Q", "計算機概論": "ZC98Wmrtb7o", "經濟學": "2ZXmDGBC4c4", "微積分": "QNLL0qfEPmI", "統計學": "GhAxVkA1He8" };

let currentSubject = '', currentScore = 0, answeredCount = 0;

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 表單提交
document.getElementById('userInfoForm').onsubmit = function(e) {
    e.preventDefault();
    const uniInput = document.querySelector('input[name="userUniversity"]:checked');
    const uni = uniInput.value === '其他' ? document.getElementById('uniOtherText').value : uniInput.value;
    const formData = new FormData();
    formData.append(FORM_FIELDS.name, document.getElementById('userName').value);
    formData.append(FORM_FIELDS.uni, uni);
    formData.append(FORM_FIELDS.dept, document.getElementById('userDepartment').value);
    formData.append(FORM_FIELDS.phone, document.getElementById('userPhone').value);
    fetch(GOOGLE_FORM_URL, { method: 'POST', body: formData, mode: 'no-cors' });
    showPage('subjectSelectPage');
};

// 選項切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.onchange = function() { document.getElementById('uniOtherText').disabled = (this.value !== '其他'); };
});

// 科目選擇
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.onclick = function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz();
    };
});

function startQuiz() {
    currentScore = 0; answeredCount = 0;
    const quizData = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    document.getElementById('quizTitle').innerText = `正在挑戰：${currentSubject}`;
    
    quizData.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.innerHTML = `<div style="font-weight:bold;margin-bottom:12px;">Q${idx+1}. ${q.question}</div>
            <div class="opt-box">${q.answerOptions.map((opt, i) => `<div class="option-item" onclick="handleSelect(this, ${idx}, ${i})">${String.fromCharCode(65+i)}. ${opt.text}</div>`).join('')}</div>
            <div class="rationale" id="rat-${idx}"></div>`;
        container.appendChild(div);
    });
    showPage('quizPage');
    if(window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleSelect(el, qIdx, oIdx) {
    const parent = el.parentElement;
    if (parent.classList.contains('done')) return;
    parent.classList.add('done');
    const qData = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject)[qIdx];
    const isCorrect = qData.answerOptions[oIdx].isCorrect;
    el.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) currentScore += 20;
    
    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `💡 解析：${qData.answerOptions.find(o=>o.isCorrect).rationale}`;
    rat.classList.add('visible');
    
    answeredCount++;
    if (answeredCount === 5) setTimeout(finishQuiz, 1200);
}

function finishQuiz() {
    document.getElementById('score').innerText = currentScore;
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('igModal').classList.remove('hidden');
    let level = currentScore >= 80 ? 'S級：學霸領袖' : (currentScore >= 60 ? 'A級：進步神速' : 'B級：穩打基礎');
    document.getElementById('scoreComment').innerText = `您的表現屬於 ${level}！`;
    document.getElementById('potentialLevelDisplay').innerText = level;
    document.getElementById('finalScoreDisplay').innerText = currentScore + " 分";
    document.getElementById('finalSubjectName').innerText = currentSubject;
}

document.getElementById('igModal').onclick = function(e) { if (e.target === this) this.classList.add('hidden'); };

document.getElementById('goToResourceBtn').onclick = function() {
    document.getElementById('videoSubjectName').innerText = currentSubject;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${VIDEO_LINKS[currentSubject]}" frameborder="0" allowfullscreen></iframe>`;
    const plans = STUDY_PLANS[currentSubject];
    for (let i = 1; i <= 4; i++) document.getElementById(`plan-week-${i}`).innerText = plans[i-1];
    showPage('resourcePage');
};
