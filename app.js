const LESSON_COUNT = 365;

const uiText = {
  playDialogue: "\u64ad\u653e\u5c0d\u8a71",
  stop: "\u505c\u6b62",
  noReviewDue: "\u4eca\u65e5\u7121\u9700\u8907\u7fd2",
  reviewDueSuffix: "\u9805\u5f85\u8907\u7fd2",
  nextPrefix: "\u4e0b\u6b21\uff1a",
  newDialogue: "\u65b0\u5c0d\u8a71",
  lastReviewPrefix: "\u4e0a\u6b21\u8907\u7fd2\uff1a",
  nextReviewPrefix: "\u4e0b\u6b21\u8907\u7fd2\uff1a",
  schedulePrompt: "\u7df4\u7fd2\u5f8c\uff0c\u9078\u64c7\u300c\u518d\u7df4\u4e00\u6b21\u300d\u3001\u300c\u9084\u4e0d\u932f\u300d\u6216\u300c\u5f88\u719f\u300d\u4f86\u5b89\u6392\u4e0b\u6b21\u8907\u7fd2\u3002",
  scenarioFocus: "\u7df4\u7fd2\u4e3b\u984c\uff1a",
  greetingPrefix: "\u55e8 ",
  greetingSuffix: "\uff0c\u53ef\u4ee5\u4e00\u8d77\u78ba\u8a8d\u9019\u4ef6\u4e8b\u55ce\uff1f",
  statusTranslation: "\u53ef\u4ee5\u3002\u6574\u9ad4\u6709\u9032\u5c55\uff0c\u4f46\u4ecd\u6709\u4e00\u4e9b\u7d30\u7bc0\u9700\u8981\u78ba\u8a8d\u3002",
  riskTranslation: "\u8b1d\u8b1d\u3002\u6211\u4e3b\u8981\u64d4\u5fc3\u9019\u6703\u5f71\u97ff\u6642\u7a0b\u6216\u54c1\u8cea\u3002",
  actionTranslation: "\u4e86\u89e3\u3002\u6211\u6703\u6574\u7406\u4e0b\u4e00\u6b65\u4e26\u56de\u8986\u4f60\u3002"
};

const people = [
  ["Mia", "Daniel", "Manager", "Coordinator"],
  ["Alex", "Nina", "Account Lead", "Consultant"],
  ["Ethan", "Grace", "Sales", "Operations"],
  ["Olivia", "Marcus", "Product Lead", "Engineer"],
  ["Sophie", "Ken", "Marketing", "Designer"],
  ["Liam", "Ava", "Finance", "Project Lead"],
  ["Noah", "Emma", "Support Lead", "Customer Success"],
  ["Chloe", "Ryan", "HR Partner", "Team Lead"],
  ["Iris", "Leo", "Buyer", "Vendor Manager"],
  ["Ben", "Sarah", "Analyst", "Director"]
];

const topics = [
  "project timeline",
  "client proposal",
  "pricing options",
  "quarterly report",
  "budget approval",
  "vendor contract",
  "product launch",
  "sales forecast",
  "customer feedback",
  "support ticket",
  "meeting agenda",
  "training plan",
  "website update",
  "inventory report",
  "invoice review",
  "hiring plan",
  "performance review",
  "marketing campaign",
  "data request",
  "risk assessment",
  "delivery schedule",
  "onboarding deck",
  "weekly update",
  "partnership plan",
  "quality issue",
  "purchase order",
  "status dashboard",
  "launch checklist",
  "renewal discussion",
  "resource plan",
  "internal announcement",
  "customer interview",
  "design handoff",
  "compliance check",
  "travel request",
  "training session",
  "payment timeline",
  "service agreement",
  "team workshop",
  "market research",
  "regional rollout"
];

