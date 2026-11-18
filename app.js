const STORAGE_KEY = "dr-anas-mcqs-preview";

const topics = [
  {
    id: "pad",
    name: "Peripheral Arterial Disease",
    specialty: "Vascular Surgery",
    count: 18,
    progress: 42,
    color: "teal",
  },
  {
    id: "aaa",
    name: "Abdominal Aortic Aneurysm",
    specialty: "Vascular Surgery",
    count: 14,
    progress: 26,
    color: "amber",
  },
  {
    id: "chest-trauma",
    name: "Chest Trauma",
    specialty: "Thoracic Surgery",
    count: 12,
    progress: 12,
    color: "coral",
  },
  {
    id: "valves",
    name: "Valve Surgery",
    specialty: "Cardiac Surgery",
    count: 16,
    progress: 0,
    color: "teal",
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer",
    specialty: "Thoracic Surgery",
    count: 15,
    progress: 0,
    color: "amber",
  },
  {
    id: "coronary",
    name: "Coronary Revascularization",
    specialty: "Cardiac Surgery",
    count: 17,
    progress: 0,
    color: "coral",
  },
];

const additionalCurriculumTopics = [
  ["carotid-disease", "Carotid Occlusive Disease", "Vascular Surgery"],
  ["acute-limb-ischemia", "Acute Limb Ischaemia", "Vascular Surgery"],
  ["chronic-venous-disease", "Chronic Venous Disease", "Vascular Surgery"],
  ["deep-vein-thrombosis", "Deep Vein Thrombosis", "Vascular Surgery"],
  ["pulmonary-embolism", "Pulmonary Embolism", "Vascular Surgery"],
  ["aortic-dissection", "Aortic Dissection", "Vascular Surgery"],
  ["thoracic-outlet", "Thoracic Outlet Syndrome", "Vascular Surgery"],
  ["renal-artery", "Renal Artery Disease", "Vascular Surgery"],
  ["mesenteric-ischemia", "Mesenteric Ischaemia", "Vascular Surgery"],
  ["dialysis-access", "Dialysis Access", "Vascular Surgery"],
  ["vascular-trauma", "Vascular Trauma", "Vascular Surgery"],
  ["amputations", "Amputation Principles", "Vascular Surgery"],
  ["carotid-intervention", "Carotid Intervention", "Vascular Surgery"],
  ["endovascular", "Endovascular Techniques", "Vascular Surgery"],
  ["vascular-imaging", "Vascular Imaging", "Vascular Surgery"],
  ["wound-care", "Ischaemic Wound Care", "Vascular Surgery"],
  ["vascular-lab", "Vascular Laboratory", "Vascular Surgery"],
  ["varicose-veins", "Varicose Veins", "Vascular Surgery"],
  ["venous-ulcer", "Venous Ulcer Care", "Vascular Surgery"],
  ["lymphatic", "Lymphatic Surgery", "Vascular Surgery"],
  ["airway", "Airway and Tracheal Surgery", "Thoracic Surgery"],
  ["pleural-disease", "Pleural Disease", "Thoracic Surgery"],
  ["empyema", "Empyema and Pleural Infection", "Thoracic Surgery"],
  ["pneumothorax", "Pneumothorax", "Thoracic Surgery"],
  ["mediastinal", "Mediastinal Disease", "Thoracic Surgery"],
  ["esophageal", "Oesophageal Surgery", "Thoracic Surgery"],
  ["diaphragm", "Diaphragmatic Disorders", "Thoracic Surgery"],
  ["chest-wall", "Chest Wall Tumours", "Thoracic Surgery"],
  ["thoracic-infection", "Thoracic Infection", "Thoracic Surgery"],
  ["lung-resection", "Lung Resection", "Thoracic Surgery"],
  ["pulmonary-nodules", "Pulmonary Nodules", "Thoracic Surgery"],
  ["interstitial-lung", "Interstitial Lung Disease", "Thoracic Surgery"],
  ["sleep-surgery", "Surgical Sleep Medicine", "Thoracic Surgery"],
  ["thoracic-anesthesia", "Thoracic Anaesthesia", "Thoracic Surgery"],
  ["thoracoscopy", "Thoracoscopy", "Thoracic Surgery"],
  ["chylothorax", "Chylothorax", "Thoracic Surgery"],
  ["tracheostomy", "Tracheostomy Care", "Thoracic Surgery"],
  ["thoracic-transplant", "Lung Transplantation", "Thoracic Surgery"],
  ["thoracic-oncology", "Thoracic Oncology", "Thoracic Surgery"],
  ["congenital-thoracic", "Congenital Thoracic Conditions", "Thoracic Surgery"],
  ["cardiac-anatomy", "Cardiac Anatomy", "Cardiac Surgery"],
  ["cardiac-bypass", "Cardiopulmonary Bypass", "Cardiac Surgery"],
  ["aortic-valve", "Aortic Valve Surgery", "Cardiac Surgery"],
  ["mitral-valve", "Mitral Valve Surgery", "Cardiac Surgery"],
  ["tricuspid-valve", "Tricuspid Valve Surgery", "Cardiac Surgery"],
  ["endocarditis", "Infective Endocarditis", "Cardiac Surgery"],
  ["heart-failure", "Heart Failure Surgery", "Cardiac Surgery"],
  ["mechanical-support", "Mechanical Circulatory Support", "Cardiac Surgery"],
  ["aortic-root", "Aortic Root Surgery", "Cardiac Surgery"],
  ["thoracic-aorta", "Thoracic Aortic Surgery", "Cardiac Surgery"],
  ["arrhythmia-surgery", "Arrhythmia Surgery", "Cardiac Surgery"],
  ["congenital-heart", "Adult Congenital Heart Disease", "Cardiac Surgery"],
  ["pediatric-cardiac", "Paediatric Cardiac Surgery", "Cardiac Surgery"],
  ["heart-transplant", "Heart Transplantation", "Cardiac Surgery"],
  ["pericardial", "Pericardial Disease", "Cardiac Surgery"],
  ["cardiac-trauma", "Cardiac Trauma", "Cardiac Surgery"],
  ["minimally-invasive", "Minimally Invasive Cardiac Surgery", "Cardiac Surgery"],
  ["cardiac-imaging", "Cardiac Imaging", "Cardiac Surgery"],
  ["postoperative-care", "Postoperative Cardiac Care", "Cardiac Surgery"],
  ["cardiac-recovery", "Cardiac Rehabilitation", "Cardiac Surgery"],
];

