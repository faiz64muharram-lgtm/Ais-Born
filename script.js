const SECRET_PASSWORD = "2 Feb";

const flowerMessages = [
  {
    title: "A Little Wish ♡",
    message: "I hope your new age brings you lots of happiness, little victories, and beautiful moments. You deserve so many good things, Ais. Never forget that, okay? 🌷"
  },
  {
    title: "A Little Reminder 🍵",
    message: "Don't forget to take care of yourself, okay? Eat well, rest enough, and don't forget to smile. Someone out there is wishing you the happiest birthday ever. Hehe."
  },
  {
    title: "One More Thing ♡",
    message: "Even on days when things feel a little difficult, I hope you remember how precious you are. You don't have to be perfect to be loved. Just be yourself, Ais. That's already special."
  }
];

const seblakReactions = [
  { title: "LAH KOK GITU?! 😭", message: "Baru juga mulai, udah melawan aja, nona satu ini." },
  { title: "YA AMPUN, KERAS KEPALA 😭🍵", message: "Gw kasih kesempatan mikir sekali lagi, deh. Tapi seblak tetap punya fans garis keras ternyata." },
  { title: "OKAY, MISS SEBLAK ENTHUSIAST...", message: "Gw menyerah soal seblak dulu. Tapi hadiah ulang tahunnya masih nunggu, lho! 👀" }
];

const forgivenessReactions = [
  { title: "HAH?! 😭", message: "Gw udah siapin hadiah, malah ditolak mentah-mentah begini..." },
  { title: "YA AMPUN, AISS.SYH 😭", message: "Kasih gw kesempatan buat menyelesaikan hadiah ini dulu, dong." },
  { title: "AKU DUDUK DULU DI POJOKAN 🍵", message: "Kalau kamu udah siap, pilih lagi ya. Surat kecilku masih nunggu buat dibuka." }
];

const letterParagraphs = [
  "Happy birthday, Ais. ♡\n\nHEHEHE, akhirnya sampai juga di bagian ini.\n\nHappy birthday to my favorite little human. 💚",
  "Semoga di umur yang baru ini, Allah selalu jaga kamu, kasih kamu kesehatan, ketenangan hati, kebahagiaan, dan banyak hal baik yang mungkin selama ini kamu doain diam-diam.\n\nI hope your days become softer, your heart becomes happier, and your dreams slowly come true.",
  "Aku sebenernya bingung mau mulai dari mana, karena ada banyak hal yang pengen aku sampein ke kamu.\n\nPertama-tama...\n\nI'm sorry, Ais.",
  "Maaf ya kalau selama ini aku pernah bikin kamu bingung, kecewa, atau bertanya-tanya kenapa aku sampai nge-block kamu berbulan-bulan.\n\nAku tahu, mungkin dari sisi kamu, semuanya terasa aneh.\n\nMungkin kamu pernah mikir, 'Ini orang kenapa, sih? Kok tiba-tiba begitu?'\n\nHehe, kalau dipikir-pikir, emang agak absurd juga ya kelakuanku. 😭",
  "Aku nge-block kamu bukan karena kamu nggak berharga, bukan karena semua hal tentang kamu tiba-tiba jadi nggak berarti, dan bukan juga karena aku pengen bikin kamu merasa nggak penting.\n\nAda sesuatu yang waktu itu sedang aku hadapi, dan ada alasan di balik keputusan yang aku ambil.\n\nAku nggak mau menggunakan alasan itu buat menghapus kemungkinan bahwa tindakanku bikin kamu sedih atau bingung.",
  "I should have handled things better.\n\nAku minta maaf untuk bagian itu.\n\nAku nggak bisa mengubah apa yang sudah terjadi, tapi aku bisa belajar dari semuanya dan berusaha menjadi orang yang lebih baik.\n\nAnd honestly, I hope you're doing okay.",
  "Aku harap selama ini kamu tetap punya banyak alasan buat tersenyum, tetap bisa menikmati hal-hal kecil yang kamu suka, dan tetap jadi Ais yang punya cara sendiri buat bikin hari terasa lebih berwarna.\n\nTerus, satu hal lagi...\n\nPLEASE TAKE CARE OF YOURSELF, OKAY? 🍵",
  "Jangan lupa makan, istirahat yang cukup, dan jangan terlalu keras sama diri sendiri.\n\nDan soal seblak tadi...\n\nHEHEHE, itu cuma ancaman bercanda, kok. Aku nggak punya sertifikat resmi sebagai polisi seblak. 😭\n\nYou can laugh at me for that.",
  "Aku cuma pengen hari ulang tahunmu punya sedikit cerita yang bisa kamu inget, entah itu karena bunganya, pertanyaannya, atau karena pembuat websitenya ternyata agak random.\n\nKalau kamu sampai senyum-senyum sendiri waktu baca ini, berarti misi kecilku berhasil. Hehehe.",
  "Thank you for being you, Ais.\n\nMakasih karena sudah menjadi seseorang yang punya tempat tersendiri dalam ceritaku.\n\nAku nggak tahu semua hal yang bakal terjadi ke depannya, tapi aku berharap kamu selalu dikelilingi kebaikan, orang-orang yang tulus, dan kesempatan untuk tumbuh menjadi versi dirimu yang kamu banggakan.",
  "May Allah bless you, protect you, and guide you to everything that's good for you.\n\nSemoga tahun ini membawa lebih banyak senyum daripada air mata, lebih banyak ketenangan daripada kekhawatiran, dan lebih banyak momen indah yang layak kamu kenang.",
  "Once again...\n\nHAPPY BIRTHDAY, AIS! 💚\n\nSemoga semua doa baik yang kamu simpan di dalam hati, satu per satu menemukan jalannya.",
  "And please remember...\n\nYou deserve kindness, happiness, and a heart that feels at peace.\n\nMaaf untuk hal-hal yang belum sempat aku jelaskan dengan baik.\n\nTerima kasih sudah membaca surat kecil ini sampai selesai.",
  "Sekarang senyum dulu, dong. Masa hadiah sepanjang ini dibaca sambil cemberut? HEHEHE. 😭\n\nWith a little matcha, a little apology, and lots of good wishes,\n\n— Faiz ♡"
];

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const passwordForm = $("#password-form");
const passwordInput = $("#password-input");
const passwordFeedback = $("#password-feedback");
const modal = $("#message-modal");
const reactionBackdrop = $("#reaction-backdrop");
const audio = $("#background-music");
const musicToggle = $("#music-toggle");
const musicIcon = $("#music-icon");
const musicLabel = $("#music-label");

