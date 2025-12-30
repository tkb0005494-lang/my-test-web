// === A. 資料庫與設定 ===
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';
const QUIZ_DATA = [
    { subject: "Math", question: "函數 $f(t) = e^{at}$ 的拉氏轉換為何？", options: ["$1/(s-a)$", "$a/s^2$", "$1/s$", "$s/a$"], correct: 0, why: "基本公式 $L\{e^{at}\} = 1/(s-a)$" },
    { subject: "Math", question: "解 $y' + y = 0$ 的通解？", options: ["$Ce^{-x}$", "$Ce^x$", "$x+C$", "$C$"], correct: 0, why: "一階線性 ODE 基礎解" },
    // ... 其他題目請按照此格式補齊 ...
];

const VIDEOS = { Math: "LiW8jvHZ7o4", Science: "dW4cUVU089Q", History: "ZC98Wmrtb7o", Geography: "2ZXmDGBC4c4", English: "QNLL0qfEPmI", Coding: "GhAxVkA1He8" };

let userAnswers = [];
let currentSubject = "";
let score = 0;

// === B. 分頁控制 ===
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// === C. 首頁表單處理 ===
document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uniRadio = document.querySelector('input[name="userUniversity"]:checked');
    const uniVal = uniRadio.value === '其他' ? document.getElementById('uniOtherText').value : uniRadio.value;
    
    const payload = {
        "entry.1711447572": document.getElementById('userName').value,
        "entry.651877505": uniVal,
        "entry.1169658860": document.getElementById('userDepartment').value + " / " + document.getElementById('userGradeSelect').value,
        "entry.1253545059": document.getElementById('userPhone').value
    };

    // 提交到 Google Form
    fetch(GOOGLE_FORM_URL, { method: 'POST', body: new URLSearchParams(payload), mode: 'no-cors' });
    showPage('subjectSelectPage');
});

// 大學 "其他" 切換
document.querySelectorAll('input[name="userUniversity"]').forEach(r => {
    r.addEventListener('change', () => {
        const other = document.getElementById('uniOtherText');
        other.disabled = (r.value !== '其他');
        if(!other.disabled) other.focus();
    });
});

// === D. 測驗邏輯 ===
document.querySelectorAll('.subject-card').forEach(btn => {
    btn.addEventListener('click', () => {
        currentSubject = btn.dataset.subject;
        renderQuiz();
        showPage('quizPage');
    });
});

function renderQuiz() {
    const list = QUIZ_DATA.filter(q => q.subject === currentSubject || q.subject === "Math").slice(0, 5); // 確保有題
    const container = document.getElementById('quiz-content');
    container.innerHTML = "";
    score = 0; userAnswers = [];

    list.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = "card question-card";
        div.innerHTML = `<p>Q${idx+1}. ${q.question}</p>` + 
            q.options.map((opt, i) => `<div class="radio-item opt" data-q="${idx}" data-i="${i}">${opt}</div>`).join('');
        container.appendChild(div);
    });

    document.querySelectorAll('.opt').forEach(opt => {
        opt.addEventListener('click', function() {
            const qIdx = this.dataset.q;
            const oIdx = parseInt(this.dataset.i);
            if (userAnswers[qIdx] !== undefined) return;
            
            userAnswers[qIdx] = oIdx;
            const isCorrect = oIdx === list[qIdx].correct;
            if(isCorrect) { this.style.background = "#06C755"; score += 20; }
            else { this.style.background = "#D32F2F"; }

            if (Object.keys(userAnswers).length === 5) {
                setTimeout(finishQuiz, 1000);
            }
        });
    });
    if(window.renderMathInElement) renderMathInElement(container, {delimiters: [{left: "$", right: "$", display: false}]});
}

// === E. 結束與懸浮窗 ===
function finishQuiz() {
    document.getElementById('score').innerText = score;
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    // 彈出懸浮窗
    const overlay = document.getElementById('notificationOverlay');
    overlay.classList.remove('hidden');
}

// 關閉懸浮窗
document.getElementById('closeNotify').addEventListener('click', () => {
    document.getElementById('notificationOverlay').classList.add('hidden');
});

// 點擊背景關閉
document.getElementById('notificationOverlay').addEventListener('click', function(e) {
    if(e.target === this) this.classList.add('hidden');
});

// === F. 資源頁面按鈕 ===
document.getElementById('goToResourceBtn').addEventListener('click', () => {
    const level = score >= 80 ? "S 級學霸" : (score >= 60 ? "A 級潛力股" : "B 級努力家");
    document.getElementById('potentialLevelDisplay').innerText = level;
    
    // YouTube
    const vid = VIDEOS[currentSubject] || VIDEOS.Math;
    document.getElementById('youtubePlayer').innerHTML = `<iframe width="100%" height="200" src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen></iframe>`;
    
    // 讀書計畫
    document.getElementById('planDetails').innerHTML = `
        <p>1. 觀念建立：針對弱點科目進行影音複習</p>
        <p>2. 題型演練：每天練習 10 題考古題</p>
    `;

    showPage('resourcePage');
});
