const pianoKeys = [
  { name: "A0", type: "white", audio: "A0.mp3", keyboardKey: "a" },
  { name: "Bb0", type: "black", audio: "Bb0.mp3", keyboardKey: "A" },
  { name: "B0", type: "white", audio: "B0.mp3", keyboardKey: "b" },

  { name: "C1", type: "white", audio: "C1.mp3", keyboardKey: "B" },
  { name: "Db1", type: "black", audio: "Db1.mp3", keyboardKey: "c" },
  { name: "D1", type: "white", audio: "D1.mp3", keyboardKey: "C" },
  { name: "Eb1", type: "black", audio: "Eb1.mp3", keyboardKey: "d" },
  { name: "E1", type: "white", audio: "E1.mp3", keyboardKey: "D" },
  { name: "F1", type: "white", audio: "F1.mp3", keyboardKey: "e" },
  { name: "Gb1", type: "black", audio: "Gb1.mp3", keyboardKey: "E" },
  { name: "G1", type: "white", audio: "G1.mp3", keyboardKey: "f" },
  { name: "Ab1", type: "black", audio: "Ab1.mp3", keyboardKey: "F" },
  { name: "A1", type: "white", audio: "A1.mp3", keyboardKey: "g" },
  { name: "Bb1", type: "black", audio: "Bb1.mp3", keyboardKey: "G" },
  { name: "B1", type: "white", audio: "B1.mp3", keyboardKey: "h" },

  { name: "C2", type: "white", audio: "C2.mp3", keyboardKey: "H" },
  { name: "Db2", type: "black", audio: "Db2.mp3", keyboardKey: "i" },
  { name: "D2", type: "white", audio: "D2.mp3", keyboardKey: "I" },
  { name: "Eb2", type: "black", audio: "Eb2.mp3", keyboardKey: "j" },
  { name: "E2", type: "white", audio: "E2.mp3", keyboardKey: "J" },
  { name: "F2", type: "white", audio: "F2.mp3", keyboardKey: "k" },
  { name: "Gb2", type: "black", audio: "Gb2.mp3", keyboardKey: "K" },
  { name: "G2", type: "white", audio: "G2.mp3", keyboardKey: "l" },
  { name: "Ab2", type: "black", audio: "Ab2.mp3", keyboardKey: "L" },
  { name: "A2", type: "white", audio: "A2.mp3", keyboardKey: "m" },
  { name: "Bb2", type: "black", audio: "Bb2.mp3", keyboardKey: "M" },
  { name: "B2", type: "white", audio: "B2.mp3", keyboardKey: "n" },

  { name: "C3", type: "white", audio: "C3.mp3", keyboardKey: "N" },
  { name: "Db3", type: "black", audio: "Db3.mp3", keyboardKey: "o" },
  { name: "D3", type: "white", audio: "D3.mp3", keyboardKey: "O" },
  { name: "Eb3", type: "black", audio: "Eb3.mp3", keyboardKey: "p" },
  { name: "E3", type: "white", audio: "E3.mp3", keyboardKey: "P" },
  { name: "F3", type: "white", audio: "F3.mp3", keyboardKey: "q" },
  { name: "Gb3", type: "black", audio: "Gb3.mp3", keyboardKey: "Q" },
  { name: "G3", type: "white", audio: "G3.mp3", keyboardKey: "r" },
  { name: "Ab3", type: "black", audio: "Ab3.mp3", keyboardKey: "R" },
  { name: "A3", type: "white", audio: "A3.mp3", keyboardKey: "s" },
  { name: "Bb3", type: "black", audio: "Bb3.mp3", keyboardKey: "S" },
  { name: "B3", type: "white", audio: "B3.mp3", keyboardKey: "t" },

  { name: "C4", type: "white", audio: "C4.mp3", keyboardKey: "T" },
  { name: "Db4", type: "black", audio: "Db4.mp3", keyboardKey: "u" },
  { name: "D4", type: "white", audio: "D4.mp3", keyboardKey: "U" },
  { name: "Eb4", type: "black", audio: "Eb4.mp3", keyboardKey: "v" },
  { name: "E4", type: "white", audio: "E4.mp3", keyboardKey: "V" },
  { name: "F4", type: "white", audio: "F4.mp3", keyboardKey: "w" },
  { name: "Gb4", type: "black", audio: "Gb4.mp3", keyboardKey: "W" },
  { name: "G4", type: "white", audio: "G4.mp3", keyboardKey: "x" },
  { name: "Ab4", type: "black", audio: "Ab4.mp3", keyboardKey: "X" },
  { name: "A4", type: "white", audio: "A4.mp3", keyboardKey: "y" },
  { name: "Bb4", type: "black", audio: "Bb4.mp3", keyboardKey: "Y" },
  { name: "B4", type: "white", audio: "B4.mp3", keyboardKey: "z" },

  { name: "C5", type: "white", audio: "C5.mp3", keyboardKey: "Z" },
  { name: "Db5", type: "black", audio: "Db5.mp3", keyboardKey: "0" },
  { name: "D5", type: "white", audio: "D5.mp3", keyboardKey: "1" },
  { name: "Eb5", type: "black", audio: "Eb5.mp3", keyboardKey: "2" },
  { name: "E5", type: "white", audio: "E5.mp3", keyboardKey: "3" },
  { name: "F5", type: "white", audio: "F5.mp3", keyboardKey: "4" },
  { name: "Gb5", type: "black", audio: "Gb5.mp3", keyboardKey: "5" },
  { name: "G5", type: "white", audio: "G5.mp3", keyboardKey: "6" },
  { name: "Ab5", type: "black", audio: "Ab5.mp3", keyboardKey: "7" },
  { name: "A5", type: "white", audio: "A5.mp3", keyboardKey: "8" },
  { name: "Bb5", type: "black", audio: "Bb5.mp3", keyboardKey: "9" },
  { name: "B5", type: "white", audio: "B5.mp3", keyboardKey: "@" },

  { name: "C6", type: "white", audio: "C6.mp3", keyboardKey: "#" },
  { name: "Db6", type: "black", audio: "Db6.mp3", keyboardKey: "$" },
  { name: "D6", type: "white", audio: "D6.mp3", keyboardKey: "%" },
  { name: "Eb6", type: "black", audio: "Eb6.mp3", keyboardKey: "^" },
  { name: "E6", type: "white", audio: "E6.mp3", keyboardKey: "&" },
  { name: "F6", type: "white", audio: "F6.mp3", keyboardKey: "*" },
  { name: "Gb6", type: "black", audio: "Gb6.mp3", keyboardKey: "(" },
  { name: "G6", type: "white", audio: "G6.mp3", keyboardKey: ")" },
  { name: "Ab6", type: "black", audio: "Ab6.mp3", keyboardKey: "-" },
  { name: "A6", type: "white", audio: "A6.mp3", keyboardKey: "+" },
  { name: "Bb6", type: "black", audio: "Bb6.mp3", keyboardKey: "=" },
  { name: "B6", type: "white", audio: "B6.mp3", keyboardKey: "[" },

  { name: "C7", type: "white", audio: "C7.mp3", keyboardKey: "]" },
  { name: "Db7", type: "black", audio: "Db7.mp3", keyboardKey: ";" },
  { name: "D7", type: "white", audio: "D7.mp3", keyboardKey: "'" },
  { name: "Eb7", type: "black", audio: "Eb7.mp3", keyboardKey: "\\" },
  { name: "E7", type: "white", audio: "E7.mp3", keyboardKey: "/" },
  { name: "F7", type: "white", audio: "F7.mp3", keyboardKey: "," },
  { name: "Gb7", type: "black", audio: "Gb7.mp3", keyboardKey: "." },
  { name: "G7", type: "white", audio: "G7.mp3", keyboardKey: "`" },
  { name: "Ab7", type: "black", audio: "Ab7.mp3", keyboardKey: "~" },
  { name: "A7", type: "white", audio: "A7.mp3", keyboardKey: "!" },
  { name: "Bb7", type: "black", audio: "Bb7.mp3", keyboardKey: "?" },
  { name: "B7", type: "white", audio: "B7.mp3", keyboardKey: "_" },

  { name: "C8", type: "white", audio: "C8.mp3", keyboardKey: "|" },
];