const topicColorBySpecialty = {
  "Vascular Surgery": "teal",
  "Thoracic Surgery": "amber",
  "Cardiac Surgery": "coral",
};

additionalCurriculumTopics.forEach(([id, name, specialty], index) => {
  topics.push({
    id,
    name,
    specialty,
    count: 10 + (index % 9),
    progress: 0,
    color: topicColorBySpecialty[specialty],
  });
});

const questions = [
  {
    id: "pad-01",
    topicId: "pad",
    prompt: "Which symptom is most characteristic of intermittent claudication?",
    options: [
      "Calf pain brought on by walking and relieved by rest",
      "Pain that is worse after eating",
      "Sudden chest pain with a productive cough",
      "Bilateral ankle swelling that improves overnight",
    ],
    answer: 0,
    explanation:
      "Intermittent claudication is reproducible muscle discomfort caused by exertion and relieved by rest. It reflects flow limitation that becomes clinically significant when demand rises.",
  },
  {
    id: "pad-02",
    topicId: "pad",
    prompt: "Which bedside measurement is most useful for initially assessing lower-limb arterial perfusion?",
    options: [
      "Ankle–brachial pressure index",
      "Peak expiratory flow rate",
      "Central venous pressure",
      "Serum amylase level",
    ],
    answer: 0,
    explanation:
      "The ankle–brachial pressure index compares ankle and arm systolic pressures and gives a quick, non-invasive estimate of lower-limb arterial perfusion.",
  },
  {
    id: "aaa-01",
    topicId: "aaa",
    prompt: "What is the usual first-line imaging test for a stable patient with suspected abdominal aortic aneurysm?",
    options: [
      "Abdominal ultrasound",
      "Non-contrast head CT",
      "Barium swallow",
      "Plain radiograph of the knee",
    ],
    answer: 0,
    explanation:
      "Ultrasound is fast, non-invasive, and accurate for detecting and measuring an abdominal aortic aneurysm in a stable patient.",
  },
  {
    id: "chest-trauma-01",
    topicId: "chest-trauma",
    prompt: "Which immediate finding most strongly suggests tension pneumothorax?",
    options: [
      "Severe respiratory distress with hypotension and absent breath sounds on one side",
      "Mild pleuritic pain with normal vital signs",
      "Bilateral wheeze that improves after coughing",
      "Isolated tenderness over the clavicle",
    ],
    answer: 0,
    explanation:
      "Tension physiology causes progressive respiratory compromise and obstructive shock. The combination requires immediate decompression while definitive drainage is arranged.",
  },
  {
    id: "valves-01",
    topicId: "valves",
    prompt: "Which valve lesion is classically associated with a wide pulse pressure?",
    options: [
      "Aortic regurgitation",
      "Pulmonary stenosis",
      "Tricuspid stenosis",
      "Mitral stenosis",
    ],
    answer: 0,
    explanation:
      "Aortic regurgitation increases stroke volume and lowers diastolic aortic pressure, producing a widened pulse pressure.",
  },
  {
    id: "lung-cancer-01",
    topicId: "lung-cancer",
    prompt: "Which investigation most directly provides tissue confirmation of a suspected lung malignancy?",
    options: [
      "Histologic examination of a biopsy specimen",
      "Pulse oximetry alone",
      "A routine urine dipstick",
      "An isolated ECG",
    ],
    answer: 0,
    explanation:
      "Imaging can identify and stage a lesion, but tissue obtained by biopsy is needed to confirm malignancy and characterize its histology.",
  },
  {
    id: "coronary-01",
    topicId: "coronary",
    prompt: "What is the main goal of coronary revascularization?",
    options: [
      "Restore blood flow to viable ischemic myocardium",
      "Increase pulmonary vascular resistance",
      "Reduce venous return to the heart",
      "Prevent all future arrhythmias",
    ],
    answer: 0,
    explanation:
      "Revascularization aims to improve perfusion to viable myocardium, relieve ischemic symptoms, and support cardiac function when indicated.",
  },
];

