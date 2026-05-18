const messages = [
  "Connexion au serveur EVJF...",
  "Analyse du profil joueur...",
  "Génération des missions...",
  "Chargement des coéquipières...",
  "Synchronisation instable...",
  "Finalisation..."
];

let p = 0;
let i = 0;

const bar = document.getElementById("bar");
const status = document.getElementById("status");

setInterval(() => {
  p += 2;
  bar.innerText = p + "%";

  if (p % 20 === 0 && i < messages.length) {
    status.innerText = messages[i];
    i++;
  }

  if (p >= 100) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("error").style.display = "block";
  }
}, 120);

const videos = [
  "https://www.youtube.com/embed/00oJQDwNDyY",
  "https://www.youtube.com/embed/BfW72FjVC6k",
  "https://www.youtube.com/embed/yJfh59iEscg",
  "https://www.youtube.com/embed/Y0pdUyFC7As",
  "https://www.youtube.com/embed/NpqfUI7DDB4",
  "https://www.youtube.com/embed/y0sF5xhGreA",
  "https://www.youtube.com/embed/xFnoap4kcNY",
  "https://www.youtube.com/embed/aZ4NlkFxbhM",
  "https://www.youtube.com/embed/__ON3C3GRis",
  "https://www.youtube.com/embed/uAa4lMf3jSg"
];

function video() {
  const v = videos[Math.floor(Math.random() * videos.length)];
  document.getElementById("video").innerHTML =
    `<iframe width="560" height="315" src="${v}" allowfullscreen></iframe>`;
}
