// === A. 測驗資料庫 (30題完整版 - 新增 topic 屬性) ===
const ALL_QUIZ_DATA = [
    // 工程數學 (Math)
    { subject: "Math", topic: "一階微分方程", question: "求解 $\\frac{dy}{dx} + 2xy = x, y(0)=1$。則 $y(1)=?$", answerOptions: [
        { text: "$\\frac{1}{2}(1 + e^{-1})$", isCorrect: true, rationale: "積分因子 $\\mu=e^{x^2}$。通解 $y=\\frac{1}{2}+Ce^{-x^2}$。代入初值 $C=1/2$。" },
        { text: "$\\frac{1}{2}(1 + e)$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$1 + e^{-1}$", isCorrect: false, rationale: "係數錯誤。" },
        { text: "$e^{-1}$", isCorrect: false, rationale: "常數項遺漏。" }
    ]},
    { subject: "Math", topic: "拉氏轉換", question: "$f(t) = t \\cos(3t)$ 的拉氏轉換 $F(s)$ 為何？", answerOptions: [
        { text: "$\\frac{s^2 - 9}{(s^2 + 9)^2}$", isCorrect: true, rationale: "利用微分性質 $\\mathcal{L}\\{t f(t)\\} = -F'(s)$ 對 $\\frac{s}{s^2+9}$ 微分。" },
        { text: "$\\frac{2s}{(s^2 + 9)^2}$", isCorrect: false, rationale: "分子計算錯誤。" },
        { text: "$\\frac{s^2 + 9}{(s^2 + 9)^2}$", isCorrect: false, rationale: "分母正確但分子錯誤。" },
        { text: "$\\frac{s}{s^2 + 9}$", isCorrect: false, rationale: "這是 $\\cos(3t)$ 的轉換。" }
    ]},
    { subject: "Math", topic: "高階常係數微分方程", question: "求 $y'' + 4y' + 5y = 0$ 的通解。", answerOptions: [
        { text: "$e^{-2x}(C_1 \\cos x + C_2 \\sin x)$", isCorrect: true, rationale: "特徵根 $r = -2 \\pm i$。" },
        { text: "$C_1 e^{-2x} + C_2 e^{-x}$", isCorrect: false, rationale: "特徵根判別錯誤。" },
        { text: "$e^{2x}(C_1 \\cos x + C_2 \\sin x)$", isCorrect: false, rationale: "實部符號錯誤。" },
        { text: "$C_1 \cos 2x + C_2 \sin 2x$", isCorrect: false, rationale: "忽略了實部衰減項。" }
    ]},
    { subject: "Math", topic: "傅立葉級數", question: "$f(x)=x^2$ 在 $(-\\pi, \\pi)$ 的傅立葉係數 $a_n (n \\ge 1)$？", answerOptions: [
        { text: "$\\frac{4(-1)^n}{n^2}$", isCorrect: true, rationale: "利用分部積分法計算 $\\frac{2}{\\pi}\\int_0^\\pi x^2\\cos(nx)dx$。" },
        { text: "$0$", isCorrect: false, rationale: "偶函數 $b_n=0$，但 $a_n$ 不為0。" },
        { text: "$\\frac{2}{n}$", isCorrect: false, rationale: "錯誤。" },
        { text: "$\\frac{(-1)^n}{n}$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "Math", topic: "矩陣特徵值", question: "矩陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ 的特徵向量？", answerOptions: [
        { text: "$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$", isCorrect: true, rationale: "對應 $\\lambda=2$。" },
        { text: "$\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$", isCorrect: false, rationale: "驗證 $A\\mathbf{v} \\ne \\lambda \\mathbf{v}$。" },
        { text: "$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$", isCorrect: false, rationale: "錯誤。" },
        { text: "$\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$", isCorrect: false, rationale: "這是對應 $\\lambda=3$ 的特徵向量。" }
    ]},

    // 線性代數 (Science)
    { subject: "Science", topic: "基底與維度", question: "下列何者為 $\\mathbb{R}^3$ 的基底？", answerOptions: [
        { text: "$\\{(1,0,0), (1,1,0), (1,1,1)\\}$", isCorrect: true, rationale: "行列式不為0，線性獨立且生成 $\\mathbb{R}^3$。" },
        { text: "$\\{(1,0,0), (0,1,0)\\}$", isCorrect: false, rationale: "向量數不足。" },
        { text: "$\\{(1,0,0), (2,0,0), (0,0,1)\\}$", isCorrect: false, rationale: "線性相依。" },
        { text: "$\\{(1,2,3), (4,5,6), (7,8,9)\\}$", isCorrect: false, rationale: "行列式為0，線性相依。" }
    ]},
    { subject: "Science", topic: "行列式計算", question: "$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}$，$\\det(A)=?$", answerOptions: [
        { text: "$24$", isCorrect: true, rationale: "上三角矩陣行列式為對角線乘積 $1 \\times 4 \\times 6$。" },
        { text: "$12$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$10$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$0$", isCorrect: false, rationale: "對角線無0，行列式不為0。" }
    ]},
    { subject: "Science", topic: "矩陣Rank", question: "$A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 2 & 1 & 3 \\\\ 1 & 1 & 2 \\end{pmatrix}$ 的 Rank？", answerOptions: [
        { text: "$2$", isCorrect: true, rationale: "第三列是第二列減第一列，故線性相依。" },
        { text: "$3$", isCorrect: false, rationale: "行列式為0，未滿秩。" },
        { text: "$1$", isCorrect: false, rationale: "至少有兩行線性獨立。" },
        { text: "$0$", isCorrect: false, rationale: "非零矩陣。" }
    ]},
    { subject: "Science", topic: "線性轉換", question: "線性轉換 $T(1,1)=(3,3), T(1,-1)=(-1,1)$，求標準矩陣 $[T]$。", answerOptions: [
        { text: "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", isCorrect: true, rationale: "解出 $T(1,0)$ 和 $T(0,1)$ 即可得行向量。" },
        { text: "$\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$", isCorrect: false, rationale: "轉置了。" },
        { text: "$\\begin{pmatrix} 3 & -1 \\\\ 3 & 1 \\end{pmatrix}$", isCorrect: false, rationale: "直接使用了映像值。" },
        { text: "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "Science", topic: "投影與冪等矩陣", question: "若 $A^2=A$ 且 $A \\ne I$，特徵值為何？", answerOptions: [
        { text: "$0$ 或 $1$", isCorrect: true, rationale: "由 $\\lambda^2 = \\lambda$ 解得。" },
        { text: "$1$ 或 $-1$", isCorrect: false, rationale: "這是 $A^2=I$ 的性質。" },
        { text: "僅 $1$", isCorrect: false, rationale: "還有0的可能。" },
        { text: "任意實數", isCorrect: false, rationale: "受方程式限制。" }
    ]},

    // 計算機概論 (History)
    { subject: "History", topic: "資料結構(Heap)", question: "實作最小堆積 (Min Heap) 最適合的資料結構？", answerOptions: [
        { text: "陣列 (Array)", isCorrect: true, rationale: "完全二元樹用陣列實作效率最高。" },
        { text: "鏈結串列 (Linked List)", isCorrect: false, rationale: "指標操作較慢。" },
        { text: "堆疊 (Stack)", isCorrect: false, rationale: "性質不同。" },
        { text: "雜湊表 (Hash Table)", isCorrect: false, rationale: "不具備樹狀結構。" }
    ]},
    { subject: "History", topic: "作業系統(Memory)", question: "關於虛擬記憶體，何者**錯誤**？", answerOptions: [
        { text: "它徹底消除了外部碎片問題。", isCorrect: true, rationale: "分段機制仍可能有外部碎片。" },
        { text: "擴大了可用位址空間。", isCorrect: false, rationale: "正確。" },
        { text: "使用分頁或分段技術。", isCorrect: false, rationale: "正確。" },
        { text: "涉及硬碟交換 (Swapping)。", isCorrect: false, rationale: "正確。" }
    ]},
    { subject: "History", topic: "演算法(Graph)", question: "稀疏圖使用鄰接串列實作 BFS 的時間複雜度？", answerOptions: [
        { text: "$O(V+E)$", isCorrect: true, rationale: "需走訪所有點與邊。" },
        { text: "$O(V^2)$", isCorrect: false, rationale: "這是鄰接矩陣的複雜度。" },
        { text: "$O(V \\log V)$", isCorrect: false, rationale: "排序的複雜度。" },
        { text: "$O(E \\log E)$", isCorrect: false, rationale: "MST 相關複雜度。" }
    ]},
    { subject: "History", topic: "網路(Network Layer)", question: "TCP/IP 中，傳輸層 (Transport Layer) **不負責**？", answerOptions: [
        { text: "路徑選擇 (Routing)", isCorrect: true, rationale: "這是網路層 (IP) 的工作。" },
        { text: "流量控制", isCorrect: false, rationale: "TCP 負責。" },
        { text: "錯誤更正", isCorrect: false, rationale: "TCP 負責。" },
        { text: "連接埠定址", isCorrect: false, rationale: "TCP/UDP 負責。" }
    ]},
    { subject: "History", topic: "資料庫(SQL)", question: "`SELECT ... FROM S LEFT JOIN M WHERE M.ID IS NULL` 的作用？", answerOptions: [
        { text: "找出沒有主修的學生。", isCorrect: true, rationale: "篩選出左表有但右表無法匹配的資料。" },
        { text: "找出有主修的學生。", isCorrect: false, rationale: "這是 INNER JOIN。" },
        { text: "找出所有學生。", isCorrect: false, rationale: "不應加 WHERE 條件。" },
        { text: "找出沒有學生的主修。", isCorrect: false, rationale: "應反向 JOIN。" }
    ]},

    // 經濟學 (Geography)
    { subject: "Geography", topic: "供需彈性", question: "$Q_d = 20 - 2P$，當 $P=5$ 時的價格彈性？", answerOptions: [
        { text: "$1.0$", isCorrect: true, rationale: "$Q=10, |dQ/dP \\times P/Q| = |-2 \\times 5/10| = 1$。" },
        { text: "$0.5$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$2.0$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$0$", isCorrect: false, rationale: "計算錯誤。" }
    ]},
    { subject: "Geography", topic: "市場結構", question: "完全競爭廠商短期利潤最大化條件？", answerOptions: [
        { text: "$P = MC$ 且 $MC$ 遞增", isCorrect: true, rationale: "價格等於邊際成本。" },
        { text: "$P = ATC$", isCorrect: false, rationale: "這是零利潤點。" },
        { text: "$MR > MC$", isCorrect: false, rationale: "應增加產量。" },
        { text: "$P = AVC$", isCorrect: false, rationale: "這是歇業點。" }
    ]},
    { subject: "Geography", topic: "總體經濟(IS-LM)", question: "IS-LM 模型中，擴張性財政政策 ($G \\uparrow$) 造成？", answerOptions: [
        { text: "利率上升，產出增加", isCorrect: true, rationale: "IS 右移，沿著 LM 移動。" },
        { text: "利率下降，產出增加", isCorrect: false, rationale: "這是貨幣政策的效果。" },
        { text: "利率上升，產出減少", isCorrect: false, rationale: "不可能。" },
        { text: "利率不變，產出增加", isCorrect: false, rationale: "除非 LM 水平。" }
    ]},
    { subject: "Geography", topic: "國民所得", question: "計入 GNP 但不計入 GDP 的項目？", answerOptions: [
        { text: "本國公司在國外的獲利", isCorrect: true, rationale: "屬人主義 vs 屬地主義。" },
        { text: "外國人在本國的薪資", isCorrect: false, rationale: "計入 GDP。" },
        { text: "政府移轉支付", isCorrect: false, rationale: "都不計入。" },
        { text: "國內二手車交易", isCorrect: false, rationale: "都不計入。" }
    ]},
    { subject: "Geography", topic: "寡佔市場", question: "哪種市場結構廠商間相互依存度最高？", answerOptions: [
        { text: "寡佔 (Oligopoly)", isCorrect: true, rationale: "少數廠商互相牽制。" },
        { text: "完全競爭", isCorrect: false, rationale: "無影響力。" },
        { text: "獨佔", isCorrect: false, rationale: "無競爭者。" },
        { text: "獨佔性競爭", isCorrect: false, rationale: "影響力低。" }
    ]},

    // 微積分 (English)
    { subject: "English", topic: "極限與羅必達", question: "$\\lim_{x \\to 0} \\frac{\\sin(2x) - 2x}{x^3} = ?$", answerOptions: [
        { text: "$-\\frac{4}{3}$", isCorrect: true, rationale: "羅必達法則三次：$\\frac{-8\\cos 2x}{6} \\to -4/3$。" },
        { text: "$0$", isCorrect: false, rationale: "錯誤。" },
        { text: "$-1$", isCorrect: false, rationale: "錯誤。" },
        { text: "$\\infty$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "English", topic: "微分應用", question: "$f(x) = \\ln\\sqrt{\\frac{1-\\sin x}{1+\\sin x}}$，$f'(x)=?$", answerOptions: [
        { text: "$-\\sec x$", isCorrect: true, rationale: "化簡後微分 $\\ln(\\sec x - \\tan x)$。" },
        { text: "$\\sec x$", isCorrect: false, rationale: "符號錯誤。" },
        { text: "$\\cos x$", isCorrect: false, rationale: "錯誤。" },
        { text: "$\\tan x$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "English", topic: "積分技巧", question: "$\\int_0^1 x e^{-x} dx = ?$", answerOptions: [
        { text: "$1 - 2e^{-1}$", isCorrect: true, rationale: "分部積分：$-xe^{-x} - e^{-x}$ 代入上下限。" },
        { text: "$1 - e^{-1}$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$e^{-1}$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$1$", isCorrect: false, rationale: "計算錯誤。" }
    ]},
    { subject: "English", topic: "級數收斂", question: "級數 $\\sum \\frac{(x-3)^n}{n 2^n}$ 收斂區間？", answerOptions: [
        { text: "$[1, 5)$", isCorrect: true, rationale: "半徑2，中心3。端點1收斂，5發散。" },
        { text: "$(1, 5)$", isCorrect: false, rationale: "端點判斷錯誤。" },
        { text: "$[1, 5]$", isCorrect: false, rationale: "端點判斷錯誤。" },
        { text: "$(-\\infty, \\infty)$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "English", topic: "重積分", question: "$\\iint_R (x+2y)dA$，區域由 $y=x, y=2x, x=1$ 圍成。", answerOptions: [
        { text: "$\\frac{4}{3}$", isCorrect: true, rationale: "積分 $\\int_0^1 \\int_x^{2x} (x+2y) dy dx$。" },
        { text: "$1$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$2$", isCorrect: false, rationale: "計算錯誤。" },
        { text: "$\\frac{5}{3}$", isCorrect: false, rationale: "計算錯誤。" }
    ]},

    // 統計學 (Coding)
    { subject: "Coding", topic: "期望值與變異數", question: "$P(X=x) = x/10, x=1,2,3,4$。$E[X]=?$", answerOptions: [
        { text: "$3.0$", isCorrect: true, rationale: "$1(0.1)+2(0.2)+3(0.3)+4(0.4)=3$。" },
        { text: "$2.5$", isCorrect: false, rationale: "不是均勻分佈。" },
        { text: "$2.0$", isCorrect: false, rationale: "錯誤。" },
        { text: "$3.5$", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "Coding", topic: "中央極限定理", question: "CLT 指出樣本平均數 $\\bar{X}$ 的分佈趨近於？", answerOptions: [
        { text: "常態分佈，標準差 $\\sigma/\\sqrt{n}$", isCorrect: true, rationale: "中央極限定理定義。" },
        { text: "常態分佈，標準差 $\\sigma$", isCorrect: false, rationale: "標準誤需除根號n。" },
        { text: "T 分佈", isCorrect: false, rationale: "那是小樣本且母體常態時。" },
        { text: "母體分佈", isCorrect: false, rationale: "錯誤。" }
    ]},
    { subject: "Coding", topic: "假說檢定", question: "想證明新藥效用「優於」舊藥，對立假設 $H_a$ 應設為？", answerOptions: [
        { text: "$\\mu > \\mu_0$", isCorrect: true, rationale: "研究者想證明的放 $H_a$。" },
        { text: "$\\mu = \\mu_0$", isCorrect: false, rationale: "這是 $H_0$。" },
        { text: "$\\mu \\ne \\mu_0$", isCorrect: false, rationale: "這是雙尾檢定。" },
        { text: "$\\mu < \\mu_0$", isCorrect: false, rationale: "這是劣於。" }
    ]},
    { subject: "Coding", topic: "P-value", question: "$p$-value $= 0.02, \\alpha=0.05$，結論？", answerOptions: [
        { text: "拒絕 $H_0$", isCorrect: true, rationale: "$p < \\alpha$，結果顯著。" },
        { text: "不拒絕 $H_0$", isCorrect: false, rationale: "錯誤。" },
        { text: "$H_0$ 成立", isCorrect: false, rationale: "不能說 $H_0$ 成立。" },
        { text: "資料不足", isCorrect: false, rationale: "已有結論。" }
    ]},
    { subject: "Coding", topic: "迴歸分析", question: "簡單迴歸 $Y=\\beta_0+\\beta_1 X$，$\\beta_1$ 意義？", answerOptions: [
        { text: "$X$ 每增1單位，$Y$ 的平均變動量", isCorrect: true, rationale: "斜率定義。" },
        { text: "$Y$ 的截距", isCorrect: false, rationale: "那是 $\\beta_0$。" },
        { text: "相關係數", isCorrect: false, rationale: "不相等。" },
        { text: "判定係數", isCorrect: false, rationale: "那是 $R^2$。" }
    ]}
];

// === B. 參數與變數設定 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易 老師", teacher: "周易 老師", youtubeId: "GGnegd" }, 
    Science: { title: "線性代數 - 周易 老師", teacher: "周易 老師", youtubeId: "bNW7x6" },
    History: { title: "計算機概論 - 張逸 老師", teacher: "張逸 老師", youtubeId: "3bKOEj" },
    Geography: { title: "經濟學 - 牧翰 老師", teacher: "牧翰 老師", youtubeId: "VmY8yb" },
    English: { title: "微積分 - 梁修 老師", teacher: "梁修 老師", youtubeId: "QVYXn0" },
    Coding: { title: "統計學 - 張翔 老師", teacher: "張翔 老師", youtubeId: "XaAAQ3" }
};
const LINE_CTA_LINK = "https://lin.ee/Oj42w8M"; 

let currentSubject = ''; 
let currentScore = 0; 
let answeredQuestions = new Set();
let wrongQuestionsData = []; // 新增：儲存錯題資料
let player; 

// === C. 頁面控制 ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    // 如果進入資源頁，載入影片並生成計畫
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan(); // 生成讀書計畫
    }
}

// === D. 表單邏輯 ===
document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uni = document.querySelector('input[name="userUniversity"]:checked');
    const otherUni = document.getElementById('uniOtherText').value;
    
    if (uni.value === '其他' && !otherUni.trim()) {
        alert("請輸入大學名稱");
        return;
    }
    
    localStorage.setItem('userData', JSON.stringify({
        name: document.getElementById('userName').value,
        uni: uni.value === '其他' ? otherUni : uni.value,
        ts: new Date().toISOString()
    }));
    
    showPage('subjectSelectPage');
});

document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.addEventListener('change', function() {
        const textInput = document.getElementById('uniOtherText');
        if (this.value === '其他') {
            textInput.disabled = false;
            textInput.focus();
        } else {
            textInput.disabled = true;
            textInput.value = '';
        }
    });
});