const contexts = [
  {
    title: "Progress Check",
    scenario: "Two colleagues check whether a work item is still on track.",
    opener: "do you have a minute to review the",
    status: "the first part is complete, but one detail is still pending",
    risk: "a late response from the client",
    action: "send a short update before the end of the day",
    words: [
      ["on track", "\u4f9d\u8a08\u756b\u9032\u884c", "keep the project on track"],
      ["pending", "\u5f85\u78ba\u8a8d", "the approval is still pending"],
      ["short update", "\u7c21\u77ed\u66f4\u65b0", "send a short update"]
    ]
  },
  {
    title: "Client Follow-up",
    scenario: "A team prepares a clear response after speaking with a client.",
    opener: "can we align on the follow-up for the",
    status: "the client likes the direction, but they asked for clearer details",
    risk: "sending a response that feels too vague",
    action: "draft a focused reply with the key points",
    words: [
      ["align on", "\u5c0d\u9f4a\u5171\u8b58", "align on the follow-up"],
      ["key points", "\u91cd\u9ede", "summarize the key points"],
      ["focused reply", "\u6e05\u695a\u56de\u8986", "draft a focused reply"]
    ]
  },
  {
    title: "Schedule Change",
    scenario: "A meeting or delivery date needs to move politely.",
    opener: "would it be possible to adjust the timing for the",
    status: "the current time still works, but Thursday would be smoother",
    risk: "confusing the team with two different schedules",
    action: "send the updated invite right away",
    words: [
      ["adjust the timing", "\u8abf\u6574\u6642\u9593", "adjust the timing for the meeting"],
      ["works for me", "\u6211\u53ef\u4ee5", "Thursday works for me"],
      ["updated invite", "\u66f4\u65b0\u5f8c\u7684\u9080\u8acb", "send the updated invite"]
    ]
  },
  {
    title: "Budget Discussion",
    scenario: "Two coworkers clarify money, scope, and approval.",
    opener: "can we quickly go over the budget for the",
    status: "the estimate is reasonable, but the extra scope needs approval",
    risk: "committing before finance signs off",
    action: "separate the required cost from the optional cost",
    words: [
      ["go over", "\u4e00\u8d77\u6aa2\u8996", "go over the budget"],
      ["extra scope", "\u65b0\u589e\u7bc4\u570d", "approve the extra scope"],
      ["sign off", "\u6b63\u5f0f\u6838\u51c6", "finance needs to sign off"]
    ]
  },
  {
    title: "Vendor Update",
    scenario: "A team checks on an external partner or supplier.",
    opener: "did you hear back from the vendor about the",
    status: "they confirmed the date, but they still need the final document",
    risk: "missing the delivery window",
    action: "follow up with one clear deadline",
    words: [
      ["hear back", "\u6536\u5230\u56de\u8986", "hear back from the vendor"],
      ["delivery window", "\u4ea4\u4ed8\u671f\u9593", "miss the delivery window"],
      ["clear deadline", "\u660e\u78ba\u671f\u9650", "share one clear deadline"]
    ]
  },
  {
    title: "Team Handoff",
    scenario: "One team passes work to another team cleanly.",
    opener: "can you walk me through the handoff for the",
    status: "most files are ready, but the notes need one final check",
    risk: "the next team missing the background context",
    action: "add a summary at the top of the document",
    words: [
      ["walk me through", "\u9010\u6b65\u8aaa\u660e", "walk me through the handoff"],
      ["background context", "\u80cc\u666f\u8108\u7d61", "share the background context"],
      ["summary", "\u6458\u8981", "add a summary at the top"]
    ]
  },
  {
    title: "Quality Review",
    scenario: "A team discusses a defect, concern, or improvement.",
    opener: "can we review the quality concern in the",
    status: "the issue is limited, but it needs to be documented",
    risk: "the same problem appearing again later",
    action: "capture the root cause and next step",
    words: [
      ["quality concern", "\u54c1\u8cea\u7591\u616e", "review the quality concern"],
      ["root cause", "\u6839\u672c\u539f\u56e0", "capture the root cause"],
      ["next step", "\u4e0b\u4e00\u6b65", "agree on the next step"]
    ]
  },
  {
    title: "Data Request",
    scenario: "A colleague asks for information in a clear and professional way.",
    opener: "could you help me pull the latest data for the",
    status: "the dashboard is updated, but one metric needs validation",
    risk: "sharing numbers before they are confirmed",
    action: "double-check the source and send the final number",
    words: [
      ["latest data", "\u6700\u65b0\u8cc7\u6599", "pull the latest data"],
      ["metric", "\u6307\u6a19", "validate the metric"],
      ["double-check", "\u518d\u6b21\u78ba\u8a8d", "double-check the source"]
    ]
  },
  {
    title: "Decision Prep",
    scenario: "Two coworkers prepare options before a manager decides.",
    opener: "can we prepare the options for the",
    status: "we have two strong options, but the trade-off is not clear yet",
    risk: "making the recommendation too complicated",
    action: "compare cost, timing, and impact on one page",
    words: [
      ["trade-off", "\u53d6\u6368", "explain the trade-off"],
      ["recommendation", "\u5efa\u8b70", "make a recommendation"],
      ["impact", "\u5f71\u97ff", "compare the impact"]
    ]
  },
  {
    title: "Escalation",
    scenario: "A team decides when to raise an issue to a manager.",
    opener: "should we escalate the issue with the",
    status: "we tried the normal process, but the delay is still unresolved",
    risk: "waiting too long to involve the right person",
    action: "send a concise note with the timeline and blockers",
    words: [
      ["escalate", "\u5347\u7d1a\u8655\u7406", "escalate the issue"],
      ["unresolved", "\u5c1a\u672a\u89e3\u6c7a", "the delay is unresolved"],
      ["blocker", "\u963b\u7919", "list the blockers"]
    ]
  },
  {
    title: "Negotiation",
    scenario: "Two people prepare for a practical business negotiation.",
    opener: "how flexible can we be on the",
    status: "we can adjust the timeline, but the core scope should stay the same",
    risk: "giving away too much too early",
    action: "offer one concession and ask for confirmation",
    words: [
      ["flexible", "\u6709\u5f48\u6027", "be flexible on the timeline"],
      ["core scope", "\u6838\u5fc3\u7bc4\u570d", "keep the core scope"],
      ["concession", "\u8b93\u6b65", "offer one concession"]
    ]
  },
  {
    title: "Meeting Summary",
    scenario: "A colleague turns a meeting into clear next actions.",
    opener: "can we turn the discussion into action items for the",
    status: "the discussion was useful, but the owners are not clear",
    risk: "people leaving without knowing what to do",
    action: "write each action item with an owner and due date",
    words: [
      ["action item", "\u884c\u52d5\u9805\u76ee", "write the action items"],
      ["owner", "\u8ca0\u8cac\u4eba", "assign an owner"],
      ["due date", "\u671f\u9650", "add a due date"]
    ]
  }
];

