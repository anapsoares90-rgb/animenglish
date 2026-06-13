// AnimeEnglish — App Logic

// ─── State ────────────────────────────────────────────────────────────────────
let state = {
  screen: "home",
  currentEpisode: null,
  lessonPhase: "study",   // study | quiz
  studyIndex: 0,
  quizWords: [],
  quizIndex: 0,
  quizScore: 0,
  streak: 0,
  resultData: null,
  episodeFilter: "all",   // all | vocabulary | grammar
  stats: loadStats(),
};

function loadStats() {
  try { return JSON.parse(localStorage.getItem("animenglish_stats")) || defaultStats(); }
  catch { return defaultStats(); }
}
function defaultStats() {
  return { totalXP: 0, level: 1, lessonsCompleted: 0, perfectLessons: 0,
           bestStreak: 0, completedEpisodes: [], unlockedAchievements: [] };
}
function saveStats() {
  localStorage.setItem("animenglish_stats", JSON.stringify(state.stats));
}

// ─── Speech ───────────────────────────────────────────────────────────────────
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "en-US"; utt.rate = 0.85;
  const v = window.speechSynthesis.getVoices().find(v => v.lang.startsWith("en"));
  if (v) utt.voice = v;
  window.speechSynthesis.speak(utt);
}

// ─── XP & Level ───────────────────────────────────────────────────────────────
function addXP(amount) {
  state.stats.totalXP += amount;
  const newLevel = Math.floor(state.stats.totalXP / 100) + 1;
  const levelUp = newLevel > state.stats.level;
  state.stats.level = newLevel;
  return levelUp;
}
function getXPProgress() {
  const cur = state.stats.totalXP % 100;
  return { current: cur, pct: cur };
}

// ─── Achievements ─────────────────────────────────────────────────────────────
function checkAchievements() {
  const newOnes = [];
  for (const a of ACHIEVEMENTS) {
    if (!state.stats.unlockedAchievements.includes(a.id) && a.condition(state.stats)) {
      state.stats.unlockedAchievements.push(a.id);
      newOnes.push(a);
    }
  }
  return newOnes;
}

// ─── Render Router ────────────────────────────────────────────────────────────
const app = document.getElementById("app");
function render() {
  switch (state.screen) {
    case "home":           renderHome(); break;
    case "episode-select": renderEpisodeSelect(); break;
    case "lesson":         renderLesson(); break;
    case "result":         renderResult(); break;
    case "achievements":   renderAchievements(); break;
  }
}

// ─── Home ─────────────────────────────────────────────────────────────────────
function renderHome() {
  const { level, totalXP } = state.stats;
  const xp = getXPProgress();
  const vocabDone = EPISODES.filter(e => e.type === "vocabulary" && state.stats.completedEpisodes.includes(e.id)).length;
  const grammarDone = EPISODES.filter(e => e.type === "grammar" && state.stats.completedEpisodes.includes(e.id)).length;
  app.innerHTML = `
    <div class="screen home-screen">
      <div class="home-bg-deco">
        <span class="deco-kanji">英語</span>
        <span class="deco-kanji2">忍者</span>
      </div>
      <div class="home-header">
        <div class="title-block">
          <span class="title-jp">アニメ</span>
          <h1 class="main-title">AnimeEnglish</h1>
          <p class="subtitle">Aprenda inglês como um verdadeiro ninja! ⚔️</p>
        </div>
        <div class="mascot">
          <div class="mascot-body">🥷</div>
          <div class="mascot-bubble">Vamos aprender juntos!</div>
        </div>
      </div>
      <div class="player-card">
        <div class="player-info">
          <div class="player-level">Nível ${level}</div>
          <div class="player-name">Aprendiz Ninja</div>
        </div>
        <div class="xp-bar-label">${totalXP} XP total</div>
        <div class="xp-bar"><div class="xp-fill" style="width:${xp.pct}%"></div></div>
        <div class="xp-bar-sub">${xp.current}/100 XP para o próximo nível</div>
      </div>
      <div class="home-progress-row">
        <div class="home-prog-item">
          <div class="home-prog-icon">📖</div>
          <div class="home-prog-val">${vocabDone}/${EPISODES.filter(e=>e.type==="vocabulary").length}</div>
          <div class="home-prog-label">Vocabulário</div>
        </div>
        <div class="home-prog-item">
          <div class="home-prog-icon">📝</div>
          <div class="home-prog-val">${grammarDone}/${EPISODES.filter(e=>e.type==="grammar").length}</div>
          <div class="home-prog-label">Gramática</div>
        </div>
        <div class="home-prog-item">
          <div class="home-prog-icon">🔥</div>
          <div class="home-prog-val">${state.stats.bestStreak}</div>
          <div class="home-prog-label">Melhor Série</div>
        </div>
        <div class="home-prog-item">
          <div class="home-prog-icon">🏆</div>
          <div class="home-prog-val">${state.stats.unlockedAchievements.length}/${ACHIEVEMENTS.length}</div>
          <div class="home-prog-label">Conquistas</div>
        </div>
      </div>
      <div class="home-buttons">
        <button class="btn btn-primary btn-large" onclick="goTo('episode-select')">⚔️ Iniciar Missão</button>
        <button class="btn btn-secondary" onclick="goTo('achievements')">🏆 Ver Conquistas</button>
      </div>
    </div>`;
}