const defaultState = {
  route: "home",
  studyTopicId: "pad",
  questionIndex: 0,
  selectedOption: null,
  submitted: false,
  savedQuestions: [],
  answered: 24,
  correct: 19,
  streak: 5,
  exam: {
    status: "setup",
    specialty: "All",
    size: 5,
    random: true,
    questionIds: [],
    currentIndex: 0,
    answers: {},
    marked: [],
    reviewing: false,
    remainingSeconds: 300,
    lastResult: null,
  },
};

let state = loadState();
let toastTimer;
let examTimerId = null;
let topicSpecialtyFilter = "All";

const pageContainer = document.querySelector("#pageContainer");
const topbarPage = document.querySelector("#topbarPage");
const toast = document.querySelector("#toast");
const appShell = document.querySelector("#appShell");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState,
      ...stored,
      exam: { ...defaultState.exam, ...(stored?.exam ?? {}) },
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function navigate(route, options = {}) {
  state.route = route;
  if (options.topicId) {
    state.studyTopicId = options.topicId;
    state.questionIndex = 0;
    state.selectedOption = null;
    state.submitted = false;
  }
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getTopic(topicId) {
  return topics.find((topic) => topic.id === topicId) ?? topics[0];
}

function getStudyQuestions() {
  const matchingQuestions = questions.filter((question) => question.topicId === state.studyTopicId);
  if (matchingQuestions.length > 0) return matchingQuestions;

  const topic = getTopic(state.studyTopicId);
  return [
    {
      id: `${topic.id}-preview`,
      topicId: topic.id,
      prompt: `${topic.name} question set is ready for the next content import. What is the best next step?`,
      options: [
        "Continue with the reviewed question set when it is published",
        "Skip the topic permanently",
        "Remove the topic from the curriculum",
        "Disable progress tracking",
      ],
      answer: 0,
      explanation:
        "This topic is already part of the curriculum map. Its reviewed question set will arrive through a future content release.",
      preview: true,
    },
  ];
}

function render() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === state.route);
  });
  topbarPage.textContent = pageTitle(state.route);

  const views = {
    home: renderHome,
    topics: renderTopics,
    books: renderBooks,
    study: renderStudy,
    exam: renderExam,
    progress: renderProgress,
    settings: renderSettings,
  };
  pageContainer.innerHTML = (views[state.route] ?? renderHome)();
  bindViewEvents();
  syncExamTimer();
}

function pageTitle(route) {
  return {
    home: "Home",
    topics: "Topics",
    books: "Books",
    study: "Study",
    exam: "Exam",
    progress: "Progress",
    settings: "Settings",
  }[route] ?? "Home";
}

function formatToday() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());
}

function renderHome() {
  const accuracy = Math.round((state.correct / state.answered) * 100);
  const focusTopics = topics.slice(0, 3);

  return `
    <section class="page-header">
      <div>
        <p class="eyebrow">${formatToday()}</p>
        <h1 class="page-title">Keep your clinical edge sharp.</h1>
        <p class="page-intro">A calm, focused place to build recall across vascular, thoracic, and cardiac surgery.</p>
      </div>
      <button class="header-action" data-action="start-study" type="button"><span>＋</span> Start study session</button>
    </section>

    <section class="dashboard-grid" aria-label="Study overview">
      <article class="hero-card">
        <div class="hero-content">
          <p class="hero-kicker">Continue where you left off</p>
          <h2 class="hero-title">Peripheral Arterial Disease</h2>
          <p class="hero-copy">You are midway through the core review set. A short session keeps the details active.</p>
          <div class="hero-progress">
            <div class="progress-track" aria-label="42 percent complete"><div class="progress-fill" style="width: 42%"></div></div>
            <span class="progress-number">42% complete</span>
          </div>
          <button class="hero-action" data-action="continue-study" type="button">Continue study <span aria-hidden="true">→</span></button>
        </div>
      </article>

      <article class="streak-card">
        <div>
          <div class="card-topline">
            <div class="streak-icon" aria-hidden="true">✦</div>
            <span class="section-note">This week</span>
          </div>
          <p class="card-label">Current streak</p>
          <p class="streak-number">${state.streak} days</p>
          <p class="streak-detail">A few questions each day is enough to keep your momentum.</p>
        </div>
        <div class="streak-days" aria-label="Study streak for the week">
          <span class="day-pill complete">M</span><span class="day-pill complete">T</span><span class="day-pill complete">W</span><span class="day-pill complete">T</span><span class="day-pill complete">F</span><span class="day-pill">S</span><span class="day-pill">S</span>
        </div>
      </article>
    </section>

    <section class="stats-row" aria-label="Your study statistics">
      <article class="stat-card"><p class="stat-label">Questions answered</p><p class="stat-value">${state.answered}</p><span class="stat-change">+6 this week</span></article>
      <article class="stat-card"><p class="stat-label">Average accuracy</p><p class="stat-value">${accuracy}%</p><span class="stat-change">+4% this week</span></article>
      <article class="stat-card"><p class="stat-label">Saved for review</p><p class="stat-value">${state.savedQuestions.length || 3}</p><span class="stat-change">Ready when you are</span></article>
    </section>

    <section class="section-block">
      <div class="section-heading"><div><h2 class="section-title">Focus topics</h2><p class="section-note">Small sets for your next session</p></div><button class="text-action" data-route="topics" type="button">View all topics →</button></div>
      <div class="topic-grid">${focusTopics.map(topicCard).join("")}</div>
    </section>
  `;
}