const timeframes = [
  "today",
  "tomorrow morning",
  "Friday",
  "the client meeting",
  "the weekly review",
  "the end of the month",
  "the launch call",
  "the next checkpoint"
];

const closingDetails = [
  "and I will keep the message concise",
  "and I will call out the owner clearly",
  "and I will include the latest deadline",
  "and I will separate facts from assumptions",
  "and I will share the next checkpoint",
  "and I will highlight the decision needed",
  "and I will keep the tone professional",
  "and I will confirm the action items"
];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildLesson(index) {
  const context = contexts[index % contexts.length];
  const topic = topics[index % topics.length];
  const pair = people[index % people.length];
  const timeframe = timeframes[index % timeframes.length];
  const variant = Math.floor(index / contexts.length);
  const [speakerA, speakerB, roleA, roleB] = pair;
  const sequence = String(index + 1).padStart(3, "0");

  return {
    id: `dialogue-${sequence}-${slug(context.title)}-${slug(topic)}`,
    title: `\u7b2c ${sequence} \u5929\uff1a${context.title} - ${topic}`,
    scenario: `${context.scenario} ${uiText.scenarioFocus} ${topic}.`,
    dialogue: [
      {
        speaker: speakerA,
        role: roleA,
        text: `Hi ${speakerB}, ${context.opener} ${topic}?`,
        translation: `${uiText.greetingPrefix}${speakerB}${uiText.greetingSuffix}`
      },
      {
        speaker: speakerB,
        role: roleB,
        text: `Sure. ${context.status}, especially before ${timeframe}.`,
        translation: uiText.statusTranslation
      },
      {
        speaker: speakerA,
        role: roleA,
        text: `Thanks. My main concern is ${context.risk}.`,
        translation: uiText.riskTranslation
      },
      {
        speaker: speakerB,
        role: roleB,
        text: `Understood. I will ${context.action}, ${closingDetails[variant % closingDetails.length]}.`,
        translation: uiText.actionTranslation
      }
    ],
    words: context.words.map(([term, meaning, note]) => ({ term, meaning, note }))
  };
}