// === E. 測驗邏輯 ===
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.dataset.subject;
        startQuiz(currentSubject);
    });
});

function startQuiz(subject) {
    currentScore = 0;
    answeredQuestions.clear();
    wrongQuestionsData = []; // 重置錯題
    
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
        // 將該題在原始資料庫的索引或物件暫存，這邊我們存題目文字以便後續查找，或直接存屬性
        // 為了簡單，我們直接將該題的所有資料存入 DOM 節點的 data 屬性並不好做，我們用閉包或索引查找
        // 這裡建立一個 data-array-index 指向 filter 後的陣列索引
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
    
    // 防止重複作答
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);

    // 取得題目資料
    const quizList = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject);
    const currentQ = quizList[qIdx];
    
    // 判斷對錯
    const selectedIdx = parseInt(this.dataset.idx);
    const isCorrect = currentQ.answerOptions[selectedIdx].isCorrect;
    const rationaleText = currentQ.answerOptions[selectedIdx].rationale || "無詳解"; // 簡單防呆

    // UI 顯示
    this.classList.add('selected');
    if (isCorrect) {
        this.classList.add('correct');
        currentScore += 20; // 5題，每題20分
    } else {
        this.classList.add('incorrect');
        // 標示正確答案
        const correctIdx = currentQ.answerOptions.findIndex(o => o.isCorrect);
        card.querySelectorAll('.option-item')[correctIdx].classList.add('correct');
        
        // 紀錄錯題 (重要邏輯)
        wrongQuestionsData.push({
            topic: currentQ.topic,
            question: currentQ.question
        });
    }

    // 顯示詳解
    const ratDiv = document.getElementById(`rat-${qIdx}`);
    ratDiv.innerHTML = `<strong>💡 解析：</strong> ${currentQ.answerOptions.find(o => o.isCorrect).rationale}`;
    ratDiv.classList.add('visible');
    
    // 重新渲染該區塊的 Math
    if (window.renderMathInElement) {
        renderMathInElement(ratDiv, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    }

    // 檢查是否全部完成
    if (answeredQuestions.size === 5) {
        setTimeout(showQuizResult, 800);
    }
}