let startRecording = false;
let startPlaying = false;
const pressedKeysArray = [];
let whiteIndex = 0; // count white keys for positioning reference
const togglePlayButton = (e) => {
  e.target.classList.toggle("ri-pause-line");
  e.target.classList.toggle("ri-play-fill");
};

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;       // The character pressed
  playKeyFromKeyboard(keyPressed);
});

function playKeyFromKeyboard(keyPressed) {
  const pianoKey = pianoKeys.find(k => k.keyboardKey === keyPressed);

  if (!pianoKey) return;

  new Audio("./audio-files/" + pianoKey.audio)?.play();

  highlightKey(pianoKey.name);
}

function highlightKey(noteName) {
  const key = document.querySelector(`[data-note="${noteName}"]`);

  if (key) {
    key.classList.add("active");
    console.log(key);
    setTimeout(() => key.classList.remove("active"), 150);
  }
}




const disableBtn = (selectionName) => {
  document.querySelector(selectionName).classList.toggle("disable");
};

document.querySelector("#play-btn").addEventListener("click", (e) => {
  startPlaying = !startPlaying;

  if (pressedKeysArray.length) {
    disableBtn("#recording-btn");
    togglePlayButton(e);
    if (startPlaying) playRecording(e);
  }
});

const pressedKey = (key) => {
  new Audio("./audio-files/" + key.audio).play();
  if (startRecording) {
    pressedKeysArray.push({ ...key, pressedAt: Date.now() });
    document.querySelector("#pressed-keys").value = pressedKeysArray.reduce(
      (prev, val) => prev + " " + val.name,
      ""
    );
  }
};