const lessons = Array.from({ length: LESSON_COUNT }, (_, index) => buildLesson(index));

const reviewIntervals = {
  again: 1,
  good: 3,
  easy: 7
};

function defaultLessonIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now - start) / 86400000) % lessons.length;
}

const state = {
  lessonIndex: Number(localStorage.getItem("lessonIndex") || String(defaultLessonIndex())),
  activeLine: 0,
  isPlaying: false,
  review: JSON.parse(localStorage.getItem("reviewState") || "{}")
};

const elements = {
  body: document.body,
  date: document.querySelector("#today-date"),
  status: document.querySelector("#review-status"),
  stage: document.querySelector("#review-stage"),
  title: document.querySelector("#lesson-title"),
  scenario: document.querySelector("#lesson-scenario"),
  playDialogue: document.querySelector("#play-dialogue"),
  lineCount: document.querySelector("#line-count"),
  activeSpeaker: document.querySelector("#active-speaker"),
  activeText: document.querySelector("#active-text"),
  activeTranslation: document.querySelector("#active-translation"),
  dialogueList: document.querySelector("#dialogue-list"),
  words: document.querySelector("#word-list"),
  repeatLine: document.querySelector("#repeat-line"),
  playLine: document.querySelector("#play-line"),
  nextLine: document.querySelector("#next-line"),
  reviewCopy: document.querySelector("#next-review-copy"),
  again: document.querySelector("#again-button"),
  good: document.querySelector("#good-button"),
  easy: document.querySelector("#easy-button"),
  previous: document.querySelector("#previous-button"),
  nextLesson: document.querySelector("#next-lesson-button")
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function todayLabel() {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "short",
    day: "numeric",
    weekday: "short"
  }).format(new Date());
}

function currentLesson() {
  return lessons[state.lessonIndex % lessons.length];
}

function currentReview() {
  return state.review[currentLesson().id] || null;
}

function dueLessons() {
  const today = todayKey();
  return lessons.filter((lesson) => {
    const item = state.review[lesson.id];
    return item && item.nextReview <= today;
  });
}

function save() {
  localStorage.setItem("lessonIndex", String(state.lessonIndex));
  localStorage.setItem("reviewState", JSON.stringify(state.review));
}

function selectNextDueLesson() {
  const due = dueLessons();
  if (due.length === 0) return;
  const index = lessons.findIndex((lesson) => lesson.id === due[0].id);
  if (index >= 0) {
    state.lessonIndex = index;
  }
}

function setActiveLine(index) {
  const lesson = currentLesson();
  state.activeLine = (index + lesson.dialogue.length) % lesson.dialogue.length;
  const line = lesson.dialogue[state.activeLine];

  elements.activeSpeaker.textContent = `${line.speaker} - ${line.role}`;
  elements.activeText.textContent = line.text;
  elements.activeTranslation.textContent = line.translation;
  elements.lineCount.textContent = `${state.activeLine + 1} / ${lesson.dialogue.length}`;
  elements.repeatLine.textContent = line.text;

  [...elements.dialogueList.querySelectorAll(".dialogue-line")].forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === state.activeLine);
  });
}

function renderDialogue() {
  const lesson = currentLesson();
  elements.dialogueList.innerHTML = lesson.dialogue
    .map(
      (line, index) => `
        <button class="dialogue-line" type="button" data-index="${index}">
          <span>${line.speaker}</span>
          <strong>${line.text}</strong>
        </button>
      `
    )
    .join("");

  elements.dialogueList.querySelectorAll(".dialogue-line").forEach((button) => {
    button.addEventListener("click", () => {
      stopSpeech();
      setActiveLine(Number(button.dataset.index));
    });
  });
}

