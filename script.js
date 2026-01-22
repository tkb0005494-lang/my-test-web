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
        subject: "History", 
        topic: "資料表示法",
        question: "在 IEEE 754 單倍精確度 (Single Precision) 浮點數表示法中，偏置值 (Bias) 的設定主要是為了？",
        answerOptions: [
            { text: "增加有效數字的精度", isCorrect: false, rationale: "精度由分數 (Fraction) 位元決定。" },
            { text: "使指數部分能以無號整數比較大小", isCorrect: true, rationale: "透過 Bias 將指數平移，使正負指數皆變為正數，方便處理器硬體快速比較。" },
            { text: "處理溢位 (Overflow) 問題", isCorrect: false, rationale: "溢位是由指數位元上限決定，與 Bias 無直接關係。" },
            { text: "實現正規化 (Normalization)", isCorrect: false, rationale: "正規化是為了確保唯一表示法，與 Bias 無直接關係。" }
        ]
    },
    {
        subject: "History",
        topic: "計算機結構",
        question: "關於快取記憶體 (Cache) 的空間局部性 (Spatial Locality)，下列敘述何者正確？",
        answerOptions: [
            { text: "指的是 CPU 最近存取過的指令，短時間內極可能再次存取", isCorrect: false, rationale: "這是時間局部性 (Temporal Locality)。" },
            { text: "增加快取區塊 (Block Size) 大小通常能提升空間局部性的效益", isCorrect: true, rationale: "空間局部性指存取某資料時，其相鄰資料也常被存取，加大 Block 可一次載入更多相鄰資料。" },
            { text: "它是為了補償硬碟與主記憶體之間的速差", isCorrect: false, rationale: "快取主要是補償 CPU 與主記憶體 (DRAM) 之間的速差。" },
            { text: "全關聯映射 (Fully Associative) 是利用此特性來運作", isCorrect: false, rationale: "映射方式是決定資料存放位置，與局部性特性無關。" }
        ]
    },
    {
        subject: "History",
        topic: "網路通訊",
        question: "在 TCP 協定的三向握手 (Three-way Handshake) 過程中，若客戶端發送 SYN 包後收到伺服器的 SYN/ACK，客戶端最後回傳的是？",
        answerOptions: [
            { text: "FIN", isCorrect: false, rationale: "FIN 用於終止連線。" },
            { text: "RST", isCorrect: false, rationale: "RST 用於強制重置連線。" },
            { text: "ACK", isCorrect: true, rationale: "客戶端必須回傳最後一個 ACK 才能完成連線建立。" },
            { text: "PSH", isCorrect: false, rationale: "PSH 用於請求立即傳送數據。" }
        ]
    },
    {
        subject: "History",
        topic: "資料結構",
        question: "若已知一棵二元樹的「中序走訪 (Inorder)」與「後序走訪 (Postorder)」，下列敘述何者正確？",
        answerOptions: [
            { text: "無法唯一確定該二元樹的型態", isCorrect: false, rationale: "只要有中序搭配前序或後序其中之一，即可唯一確定二元樹。" },
            { text: "可以唯一確定該二元樹，且後序第一個節點為根節點", isCorrect: false, rationale: "後序的最後一個節點才是根節點。" },
            { text: "可以唯一確定該二元樹，且後序最後一個節點為根節點", isCorrect: true, rationale: "後序走訪 (左-右-根) 的最後一個元素必為當前子樹的根。" },
            { text: "僅能確定該樹是否為平衡樹 (AVL Tree)", isCorrect: false, rationale: "走訪序列主要用於重建結構，無法直接判斷平衡性質。" }
        ]
    },
    {
        subject: "History",
        topic: "作業系統",
        question: "下列何者「不是」死結 (Deadlock) 發生的四個必要條件之一？",
        answerOptions: [
            { text: "互斥 (Mutual Exclusion)", isCorrect: false, rationale: "這是死結必要條件之一。" },
            { text: "持有並等待 (Hold and Wait)", isCorrect: false, rationale: "這是死結必要條件之一。" },
            { text: "可奪取 (Preemption)", isCorrect: true, rationale: "死結的條件是「不可奪取 (No Preemption)」。若資源可被奪取，就不會發生死結。" },
            { text: "循環等待 (Circular Wait)", isCorrect: false, rationale: "這是死結必要條件之一。" }
        ]
    }, 
  // --- 經濟學 (Geography) ---
    {
        subject: "Geography", 
        topic: "需求彈性", 
        question: "若某商品的需求價格彈性 $E_d > 1$ (富有彈性)，當廠商為了增加總收益 (Total Revenue) 時，其定價策略應為？",
        answerOptions: [
            { text: "調漲價格", isCorrect: false, rationale: "彈性大於 1 時，漲價會導致需求量減少的比例大於價格增加比例，總收益會下降。" },
            { text: "調降價格", isCorrect: true, rationale: "當 $E_d > 1$ 時，降價所誘發的需求量增加百分比大於漲價百分比，可提升總收益。" },
            { text: "維持價格不變", isCorrect: false, rationale: "此非極大化收益之策略。" },
            { text: "無法判斷，需視供給彈性而定", isCorrect: false, rationale: "總收益僅由需求端價格與數量的關係決定。" }
        ]
    },
    {
        subject: "Geography", 
        topic: "市場結構", 
        question: "在古諾模型 (Cournot Model) 的雙佔市場中，若兩家廠商的邊際成本均為 0，則市場均衡總產量與完全競爭市場產量的比例為何？",
        answerOptions: [
            { text: "1/2", isCorrect: false, rationale: "這是獨佔市場相對於完全競爭的比例。" },
            { text: "2/3", isCorrect: true, rationale: "古諾雙佔模型中，市場總產量為 $Q = [n/(n+1)]Q_{pc}$，當 $n=2$ 時比例為 2/3。" },
            { text: "3/4", isCorrect: false, rationale: "計算錯誤。" },
            { text: "1/3", isCorrect: false, rationale: "這是單一廠商在雙佔中的產量比例。" }
        ]
    },
    {
        subject: "Geography", 
        topic: "消費者理論", 
        question: "若消費者的偏好滿足「邊際替代率遞減 (Diminishing MRS)」，則其無異曲線 (Indifference Curve) 的幾何形狀為何？",
        answerOptions: [
            { text: "凹向原點 (Concave)", isCorrect: false, rationale: "凹向原點代表 MRS 遞增。" },
            { text: "凸向原點 (Convex)", isCorrect: true, rationale: "MRS 遞減確保了無異曲線凸向原點，代表消費者偏好消費組合的適度均衡。" },
            { text: "一條斜率為負的直線", isCorrect: false, rationale: "這代表兩商品為完全替代品，MRS 為常數。" },
            { text: "L 型曲線", isCorrect: false, rationale: "這代表兩商品為完全互補品。" }
        ]
    },
    {
        subject: "Geography", 
        topic: "IS-LM 模型", 
        question: "在 IS-LM 模型中，若發生「流動性陷阱 (Liquidity Trap)」，則下列敘述何者正確？",
        answerOptions: [
            { text: "LM 曲線為垂直線", isCorrect: false, rationale: "流動性陷阱時，LM 曲線應為水平線。" },
            { text: "財政政策完全無效", isCorrect: false, rationale: "此時財政政策效果最大 (無擠出效應)。" },
            { text: "貨幣政策完全無效", isCorrect: true, rationale: "在 LM 為水平的情況下，增加貨幣供給無法進一步調降利率，無法刺激投資。" },
            { text: "利率處於極高水準", isCorrect: false, rationale: "流動性陷阱發生於利率極低時。" }
        ]
    },
    {
        subject: "Geography", 
        topic: "國民所得", 
        question: "關於 GDP 與 GNP 的差異，下列公式何者正確？",
        answerOptions: [
            { text: "GNP = GDP + 國外要素所得淨額 (NFI)", isCorrect: true, rationale: "這是兩者之間標準的轉換公式。" },
            { text: "GDP = GNP + 資本折舊", isCorrect: false, rationale: "折舊用於計算 NNP 或 NDP。" },
            { text: "GNP = GDP - 間接稅淨額", isCorrect: false, rationale: "這是計算要素成本所得的調整。" },
            { text: "兩者永遠相等", isCorrect: false, rationale: "除非該國為封閉經濟且無國外所得。" }
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
        subject: "Coding", 
        topic: "抽樣分佈", 
        question: "在抽樣調查中，『標準誤 (Standard Error)』與『標準差 (Standard Deviation)』的主要區別為何？",
        answerOptions: [
            { text: "兩者意義完全相同，只是名稱不同", isCorrect: false, rationale: "標準差描述樣本原始數據的離散度；標準誤描述統計量 (如平均數) 抽樣分佈的離散度。" },
            { text: "標準誤是描述『統計量抽樣分佈』的離散程度", isCorrect: true, rationale: "根據中央極限定理，樣本平均數的標準誤為 $\\sigma/\\sqrt{n}$，衡量樣本平均數與母體參數的距離。" },
            { text: "標準誤永遠大於標準差", isCorrect: false, rationale: "當 $n>1$ 時，標準誤通常小於標準差。" },
            { text: "標準誤僅能用於描述類別變數", isCorrect: false, rationale: "標準誤可用於任何數值統計量的抽樣分佈。" }
        ]
    },
    {
        subject: "Coding", 
        topic: "常態分佈特性", 
        question: "若隨機變數 $X \\sim N(\\mu, \\sigma^2)$，則根據實證規則 (Empirical Rule)，約有多少比例的資料會落在 $\\mu \\pm 2\\sigma$ 之內？",
        answerOptions: [
            { text: "68%", isCorrect: false, rationale: "這是 $\\pm 1\\sigma$ 的比例。" },
            { text: "95%", isCorrect: true, rationale: "常態分佈中，約有 95.4% (一般簡稱 95%) 的資料落於平均數正負兩個標準差之內。" },
            { text: "99.7%", isCorrect: false, rationale: "這是 $\\pm 3\\sigma$ 的比例。" },
            { text: "50%", isCorrect: false, rationale: "常態分佈是對稱的，50% 是指大於或小於平均數的比例。" }
        ]
    },
    {
        subject: "Coding", 
        topic: "假設檢定決策", 
        question: "在樣本數 ($n$) 固定且其他條件不變的情況下，關於型一錯誤率 ($\\alpha$) 與型二錯誤率 ($\\beta$) 的敘述何者正確？",
        answerOptions: [
            { text: "調低 $\\alpha$ 的同時，$\\beta$ 也會隨之降低", isCorrect: false, rationale: "在固定樣本數下，$\\alpha$ 與 $\\beta$ 存在權衡關係，調低其中一個通常會增加另一個。" },
            { text: "調低 $\\alpha$ 會導致 $\\beta$ 增加", isCorrect: true, rationale: "這是統計檢定中的 Trade-off。當你對拒絕虛無假設變得更嚴謹時，就越容易漏掉真實的效果。" },
            { text: "$\\alpha + \\beta$ 的機率總和必然等於 1", isCorrect: false, rationale: "$\\alpha$ 與 $\\beta$ 並非互補事件，總和不一定為 1。" },
            { text: "兩者之間完全沒有統計上的關係", isCorrect: false, rationale: "兩者透過檢定邊界的設定而互相連動。" }
        ]
    },
    {
        subject: "Coding", 
        topic: "迴歸分析", 
        question: "在簡單線性迴歸中，判定係數 (Coefficient of Determination, $R^2$) 的經濟意義為何？",
        answerOptions: [
            { text: "自變數 $X$ 與應變數 $Y$ 之間的相關係數", isCorrect: false, rationale: "這是 $r$，而 $R^2 = r^2$。" },
            { text: "總變異中可由迴歸模型解釋的比例", isCorrect: true, rationale: " $R^2 = SSR / SST$，代表應變數總變異中能被自變數解釋的部分。" },
            { text: "模型殘差的平均數", isCorrect: false, rationale: "殘差平均數在 OLS 下應為 0。" },
            { text: "預測值與真實值之間的絕對誤差", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "Coding", 
        topic: "估計式性質", 
        question: "若一個估計式 $\\hat{\\theta}$ 的期望值等於母體參數 $\\theta$ (即 $E[\\hat{\\theta}] = \\theta$)，則稱此估計式具有？",
        answerOptions: [
            { text: "一致性 (Consistency)", isCorrect: false, rationale: "一致性是指樣本數趨於無限大時，估計式收斂至參數。" },
            { text: "有效性 (Efficiency)", isCorrect: false, rationale: "有效性是指估計式的變異數較小。" },
            { text: "不偏性 (Unbiasedness)", isCorrect: true, rationale: "不偏性的定義即為估計式的期望值等於被估計的參數。" },
            { text: "充分性 (Sufficiency)", isCorrect: false, rationale: "充分性是指估計式包含了樣本中關於參數的所有資訊。" }
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
    "🚀 頂大學生都在銳評，別落後！",
    "💡 5題測驗就能找出你的寒假進步關鍵！",
    "🎯 限時活動：今天完成測驗可找顧問一對一諮詢！",
    "⚡ 猶豫就會錯過！立即填寫，馬上銳評！",
    "📈 你的競爭對手已經在規劃寒假進度了！",
    "🌟 僅需1分鐘填寫資料，立即開啟銳評之路！",
    "🏆 測驗完成即可參與現金紅包抽獎！",
    "💪 別讓拖延成為你寒假進步的絆腳石！",
    "🚨 活動名額有限，立即行動獲取專屬計畫！",
    "✨ 你的寒假讀書計畫正在等待解鎖！",
    "🎁 完成測驗立即獲得$500紅包抽獎機會！",
    "📚 寒假逆襲就從這5題開始！",
    "💥 蹦!有一位清大學生完成測驗啦！",
    "🔔 提醒：有一交大學生完成測驗！",
    "🚨 時間正在流逝，立即開始你的學霸計畫！",
    "🏅 來測測你是不是頂級吧！",
    "⚡有一位清大學生完成測驗啦!評分:拉完了！",
    "💎 你的專屬學習顧問正在等待你的銳評！"
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
        potentialLevel = '夯';
        comment =`✌️ 您的知識結構扎實且應用能力極強，遠超多數清交學生！寒假目標：維持手感，挑戰更進階的題型。`;
    } else if (currentScore >= 80) {
        potentialLevel = '頂級';
        comment = `💎 您的基礎知識掌握度高，但在特定章節仍有提升空間。寒假目標：鎖定弱點，精準補強，就能晉升 S 級！`;
    } else if (currentScore >= 60) {
        potentialLevel = '人上人';
        comment = `✨ 您已具備一定基礎，但面對高難度挑戰時，計算或觀念整合能力略顯不足。寒假目標：建立完整知識地圖，從頭打好根基。`;
    } else {
        potentialLevel = '拉完了';
        comment = `💩 以為拉完了就沒事?立即規劃補強，寒假後逆轉勝！`;
    }
    
    document.getElementById('scoreComment').innerHTML = `銳評：<strong>${potentialLevel}</strong><br>${comment}`;
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