let openedFlowers = new Set();
let seblakAttempts = 0;
let forgivenessAttempts = 0;
let letterOpened = false;
let letterTimer = null;
let musicStarted = false;
let isMuted = false;
let currentModalFlower = null;

function showScreen(screenId) {
  const next = document.getElementById(screenId);
  if (!next) return;
  screens.forEach((screen) => {
    const active = screen === next;
    screen.classList.toggle("active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });
  if (screenId === "final-screen") launchConfetti();
  if (screenId === "password-screen") window.setTimeout(() => passwordInput.focus({ preventScroll: true }), 150);
}

function startMusic() {
  if (!audio || musicStarted) return;
  musicStarted = true;
  audio.volume = 0.38;
  audio.muted = isMuted;
  audio.play().then(() => updateMusicUI()).catch(() => {
    musicStarted = false;
    updateMusicUI();
  });
}

function updateMusicUI() {
  const playing = !audio.paused && !audio.muted;
  musicIcon.textContent = playing ? "♫" : "♪";
  musicLabel.textContent = playing ? "music on" : (isMuted ? "muted" : "music off");
}

musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    isMuted = false;
    audio.muted = false;
    try {
      await audio.play();
      musicStarted = true;
    } catch (_) {
      musicLabel.textContent = "add music.mp3";
    }
  } else {
    audio.pause();
  }
  updateMusicUI();
});

audio.addEventListener("play", updateMusicUI);
audio.addEventListener("pause", updateMusicUI);
audio.addEventListener("error", () => {
  musicLabel.textContent = "add music.mp3";
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = passwordInput.value.trim();
  if (answer === SECRET_PASSWORD) {
    passwordFeedback.textContent = "YAY, kode rahasianya benar ♡";
    passwordInput.disabled = true;
    startMusic();
    window.setTimeout(() => {
      passwordInput.disabled = false;
      passwordInput.value = "";
      passwordFeedback.textContent = "";
      showScreen("welcome-screen");
    }, 650);
  } else {
    passwordFeedback.textContent = "HAH?! 😭 Maaf, kayaknya kamu bukan orang yang dicari deh...";
    passwordInput.classList.remove("shake");
    void passwordInput.offsetWidth;
    passwordInput.classList.add("shake");
    passwordInput.setAttribute("aria-invalid", "true");
    passwordInput.focus();
    window.setTimeout(() => passwordInput.removeAttribute("aria-invalid"), 800);
  }
});

