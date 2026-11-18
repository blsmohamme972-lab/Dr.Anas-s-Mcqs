(function () {
  "use strict";

  var ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16"/><path d="M8 7h8M8 11h8"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    study: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16"/><path d="m9 11 2 2 4-5"/></svg>',
    exam: '<svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z"/><path d="M9 7h6M8 11h8M8 15h5"/><path d="m15 18 1.5 1.5L19 17"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h17"/><path d="m7 15 3-4 3 2 5-7"/></svg>',
    settings: '<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3 .9v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3-.9l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-.9-3H4a1.8 1.8 0 0 1 0-3h.2a1.8 1.8 0 0 0 .9-3L5 5.9a1.8 1.8 0 0 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3-.9v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3 .9l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 .9 3h.2a1.8 1.8 0 0 1 0 3h-.2a1.8 1.8 0 0 0-.9 3Z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 7 8.8 4.6 4.6 0 0 0 7 18Z"/><path d="m9 14 2 2 4-4"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    flame: '<svg viewBox="0 0 24 24"><path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-4 5-4 8a7 7 0 0 0 7 6Z"/><path d="M12 21a3 3 0 0 0 3-3c0-2-1.3-3.1-2.2-4.8-.8.9-1.3 1.8-1.3 2.8-.7-.5-1-1.1-1.1-1.8A4.9 4.9 0 0 0 9 17.9 3.1 3.1 0 0 0 12 21Z"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.8L6 21Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.3 4.3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    bookOpen: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22Z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8h.01"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>'
  };

  var SPECIALTIES = [
    { key: "vascular", label: "Vascular Surgery", short: "Vascular" },
    { key: "thoracic", label: "Thoracic Surgery", short: "Thoracic" },
    { key: "cardiac", label: "Cardiac Surgery", short: "Cardiac" }
  ];

  var TOPICS = [];
  [
    ["vascular", ["Peripheral Arterial Disease", "Acute Limb Ischemia", "Chronic Limb-Threatening Ischemia", "Carotid Artery Disease", "Aortic Aneurysms", "Aortic Dissection", "Mesenteric Ischemia", "Renal Artery Disease", "Venous Thromboembolism", "Chronic Venous Disease", "Varicose Veins", "Lymphedema", "Dialysis Access", "Thoracic Outlet Syndrome", "Popliteal Artery Aneurysm", "Diabetic Foot", "Vascular Trauma", "Compartment Syndrome", "Vasculitis", "Raynaud Syndrome", "Endovascular Techniques", "Vascular Grafts & Stents"]],
    ["thoracic", ["Pleural Effusion", "Pneumothorax", "Empyema", "Pulmonary Embolism", "Lung Cancer", "Solitary Pulmonary Nodule", "Mediastinal Masses", "Esophageal Cancer", "Esophageal Perforation", "Hiatal Hernia", "Achalasia", "Gastroesophageal Reflux", "Chest Wall Tumors", "Thoracic Trauma", "Diaphragmatic Hernia", "Pulmonary Metastasectomy", "Interstitial Lung Disease", "Bronchiectasis", "Cystic Lung Disease", "Hyperhidrosis", "Tracheal & Airway Surgery", "Thoracoscopic Techniques"]],
    ["cardiac", ["Coronary Artery Disease", "Acute Coronary Syndromes", "Valve Disease", "Aortic Valve Surgery", "Mitral Valve Surgery", "Tricuspid Valve Surgery", "Aortic Root & Ascending Aorta", "Aortic Arch Surgery", "Congenital Heart Disease", "Heart Failure", "Cardiogenic Shock", "Mechanical Circulatory Support", "Heart Transplantation", "Arrhythmia Surgery", "Atrial Fibrillation", "Pericardial Disease", "Infective Endocarditis", "Cardiac Trauma", "Tumors of the Heart", "Minimally Invasive Cardiac Surgery", "Cardiopulmonary Bypass", "Postoperative Care"]]
  ].forEach(function (group) {
    group[1].forEach(function (name) { TOPICS.push({ name: name, specialty: group[0] }); });
  });

  var BOOKS = [
    { specialty: "vascular", title: "Vascular Surgery Core Review", description: "A focused question bank for arterial, venous, and endovascular decision-making.", questions: 240, edition: "2025 edition", code: "VS" },
    { specialty: "thoracic", title: "Thoracic Surgery Core Review", description: "Build confidence across pleural, pulmonary, airway, and esophageal cases.", questions: 186, edition: "2025 edition", code: "TS" },
    { specialty: "cardiac", title: "Cardiac Surgery Core Review", description: "High-yield review for coronary, valve, aortic, and perioperative care.", questions: 214, edition: "2025 edition", code: "CS" }
  ];

  var QUESTIONS = [
    { id: "v-001", specialty: "vascular", topic: "Peripheral Arterial Disease", stem: "A patient has reproducible calf pain after walking that resolves with rest. Which finding best supports peripheral arterial disease?", options: ["An ankle-brachial index of 0.62", "A warm foot with bounding pulses", "Bilateral pitting edema", "A normal pulse volume recording"], answer: 0, explanation: "An ankle-brachial index below 0.90 supports lower-extremity peripheral arterial disease. A value of 0.62 is consistent with a hemodynamically significant arterial obstruction.", pearl: "Clinical pearl · Use the ABI as the first-line physiologic test when symptoms suggest claudication." },
    { id: "v-002", specialty: "vascular", topic: "Acute Limb Ischemia", stem: "Which bedside finding is most concerning for an immediately threatened limb in acute limb ischemia?", options: ["Mild dependent rubor", "Sensory loss with motor weakness", "A palpable popliteal pulse", "Isolated calf tenderness"], answer: 1, explanation: "Sensory loss and motor weakness indicate advanced ischemia and an immediately threatened limb. Revascularization should be organized urgently while the cause and level of occlusion are assessed.", pearl: "Clinical pearl · Neurologic deficit is a time-critical sign in the six Ps of acute limb ischemia." },
    { id: "v-003", specialty: "vascular", topic: "Carotid Artery Disease", stem: "For a patient with symptomatic carotid stenosis who is a suitable operative candidate, which intervention is generally considered when stenosis is severe?", options: ["Carotid endarterectomy", "Routine thrombolysis", "Observation alone", "Lumbar sympathectomy"], answer: 0, explanation: "Carotid endarterectomy reduces recurrent stroke risk in appropriately selected patients with symptomatic severe carotid stenosis when performed by an experienced team.", pearl: "Clinical pearl · Treatment decisions combine stenosis severity, symptom timing, surgical risk, and best medical therapy." },
    { id: "t-001", specialty: "thoracic", topic: "Pneumothorax", stem: "Which radiographic feature is most characteristic of a pneumothorax on an upright chest radiograph?", options: ["A visible pleural line with absent peripheral lung markings", "Bilateral lower-lobe consolidation", "A widened mediastinum only", "Diffuse reticular opacities"], answer: 0, explanation: "A visceral pleural line with absent lung markings peripheral to it is the classic radiographic appearance of pneumothorax. The clinical context determines whether observation, aspiration, or drainage is needed.", pearl: "Clinical pearl · Always assess hemodynamics and look for tension physiology before focusing on the image." },
    { id: "t-002", specialty: "thoracic", topic: "Lung Cancer", stem: "Which nodal station is most directly evaluated when staging a right upper-lobe lung cancer with mediastinal disease?", options: ["Ipsilateral mediastinal nodes", "Inguinal nodes", "Mesenteric nodes", "Popliteal nodes"], answer: 0, explanation: "Ipsilateral mediastinal nodal involvement is a key part of lung cancer staging and may change resectability and the role of multimodal treatment.", pearl: "Clinical pearl · Stage drives treatment. Pair imaging with tissue confirmation when it will change management." },
    { id: "t-003", specialty: "thoracic", topic: "Pleural Effusion", stem: "Which pleural fluid pattern most strongly suggests an exudative effusion?", options: ["High pleural protein relative to serum protein", "Very low cell count with clear fluid", "A normal pleural-to-serum protein ratio", "A transudate in stable cirrhosis"], answer: 0, explanation: "A high pleural-to-serum protein ratio is one of Light criteria for an exudate and suggests local pleural or pulmonary disease rather than a systemic hydrostatic process.", pearl: "Clinical pearl · Interpret pleural studies with the full clinical picture and all relevant Light criteria." },
    { id: "c-001", specialty: "cardiac", topic: "Coronary Artery Disease", stem: "Which conduit is generally preferred for bypassing the left anterior descending artery when it is suitable?", options: ["Left internal thoracic artery", "Short saphenous vein", "Radial artery only", "Inferior vena cava"], answer: 0, explanation: "The left internal thoracic artery has excellent long-term patency and is the preferred conduit to the left anterior descending artery in suitable patients.", pearl: "Clinical pearl · Conduit choice is individualized around target quality, patient factors, and long-term patency." },
    { id: "c-002", specialty: "cardiac", topic: "Valve Disease", stem: "Which echocardiographic finding most directly supports severe aortic stenosis?", options: ["A markedly elevated transvalvular velocity", "A small physiologic pericardial effusion", "Mild left atrial enlargement alone", "A normal valve area with normal gradients"], answer: 0, explanation: "A markedly elevated transvalvular velocity reflects severe obstruction when interpreted with valve area, mean gradient, flow state, and ventricular function.", pearl: "Clinical pearl · Severe valve disease is a multimodal diagnosis rather than a single-number diagnosis." },
    { id: "c-003", specialty: "cardiac", topic: "Pericardial Disease", stem: "Which combination is classically associated with cardiac tamponade?", options: ["Hypotension, elevated jugular venous pressure, and muffled heart sounds", "Hypertension, bradycardia, and crackles", "Fever, wheeze, and unilateral edema", "Wide pulse pressure and bounding pulses"], answer: 0, explanation: "Hypotension, elevated jugular venous pressure, and muffled heart sounds are the classic Beck triad. Tamponade remains a clinical diagnosis supported by echocardiography and urgent assessment.", pearl: "Clinical pearl · Do not wait for every classic sign when obstructive shock is suspected." }
  ];

  var PAGE_COPY = {
    home: ["Dr.Anas's MCQs", "Home"],
    books: ["Open a whole book", "Books"],
    topics: ["66 topics", "Topics"],
    study: ["Study mode", "Study"],
    exam: ["Exam mode", "Exam"],
    progress: ["Your results", "Progress"],
    settings: ["Preferences", "Settings"]
  };

  var STORAGE_KEY = "atlas-mcqs-local-state-v2";
  var state = loadState();
  var toastTimer = null;
  var examTimer = null;

  function initialState() {
    return {
      view: "home",
      topicFilter: "all",
      topicSearch: "",
      theme: "light",
      savedQuestionIds: [],
      progress: { answered: 0, correct: 0, bySpecialty: { vascular: 0, thoracic: 0, cardiac: 0 }, correctBySpecialty: { vascular: 0, thoracic: 0, cardiac: 0 } },
      study: { specialty: "all", topic: "all", index: 0, answered: false, selected: null, sessionAnswered: 0, sessionCorrect: 0 },
      exam: { active: false, submitted: false, specialty: "all", count: 10, topic: "all", randomized: true, timerSeconds: 0, timerCustom: false, queue: [], index: 0, answers: {}, reviewed: {}, qEndsAt: null, result: null }
    };
  }

  function loadState() {
    var base = initialState();
    try {
      var stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!stored) return base;
      base.view = stored.view || base.view;
      base.topicFilter = stored.topicFilter || base.topicFilter;
      base.topicSearch = stored.topicSearch || base.topicSearch;
      base.theme = stored.theme || base.theme;
      base.savedQuestionIds = Array.isArray(stored.savedQuestionIds) ? stored.savedQuestionIds : base.savedQuestionIds;
      base.progress = Object.assign({}, base.progress, stored.progress || {});
      base.progress.bySpecialty = Object.assign({}, initialState().progress.bySpecialty, (stored.progress || {}).bySpecialty || {});
      base.progress.correctBySpecialty = Object.assign({}, initialState().progress.correctBySpecialty, (stored.progress || {}).correctBySpecialty || {});
      base.study = Object.assign({}, base.study, stored.study || {});
      base.exam = Object.assign({}, base.exam, stored.exam || {}, { active: false, submitted: false, queue: [], answers: {}, reviewed: {}, result: null });
      return base;
    } catch (error) {
      return base;
    }
  }

  function saveState() {
    try {
      var snapshot = Object.assign({}, state, { view: "home", exam: Object.assign({}, state.exam, { active: false, submitted: false, queue: [], answers: {}, reviewed: {}, result: null }) });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch (error) {}
  }

  function icon(name) {
    return ICONS[name] || "";
  }

  function esc(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function specialty(key) {
    return SPECIALTIES.find(function (item) { return item.key === key; }) || SPECIALTIES[0];
  }

  function question(id) {
    return QUESTIONS.find(function (item) { return item.id === id; });
  }

  function topic(name) {
    return TOPICS.find(function (item) { return item.name === name; });
  }

  function tag(key) {
    var item = specialty(key);
    return '<span class="specialty-tag specialty-tag--' + item.key + '">' + esc(item.short) + '</span>';
  }

  function letter(index) {
    return String.fromCharCode(65 + index);
  }

  function studyQueue() {
    return QUESTIONS.filter(function (item) {
      return (state.study.specialty === "all" || item.specialty === state.study.specialty) && (state.study.topic === "all" || item.topic === state.study.topic);
    });
  }

  function currentStudyQuestion() {
    var queue = studyQueue();
    return queue.length ? queue[state.study.index % queue.length] : null;
  }

  function filteredTopics() {
    var search = state.topicSearch.trim().toLowerCase();
    return TOPICS.filter(function (item) {
      return (state.topicFilter === "all" || item.specialty === state.topicFilter) && (!search || item.name.toLowerCase().indexOf(search) !== -1);
    });
  }

  function renderIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (node) {
      if (!node.innerHTML.trim()) node.innerHTML = icon(node.dataset.icon);
    });
  }

  function setChrome() {
    var copy = PAGE_COPY[state.view] || PAGE_COPY.home;
    document.getElementById("topbar-eyebrow").textContent = copy[0];
    document.getElementById("topbar-title").textContent = copy[1];
    document.querySelectorAll("[data-nav]").forEach(function (button) {
      var active = button.dataset.nav === state.view;
      button.classList.toggle("is-active", active);
      if (button.classList.contains("nav-item")) {
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      }
    });
  }

  function render() {
    setChrome();
    var renderers = { home: renderHome, books: renderBooks, topics: renderTopics, study: renderStudy, exam: renderExam, progress: renderProgress, settings: renderSettings };
    document.getElementById("app-view").innerHTML = '<div class="view">' + (renderers[state.view] || renderHome)() + "</div>";
    renderIcons(document.getElementById("app-view"));
    document.documentElement.dataset.theme = state.theme;
    saveState();
    if (state.view === "exam" && state.exam.active && state.exam.timerSeconds) startExamTimer();
  }

  function navigate(view) {
    if (!PAGE_COPY[view]) return;
    state.view = view;
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    render();
    window.requestAnimationFrame(function () { document.getElementById("main-content").focus({ preventScroll: true }); });
  }

  function pct(a, b) { return b ? Math.round((a / b) * 100) + "%" : "—"; }

  function topicCount(name) { return QUESTIONS.filter(function (q) { return q.topic === name; }).length; }

  function bookCount(key) { return QUESTIONS.filter(function (q) { return q.specialty === key; }).length; }

  function renderHome() {
    var resume = state.study.sessionAnswered > 0 ? '<button class="button" data-nav="study" type="button">' + icon("study") + ' Continue where you left off</button>' : "";
    function path(nav, ic, title, text) {
      return '<button class="card recent-card" data-nav="' + nav + '" type="button"><div class="recent-card-top"><span class="section-heading-icon">' + icon(ic) + '</span><span class="bookmark-button" aria-hidden="true">' + icon("arrow") + '</span></div><h4>' + title + '</h4><p>' + text + '</p></button>';
    }
    return '<section aria-labelledby="home-heading"><article class="hero-card"><div class="hero-content"><p class="hero-kicker">Vascular · Thoracic · Cardiac</p><h2 id="home-heading">How do you want to study?</h2><p>Open a whole book, or choose one of the 66 topics.</p>' + resume + '</div></article>' +
      '<div class="section-block"><div class="recent-grid">' +
      path("books", "book", "By book", "Study or take an exam from one full book.") +
      path("topics", "grid", "By topic", "Pick one of the 66 topics.") +
      path("exam", "exam", "Exam", "Timed or untimed, with a score at the end.") +
      '</div></div><div class="stats-row" aria-label="Your numbers"><article class="card stat-card"><span class="stat-icon stat-icon--purple">' + icon("target") + '</span><div><p>Answered</p><strong>' + state.progress.answered + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--mint">' + icon("check") + '</span><div><p>Accuracy</p><strong>' + pct(state.progress.correct, state.progress.answered) + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--amber">' + icon("bookmark") + '</span><div><p>Saved</p><strong>' + state.savedQuestionIds.length + '</strong></div></article></div></section>';
  }
  function renderBooks() {
    var books = BOOKS.map(function (book) {
      return '<article class="card book-card book-card--' + book.specialty + '"><div><div class="book-card-top"><span class="book-cover">' + book.code + '</span><small>' + esc(book.edition) + '</small></div><h3>' + esc(book.title) + '</h3><p>' + esc(book.description) + '</p></div><div class="book-card-footer"><span class="book-count"><strong>' + bookCount(book.specialty) + '</strong> questions</span><button class="button button-quiet" data-book-specialty="' + book.specialty + '" type="button">Open book ' + icon("arrow") + '</button></div></article>';
    }).join("");
    return '<section aria-labelledby="books-heading"><div class="page-heading"><div><h2 id="books-heading">Books</h2><p>Open a book to study all of its questions.</p></div></div><div class="book-grid">' + books + '</div></section>';
  }
  function topicResults() {
    var items = filteredTopics();
    if (!items.length) return '<div class="empty-state">' + icon("search") + '<h3>No matching topics</h3><p>Try a broader search or choose another specialty.</p></div>';
    return '<div class="topic-summary"><strong>' + items.length + ' topics</strong><span>·</span><span>Tap a topic to study it.</span></div><div class="topic-grid">' + items.map(function (item) {
      var n = topicCount(item.name);
      return '<button class="topic-card" data-topic-select="' + esc(item.name) + '" type="button"><span class="topic-card-marker topic-card-marker--' + item.specialty + '"></span><span><h4>' + esc(item.name) + '</h4><p>' + specialty(item.specialty).label + '</p></span><span class="topic-card-progress"><strong>' + n + '</strong><span>' + (n === 1 ? "question" : "questions") + '</span></span></button>';
    }).join("") + "</div>";
  }
  function renderTopics() {
    var pills = '<button class="filter-pill ' + (state.topicFilter === "all" ? "is-active" : "") + '" data-topic-filter="all" type="button">All</button>' + SPECIALTIES.map(function (item) {
      return '<button class="filter-pill ' + (state.topicFilter === item.key ? "is-active" : "") + '" data-topic-filter="' + item.key + '" type="button">' + item.short + "</button>";
    }).join("");
    return '<section aria-labelledby="topics-heading"><div class="page-heading"><div><h2 id="topics-heading">Topics</h2><p>22 topics each in vascular, thoracic, and cardiac surgery.</p></div></div><div class="filter-bar"><label class="search-field" aria-label="Search topics">' + icon("search") + '<input id="topic-search" type="search" placeholder="Search topics..." value="' + esc(state.topicSearch) + '" autocomplete="off" /></label><div class="filter-pills" role="group" aria-label="Filter topics">' + pills + '</div></div><div id="topic-results">' + topicResults() + "</div></section>";
  }
  function specialtyOptions(selected) {
    return '<option value="all">All specialties</option>' + SPECIALTIES.map(function (item) { return '<option value="' + item.key + '" ' + (selected === item.key ? "selected" : "") + ">" + item.label + "</option>"; }).join("");
  }

  function topicOptions() {
    var items = state.study.specialty === "all" ? TOPICS : TOPICS.filter(function (item) { return item.specialty === state.study.specialty; });
    return '<option value="all">All topics</option>' + items.map(function (item) { return '<option value="' + esc(item.name) + '" ' + (state.study.topic === item.name ? "selected" : "") + ">" + esc(item.name) + "</option>"; }).join("");
  }

  function renderStudy() {
    var queue = studyQueue();
    var item = currentStudyQuestion();
    var controls = '<div class="card study-control-card"><div class="study-control-info"><span class="section-heading-icon">' + icon("target") + '</span><div><strong>' + queue.length + (queue.length === 1 ? ' question' : ' questions') + '</strong><span>in this selection</span></div></div><div class="study-controls"><label class="select-field"><span class="sr-only">Specialty</span><select id="study-specialty" aria-label="Study specialty">' + specialtyOptions(state.study.specialty) + '</select></label><label class="select-field"><span class="sr-only">Topic</span><select id="study-topic" aria-label="Study topic">' + topicOptions() + '</select></label></div></div>';
    var head = '<section aria-labelledby="study-heading"><div class="page-heading"><div><h2 id="study-heading">Study</h2><p>Answer, read the reasoning, move on.</p></div><div class="page-heading-actions">' + (item ? tag(item.specialty) : "") + '</div></div>';
    if (!item) return head + '<div class="study-layout"><div class="study-main">' + controls + '<div class="empty-state">' + icon("search") + '<h3>No questions here yet</h3><p>Choose another topic or specialty.</p></div></div></div></section>';
    var selected = state.study.selected;
    var answered = state.study.answered;
    var saved = state.savedQuestionIds.indexOf(item.id) !== -1;
    var sessionPercent = Math.min(100, Math.round((state.study.sessionAnswered / queue.length) * 100));
    var options = item.options.map(function (option, index) {
      var correct = answered && index === item.answer;
      var wrong = answered && index === selected && index !== item.answer;
      var chosen = answered && index === selected;
      return '<button class="option-button ' + (correct ? "is-correct " : "") + (wrong ? "is-wrong " : "") + (chosen && !correct ? "is-selected" : "") + '" data-study-answer="' + index + '" type="button" ' + (answered ? "disabled" : "") + '><span class="option-key">' + letter(index) + '</span><span>' + esc(option) + '</span><span class="option-status-icon">' + (correct ? icon("check") : wrong ? icon("x") : "") + "</span></button>";
    }).join("");
    var explanation = answered ? '<div class="answer-panel"><span class="answer-panel-icon">' + icon(selected === item.answer ? "check" : "info") + '</span><div><strong>' + (selected === item.answer ? "Correct" : "Correct answer · " + letter(item.answer)) + '</strong><p>' + esc(item.explanation) + '</p><p class="answer-panel-note">' + esc(item.pearl) + "</p></div></div>" : "";
    return head + '<div class="study-layout"><div class="study-main">' + controls + '<article class="card question-card"><div class="question-meta"><span class="question-counter">QUESTION ' + ((state.study.index % queue.length) + 1) + " / " + queue.length + '</span><button class="bookmark-button ' + (saved ? "is-saved" : "") + '" data-study-bookmark type="button" aria-label="' + (saved ? "Remove from saved" : "Save question") + '">' + icon("bookmark") + '</button></div><h3>' + esc(item.stem) + '</h3><div class="question-options" role="group" aria-label="Answer choices">' + options + '</div>' + explanation + '<div class="question-footer"><div class="question-source">' + icon("bookOpen") + ' ' + esc(item.topic) + '</div><button class="button ' + (answered ? "button-primary" : "button-secondary") + '" data-study-next type="button">' + (answered ? "Next question" : "Show answer") + " " + icon("arrow") + '</button></div></article></div><aside class="study-aside"><article class="card aside-card"><h3>This session</h3><div class="session-progress"><div class="session-progress-line"><span style="width:' + sessionPercent + '%"></span></div><div class="session-progress-meta"><span>' + state.study.sessionAnswered + ' answered</span><span>' + state.study.sessionCorrect + ' correct</span></div></div></article></aside></div></section>';
  }
  function examScopeItems() {
    return QUESTIONS.filter(function (item) {
      return (state.exam.specialty === "all" || item.specialty === state.exam.specialty) && (state.exam.topic === "all" || item.topic === state.exam.topic);
    });
  }

  function examOptions() {
    return '<option value="all">All specialties</option>' + SPECIALTIES.map(function (item) { return '<option value="' + item.key + '" ' + (state.exam.specialty === item.key ? "selected" : "") + ">" + item.label + "</option>"; }).join("");
  }

  function examTopicOptions() {
    var items = state.exam.specialty === "all" ? TOPICS : TOPICS.filter(function (t) { return t.specialty === state.exam.specialty; });
    return '<option value="all">All topics</option>' + items.map(function (t) {
      var n = topicCount(t.name);
      return '<option value="' + esc(t.name) + '" ' + (state.exam.topic === t.name ? "selected" : "") + ">" + esc(t.name) + " (" + n + ")</option>";
    }).join("");
  }

  var TIMER_CHOICES = [[0, "Off"], [30, "30 sec"], [60, "1 min"], [120, "2 min"], [180, "3 min"]];

  function timerChips() {
    var chips = TIMER_CHOICES.map(function (c) {
      var on = !state.exam.timerCustom && state.exam.timerSeconds === c[0];
      return '<button class="chip' + (on ? " is-active" : "") + '" data-exam-timer="' + c[0] + '" type="button" aria-pressed="' + on + '">' + c[1] + '</button>';
    }).join("");
    chips += '<button class="chip' + (state.exam.timerCustom ? " is-active" : "") + '" data-exam-timer="custom" type="button" aria-pressed="' + state.exam.timerCustom + '">Custom</button>';
    var custom = state.exam.timerCustom ? '<label class="number-field timer-custom"><input id="exam-timer-custom" type="number" min="0.5" max="30" step="0.5" value="' + (state.exam.timerSeconds ? state.exam.timerSeconds / 60 : 1.5) + '" /><span>minutes per question</span></label>' : "";
    return '<div class="chip-row" role="group" aria-label="Time per question">' + chips + '</div>' + custom;
  }
  function renderExam() {
    if (state.exam.submitted) return renderExamResult();
    if (state.exam.active) return renderExamActive();
    var available = examScopeItems().length;
    var count = Math.max(1, Math.min(state.exam.count, available || 1));
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam</h2><p>Choose what to be tested on, then start.</p></div></div><div class="exam-layout"><article class="card exam-setup"><div class="form-grid"><div class="form-field"><label for="exam-specialty">Specialty</label><label class="select-field"><select id="exam-specialty">' + examOptions() + '</select></label></div><div class="form-field"><label for="exam-topic">Topic</label><label class="select-field"><select id="exam-topic">' + examTopicOptions() + '</select></label></div><div class="form-field"><label for="exam-count">Questions <span class="field-hint">· ' + available + ' available</span></label><label class="number-field"><input id="exam-count" type="number" min="1" max="' + Math.max(available, 1) + '" value="' + count + '" /></label></div><div class="form-field"><label>Order</label><div class="toggle-field"><span>Shuffle questions</span><label class="toggle-input"><input id="exam-randomized" type="checkbox" ' + (state.exam.randomized ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div></div><div class="form-field form-field--wide"><label>Time per question</label>' + timerChips() + '</div></div><div class="form-footer"><button class="button button-primary" id="start-exam" type="button" ' + (available ? "" : "disabled") + '>' + icon("exam") + ' Start exam</button></div></article></div></section>';
  }
  function examQueue() {
    return state.exam.queue.map(question).filter(Boolean);
  }

  function renderExamActive() {
    var queue = examQueue();
    var item = queue[state.exam.index];
    if (!item) return renderExam();
    var selected = state.exam.answers[item.id];
    var marked = Boolean(state.exam.reviewed[item.id]);
    var options = item.options.map(function (option, index) {
      return '<button class="option-button ' + (selected === index ? "is-selected" : "") + '" data-exam-answer="' + index + '" type="button"><span class="option-key">' + letter(index) + '</span><span>' + esc(option) + '</span><span class="option-status-icon"></span></button>';
    }).join("");
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam mode</h2><p>Answer the set, mark anything you want to revisit, then submit for a topic breakdown.</p></div></div><div class="exam-active"><div class="card exam-toolbar"><div class="exam-toolbar-left"><strong>' + specialty(item.specialty) .label + '</strong><span>' + (state.exam.index + 1) + " of " + queue.length + '</span></div><div class="exam-toolbar-right">' + (state.exam.timerSeconds ? '<span class="exam-timer" id="exam-timer">' + icon("clock") + ' <span id="exam-timer-label">' + formatTimer(state.exam.qEndsAt - Date.now()) + "</span></span>" : "") + '<button class="button button-quiet" id="exit-exam" type="button">Exit exam</button></div></div><div class="progress-line"><span style="width:' + Math.round(((state.exam.index + 1) / queue.length) * 100) + '%"></span></div>' + (state.exam.timerSeconds ? '<div class="exam-timebar" aria-hidden="true"><span id="exam-timebar-fill"></span></div>' : "") + '<article class="card exam-question"><div class="question-meta"><span class="question-counter">' + (marked ? "MARKED FOR REVIEW" : "QUESTION IN PROGRESS") + '</span><button class="bookmark-button ' + (marked ? "is-saved" : "") + '" id="toggle-review" type="button" aria-label="Mark for review">' + icon("bookmark") + '</button></div><h3>' + esc(item.stem) + '</h3><div class="question-options" role="group" aria-label="Answer choices">' + options + '</div><div class="exam-question-footer"><button class="button button-secondary" id="exam-prev" type="button" ' + (state.exam.index === 0 ? "disabled" : "") + '>' + icon("arrowLeft") + ' Previous</button><button class="button button-primary" id="exam-next" type="button">' + (state.exam.index === queue.length - 1 ? "Review submission" : "Next question") + " " + icon("arrow") + '</button></div></article><div class="exam-submit-footer"><button class="button button-secondary" id="submit-exam" type="button">Submit exam</button></div></div></section>';
  }

  function renderExamResult() {
    var result = state.exam.result || { score: 0, total: 0, bySpecialty: {} };
    var percent = result.total ? Math.round((result.score / result.total) * 100) : 0;
    var breakdown = Object.keys(result.bySpecialty).map(function (key) { return '<div class="result-breakdown-row"><span>' + specialty(key).label + '</span><strong>' + result.bySpecialty[key].score + " / " + result.bySpecialty[key].total + "</strong></div>"; }).join("");
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam result</h2></div></div><div class="exam-layout"><article class="card exam-result"><div class="score-ring" style="--score:' + percent + '%" data-score="' + percent + '%"></div><div><h3>Exam complete</h3><div class="result-breakdown"><div class="result-breakdown-row"><span>Correct</span><strong>' + result.score + " / " + result.total + "</strong></div>" + breakdown + '</div><div class="page-heading-actions" style="justify-content:flex-start;margin-top:20px"><button class="button button-primary" id="restart-exam" type="button">New exam ' + icon("arrow") + '</button><button class="button button-secondary" data-nav="home" type="button">Home</button></div></div></article></div></section>';
  }
  function renderProgress() {
    var rows = SPECIALTIES.map(function (sp) {
      var total = state.progress.bySpecialty[sp.key] || 0;
      var correct = state.progress.correctBySpecialty[sp.key] || 0;
      var width = total ? Math.round((correct / total) * 100) : 0;
      return '<div class="progress-topic-row"><div class="progress-topic-row-top"><span>' + sp.label + ' · ' + total + ' answered</span><strong>' + pct(correct, total) + '</strong></div><div class="progress-topic-bar progress-topic-bar--' + sp.key + '"><span style="width:' + width + '%"></span></div></div>';
    }).join("");
    return '<section aria-labelledby="progress-heading"><div class="page-heading"><div><h2 id="progress-heading">Progress</h2><p>Saved on this device only.</p></div><div class="page-heading-actions"><button class="button button-primary" data-nav="study" type="button">' + icon("study") + ' Study</button></div></div><div class="progress-layout"><div><div class="progress-overview"><article class="card progress-overview-card"><p>Accuracy</p><strong>' + pct(state.progress.correct, state.progress.answered) + '</strong></article><article class="card progress-overview-card"><p>Answered</p><strong>' + state.progress.answered + '</strong></article><article class="card progress-overview-card"><p>Saved</p><strong>' + state.savedQuestionIds.length + '</strong></article></div></div><article class="card progress-topic-card"><h3>By specialty</h3><div class="progress-topic-list">' + rows + '</div></article></div></section>';
  }
  function renderSettings() {
    return '<section aria-labelledby="settings-heading"><div class="page-heading"><div><h2 id="settings-heading">Settings</h2></div></div><div class="settings-layout"><article class="card settings-card"><div class="settings-row"><div class="settings-label"><h4>Dark mode</h4><p>Easier on the eyes at night.</p></div><label class="toggle-input theme-toggle"><input id="theme-toggle" type="checkbox" ' + (state.theme === "dark" ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div><div class="settings-row"><div class="settings-label"><h4>Reset progress</h4><p>Clears your answers and saved questions on this device.</p></div><button class="button button-secondary" id="reset-progress" type="button">Reset</button></div></article></div></section>';
  }
  function recordAnswer(item, correct) {
    state.progress.answered += 1;
    state.progress.bySpecialty[item.specialty] = (state.progress.bySpecialty[item.specialty] || 0) + 1;
    if (correct) {
      state.progress.correct += 1;
      state.progress.correctBySpecialty[item.specialty] = (state.progress.correctBySpecialty[item.specialty] || 0) + 1;
    }
  }

  function studyAnswer(index) {
    if (state.study.answered) return;
    var item = currentStudyQuestion();
    var correct = Number(index) === item.answer;
    state.study.selected = Number(index);
    state.study.answered = true;
    state.study.sessionAnswered += 1;
    if (correct) state.study.sessionCorrect += 1;
    recordAnswer(item, correct);
    render();
  }

  function startExam() {
    var items = examScopeItems();
    if (!items.length) return;
    var count = Math.min(Math.max(Number(document.getElementById("exam-count").value) || items.length, 1), items.length);
    if (state.exam.randomized) items.sort(function () { return Math.random() - 0.5; });
    state.exam = Object.assign({}, state.exam, { active: true, submitted: false, count: count, queue: items.slice(0, count).map(function (item) { return item.id; }), index: 0, answers: {}, reviewed: {}, qEndsAt: null, result: null });
    goToQuestion(0);
    clearInterval(examTimer);
    render();
  }

  function goToQuestion(index) {
    state.exam.index = index;
    state.exam.qEndsAt = state.exam.timerSeconds ? Date.now() + state.exam.timerSeconds * 1000 : null;
  }
  function formatTimer(milliseconds) {
    var seconds = Math.max(0, Math.ceil(milliseconds / 1000));
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
  }

  function startExamTimer() {
    clearInterval(examTimer);
    if (!state.exam.active || !state.exam.timerSeconds || !state.exam.qEndsAt) return;
    function tick() {
      var left = state.exam.qEndsAt - Date.now();
      if (left <= 0) {
        clearInterval(examTimer);
        if (state.exam.index >= examQueue().length - 1) { showToast("Time is up. Exam submitted."); submitExam(); }
        else { showToast("Time is up. Next question."); goToQuestion(state.exam.index + 1); render(); }
        return;
      }
      var label = document.getElementById("exam-timer-label");
      if (label) label.textContent = formatTimer(left);
      var pill = document.getElementById("exam-timer");
      if (pill) pill.classList.toggle("is-urgent", left <= 10000);
      var fill = document.getElementById("exam-timebar-fill");
      if (fill) fill.style.width = Math.max(0, (left / (state.exam.timerSeconds * 1000)) * 100) + "%";
    }
    tick();
    examTimer = setInterval(tick, 250);
  }
  function submitExam() {
    var queue = examQueue();
    var result = { score: 0, total: queue.length, bySpecialty: {} };
    queue.forEach(function (item) {
      var correct = state.exam.answers[item.id] === item.answer;
      if (correct) result.score += 1;
      if (!result.bySpecialty[item.specialty]) result.bySpecialty[item.specialty] = { score: 0, total: 0 };
      result.bySpecialty[item.specialty].total += 1;
      if (correct) result.bySpecialty[item.specialty].score += 1;
      recordAnswer(item, correct);
    });
    clearInterval(examTimer);
    state.exam.active = false;
    state.exam.submitted = true;
    state.exam.result = result;
    showToast("Exam submitted.");
    render();
  }


  function showToast(message) {
    clearTimeout(toastTimer);
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<span class="toast-dot"></span><span>' + esc(message) + "</span>";
    document.body.appendChild(toast);
    toastTimer = setTimeout(function () { toast.classList.add("is-leaving"); setTimeout(function () { toast.remove(); }, 180); }, 2800);
  }

  function resetProgress() {
    var fresh = initialState();
    state.savedQuestionIds = fresh.savedQuestionIds;
    state.progress = fresh.progress;
    state.study = fresh.study;
    showToast("Progress reset.");
    render();
  }

  document.addEventListener("click", function (event) {
    var nav = event.target.closest("[data-nav]");
    if (nav) { navigate(nav.dataset.nav); return; }
    if (event.target.closest("#menu-toggle")) {
      var sidebar = document.getElementById("sidebar");
      var open = sidebar.classList.toggle("is-open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
      return;
    }
    var filter = event.target.closest("[data-topic-filter]");
    if (filter) {
      state.topicFilter = filter.dataset.topicFilter;
      document.querySelectorAll("[data-topic-filter]").forEach(function (button) { button.classList.toggle("is-active", button.dataset.topicFilter === state.topicFilter); });
      var results = document.getElementById("topic-results");
      if (results) { results.innerHTML = topicResults(); renderIcons(results); }
      saveState();
      return;
    }
    var topicButton = event.target.closest("[data-topic-select]");
    if (topicButton) {
      var selectedTopic = topic(topicButton.dataset.topicSelect);
      if (selectedTopic) {
        state.study.specialty = selectedTopic.specialty;
        state.study.topic = selectedTopic.name;
        state.study.index = 0;
        state.study.answered = false;
        state.study.selected = null;
        navigate("study");
      }
      return;
    }
    var bookButton = event.target.closest("[data-book-specialty]");
    if (bookButton) {
      state.study.specialty = bookButton.dataset.bookSpecialty;
      state.study.topic = "all";
      state.study.index = 0;
      state.study.answered = false;
      state.study.selected = null;
      navigate("study");
      return;
    }
    if (event.target.closest("[data-action='continue-study']")) { state.study.specialty = "all"; state.study.topic = "all"; navigate("study"); return; }
    var studyOption = event.target.closest("[data-study-answer]");
    if (studyOption) { studyAnswer(studyOption.dataset.studyAnswer); return; }
    if (event.target.closest("[data-study-bookmark]")) {
      var cur = currentStudyQuestion(); if (!cur) return; var current = cur.id;
      var position = state.savedQuestionIds.indexOf(current);
      if (position === -1) { state.savedQuestionIds.push(current); showToast("Question saved."); } else { state.savedQuestionIds.splice(position, 1); showToast("Removed from saved."); }
      render();
      return;
    }
    if (event.target.closest("[data-study-next]")) {
      var curQ = currentStudyQuestion(); if (!curQ) return; if (!state.study.answered) { state.study.answered = true; state.study.selected = curQ.answer; } else { state.study.index += 1; state.study.answered = false; state.study.selected = null; }
      render();
      return;
    }
    if (event.target.closest("#start-exam")) { startExam(); return; }
    var timerChip = event.target.closest("[data-exam-timer]");
    if (timerChip) {
      var v = timerChip.dataset.examTimer;
      if (v === "custom") { state.exam.timerCustom = true; state.exam.timerSeconds = state.exam.timerSeconds || 90; }
      else { state.exam.timerCustom = false; state.exam.timerSeconds = Number(v); }
      render();
      return;
    }
    var examOption = event.target.closest("[data-exam-answer]");
    if (examOption) {
      var examItem = examQueue()[state.exam.index];
      if (examItem) { state.exam.answers[examItem.id] = Number(examOption.dataset.examAnswer); render(); }
      return;
    }
    if (event.target.closest("#exam-next")) {
      if (state.exam.index < examQueue().length - 1) goToQuestion(state.exam.index + 1); else showToast("Review your answers or submit when you are ready.");
      render();
      return;
    }
    if (event.target.closest("#exam-prev")) { goToQuestion(Math.max(0, state.exam.index - 1)); render(); return; }
    if (event.target.closest("#toggle-review")) {
      var reviewItem = examQueue()[state.exam.index];
      if (reviewItem) state.exam.reviewed[reviewItem.id] = !state.exam.reviewed[reviewItem.id];
      render();
      return;
    }
    if (event.target.closest("#submit-exam")) { submitExam(); return; }
    if (event.target.closest("#exit-exam")) { state.exam.active = false; clearInterval(examTimer); showToast("Exam closed."); render(); return; }
    if (event.target.closest("#restart-exam")) { state.exam.submitted = false; state.exam.result = null; navigate("exam"); return; }
    if (event.target.closest("#reset-progress")) resetProgress();
  });

  document.addEventListener("change", function (event) {
    if (event.target.id === "study-specialty") {
      state.study.specialty = event.target.value;
      state.study.topic = "all";
      state.study.index = 0;
      state.study.answered = false;
      state.study.selected = null;
      render();
    } else if (event.target.id === "study-topic") {
      state.study.topic = event.target.value;
      state.study.index = 0;
      state.study.answered = false;
      state.study.selected = null;
      render();
    } else if (event.target.id === "exam-specialty") {
      state.exam.specialty = event.target.value;
      state.exam.topic = "all";
      render();
    } else if (event.target.id === "exam-topic") {
      state.exam.topic = event.target.value;
      render();
    } else if (event.target.id === "exam-count") {
      state.exam.count = Math.max(1, Number(event.target.value) || 1);
      saveState();
    } else if (event.target.id === "exam-randomized") {
      state.exam.randomized = event.target.checked;
      saveState();
    } else if (event.target.id === "exam-timer-custom") {
      var mins = Math.min(30, Math.max(0.5, Number(event.target.value) || 1));
      state.exam.timerSeconds = Math.round(mins * 60);
      render();
    } else if (event.target.id === "theme-toggle") {
      state.theme = event.target.checked ? "dark" : "light";
      render();
    }
  });

  document.addEventListener("input", function (event) {
    if (event.target.id !== "topic-search") return;
    state.topicSearch = event.target.value;
    var cursor = event.target.selectionStart;
    var results = document.getElementById("topic-results");
    if (results) results.innerHTML = topicResults();
    window.requestAnimationFrame(function () {
      var input = document.getElementById("topic-search");
      if (input) { input.focus(); input.setSelectionRange(cursor, cursor); }
    });
  });

  document.documentElement.dataset.theme = state.theme;
  renderIcons(document);
  render();

  if ("serviceWorker" in navigator) {
    var hadController = Boolean(navigator.serviceWorker.controller);
    var reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (!hadController || reloaded || (state.view === "exam" && state.exam.active)) return;
      reloaded = true;
      window.location.reload();
    });
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").then(function (reg) {
        reg.update();
        document.addEventListener("visibilitychange", function () { if (!document.hidden) reg.update(); });
      }).catch(function () {});
    });
  }
}());