function topicCard(topic) {
  return `
    <article class="topic-card" data-topic-id="${topic.id}" tabindex="0" role="button" aria-label="Study ${escapeHtml(topic.name)}">
      <div class="topic-card-top"><span class="topic-color ${topic.color}"></span><p class="topic-label">${escapeHtml(topic.specialty)}</p><span aria-hidden="true">↗</span></div>
      <h3 class="topic-card-title">${escapeHtml(topic.name)}</h3>
      <div class="topic-card-footer"><span class="topic-question-count">${topic.count} questions</span><div class="topic-progress"><div class="mini-progress"><span style="width: ${topic.progress}%"></span></div><span class="topic-percent">${topic.progress}%</span></div></div>
    </article>
  `;
}

function renderTopics() {
  const filteredTopics = topicSpecialtyFilter === "All"
    ? topics
    : topics.filter((topic) => topic.specialty === topicSpecialtyFilter);

  return `
    <section class="page-header">
      <div><p class="eyebrow">Browse the curriculum</p><h1 class="page-title">Choose a topic.</h1><p class="page-intro">The curriculum map now includes ${topics.length} planned topics across three surgical specialties.</p></div>
      <div class="topic-catalog-summary"><span class="topic-catalog-number">${filteredTopics.length}</span><span>topics shown</span></div>
    </section>
    <section class="topic-filter-bar" aria-label="Filter topics">
      ${["All", "Vascular Surgery", "Thoracic Surgery", "Cardiac Surgery"].map((specialty) => `<button class="filter-chip ${topicSpecialtyFilter === specialty ? "active" : ""}" data-topic-filter="${specialty}" type="button">${specialty === "All" ? "All specialties" : escapeHtml(specialty)}</button>`).join("")}
    </section>
    <section class="topic-list" aria-label="Available topics">${filteredTopics.map(topicCard).join("")}</section>
  `;
}

function renderBooks() {
  return `
    <section class="page-header"><div><p class="eyebrow">Reference library</p><h1 class="page-title">Books that anchor the questions.</h1><p class="page-intro">The library is ready for the book-processing pipeline. This preview includes one curated source.</p></div><button class="header-action" data-action="show-coming-soon" type="button"><span>＋</span> Add a book</button></section>
    <section class="book-list">
      <article class="book-card"><div class="book-cover">SV</div><div class="book-info"><p class="book-meta">Core reference · 3rd edition</p><h2 class="book-title">Surgery Vascular Essentials</h2><p class="book-meta">18 linked questions · Updated today</p></div><span class="book-status">Synced</span><button class="secondary-action" data-action="show-coming-soon" type="button">Open book</button></article>
      <article class="placeholder-card"><div><div class="placeholder-icon">▤</div><h2 class="placeholder-title">Your next reference can live here.</h2><p class="placeholder-copy">PDF upload, extraction, review, and versioning are planned for the next build.</p></div></article>
    </section>
  `;
}

function renderStudy() {
  const studyQuestions = getStudyQuestions();
  const question = studyQuestions[state.questionIndex % studyQuestions.length];
  const selected = state.selectedOption;
  const isSubmitted = state.submitted;
  const topic = getTopic(question.topicId);
  const progress = ((state.questionIndex + (isSubmitted ? 1 : 0)) / studyQuestions.length) * 100;
  const isSaved = state.savedQuestions.includes(question.id);

  return `
    <section class="study-layout">
      <div class="study-topline"><button class="back-button" data-route="home" type="button">← Back to home</button><span class="study-count">Question ${state.questionIndex + 1} of ${studyQuestions.length}</span></div>
      <div class="study-progress-line" aria-label="Study progress"><span style="width: ${Math.min(progress, 100)}%"></span></div>
      <article class="question-card">
        <div class="question-heading"><div><p class="question-topic">${escapeHtml(topic.specialty)} · ${escapeHtml(topic.name)}</p><p class="question-meta">Single best answer</p></div><button class="bookmark-button ${isSaved ? "saved" : ""}" data-action="toggle-save" aria-label="${isSaved ? "Remove bookmark" : "Save question"}" type="button">${isSaved ? "★" : "☆"}</button></div>
        <h1 class="question-title">${escapeHtml(question.prompt)}</h1>
        <div class="options-list" role="radiogroup" aria-label="Answer options">${question.options.map((option, index) => optionButton(option, index, selected, isSubmitted, question.answer)).join("")}</div>
        <div class="explanation ${isSubmitted ? "visible" : ""}"><p class="explanation-title">${selected === question.answer ? "Correct answer" : "Review the concept"}</p><p class="explanation-copy">${escapeHtml(question.explanation)}</p></div>
        <div class="study-footer"><span class="study-footer-note">Your answer is saved locally on this device.</span>${isSubmitted ? `<button class="primary-action" data-action="next-question" type="button">Next question <span aria-hidden="true">→</span></button>` : `<button class="primary-action" data-action="submit-answer" type="button" ${selected === null ? "disabled" : ""}>Check answer</button>`}</div>
      </article>
    </section>
  `;
}