function showQuizResult() {
    document.getElementById('quiz-content').classList.add('hidden');
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');
    
    const scoreSpan = document.getElementById('score');
    scoreSpan.innerText = currentScore;
    
    // 根據分數給評語
    let comment = "";
    if (currentScore === 100) comment = "太強了！您的觀念非常清晰，絕對是頂大的料！";
    else if (currentScore >= 60) comment = "不錯喔！掌握了大部分觀念，針對弱點補強就能更上一層樓！";
    else comment = "別灰心！基礎觀念還需要加強，這份測驗剛好幫您找出盲點！";
    
    document.getElementById('scoreComment').innerText = comment;
}

// 點擊前往資源頁
document.getElementById('goToResourceBtn').addEventListener('click', function() {
    // 設定資源頁數據
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    
    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const subjectName = button.innerText.replace(/[^\u4e00-\u9fa5]/g, '');
    document.getElementById('finalSubjectName').innerText = subjectName;
    document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    
    let msg = "";
    if (currentScore === 100) msg = "實力驚人！看這部進階影片來挑戰極限吧！";
    else msg = "針對您的測驗結果，顧問推薦您先由這部影片打底：";
    document.getElementById('scoreMessage').innerText = msg;
    
    document.getElementById('lineCtaButton').href = LINE_CTA_LINK;

    showPage('resourcePage');
});