function playRecording(e) {
  let index = 0;

  function playNext() {
    const key = pressedKeysArray[index];
    new Audio("./audio-files/" + key.audio).play();

    index++;
    if (index >= pressedKeysArray.length) {
      startPlaying = !startPlaying;
      togglePlayButton(e);
      disableBtn("#recording-btn");
      return;
    }

    const delay =
      pressedKeysArray[index].pressedAt - pressedKeysArray[index - 1].pressedAt;

    if (startPlaying) setTimeout(playNext, delay);
  }

  playNext();
}

document.querySelector("#recording-btn").addEventListener("click", (e) => {
  startRecording = !startRecording;
  e.target.classList.toggle("recording-start");
  disableBtn("#play-btn");
  if (startRecording) {
    pressedKeysArray.length = 0;
  }
});

const pianoKeysArea = document.querySelector("#piano-keys");
pianoKeys.forEach((key, i) => {
  const ele = document.createElement("div");
  ele.classList.add("key");

  if (key.type === "white") {
    ele.classList.add("wt-key");
    ele.classList.add(`wt-key${i}`);
    ele.setAttribute("data-note", key.name);

    const left = whiteIndex * 57;
    ele.style.left = left + "px";

    whiteIndex++;
  }
  ele.innerText = key.keyboardKey;
  ele.addEventListener("pointerdown", () => {
    pressedKey(key);
  });
  pianoKeysArea.appendChild(ele);
});

// Render black keys AFTER white keys so they appear on top
pianoKeys.forEach((key, i) => {
  if (key.type === "white") return;

  const ele = document.createElement("div");
  ele.classList.add("key", "bk-key");
  ele.setAttribute("data-note", key.name);

  const whKey = document.querySelector(`.wt-key${i - 1}`);
  ele.style.left = whKey.offsetLeft + 55 + "px";
  ele.innerText = key.keyboardKey;
  ele.addEventListener("pointerdown", () => {
    pressedKey(key);
  });

  pianoKeysArea.appendChild(ele);
});