// ─── Episode Select ───────────────────────────────────────────────────────────
function renderEpisodeSelect() {
  const f = state.episodeFilter;
  const tabs = ["all","vocabulary","grammar"].map(t => {
    const label = t === "all" ? "🗺️ Todos" : t === "vocabulary" ? "📖 Vocabulário" : "📝 Gramática";
    return `<button class="ep-tab ${f===t?"active":""}" onclick="setFilter('${t}')">${label}</button>`;
  }).join("");

  const list = EPISODES.filter(ep => f === "all" || ep.type === f);
  const cards = list.map((ep, _i) => {
    const realIdx = EPISODES.indexOf(ep);
    const done = state.stats.completedEpisodes.includes(ep.id);
    const badge = ep.type === "grammar"
      ? `<span class="ep-type-badge grammar-badge">📝 GRAMÁTICA</span>`
      : `<span class="ep-type-badge vocab-badge">📖 VOCABULÁRIO</span>`;
    return `
      <div class="episode-card ${done?"done":""}" onclick="startEpisode(${realIdx})" style="--ep-color:${ep.color}">
        <div class="ep-card-top">
          <div class="ep-icon">${ep.icon}</div>
          ${badge}
        </div>
        <div class="ep-num">Episódio ${ep.id}</div>
        <div class="ep-title">${ep.title}</div>
        <div class="ep-title-en">${ep.titleEn}</div>
        <div class="ep-desc">${ep.description}</div>
        <div class="ep-footer">
          <span class="ep-xp">+${ep.xpReward} XP</span>
          <span class="ep-words">${ep.words.length} exercícios</span>
          ${done ? '<span class="ep-done-badge">✅ Concluído</span>' : '<span class="ep-start">Jogar →</span>'}
        </div>
      </div>`;
  }).join("");

  app.innerHTML = `
    <div class="screen episode-screen">
      <div class="screen-header">
        <button class="btn-back" onclick="goTo('home')">← Voltar</button>
        <h2>Escolha seu Episódio</h2>
      </div>
      <div class="ep-tabs-wrap">${tabs}</div>
      <div class="episode-grid">${cards}</div>
    </div>`;
}

function setFilter(f) {
  state.episodeFilter = f;
  renderEpisodeSelect();
}

// ─── Lesson ───────────────────────────────────────────────────────────────────
function startEpisode(index) {
  state.currentEpisode = EPISODES[index];
  state.lessonPhase = "study";
  state.studyIndex = 0;
  state.quizScore = 0;
  state.streak = 0;
  state.quizWords = shuffle([...state.currentEpisode.words]);
  state.quizIndex = 0;
  state.screen = "lesson";
  render();
}

function renderLesson() {
  state.lessonPhase === "study" ? renderStudyCard() : renderQuiz();
}

