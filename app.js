const lessons = [
  {
    sentence: "Could you give me a quick update on the project timeline?",
    translation: "\u4f60\u53ef\u4ee5\u5feb\u901f\u8ddf\u6211\u66f4\u65b0\u4e00\u4e0b\u5c08\u6848\u6642\u7a0b\u55ce\uff1f",
    scenarioTitle: "Asking for an update",
    scenario: "Use this when you need a polite, direct status update from a teammate or vendor.",
    words: [
      ["quick update", "\u5feb\u901f\u66f4\u65b0"],
      ["timeline", "\u6642\u7a0b"],
      ["project", "\u5c08\u6848"]
    ],
    prompt: "Say the sentence once slowly, then replace 'project timeline' with your real work topic."
  },
  {
    sentence: "Let me confirm the details and get back to you by tomorrow.",
    translation: "\u8b93\u6211\u78ba\u8a8d\u7d30\u7bc0\uff0c\u660e\u5929\u524d\u518d\u56de\u8986\u4f60\u3002",
    scenarioTitle: "Buying time politely",
    scenario: "Use this when you need time to check information before answering.",
    words: [
      ["confirm", "\u78ba\u8a8d"],
      ["details", "\u7d30\u7bc0"],
      ["get back to you", "\u56de\u8986\u4f60"]
    ],
    prompt: "Practice saying it with a calm tone, then write one situation where you can use it today."
  },
  {
    sentence: "I appreciate your feedback, and I will revise the proposal accordingly.",
    translation: "\u8b1d\u8b1d\u4f60\u7684\u56de\u994b\uff0c\u6211\u6703\u4f9d\u7167\u5167\u5bb9\u4fee\u6539\u63d0\u6848\u3002",
    scenarioTitle: "Responding to feedback",
    scenario: "Use this after receiving comments from a client, manager, or partner.",
    words: [
      ["appreciate", "\u611f\u8b1d"],
      ["feedback", "\u56de\u994b"],
      ["revise", "\u4fee\u6539"]
    ],
    prompt: "Read it twice, then replace 'proposal' with report, schedule, or plan."
  }
];

const state = {
  index: Number(localStorage.getItem("lessonIndex") || "0"),
  doneDates: JSON.parse(localStorage.getItem("doneDates") || "[]")
};

const elements = {
  body: document.body,
  date: document.querySelector("#today-date"),
  streak: document.querySelector("#streak-label"),
  title: document.querySelector("#today-title"),
  translation: document.querySelector("#today-translation"),
  scenarioTitle: document.querySelector("#scenario-title"),
  scenario: document.querySelector("#scenario-copy"),
  words: document.querySelector("#word-list"),
  prompt: document.querySelector("#speak-prompt"),
  note: document.querySelector("#note-box"),
  speak: document.querySelector("#speak-main"),
  complete: document.querySelector("#complete-button"),
  next: document.querySelector("#next-button"),
  copy: document.querySelector("#copy-button"),
  reset: document.querySelector("#reset-button")
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function todayLabel() {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date());
}

function currentLesson() {
  return lessons[state.index % lessons.length];
}

function save() {
  localStorage.setItem("lessonIndex", String(state.index));
  localStorage.setItem("doneDates", JSON.stringify(state.doneDates));
}

function render() {
  const lesson = currentLesson();
  const done = state.doneDates.includes(todayKey());

  elements.body.classList.toggle("is-done", done);
  elements.date.textContent = todayLabel();
  elements.streak.textContent = `${state.doneDates.length} day streak`;
  elements.title.textContent = lesson.sentence;
  elements.translation.textContent = lesson.translation;
  elements.scenarioTitle.textContent = lesson.scenarioTitle;
  elements.scenario.textContent = lesson.scenario;
  elements.prompt.textContent = lesson.prompt;
  elements.complete.textContent = done ? "Done Today" : "Mark Done";
  elements.words.innerHTML = lesson.words
    .map(([word, meaning]) => `<li><strong>${word}</strong><span>${meaning}</span></li>`)
    .join("");
}

function speakToday() {
  const utterance = new SpeechSynthesisUtterance(currentLesson().sentence);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

async function copyPractice() {
  const lesson = currentLesson();
  const text = [
    `Date: ${todayKey()}`,
    `Sentence: ${lesson.sentence}`,
    `Chinese: ${lesson.translation}`,
    `My note: ${elements.note.value || ""}`
  ].join("\n");

  await navigator.clipboard.writeText(text);
  elements.copy.textContent = "Copied";
  window.setTimeout(() => {
    elements.copy.textContent = "Copy";
  }, 1200);
}

elements.speak.addEventListener("click", speakToday);
elements.next.addEventListener("click", () => {
  state.index += 1;
  save();
  render();
});
elements.complete.addEventListener("click", () => {
  const key = todayKey();
  if (!state.doneDates.includes(key)) {
    state.doneDates.push(key);
  }
  save();
  render();
});
elements.copy.addEventListener("click", copyPractice);
elements.reset.addEventListener("click", () => {
  elements.note.value = "";
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

render();
