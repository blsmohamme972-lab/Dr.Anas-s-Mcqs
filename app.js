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
    zap: '<svg viewBox="0 0 24 24"><path d="M13 3 5 13h6l-1 8 8-10h-6z"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24"><path d="m4 4 16 16"/><path d="M6.5 7.7A14 14 0 0 0 2.5 12c1 1.5 4.5 6 9.5 6a9 9 0 0 0 3.4-.7M10.6 6.1A9 9 0 0 1 12 6c5 0 8.5 4.5 9.5 6a14 14 0 0 1-2.6 3"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M5 5h14v10H9l-4 4z"/></svg>',
    undo: '<svg viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>'
  };

  var SPECIALTIES = [
    { key: "vascular", label: "Vascular Surgery", short: "Vascular" },
    { key: "thoracic", label: "Thoracic Surgery", short: "Thoracic" },
    { key: "cardiac", label: "Cardiac Surgery", short: "Cardiac" }
  ];

  var TOPIC_GROUPS = {
    vascular: ["Vascular Biology & Pharmacology", "Vascular Diagnostics & Imaging", "Atherosclerosis & Medical Therapy", "Carotid & Vertebral Disease", "Abdominal Aortic Aneurysm", "Thoracoabdominal Aortic Disease", "Aortoiliac Occlusive Disease", "Infrainguinal Disease & Claudication", "Chronic Limb-Threatening Ischemia", "Acute Limb Ischemia & Compartment Syndrome", "Mesenteric Ischemia", "Renovascular Disease", "Upper Extremity & Thoracic Outlet", "Peripheral & Visceral Aneurysms", "Vasculitis & Vasospastic Disorders", "Venous Thromboembolism", "Chronic Venous Disease & Varicose Veins", "Lymphedema & Vascular Malformations", "Hemodialysis Access", "Vascular Trauma", "Diabetic Foot & Amputation", "Endovascular Techniques & Graft Complications"],
    thoracic: ["Esophageal Anatomy & Physiology", "Esophageal Motility Disorders & Diverticula", "GERD & Hiatal Hernia", "Barrett Esophagus", "Esophageal Cancer", "Esophageal Perforation & Caustic Injury", "Benign Esophageal Tumors & Strictures", "Lung Cancer", "Pulmonary Nodules & Metastases", "Benign Lung Disease & Infection", "Pleural Effusion & Empyema", "Pneumothorax", "Pleural Tumors & Mesothelioma", "Mediastinal Masses", "Mediastinitis & SVC Syndrome", "Trachea & Airway", "Chest Wall & Diaphragm", "Thoracic Trauma", "Lung Transplantation & Emphysema Surgery", "Pulmonary Physiology & Preoperative Evaluation", "Thoracic Techniques & Postoperative Care", "Pediatric & Congenital Thoracic"],
    cardiac: ["Cardiac Anatomy & Physiology", "Cardiopulmonary Bypass & Myocardial Protection", "Coronary Artery Disease & CABG", "Myocardial Infarction & Its Complications", "Aortic Valve Disease", "Mitral Valve Disease", "Tricuspid & Pulmonary Valve Disease", "Prosthetic Valves & Anticoagulation", "Infective Endocarditis", "Aortic Dissection", "Thoracic Aortic Aneurysm", "Heart Failure & Mechanical Support", "Heart Transplantation", "Arrhythmias & Surgical Ablation", "Pericardial Disease", "Cardiac Tumors", "Cardiac Trauma", "Acyanotic Congenital Heart Disease", "Cyanotic Congenital Heart Disease", "Perioperative Care & Complications", "Cardiac Imaging & Hemodynamics", "Pulmonary Embolism & Pulmonary Hypertension"]
  };

  var TOPICS = [];
  SPECIALTIES.forEach(function (sp) {
    TOPIC_GROUPS[sp.key].forEach(function (name) { TOPICS.push({ name: name, specialty: sp.key }); });
  });

  var BOOKS = [];
  var QUESTIONS = [];
  var BY_ID = {};
  var DATA_STATE = "loading";

  var PAGE_COPY = {
    home: ["Dr.Anas's MCQs", "Home"],
    books: ["Your library", "Books"],
    book: ["Book", "Book"],
    topics: ["66 topics", "Topics"],
    study: ["Study mode", "Study"],
    exam: ["Exam mode", "Exam"],
    quick: ["Rapid review", "Quick review"],
    favorites: ["Your saved questions", "Favorites"],
    progress: ["Your results", "Progress"],
    settings: ["Preferences", "Settings"]
  };

  var STORAGE_KEY = "dranas-mcqs-state-v3";
  var LEGACY_KEY = "atlas-mcqs-local-state-v2";
  var TIMER_CHOICES = [[0, "Off"], [30, "30 sec"], [60, "1 min"], [120, "2 min"], [180, "3 min"]];

  var state = loadState();
  var toastTimer = null;
  var examTimer = null;

  // ---------- state ----------

  function freshFilters() {
    return { book: "all", scope: "all", chapter: "all" };
  }

  function initialState() {
    return {
      view: "home",
      bookId: null,
      topicFilter: "all",
      topicSearch: "",
      theme: "light",
      savedQuestionIds: [],
      hiddenQuestionIds: [],
      seen: {},
      quick: { index: 0, dir: "next" },
      progress: { answered: 0, correct: 0 },
      study: Object.assign(freshFilters(), { ids: null, index: 0, answered: false, revealed: false, pick: [], sessionAnswered: 0, sessionCorrect: 0 }),
      exam: Object.assign(freshFilters(), { active: false, submitted: false, count: 20, feedback: "end", reviewFilter: "wrong", randomized: true, timerSeconds: 0, timerCustom: false, queue: [], index: 0, answers: {}, locked: {}, reviewed: {}, qEndsAt: null, result: null })
    };
  }

  function loadState() {
    var base = initialState();
    try {
      var stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!stored) {
        var legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "null");
        if (legacy && legacy.theme) base.theme = legacy.theme;
        return base;
      }
      ["view", "bookId", "topicFilter", "topicSearch", "theme"].forEach(function (key) { if (stored[key] !== undefined) base[key] = stored[key]; });
      ["savedQuestionIds", "hiddenQuestionIds"].forEach(function (key) { if (Array.isArray(stored[key])) base[key] = stored[key]; });
      if (stored.seen && typeof stored.seen === "object") base.seen = stored.seen;
      base.quick = Object.assign(base.quick, stored.quick || {});
      base.progress = Object.assign(base.progress, stored.progress || {});
      base.study = Object.assign(base.study, stored.study || {});
      if (!Array.isArray(base.study.pick)) base.study.pick = [];
      base.exam = Object.assign(base.exam, stored.exam || {}, { active: false, submitted: false, queue: [], answers: {}, locked: {}, reviewed: {}, result: null });
    } catch (error) {}
    return base;
  }

  function saveState() {
    try {
      var keepView = ["study", "quick", "book", "books", "topics", "favorites", "progress", "settings"].indexOf(state.view) !== -1;
      var snapshot = Object.assign({}, state, { view: keepView ? state.view : "home", exam: Object.assign({}, state.exam, { active: false, submitted: false, queue: [], answers: {}, locked: {}, reviewed: {}, result: null }) });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch (error) {}
  }

  function cleanState() {
    function keep(id) { return Boolean(BY_ID[id]); }
    state.savedQuestionIds = state.savedQuestionIds.filter(keep);
    state.hiddenQuestionIds = state.hiddenQuestionIds.filter(keep);
    Object.keys(state.seen).forEach(function (id) { if (!keep(id)) delete state.seen[id]; });
    if (state.study.ids) { state.study.ids = state.study.ids.filter(keep); if (!state.study.ids.length) state.study.ids = null; }
    [state.study, state.exam].forEach(function (f) {
      if (f.book !== "all" && !book(f.book)) f.book = "all";
      if (!validScope(f.scope)) f.scope = "all";
      if (f.chapter !== "all" && !chapterOf(f.book, f.chapter)) f.chapter = "all";
    });
    if (state.view === "book" && !book(state.bookId)) state.view = "books";
  }

  // ---------- data ----------

  function normalize(q, b) {
    q.book = b.id;
    q.answer = Array.isArray(q.answer) ? q.answer : String(q.answer || "").split("");
    q.ans = q.answer.map(function (l) { return String(l).toUpperCase().charCodeAt(0) - 65; }).filter(function (i) { return i >= 0 && i < q.options.length; });
    if (!q.type) q.type = q.ans.length > 1 ? "multi" : "single";
    q.images = (q.images || []).map(function (path) { return "data/images/" + b.id + "/" + String(path).split("/").pop(); });
    q.explanation = q.explanation || "";
    if (!q.specialty) { var t = topic(q.topic); q.specialty = t ? t.specialty : b.specialty; }
    return q;
  }

  function loadData() {
    DATA_STATE = "loading";
    render();
    fetch("data/books.json", { cache: "no-cache" }).then(function (response) {
      if (!response.ok) throw new Error("books");
      return response.json();
    }).then(function (meta) {
      var list = meta.books || [];
      return Promise.all(list.map(function (b) {
        return fetch("data/questions/" + b.file, { cache: "no-cache" }).then(function (response) {
          if (!response.ok) throw new Error(b.file);
          return response.json();
        }).then(function (items) { return items.map(function (q) { return normalize(q, b); }); });
      })).then(function (lists) { return { books: list, lists: lists }; });
    }).then(function (data) {
      BOOKS = data.books;
      QUESTIONS = [].concat.apply([], data.lists);
      BY_ID = {};
      QUESTIONS.forEach(function (q) { BY_ID[q.id] = q; });
      BOOKS.forEach(function (b) { b.count = QUESTIONS.filter(function (q) { return q.book === b.id; }).length; });
      DATA_STATE = "ready";
      cleanState();
      render();
      prefetchImages();
    }).catch(function () {
      DATA_STATE = "error";
      render();
    });
  }

  function prefetchImages() {
    var urls = BOOKS.map(function (b) { return b.cover; }).filter(Boolean);
    QUESTIONS.forEach(function (q) { urls = urls.concat(q.images); });
    var i = 0;
    (function next() {
      if (i >= urls.length) return;
      fetch(urls[i++]).catch(function () {}).then(function () { setTimeout(next, 150); });
    }());
  }

  // ---------- helpers ----------

  function icon(name) { return ICONS[name] || ""; }

  function esc(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function txt(value) { return esc(value).replace(/\n/g, "<br>"); }

  function mod(n, m) { return ((n % m) + m) % m; }

  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  function pct(a, b) { return b ? Math.round((a / b) * 100) + "%" : "—"; }

  function letter(index) { return String.fromCharCode(65 + index); }

  function specialty(key) { return SPECIALTIES.find(function (item) { return item.key === key; }) || SPECIALTIES[0]; }

  function question(id) { return BY_ID[id]; }

  function topic(name) { return TOPICS.find(function (item) { return item.name === name; }); }

  function book(id) { return BOOKS.find(function (b) { return b.id === id; }); }

  function chapterOf(bookId, chapterId) {
    var b = book(bookId);
    return b && b.chapters ? b.chapters.find(function (c) { return c.id === chapterId; }) : null;
  }

  function tag(key) {
    var item = specialty(key);
    return '<span class="specialty-tag specialty-tag--' + item.key + '">' + esc(item.short) + '</span>';
  }

  function answerLetters(q) { return q.ans.map(letter).join(", "); }

  function sameSet(a, b) {
    if (!a || a.length !== b.length) return false;
    return a.every(function (x) { return b.indexOf(x) !== -1; });
  }

  function isHidden(id) { return state.hiddenQuestionIds.indexOf(id) !== -1; }
  function isFavorite(id) { return state.savedQuestionIds.indexOf(id) !== -1; }

  function visibleQuestions() { return QUESTIONS.filter(function (q) { return !isHidden(q.id); }); }

  function validScope(scope) {
    if (scope === "all") return true;
    if (scope.indexOf("sp:") === 0) return SPECIALTIES.some(function (sp) { return "sp:" + sp.key === scope; });
    if (scope.indexOf("t:") === 0) return Boolean(topic(scope.slice(2)));
    return false;
  }

  function scopeMatch(q, scope) {
    if (scope === "all") return true;
    if (scope.indexOf("sp:") === 0) return q.specialty === scope.slice(3);
    return q.topic === scope.slice(2);
  }

  function scopeLabel(scope) {
    if (scope === "all") return "All topics";
    if (scope.indexOf("sp:") === 0) return "All " + specialty(scope.slice(3)).short;
    return scope.slice(2);
  }

  function filterBase(f, examOnly) {
    return visibleQuestions().filter(function (q) {
      return (f.book === "all" || q.book === f.book) && (f.chapter === "all" || q.chapter === f.chapter) && (!examOnly || q.type !== "matching");
    });
  }

  function filtered(f, examOnly) {
    return filterBase(f, examOnly).filter(function (q) { return scopeMatch(q, f.scope); });
  }

  function studyQueue() {
    return filtered(state.study).filter(function (q) { return !state.study.ids || state.study.ids.indexOf(q.id) !== -1; });
  }

  function currentStudyQuestion() {
    var queue = studyQueue();
    return queue.length ? queue[mod(state.study.index, queue.length)] : null;
  }

  function resetStudyQuestion() {
    state.study.answered = false;
    state.study.revealed = false;
    state.study.pick = [];
  }

  function startStudy(filters, ids) {
    var f = Object.assign(freshFilters(), filters || {});
    state.study.book = f.book;
    state.study.scope = f.scope;
    state.study.chapter = f.chapter;
    state.study.ids = ids || null;
    state.study.index = 0;
    state.study.sessionAnswered = 0;
    state.study.sessionCorrect = 0;
    state.quick.index = 0;
    resetStudyQuestion();
  }

  function questionText(q) {
    return q.stem + "\n\n" + q.options.map(function (option, index) { return letter(index) + ". " + option; }).join("\n") + (q.type === "multi" ? "\n\n(More than one answer may be correct.)" : "");
  }

  function shortLine(q) {
    if (q.type !== "single") return q.explanation;
    var match = q.explanation.match(/^.*?[.!?](\s|$)/);
    return match ? match[0].trim() : q.explanation;
  }

  function askAI(kind, q) {
    var text = questionText(q);
    var url = kind === "gpt" ? "https://chatgpt.com/?q=" + encodeURIComponent(text) : "https://claude.ai/new?q=" + encodeURIComponent(text);
    try { if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {}); } catch (error) {}
    showToast("Question copied. Opening " + (kind === "gpt" ? "GPT" : "Claude") + "...");
    window.open(url, "_blank", "noopener");
  }

  function toggleFavorite(id) {
    var position = state.savedQuestionIds.indexOf(id);
    if (position === -1) { state.savedQuestionIds.push(id); showToast("Added to Favorites."); } else { state.savedQuestionIds.splice(position, 1); showToast("Removed from Favorites."); }
  }

  function hideQuestion(id) {
    if (!isHidden(id)) state.hiddenQuestionIds.push(id);
    resetStudyQuestion();
    showToast("Question hidden. You can restore it in Settings.");
  }

  function recordAnswer(q, correct) {
    state.progress.answered += 1;
    if (correct) state.progress.correct += 1;
    state.seen[q.id] = correct ? 1 : 0;
  }

  function seenStats(list) {
    var seen = 0, correct = 0;
    list.forEach(function (q) { if (state.seen[q.id] !== undefined) { seen += 1; correct += state.seen[q.id]; } });
    return { seen: seen, correct: correct, total: list.length };
  }

  // ---------- shared pieces ----------

  function pageHead(id, title, sub, actions) {
    return '<div class="page-heading"><div><h2 id="' + id + '">' + title + '</h2>' + (sub ? '<p>' + sub + '</p>' : "") + '</div>' + (actions ? '<div class="page-heading-actions">' + actions + '</div>' : "") + '</div>';
  }

  function emptyState(ic, title, text) {
    return '<div class="empty-state">' + icon(ic) + '<h3>' + title + '</h3><p>' + text + '</p></div>';
  }

  function noQuestions() {
    return emptyState("search", "No questions here", QUESTIONS.length ? "Choose another book or topic." : "Questions will appear here once they are added.");
  }

  function bookOptions(selected) {
    return '<option value="all">All books</option>' + BOOKS.map(function (b) {
      return '<option value="' + esc(b.id) + '"' + (selected === b.id ? " selected" : "") + '>' + esc(b.title) + '</option>';
    }).join("");
  }

  function scopeOptions(f, examOnly) {
    var base = filterBase(f, examOnly);
    var html = '<option value="all"' + (f.scope === "all" ? " selected" : "") + '>All topics (' + base.length + ')</option>';
    SPECIALTIES.forEach(function (sp) {
      var inSp = base.filter(function (q) { return q.specialty === sp.key; });
      if (!inSp.length && f.scope !== "sp:" + sp.key && !TOPIC_GROUPS[sp.key].some(function (t) { return f.scope === "t:" + t; })) return;
      html += '<optgroup label="' + sp.label + '"><option value="sp:' + sp.key + '"' + (f.scope === "sp:" + sp.key ? " selected" : "") + '>All ' + sp.short + ' (' + inSp.length + ')</option>';
      TOPIC_GROUPS[sp.key].forEach(function (name) {
        var n = inSp.filter(function (q) { return q.topic === name; }).length;
        if (!n && f.scope !== "t:" + name) return;
        html += '<option value="t:' + esc(name) + '"' + (f.scope === "t:" + name ? " selected" : "") + '>' + esc(name) + ' (' + n + ')</option>';
      });
      html += '</optgroup>';
    });
    return html;
  }

  function chapterSelect(prefix, f) {
    var b = book(f.book);
    if (!b || !b.chapters || !b.chapters.length) return "";
    return '<label class="select-field"><span class="sr-only">Chapter</span><select id="' + prefix + '-chapter" aria-label="Chapter"><option value="all">All chapters</option>' + b.chapters.map(function (c) {
      return '<option value="' + esc(c.id) + '"' + (f.chapter === c.id ? " selected" : "") + '>' + esc(c.title) + '</option>';
    }).join("") + '</select></label>';
  }

  function filterSelects(prefix, f, examOnly) {
    return '<label class="select-field"><span class="sr-only">Book</span><select id="' + prefix + '-book" aria-label="Book">' + bookOptions(f.book) + '</select></label>' +
      chapterSelect(prefix, f) +
      '<label class="select-field"><span class="sr-only">Topic</span><select id="' + prefix + '-scope" aria-label="Topic">' + scopeOptions(f, examOnly) + '</select></label>';
  }

  function controlCard(ic, title, sub) {
    return '<div class="card study-control-card"><div class="study-control-info"><span class="section-heading-icon">' + icon(ic) + '</span><div><strong>' + title + '</strong><span>' + sub + '</span></div></div><div class="study-controls">' + filterSelects("study", state.study) + '</div></div>';
  }

  function favBanner() {
    return state.study.ids ? '<div class="scope-banner">' + icon("bookmark") + '<span>Favorites only</span><button class="text-button" data-clear-ids type="button">Show all</button></div>' : "";
  }

  function figures(q) {
    if (!q.images.length) return "";
    return '<div class="q-figures">' + q.images.map(function (src, i) {
      return '<a href="' + esc(src) + '" target="_blank" rel="noopener"><img src="' + esc(src) + '" alt="Figure ' + (i + 1) + '" loading="lazy" /></a>';
    }).join("") + '</div>';
  }

  function sourceLine(q) {
    var b = book(q.book);
    var c = q.chapter ? chapterOf(q.book, q.chapter) : null;
    return '<div class="question-source">' + icon("bookOpen") + ' <span>' + esc(b ? b.short || b.title : "") + (c ? " · " + esc(c.title) : "") + ' · Q' + esc(q.number) + ' · ' + esc(q.topic) + '</span></div>';
  }

  function typeHint(q) {
    if (q.type === "multi") return '<p class="q-hint">' + icon("info") + ' Select all that apply</p>';
    if (q.type === "matching") return '<p class="q-hint">' + icon("info") + ' Matching question · try it, then show the answer</p>';
    return "";
  }

  function optionsHtml(q, opts) {
    // opts: { picked: [], reveal: bool, attr: "data-study-answer" | null, disabled: bool, dim: bool }
    return q.options.map(function (option, index) {
      var picked = opts.picked.indexOf(index) !== -1;
      var correct = opts.reveal && q.ans.indexOf(index) !== -1;
      var wrong = opts.reveal && picked && !correct;
      var missed = correct && !picked && q.type === "multi" && opts.picked.length > 0;
      var cls = "option-button" + (correct ? " is-correct" : "") + (missed ? " is-missed" : "") + (wrong ? " is-wrong" : "") + (!opts.reveal && picked ? " is-selected" : "") + (opts.reveal && opts.dim && !correct ? " is-dim" : "") + (q.type === "multi" ? " is-multi" : "");
      var inner = '<span class="option-key">' + letter(index) + '</span><span>' + txt(option) + '</span><span class="option-status-icon">' + (missed ? '<span class="missed-label">Missed</span>' : correct ? icon("check") : wrong ? icon("x") : "") + '</span>';
      if (!opts.attr) return '<div class="' + cls + '">' + inner + '</div>';
      return '<button class="' + cls + '" ' + opts.attr + '="' + index + '" type="button"' + (opts.disabled ? " disabled" : "") + ' aria-pressed="' + picked + '">' + inner + '</button>';
    }).join("");
  }

  function answerPanel(q, picked, revealedOnly) {
    var title;
    if (q.type === "matching") title = "Answer";
    else if (revealedOnly) title = "Answer · " + answerLetters(q);
    else if (sameSet(picked, q.ans)) title = "Correct · " + answerLetters(q);
    else title = "Not quite · Answer: " + answerLetters(q);
    var ok = q.type !== "matching" && !revealedOnly && sameSet(picked, q.ans);
    return '<div class="answer-panel' + (ok ? " is-ok" : "") + '"><span class="answer-panel-icon">' + icon(ok ? "check" : "info") + '</span><div><strong>' + title + '</strong>' + (q.answerText ? '<p class="answer-text">' + txt(q.answerText) + '</p>' : "") + (q.explanation ? '<p>' + txt(q.explanation) + '</p>' : "") + '</div></div>';
  }

  function actionButtons(q) {
    return '<button class="action-button' + (isFavorite(q.id) ? " is-on" : "") + '" data-fav-toggle="' + q.id + '" type="button">' + icon("bookmark") + (isFavorite(q.id) ? " In Favorites" : " Add question to Favorites") + '</button>' +
      '<button class="action-button" data-hide-question="' + q.id + '" type="button">' + icon("eyeOff") + ' Do not show this question again</button>' +
      '<button class="action-button" data-ask="gpt" data-qid="' + q.id + '" type="button">' + icon("chat") + ' Ask GPT AI</button>' +
      '<button class="action-button" data-ask="claude" data-qid="' + q.id + '" type="button">' + icon("chat") + ' Ask Claude AI</button>';
  }

  function cover(b, big) {
    var cls = "book-cover book-cover--" + b.specialty + (big ? " book-cover--big" : "");
    if (b.cover) return '<img class="' + cls + ' book-cover--img" src="' + esc(b.cover) + '" alt="' + esc(b.title) + ' cover" loading="lazy" />';
    return '<span class="' + cls + '">' + esc(b.code) + '</span>';
  }

  function progressLine(stats) {
    var w = stats.total ? Math.round((stats.seen / stats.total) * 100) : 0;
    return '<div class="progress-line"><span style="width:' + w + '%"></span></div>';
  }

  // ---------- chrome ----------

  function renderIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (node) {
      if (!node.innerHTML.trim()) node.innerHTML = icon(node.dataset.icon);
    });
  }

  function setChrome() {
    var copy = PAGE_COPY[state.view] || PAGE_COPY.home;
    var title = copy[1];
    if (state.view === "book") { var b = book(state.bookId); if (b) title = b.short || b.title; }
    document.getElementById("topbar-eyebrow").textContent = copy[0];
    document.getElementById("topbar-title").textContent = title;
    document.querySelectorAll("[data-nav]").forEach(function (button) {
      var nav = button.dataset.nav;
      var active = nav === state.view || (state.view === "book" && nav === "books");
      button.classList.toggle("is-active", active);
      if (button.classList.contains("nav-item")) {
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      }
    });
  }

  function render() {
    setChrome();
    var renderers = { home: renderHome, books: renderBooks, book: renderBook, topics: renderTopics, study: renderStudy, exam: renderExam, quick: renderQuick, favorites: renderFavorites, progress: renderProgress, settings: renderSettings };
    var html;
    if (DATA_STATE === "loading") html = '<div class="loading-state"><span class="spinner"></span><p>Loading questions...</p></div>';
    else if (DATA_STATE === "error") html = emptyState("cloud", "Questions could not be loaded", "Check your internet connection and try again. Once loaded, the app also works offline.") + '<div class="center-row"><button class="button button-primary" id="retry-load" type="button">Try again</button></div>';
    else html = (renderers[state.view] || renderHome)();
    document.getElementById("app-view").innerHTML = '<div class="view' + (state.view === "quick" ? " view--instant" : "") + '">' + html + "</div>";
    renderIcons(document.getElementById("app-view"));
    document.documentElement.dataset.theme = state.theme;
    saveState();
    if (DATA_STATE === "ready" && state.view === "exam" && state.exam.active && state.exam.timerSeconds) startExamTimer();
    else clearInterval(examTimer);
  }

  function navigate(view) {
    if (!PAGE_COPY[view]) return;
    if (state.view === "exam" && view !== "exam" && state.exam.active) clearInterval(examTimer);
    state.view = view;
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    render();
    window.scrollTo(0, 0);
    window.requestAnimationFrame(function () { document.getElementById("main-content").focus({ preventScroll: true }); });
  }

  // ---------- views ----------

  function renderHome() {
    var resume = state.study.sessionAnswered > 0 ? '<button class="button" data-nav="study" type="button">' + icon("study") + ' Continue where you left off</button>' : "";
    function path(nav, ic, title, text) {
      return '<button class="card recent-card" data-nav="' + nav + '" type="button"><div class="recent-card-top"><span class="section-heading-icon">' + icon(ic) + '</span><span class="bookmark-button" aria-hidden="true">' + icon("arrow") + '</span></div><h4>' + title + '</h4><p>' + text + '</p></button>';
    }
    var total = visibleQuestions().length;
    return '<section aria-labelledby="home-heading"><article class="hero-card"><div class="hero-content"><p class="hero-kicker">Vascular · Thoracic · Cardiac</p><h2 id="home-heading">How do you want to study?</h2><p>' + plural(BOOKS.length, "book") + ' · ' + plural(total, "question") + '. Open a whole book, or choose one of the 66 topics.</p>' + resume + '</div></article>' +
      '<div class="section-block"><div class="recent-grid recent-grid--paths">' +
      path("books", "book", "By book", "Open a book, its chapters and its topics.") +
      path("topics", "grid", "By topic", "Pick one of the 66 topics across all books.") +
      path("exam", "exam", "Exam", "Choose a book or topic, a timer, and when to see answers.") +
      path("quick", "zap", "Quick review", "Swipe through questions and answers fast.") +
      path("favorites", "bookmark", "Favorites", "Questions you saved, grouped by book.") +
      '</div></div><div class="stats-row" aria-label="Your numbers"><article class="card stat-card"><span class="stat-icon stat-icon--purple">' + icon("target") + '</span><div><p>Answered</p><strong>' + state.progress.answered + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--mint">' + icon("check") + '</span><div><p>Accuracy</p><strong>' + pct(state.progress.correct, state.progress.answered) + '</strong></div></article><article class="card stat-card"><span class="stat-icon stat-icon--amber">' + icon("bookmark") + '</span><div><p>Favorites</p><strong>' + state.savedQuestionIds.length + '</strong></div></article></div></section>';
  }

  function renderBooks() {
    if (!BOOKS.length) return '<section>' + pageHead("books-heading", "Books", "") + emptyState("book", "No books yet", "Books will appear here once they are added.") + '</section>';
    var cards = BOOKS.map(function (b) {
      var stats = seenStats(visibleQuestions().filter(function (q) { return q.book === b.id; }));
      return '<button class="card book-card book-card--' + b.specialty + '" data-open-book="' + esc(b.id) + '" type="button"><div><div class="book-card-top">' + cover(b) + '<small>' + esc(b.edition || "") + '</small></div><h3>' + esc(b.title) + '</h3><p>' + esc(b.description || "") + '</p></div><div class="book-card-footer"><span class="book-count"><strong>' + stats.total + '</strong> questions' + (b.chapters && b.chapters.length ? ' · ' + plural(b.chapters.length, "chapter") : "") + '</span><span class="book-count">' + stats.seen + ' done</span></div>' + progressLine(stats) + '</button>';
    }).join("");
    return '<section aria-labelledby="books-heading">' + pageHead("books-heading", "Books", "Open a book to see its chapters or topics, then study or take an exam.") + '<div class="book-grid">' + cards + '</div></section>';
  }

  function renderBook() {
    var b = book(state.bookId);
    if (!b) return renderBooks();
    var list = visibleQuestions().filter(function (q) { return q.book === b.id; });
    var stats = seenStats(list);
    var head = '<section aria-labelledby="book-heading"><button class="text-button back-link" data-nav="books" type="button">' + icon("arrowLeft") + ' All books</button><article class="card book-hero book-card--' + b.specialty + '">' + cover(b, true) + '<div class="book-hero-body"><h2 id="book-heading">' + esc(b.title) + '</h2><p>' + esc([b.publisher, b.edition].filter(Boolean).join(" · ")) + '</p><p class="book-hero-stats">' + plural(stats.total, "question") + ' · ' + stats.seen + ' done · accuracy ' + pct(stats.correct, stats.seen) + '</p>' + progressLine(stats) + '<div class="book-hero-actions"><button class="button button-primary" data-book-study="' + esc(b.id) + '" type="button">' + icon("study") + ' Study this book</button><button class="button button-secondary" data-book-quick="' + esc(b.id) + '" type="button">' + icon("zap") + ' Quick review</button><button class="button button-secondary" data-book-exam="' + esc(b.id) + '" type="button">' + icon("exam") + ' Exam</button></div></div></article>';
    var section;
    if (b.chapters && b.chapters.length) {
      section = '<div class="section-block"><div class="section-title-row"><h3>Chapters</h3><span class="eyebrow">' + plural(b.chapters.length, "chapter") + '</span></div><div class="chapter-list">' + b.chapters.map(function (c, i) {
        var cs = seenStats(list.filter(function (q) { return q.chapter === c.id; }));
        return '<button class="chapter-row" data-book-chapter="' + esc(c.id) + '" type="button"><span class="chapter-num">' + (i + 1) + '</span><span class="chapter-body"><strong>' + esc(c.title) + '</strong><span>' + plural(cs.total, "question") + ' · ' + cs.seen + ' done</span>' + progressLine(cs) + '</span><span class="chapter-arrow">' + icon("arrow") + '</span></button>';
      }).join("") + '</div></div>';
    } else {
      var counts = {};
      list.forEach(function (q) { counts[q.topic] = (counts[q.topic] || 0) + 1; });
      var names = TOPICS.filter(function (t) { return counts[t.name]; });
      section = '<div class="section-block"><div class="section-title-row"><h3>Topics in this book</h3><span class="eyebrow">' + plural(names.length, "topic") + '</span></div><div class="topic-grid">' + names.map(function (t) {
        var ts = seenStats(list.filter(function (q) { return q.topic === t.name; }));
        return '<button class="topic-card" data-book-topic="' + esc(t.name) + '" type="button"><span class="topic-card-marker topic-card-marker--' + t.specialty + '"></span><span><h4>' + esc(t.name) + '</h4><p>' + ts.seen + ' of ' + ts.total + ' done</p></span><span class="topic-card-progress"><strong>' + ts.total + '</strong><span>' + (ts.total === 1 ? "question" : "questions") + '</span></span></button>';
      }).join("") + '</div></div>';
    }
    return head + section + '</section>';
  }

  function filteredTopics() {
    var search = state.topicSearch.trim().toLowerCase();
    return TOPICS.filter(function (item) {
      return (state.topicFilter === "all" || item.specialty === state.topicFilter) && (!search || item.name.toLowerCase().indexOf(search) !== -1);
    });
  }

  function topicResults() {
    var items = filteredTopics();
    if (!items.length) return emptyState("search", "No matching topics", "Try a broader search or choose another specialty.");
    var visible = visibleQuestions();
    return '<div class="topic-summary"><strong>' + items.length + ' topics</strong><span>·</span><span>Tap a topic to study it across all books.</span></div><div class="topic-grid">' + items.map(function (item) {
      var ts = seenStats(visible.filter(function (q) { return q.topic === item.name; }));
      return '<button class="topic-card" data-topic-select="' + esc(item.name) + '" type="button"><span class="topic-card-marker topic-card-marker--' + item.specialty + '"></span><span><h4>' + esc(item.name) + '</h4><p>' + specialty(item.specialty).label + (ts.seen ? ' · ' + ts.seen + ' done' : "") + '</p></span><span class="topic-card-progress"><strong>' + ts.total + '</strong><span>' + (ts.total === 1 ? "question" : "questions") + '</span></span></button>';
    }).join("") + "</div>";
  }

  function renderTopics() {
    var pills = '<button class="filter-pill ' + (state.topicFilter === "all" ? "is-active" : "") + '" data-topic-filter="all" type="button">All</button>' + SPECIALTIES.map(function (item) {
      return '<button class="filter-pill ' + (state.topicFilter === item.key ? "is-active" : "") + '" data-topic-filter="' + item.key + '" type="button">' + item.short + "</button>";
    }).join("");
    return '<section aria-labelledby="topics-heading">' + pageHead("topics-heading", "Topics", "22 topics each in vascular, thoracic, and cardiac surgery.") + '<div class="filter-bar"><label class="search-field" aria-label="Search topics">' + icon("search") + '<input id="topic-search" type="search" placeholder="Search topics..." value="' + esc(state.topicSearch) + '" autocomplete="off" /></label><div class="filter-pills" role="group" aria-label="Filter topics">' + pills + '</div></div><div id="topic-results">' + topicResults() + "</div></section>";
  }

  function renderStudy() {
    var queue = studyQueue();
    var q = currentStudyQuestion();
    var head = '<section aria-labelledby="study-heading">' + pageHead("study-heading", "Study", "Answer, read the explanation, move on.", '<button class="button button-secondary" data-nav="quick" type="button">' + icon("zap") + ' Quick review</button>') + favBanner();
    var controls = controlCard("target", plural(queue.length, "question"), "in this selection");
    if (!q) return head + '<div class="study-layout"><div class="study-main">' + controls + noQuestions() + '</div></div></section>';
    var s = state.study;
    var reveal = s.answered;
    var options = optionsHtml(q, { picked: s.pick, reveal: reveal, attr: q.type === "matching" ? null : "data-study-answer", disabled: reveal });
    var panel = reveal ? answerPanel(q, s.pick, s.revealed) : "";
    var nextLabel;
    if (reveal) nextLabel = "Next question";
    else if (q.type === "multi" && s.pick.length) nextLabel = "Check answer";
    else nextLabel = "Show answer";
    var sessionPercent = Math.min(100, Math.round((s.sessionAnswered / queue.length) * 100));
    return head + '<div class="study-layout"><div class="study-main">' + controls + '<article class="card question-card"><div class="question-meta"><span class="question-counter">QUESTION ' + (mod(s.index, queue.length) + 1) + " / " + queue.length + '</span>' + tag(q.specialty) + '</div><h3>' + txt(q.stem) + '</h3>' + figures(q) + typeHint(q) + '<div class="question-options" role="group" aria-label="Answer choices">' + options + '</div>' + panel + '<div class="question-actions">' + actionButtons(q) + '</div><div class="question-footer">' + sourceLine(q) + '<div class="footer-buttons"><button class="button button-secondary" data-study-prev type="button" aria-label="Previous question">' + icon("arrowLeft") + '</button><button class="button ' + (reveal || (q.type === "multi" && s.pick.length) ? "button-primary" : "button-secondary") + '" data-study-next type="button">' + nextLabel + " " + icon("arrow") + '</button></div></div></article></div><aside class="study-aside"><article class="card aside-card"><h3>This session</h3><div class="session-progress"><div class="session-progress-line"><span style="width:' + sessionPercent + '%"></span></div><div class="session-progress-meta"><span>' + s.sessionAnswered + ' answered</span><span>' + s.sessionCorrect + ' correct</span></div></div></article></aside></div></section>';
  }

  function studyCheck(revealOnly) {
    var q = currentStudyQuestion();
    if (!q || state.study.answered) return;
    state.study.answered = true;
    if (revealOnly || q.type === "matching") { state.study.revealed = true; return; }
    var correct = sameSet(state.study.pick, q.ans);
    state.study.sessionAnswered += 1;
    if (correct) state.study.sessionCorrect += 1;
    recordAnswer(q, correct);
  }

  function studyPick(index) {
    var q = currentStudyQuestion();
    if (!q || state.study.answered) return;
    if (q.type === "multi") {
      var pos = state.study.pick.indexOf(index);
      if (pos === -1) state.study.pick.push(index); else state.study.pick.splice(pos, 1);
    } else {
      state.study.pick = [index];
      studyCheck(false);
    }
    render();
  }

  // ---------- exam ----------

  function examScopeItems() { return filtered(state.exam, true); }

  function feedbackChips() {
    return '<div class="chip-row" role="group" aria-label="When to show the correct answer">' + [["during", "After each question"], ["end", "At the end of the exam"]].map(function (c) {
      var on = state.exam.feedback === c[0];
      return '<button class="chip' + (on ? " is-active" : "") + '" data-exam-feedback="' + c[0] + '" type="button" aria-pressed="' + on + '">' + c[1] + '</button>';
    }).join("") + '</div>';
  }

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
    var f = state.exam;
    return '<section aria-labelledby="exam-heading">' + pageHead("exam-heading", "Exam", "Choose what to be tested on, then start.") + '<div class="exam-layout"><article class="card exam-setup"><div class="form-grid"><div class="form-field"><label for="exam-book">Book</label><label class="select-field"><select id="exam-book">' + bookOptions(f.book) + '</select></label></div>' + (chapterSelect("exam", f) ? '<div class="form-field"><label for="exam-chapter">Chapter</label>' + chapterSelect("exam", f) + '</div>' : "") + '<div class="form-field"><label for="exam-scope">Topic</label><label class="select-field"><select id="exam-scope">' + scopeOptions(f, true) + '</select></label></div><div class="form-field"><label for="exam-count">Questions <span class="field-hint">· ' + available + ' available</span></label><label class="number-field"><input id="exam-count" type="number" min="1" max="' + Math.max(available, 1) + '" value="' + count + '" /></label></div><div class="form-field"><label>Order</label><div class="toggle-field"><span>Shuffle questions</span><label class="toggle-input"><input id="exam-randomized" type="checkbox" ' + (f.randomized ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div></div><div class="form-field form-field--wide"><label>Time per question</label>' + timerChips() + '</div><div class="form-field form-field--wide"><label>Show correct answer</label>' + feedbackChips() + '</div></div><div class="form-footer"><button class="button button-primary" id="start-exam" type="button" ' + (available ? "" : "disabled") + '>' + icon("exam") + ' Start exam</button></div></article></div></section>';
  }

  function examQueue() { return state.exam.queue.map(question).filter(Boolean); }

  function renderExamActive() {
    var queue = examQueue();
    var q = queue[state.exam.index];
    if (!q) { state.exam.active = false; return renderExam(); }
    var picked = state.exam.answers[q.id] || [];
    var marked = Boolean(state.exam.reviewed[q.id]);
    var locked = state.exam.feedback === "during" && Boolean(state.exam.locked[q.id]);
    var options = optionsHtml(q, { picked: picked, reveal: locked, attr: "data-exam-answer", disabled: locked });
    var panel = locked ? answerPanel(q, picked, false) : "";
    var confirm = state.exam.feedback === "during" && q.type === "multi" && !locked ? '<button class="button button-primary" id="exam-check" type="button"' + (picked.length ? "" : " disabled") + '>Check answer</button>' : "";
    var showTimer = state.exam.timerSeconds && state.exam.qEndsAt;
    var answeredCount = queue.filter(function (item) { return (state.exam.answers[item.id] || []).length; }).length;
    return '<section aria-labelledby="exam-heading">' + pageHead("exam-heading", "Exam", answeredCount + " of " + queue.length + " answered") + '<div class="exam-active"><div class="card exam-toolbar"><div class="exam-toolbar-left"><strong>Question ' + (state.exam.index + 1) + '</strong><span>of ' + queue.length + '</span></div><div class="exam-toolbar-right">' + (showTimer ? '<span class="exam-timer" id="exam-timer">' + icon("clock") + ' <span id="exam-timer-label">' + formatTimer(state.exam.qEndsAt - Date.now()) + "</span></span>" : "") + '<button class="button button-quiet" id="exit-exam" type="button">Exit exam</button></div></div><div class="progress-line"><span style="width:' + Math.round(((state.exam.index + 1) / queue.length) * 100) + '%"></span></div>' + (showTimer ? '<div class="exam-timebar" aria-hidden="true"><span id="exam-timebar-fill"></span></div>' : "") + '<article class="card exam-question"><div class="question-meta"><span class="question-counter">' + (marked ? "MARKED FOR REVIEW" : tag(q.specialty)) + '</span><button class="bookmark-button ' + (marked ? "is-saved" : "") + '" id="toggle-review" type="button" aria-label="Mark for review">' + icon("bookmark") + '</button></div><h3>' + txt(q.stem) + '</h3>' + figures(q) + typeHint(q) + '<div class="question-options" role="group" aria-label="Answer choices">' + options + '</div>' + panel + '<div class="exam-question-footer"><button class="button button-secondary" id="exam-prev" type="button" ' + (state.exam.index === 0 ? "disabled" : "") + '>' + icon("arrowLeft") + ' Previous</button>' + confirm + '<button class="button ' + (confirm ? "button-secondary" : "button-primary") + '" id="exam-next" type="button">' + (state.exam.index === queue.length - 1 ? "Finish" : "Next question") + " " + icon("arrow") + '</button></div></article><div class="exam-submit-footer"><button class="button button-secondary" id="submit-exam" type="button">Submit exam</button></div></div></section>';
  }

  function renderExamResult() {
    var result = state.exam.result || { score: 0, total: 0, items: [] };
    var percent = result.total ? Math.round((result.score / result.total) * 100) : 0;
    var bySp = {};
    result.items.forEach(function (r) {
      var q = question(r.id);
      if (!q) return;
      if (!bySp[q.specialty]) bySp[q.specialty] = { score: 0, total: 0 };
      bySp[q.specialty].total += 1;
      if (r.correct) bySp[q.specialty].score += 1;
    });
    var breakdown = Object.keys(bySp).map(function (key) { return '<div class="result-breakdown-row"><span>' + specialty(key).label + '</span><strong>' + bySp[key].score + " / " + bySp[key].total + "</strong></div>"; }).join("");
    var wrongItems = result.items.filter(function (r) { return !r.correct; });
    var filter = state.exam.reviewFilter === "all" ? "all" : "wrong";
    var shown = filter === "all" ? result.items : wrongItems;
    var cards = shown.map(function (r) {
      var q = question(r.id);
      if (!q) return "";
      var n = result.items.indexOf(r) + 1;
      var status = !r.selected.length ? "Not answered" : r.correct ? "Correct" : "Wrong";
      return '<article class="card review-card"><div class="question-meta"><span class="question-counter">QUESTION ' + n + ' · ' + esc(q.topic) + '</span><span class="review-status review-status--' + (r.correct ? "ok" : "bad") + '">' + status + '</span></div><h3>' + txt(q.stem) + '</h3>' + figures(q) + '<div class="question-options">' + optionsHtml(q, { picked: r.selected, reveal: true, attr: null }) + '</div>' + answerPanel(q, r.selected, !r.selected.length) + sourceLine(q) + '</article>';
    }).join("");
    var empty = !shown.length ? emptyState("check", "No mistakes", "Every question was answered correctly.") : "";
    return '<section aria-labelledby="exam-heading">' + pageHead("exam-heading", "Exam result", "") + '<div class="exam-layout"><article class="card exam-result"><div class="score-ring" style="--score:' + percent + '%" data-score="' + percent + '%"></div><div><h3>Exam complete</h3><div class="result-breakdown"><div class="result-breakdown-row"><span>Correct</span><strong>' + result.score + " / " + result.total + "</strong></div>" + breakdown + '</div><div class="page-heading-actions" style="justify-content:flex-start;margin-top:20px">' + (wrongItems.length ? '<button class="button button-primary" id="retry-wrong" type="button">Retry ' + wrongItems.length + ' missed ' + icon("arrow") + '</button>' : "") + '<button class="button button-secondary" id="restart-exam" type="button">New exam</button><button class="button button-secondary" data-nav="home" type="button">Home</button></div></div></article></div><div class="section-block"><div class="section-title-row"><h3>Review your answers</h3><div class="chip-row"><button class="chip' + (filter === "wrong" ? " is-active" : "") + '" data-review-filter="wrong" type="button">Wrong (' + wrongItems.length + ')</button><button class="chip' + (filter === "all" ? " is-active" : "") + '" data-review-filter="all" type="button">All (' + result.items.length + ')</button></div></div><div class="review-list">' + cards + empty + '</div></div></section>';
  }

  function beginExam(ids) {
    state.exam = Object.assign({}, state.exam, { active: true, submitted: false, count: ids.length, queue: ids, index: 0, answers: {}, locked: {}, reviewed: {}, qEndsAt: null, result: null });
    goToQuestion(0);
    clearInterval(examTimer);
    window.scrollTo(0, 0);
    render();
  }

  function startExam() {
    var items = examScopeItems();
    if (!items.length) return;
    var input = document.getElementById("exam-count");
    var count = Math.min(Math.max(Number(input && input.value) || items.length, 1), items.length);
    if (state.exam.randomized) {
      for (var i = items.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = items[i]; items[i] = items[j]; items[j] = t; }
    }
    beginExam(items.slice(0, count).map(function (q) { return q.id; }));
  }

  function retryWrong() {
    var result = state.exam.result;
    if (!result) return;
    var ids = result.items.filter(function (r) { return !r.correct; }).map(function (r) { return r.id; });
    if (ids.length) beginExam(ids);
  }

  function goToQuestion(index) {
    state.exam.index = index;
    var id = state.exam.queue[index];
    var locked = state.exam.feedback === "during" && state.exam.locked[id];
    state.exam.qEndsAt = state.exam.timerSeconds && !locked ? Date.now() + state.exam.timerSeconds * 1000 : null;
  }

  function examPick(index) {
    var q = examQueue()[state.exam.index];
    if (!q) return;
    var during = state.exam.feedback === "during";
    if (during && state.exam.locked[q.id]) return;
    var picked = (state.exam.answers[q.id] || []).slice();
    if (q.type === "multi") {
      var pos = picked.indexOf(index);
      if (pos === -1) picked.push(index); else picked.splice(pos, 1);
    } else {
      picked = [index];
      if (during) { state.exam.locked[q.id] = true; state.exam.qEndsAt = null; }
    }
    state.exam.answers[q.id] = picked;
    render();
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
        var q = examQueue()[state.exam.index];
        if (q && state.exam.feedback === "during") state.exam.locked[q.id] = true;
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
    var result = { score: 0, total: queue.length, items: [] };
    queue.forEach(function (q) {
      var selected = state.exam.answers[q.id] || [];
      var correct = sameSet(selected, q.ans);
      result.items.push({ id: q.id, selected: selected, correct: correct });
      if (correct) result.score += 1;
      if (selected.length) recordAnswer(q, correct);
    });
    clearInterval(examTimer);
    state.exam.active = false;
    state.exam.submitted = true;
    state.exam.result = result;
    state.exam.reviewFilter = "wrong";
    showToast("Exam submitted.");
    window.scrollTo(0, 0);
    render();
  }

  // ---------- quick review ----------

  function renderQuick() {
    var queue = studyQueue();
    var head = '<section aria-labelledby="quick-heading">' + pageHead("quick-heading", "Quick review", "The correct answer is shown right away.") + favBanner();
    var controls = controlCard("zap", plural(queue.length, "question"), "Swipe left for next, right for previous");
    if (!queue.length) return head + controls + noQuestions() + '</section>';
    var i = mod(state.quick.index, queue.length);
    var q = queue[i];
    return head + controls + '<article class="card quick-card quick-enter-' + state.quick.dir + '" id="quick-card"><div class="question-meta"><span class="question-counter">' + (i + 1) + ' / ' + queue.length + '</span>' + tag(q.specialty) + '</div><h3>' + txt(q.stem) + '</h3>' + figures(q) + '<div class="question-options">' + optionsHtml(q, { picked: [], reveal: true, attr: null, dim: true }) + '</div><div class="answer-panel is-ok"><span class="answer-panel-icon">' + icon("check") + '</span><div><strong>' + (q.type === "matching" ? "Answer" : "Answer · " + answerLetters(q)) + '</strong>' + (q.answerText ? '<p class="answer-text">' + txt(q.answerText) + '</p>' : "") + '<p>' + txt(shortLine(q)) + '</p></div></div>' + sourceLine(q) + '<div class="question-actions">' + actionButtons(q) + '</div><div class="quick-nav"><button class="button button-secondary" data-quick-move="-1" type="button">' + icon("arrowLeft") + ' Previous</button><button class="button button-primary" data-quick-move="1" type="button">Next ' + icon("arrow") + '</button></div></article></section>';
  }

  function quickMove(delta) {
    var queue = studyQueue();
    if (!queue.length) return;
    state.quick.index = mod(state.quick.index + delta, queue.length);
    state.quick.dir = delta > 0 ? "next" : "prev";
    render();
  }

  // ---------- favorites, progress, settings ----------

  function renderFavorites() {
    var favs = state.savedQuestionIds.map(question).filter(Boolean);
    var head = '<section aria-labelledby="fav-heading">' + pageHead("fav-heading", "Favorites", plural(favs.length, "favorite question"));
    if (!favs.length) return head + emptyState("bookmark", "No favorites yet", "Tap Add question to Favorites while studying and it will appear here.") + '</section>';
    var groups = BOOKS.map(function (b) {
      var items = favs.filter(function (q) { return q.book === b.id; });
      if (!items.length) return "";
      return '<article class="card fav-book book-card--' + b.specialty + '"><div class="fav-book-head">' + cover(b) + '<div><h3>' + esc(b.title) + '</h3><p>' + plural(items.length, "favorite question") + '</p></div><button class="button button-quiet" data-fav-study="' + esc(b.id) + '" type="button">Study these ' + icon("arrow") + '</button></div><div class="fav-list">' +
        items.map(function (q) { return '<div class="fav-item"><button class="fav-open" data-fav-open="' + q.id + '" type="button"><strong>' + esc(q.stem.split("\n")[0]) + '</strong><span>Q' + esc(q.number) + ' · ' + esc(q.topic) + '</span></button><button class="icon-button" data-fav-remove="' + q.id + '" type="button" aria-label="Remove from Favorites">' + icon("x") + '</button></div>'; }).join("") + '</div></article>';
    }).join("");
    return head + '<div class="fav-groups">' + groups + '</div></section>';
  }

  function renderProgress() {
    var visible = visibleQuestions();
    var rows = BOOKS.map(function (b) {
      var st = seenStats(visible.filter(function (q) { return q.book === b.id; }));
      var w = st.total ? Math.round((st.seen / st.total) * 100) : 0;
      return '<div class="progress-topic-row"><div class="progress-topic-row-top"><span>' + esc(b.title) + ' · ' + st.seen + ' / ' + st.total + ' done</span><strong>' + pct(st.correct, st.seen) + '</strong></div><div class="progress-topic-bar progress-topic-bar--' + b.specialty + '"><span style="width:' + w + '%"></span></div></div>';
    }).join("");
    var spRows = SPECIALTIES.map(function (sp) {
      var st = seenStats(visible.filter(function (q) { return q.specialty === sp.key; }));
      var w = st.total ? Math.round((st.seen / st.total) * 100) : 0;
      return '<div class="progress-topic-row"><div class="progress-topic-row-top"><span>' + sp.label + ' · ' + st.seen + ' / ' + st.total + ' done</span><strong>' + pct(st.correct, st.seen) + '</strong></div><div class="progress-topic-bar progress-topic-bar--' + sp.key + '"><span style="width:' + w + '%"></span></div></div>';
    }).join("");
    return '<section aria-labelledby="progress-heading">' + pageHead("progress-heading", "Progress", "Saved on this device only. Accuracy is based on your latest answer to each question.", '<button class="button button-primary" data-nav="study" type="button">' + icon("study") + ' Study</button>') + '<div class="progress-layout"><div><div class="progress-overview"><article class="card progress-overview-card"><p>Accuracy</p><strong>' + pct(state.progress.correct, state.progress.answered) + '</strong></article><article class="card progress-overview-card"><p>Answered</p><strong>' + state.progress.answered + '</strong></article><article class="card progress-overview-card"><p>Favorites</p><strong>' + state.savedQuestionIds.length + '</strong></article></div><article class="card progress-topic-card" style="margin-top:14px"><h3>By book</h3><div class="progress-topic-list">' + rows + '</div></article></div><article class="card progress-topic-card"><h3>By specialty</h3><div class="progress-topic-list">' + spRows + '</div></article></div></section>';
  }

  function hiddenSettings() {
    var hidden = state.hiddenQuestionIds.map(question).filter(Boolean);
    var list = hidden.length ? '<div class="hidden-list">' + hidden.map(function (q) { return '<div class="fav-item"><div class="fav-open"><strong>' + esc(q.stem.split("\n")[0]) + '</strong><span>Q' + esc(q.number) + ' · ' + esc(q.topic) + '</span></div><button class="button button-quiet" data-restore-question="' + q.id + '" type="button">' + icon("undo") + ' Restore</button></div>'; }).join("") + '</div>' : "";
    return '<div class="settings-row settings-row--stack"><div class="settings-label"><h4>Hidden questions</h4><p>' + (hidden.length ? hidden.length + ' hidden. They are left out of Study, Quick review and Exam.' : 'None. Questions you hide while studying will appear here.') + '</p></div>' + (hidden.length ? '<button class="button button-secondary" id="restore-all" type="button">Restore all</button>' : "") + '</div>' + list;
  }

  function renderSettings() {
    return '<section aria-labelledby="settings-heading">' + pageHead("settings-heading", "Settings", "") + '<div class="settings-layout"><article class="card settings-card"><div class="settings-row"><div class="settings-label"><h4>Dark mode</h4><p>Easier on the eyes at night.</p></div><label class="toggle-input theme-toggle"><input id="theme-toggle" type="checkbox" ' + (state.theme === "dark" ? "checked" : "") + ' /><span class="toggle-slider"></span></label></div>' + hiddenSettings() + '<div class="settings-row"><div class="settings-label"><h4>Reset progress</h4><p>Clears your answers and favorites on this device.</p></div><button class="button button-secondary" id="reset-progress" type="button">Reset</button></div></article></div></section>';
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
    if (!window.confirm("Clear your answers and favorites on this device?")) return;
    var fresh = initialState();
    state.savedQuestionIds = [];
    state.seen = {};
    state.progress = fresh.progress;
    state.study = fresh.study;
    showToast("Progress reset.");
    render();
  }

  // ---------- events ----------

  function setFilter(target, key, value) {
    target[key] = value;
    if (key === "book") { target.chapter = "all"; }
    if (key === "book" || key === "chapter") {
      var base = filterBase(target, target === state.exam);
      if (target.scope !== "all" && !base.some(function (q) { return scopeMatch(q, target.scope); })) target.scope = "all";
    }
  }

  document.addEventListener("click", function (event) {
    var t = event.target;
    if (t.closest("#retry-load")) { loadData(); return; }
    var nav = t.closest("[data-nav]");
    if (nav) { navigate(nav.dataset.nav); return; }
    if (t.closest("#menu-toggle")) {
      var sidebar = document.getElementById("sidebar");
      var open = sidebar.classList.toggle("is-open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
      return;
    }
    var el;
    if ((el = t.closest("[data-topic-filter]"))) {
      state.topicFilter = el.dataset.topicFilter;
      document.querySelectorAll("[data-topic-filter]").forEach(function (button) { button.classList.toggle("is-active", button.dataset.topicFilter === state.topicFilter); });
      var results = document.getElementById("topic-results");
      if (results) { results.innerHTML = topicResults(); renderIcons(results); }
      saveState();
      return;
    }
    if ((el = t.closest("[data-topic-select]"))) { startStudy({ scope: "t:" + el.dataset.topicSelect }); navigate("study"); return; }
    if ((el = t.closest("[data-open-book]"))) { state.bookId = el.dataset.openBook; navigate("book"); return; }
    if ((el = t.closest("[data-book-study]"))) { startStudy({ book: el.dataset.bookStudy }); navigate("study"); return; }
    if ((el = t.closest("[data-book-quick]"))) { startStudy({ book: el.dataset.bookQuick }); navigate("quick"); return; }
    if ((el = t.closest("[data-book-exam]"))) { state.exam.book = el.dataset.bookExam; state.exam.chapter = "all"; state.exam.scope = "all"; state.exam.submitted = false; state.exam.active = false; navigate("exam"); return; }
    if ((el = t.closest("[data-book-chapter]"))) { startStudy({ book: state.bookId, chapter: el.dataset.bookChapter }); navigate("study"); return; }
    if ((el = t.closest("[data-book-topic]"))) { startStudy({ book: state.bookId, scope: "t:" + el.dataset.bookTopic }); navigate("study"); return; }
    if ((el = t.closest("[data-study-answer]"))) { studyPick(Number(el.dataset.studyAnswer)); return; }
    if (t.closest("[data-study-next]")) {
      var cur = currentStudyQuestion();
      if (!cur) return;
      if (!state.study.answered) studyCheck(!(cur.type === "multi" && state.study.pick.length));
      else { state.study.index += 1; resetStudyQuestion(); window.scrollTo(0, 0); }
      render();
      return;
    }
    if (t.closest("[data-study-prev]")) { state.study.index -= 1; resetStudyQuestion(); render(); window.scrollTo(0, 0); return; }
    if ((el = t.closest("[data-fav-toggle]"))) { toggleFavorite(el.dataset.favToggle); render(); return; }
    if ((el = t.closest("[data-hide-question]"))) { hideQuestion(el.dataset.hideQuestion); render(); return; }
    if ((el = t.closest("[data-ask]"))) { var aq = question(el.dataset.qid); if (aq) askAI(el.dataset.ask, aq); return; }
    if ((el = t.closest("[data-quick-move]"))) { quickMove(Number(el.dataset.quickMove)); return; }
    if (t.closest("[data-clear-ids]")) { state.study.ids = null; state.study.index = 0; state.quick.index = 0; resetStudyQuestion(); render(); return; }
    if ((el = t.closest("[data-fav-open]"))) { var fq = question(el.dataset.favOpen); if (fq) { startStudy({}, [fq.id]); navigate("study"); } return; }
    if ((el = t.closest("[data-fav-study]"))) {
      var bid = el.dataset.favStudy;
      startStudy({}, state.savedQuestionIds.filter(function (id) { var q = question(id); return q && q.book === bid; }));
      navigate("study");
      return;
    }
    if ((el = t.closest("[data-fav-remove]"))) { toggleFavorite(el.dataset.favRemove); render(); return; }
    if ((el = t.closest("[data-restore-question]"))) { var rid = el.dataset.restoreQuestion; state.hiddenQuestionIds = state.hiddenQuestionIds.filter(function (id) { return id !== rid; }); showToast("Question restored."); render(); return; }
    if (t.closest("#restore-all")) { state.hiddenQuestionIds = []; showToast("All questions restored."); render(); return; }
    if (t.closest("#start-exam")) { startExam(); return; }
    if ((el = t.closest("[data-exam-feedback]"))) { state.exam.feedback = el.dataset.examFeedback; render(); return; }
    if ((el = t.closest("[data-review-filter]"))) { state.exam.reviewFilter = el.dataset.reviewFilter; render(); return; }
    if (t.closest("#retry-wrong")) { retryWrong(); return; }
    if ((el = t.closest("[data-exam-timer]"))) {
      var v = el.dataset.examTimer;
      if (v === "custom") { state.exam.timerCustom = true; state.exam.timerSeconds = state.exam.timerSeconds || 90; }
      else { state.exam.timerCustom = false; state.exam.timerSeconds = Number(v); }
      render();
      return;
    }
    if ((el = t.closest("[data-exam-answer]"))) { examPick(Number(el.dataset.examAnswer)); return; }
    if (t.closest("#exam-check")) {
      var cq = examQueue()[state.exam.index];
      if (cq && (state.exam.answers[cq.id] || []).length) { state.exam.locked[cq.id] = true; state.exam.qEndsAt = null; render(); }
      return;
    }
    if (t.closest("#exam-next")) {
      if (state.exam.index < examQueue().length - 1) { goToQuestion(state.exam.index + 1); window.scrollTo(0, 0); }
      else showToast("This is the last question. Submit when you are ready.");
      render();
      return;
    }
    if (t.closest("#exam-prev")) { goToQuestion(Math.max(0, state.exam.index - 1)); render(); window.scrollTo(0, 0); return; }
    if (t.closest("#toggle-review")) {
      var rq = examQueue()[state.exam.index];
      if (rq) state.exam.reviewed[rq.id] = !state.exam.reviewed[rq.id];
      render();
      return;
    }
    if (t.closest("#submit-exam")) {
      var unanswered = examQueue().filter(function (q) { return !(state.exam.answers[q.id] || []).length; }).length;
      if (unanswered && !window.confirm(plural(unanswered, "question") + " not answered. Submit anyway?")) return;
      submitExam();
      return;
    }
    if (t.closest("#exit-exam")) {
      if (!window.confirm("Exit the exam? Your answers will be lost.")) return;
      state.exam.active = false; clearInterval(examTimer); showToast("Exam closed."); render(); return;
    }
    if (t.closest("#restart-exam")) { state.exam.submitted = false; state.exam.result = null; navigate("exam"); return; }
    if (t.closest("#reset-progress")) resetProgress();
  });

  document.addEventListener("change", function (event) {
    var id = event.target.id;
    var value = event.target.value;
    var m = /^(study|exam)-(book|scope|chapter)$/.exec(id);
    if (m) {
      var target = m[1] === "study" ? state.study : state.exam;
      setFilter(target, m[2], value);
      if (m[1] === "study") { state.study.ids = null; state.study.index = 0; state.quick.index = 0; resetStudyQuestion(); }
      render();
      return;
    }
    if (id === "exam-count") { state.exam.count = Math.max(1, Number(value) || 1); saveState(); }
    else if (id === "exam-randomized") { state.exam.randomized = event.target.checked; saveState(); }
    else if (id === "exam-timer-custom") { state.exam.timerSeconds = Math.round(Math.min(30, Math.max(0.5, Number(value) || 1)) * 60); render(); }
    else if (id === "theme-toggle") { state.theme = event.target.checked ? "dark" : "light"; render(); }
  });

  document.addEventListener("input", function (event) {
    if (event.target.id !== "topic-search") return;
    state.topicSearch = event.target.value;
    var cursor = event.target.selectionStart;
    var results = document.getElementById("topic-results");
    if (results) { results.innerHTML = topicResults(); renderIcons(results); }
    window.requestAnimationFrame(function () {
      var input = document.getElementById("topic-search");
      if (input) { input.focus(); input.setSelectionRange(cursor, cursor); }
    });
  });

  var swipeStart = null;
  document.addEventListener("pointerdown", function (event) {
    swipeStart = state.view === "quick" && event.target.closest("#quick-card") && !event.target.closest("button, a") ? { x: event.clientX, y: event.clientY } : null;
  });
  document.addEventListener("pointerup", function (event) {
    if (!swipeStart) return;
    var dx = event.clientX - swipeStart.x;
    var dy = event.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) quickMove(dx < 0 ? 1 : -1);
  });
  document.addEventListener("keydown", function (event) {
    if (state.view !== "quick" || /INPUT|SELECT|TEXTAREA/.test(event.target.tagName)) return;
    if (event.key === "ArrowRight") quickMove(1);
    else if (event.key === "ArrowLeft") quickMove(-1);
  });

  document.documentElement.dataset.theme = state.theme;
  renderIcons(document);
  loadData();

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