$("#start-gift").addEventListener("click", () => showScreen("flowers-screen"));

function openFlower(index) {
  if (openedFlowers.has(index)) {
    showFlowerModal(index);
    return;
  }
  openedFlowers.add(index);
  const button = document.querySelector(`[data-flower="${index}"]`);
  if (button) {
    button.classList.add("opened");
    button.setAttribute("aria-label", `Bunga ${index + 1}, sudah dibuka. Buka pesan lagi`);
  }
  updateFlowerProgress();
  showFlowerModal(index);
}

function updateFlowerProgress() {
  const count = openedFlowers.size;
  $("#flower-count").textContent = `${count} / 3 flowers opened`;
  $("#flower-progress").style.width = `${(count / 3) * 100}%`;
  $("#continue-flowers").disabled = count !== 3;
}

function showFlowerModal(index) {
  const message = flowerMessages[index];
  currentModalFlower = index;
  $("#modal-title").textContent = message.title;
  $("#modal-message").textContent = message.message;
  modal.hidden = false;
  $("#modal-done").focus({ preventScroll: true });
}

document.querySelectorAll("[data-flower]").forEach((button) => {
  button.addEventListener("click", () => openFlower(Number(button.dataset.flower)));
});

function closeFlowerModal() {
  modal.hidden = true;
  if (currentModalFlower !== null) {
    const button = document.querySelector(`[data-flower="${currentModalFlower}"]`);
    if (button) button.focus({ preventScroll: true });
  }
}
$("#modal-close").addEventListener("click", closeFlowerModal);
$("#modal-done").addEventListener("click", closeFlowerModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeFlowerModal();
});

$("#continue-flowers").addEventListener("click", () => {
  if (openedFlowers.size === 3) showScreen("seblak-screen");
});

function showReaction(type) {
  const list = type === "seblak" ? seblakReactions : forgivenessReactions;
  const attempt = type === "seblak" ? seblakAttempts : forgivenessAttempts;
  const reaction = list[Math.min(attempt, list.length - 1)];
  $("#reaction-title").textContent = reaction.title;
  $("#reaction-message").textContent = reaction.message;
  $(".reaction-face").textContent = attempt === 0 ? "🥹" : attempt === 1 ? "😭" : "🍵";
  reactionBackdrop.dataset.type = type;
  reactionBackdrop.hidden = false;
  $(".reaction-card").classList.remove("shake");
  void $(".reaction-card").offsetWidth;
  $(".reaction-card").classList.add("shake");
  $("#reaction-close").focus({ preventScroll: true });
}

let seblakAccepted = false;
$("#seblak-yes").addEventListener("click", () => {
  seblakAccepted = true;
  $("#seblak-title").textContent = "NAHHH GITUUU 😭💚";
  $("#seblak-screen .question-card .subcopy").textContent = "Akhirnya nurut juga, hehe. Tapi tenang, ini cuma pertanyaan jahil dari aku, bukan aturan yang harus kamu ikuti beneran yaa.";
  $("#seblak-yes").hidden = true;
  $("#seblak-no").textContent = "LANJUT GAS 😭 →";
  $("#seblak-no").classList.remove("button-soft");
  $("#seblak-no").classList.add("button-primary");
});

$("#seblak-no").addEventListener("click", () => {
  if (seblakAccepted) {
    showScreen("forgiveness-screen");
    return;
  }
  showReaction("seblak");
  seblakAttempts++;
});

let forgivenessAccepted = false;
$("#forgive-yes").addEventListener("click", () => {
  forgivenessAccepted = true;
  $("#forgiveness-title").textContent = "SERIOUSLY? 🥹💚";
  $("#forgiveness-screen .question-card .subcopy").textContent = "Makasih yaa... Aku seneng banget kamu masih mau dengerin aku. Okay, one last surprise is waiting for you.";
  $("#forgive-yes").hidden = true;
  $("#forgive-no").textContent = "OPEN THE LAST GIFT ♡";
  $("#forgive-no").classList.remove("button-soft");
  $("#forgive-no").classList.add("button-primary");
});

$("#forgive-no").addEventListener("click", () => {
  if (forgivenessAccepted) {
    showScreen("letter-screen");
    return;
  }
  showReaction("forgiveness");
  forgivenessAttempts++;
});

$("#reaction-close").addEventListener("click", () => {
  reactionBackdrop.hidden = true;
});
reactionBackdrop.addEventListener("click", (event) => {
  if (event.target === reactionBackdrop) reactionBackdrop.hidden = true;
});

