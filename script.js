// === A. Google 表單設定 ===
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

const FORM_IDS = {
    FORM_A_NAME: 'entry.1711447572',
    FORM_A_UNI: 'entry.651877505',
    FORM_A_DEPT_GRADE: 'entry.1169658860', // 存放 "系所 / 年級"
    FORM_A_PHONE: 'entry.1253545059',
    FORM_A_GRADE: 'entry.247937200'
};

// === B. 專業升級版題庫 (包含高階工程數學) ===
const ALL_QUIZ_DATA = [
    {
        subject: "Math", topic: "二階非齊次 ODE", question: "求方程式 $y'' + 3y' + 2y = e^{-x}$ 的特徵方程根為何？",
        answerOptions: [
            { text: "$-1, -2$", isCorrect: true, rationale: "特徵方程為 $r^2+3r+2=0 \\Rightarrow (r+1)(r+2)=0$。" },
            { text: "$1, 2$", isCorrect: false, rationale: "正負號判斷錯誤。" },
            { text: "$0, -3$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "重根 $-1$", isCorrect: false, rationale: "判別式大於 0，有相異實根。" }
        ]
    },
    {
        subject: "Math", topic: "拉普拉斯位移定理", question: "求 $L\{e^{2t} \cos(3t)\}$ 的轉換結果？",
        answerOptions: [
            { text: "$(s-2)/((s-2)^2 + 9)$", isCorrect: true, rationale: "利用第一位移定理，$L\{e^{at}f(t)\} = F(s-a)$。" },
            { text: "$s/(s^2+9)$", isCorrect: false, rationale: "忘記進行位移處理。" },
            { text: "$3/((s-2)^2 + 9)$", isCorrect: false, rationale: "這是正弦函數的轉換。" },
            { text: "$(s+2)/((s+2)^2 + 9)$", isCorrect: false, rationale: "位移方向錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "線性代數基礎", question: "若矩陣 $A$ 為 $3 \times 3$ 且 $\det(A) = 5$，則 $\det(2A)$ 為？",
        answerOptions: [
            { text: "$40$", isCorrect: true, rationale: "$\det(kA) = k^n \det(A)$，故 $2^3 \times 5 = 40$。" },
            { text: "$10$", isCorrect: false, rationale: "忘記 $k$ 也要立方。" },
            { text: "$30$", isCorrect: false, rationale: "計算錯誤。" },
            { text: "$5$", isCorrect: false, rationale: "錯誤。" }
        ]
    },
    {
        subject: "Math", topic: "傅立葉轉換", question: "單位脈衝函數 $\delta(t)$ 的傅立葉轉換為？",
        answerOptions: [
            { text: "$1$", isCorrect: true, rationale: "$\int_{-\infty}^{\infty} \delta(t)e^{-i\omega t}dt = e^0 = 1$。" },
            { text: "$0$", isCorrect: false, rationale: "錯誤。" },
            { text: "$\infty$", isCorrect: false, rationale: "錯誤。" },
            { text: "$2\pi\delta(\omega)$", isCorrect: false, rationale: "這是常數 1 的傅立葉轉換。" }
        ]
    },
    {
        subject: "Math", topic: "向量微積分", question: "純量場 $\phi = x^2 + y^2$ 在點 $(1, 1)$ 的梯度 (Gradient) 為？",
        answerOptions: [
            { text: "$(2, 2)$", isCorrect: true, rationale: "$\nabla\phi = (2x, 2y)$，代入 $(1, 1)$ 得 $(2, 2)$。" },
            { text: "$(1, 1)$", isCorrect: false, rationale: "微分錯誤。" },
            { text: "$4$", isCorrect: false, rationale: "梯度應為向量而非純量。" },
            { text: "$(2, 0)$", isCorrect: false, rationale: "計算錯誤。" }
        ]
    },
    // 其他科目題目 (線性代數、計概、經濟、微積分、統計) 沿用原邏輯但進行優化渲染
    { subject: "Science", topic: "矩陣秩", question: "若 $A$ 為 $m \times n$ 矩陣且 $rank(A)=r$，其零空間維度為？", answerOptions: [{ text: "$n-r$", isCorrect: true, rationale: "根據 Rank-Nullity Theorem。" }, { text: "$m-r$", isCorrect: false, rationale: "錯誤。" }, { text: "$r$", isCorrect: false, rationale: "錯誤。" }, { text: "$n$", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "History", topic: "OS 排程", question: "下列何者不會造成「死結 (Deadlock)」的必要條件？", answerOptions: [{ text: "搶佔 (Preemption)", isCorrect: true, rationale: "「不可搶佔」才是死結條件。" }, { text: "互斥", isCorrect: false, rationale: "是必要條件。" }, { text: "循環等待", isCorrect: false, rationale: "是必要條件。" }, { text: "持有並等待", isCorrect: false, rationale: "是必要條件。" }] },
    { subject: "Geography", topic: "彈性", question: "需求曲線為垂直線時，其價格彈性為？", answerOptions: [{ text: "$0$", isCorrect: true, rationale: "稱為完全無彈性。" }, { text: "無限大", isCorrect: false, rationale: "那是水平線。" }, { text: "$1$", isCorrect: false, rationale: "錯誤。" }, { text: "無法計算", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "English", topic: "泰勒展開", question: "函數 $e^x$ 在 $x=0$ 的泰勒級數第一項為？", answerOptions: [{ text: "$1$", isCorrect: true, rationale: "$e^0 = 1$。" }, { text: "$x$", isCorrect: false, rationale: "這是第二項。" }, { text: "$0$", isCorrect: false, rationale: "錯誤。" }, { text: "$1/2$", isCorrect: false, rationale: "錯誤。" }] },
    { subject: "Coding", topic: "機率", question: "丟擲兩枚公正硬幣，恰好出現一正一反的機率？", answerOptions: [{ text: "$1/2$", isCorrect: true, rationale: "樣本空間 {正正, 正反, 反正, 反反}，目標佔 2/4。" }, { text: "$1/4$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$3/4$", isCorrect: false, rationale: "計算錯誤。" }, { text: "$1$", isCorrect: false, rationale: "錯誤。" }] }
];

// === C. 影片資源與連結 ===
const VIDEO_LINKS = {
    Math: { title: "工程數學 - 周易老師", youtubeId: "LiW8jvHZ7o4" },
    Science: { title: "線性代數 - 周易老師", youtubeId: "dW4cUVU089Q" },
    History: { title: "計算機概論 - 張逸老師", youtubeId: "ZC98Wmrtb7o" },
    Geography: { title: "經濟學 - 牧翰老師", youtubeId: "2ZXmDGBC4c4" },
    English: { title: "微積分 - 梁修老師", youtubeId: "QNLL0qfEPmI" },
    Coding: { title: "統計學 - 張翔老師", youtubeId: "GhAxVkA1He8" }
};

let currentSubject = '', currentScore = 0, answeredCount = 0;
let wrongTopics = [];

// === D. 核心功能 ===

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 姓名電話驗證
const validateName = (n) => /^[\u4e00-\u9fa5]{2,}$/.test(n);
const validatePhone = (p) => /^09\d{8}$/.test(p);

// 表單提交
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const err = document.getElementById('formError');
    
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const dept = document.getElementById('userDepartment').value.trim();
    const uniRadio = document.querySelector('input[name="userUniversity"]:checked');
    const gradeRadio = document.querySelector('input[name="userGrade"]:checked');
    const uniOther = document.getElementById('uniOtherText').value.trim();

    if (!validateName(name)) { err.innerText = "請輸入正確的中文姓名"; err.style.display = "block"; return; }
    if (!validatePhone(phone)) { err.innerText = "手機格式需為 09xxxxxxxx"; err.style.display = "block"; return; }

    btn.disabled = true;
    btn.innerText = "資料傳輸中...";

    const uniFinal = uniRadio.value === '其他' ? uniOther : uniRadio.value;
    const gradeFinal = gradeRadio.value === '大四+' ? '大四' : gradeRadio.value;

    const body = new URLSearchParams();
    body.append(FORM_IDS.FORM_A_NAME, name);
    body.append(FORM_IDS.FORM_A_UNI, uniFinal);
    body.append(FORM_IDS.FORM_A_DEPT_GRADE, `${dept} / ${gradeFinal}`);
    body.append(FORM_IDS.FORM_A_PHONE, phone);
    body.append(FORM_IDS.FORM_A_GRADE, gradeFinal);

    try {
        await fetch(GOOGLE_FORM_A_URL, { method: 'POST', body: body, mode: 'no-cors' });
        localStorage.setItem('userData', JSON.stringify({ name, uniFinal }));
        showPage('subjectSelectPage');
    } catch (e) {
        err.innerText = "系統繁忙，請稍後再試";
        err.style.display = "block";
    } finally {
        btn.disabled = false;
        btn.innerText = "立即開始測驗，抽 $500 紅包";
    }
});

// 大學選擇連動
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.addEventListener('change', (e) => {
        const otherInput = document.getElementById('uniOtherText');
        otherInput.disabled = (e.target.value !== '其他');
        if (!otherInput.disabled) otherInput.focus();
    });
});

// 測驗邏輯
document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.dataset.subject;
        startQuiz();
    });
});