function optionButton(option, index, selected, isSubmitted, answer) {
  const isCorrect = isSubmitted && index === answer;
  const isIncorrect = isSubmitted && selected === index && index !== answer;
  const stateClass = isCorrect ? "correct" : isIncorrect ? "incorrect" : selected === index ? "selected" : "";
  return `<button class="option-button ${stateClass}" data-option="${index}" type="button" ${isSubmitted ? "disabled" : ""}><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`;
}

function getExamQuestionPool(specialty = state.exam.specialty) {
  if (specialty === "All") return questions;
  return questions.filter((question) => getTopic(question.topicId).specialty === specialty);
}

function formatExamTime(seconds) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
  const remainder = (safeSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function examQuestionById(id) {
  return questions.find((question) => question.id === id);
}

function renderExamSetup() {
  if (state.exam.status === "running") return renderRunningExam();
  if (state.exam.status === "results") return renderExamResults();

  const poolSize = getExamQuestionPool(state.exam.specialty).length;
  const lastResult = state.exam.lastResult;
  const examSizes = [...new Set([Math.min(5, poolSize), poolSize])].filter((size) => size > 0);

  return `
    <section class="page-header"><div><p class="eyebrow">Timed practice</p><h1 class="page-title">Build an exam from the bank.</h1><p class="page-intro">Choose a specialty, set a short question set, and use the review board to practice under light exam pressure.</p></div><div class="exam-bank-pill"><span class="status-dot"></span>${questions.length} reviewed sample questions</div></section>
    <section class="exam-setup-grid">
      <article class="exam-setup-card exam-setup-main">
        <div class="exam-card-heading"><div><p class="card-label">Exam setup</p><h2 class="section-title">Set your conditions</h2></div><div class="exam-card-icon">◷</div></div>
        <label class="field-label" for="examSpecialty">Specialty</label>
        <select class="select-field" id="examSpecialty">
          ${["All", "Vascular Surgery", "Thoracic Surgery", "Cardiac Surgery"].map((specialty) => `<option value="${specialty}" ${state.exam.specialty === specialty ? "selected" : ""}>${specialty === "All" ? "All specialties" : specialty}</option>`).join("")}
        </select>
        <div class="exam-control-row"><div><p class="field-label">Question count</p><p class="helper-text">Up to ${poolSize} sample questions are available for this filter.</p></div><select class="select-field compact" id="examSize">${examSizes.map((size) => `<option value="${size}" ${state.exam.size === size ? "selected" : ""}>${size} questions</option>`).join("")}</select></div>
        <label class="toggle-row" for="examRandom"><span><strong>Random order</strong><small>Mix the question sequence for each attempt.</small></span><input id="examRandom" type="checkbox" ${state.exam.random ? "checked" : ""}><span class="toggle-switch" aria-hidden="true"></span></label>
        <button class="primary-action exam-start-button" data-action="start-exam" type="button">Start exam <span aria-hidden="true">→</span></button>
      </article>
      <article class="exam-setup-card exam-expect-card"><div class="exam-card-icon soft">✦</div><p class="card-label">What to expect</p><h2 class="section-title">A focused five-minute round.</h2><ul class="exam-expect-list"><li><span>01</span><p>Answer in any order.</p></li><li><span>02</span><p>Mark uncertain questions for review.</p></li><li><span>03</span><p>See your score and specialty breakdown.</p></li></ul></article>
    </section>
    ${lastResult ? `<section class="section-block"><div class="section-heading"><div><h2 class="section-title">Last attempt</h2><p class="section-note">${escapeHtml(lastResult.specialty === "All" ? "All specialties" : lastResult.specialty)}</p></div><span class="result-label">${lastResult.score}/${lastResult.total} correct</span></div><div class="last-result-card"><div><p class="result-score-small">${lastResult.accuracy}%</p><p class="book-meta">Accuracy · ${escapeHtml(lastResult.completedAt)}</p></div><button class="secondary-action" data-action="review-last-exam" type="button">Review attempt</button></div></section>` : ""}
  `;
}

function renderRunningExam() {
  const examQuestionIds = state.exam.questionIds;
  if (!examQuestionIds.length) {
    state.exam.status = "setup";
    return renderExamSetup();
  }
  const currentId = examQuestionIds[state.exam.currentIndex];
  const question = examQuestionById(currentId) ?? questions[0];
  const selected = state.exam.answers[question.id];
  const isMarked = state.exam.marked.includes(question.id);
  const answeredCount = Object.keys(state.exam.answers).length;
  const timerWarning = state.exam.remainingSeconds <= 60 ? "timer-warning" : "";

  return `
    <section class="exam-shell">
      <div class="exam-running-header"><div><p class="eyebrow">${escapeHtml(state.exam.specialty === "All" ? "All specialties" : state.exam.specialty)}</p><h1 class="page-title">${state.exam.reviewing ? "Reviewing your attempt" : "Exam in progress"}</h1></div><div class="exam-running-actions">${state.exam.reviewing ? `<button class="secondary-action" data-action="back-to-results" type="button">Back to results</button>` : `<div class="exam-timer ${timerWarning}" id="examTimer" aria-label="Time remaining">◷ ${formatExamTime(state.exam.remainingSeconds)}</div><button class="secondary-action" data-action="submit-exam" type="button">Submit exam</button>`}</div></div>
      <div class="exam-progress-track"><span style="width: ${((state.exam.currentIndex + 1) / examQuestionIds.length) * 100}%"></span></div>
      <div class="exam-running-grid">
        <article class="question-card exam-question-card">
          <div class="question-heading"><div><p class="question-topic">Question ${state.exam.currentIndex + 1} of ${examQuestionIds.length}</p><p class="question-meta">${escapeHtml(getTopic(question.topicId).name)}</p></div><button class="bookmark-button ${isMarked ? "saved" : ""}" data-action="toggle-exam-mark" aria-label="${isMarked ? "Remove review mark" : "Mark for review"}" type="button">${isMarked ? "★" : "☆"}</button></div>
          <h2 class="question-title">${escapeHtml(question.prompt)}</h2>
          <div class="options-list" role="radiogroup" aria-label="Exam answer options">${question.options.map((option, index) => examOptionButton(option, index, selected)).join("")}</div>
          <div class="study-footer"><span class="study-footer-note">${selected === undefined ? "Choose one answer to continue." : "Answer saved for this attempt."}</span><div class="exam-footer-actions"><button class="secondary-action" data-action="previous-exam-question" type="button" ${state.exam.currentIndex === 0 ? "disabled" : ""}>← Previous</button><button class="primary-action" data-action="next-exam-question" type="button">${state.exam.currentIndex === examQuestionIds.length - 1 ? "Review answers" : "Next question →"}</button></div></div>
        </article>
        <aside class="exam-question-board"><div class="exam-board-heading"><div><p class="card-label">Question board</p><p class="helper-text">${answeredCount} of ${examQuestionIds.length} answered</p></div><span class="board-mark-key">★ marked</span></div><div class="question-jump-grid">${examQuestionIds.map((id, index) => examJumpButton(id, index)).join("")}</div><div class="exam-board-note"><span class="status-dot"></span> You can submit at any time.</div></aside>
      </div>
    </section>
  `;
}

function examOptionButton(option, index, selected) {
  const isSelected = selected === index;
  return `<button class="option-button ${isSelected ? "selected" : ""}" data-exam-option="${index}" type="button"><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`;
}

function examJumpButton(id, index) {
  const answered = Object.prototype.hasOwnProperty.call(state.exam.answers, id);
  const marked = state.exam.marked.includes(id);
  return `<button class="question-jump ${answered ? "answered" : ""} ${marked ? "marked" : ""} ${state.exam.currentIndex === index ? "current" : ""}" data-exam-index="${index}" type="button" aria-label="Go to question ${index + 1}">${index + 1}${marked ? "★" : ""}</button>`;
}

function renderExamResults() {
  const result = state.exam.lastResult ?? { score: 0, total: 0, accuracy: 0, specialty: "All", completedAt: "Just now", breakdown: [] };
  const missed = result.total - result.score;

  return `
    <section class="page-header"><div><p class="eyebrow">Attempt complete</p><h1 class="page-title">Your exam snapshot.</h1><p class="page-intro">Use the result to decide which topic deserves your next focused study session.</p></div><button class="header-action" data-action="new-exam" type="button">New exam <span aria-hidden="true">→</span></button></section>
    <section class="exam-result-grid"><article class="exam-result-card"><div class="result-ring" style="--result-angle: ${result.accuracy * 3.6}deg"><div><strong>${result.accuracy}%</strong><span>accuracy</span></div></div><div class="result-summary"><p class="card-label">${escapeHtml(result.specialty === "All" ? "All specialties" : result.specialty)}</p><h2 class="section-title">${result.score} of ${result.total} correct</h2><p class="helper-text">${missed === 0 ? "Clean round. Keep the momentum." : `${missed} question${missed === 1 ? "" : "s"} to revisit in Study.`}</p><p class="result-meta">Completed ${escapeHtml(result.completedAt)}</p></div></article><article class="exam-breakdown-card"><div class="section-heading"><div><h2 class="section-title">Specialty breakdown</h2><p class="section-note">Where the round landed</p></div></div><div class="breakdown-list">${result.breakdown.map((row) => `<div class="breakdown-row"><div><strong>${escapeHtml(row.specialty)}</strong><span>${row.total} question${row.total === 1 ? "" : "s"}</span></div><div class="breakdown-bar"><span style="width: ${row.total ? (row.correct / row.total) * 100 : 0}%"></span></div><b>${row.correct}/${row.total}</b></div>`).join("")}</div></article></section>
    <section class="section-block"><div class="section-heading"><div><h2 class="section-title">Next move</h2><p class="section-note">Keep the learning loop short</p></div></div><div class="result-actions"><button class="primary-action" data-route="study" type="button">Study a topic <span aria-hidden="true">→</span></button><button class="secondary-action" data-action="review-last-exam" type="button">Review this attempt</button></div></section>
  `;
}

function renderExam() {
  return renderExamSetup();
}

function renderProgress() {
  const accuracy = Math.round((state.correct / state.answered) * 100);
  return `
    <section class="page-header"><div><p class="eyebrow">Your learning signal</p><h1 class="page-title">Progress you can feel.</h1><p class="page-intro">This preview tracks your local answers and saved questions while the full sync layer is being built.</p></div></section>
    <section class="stats-row"><article class="stat-card"><p class="stat-label">Answered</p><p class="stat-value">${state.answered}</p><span class="stat-change">Across 3 topics</span></article><article class="stat-card"><p class="stat-label">Accuracy</p><p class="stat-value">${accuracy}%</p><span class="stat-change">Steady progress</span></article><article class="stat-card"><p class="stat-label">Current streak</p><p class="stat-value">${state.streak}d</p><span class="stat-change">Keep it going</span></article></section>
    <section class="section-block"><div class="section-heading"><div><h2 class="section-title">Topic momentum</h2><p class="section-note">Your current review footprint</p></div></div><div class="topic-list">${topics.slice(0, 3).map(topicCard).join("")}</div></section>
  `;
}

function renderSettings() {
  return `
    <section class="page-header"><div><p class="eyebrow">Personal workspace</p><h1 class="page-title">Settings stay simple.</h1><p class="page-intro">These controls are intentionally lightweight in the preview. Your study data remains on this device.</p></div></section>
    <section class="book-list"><article class="book-card"><div class="streak-icon" aria-hidden="true">⌁</div><div class="book-info"><p class="book-meta">Storage</p><h2 class="book-title">Local progress</h2><p class="book-meta">Answers and bookmarks are saved in this browser.</p></div><button class="secondary-action" data-action="reset-progress" type="button">Reset</button></article><article class="book-card"><div class="streak-icon" aria-hidden="true">Aa</div><div class="book-info"><p class="book-meta">Language</p><h2 class="book-title">English interface</h2><p class="book-meta">All preview content is presented in English.</p></div><span class="book-status">Active</span></article></section>
  `;
}

function syncExamTimer() {
  const shouldRun = state.route === "exam" && state.exam.status === "running" && !state.exam.reviewing;
  if (!shouldRun) {
    if (examTimerId !== null) {
      window.clearInterval(examTimerId);
      examTimerId = null;
    }
    return;
  }

  if (examTimerId !== null) return;
  examTimerId = window.setInterval(() => {
    if (state.exam.status !== "running") {
      syncExamTimer();
      return;
    }
    state.exam.remainingSeconds = Math.max(0, state.exam.remainingSeconds - 1);
    saveState();
    const timer = document.querySelector("#examTimer");
    if (timer) {
      timer.textContent = `◷ ${formatExamTime(state.exam.remainingSeconds)}`;
      timer.classList.toggle("timer-warning", state.exam.remainingSeconds <= 60);
    }
    if (state.exam.remainingSeconds === 0) finishExam(true);
  }, 1000);
}

function startExam() {
  const specialty = document.querySelector("#examSpecialty")?.value ?? "All";
  const requestedSize = Number(document.querySelector("#examSize")?.value ?? 5);
  const random = document.querySelector("#examRandom")?.checked ?? true;
  const pool = [...getExamQuestionPool(specialty)];
  if (random) pool.sort(() => Math.random() - 0.5);
  const selectedQuestions = pool.slice(0, Math.min(requestedSize, pool.length));

  state.exam = {
    ...defaultState.exam,
    status: "running",
    specialty,
    size: selectedQuestions.length,
    random,
    questionIds: selectedQuestions.map((question) => question.id),
    currentIndex: 0,
    answers: {},
    marked: [],
    reviewing: false,
    remainingSeconds: Math.max(60, selectedQuestions.length * 60),
    lastResult: state.exam.lastResult,
  };
  state.route = "exam";
  saveState();
  render();
}

function finishExam(autoSubmitted = false) {
  if (state.exam.status !== "running") return;
  const examQuestions = state.exam.questionIds.map(examQuestionById).filter(Boolean);
  const score = examQuestions.reduce((total, question) => total + (state.exam.answers[question.id] === question.answer ? 1 : 0), 0);
  const breakdown = ["Vascular Surgery", "Thoracic Surgery", "Cardiac Surgery"]
    .map((specialty) => {
      const specialtyQuestions = examQuestions.filter((question) => getTopic(question.topicId).specialty === specialty);
      return {
        specialty,
        total: specialtyQuestions.length,
        correct: specialtyQuestions.filter((question) => state.exam.answers[question.id] === question.answer).length,
      };
    })
    .filter((row) => row.total > 0);

  const total = examQuestions.length;
  const accuracy = total ? Math.round((score / total) * 100) : 0;
  state.exam.lastResult = {
    score,
    total,
    accuracy,
    specialty: state.exam.specialty,
    completedAt: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date()),
    breakdown,
  };
  state.exam.status = "results";
  if (!state.exam.reviewing) {
    state.answered += total;
    state.correct += score;
  }
  saveState();
  render();
  if (autoSubmitted) showToast("Time is up. Your exam was submitted.");
}

