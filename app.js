const LESSON_COUNT = 365;

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
      ["on track", "progressing as planned", "keep the project on track"],
      ["pending", "not finished yet", "the approval is still pending"],
      ["short update", "brief status note", "send a short update"]
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
      ["align on", "agree about the next step", "align on the follow-up"],
      ["key points", "main ideas", "summarize the key points"],
      ["focused reply", "clear response", "draft a focused reply"]
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
      ["adjust the timing", "change the schedule", "adjust the timing for the meeting"],
      ["works for me", "is acceptable to me", "Thursday works for me"],
      ["updated invite", "revised calendar invitation", "send the updated invite"]
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
      ["go over", "review together", "go over the budget"],
      ["extra scope", "additional work", "approve the extra scope"],
      ["sign off", "formally approve", "finance needs to sign off"]
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
      ["hear back", "receive a response", "hear back from the vendor"],
      ["delivery window", "target delivery period", "miss the delivery window"],
      ["clear deadline", "specific due date", "share one clear deadline"]
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
      ["walk me through", "explain step by step", "walk me through the handoff"],
      ["background context", "important prior information", "share the background context"],
      ["summary", "brief overview", "add a summary at the top"]
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
      ["quality concern", "possible quality issue", "review the quality concern"],
      ["root cause", "main reason for a problem", "capture the root cause"],
      ["next step", "following action", "agree on the next step"]
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
      ["latest data", "newest information", "pull the latest data"],
      ["metric", "measurement", "validate the metric"],
      ["double-check", "confirm carefully", "double-check the source"]
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
      ["trade-off", "balance between pros and cons", "explain the trade-off"],
      ["recommendation", "suggested choice", "make a recommendation"],
      ["impact", "effect or result", "compare the impact"]
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
      ["escalate", "raise to a higher level", "escalate the issue"],
      ["unresolved", "not solved yet", "the delay is unresolved"],
      ["blocker", "thing stopping progress", "list the blockers"]
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
      ["flexible", "able to change", "be flexible on the timeline"],
      ["core scope", "main agreed work", "keep the core scope"],
      ["concession", "thing offered in exchange", "offer one concession"]
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
      ["action item", "specific task after a meeting", "write the action items"],
      ["owner", "person responsible", "assign an owner"],
      ["due date", "deadline", "add a due date"]
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
    title: `Day ${sequence}: ${context.title} - ${topic}`,
    scenario: `${context.scenario} Focus topic: ${topic}.`,
    dialogue: [
      {
        speaker: speakerA,
        role: roleA,
        text: `Hi ${speakerB}, ${context.opener} ${topic}?`,
        translation: `Practice focus ${sequence}: opening a business conversation clearly.`
      },
      {
        speaker: speakerB,
        role: roleB,
        text: `Sure. ${context.status}, especially before ${timeframe}.`,
        translation: `Practice focus ${sequence}: giving a concise status update.`
      },
      {
        speaker: speakerA,
        role: roleA,
        text: `Thanks. My main concern is ${context.risk}.`,
        translation: `Practice focus ${sequence}: naming the business risk politely.`
      },
      {
        speaker: speakerB,
        role: roleB,
        text: `Understood. I will ${context.action}, ${closingDetails[variant % closingDetails.length]}.`,
        translation: `Practice focus ${sequence}: closing with a concrete next action.`
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
  return new Intl.DateTimeFormat("en-US", {
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

  elements.status.textContent = dueCount > 0 ? `${dueCount} review due` : "No review due";
  elements.stage.textContent = review ? `Next: ${review.nextReview}` : `New dialogue ${state.lessonIndex + 1} / ${lessons.length}`;
  elements.reviewCopy.textContent = review
    ? `Last review: ${review.lastReviewed}. Next review: ${review.nextReview}.`
    : "After practice, choose Again, Good, or Easy to schedule the next review.";
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
  elements.playDialogue.textContent = "Play Dialogue";
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
  elements.playDialogue.textContent = "Stop";
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
