const lessons = [
  {
    id: "project-timeline",
    title: "Project Timeline Update",
    scenario: "A manager checks whether a client deliverable is still on track.",
    dialogue: [
      {
        speaker: "Mia",
        role: "Manager",
        text: "Hi Daniel, do you have a minute to review the project timeline?",
        translation: "\u55e8 Daniel\uff0c\u4f60\u6709\u4e00\u5206\u9418\u53ef\u4ee5\u4e00\u8d77\u78ba\u8a8d\u5c08\u6848\u6642\u7a0b\u55ce\uff1f"
      },
      {
        speaker: "Daniel",
        role: "Coordinator",
        text: "Sure. The design review is complete, but the client feedback is still pending.",
        translation: "\u7576\u7136\u3002\u8a2d\u8a08\u5be9\u67e5\u5df2\u7d93\u5b8c\u6210\uff0c\u4f46\u5ba2\u6236\u56de\u994b\u9084\u5728\u7b49\u5f85\u4e2d\u3002"
      },
      {
        speaker: "Mia",
        role: "Manager",
        text: "Thanks. Please flag any risks before the end of the day.",
        translation: "\u8b1d\u8b1d\u3002\u8acb\u5728\u4eca\u5929\u4e0b\u73ed\u524d\u63d0\u9192\u6211\u4efb\u4f55\u98a8\u96aa\u3002"
      },
      {
        speaker: "Daniel",
        role: "Coordinator",
        text: "Will do. I will send a short update by five.",
        translation: "\u6c92\u554f\u984c\u3002\u6211\u6703\u5728\u4e94\u9ede\u524d\u767c\u4e00\u4efd\u7c21\u77ed\u66f4\u65b0\u3002"
      }
    ],
    words: [
      { term: "project timeline", meaning: "\u5c08\u6848\u6642\u7a0b", note: "review the project timeline" },
      { term: "pending", meaning: "\u7b49\u5f85\u4e2d", note: "feedback is still pending" },
      { term: "flag any risks", meaning: "\u63d0\u9192\u4efb\u4f55\u98a8\u96aa", note: "flag any risks before Friday" }
    ]
  },
  {
    id: "client-follow-up",
    title: "Client Follow-up",
    scenario: "Two colleagues decide how to respond after a client meeting.",
    dialogue: [
      {
        speaker: "Alex",
        role: "Account Lead",
        text: "What was your takeaway from the client call?",
        translation: "\u4f60\u5c0d\u9019\u6b21\u5ba2\u6236\u96fb\u8a71\u6703\u8b70\u7684\u4e3b\u8981\u7d50\u8ad6\u662f\u4ec0\u9ebc\uff1f"
      },
      {
        speaker: "Nina",
        role: "Consultant",
        text: "They like the proposal, but they need clearer pricing options.",
        translation: "\u4ed6\u5011\u559c\u6b61\u9019\u500b\u63d0\u6848\uff0c\u4f46\u9700\u8981\u66f4\u6e05\u695a\u7684\u50f9\u683c\u9078\u9805\u3002"
      },
      {
        speaker: "Alex",
        role: "Account Lead",
        text: "Good point. Can you prepare a revised version by tomorrow morning?",
        translation: "\u597d\u91cd\u9ede\u3002\u4f60\u53ef\u4ee5\u5728\u660e\u5929\u65e9\u4e0a\u524d\u6e96\u5099\u4fee\u8a02\u7248\u55ce\uff1f"
      },
      {
        speaker: "Nina",
        role: "Consultant",
        text: "Yes. I will highlight the differences between each option.",
        translation: "\u53ef\u4ee5\u3002\u6211\u6703\u6a19\u51fa\u6bcf\u500b\u9078\u9805\u4e4b\u9593\u7684\u5dee\u7570\u3002"
      }
    ],
    words: [
      { term: "takeaway", meaning: "\u4e3b\u8981\u7d50\u8ad6", note: "my takeaway is..." },
      { term: "pricing options", meaning: "\u50f9\u683c\u9078\u9805", note: "clearer pricing options" },
      { term: "revised version", meaning: "\u4fee\u8a02\u7248", note: "prepare a revised version" }
    ]
  },
  {
    id: "meeting-reschedule",
    title: "Rescheduling a Meeting",
    scenario: "A team member asks to move a meeting without sounding abrupt.",
    dialogue: [
      {
        speaker: "Ethan",
        role: "Sales",
        text: "Hi Grace, would it be possible to move our meeting to Thursday?",
        translation: "\u55e8 Grace\uff0c\u6211\u5011\u7684\u6703\u8b70\u6709\u53ef\u80fd\u6539\u5230\u9031\u56db\u55ce\uff1f"
      },
      {
        speaker: "Grace",
        role: "Operations",
        text: "Thursday works for me. Is the agenda still the same?",
        translation: "\u9031\u56db\u6211\u53ef\u4ee5\u3002\u8b70\u7a0b\u9084\u662f\u4e00\u6a23\u55ce\uff1f"
      },
      {
        speaker: "Ethan",
        role: "Sales",
        text: "Mostly, but I would like to add a short budget discussion.",
        translation: "\u5927\u81f4\u4e00\u6a23\uff0c\u4f46\u6211\u60f3\u52a0\u4e00\u500b\u7c21\u77ed\u7684\u9810\u7b97\u8a0e\u8ad6\u3002"
      },
      {
        speaker: "Grace",
        role: "Operations",
        text: "No problem. Please send the updated invite when you can.",
        translation: "\u6c92\u554f\u984c\u3002\u65b9\u4fbf\u6642\u8acb\u767c\u9001\u66f4\u65b0\u5f8c\u7684\u9080\u8acb\u3002"
      }
    ],
    words: [
      { term: "move our meeting", meaning: "\u6539\u671f\u6211\u5011\u7684\u6703\u8b70", note: "move our meeting to Thursday" },
      { term: "agenda", meaning: "\u8b70\u7a0b", note: "is the agenda still the same?" },
      { term: "updated invite", meaning: "\u66f4\u65b0\u5f8c\u7684\u9080\u8acb", note: "send the updated invite" }
    ]
  }
];

const reviewIntervals = {
  again: 1,
  good: 3,
  easy: 7
};

const state = {
  lessonIndex: Number(localStorage.getItem("lessonIndex") || "0"),
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

  elements.activeSpeaker.textContent = `${line.speaker} · ${line.role}`;
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
  elements.stage.textContent = review ? `Next: ${review.nextReview}` : "New dialogue";
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