function reviewLastExam() {
  const result = state.exam.lastResult;
  if (!result || !state.exam.questionIds.length) {
    showToast("Complete an exam to review it here.");
    return;
  }
  state.exam.status = "running";
  state.exam.reviewing = true;
  state.exam.currentIndex = 0;
  state.exam.remainingSeconds = Math.max(60, state.exam.questionIds.length * 60);
  saveState();
  render();
}

function bindViewEvents() {
  pageContainer.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => navigate(element.dataset.route));
  });

  pageContainer.querySelectorAll("[data-topic-id]").forEach((element) => {
    const openTopic = () => navigate("study", { topicId: element.dataset.topicId });
    element.addEventListener("click", openTopic);
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openTopic();
      }
    });
  });

  pageContainer.querySelectorAll("[data-option]").forEach((element) => {
    element.addEventListener("click", () => {
      state.selectedOption = Number(element.dataset.option);
      saveState();
      render();
    });
  });

  pageContainer.querySelectorAll("[data-exam-option]").forEach((element) => {
    element.addEventListener("click", () => {
      const currentQuestion = state.exam.questionIds[state.exam.currentIndex];
      state.exam.answers[currentQuestion] = Number(element.dataset.examOption);
      saveState();
      render();
    });
  });

  pageContainer.querySelectorAll("[data-exam-index]").forEach((element) => {
    element.addEventListener("click", () => {
      state.exam.currentIndex = Number(element.dataset.examIndex);
      saveState();
      render();
    });
  });

  pageContainer.querySelectorAll("[data-topic-filter]").forEach((element) => {
    element.addEventListener("click", () => {
      topicSpecialtyFilter = element.dataset.topicFilter;
      render();
    });
  });

  pageContainer.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", () => handleAction(element.dataset.action));
  });
}

