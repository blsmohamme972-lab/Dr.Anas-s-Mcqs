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
    x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z"/></svg>',
    undo: '<svg viewBox="0 0 24 24"><path d="M9 7 4 12l5 5"/><path d="M5 12h8a6 6 0 0 1 6 6"/></svg>'
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
    home: ["Study workspace", "Good morning, Doctor"],
    books: ["Your library", "Books & question banks"],
    topics: ["66-topic index", "Choose a topic"],
    study: ["Study mode", "Learn one question at a time"],
    "quick-review": ["Quick review", "Review the essentials quickly"],
    exam: ["Exam mode", "Build a focused exam"],
    progress: ["Your insights", "Progress that compounds"],
    favorites: ["Your library", "Favorite questions"],
    settings: ["Workspace", "Settings"]
  };

  var STORAGE_KEY = "atlas-mcqs-local-state-v1";
  var LEGACY_STORAGE_KEYS = ["atlas-mcqs-local-state"];
  var BACKUP_FORMAT = "atlas-mcqs-backup";
  var BACKUP_VERSION = 1;
  var backupNotice = null;
  var state = loadState();
  var toastTimer = null;
  var examTimer = null;
  var swRegistration = null;
  var swRefreshing = false;
  var quickReviewPointerStartX = null;
  var quickReviewIgnoreClick = false;

  function initialState() {
    return {
      view: "home",
      topicFilter: "all",
      topicSearch: "",
      theme: "light",
      savedQuestionIds: ["v-002", "c-001"],
      hiddenQuestionIds: [],
      progress: { answered: 24, correct: 19, streak: 4, bySpecialty: { vascular: 11, thoracic: 7, cardiac: 6 }, correctBySpecialty: { vascular: 9, thoracic: 5, cardiac: 5 } },
      study: { specialty: "all", topic: "all", index: 0, answered: false, selected: null, sessionAnswered: 0, sessionCorrect: 0 },
      quickReview: { active: false, queue: [], index: 0, revealed: false },
      exam: { active: false, submitted: false, specialty: "all", count: 10, randomized: true, timed: false, queue: [], index: 0, answers: {}, reviewed: {}, endsAt: null, result: null },
      activity: [
        { initials: "VS", text: "Completed a vascular review set", time: "Today · 08:40", result: "8 / 10" },
        { initials: "TS", text: "Saved a thoracic surgery question", time: "Yesterday · 17:15", result: "Saved" },
        { initials: "CS", text: "Reviewed cardiac valve disease", time: "Mon · 12:20", result: "6 / 8" }
      ]
    };
  }

  function isObject(value) {
    return value && typeof value === "object" && !Array.isArray(value);
  }

  function validSpecialty(value) {
    return value === "all" || SPECIALTIES.some(function (item) { return item.key === value; });
  }

  function questionIds(value) {
    var seen = {};
    return Array.isArray(value) ? value.filter(function (id) {
      if (typeof id !== "string" || !question(id) || seen[id]) return false;
      seen[id] = true;
      return true;
    }) : [];
  }

  function integer(value, fallback, minimum, maximum) {
    var number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    number = Math.floor(number);
    if (typeof minimum === "number") number = Math.max(minimum, number);
    if (typeof maximum === "number") number = Math.min(maximum, number);
    return number;
  }

  function normalizeState(stored) {
    var base = initialState();
    if (!isObject(stored)) return base;
    base.view = typeof stored.view === "string" && Object.prototype.hasOwnProperty.call(PAGE_COPY, stored.view) ? stored.view : base.view;
    base.topicFilter = validSpecialty(stored.topicFilter) ? stored.topicFilter : base.topicFilter;
    base.topicSearch = typeof stored.topicSearch === "string" ? stored.topicSearch.slice(0, 120) : base.topicSearch;
    base.theme = stored.theme === "dark" ? "dark" : "light";
    base.savedQuestionIds = Array.isArray(stored.savedQuestionIds) ? questionIds(stored.savedQuestionIds) : base.savedQuestionIds;
    base.hiddenQuestionIds = questionIds(stored.hiddenQuestionIds);

    var progress = isObject(stored.progress) ? stored.progress : {};
    base.progress.answered = integer(progress.answered, base.progress.answered, 0);
    base.progress.correct = integer(progress.correct, base.progress.correct, 0, base.progress.answered);
    base.progress.streak = integer(progress.streak, base.progress.streak, 0);
    ["bySpecialty", "correctBySpecialty"].forEach(function (key) {
      var source = isObject(progress[key]) ? progress[key] : {};
      SPECIALTIES.forEach(function (item) {
        base.progress[key][item.key] = integer(source[item.key], base.progress[key][item.key], 0);
      });
    });
    SPECIALTIES.forEach(function (item) {
      base.progress.correctBySpecialty[item.key] = Math.min(base.progress.correctBySpecialty[item.key], base.progress.bySpecialty[item.key]);
    });

    var study = isObject(stored.study) ? stored.study : {};
    base.study.specialty = validSpecialty(study.specialty) ? study.specialty : base.study.specialty;
    base.study.topic = typeof study.topic === "string" ? study.topic : base.study.topic;
    if (base.study.topic !== "all" && (!topic(base.study.topic) || (base.study.specialty !== "all" && topic(base.study.topic).specialty !== base.study.specialty))) base.study.topic = "all";
    base.study.index = integer(study.index, 0, 0);
    base.study.answered = Boolean(study.answered);
    base.study.selected = Number.isInteger(study.selected) ? study.selected : null;
    base.study.sessionAnswered = integer(study.sessionAnswered, 0, 0);
    base.study.sessionCorrect = integer(study.sessionCorrect, 0, 0, base.study.sessionAnswered);
    var studyItems = QUESTIONS.filter(function (item) {
      return base.hiddenQuestionIds.indexOf(item.id) === -1 && (base.study.specialty === "all" || item.specialty === base.study.specialty) && (base.study.topic === "all" || item.topic === base.study.topic);
    });
    if (!studyItems.length) {
      base.study.index = 0;
      base.study.answered = false;
      base.study.selected = null;
    } else {
      base.study.index = base.study.index % studyItems.length;
      if (!base.study.answered || base.study.selected === null || base.study.selected < 0 || base.study.selected >= studyItems[base.study.index].options.length) {
        base.study.answered = false;
        base.study.selected = null;
      }
    }

    var quick = isObject(stored.quickReview) ? stored.quickReview : {};
    base.quickReview.active = Boolean(quick.active) || base.view === "quick-review";
    base.quickReview.queue = questionIds(quick.queue).filter(function (id) { return base.hiddenQuestionIds.indexOf(id) === -1; });
    base.quickReview.index = integer(quick.index, 0, 0);
    base.quickReview.revealed = Boolean(quick.revealed);
    if (base.quickReview.queue.length) base.quickReview.index %= base.quickReview.queue.length;
    else {
      base.quickReview.index = 0;
      base.quickReview.revealed = false;
    }

    var exam = isObject(stored.exam) ? stored.exam : {};
    base.exam.specialty = validSpecialty(exam.specialty) ? exam.specialty : base.exam.specialty;
    base.exam.count = integer(exam.count, base.exam.count, 3, QUESTIONS.length);
    base.exam.randomized = exam.randomized !== false;
    base.exam.timed = Boolean(exam.timed);
    base.exam.active = false;
    base.exam.submitted = false;
    base.exam.queue = [];
    base.exam.answers = {};
    base.exam.reviewed = {};
    base.exam.endsAt = null;
    base.exam.result = null;
    base.activity = Array.isArray(stored.activity) ? stored.activity.filter(function (item) { return isObject(item); }).slice(0, 12) : base.activity;
    return base;
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) LEGACY_STORAGE_KEYS.some(function (key) { raw = localStorage.getItem(key); return Boolean(raw); });
      return raw ? normalizeState(JSON.parse(raw)) : initialState();
    } catch (error) {
      return initialState();
    }
  }

  function stateSnapshot(source) {
    return Object.assign({}, source, {
      schemaVersion: BACKUP_VERSION,
      exam: Object.assign({}, source.exam, { active: false, submitted: false, queue: [], answers: {}, reviewed: {}, result: null, endsAt: null })
    });
  }

  function persistState(nextState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateSnapshot(nextState)));
      return true;
    } catch (error) {
      return false;
    }
  }

  function saveState() {
    persistState(state);
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
      return state.hiddenQuestionIds.indexOf(item.id) === -1 && (state.study.specialty === "all" || item.specialty === state.study.specialty) && (state.study.topic === "all" || item.topic === state.study.topic);
    });
  }

  function currentStudyQuestion() {
    var queue = studyQueue();
    return queue.length ? queue[state.study.index % queue.length] : null;
  }

  function quickReviewQueue() {
    var savedQueue = state.quickReview.queue.length ? state.quickReview.queue.map(question).filter(Boolean) : [];
    var visibleSavedQueue = savedQueue.filter(function (item) {
      return state.hiddenQuestionIds.indexOf(item.id) === -1;
    });
    return visibleSavedQueue.length ? visibleSavedQueue : studyQueue();
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
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function render() {
    setChrome();
    var renderers = { home: renderHome, books: renderBooks, topics: renderTopics, study: renderStudy, "quick-review": renderQuickReview, exam: renderExam, progress: renderProgress, favorites: renderFavorites, settings: renderSettings };
    document.getElementById("app-view").innerHTML = '<div class="view">' + (renderers[state.view] || renderHome)() + "</div>";
    renderIcons(document.getElementById("app-view"));
    document.documentElement.dataset.theme = state.theme;
    updateConnection();
    saveState();
    if (state.view === "exam" && state.exam.active && state.exam.timed) startExamTimer();
  }

  function navigate(view) {
    if (!PAGE_COPY[view]) return;
    state.view = view;
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    render();
    window.requestAnimationFrame(function () { document.getElementById("main-content").focus({ preventScroll: true }); });
  }

  function renderHome() {
    var accuracy = Math.round((state.progress.correct / Math.max(state.progress.answered, 1)) * 100);
    var recent = [
      { name: "Peripheral Arterial Disease", specialty: "vascular", progress: 68, count: "18 questions" },
      { name: "Pleural Effusion", specialty: "thoracic", progress: 42, count: "12 questions" },
      { name: "Coronary Artery Disease", specialty: "cardiac", progress: 76, count: "24 questions" }
    ];
    return '<section aria-labelledby="home-heading"><div class="dashboard-grid">' +
      '<article class="hero-card"><div class="hero-content"><p class="hero-kicker">Your next best step</p><h2 id="home-heading">Turn a few minutes into a sharper recall.</h2><p>Pick up where you left off with a focused study session across vascular, thoracic, and cardiac surgery.</p><button class="button" data-action="continue-study" type="button">' + icon("study") + ' Continue studying</button></div></article>' +
      '<article class="card streak-card"><div><div class="card-heading"><div><h3>Study streak</h3><p>Small sessions add up.</p></div><span class="section-heading-icon">' + icon("flame") + '</span></div><div class="streak-number"><strong>' + state.progress.streak + '</strong><span>days</span></div></div><div class="streak-days" aria-label="Study streak for the last seven days">' +
      ["M", "T", "W", "T", "F", "S", "S"].map(function (day, index) { return '<div class="streak-day ' + (index < 4 ? "is-complete " : "") + (index === 4 ? "is-today" : "") + '"><span class="streak-day-dot"></span><span>' + day + "</span></div>"; }).join("") +
      '</div></article></div>' +
      '<div class="stats-row" aria-label="Study summary"><article class="card stat-card"><span class="stat-icon stat-icon--purple">' + icon("target") + '</span><div><p>Questions answered</p><strong>' + state.progress.answered + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--mint">' + icon("check") + '</span><div><p>Correct answers</p><strong>' + accuracy + '%</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--blue">' + icon("grid") + '</span><div><p>Topics explored</p><strong>' + Math.min(18, Math.max(3, state.progress.answered - 6)) + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--amber">' + icon("bookmark") + '</span><div><p>Saved for review</p><strong>' + state.savedQuestionIds.length + '</strong></div></article></div>' +
      '<div class="section-block"><div class="section-title-row"><h3>Recent topics</h3><button class="text-button" data-nav="topics" type="button">View all ' + icon("arrow") + '</button></div><div class="recent-grid">' +
      recent.map(function (item) { return '<button class="card recent-card" data-topic-select="' + esc(item.name) + '" type="button"><div class="recent-card-top">' + tag(item.specialty) + '<span class="bookmark-button" aria-hidden="true">' + icon("arrow") + '</span></div><h4>' + esc(item.name) + '</h4><p>' + item.count + " · " + item.progress + '% reviewed</p><div class="progress-line"><span style="width:' + item.progress + '%"></span></div><div class="recent-card-footer"><span>Continue session</span><span>' + icon("arrow") + "</span></div></button>"; }).join("") +
      '</div></div><div class="section-block"><div class="section-title-row"><h3>Recent activity</h3><span class="eyebrow">Local preview</span></div><div class="card activity-card"><div class="activity-list">' +
      state.activity.map(function (item) { return '<div class="activity-item"><span class="activity-avatar">' + esc(item.initials) + '</span><div><p>' + esc(item.text) + '</p><span>' + esc(item.time) + '</span></div><span class="activity-result">' + esc(item.result) + "</span></div>"; }).join("") +
      '</div><div class="activity-summary"><h4>Keep your review balanced</h4><p>You have touched all three specialties this week. A short thoracic session is the next gap to close.</p><div class="mini-bar-chart" aria-label="Weekly study activity"><span style="height:38%"></span><span style="height:64%"></span><span style="height:51%"></span><span style="height:76%"></span><span style="height:90%"></span><span style="height:59%"></span><span style="height:42%"></span></div></div></div></div></section>';
  }

  function renderBooks() {
    var books = BOOKS.map(function (book) {
      return '<article class="card book-card book-card--' + book.specialty + '"><div><div class="book-card-top"><span class="book-cover">' + book.code + '</span><small>' + esc(book.edition) + '</small></div><h3>' + esc(book.title) + '</h3><p>' + esc(book.description) + '</p></div><div class="book-card-footer"><span class="book-count"><strong>' + book.questions + '</strong> demo slots</span><button class="button button-quiet" data-book-specialty="' + book.specialty + '" type="button">Open bank ' + icon("arrow") + '</button></div></article>';
    }).join("");
    return '<section aria-labelledby="books-heading"><div class="page-heading"><div><h2 id="books-heading">Your library</h2><p>Three focused banks are ready for the first pass. Books will become versioned, reviewable imports as the content pipeline lands.</p></div><div class="page-heading-actions"><button class="button button-primary" data-nav="study" type="button">' + icon("study") + ' Start a study set</button></div></div><div class="book-grid">' + books + '</div><div class="section-block"><div class="section-title-row"><h3>Import status</h3><span class="eyebrow">Pipeline preview</span></div><div class="card activity-card"><div class="activity-list"><div class="activity-item"><span class="activity-avatar">' + icon("check") + '</span><div><p><strong>Book metadata</strong> · Ready for the first upload</p><span>Content pipeline milestone</span></div><span class="activity-result">Done</span></div><div class="activity-item"><span class="activity-avatar">' + icon("bookOpen") + '</span><div><p><strong>Question extraction</strong> · Parser and OCR worker to be connected</p><span>Content pipeline milestone</span></div><span class="activity-result">Next</span></div><div class="activity-item"><span class="activity-avatar">' + icon("target") + '</span><div><p><strong>Medical review</strong> · Approval queue will follow extraction</p><span>Content pipeline milestone</span></div><span class="activity-result">Planned</span></div></div><div class="activity-summary"><h4>Versioned content is next</h4><p>The preview keeps the study experience useful while the backend import, review, and publishing workflow is added.</p><span class="settings-badge">No keys required in the client</span></div></div></div></section>';
  }

  function topicResults() {
    var items = filteredTopics();
    if (!items.length) return '<div class="empty-state">' + icon("search") + '<h3>No matching topics</h3><p>Try a broader search or choose another specialty.</p></div>';
    return '<div class="topic-summary"><strong>' + items.length + ' topics</strong><span>·</span><span>Tap a topic to start a focused study set.</span></div><div class="topic-grid">' + items.map(function (item) {
      var percent = Math.min(92, Math.max(4, ((state.progress.bySpecialty[item.specialty] || 0) * 4) + ((item.name.length * 7) % 17)));
      return '<button class="topic-card" data-topic-select="' + esc(item.name) + '" type="button"><span class="topic-card-marker topic-card-marker--' + item.specialty + '"></span><span><h4>' + esc(item.name) + '</h4><p>' + specialty(item.specialty).label + '</p></span><span class="topic-card-progress"><strong>' + percent + '%</strong><span class="topic-card-progress-line"><span style="width:' + percent + '%"></span></span></span></button>';
    }).join("") + "</div>";
  }

  function renderTopics() {
    var pills = '<button class="filter-pill ' + (state.topicFilter === "all" ? "is-active" : "") + '" data-topic-filter="all" type="button">All topics</button>' + SPECIALTIES.map(function (item) {
      return '<button class="filter-pill ' + (state.topicFilter === item.key ? "is-active" : "") + '" data-topic-filter="' + item.key + '" type="button">' + item.label + "</button>";
    }).join("");
    return '<section aria-labelledby="topics-heading"><div class="page-heading"><div><h2 id="topics-heading">The 66-topic index</h2><p>Choose a specialty or search the full catalog. Every topic is fixed in the foundation so the question bank can grow without changing the learner mental map.</p></div><div class="page-heading-actions"><button class="button button-secondary" data-nav="study" type="button">' + icon("study") + ' Quick study</button></div></div><div class="filter-bar"><label class="search-field" aria-label="Search topics">' + icon("search") + '<input id="topic-search" type="search" placeholder="Search topics..." value="' + esc(state.topicSearch) + '" autocomplete="off" /></label><div class="filter-pills" role="group" aria-label="Filter topics">' + pills + '</div></div><div id="topic-results">' + topicResults() + "</div></section>";
  }

  function specialtyOptions(selected) {
    return '<option value="all">All specialties</option>' + SPECIALTIES.map(function (item) { return '<option value="' + item.key + '" ' + (selected === item.key ? "selected" : "") + ">" + item.label + "</option>"; }).join("");
  }

  function topicOptions() {
    var items = state.study.specialty === "all" ? TOPICS : TOPICS.filter(function (item) { return item.specialty === state.study.specialty; });
    return '<option value="all">All topics</option>' + items.map(function (item) { return '<option value="' + esc(item.name) + '" ' + (state.study.topic === item.name ? "selected" : "") + ">" + esc(item.name) + "</option>"; }).join("");
  }

  function studyEmptyCopy() {
    var visibleQuestions = QUESTIONS.filter(function (item) { return state.hiddenQuestionIds.indexOf(item.id) === -1; });
    if (!visibleQuestions.length) {
      return { heading: "No visible questions", text: "All preview questions are hidden. Restore a question from Settings to bring it back into future study sessions.", action: "Manage hidden questions", actionType: "settings" };
    }
    return { heading: "No questions match these filters", text: "Change the specialty or topic filters to continue with a visible question.", action: "Reset study filters", actionType: "reset-study-filters" };
  }

  function studyEmptyState(symbol) {
    var copy = studyEmptyCopy();
    var action = copy.actionType === "settings" ? '<button class="button button-primary" data-nav="settings" type="button">' + copy.action + " " + icon("arrow") + "</button>" : '<button class="button button-primary" data-action="reset-study-filters" type="button">' + copy.action + " " + icon("undo") + "</button>";
    return '<div class="empty-state" role="status">' + icon(symbol || "bookmark") + '<h3>' + copy.heading + '</h3><p>' + copy.text + '</p><div class="page-heading-actions">' + action + '<button class="button button-secondary" data-nav="favorites" type="button">Open favorites</button></div></div>';
  }

  function renderStudy() {
    var queue = studyQueue();
    var item = currentStudyQuestion();
    if (!item) {
      return '<section aria-labelledby="study-heading"><div class="page-heading"><div><h2 id="study-heading">Study mode</h2><p>Your visible question set is ready whenever you are.</p></div></div>' + studyEmptyState("bookmark") + "</section>";
    }
    var selected = state.study.selected;
    var answered = state.study.answered;
    var saved = state.savedQuestionIds.indexOf(item.id) !== -1;
    var sessionPercent = Math.min(100, Math.round((state.study.sessionAnswered / Math.max(queue.length, 1)) * 100));
    var options = item.options.map(function (option, index) {
      var correct = answered && index === item.answer;
      var wrong = answered && index === selected && index !== item.answer;
      var chosen = answered && index === selected;
      return '<button class="option-button ' + (correct ? "is-correct " : "") + (wrong ? "is-wrong " : "") + (chosen && !correct ? "is-selected" : "") + '" data-study-answer="' + index + '" type="button" aria-label="Option ' + letter(index) + ': ' + esc(option) + '" ' + (answered ? "disabled" : "") + '><span class="option-key">' + letter(index) + '</span><span>' + esc(option) + '</span><span class="option-status-icon">' + (correct ? icon("check") : wrong ? icon("x") : "") + "</span></button>";
    }).join("");
    var explanation = answered ? '<div class="answer-panel"><span class="answer-panel-icon">' + icon(selected === item.answer ? "check" : "info") + '</span><div><strong>' + (selected === item.answer ? "Correct answer" : "Correct answer · " + letter(item.answer)) + '</strong><p>' + esc(item.explanation) + '</p><p class="answer-panel-note">' + esc(item.pearl) + "</p></div></div>" : "";
    return '<section aria-labelledby="study-heading"><div class="page-heading"><div><h2 id="study-heading">Study mode</h2><p>Answer, read the reasoning, and keep the questions worth revisiting. Your local session is ready while the content pipeline is being built.</p></div><div class="page-heading-actions">' + tag(item.specialty) + '</div></div><div class="study-layout"><div class="study-main"><div class="card study-control-card"><div class="study-control-info"><span class="section-heading-icon">' + icon("target") + '</span><div><strong>Focused review</strong><span>' + queue.length + ' visible preview questions in this session</span></div></div><div class="study-controls"><label class="select-field"><span class="sr-only">Specialty</span><select id="study-specialty" aria-label="Study specialty">' + specialtyOptions(state.study.specialty) + '</select></label><label class="select-field"><span class="sr-only">Topic</span><select id="study-topic" aria-label="Study topic">' + topicOptions() + '</select></label><button class="button button-quiet" data-action="start-quick-review" type="button">' + icon("spark") + ' Quick review</button></div></div><article class="card question-card"><div class="question-meta"><span class="question-counter">QUESTION ' + ((state.study.index % Math.max(queue.length, 1)) + 1) + " / " + queue.length + '</span><div class="question-meta-actions"><button class="bookmark-button ' + (saved ? "is-saved" : "") + '" data-study-bookmark type="button" aria-label="' + (saved ? "Remove from favorites" : "Add question to Favorites") + '" title="' + (saved ? "Remove from favorites" : "Add question to Favorites") + '">' + icon("bookmark") + '</button><button class="bookmark-button" data-study-hide type="button" aria-label="Do not show this question again" title="Do not show this question again">' + icon("x") + '</button></div></div><h3>' + esc(item.stem) + '</h3><div class="question-options" role="group" aria-label="Answer choices">' + options + '</div>' + explanation + '<div class="question-ai-actions"><button class="button button-quiet" data-study-favorite type="button">' + icon("bookmark") + ' ' + (saved ? "Remove from Favorites" : "Add question to Favorites") + '</button><button class="button button-quiet" data-ask-ai="gpt" type="button">' + icon("spark") + ' Ask GPT AI</button><button class="button button-quiet" data-ask-ai="cloud" type="button">' + icon("cloud") + ' Ask Cloud AI</button><button class="button button-quiet" data-study-hide type="button">Do not show this question again</button></div><div class="question-footer"><div class="question-source">' + icon("bookOpen") + ' Preview question · source page pending</div><button class="button ' + (answered ? "button-primary" : "button-secondary") + '" data-study-next type="button">' + (answered ? "Next question" : "Reveal answer") + " " + icon("arrow") + '</button></div></article></div><aside class="study-aside"><article class="card aside-card"><h3>Session progress</h3><p>Keep the loop small and consistent.</p><div class="session-progress"><div class="session-progress-line"><span style="width:' + sessionPercent + '%"></span></div><div class="session-progress-meta"><span>' + state.study.sessionAnswered + ' answered</span><span>' + state.study.sessionCorrect + ' correct</span></div></div></article><article class="card aside-card"><h3>Confidence by specialty</h3><p>Your recent answers, grouped by the fixed catalog.</p><div class="confidence-list">' + SPECIALTIES.map(function (sp) { var total = state.progress.bySpecialty[sp.key] || 0; var correct = state.progress.correctBySpecialty[sp.key] || 0; var confidence = Math.round((correct / Math.max(total, 1)) * 100); return '<div class="confidence-row"><div class="confidence-label"><span>' + sp.short + '</span><strong>' + confidence + '%</strong></div><div class="confidence-bar"><span style="width:' + confidence + '%"></span></div></div>'; }).join("") + "</div></article></aside></div></section>";
  }

  function renderQuickReview() {
    var queue = quickReviewQueue();
    if (!queue.length) return '<section aria-labelledby="quick-review-heading"><div class="page-heading"><div><h2 id="quick-review-heading">Quick review</h2><p>There are no visible questions in this set yet.</p></div></div>' + studyEmptyState("spark") + "</section>";
    var item = queue[state.quickReview.index % queue.length];
    var revealed = state.quickReview.revealed;
    var saved = state.savedQuestionIds.indexOf(item.id) !== -1;
    var shortExplanation = item.pearl || item.explanation;
    return '<section aria-labelledby="quick-review-heading"><div class="page-heading"><div><h2 id="quick-review-heading">Quick review</h2><p>Tap the card to reveal the answer, then swipe left or right for the next question.</p></div><div class="page-heading-actions"><button class="button button-secondary" data-action="exit-quick-review" type="button">' + icon("undo") + ' Back to study</button></div></div><div class="quick-review-layout"><article class="card quick-review-card" data-quick-review-card aria-label="Reveal the answer for this question" tabindex="0"><div class="quick-review-top"><span class="question-counter">QUESTION ' + (state.quickReview.index % queue.length + 1) + ' / ' + queue.length + '</span><div class="question-meta-actions"><button class="bookmark-button ' + (saved ? "is-saved" : "") + '" data-quick-favorite type="button" aria-label="' + (saved ? "Remove from favorites" : "Add question to Favorites") + '">' + icon("bookmark") + '</button><button class="bookmark-button" data-quick-hide type="button" aria-label="Do not show this question again" title="Do not show this question again">' + icon("x") + '</button></div></div><div class="quick-review-tag">' + tag(item.specialty) + '<span>' + esc(item.topic) + '</span></div><h3>' + esc(item.stem) + '</h3>' + (revealed ? '<div class="quick-review-answer" aria-live="polite"><span class="answer-panel-icon">' + icon("check") + '</span><div><strong>Correct answer · ' + letter(item.answer) + '</strong><p>' + esc(item.options[item.answer]) + '</p><p class="answer-panel-note">' + esc(shortExplanation) + '</p></div></div>' : '<button class="quick-review-reveal" data-quick-reveal type="button">' + icon("spark") + '<strong>Show answer</strong><span>Tap or press Enter</span></button>') + '</article><div class="quick-review-controls"><button class="button button-secondary" data-quick-prev type="button" aria-label="Previous quick review question">' + icon("arrowLeft") + ' Previous</button><span>Swipe to move quickly</span><button class="button button-primary" data-quick-next type="button" aria-label="Next quick review question">Next ' + icon("arrow") + '</button></div></div></section>';
  }

  function examOptions() {
    return '<option value="all">All specialties</option>' + SPECIALTIES.map(function (item) { return '<option value="' + item.key + '" ' + (state.exam.specialty === item.key ? "selected" : "") + ">" + item.label + "</option>"; }).join("");
  }

  function examQuestions(scope) {
    return QUESTIONS.filter(function (item) { return state.hiddenQuestionIds.indexOf(item.id) === -1 && (scope === "all" || item.specialty === scope); });
  }

  function renderExam() {
    if (state.exam.submitted) return renderExamResult();
    if (state.exam.active) return renderExamActive();
    var available = examQuestions(state.exam.specialty);
    var scopeMessage = available.length ? '<p class="form-feedback form-feedback--success" role="status">' + available.length + ' visible questions are ready for this scope.</p>' : '<div class="form-feedback form-feedback--error" role="alert"><strong>No visible questions</strong><span>Restore a hidden question or choose another scope before starting an exam.</span></div>';
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam mode</h2><p>Create a short assessment with the same fixed topics, then review the result while the question bank grows toward the full content model.</p></div><div class="page-heading-actions"><span class="status-tag specialty-tag--cardiac">Ready when you are</span></div></div><div class="exam-layout"><article class="card exam-setup"><h3>Build your exam</h3><p>Choose a scope, set the pace, and use this preview loop to validate the exam experience before the backend question bank arrives.</p><div class="form-grid"><div class="form-field"><label for="exam-specialty">Scope</label><label class="select-field"><select id="exam-specialty" aria-label="Exam specialty">' + examOptions() + '</select></label></div><div class="form-field"><label for="exam-count">Questions</label><label class="number-field"><input id="exam-count" type="number" min="3" max="' + QUESTIONS.length + '" value="' + Math.min(state.exam.count, QUESTIONS.length) + '" aria-label="Number of exam questions" /></label></div><div class="form-field"><label>Order</label><div class="toggle-field"><span>Shuffle questions</span><label class="toggle-input"><input id="exam-randomized" type="checkbox" aria-label="Shuffle exam questions" ' + (state.exam.randomized ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div></div><div class="form-field"><label>Timer</label><div class="toggle-field"><span>10-minute timer</span><label class="toggle-input"><input id="exam-timed" type="checkbox" aria-label="Enable exam timer" ' + (state.exam.timed ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div></div></div>' + scopeMessage + '<div class="form-footer"><button class="button button-primary" id="start-exam" type="button" ' + (available.length ? "" : "disabled") + '>' + icon("exam") + ' Start exam</button></div></article><aside class="card exam-side-card"><h3>What is included</h3><div class="exam-side-list"><div class="exam-side-item"><span>01</span><span>Mark a question for review and return before submitting.</span></div><div class="exam-side-item"><span>02</span><span>See a topic-level score breakdown after submission.</span></div><div class="exam-side-item"><span>03</span><span>Keep your attempt in this browser while offline.</span></div></div></aside></div></section>';
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
      return '<button class="option-button ' + (selected === index ? "is-selected" : "") + '" data-exam-answer="' + index + '" type="button" aria-label="Option ' + letter(index) + ': ' + esc(option) + '" aria-pressed="' + (selected === index ? "true" : "false") + '"><span class="option-key">' + letter(index) + '</span><span>' + esc(option) + '</span><span class="option-status-icon"></span></button>';
    }).join("");
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam mode</h2><p>Answer the set, mark anything you want to revisit, then submit for a topic breakdown.</p></div></div><div class="exam-active"><div class="card exam-toolbar"><div class="exam-toolbar-left"><strong>' + specialty(item.specialty) .label + '</strong><span>' + (state.exam.index + 1) + " of " + queue.length + '</span></div><div class="exam-toolbar-right">' + (state.exam.timed ? '<span class="exam-timer">' + icon("clock") + ' <span id="exam-timer-label">' + formatTimer(state.exam.endsAt - Date.now()) + "</span></span>" : "") + '<button class="button button-quiet" id="exit-exam" type="button">Exit exam</button></div></div><div class="progress-line"><span style="width:' + Math.round(((state.exam.index + 1) / queue.length) * 100) + '%"></span></div><article class="card exam-question"><div class="question-meta"><span class="question-counter">' + (marked ? "MARKED FOR REVIEW" : "QUESTION IN PROGRESS") + '</span><button class="bookmark-button ' + (marked ? "is-saved" : "") + '" id="toggle-review" type="button" aria-label="' + (marked ? "Remove review mark" : "Mark for review") + '" aria-pressed="' + (marked ? "true" : "false") + '">' + icon("bookmark") + '</button></div><h3>' + esc(item.stem) + '</h3><div class="question-options" role="group" aria-label="Answer choices">' + options + '</div><div class="exam-question-footer"><button class="button button-secondary" id="exam-prev" type="button" ' + (state.exam.index === 0 ? "disabled" : "") + '>' + icon("arrowLeft") + ' Previous</button><button class="button button-primary" id="exam-next" type="button">' + (state.exam.index === queue.length - 1 ? "Review submission" : "Next question") + " " + icon("arrow") + '</button></div></article><div class="exam-submit-footer"><button class="button button-secondary" id="submit-exam" type="button">Submit exam</button></div></div></section>';
  }

  function renderExamResult() {
    var result = state.exam.result || { score: 0, total: 0, bySpecialty: {} };
    var percent = result.total ? Math.round((result.score / result.total) * 100) : 0;
    var breakdown = Object.keys(result.bySpecialty).map(function (key) { return '<div class="result-breakdown-row"><span>' + specialty(key).label + '</span><strong>' + result.bySpecialty[key].score + " / " + result.bySpecialty[key].total + "</strong></div>"; }).join("");
    return '<section aria-labelledby="exam-heading"><div class="page-heading"><div><h2 id="exam-heading">Exam mode</h2><p>Review the result and use the breakdown to choose your next study set.</p></div></div><div class="exam-layout"><article class="card exam-result"><div class="score-ring" style="--score:' + percent + '%" data-score="' + percent + '%"></div><div><h3>Exam complete</h3><p>' + (percent >= 80 ? "Strong recall across the set." : percent >= 60 ? "Good foundation. Review the misses once more." : "Use the breakdown to target your next short session.") + '</p><div class="result-breakdown"><div class="result-breakdown-row"><span>Correct</span><strong>' + result.score + " / " + result.total + "</strong></div>" + breakdown + '</div><div class="page-heading-actions" style="justify-content:flex-start;margin-top:20px"><button class="button button-primary" id="restart-exam" type="button">Try another set ' + icon("arrow") + '</button><button class="button button-secondary" data-nav="study" type="button">Study misses</button></div></div></article><aside class="card exam-side-card"><h3>Keep the momentum</h3><div class="exam-side-list"><div class="exam-side-item"><span>' + icon("bookmark") + '</span><span>Missed questions remain available in Study mode.</span></div><div class="exam-side-item"><span>' + icon("chart") + '</span><span>Your local progress counters were updated at submission.</span></div></div></aside></div></section>';
  }

  function renderProgress() {
    var accuracy = Math.round((state.progress.correct / Math.max(state.progress.answered, 1)) * 100);
    var bars = [34, 54, 43, 67, 48, 76, 58];
    var topics = [["Peripheral Arterial Disease", "vascular", 68], ["Pleural Effusion", "thoracic", 42], ["Coronary Artery Disease", "cardiac", 76], ["Carotid Artery Disease", "vascular", 31], ["Valve Disease", "cardiac", 55]];
    return '<section aria-labelledby="progress-heading"><div class="page-heading"><div><h2 id="progress-heading">Progress that compounds</h2><p>Track recall across the catalog and let the next session follow the gaps. The figures below are stored locally in this preview.</p></div><div class="page-heading-actions"><button class="button button-primary" data-nav="study" type="button">' + icon("study") + ' Practice now</button></div></div><div class="progress-layout"><div><div class="progress-overview"><article class="card progress-overview-card"><p>Overall accuracy</p><strong>' + accuracy + '%</strong><small>+6% this week</small></article><article class="card progress-overview-card"><p>Questions answered</p><strong>' + state.progress.answered + '</strong><small>+8 this week</small></article><article class="card progress-overview-card"><p>Active streak</p><strong>' + state.progress.streak + 'd</strong><small>Keep it going</small></article></div><article class="card chart-card"><h3>Weekly study activity</h3><p class="chart-subtitle">Questions reviewed per day</p><div class="large-bar-chart" aria-label="Weekly study activity bar chart">' + bars.map(function (value, index) { return '<div class="large-bar"><span style="height:' + value + '%"></span><small>' + ["M", "T", "W", "T", "F", "S", "S"][index] + "</small></div>"; }).join("") + '</div></article></div><article class="card progress-topic-card"><h3>Topic momentum</h3><div class="progress-topic-list">' + topics.map(function (row) { return '<div class="progress-topic-row"><div class="progress-topic-row-top"><span>' + row[0] + '</span><strong>' + row[2] + '%</strong></div><div class="progress-topic-bar progress-topic-bar--' + row[1] + '"><span style="width:' + row[2] + '%"></span></div></div>'; }).join("") + "</div></article></div></section>";
  }

  function renderFavorites() {
    var favorites = state.savedQuestionIds.map(question).filter(Boolean);
    var grouped = BOOKS.map(function (book) {
      return { book: book, questions: favorites.filter(function (item) { return item.specialty === book.specialty; }) };
    });
    var cards = grouped.map(function (group) {
      var list = group.questions.length ? group.questions.map(function (item) {
        return '<button class="favorite-question" data-favorite-question="' + item.id + '" type="button"><span class="favorite-question-topic">' + esc(item.topic) + '</span><span>' + esc(item.stem) + '</span><span class="favorite-question-arrow">' + icon("arrow") + '</span></button>';
      }).join("") : '<div class="favorite-empty">No favorite questions in this book yet.</div>';
      return '<article class="card favorite-book-card"><div class="favorite-book-header"><span class="book-cover book-cover--' + group.book.specialty + '">' + group.book.code + '</span><div><h3>' + esc(group.book.title) + '</h3><p>' + group.questions.length + ' favorite ' + (group.questions.length === 1 ? 'question' : 'questions') + '</p></div><span class="favorite-count">' + group.questions.length + '</span></div><div class="favorite-question-list">' + list + '</div></article>';
    }).join("");
    return '<section aria-labelledby="favorites-heading"><div class="page-heading"><div><h2 id="favorites-heading">Favorites</h2><p>Keep the questions you want to revisit close at hand. Favorites are stored locally on this device.</p></div><div class="page-heading-actions"><span class="status-tag specialty-tag--cardiac">' + favorites.length + ' saved</span><button class="button button-primary" data-nav="study" type="button">' + icon("study") + ' Add from study</button></div></div><div class="favorite-summary"><span class="section-heading-icon">' + icon("bookmark") + '</span><div><strong>' + favorites.length + ' favorite ' + (favorites.length === 1 ? 'question' : 'questions') + '</strong><span>Organized by book for focused revision.</span></div></div><div class="favorites-grid">' + cards + '</div></section>';
  }

  function renderSettings() {
    var hidden = state.hiddenQuestionIds.map(question).filter(Boolean);
    var hiddenList = hidden.length ? '<div class="hidden-question-list">' + hidden.map(function (item) {
      return '<div class="hidden-question-row"><div><strong>' + esc(item.topic) + '</strong><p>' + esc(item.stem) + '</p></div><button class="button button-quiet" data-restore-question="' + item.id + '" type="button">Restore</button></div>';
    }).join("") + '</div><button class="button button-secondary" id="restore-all-hidden" type="button">Restore all hidden questions</button>' : '<div class="settings-empty">No questions are hidden.</div>';
    var notice = backupNotice ? '<div class="settings-feedback settings-feedback--' + backupNotice.type + '" role="status" aria-live="polite">' + esc(backupNotice.message) + '</div>' : '';
    return '<section aria-labelledby="settings-heading"><div class="page-heading"><div><h2 id="settings-heading">Settings</h2><p>Keep the study workspace comfortable on a phone, tablet, or desktop. These preferences stay in this browser for now.</p></div></div><div class="settings-layout"><div class="settings-main"><article class="card settings-card"><h3>Workspace preferences</h3><p>Everything in this preview is English-only, matching the product foundation.</p><div class="settings-row"><div class="settings-label"><h4>Appearance</h4><p>Choose a light or dark reading surface.</p></div><label class="toggle-input theme-toggle"><input id="theme-toggle" type="checkbox" aria-label="Use dark theme" ' + (state.theme === "dark" ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div><div class="settings-row"><div class="settings-label"><h4>Content language</h4><p>Questions, explanations, and controls use one consistent language.</p></div><div class="settings-select select-field"><select aria-label="Content language" disabled><option>English</option></select></div></div><div class="settings-row"><div class="settings-label"><h4>Local progress</h4><p>Clear the preview answers and return to the starting counters.</p></div><button class="button button-secondary" id="reset-progress" type="button">Reset local progress</button></div></article><article class="card settings-card backup-card"><div class="settings-section-heading"><div><h3>Local backup</h3><p>Export your favorites, hidden questions, filters, theme, progress, and study sessions as a JSON file.</p></div><span class="settings-badge">JSON</span></div><div class="backup-actions"><button class="button button-primary" id="export-backup" type="button">Export backup</button><button class="button button-secondary" id="import-backup" type="button">Import backup</button><input id="backup-file" type="file" accept="application/json,.json" hidden /></div>' + notice + '</article><article class="card settings-card hidden-settings-card"><div class="settings-section-heading"><div><h3>Hidden questions</h3><p>Questions you hide stay out of future study and exam sessions until you restore them.</p></div><span class="settings-badge">' + hidden.length + ' hidden</span></div>' + hiddenList + '</article></div><aside class="settings-side"><article class="card aside-card"><h3>Connection</h3><p>Study remains available with the cached preview. Results are ready to sync when the backend is connected.</p><span class="settings-badge" id="settings-connection-badge">' + (navigator.onLine ? "Online · ready to sync" : "Offline · local only") + '</span></article><article class="card aside-card"><h3>Release channel</h3><p>Central updates are enabled through the PWA service worker, with a safe cache boundary for the shell.</p><span class="settings-badge">v0.2 local tools</span></article></aside></div></section>';
  }

  function recordAnswer(item, correct) {
    state.progress.answered += 1;
    state.progress.bySpecialty[item.specialty] = (state.progress.bySpecialty[item.specialty] || 0) + 1;
    if (correct) {
      state.progress.correct += 1;
      state.progress.correctBySpecialty[item.specialty] = (state.progress.correctBySpecialty[item.specialty] || 0) + 1;
    }
  }

  function toggleFavorite(id) {
    var position = state.savedQuestionIds.indexOf(id);
    if (position === -1) {
      state.savedQuestionIds.push(id);
      showToast("Question added to Favorites.");
    } else {
      state.savedQuestionIds.splice(position, 1);
      showToast("Question removed from Favorites.");
    }
  }

  function hideQuestion(id) {
    if (state.hiddenQuestionIds.indexOf(id) === -1) state.hiddenQuestionIds.push(id);
    state.study.answered = false;
    state.study.selected = null;
    state.quickReview.revealed = false;
    showToast("Question hidden from future study sessions.");
    render();
  }

  function restoreQuestion(id) {
    state.hiddenQuestionIds = state.hiddenQuestionIds.filter(function (questionId) { return questionId !== id; });
    showToast("Question restored to your study sessions.");
    render();
  }

  function questionPrompt(item) {
    return [
      "Please help me review this surgery multiple-choice question.",
      "Explain why the correct option is best and briefly address the alternatives.",
      "Question: " + item.stem,
      "Options:",
      item.options.map(function (option, index) { return letter(index) + ". " + option; }).join("\n")
    ].join("\n\n");
  }

  function askAi(provider, item) {
    var prompt = questionPrompt(item);
    var baseUrl = provider === "gpt" ? "https://chatgpt.com/?q=" : "https://claude.ai/new?q=";
    var opened = window.open(baseUrl + encodeURIComponent(prompt), "_blank", "noopener,noreferrer");
    if (!opened && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(prompt).then(function () { showToast("The question was copied. Paste it into the AI app."); }).catch(function () { showToast("Allow pop-ups to open the AI app."); });
    } else if (!opened) {
      showToast("Allow pop-ups to open the AI app.");
    }
  }

  function setBackupNotice(type, message) {
    backupNotice = { type: type, message: message };
  }

  function exportBackup() {
    try {
      var payload = {
        format: BACKUP_FORMAT,
        version: BACKUP_VERSION,
        exportedAt: new Date().toISOString(),
        app: "Atlas MCQs",
        state: stateSnapshot(state)
      };
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = "atlas-mcqs-backup-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 0);
      setBackupNotice("success", "Backup exported successfully. Keep the JSON file somewhere safe.");
      showToast("Backup exported successfully.");
      render();
    } catch (error) {
      setBackupNotice("error", "The backup could not be exported from this browser.");
      showToast("The backup could not be exported.", "error");
      render();
    }
  }

  function validateBackup(payload) {
    if (!isObject(payload) || payload.format !== BACKUP_FORMAT || payload.version !== BACKUP_VERSION || !isObject(payload.state)) {
      return { valid: false, message: "This file is not a valid Atlas MCQs backup. Choose a JSON backup exported from Settings." };
    }
    var source = payload.state;
    if (!Array.isArray(source.savedQuestionIds) || !Array.isArray(source.hiddenQuestionIds) || !isObject(source.study) || !isObject(source.progress) || (source.theme !== "light" && source.theme !== "dark")) {
      return { valid: false, message: "The backup is missing required Atlas MCQs data and was not imported." };
    }
    return { valid: true, state: normalizeState(source) };
  }

  function importBackupText(text) {
    var payload;
    try {
      payload = JSON.parse(text);
    } catch (error) {
      setBackupNotice("error", "The selected file is not valid JSON. Your current data is unchanged.");
      showToast("Invalid backup file. Your current data is unchanged.", "error");
      render();
      return;
    }
    var validation = validateBackup(payload);
    if (!validation.valid) {
      setBackupNotice("error", validation.message + " Your current data is unchanged.");
      showToast("Invalid backup file. Your current data is unchanged.", "error");
      render();
      return;
    }
    if (!persistState(validation.state)) {
      setBackupNotice("error", "The backup could not be saved in this browser. Your current data is unchanged.");
      showToast("Import failed. Your current data is unchanged.", "error");
      render();
      return;
    }
    clearInterval(examTimer);
    state = validation.state;
    setBackupNotice("success", "Backup imported successfully. Your local study workspace has been restored.");
    showToast("Backup imported successfully.");
    render();
  }

  function importBackupFile(file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setBackupNotice("error", "This backup file is too large. Choose a JSON file smaller than 2 MB. Your current data is unchanged.");
      showToast("Backup is too large. Your current data is unchanged.", "error");
      render();
      return;
    }
    var reader = new FileReader();
    reader.onload = function () { importBackupText(String(reader.result || "")); };
    reader.onerror = function () {
      setBackupNotice("error", "The backup could not be read. Your current data is unchanged.");
      showToast("Import failed. Your current data is unchanged.", "error");
      render();
    };
    reader.readAsText(file);
  }

  function startQuickReview() {
    var queue = studyQueue();
    if (!queue.length) {
      showToast("There are no visible questions in this study set.");
      return;
    }
    state.quickReview = { active: true, queue: queue.map(function (item) { return item.id; }), index: 0, revealed: false };
    navigate("quick-review");
  }

  function moveQuickReview(step) {
    var queue = quickReviewQueue();
    if (!queue.length) return;
    state.quickReview.index = (state.quickReview.index + step + queue.length) % queue.length;
    state.quickReview.revealed = false;
    render();
  }

  function openFavoriteQuestion(id) {
    var item = question(id);
    if (!item || state.hiddenQuestionIds.indexOf(id) !== -1) {
      showToast("Restore this question before studying it.");
      return;
    }
    state.study.specialty = item.specialty;
    state.study.topic = item.topic;
    state.study.index = 0;
    state.study.answered = false;
    state.study.selected = null;
    navigate("study");
  }

  function studyAnswer(index) {
    if (state.study.answered) return;
    var item = currentStudyQuestion();
    if (!item) return;
    var correct = Number(index) === item.answer;
    state.study.selected = Number(index);
    state.study.answered = true;
    state.study.sessionAnswered += 1;
    if (correct) state.study.sessionCorrect += 1;
    recordAnswer(item, correct);
    state.activity.unshift({ initials: specialty(item.specialty).short.slice(0, 2).toUpperCase(), text: (correct ? "Answered" : "Reviewed") + " a " + specialty(item.specialty).short.toLowerCase() + " question", time: "Just now", result: correct ? "Correct" : "Review" });
    state.activity = state.activity.slice(0, 4);
    render();
  }

  function startExam() {
    var scope = document.getElementById("exam-specialty").value;
    var count = Number(document.getElementById("exam-count").value || QUESTIONS.length);
    var randomized = document.getElementById("exam-randomized").checked;
    var timed = document.getElementById("exam-timed").checked;
    var items = examQuestions(scope).slice();
    if (!items.length) {
      showToast("There are no visible questions in this exam scope.");
      return;
    }
    if (randomized) items.sort(function () { return Math.random() - 0.5; });
    state.exam = { active: true, submitted: false, specialty: scope, count: Math.min(Math.max(count, 3), items.length), randomized: randomized, timed: timed, queue: items.slice(0, Math.min(Math.max(count, 3), items.length)).map(function (item) { return item.id; }), index: 0, answers: {}, reviewed: {}, endsAt: timed ? Date.now() + 600000 : null, result: null };
    clearInterval(examTimer);
    showToast("Exam started. You can mark questions and return before submitting.");
    render();
  }

  function formatTimer(milliseconds) {
    var seconds = Math.max(0, Math.ceil(milliseconds / 1000));
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
  }

  function startExamTimer() {
    clearInterval(examTimer);
    if (!state.exam.active || !state.exam.timed || !state.exam.endsAt) return;
    examTimer = setInterval(function () {
      if (Date.now() >= state.exam.endsAt) {
        submitExam();
        return;
      }
      var label = document.getElementById("exam-timer-label");
      if (label) label.textContent = formatTimer(state.exam.endsAt - Date.now());
    }, 1000);
  }

  function submitExam() {
    if (!state.exam.active || state.exam.submitted) return;
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
    state.activity.unshift({ initials: "EX", text: "Completed a focused exam", time: "Just now", result: result.score + " / " + result.total });
    state.activity = state.activity.slice(0, 4);
    showToast("Exam submitted. Your topic breakdown is ready.");
    render();
  }

  function updateConnection() {
    var online = navigator.onLine;
    var pill = document.getElementById("connection-pill");
    var label = document.getElementById("connection-label");
    var sidebarStatus = document.getElementById("sidebar-sync-status");
    if (pill) {
      pill.classList.toggle("is-online", online);
      pill.classList.toggle("is-offline", !online);
    }
    if (label) label.textContent = online ? "Online" : "Offline";
    if (sidebarStatus) sidebarStatus.textContent = online ? "Ready to sync" : "Local mode";
    var badge = document.getElementById("settings-connection-badge");
    if (badge) badge.textContent = online ? "Online · ready to sync" : "Offline · local only";
  }

  function showUpdateNotice() {
    var notice = document.getElementById("update-notice");
    if (notice) notice.hidden = false;
  }

  function setupServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (!swRefreshing) return;
      swRefreshing = false;
      window.location.reload();
    });
    navigator.serviceWorker.register("service-worker.js").then(function (registration) {
      swRegistration = registration;
      if (registration.waiting) showUpdateNotice();
      registration.addEventListener("updatefound", function () {
        var worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", function () {
          if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdateNotice();
        });
      });
    }).catch(function () {});
  }

  function showToast(message, tone) {
    clearTimeout(toastTimer);
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var toast = document.createElement("div");
    toast.className = "toast" + (tone === "error" ? " toast--error" : "");
    toast.setAttribute("role", tone === "error" ? "alert" : "status");
    toast.setAttribute("aria-live", tone === "error" ? "assertive" : "polite");
    toast.innerHTML = '<span class="toast-dot"></span><span>' + esc(message) + "</span>";
    document.body.appendChild(toast);
    toastTimer = setTimeout(function () { toast.classList.add("is-leaving"); setTimeout(function () { toast.remove(); }, 180); }, 2800);
  }

  function resetProgress() {
    var fresh = initialState();
    state.savedQuestionIds = fresh.savedQuestionIds;
    state.hiddenQuestionIds = fresh.hiddenQuestionIds;
    state.progress = fresh.progress;
    state.study = fresh.study;
    state.quickReview = fresh.quickReview;
    state.activity = fresh.activity;
    showToast("Local preview progress reset.");
    render();
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest("#refresh-app")) {
      var notice = document.getElementById("update-notice");
      if (notice) notice.hidden = true;
      if (swRegistration && swRegistration.waiting) {
        swRefreshing = true;
        swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
      } else {
        window.location.reload();
      }
      return;
    }
    if (event.target.closest("#dismiss-update")) {
      var updateNotice = document.getElementById("update-notice");
      if (updateNotice) updateNotice.hidden = true;
      return;
    }
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
    if (event.target.closest("[data-action='reset-study-filters']")) { state.study.specialty = "all"; state.study.topic = "all"; state.study.index = 0; state.study.answered = false; state.study.selected = null; render(); return; }
    if (event.target.closest("[data-action='start-quick-review']")) { startQuickReview(); return; }
    if (event.target.closest("[data-action='exit-quick-review']")) { state.quickReview.active = false; navigate("study"); return; }
    var favoriteQuestion = event.target.closest("[data-favorite-question]");
    if (favoriteQuestion) { openFavoriteQuestion(favoriteQuestion.dataset.favoriteQuestion); return; }
    if (event.target.closest("[data-quick-review-card]") && quickReviewIgnoreClick) {
      quickReviewIgnoreClick = false;
      return;
    }
    if ((event.target.closest("[data-quick-reveal]") || event.target.closest("[data-quick-review-card]")) && !event.target.closest("[data-quick-favorite]") && !event.target.closest("[data-quick-hide]")) {
      state.quickReview.revealed = true;
      render();
      return;
    }
    if (event.target.closest("[data-quick-prev]")) { moveQuickReview(-1); return; }
    if (event.target.closest("[data-quick-next]")) { moveQuickReview(1); return; }
    if (event.target.closest("[data-quick-favorite]")) {
      var quickItem = quickReviewQueue()[state.quickReview.index];
      if (quickItem) { toggleFavorite(quickItem.id); render(); }
      return;
    }
    if (event.target.closest("[data-quick-hide]")) {
      var quickHiddenItem = quickReviewQueue()[state.quickReview.index];
      if (quickHiddenItem) hideQuestion(quickHiddenItem.id);
      return;
    }
    var aiButton = event.target.closest("[data-ask-ai]");
    if (aiButton) {
      var aiItem = currentStudyQuestion();
      if (aiItem) askAi(aiButton.dataset.askAi, aiItem);
      return;
    }
    var studyOption = event.target.closest("[data-study-answer]");
    if (studyOption) { studyAnswer(studyOption.dataset.studyAnswer); return; }
    if (event.target.closest("[data-study-favorite]")) {
      var favoriteItem = currentStudyQuestion();
      if (favoriteItem) { toggleFavorite(favoriteItem.id); render(); }
      return;
    }
    if (event.target.closest("[data-study-bookmark]")) {
      var current = currentStudyQuestion().id;
      toggleFavorite(current);
      render();
      return;
    }
    if (event.target.closest("[data-study-hide]")) {
      var hiddenItem = currentStudyQuestion();
      if (hiddenItem) hideQuestion(hiddenItem.id);
      return;
    }
    if (event.target.closest("[data-study-next]")) {
      var nextItem = currentStudyQuestion();
      if (!nextItem) return;
      if (!state.study.answered) { state.study.answered = true; state.study.selected = nextItem.answer; } else { state.study.index += 1; state.study.answered = false; state.study.selected = null; }
      render();
      return;
    }
    if (event.target.closest("#start-exam")) { startExam(); return; }
    var examOption = event.target.closest("[data-exam-answer]");
    if (examOption) {
      var examItem = examQueue()[state.exam.index];
      if (examItem) { state.exam.answers[examItem.id] = Number(examOption.dataset.examAnswer); render(); }
      return;
    }
    if (event.target.closest("#exam-next")) {
      if (state.exam.index < examQueue().length - 1) state.exam.index += 1; else showToast("Review your answers or submit when you are ready.");
      render();
      return;
    }
    if (event.target.closest("#exam-prev")) { state.exam.index = Math.max(0, state.exam.index - 1); render(); return; }
    if (event.target.closest("#toggle-review")) {
      var reviewItem = examQueue()[state.exam.index];
      if (reviewItem) state.exam.reviewed[reviewItem.id] = !state.exam.reviewed[reviewItem.id];
      render();
      return;
    }
    if (event.target.closest("#submit-exam")) { submitExam(); return; }
    if (event.target.closest("#exit-exam")) { state.exam.active = false; clearInterval(examTimer); showToast("Exam paused. Your answers are kept in this browser."); render(); return; }
    if (event.target.closest("#restart-exam")) { state.exam.submitted = false; state.exam.result = null; navigate("exam"); return; }
    if (event.target.closest("#export-backup")) { exportBackup(); return; }
    if (event.target.closest("#import-backup")) { var backupInput = document.getElementById("backup-file"); if (backupInput) backupInput.click(); return; }
    var restoreButton = event.target.closest("[data-restore-question]");
    if (restoreButton) { restoreQuestion(restoreButton.dataset.restoreQuestion); return; }
    if (event.target.closest("#restore-all-hidden")) {
      state.hiddenQuestionIds = [];
      showToast("All hidden questions restored.");
      render();
      return;
    }
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
    } else if (event.target.id === "theme-toggle") {
      state.theme = event.target.checked ? "dark" : "light";
      render();
    } else if (event.target.id === "exam-specialty") {
      state.exam.specialty = validSpecialty(event.target.value) ? event.target.value : "all";
      render();
    } else if (event.target.id === "exam-count") {
      state.exam.count = integer(event.target.value, state.exam.count, 3, QUESTIONS.length);
      saveState();
    } else if (event.target.id === "exam-randomized") {
      state.exam.randomized = event.target.checked;
      saveState();
    } else if (event.target.id === "exam-timed") {
      state.exam.timed = event.target.checked;
      saveState();
    } else if (event.target.id === "backup-file") {
      importBackupFile(event.target.files && event.target.files[0]);
      event.target.value = "";
    }
  });

  document.addEventListener("input", function (event) {
    if (event.target.id !== "topic-search") return;
    state.topicSearch = event.target.value;
    saveState();
    var cursor = event.target.selectionStart;
    var results = document.getElementById("topic-results");
    if (results) results.innerHTML = topicResults();
    window.requestAnimationFrame(function () {
      var input = document.getElementById("topic-search");
      if (input) { input.focus(); input.setSelectionRange(cursor, cursor); }
    });
  });

  window.addEventListener("online", updateConnection);
  window.addEventListener("offline", updateConnection);
  document.addEventListener("pointerdown", function (event) {
    if (event.target.closest("[data-quick-review-card]")) quickReviewPointerStartX = event.clientX;
  });
  document.addEventListener("pointerup", function (event) {
    if (quickReviewPointerStartX === null || !event.target.closest("[data-quick-review-card]")) return;
    var distance = event.clientX - quickReviewPointerStartX;
    quickReviewPointerStartX = null;
    if (Math.abs(distance) < 48) return;
    quickReviewIgnoreClick = true;
    moveQuickReview(distance < 0 ? 1 : -1);
    setTimeout(function () { quickReviewIgnoreClick = false; }, 500);
  });
  document.addEventListener("keydown", function (event) {
    if (state.view !== "quick-review") return;
    if (event.key === "Enter" && event.target.closest("[data-quick-review-card]")) {
      state.quickReview.revealed = true;
      render();
    } else if (event.key === "ArrowRight") {
      moveQuickReview(1);
    } else if (event.key === "ArrowLeft") {
      moveQuickReview(-1);
    }
  });
  document.documentElement.dataset.theme = state.theme;
  renderIcons(document);
  render();

  window.addEventListener("load", setupServiceWorker);
}());
