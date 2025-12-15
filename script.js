// === B. 參數與變數設定 (已修改為雙表單) ===

// **表單 A: 使用者資訊** (您的第一個表單)
const GOOGLE_FORM_A_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr-83jVYrDX1jp6YvBMmdPH-Rsk99mjXmJjcihfEnPw2CNcg/formResponse';

// **表單 B: 測驗結果** (您新提供的第二個表單)
const GOOGLE_FORM_B_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScrCgzXQ2Rpi4ARsIQ7-KKYzgsADVW6syIJj37Hk0mapCc9Hw/formResponse';

// **Google 表單欄位 ID 映射 (已更新)**
const FORM_IDS = {
    // ------------------------------------------------------------------
    // 表單 A: 用戶資訊 (entry.1711447572, entry.1169658860, etc.)
    FORM_A_NAME: 'entry.1711447572',     // 姓名
    FORM_A_DEPT_GRADE: 'entry.1169658860',// 科系+年級 (整合欄位)
    FORM_A_PHONE: 'entry.1253545059',    // 電話
    FORM_A_UNI: 'entry.651877505',       // 學校
    FORM_A_GRADE: 'entry.247937200',     // 年級
    
    // ------------------------------------------------------------------
    // 表單 B: 測驗結果 (新 ID)
    FORM_B_SCORE: 'entry.1428871778',    // 測驗分數
    FORM_B_TIME: 'entry.1695428454',     // 作答時間
    
    // ------------------------------------------------------------------
    // 原始 HTML 中的欄位 ID (用於前端讀取值)
    HTML_UNI_RADIO: 'entry.1000000002',       // 就讀大學 (Radio Group)
    HTML_UNI_OTHER: 'entry.1000000003', // 其他大學 (Text)
    HTML_DEPT: 'entry.1000000004',      // 系所
    HTML_GRADE_RADIO: 'entry.1000000005',     // 年級 (Radio Group)
    
};


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
let wrongQuestionsData = []; 
let startTime; // 記錄開始時間
let player; 


// === C. 頁面控制 (無修改) ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    if (pageId === 'resourcePage') {
        initYouTube();
        generateStudyPlan(); 
    }
}

// === D. 表單資料提交函數 (通用化) ===

/**
 * 提交表單資料到 Google 表單
 * @param {string} url - 表單提交 URL
 * @param {object} dataToSubmit - 包含要提交數據的物件 (鍵值對應 ID: Value)
 * @returns {Promise<boolean>}
 */