function openLetter() {
  if (letterOpened) return;
  letterOpened = true;
  $("#open-letter").classList.add("opened");
  $("#letter-instruction").textContent = "A little note, written just for you.";
  $("#envelope-caption").textContent = "opening your little letter...";
  window.setTimeout(() => {
    $("#open-letter").hidden = true;
    $("#envelope-caption").hidden = true;
    $("#letter-paper").classList.remove("hidden");
    revealLetter();
  }, 600);
}

function revealLetter() {
  const container = $("#letter-text");
  container.innerHTML = "";
  $("#finish-letter").disabled = true;
  let index = 0;
  const addNextParagraph = () => {
    if (index >= letterParagraphs.length) {
      $("#finish-letter").disabled = false;
      return;
    }
    const p = document.createElement("p");
    p.textContent = letterParagraphs[index];
    p.style.opacity = "0";
    p.style.transform = "translateY(5px)";
    p.style.transition = "opacity .45s ease, transform .45s ease";
    container.appendChild(p);
    requestAnimationFrame(() => {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
      container.scrollTop = container.scrollHeight;
    });
    index++;
    letterTimer = window.setTimeout(addNextParagraph, 1050);
  };
  addNextParagraph();
}

$("#open-letter").addEventListener("click", openLetter);
$("#show-all-letter").addEventListener("click", () => {
  if (letterTimer) window.clearTimeout(letterTimer);
  const container = $("#letter-text");
  container.innerHTML = "";
  letterParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
  $("#finish-letter").disabled = false;
});
$("#finish-letter").addEventListener("click", () => {
  if (!letterOpened) return;
  showScreen("final-screen");
});

function launchConfetti() {
  const layer = $("#confetti-layer");
  layer.innerHTML = "";
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 1.7}s`;
    piece.style.animationDuration = `${2.7 + Math.random() * 2}s`;
    layer.appendChild(piece);
  }
}

function resetApp() {
  if (letterTimer) window.clearTimeout(letterTimer);
  openedFlowers = new Set();
  seblakAttempts = 0;
  forgivenessAttempts = 0;
  seblakAccepted = false;
  forgivenessAccepted = false;
  letterOpened = false;
  currentModalFlower = null;
  modal.hidden = true;
  reactionBackdrop.hidden = true;
  $("#flower-row").querySelectorAll(".flower-button").forEach((button, index) => {
    button.classList.remove("opened");
    button.setAttribute("aria-label", `Buka bunga ${["pertama","kedua","ketiga"][index]}`);
  });
  updateFlowerProgress();
  $("#seblak-title").textContent = "Janji sama aku nggak mau makan seblak lagi ya! 😤";
  $("#forgiveness-title").textContent = "Kalo mau lanjut, kamu maafin aku dulu ya! 🥺";
  $("#seblak-yes").hidden = false;
  $("#forgive-yes").hidden = false;
  $("#seblak-yes").textContent = "A · Iya deh... ♡";
  $("#forgive-yes").textContent = "A · Iya, aku maafin kok, ganteng ♡";
  $("#seblak-no").textContent = "B · Gak mau ah!";
  $("#forgive-no").textContent = "B · Gak aku maafin, ganteng 🐶";
  $("#seblak-no").classList.remove("button-primary");
  $("#seblak-no").classList.add("button-soft");
  $("#forgive-no").classList.remove("button-primary");
  $("#forgive-no").classList.add("button-soft");
  $("#seblak-no").onclick = null;
  $("#forgive-no").onclick = null;
  $("#seblak-screen .question-card .subcopy").textContent = "Choose wisely, missy... 👀";
  $("#forgiveness-screen .question-card .subcopy").textContent = "I brought a little apology with me.";
  $("#letter-text").innerHTML = "";
  $("#letter-paper").classList.add("hidden");
  $("#open-letter").hidden = false;
  $("#open-letter").classList.remove("opened");
  $("#envelope-caption").hidden = false;
  $("#letter-instruction").textContent = "Tap the envelope to open your letter.";
  $("#finish-letter").disabled = true;
  $("#confetti-layer").innerHTML = "";
  passwordFeedback.textContent = "";
  passwordInput.value = "";
  showScreen("password-screen");
}
$("#play-again").addEventListener("click", resetApp);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeFlowerModal();
    if (!reactionBackdrop.hidden) reactionBackdrop.hidden = true;
  }
});

updateFlowerProgress();
updateMusicUI();
screens.forEach((screen) => screen.setAttribute("aria-hidden", String(!screen.classList.contains("active"))));