// === F. 讀書計畫生成引擎 (核心功能) ===
function generateStudyPlan() {
    const week1 = document.getElementById('plan-week-1');
    const week2 = document.getElementById('plan-week-2');
    const week3 = document.getElementById('plan-week-3');
    const week4 = document.getElementById('plan-week-4');
    const weaknessTag = document.getElementById('weaknessTag');

    // 清空舊內容
    [week1, week2, week3, week4].forEach(el => el.innerHTML = '');

    let topics = [];
    if (wrongQuestionsData.length > 0) {
        // 有錯題：針對錯題生成
        topics = wrongQuestionsData.map(d => d.topic);
        weaknessTag.innerText = topics.join('、');
        
        // 分配錯題到前兩週
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
        // 全對：菁英計畫
        weaknessTag.innerText = "全數答對！菁英強化版";
        week1.innerHTML = `<ul><li>🚀 <strong>超前部署：</strong>直接挑戰研究所考古題 (108-110年)</li><li>📚 <strong>廣度閱讀：</strong>閱讀相關原文書章節補充觀念</li></ul>`;
        week2.innerHTML = `<ul><li>⚡ <strong>速度訓練：</strong>計時完成一份完整模擬試卷</li><li>🔍 <strong>難題鑽研：</strong>尋找該科目最困難的特殊題型解析</li></ul>`;
    }

    // 後兩週固定行程 (根據科目動態微調文字)
    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const sName = button ? button.innerText.replace(/[^\u4e00-\u9fa5]/g, '') : "該科目";

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

// === G. YouTube API ===
function initYouTube() {
    const container = document.getElementById('youtubePlayer');
    // 避免重複載入
    if (container.querySelector('iframe')) return;
    
    const vidId = VIDEO_LINKS[currentSubject].youtubeId;
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vidId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}