// ─── Study Card ───────────────────────────────────────────────────────────────
function renderStudyCard() {
  const ep = state.currentEpisode;
  const word = ep.words[state.studyIndex];
  const total = ep.words.length;
  const progress = ((state.studyIndex + 1) / total) * 100;
  const isGrammar = ep.type === "grammar";

  let cardHtml;
  if (isGrammar) {
    const sentenceHL = word.en.replace("___", `<span class="answer-hl">${word.pt}</span>`);
    cardHtml = `
      <div class="study-card grammar-card" onclick="speak('${word.example.replace(/'/g,"\\'")}')">
        <div class="study-emoji">${word.emoji}</div>
        <div class="grammar-sentence-display">${sentenceHL}</div>
        <div class="study-pt">${word.examplePt}</div>
        <div class="grammar-rule-tag">💡 ${word.rule}</div>
        <div class="study-audio-hint">🔊 Clique para ouvir o exemplo</div>
      </div>`;
  } else {
    cardHtml = `
      <div class="study-card" onclick="speak('${word.en.replace(/'/g,"\\'")}')">
        <div class="study-emoji">${word.emoji}</div>
        <div class="study-en">${word.en}</div>
        <div class="study-pt">${word.pt}</div>
        <div class="study-audio-hint">🔊 Clique para ouvir</div>
      </div>`;
  }

  const tipBox = isGrammar ? `
    <div class="grammar-tip-box">
      <span class="tip-label">📌 Regra do Episódio:</span>
      <span class="tip-text">${ep.grammarTip}</span>
    </div>` : "";

  app.innerHTML = `
    <div class="screen lesson-screen">
      <div class="lesson-header">
        <button class="btn-back" onclick="goTo('episode-select')">← Sair</button>
        <div class="lesson-ep-title">${ep.icon} ${ep.title}</div>
        <div class="lesson-phase-badge">📖 Estudar</div>
      </div>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="progress-text">${state.studyIndex + 1} / ${total}</div>
      </div>
      ${tipBox}
      ${cardHtml}
      <div class="example-block">
        <div class="example-label">Exemplo em Batalha:</div>
        <div class="example-en">"${word.example}"</div>
        <div class="example-pt">${word.examplePt}</div>
        <button class="btn-listen" onclick="event.stopPropagation(); speak('${word.example.replace(/'/g,"\\'")}')">
          🔊 Ouvir exemplo
        </button>
      </div>
      <div class="study-nav">
        ${state.studyIndex > 0
          ? `<button class="btn btn-ghost" onclick="prevStudy()">← Anterior</button>`
          : `<div></div>`}
        ${state.studyIndex < total - 1
          ? `<button class="btn btn-primary" onclick="nextStudy()">Próxima →</button>`
          : `<button class="btn btn-success" onclick="startQuiz()">⚡ Iniciar Quiz!</button>`}
      </div>
      <div class="study-dots">
        ${ep.words.map((_,i) =>
          `<span class="dot ${i===state.studyIndex?"active":i<state.studyIndex?"done":""}"></span>`
        ).join("")}
      </div>
    </div>`;

  setTimeout(() => speak(isGrammar ? word.example : word.en), 400);
}

function nextStudy() { state.studyIndex++; render(); }
function prevStudy() { state.studyIndex--; render(); }

