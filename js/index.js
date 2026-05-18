const text = `MANUEL DE L’UTILISATRICE — VERSION 1.0

SYSTÈME : EVJF / SIMULATION DE TRANSITION

[ WARNING ]
Ce système n’a jamais été exécuté dans des conditions réelles.

---

ACCÈS EN COURS...

`;

let i = 0;
const terminal = document.getElementById("terminal");

const machine = document.getElementById("machine");
const whisper = document.getElementById("whisper");

machine.play();
whisper.volume = 0.3;
whisper.play();

function type() {
  if (i < text.length) {
    terminal.innerHTML += text[i];
    i++;
    setTimeout(type, 18);
  } else {
    document.getElementById("menu").style.display = "block";
  }
}

type();

function enter(page) {
  document.getElementById("drums").play();
  setTimeout(() => {
    window.location.href = page + ".html";
  }, 900);
}
