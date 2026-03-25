// 應用程式全域變數
let allQuestions = [];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;

let conceptData = {};
let currentCategory = null;

// === 取出 DOM 元素 ===
const screenMainMenu = document.getElementById('main-menu');
const screenQuiz = document.getElementById('quiz-screen');
const screenResult = document.getElementById('result-screen');
const screenConcept = document.getElementById('concept-screen');

const btnQuiz = document.getElementById('btn-quiz');
const btnLearn = document.getElementById('btn-learn');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const btnHome = document.getElementById('btn-home');

const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const explanationBox = document.getElementById('explanation-box');
const explanationHeader = document.getElementById('explanation-header');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const explanationText = document.getElementById('explanation-text');

const finalScoreEl = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Concept Module Elements
const btnConceptBack = document.getElementById('btn-concept-back');
const conceptTitle = document.getElementById('concept-title');
const categoryList = document.getElementById('category-list');
const keywordList = document.getElementById('keyword-list');
const conceptDetail = document.getElementById('concept-detail');

const detailName = document.getElementById('detail-name');
const detailConcept = document.getElementById('detail-concept');
const detailUsecases = document.getElementById('detail-usecases');
const detailRelated = document.getElementById('detail-related');

// === 資料讀取 ===
async function fetchQuestions() {
    try {
        const res = await fetch('questions/question_bank.json');
        if (!res.ok) throw new Error("HTTP error " + res.status);
        allQuestions = await res.json();
    } catch (e) {
        console.error("Failed to load question bank:", e);
        questionText.textContent = "無法載入題庫，請確認 JSON 是否存在！";
    }
}

async function fetchConcepts() {
    try {
        const res = await fetch('questions/concepts.json');
        if (!res.ok) throw new Error("HTTP error " + res.status);
        conceptData = await res.json();
        renderCategories();
    } catch (e) {
        console.error("Failed to load concepts:", e);
        categoryList.innerHTML = "<p class='text-center'>無法載入學習概念資料！</p>";
    }
}

// === 輔助功能 ===
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    setTimeout(() => {
        screen.classList.add('active');
    }, 10);
}

// === 遊戲邏輯 ===
async function startQuiz() {
    if (allQuestions.length === 0) {
        const prevText = btnQuiz.innerHTML;
        btnQuiz.textContent = '載入中...';
        await fetchQuestions();
        btnQuiz.innerHTML = prevText;
    }
    if (allQuestions.length === 0) {
        alert("題庫尚未就緒！");
        return;
    }
    
    const shuffled = shuffle([...allQuestions]);
    quizQuestions = shuffled.slice(0, 10);
    currentIndex = 0;
    score = 0;
    
    showScreen(screenQuiz);
    loadQuestion();
}

function loadQuestion() {
    optionsContainer.innerHTML = '';
    explanationBox.classList.add('hidden');
    
    const currentQ = quizQuestions[currentIndex];
    
    questionCounter.textContent = `第 ${currentIndex + 1} 題 / 共 10 題`;
    scoreCounter.textContent = `得分: ${score * 10}`;
    
    const progressPercent = ((currentIndex) / 10) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    questionText.textContent = currentQ.question;
    
    const mappedOptions = currentQ.options.map((optText, origIdx) => {
        return { text: optText, isCorrect: (origIdx === currentQ.answer) };
    });
    
    shuffle(mappedOptions);
    
    mappedOptions.forEach((optItem) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optItem.text;
        btn.onclick = () => selectOption(btn, optItem, mappedOptions);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedBtn, selectedOption, mappedOptions) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);
    
    const currentQ = quizQuestions[currentIndex];
    const isRight = selectedOption.isCorrect;
    
    if (isRight) {
        selectedBtn.classList.add('correct');
        score++;
        scoreCounter.textContent = `得分: ${score * 10}`;
        explanationHeader.className = 'explanation-header correct';
        resultIcon.textContent = "✅";
        resultTitle.textContent = "答對了！";
    } else {
        selectedBtn.classList.add('wrong');
        allBtns.forEach((btn, idx) => {
            if (mappedOptions[idx].isCorrect) {
                btn.classList.add('correct');
            }
        });
        explanationHeader.className = 'explanation-header wrong';
        resultIcon.textContent = "❌";
        resultTitle.textContent = "答錯囉！";
    }
    
    explanationText.textContent = currentQ.explanation;
    explanationBox.classList.remove('hidden');
    
    const progressPercent = ((currentIndex + 1) / 10) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= quizQuestions.length) {
        showFinalResult();
    } else {
        loadQuestion();
    }
}