function startQuiz() {
  state.lessonPhase = "quiz";
  state.quizIndex = 0;
  state.quizScore = 0;
  state.streak = 0;
  state.quizWords = shuffle([...state.currentEpisode.words]);
  render();
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function renderQuiz() {
  const ep = state.currentEpisode;
  const isGrammar = ep.type === "grammar";
  const word = state.quizWords[state.quizIndex];
  const total = state.quizWords.length;
  const progress = (state.quizIndex / total) * 100;

  let questionHtml, optionsHtml, correctKey;

  if (isGrammar) {
    correctKey = word.pt;
    const blank = word.en.replace("___", '<span class="blank-slot">___</span>');
    questionHtml = `
      <div class="quiz-question">
        <div class="quiz-word-emoji">${word.emoji}</div>
        <div class="grammar-quiz-sentence">${blank}</div>
        <div class="quiz-instruction">Complete a frase — escolha a palavra certa:</div>
      </div>`;
    const pool = (ep.grammarOptions || ["???"])
      .map(pt => ({ pt }));
    optionsHtml = shuffle([...pool]).map(opt => `
      <button class="quiz-option grammar-opt" data-val="${opt.pt}"
        onclick="checkAnswer('${opt.pt.replace(/'/g,"\\'")}','${correctKey.replace(/'/g,"\\'")}',this)">
        ${opt.pt}
      </button>`).join("");
  } else {
    correctKey = word.en;
    const others = ep.words.filter(w => w.en !== word.en);
    const options = shuffle([word, ...shuffle(others).slice(0,3)]);
    questionHtml = `
      <div class="quiz-question">
        <div class="quiz-word-emoji">${word.emoji}</div>
        <div class="quiz-word-en" onclick="speak('${word.en.replace(/'/g,"\\'")}')">
          ${word.en} <span class="quiz-listen">🔊</span>
        </div>
        <div class="quiz-instruction">Qual é a tradução em português?</div>
      </div>`;
    optionsHtml = options.map(opt => `
      <button class="quiz-option" data-val="${opt.en}"
        onclick="checkAnswer('${opt.en.replace(/'/g,"\\'")}','${correctKey.replace(/'/g,"\\'")}',this)">
        ${opt.emoji} ${opt.pt}
      </button>`).join("");
  }

  const streakBadge = state.streak >= 3
    ? `<div class="streak-badge">🔥 Série: ${state.streak}!</div>` : "";

  app.innerHTML = `
    <div class="screen quiz-screen">
      <div class="lesson-header">
        <button class="btn-back" onclick="goTo('episode-select')">← Sair</button>
        <div class="lesson-ep-title">${ep.icon} Quiz</div>
        <div class="quiz-score">⭐ ${state.quizScore}/${total}</div>
      </div>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="progress-text">${state.quizIndex + 1} / ${total}</div>
      </div>
      ${streakBadge}
      ${questionHtml}
      <div class="quiz-options ${isGrammar?"grammar-options":""}">${optionsHtml}</div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    </div>`;

  if (!isGrammar) setTimeout(() => speak(word.en), 300);
}

function checkAnswer(chosen, correct, btn) {
  document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
  const word = state.quizWords[state.quizIndex];
  const isCorrect = chosen === correct;
  const fb = document.getElementById("quiz-feedback");

  if (isCorrect) {
    btn.classList.add("correct");
    state.quizScore++;
    state.streak++;
    if (state.streak > state.stats.bestStreak) state.stats.bestStreak = state.streak;
    fb.innerHTML = `<div class="feedback correct-msg">✅ Correto! ${state.streak >= 3 ? "🔥 Série incrível!" : "Ótimo trabalho!"}</div>`;
    playSound("correct");
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".quiz-option").forEach(b => {
      if (b.dataset.val === correct) b.classList.add("correct");
    });
    state.streak = 0;
    const correctLabel = state.currentEpisode.type === "grammar" ? correct : word.pt;
    fb.innerHTML = `<div class="feedback wrong-msg">❌ Era: <strong>${correctLabel}</strong></div>`;
    playSound("wrong");
  }

  setTimeout(() => {
    state.quizIndex++;
    state.quizIndex >= state.quizWords.length ? finishLesson() : render();
  }, 1500);
}

// ─── Result ───────────────────────────────────────────────────────────────────
function finishLesson() {
  const ep = state.currentEpisode;
  const total = state.quizWords.length;
  const score = state.quizScore;
  const pct = Math.round((score / total) * 100);
  const perfect = score === total;

  state.stats.lessonsCompleted++;
  if (!state.stats.completedEpisodes.includes(ep.id)) state.stats.completedEpisodes.push(ep.id);
  if (perfect) state.stats.perfectLessons++;

  const xpGained = Math.round(ep.xpReward * (pct / 100));
  const levelUp = addXP(xpGained);
  const newAch = checkAchievements();
  saveStats();

  state.screen = "result";
  state.resultData = { score, total, pct, xpGained, levelUp, newAch, perfect };
  render();
}

