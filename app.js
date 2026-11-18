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
};

let state = loadState();
let toastTimer;

const pageContainer = document.querySelector("#pageContainer");
const topbarPage = document.querySelector("#topbarPage");
const toast = document.querySelector("#toast");
const appShell = document.querySelector("#appShell");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...stored };
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
  return matchingQuestions.length > 0 ? matchingQuestions : questions.filter((question) => question.topicId === "pad");
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
  return `
    <section class="page-header">
      <div><p class="eyebrow">Browse the curriculum</p><h1 class="page-title">Choose a topic.</h1><p class="page-intro">Start with one focused set. The full 66-topic curriculum will grow from this foundation.</p></div>
      <div class="view-toggle" aria-label="Topic view"><button class="active" type="button">All topics</button><button type="button">In progress</button></div>
    </section>
    <section class="topic-list" aria-label="Available topics">${topics.map(topicCard).join("")}</section>
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

function renderExam() {
  return `
    <section class="page-header"><div><p class="eyebrow">Timed practice</p><h1 class="page-title">Exam mode is taking shape.</h1><p class="page-intro">The first build keeps the learning loop short. Exam configuration, timing, and review analytics are queued next.</p></div></section>
    <section class="placeholder-card"><div><div class="placeholder-icon">◷</div><h2 class="placeholder-title">Build confidence in Study first.</h2><p class="placeholder-copy">When the question bank grows, this space will support topic selection, a timer, marking for review, and a detailed result breakdown.</p><button class="primary-action" data-route="study" type="button" style="margin-top: 20px">Go to Study <span aria-hidden="true">→</span></button></div></section>
  `;
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

  pageContainer.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", () => handleAction(element.dataset.action));
  });
}

function handleAction(action) {
  if (action === "start-study" || action === "continue-study") {
    navigate("study", { topicId: "pad" });
    return;
  }

  if (action === "submit-answer") {
    if (state.selectedOption === null) return;
    const question = getStudyQuestions()[state.questionIndex % getStudyQuestions().length];
    state.submitted = true;
    state.answered += 1;
    if (state.selectedOption === question.answer) state.correct += 1;
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