async function submitDataToGoogleForm(url, dataToSubmit) {
    const formError = document.getElementById('formError');
    // 僅在提交用戶資訊時顯示錯誤訊息
    if (url === GOOGLE_FORM_A_URL) formError.style.display = 'none';

    const body = new URLSearchParams();

    // 填充數據
    for (const key in dataToSubmit) {
        body.append(key, dataToSubmit[key]);
    }
    
    try {
        await fetch(url, {
            method: 'POST',
            body: body,
            mode: 'no-cors' 
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

// === E. 表單邏輯 (主要修改：驗證與提交 A 表單) ===
document.getElementById('userInfoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 1. 驗證欄位
    const uniRadio = document.querySelector(`input[name="${FORM_IDS.HTML_UNI_RADIO}"]:checked`);
    const uniOtherText = document.getElementById('uniOtherText').value.trim();
    const userDepartment = document.getElementById('userDepartment').value.trim();
    const gradeRadio = document.querySelector(`input[name="${FORM_IDS.HTML_GRADE_RADIO}"]:checked`);
    const formError = document.getElementById('formError');

    // 必填欄位檢查
    if (!uniRadio || (uniRadio.value === '其他' && !uniOtherText) || !userDepartment || !gradeRadio) {
        formError.textContent = "請完整填寫所有必填欄位。";
        formError.style.display = 'block';
        return;
    }

    const uniValue = uniRadio.value === '其他' ? uniOtherText : uniRadio.value;
    const userName = document.getElementById('userName').value.trim();
    const userPhone = document.getElementById('userPhone').value.trim();
    const userGrade = gradeRadio.value;
    
    // 2. 準備提交數據 (表單 A: 用戶資訊)
    const dataToSubmit = {
        [FORM_IDS.FORM_A_NAME]: userName,
        [FORM_IDS.FORM_A_UNI]: uniValue,
        [FORM_IDS.FORM_A_DEPT_GRADE]: `${userDepartment} / ${userGrade}`, // 將系所與年級合併
        [FORM_IDS.FORM_A_PHONE]: userPhone,
        [FORM_IDS.FORM_A_GRADE]: userGrade,
        // 刪除分數和時間欄位，因為它們不屬於表單 A
    };

    // 3. 提交資料到 Google Form A
    const isSubmitted = await submitDataToGoogleForm(GOOGLE_FORM_A_URL, dataToSubmit);

    if (isSubmitted) {
        // 4. 提交成功後，儲存使用者資訊和起始時間
        localStorage.setItem('userData', JSON.stringify({
            name: userName,
            uni: uniValue,
            dept: userDepartment,
            grade: userGrade,
            phone: userPhone
        }));
        startTime = Date.now(); // 記錄開始作答時間

        showPage('subjectSelectPage');
    }
});

// ... (其他 UI 邏輯，如 '其他' 大學的顯示/隱藏，無修改) ...

document.querySelectorAll('input[name="entry.1000000002"]').forEach(r => {
    r.addEventListener('change', function() {
        const textInput = document.getElementById('uniOtherText');
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

// === F. 測驗邏輯 (無修改) ===
// (startQuiz, handleAnswerClick, showQuizResult 等邏輯不變)

document.querySelectorAll('.subject-button').forEach(btn => {
    btn.addEventListener('click', function() {
        currentSubject = this.dataset.subject;
        startQuiz(currentSubject);
    });
});

function startQuiz(subject) {
    // ... (保持原 startQuiz 函數邏輯) ...
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
    document.getElementById('quiz-content').classList.add('hidden');
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');
    
    const scoreSpan = document.getElementById('score');
    scoreSpan.innerText = currentScore;
    
    let comment = "";
    if (currentScore === 100) comment = "太強了！您的觀念非常清晰，絕對是頂大的料！";
    else if (currentScore >= 60) comment = "不錯喔！掌握了大部分觀念，針對弱點補強就能更上一層樓！";
    else comment = "別灰心！基礎觀念還需要加強，這份測驗剛好幫您找出盲點！";
    
    document.getElementById('scoreComment').innerText = comment;

    // **新增：完成測驗後，發送分數與時間給表單 B**
    sendScoreAndTime();
}

/**
 * 計算作答時間並提交分數與時間到 Google Form B
 */
function sendScoreAndTime() {
    if (!startTime) return; 
    
    const endTime = Date.now();
    const durationMs = endTime - startTime;
    
    // 格式化時間 (例如: 0小時5分12秒)
    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const timeString = `${hours}小時${minutes}分${seconds}秒`;
    
    // 準備第二次提交的數據：只包含分數和作答時間 (表單 B)
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

// ... (G, H, I, J 讀書計畫和 YouTube 邏輯，無修改) ...

// 點擊前往資源頁
document.getElementById('goToResourceBtn').addEventListener('click', function() {
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

// === 讀書計畫生成引擎 (無修改) ===
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
            week2.innerHTML = `<ul>${w2Topics.map(t => `<li>🎯 <strong>重點補強：：</strong>針對 ${t} 進行題型演練</li>`).join('')}<li>📝 <strong>自我檢測：</strong>完成相關單元練習題 20 題</li></ul>`;
        } else {
             week2.innerHTML = `<ul><li>💪 <strong>延伸練習：</strong>針對第一週弱點進行進階題型挑戰</li><li>🔄 <strong>混合題型：</strong>開始練習跨章節綜合題</li></ul>`;
        }

    } else {
        weaknessTag.innerText = "全數答對！菁英強化版";
        week1.innerHTML = `<ul><li>🚀 <strong>超前部署：</strong>直接挑戰研究所考古題 (108-110年)</li><li>📚 <strong>廣度閱讀：</strong>閱讀相關原文書章節補充觀念</li></ul>`;
        week2.innerHTML = `<ul><li>⚡ <strong>速度訓練：：</strong>計時完成一份完整模擬試卷</li><li>🔍 <strong>難題鑽研：</strong>尋找該科目最困難的特殊題型解析</li></ul>`;
    }

    const button = document.querySelector(`.subject-button[data-subject="${currentSubject}"]`);
    const sName = button ? button.innerText.replace(/[^\u4e00-\u9fa5]/g, '') : "該科目";

    week3.innerHTML = `
        <ul>
            <li>🧩 <strong>${sName} 跨章節整合：</strong>將各單元觀念串聯，繪製心智圖。</li>
            <li>✍️ <strong>五年考古題演練 (Part 1)：</strong>完成近五年台聯大/台大試題。</li>
        </ul>`;
    
    week4.innerHTML = `
        <ul>
            <li>🏁 <strong>考前實戰模擬：：</strong>完全比照考試時間 (80-100分鐘) 作答。</li>
            <li>❤️ <strong>調整身心狀態：</strong>複習錯誤筆記，不再鑽牛角尖，保持手感。</li>
        </ul>`;
}

// === YouTube API (無修改) ===
function initYouTube() {
    const container = document.getElementById('youtubePlayer');
    if (container.querySelector('iframe')) return;
    
    const vidId = VIDEO_LINKS[currentSubject].youtubeId;
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vidId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

// 初始化：載入時顯示使用者資訊頁
document.addEventListener('DOMContentLoaded', () => {
    showPage('userInfoPage');
});