function startQuiz() {
    currentScore = 0; answeredCount = 0; wrongTopics = [];
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';
    
    // 取得該科目題目 (此處簡化為取前 5 題或過濾)
    const questions = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject || q.subject === "Math").slice(0, 5);
    
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.innerHTML = `
            <div class="question-text">Q${i+1}. ${q.question}</div>
            <div class="options-list">
                ${q.answerOptions.map((opt, oi) => `<div class="option-item" data-qi="${i}" data-oi="${oi}">${opt.text}</div>`).join('')}
            </div>
            <div class="rationale" id="rat-${i}"></div>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleSelect);
    });

    showPage('quizPage');
    if (window.renderMathInElement) renderMathInElement(container, { delimiters: [{left: "$", right: "$", display: false}] });
}

function handleSelect(e) {
    const qIdx = e.target.dataset.qi;
    const oIdx = e.target.dataset.oi;
    const parent = e.target.parentElement;
    if (parent.classList.contains('locked')) return;

    parent.classList.add('locked');
    const questions = ALL_QUIZ_DATA.filter(q => q.subject === currentSubject || q.subject === "Math").slice(0, 5);
    const correct = questions[qIdx].answerOptions[oIdx].isCorrect;
    
    e.target.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) {
        wrongTopics.push(questions[qIdx].topic);
        const correctBtn = parent.querySelector(`.option-item[data-oi="${questions[qIdx].answerOptions.findIndex(o=>o.isCorrect)}"]`);
        correctBtn.classList.add('correct');
    } else {
        currentScore += 20;
    }

    const rat = document.getElementById(`rat-${qIdx}`);
    rat.innerHTML = `<strong>💡 解析：</strong>${questions[qIdx].answerOptions.find(o=>o.isCorrect).rationale}`;
    rat.classList.add('visible');
    if (window.renderMathInElement) renderMathInElement(rat, { delimiters: [{left: "$", right: "$", display: false}] });

    answeredCount++;
    if (answeredCount === 5) {
        setTimeout(showResults, 1000);
    }
}

function showResults() {
    document.getElementById('score').innerText = currentScore;
    const comment = document.getElementById('scoreComment');
    let level = "";
    if (currentScore >= 100) { level = "S 級頂尖"; comment.innerText = "🌟 簡直是天選學霸！清交研所勢在必得！"; }
    else if (currentScore >= 80) { level = "A 級強者"; comment.innerText = "💎 實力非常穩健，再加強細節就能封神。"; }
    else { level = "B 級潛力"; comment.innerText = "💪 基礎不錯，寒假是彎道超車的最佳時機！"; }
    
    document.getElementById('potentialLevelDisplay').innerText = level;
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('quiz-content').classList.add('hidden');
}

// 資源頁與計畫
document.getElementById('goToResourceBtn').addEventListener('click', () => {
    document.getElementById('finalScoreDisplay').innerText = currentScore;
    document.getElementById('finalSubjectName').innerText = document.querySelector(`[data-subject="${currentSubject}"]`).innerText;
    document.getElementById('videoSubjectName').innerText = VIDEO_LINKS[currentSubject].title;
    document.getElementById('lineCtaButton').href = `https://lin.ee/Oj42w8M`;
    
    initPlan();
    showPage('resourcePage');
    
    const vidId = VIDEO_LINKS[currentSubject].youtubeId;
    document.getElementById('youtubePlayer').innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
});

function initPlan() {
    const tag = document.getElementById('weaknessTag');
    tag.innerText = wrongTopics.length > 0 ? wrongTopics.join('、') : "完美無缺";
    
    document.getElementById('plan-week-1').innerHTML = `<ul><li>基礎重啟：針對${wrongTopics[0] || '核心觀念'}進行複習</li><li>筆記整理：製作專屬公式卡</li></ul>`;
    document.getElementById('plan-week-2').innerHTML = `<ul><li>弱點突破：挑戰 50 題${wrongTopics[1] || '進階題型'}</li><li>模擬小測：檢驗學習成效</li></ul>`;
    document.getElementById('plan-week-3').innerHTML = `<ul><li>整合訓練：跨章節考古題演練</li><li>心智圖建構：串聯所有單元</li></ul>`;
    document.getElementById('plan-week-4').innerHTML = `<ul><li>實戰模擬：80分鐘限時完整試卷</li><li>心態調整：準備迎接新學期</li></ul>`;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('userData')) showPage('subjectSelectPage');
});