function handleAction(action) {
  if (action === "start-study" || action === "continue-study") {
    navigate("study", { topicId: "pad" });
    return;
  }

  if (action === "start-exam") {
    startExam();
    return;
  }

  if (action === "submit-exam") {
    finishExam();
    return;
  }

  if (action === "new-exam") {
    state.exam = { ...defaultState.exam, lastResult: state.exam.lastResult };
    saveState();
    render();
    return;
  }

  if (action === "review-last-exam") {
    reviewLastExam();
    return;
  }

  if (action === "back-to-results") {
    state.exam.status = "results";
    saveState();
    render();
    return;
  }

  if (action === "toggle-exam-mark") {
    const currentQuestion = state.exam.questionIds[state.exam.currentIndex];
    state.exam.marked = state.exam.marked.includes(currentQuestion)
      ? state.exam.marked.filter((id) => id !== currentQuestion)
      : [...state.exam.marked, currentQuestion];
    saveState();
    render();
    return;
  }

  if (action === "next-exam-question") {
    if (state.exam.currentIndex === state.exam.questionIds.length - 1) {
      showToast("Review the question board, then submit when ready.");
      return;
    }
    state.exam.currentIndex += 1;
    saveState();
    render();
    return;
  }

  if (action === "previous-exam-question") {
    state.exam.currentIndex = Math.max(0, state.exam.currentIndex - 1);
    saveState();
    render();
    return;
  }

  if (action === "submit-answer") {
    if (state.selectedOption === null) return;
    const question = getStudyQuestions()[state.questionIndex % getStudyQuestions().length];
    state.submitted = true;
    if (!question.preview) {
      state.answered += 1;
      if (state.selectedOption === question.answer) state.correct += 1;
    }
    saveState();
    render();
    return;
  }

  if (action === "next-question") {
    const studyQuestions = getStudyQuestions();
    state.questionIndex = (state.questionIndex + 1) % studyQuestions.length;
    state.selectedOption = null;
    state.submitted = false;
    saveState();
    render();
    return;
  }

  if (action === "toggle-save") {
    const question = getStudyQuestions()[state.questionIndex % getStudyQuestions().length];
    state.savedQuestions = state.savedQuestions.includes(question.id)
      ? state.savedQuestions.filter((id) => id !== question.id)
      : [...state.savedQuestions, question.id];
    saveState();
    showToast(state.savedQuestions.includes(question.id) ? "Question saved for review." : "Question removed from review.");
    render();
    return;
  }

  if (action === "show-coming-soon") {
    showToast("This preview keeps the first study loop focused.");
    return;
  }

  if (action === "reset-progress") {
    state = { ...defaultState };
    saveState();
    showToast("Local progress reset.");
    render();
  }
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    navigate(item.dataset.route);
    appShell.classList.remove("menu-open");
  });
});

document.querySelector(".mobile-menu").addEventListener("click", () => appShell.classList.toggle("menu-open"));

document.addEventListener("click", (event) => {
  if (appShell.classList.contains("menu-open") && event.target.closest(".main-content")) {
    appShell.classList.remove("menu-open");
  }
});

render();