function renderResult() {
  const { score, total, pct, xpGained, levelUp, newAch, perfect } = state.resultData;
  const ep = state.currentEpisode;
  const epIdx = EPISODES.indexOf(ep);

  let grade, gradeMsg;
  if (pct===100) { grade="S"; gradeMsg="Perfeito! Você é um mestre!"; }
  else if (pct>=80) { grade="A"; gradeMsg="Excelente, guerreiro!"; }
  else if (pct>=60) { grade="B"; gradeMsg="Bom trabalho, continue!"; }
  else { grade="C"; gradeMsg="Continue praticando, você consegue!"; }

  const achHtml = newAch.map(a =>
    `<div class="ach-unlock">${a.icon} <strong>${a.title}</strong> desbloqueada!</div>`
  ).join("");

  // Suggest next episode
  const nextEp = EPISODES[epIdx + 1];
  const nextBtn = nextEp
    ? `<button class="btn btn-secondary" onclick="startEpisode(${epIdx+1})">
         ▶️ ${nextEp.icon} Próximo: ${nextEp.title}
       </button>`
    : "";

  app.innerHTML = `
    <div class="screen result-screen">
      <div class="result-top">
        <div class="result-grade grade-${grade.toLowerCase()}">${grade}</div>
        <div class="result-msg">${gradeMsg}</div>
        ${perfect ? `<div class="perfect-banner">💯 PERFEITO! INCRÍVEL!</div>` : ""}
      </div>
      <div class="result-stats">
        <div class="rs-item"><div class="rs-value">${score}/${total}</div><div class="rs-label">Acertos</div></div>
        <div class="rs-item"><div class="rs-value">${pct}%</div><div class="rs-label">Precisão</div></div>
        <div class="rs-item"><div class="rs-value">+${xpGained}</div><div class="rs-label">XP ganho</div></div>
      </div>
      ${levelUp ? `<div class="levelup-banner">🎉 LEVEL UP! Você é Nível ${state.stats.level}!</div>` : ""}
      ${achHtml ? `<div class="ach-section"><h3>🏆 Conquistas Desbloqueadas!</h3>${achHtml}</div>` : ""}
      <div class="result-buttons">
        <button class="btn btn-primary" onclick="startEpisode(${epIdx})">🔄 Jogar Novamente</button>
        ${nextBtn}
        <button class="btn btn-ghost" onclick="goTo('episode-select')">📺 Todos os Episódios</button>
      </div>
    </div>`;
}

// ─── Achievements ─────────────────────────────────────────────────────────────
function renderAchievements() {
  const unlockedCount = state.stats.unlockedAchievements.length;
  const cards = ACHIEVEMENTS.map(a => {
    const unlocked = state.stats.unlockedAchievements.includes(a.id);
    return `
      <div class="ach-card ${unlocked?"unlocked":"locked"}">
        <div class="ach-icon">${unlocked ? a.icon : "🔒"}</div>
        <div class="ach-info">
          <div class="ach-title">${unlocked ? a.title : "???"}</div>
          <div class="ach-desc">${a.desc}</div>
        </div>
      </div>`;
  }).join("");

  app.innerHTML = `
    <div class="screen ach-screen">
      <div class="screen-header">
        <button class="btn-back" onclick="goTo('home')">← Voltar</button>
        <h2>🏆 Conquistas</h2>
        <div class="ach-count">${unlockedCount}/${ACHIEVEMENTS.length}</div>
      </div>
      <div class="ach-list">${cards}</div>
    </div>`;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function goTo(screen) { state.screen = screen; render(); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if (type === "correct") {
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.setValueAtTime(660, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.2);
    } else {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.15);
    }
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4);
  } catch(e) {}
}

// ─── Init ─────────────────────────────────────────────────────────────────────
if (window.speechSynthesis?.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => {};
}
render();