function renderWords() {
  const lesson = currentLesson();
  elements.words.innerHTML = lesson.words
    .map(
      (word) => `
        <li>
          <div>
            <strong>${word.term}</strong>
            <span>${word.note}</span>
          </div>
          <em>${word.meaning}</em>
        </li>
      `
    )
    .join("");
}

function renderReview() {
  const review = currentReview();
  const dueCount = dueLessons().length;

  elements.status.textContent = dueCount > 0 ? `${dueCount} ${uiText.reviewDueSuffix}` : uiText.noReviewDue;
  elements.stage.textContent = review ? `${uiText.nextPrefix} ${review.nextReview}` : `${uiText.newDialogue} ${state.lessonIndex + 1} / ${lessons.length}`;
  elements.reviewCopy.textContent = review
    ? `${uiText.lastReviewPrefix}${review.lastReviewed}. ${uiText.nextReviewPrefix}${review.nextReview}.`
    : uiText.schedulePrompt;
}

function render() {
  const lesson = currentLesson();
  elements.date.textContent = todayLabel();
  elements.title.textContent = lesson.title;
  elements.scenario.textContent = lesson.scenario;
  renderDialogue();
  renderWords();
  renderReview();
  setActiveLine(0);
}

function makeUtterance(text, lineIndex) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = lineIndex % 2 === 0 ? 1.05 : 0.9;
  return utterance;
}

function stopSpeech() {
  state.isPlaying = false;
  elements.playDialogue.textContent = uiText.playDialogue;
  window.speechSynthesis.cancel();
}

function playLine(index = state.activeLine) {
  stopSpeech();
  setActiveLine(index);
  window.speechSynthesis.speak(makeUtterance(currentLesson().dialogue[index].text, index));
}

function playDialogueFrom(index) {
  const lesson = currentLesson();
  if (!state.isPlaying || index >= lesson.dialogue.length) {
    stopSpeech();
    return;
  }

  setActiveLine(index);
  const utterance = makeUtterance(lesson.dialogue[index].text, index);
  utterance.onend = () => {
    window.setTimeout(() => playDialogueFrom(index + 1), 250);
  };
  window.speechSynthesis.speak(utterance);
}

function toggleDialogue() {
  if (state.isPlaying) {
    stopSpeech();
    return;
  }
  state.isPlaying = true;
  elements.playDialogue.textContent = uiText.stop;
  playDialogueFrom(0);
}

function scheduleReview(feeling) {
  const lesson = currentLesson();
  const previous = state.review[lesson.id];
  const previousLevel = previous ? previous.level : 0;
  const level = feeling === "again" ? 0 : previousLevel + (feeling === "easy" ? 2 : 1);
  const baseDays = reviewIntervals[feeling];
  const bonusDays = Math.min(level, 4);
  const days = feeling === "again" ? baseDays : baseDays + bonusDays;

  state.review[lesson.id] = {
    level,
    lastReviewed: todayKey(),
    nextReview: addDays(days)
  };
  save();
  renderReview();
}

elements.playDialogue.addEventListener("click", toggleDialogue);
elements.playLine.addEventListener("click", () => playLine());
elements.nextLine.addEventListener("click", () => {
  stopSpeech();
  setActiveLine(state.activeLine + 1);
});
elements.again.addEventListener("click", () => scheduleReview("again"));
elements.good.addEventListener("click", () => scheduleReview("good"));
elements.easy.addEventListener("click", () => scheduleReview("easy"));
elements.previous.addEventListener("click", () => {
  stopSpeech();
  state.lessonIndex = (state.lessonIndex - 1 + lessons.length) % lessons.length;
  save();
  render();
});
elements.nextLesson.addEventListener("click", () => {
  stopSpeech();
  state.lessonIndex = (state.lessonIndex + 1) % lessons.length;
  save();
  render();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

selectNextDueLesson();
render();