function showFinalResult() {
    const finalScore = score * 10;
    progressBar.style.width = '100%';
    finalScoreEl.textContent = finalScore;
    
    if (finalScore >= 90) {
        resultMessage.textContent = "太厲害了，您對 AI 的掌握度極高！🚀";
    } else if (finalScore >= 60) {
        resultMessage.textContent = "還不錯喔！繼續保持學習的動力！💪";
    } else {
        resultMessage.textContent = "沒關係，多詢問題庫助手學習概念能讓您突飛猛進！📖";
    }
    showScreen(screenResult);
}

// === 學習概念邏輯 ===
function showConceptScreen() {
    showScreen(screenConcept);
    if (Object.keys(conceptData).length === 0) {
        fetchConcepts();
    } else {
        renderCategories();
    }
}

function renderCategories() {
    currentCategory = null;
    conceptTitle.innerHTML = "📚 學習領域";
    btnConceptBack.textContent = "⬅ 返回首頁";
    btnConceptBack.onclick = () => showScreen(screenMainMenu);
    
    categoryList.classList.remove('hidden');
    keywordList.classList.add('hidden');
    conceptDetail.classList.add('hidden');
    
    categoryList.innerHTML = '';
    
    for (const [catName, keywords] of Object.entries(conceptData)) {
        const card = document.createElement('div');
        card.className = 'card-btn';
        card.innerHTML = `
            <div class="card-title">${catName}</div>
            <div class="card-subtitle">共 ${keywords.length} 個名詞解釋</div>
        `;
        card.onclick = () => renderKeywords(catName);
        categoryList.appendChild(card);
    }
}

function renderKeywords(catName) {
    currentCategory = catName;
    conceptTitle.innerHTML = `📂 ${catName}`;
    btnConceptBack.textContent = "⬅ 返回分類";
    btnConceptBack.onclick = renderCategories;
    
    categoryList.classList.add('hidden');
    keywordList.classList.remove('hidden');
    conceptDetail.classList.add('hidden');
    
    keywordList.innerHTML = '';
    const keywords = conceptData[catName];
    
    keywords.forEach(kw => {
        const card = document.createElement('div');
        card.className = 'card-btn';
        let snippet = kw.concept.length > 50 ? kw.concept.substring(0, 50) + '...' : kw.concept;
        card.innerHTML = `
            <div class="card-title">${kw.name}</div>
            <div class="card-subtitle">${snippet}</div>
        `;
        card.onclick = () => showDetail(kw);
        keywordList.appendChild(card);
    });
}

function showDetail(kw) {
    conceptTitle.innerHTML = `📖 名詞解析`;
    btnConceptBack.textContent = "⬅ 返回列表";
    btnConceptBack.onclick = () => renderKeywords(currentCategory);
    
    categoryList.classList.add('hidden');
    keywordList.classList.add('hidden');
    conceptDetail.classList.remove('hidden');
    
    detailName.textContent = kw.name;
    detailConcept.textContent = kw.concept;
    
    detailUsecases.innerHTML = '';
    if (kw.use_cases && kw.use_cases.length > 0) {
        kw.use_cases.forEach(uc => {
            const li = document.createElement('li');
            li.textContent = uc;
            detailUsecases.appendChild(li);
        });
    } else {
        detailUsecases.innerHTML = '<li>無特定使用場景描述</li>';
    }
    
    detailRelated.innerHTML = '';
    if (kw.related && kw.related.length > 0) {
        kw.related.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            detailRelated.appendChild(span);
        });
    } else {
        detailRelated.innerHTML = '<span class="tag" style="background:rgba(255,255,255,0.05); border-color:transparent; color:#a1a1aa">無關聯關鍵字</span>';
    }
}

// === 事件監聽 ===
btnQuiz.addEventListener('click', startQuiz);
btnLearn.addEventListener('click', showConceptScreen);
btnNext.addEventListener('click', nextQuestion);
btnRestart.addEventListener('click', startQuiz);
btnHome.addEventListener('click', () => showScreen(screenMainMenu));

window.addEventListener('DOMContentLoaded', () => {
    fetchQuestions(); // 預載測驗題庫
});
