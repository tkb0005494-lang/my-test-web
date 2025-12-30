// Google 表單與核心設定
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const FORM_FIELDS = {
    name: 'entry.1711447572',
    uni: 'entry.651877505',
    dept: 'entry.1169658860',
    phone: 'entry.1253545059',
    grade: 'entry.247937200'
};

// 完整題目庫 (30 題)
const ALL_QUIZ_DATA = [
    // 工程數學
    { subject: "工程數學", topic: "ODE", question: "請問 $y' + y = 0$ 的通解為何？", answerOptions: [{ text: "$y = Ce^{-x}$", isCorrect: true, rationale: "一階線性 ODE 基本解。" }, { text: "$y = Ce^x$", isCorrect: false, rationale: "符號錯誤。" }, { text: "$y = C\\sin x$", isCorrect: false, rationale: "這是二階振盪解。" }, { text: "$y = x + C$", isCorrect: false, rationale: "這是積分。" }] },
    { subject: "工程數學", topic: "Laplace", question: "$\mathcal{L}\{1\}$ 等於？", answerOptions: [{ text: "$1/s$", isCorrect: true, rationale: "拉氏轉換基本公式。" }, { text: "$s$", isCorrect: false, rationale: "錯。" }, { text: "$1/s^2$", isCorrect: false, rationale: "那是 $t$。" }, { text: "$e^s$", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", topic: "矩陣", question: "若矩陣 $A$ 可逆，則其行列式值必？", answerOptions: [{ text: "不等於 0", isCorrect: true, rationale: "可逆條件為 $\det(A) \neq 0$。" }, { text: "等於 0", isCorrect: false, rationale: "不可逆。" }, { text: "等於 1", isCorrect: false, rationale: "不一定。" }, { text: "大於 0", isCorrect: false, rationale: "負數也可以。" }] },
    { subject: "工程數學", topic: "傅立葉", question: "偶函數的傅立葉展開只包含？", answerOptions: [{ text: "餘弦項", isCorrect: true, rationale: "偶函數對稱於 Y 軸。" }, { text: "正弦項", isCorrect: false, rationale: "那是奇函數。" }, { text: "指數項", isCorrect: false, rationale: "錯。" }, { text: "無解", isCorrect: false, rationale: "錯。" }] },
    { subject: "工程數學", topic: "向量", question: "若兩向量點積為 0，則它們？", answerOptions: [{ text: "互相垂直", isCorrect: true, rationale: "$\mathbf{a} \cdot \mathbf{b} = 0$。" }, { text: "互相平行", isCorrect: false, rationale: "外積才為 0。" }, { text: "長度相等", isCorrect: false, rationale: "不一定。" }, { text: "反向", isCorrect: false, rationale: "錯。" }] },

    // 線性代數
    { subject: "線性代數", topic: "向量空間", question: "哪一組是 $\mathbb{R}^2$ 的基底？", answerOptions: [{ text: "$(1,0), (0,1)$", isCorrect: true, rationale: "標準基底。" }, { text: "$(1,1), (2,2)$", isCorrect: false, rationale: "線性相依。" }, { text: "$(1,0)$", isCorrect: false, rationale: "數量不足。" }, { text: "$(0,0), (1,1)$", isCorrect: false, rationale: "含零向量必相依。" }] },
    { subject: "線性代數", topic: "特徵值", question: "矩陣對角化的條件是？", answerOptions: [{ text: "有足夠的線性獨立特徵向量", isCorrect: true, rationale: "幾何重數等於代數重數。" }, { text: "必須是對稱矩陣", isCorrect: false, rationale: "不一定。" }, { text: "行列式不為 0", isCorrect: false, rationale: "無關。" }, { text: "必須是三角矩陣", isCorrect: false, rationale: "無關。" }] },
    { subject: "線性代數", topic: "秩", question: "$rank(A) + nullity(A) = $？", answerOptions: [{ text: "n (行數)", isCorrect: true, rationale: "秩次定理 (Rank-Nullity Theorem)。" }, { text: "m (列數)", isCorrect: false, rationale: "錯。" }, { text: "0", isCorrect: false, rationale: "錯。" }, { text: "1", isCorrect: false, rationale: "錯。" }] },
    { subject: "線性代數", topic: "內積", question: "正交矩陣 $Q$ 滿足？", answerOptions: [{ text: "$Q^T = Q^{-1}$", isCorrect: true, rationale: "定義。" }, { text: "$Q^T = Q$", isCorrect: false, rationale: "對稱矩陣。" }, { text: "$\det(Q) = 0$", isCorrect: false, rationale: "必可逆。" }, { text: "$Q=I$", isCorrect: false, rationale: "太特殊。" }] },
    { subject: "線性代數", topic: "線性映射", question: "核空間 (Kernel) 映射後必為？", answerOptions: [{ text: "零向量", isCorrect: true, rationale: "$T(v) = 0$ 的集合。" }, { text: "單位向量", isCorrect: false, rationale: "錯。" }, { text: "自己", isCorrect: false, rationale: "那是恆等。" }, { text: "不存在", isCorrect: false, rationale: "錯。" }] },

    // 計算機概論
    { subject: "計算機概論", topic: "二進制", question: "十進制 10 轉二進制？", answerOptions: [{ text: "1010", isCorrect: true, rationale: "$8+2=10$。" }, { text: "1100", isCorrect: false, rationale: "12。" }, { text: "1001", isCorrect: false, rationale: "9。" }, { text: "1111", isCorrect: false, rationale: "15。" }] },
    { subject: "計算機概論", topic: "OS", question: "何者負責管理硬體資源？", answerOptions: [{ text: "作業系統", isCorrect: true, rationale: "OS 核心功能。" }, { text: "編譯器", isCorrect: false, rationale: "轉譯用。" }, { text: "瀏覽器", isCorrect: false, rationale: "應用程式。" }, { text: "資料庫", isCorrect: false, rationale: "存儲用。" }] },
    { subject: "計算機概論", topic: "網路", question: "IP 地址屬於哪一層？", answerOptions: [{ text: "網路層", isCorrect: true, rationale: "OSI 第三層。" }, { text: "物理層", isCorrect: false, rationale: "第一層。" }, { text: "應用層", isCorrect: false, rationale: "第七層。" }, { text: "傳輸層", isCorrect: false, rationale: "第四層。" }] },
    { subject: "計算機概論", topic: "DS", question: "Stack 的特性是？", answerOptions: [{ text: "LIFO", isCorrect: true, rationale: "後進先出。" }, { text: "FIFO", isCorrect: false, rationale: "那是 Queue。" }, { text: "隨機存取", isCorrect: false, rationale: "Array。" }, { text: "不變性", isCorrect: false, rationale: "錯。" }] },
    { subject: "計算機概論", topic: "程式語言", question: "何者為低階語言？", answerOptions: [{ text: "組合語言", isCorrect: true, rationale: "與硬體關聯大。" }, { text: "Python", isCorrect: false, rationale: "高階。" }, { text: "Java", isCorrect: false, rationale: "高階。" }, { text: "C++", isCorrect: false, rationale: "中高階。" }] },

    // 經濟學
    { subject: "經濟學", topic: "需求", question: "所得增加導致需求減少的商品？", answerOptions: [{ text: "劣等財", isCorrect: true, rationale: "定義。" }, { text: "正常財", isCorrect: false, rationale: "增加。" }, { text: "季芬財", isCorrect: false, rationale: "價格上升需求升。" }, { text: "奢侈品", isCorrect: false, rationale: "屬正常財。" }] },
    { subject: "經濟學", topic: "生產", question: "邊際報酬遞減發生在？", answerOptions: [{ text: "短期", isCorrect: true, rationale: "固定要素存在時。" }, { text: "長期", isCorrect: false, rationale: "變動規模。" }, { text: "永遠", isCorrect: false, rationale: "不一定。" }, { text: "市場崩盤時", isCorrect: false, rationale: "錯。" }] },
    { subject: "經濟學", topic: "GDP", question: "實質 GDP 排除何種影響？", answerOptions: [{ text: "物價變動", isCorrect: true, rationale: "採用基期價格。" }, { text: "人口", isCorrect: false, rationale: "那是平均。" }, { text: "進出口", isCorrect: false, rationale: "計入。" }, { text: "政府支出", isCorrect: false, rationale: "計入。" }] },
    { subject: "經濟學", topic: "市場", question: "寡占市場的特徵是？", answerOptions: [{ text: "廠商相互依賴", isCorrect: true, rationale: "決策受競爭者影響。" }, { text: "單一生產者", isCorrect: false, rationale: "獨佔。" }, { text: "產品完全同質", isCorrect: false, rationale: "不一定。" }, { text: "進出完全自由", isCorrect: false, rationale: "完全競爭。" }] },
    { subject: "經濟學", topic: "政策", question: "央行調升利率會？", answerOptions: [{ text: "抑制通膨", isCorrect: true, rationale: "減少貨幣供給。" }, { text: "促進消費", isCorrect: false, rationale: "抑制。" }, { text: "台幣貶值", isCorrect: false, rationale: "通常升值。" }, { text: "股市大漲", isCorrect: false, rationale: "通常利空。" }] },

    // 微積分
    { subject: "微積分", topic: "微分", question: "$\ln(x)$ 的導數？", answerOptions: [{ text: "$1/x$", isCorrect: true, rationale: "基本公式。" }, { text: "$e^x$", isCorrect: false, rationale: "錯。" }, { text: "$x$", isCorrect: false, rationale: "錯。" }, { text: "$1$", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", topic: "積分", question: "$\int \cos x dx = $？", answerOptions: [{ text: "$\sin x + C$", isCorrect: true, rationale: "基本積分。" }, { text: "$-\sin x + C$", isCorrect: false, rationale: "那是微分。" }, { text: "$\tan x$", isCorrect: false, rationale: "錯。" }, { text: "$\cos x$", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", topic: "極限", question: "L'Hopital 法則適用於？", answerOptions: [{ text: "$0/0$ 型", isCorrect: true, rationale: "不定型限定。" }, { text: "$1/0$ 型", isCorrect: false, rationale: "趨近無限。" }, { text: "$0 \times 1$", isCorrect: false, rationale: "須先轉換。" }, { text: "所有函數", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", topic: "級數", question: "等比級數收斂條件 $|r|$？", answerOptions: [{ text: "$< 1$", isCorrect: true, rationale: "定義。" }, { text: "$= 1$", isCorrect: false, rationale: "發散。" }, { text: "$> 1$", isCorrect: false, rationale: "發散。" }, { text: "無關", isCorrect: false, rationale: "錯。" }] },
    { subject: "微積分", topic: "多變量", question: "鞍點 (Saddle point) 是？", answerOptions: [{ text: "非極大也非極小的臨界點", isCorrect: true, rationale: "外型像馬鞍。" }, { text: "絕對極值", isCorrect: false, rationale: "錯。" }, { text: "轉折點", isCorrect: false, rationale: "一元函數概念。" }, { text: "不存在的點", isCorrect: false, rationale: "錯。" }] },

    // 統計學
    { subject: "統計學", topic: "分佈", question: "哪種分佈具有「無記憶性」？", answerOptions: [{ text: "指數分佈", isCorrect: true, rationale: "唯一連續無記憶性分佈。" }, { text: "常態分佈", isCorrect: false, rationale: "無。" }, { text: "二項分佈", isCorrect: false, rationale: "無。" }, { text: "卜瓦松", isCorrect: false, rationale: "無。" }] },
    { subject: "統計學", topic: "誤差", question: "信心水準越高，信賴區間長度會？", answerOptions: [{ text: "變長", isCorrect: true, rationale: "需要更多寬容度。" }, { text: "變短", isCorrect: false, rationale: "錯。" }, { text: "不變", isCorrect: false, rationale: "錯。" }, { text: "歸零", isCorrect: false, rationale: "錯。" }] },
    { subject: "統計學", topic: "檢定", question: "P值小於顯著水準 $\alpha$ 時？", answerOptions: [{ text: "拒絕 $H_0$", isCorrect: true, rationale: "統計顯著。" }, { text: "不拒絕 $H_0$", isCorrect: false, rationale: "大於時才是不拒絕。" }, { text: "數據有誤", isCorrect: false, rationale: "無關。" }, { text: "接受 $H_1$", isCorrect: true, rationale: "通常代表支持對立假設。" }] },
    { subject: "統計學", topic: "相關", question: "$r= -0.9$ 代表？", answerOptions: [{ text: "高度負相關", isCorrect: true, rationale: "接近 -1。" }, { text: "低度正相關", isCorrect: false, rationale: "符號不對。" }, { text: "無相關", isCorrect: false, rationale: "0才是無。" }, { text: "因果關係", isCorrect: false, rationale: "相關非因果。" }] },
    { subject: "統計學", topic: "抽樣", question: "中心極限定理要求 $n$ 至少大於？", answerOptions: [{ text: "30", isCorrect: true, rationale: "經驗法則。" }, { text: "100", isCorrect: false, rationale: "太嚴苛。" }, { text: "5", isCorrect: false, rationale: "太少。" }, { text: "無限大", isCorrect: false, rationale: "理論上。" }] }
];

// 24 項客製化計畫資料
const STUDY_PLANS = {
    "工程數學": [
        "複習一階 ODE、二階線性齊次、非齊次求解公式，掌握特徵方程根的判別。",
        "攻克拉普拉斯轉換 (Laplace Transform) 基本定義、平移定理與卷積原理。",
        "深入傅立葉級數 (Fourier Series) 與積分展開，釐清奇偶函數的係數特性。",
        "強化矩陣運算、特徵值 (Eigenvalue) 與線性方程組的空間解結構。"
    ],
    "線性代數": [
        "鞏固向量空間 (Vector Space) 子空間判定與線性獨立 (LI) 的基本功。",
        "掌握基底變換、線性映射 (Linear Transformation) 的核空間與對應矩陣。",
        "實作 Gram-Schmidt 正交化程序，理解投影矩陣與最小平方法應用。",
        "對角化 (Diagonalization) 與特徵分解，熟悉對稱矩陣必可交對角化特性。"
    ],
    "計算機概論": [
        "掌握進位轉換、補數運算、IEEE 754 浮點數表示法等數位資料基礎。",
        "深入理解 CPU 排程 (Scheduling)、記憶體分頁機制與死鎖 (Deadlock) 預防。",
        "複習 OSI 七層模型、TCP/UDP 差異、HTTP 協議與網路安全基礎。",
        "掌握常用資料結構 (Stack, Queue, Tree, Hash) 的時間複雜度分析與演算法。"
    ],
    "經濟學": [
        "釐清個體經濟：需求彈性、消費者行為理論 (無異曲線) 與效用極大化。",
        "深入廠商理論：四大市場結構 (完全競爭、壟斷、寡占、壟斷競爭) 的定價行為。",
        "總體經濟核心：國民所得計算、IS-LM 模型與總合供需 (AD-AS) 模型分析。",
        "理解財政政策與貨幣政策工具，分析通膨、失業與經濟成長的連動關係。"
    ],
    "微積分": [
        "精通導數基本公式、鏈鎖律、隱函數微分與均值定理 (MVT) 應用。",
        "掌握積分技巧 (代換積分、分部積分、部分分式) 與定積分基本定理。",
        "理解多變量函數偏微分、全微分與拉格朗日乘數法 (Lagrange Multipliers)。
        "攻克無窮級數收斂檢定 (比值、根號、積分檢定法) 與泰勒展開式。"
    ],
    "統計學": [
        "複習機率論基礎：條件機率、貝氏定理與常用間斷/連續機率分佈特性。",
        "掌握抽樣分佈、點估計與區間估計 (Confidence Interval) 的推導與邏輯。",
        "深入假設檢定 (Hypothesis Testing)：Z/t/F 檢定與 P-value 判斷標準。",
        "練習簡單線性迴歸分析、相關係數計算與變異數分析 (ANOVA) 基礎應用。"
    ]
};

const VIDEO_LINKS = {
    "工程數學": { title: "工程數學 - 周易 老師", id: "LiW8jvHZ7o4" },
    "線性代數": { title: "線性代數 - 周易 老師", id: "dW4cUVU089Q" },
    "計算機概論": { title: "計算機概論 - 張逸 老師", id: "ZC98Wmrtb7o" },
    "經濟學": { title: "經濟學 - 牧翰 老師", id: "2ZXmDGBC4c4" },
    "微積分": { title: "微積分 - 梁修 老師", id: "QNLL0qfEPmI" },
    "統計學": { title: "統計學 - 張翔 老師", id: "GhAxVkA1He8" }
};

let currentSubject = '';
let currentScore = 0;
let answeredCount = 0;
let currentQuizList = [];

// 頁面切換
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 啟動測驗
document.getElementById('userInfoForm').onsubmit = function(e) {
    e.preventDefault();
    const uni = document.querySelector('input[name="userUniversity"]:checked').value === '其他' 
        ? document.getElementById('uniOtherText').value : document.querySelector('input[name="userUniversity"]:checked').value;
    
    const formData = new FormData();
    formData.append(FORM_FIELDS.name, document.getElementById('userName').value);
    formData.append(FORM_FIELDS.uni, uni);
    formData.append(FORM_FIELDS.dept, document.getElementById('userDepartment').value);
    formData.append(FORM_FIELDS.phone, document.getElementById('userPhone').value);
    formData.append(FORM_FIELDS.grade, document.querySelector('input[name="userGrade"]:checked').value);

    fetch(GOOGLE_FORM_URL, { method: 'POST', body: formData, mode: 'no-cors' });
    showPage('subjectSelectPage');
};

// 選科目邏輯
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.onclick = function() {
        currentSubject = this.getAttribute('data-subject');
        startQuiz();
    };
});

function startQuiz() {
    currentScore = 0;
    answeredCount = 0;
    currentQuizList = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    document.getElementById('quizTitle').innerText = `正在進行：${currentSubject} 測驗`;

    currentQuizList.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.innerHTML = `
            <div><strong>Q${idx+1}. ${q.question}</strong></div>
            ${q.answerOptions.map((opt, i) => `<div class="option-item" onclick="handleSelect(this, ${idx}, ${i})">${String.fromCharCode(65+i)}. ${opt.text}</div>`).join('')}
            <div class="rationale" id="rat-${idx}"></div>
        `;
        container.appendChild(div);
    });

    showPage('quizPage');
    if(window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleSelect(el, qIdx, oIdx) {
    const parent = el.parentElement;
    if (parent.classList.contains('answered')) return;
    parent.classList.add('answered');

    const correct = currentQuizList[qIdx].answerOptions[oIdx].isCorrect;
    el.classList.add(correct ? 'correct' : 'incorrect');
    
    if (correct) {
        currentScore += 20;
    } else {
        const correctBtn = parent.querySelectorAll('.option-item')[currentQuizList[qIdx].answerOptions.findIndex(o => o.isCorrect)];
        correctBtn.classList.add('correct');
    }

    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `💡 解析：${currentQuizList[qIdx].answerOptions.find(o => o.isCorrect).rationale}`;
    rat.classList.add('visible');

    answeredCount++;
    if (answeredCount === 5) {
        setTimeout(() => {
            document.getElementById('score').innerText = currentScore;
            document.getElementById('quiz-content').classList.add('hidden');
            document.getElementById('quiz-result').classList.remove('hidden');
            document.getElementById('igModal').classList.remove('hidden');
            
            let level = currentScore >= 80 ? 'S級：學霸領袖' : (currentScore >= 60 ? 'A級：進步神速' : 'B級：穩打基礎');
            document.getElementById('scoreComment').innerText = `您的表現屬於 ${level}！`;
            localStorage.setItem('finalLevel', level);
        }, 1000);
    }
}

// 關閉通知
document.getElementById('igModal').onclick = function(e) {
    if (e.target === this) this.classList.add('hidden');
};

// 最後一頁渲染
document.getElementById('goToResourceBtn').onclick = function() {
    document.getElementById('finalScoreDisplay').innerText = currentScore + " 分";
    document.getElementById('finalSubjectName').innerText = currentSubject;
    document.getElementById('potentialLevelDisplay').innerText = localStorage.getItem('finalLevel');
    
    // 影片載入
    const vid = VIDEO_LINKS[currentSubject];
    document.getElementById('videoSubjectName').innerText = vid.title;
    document.getElementById('youtubePlayer').innerHTML = `<iframe src="https://www.youtube.com/embed/${vid.id}" allowfullscreen></iframe>`;
    
    // 生成四週計畫 (24種不同內容)
    const plan = STUDY_PLANS[currentSubject];
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`plan-week-${i}`).innerText = plan[i-1];
    }
    
    showPage('resourcePage');
};

// 大學「其他」切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.onchange = function() { document.getElementById('uniOtherText').disabled = (this.value !== '其他'); };
});
