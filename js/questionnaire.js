document.getElementById("heartbeat").play();

function addMember() {
  const div = document.createElement("div");

  div.innerHTML = `
    <input name="team_name" placeholder="Nom">
    <input name="team_firstname" placeholder="Prénom">
    <input name="team_id" placeholder="Identifiant">
    <button type="button" onclick="this.parentElement.remove()">supprimer</button>
  `;

  document.getElementById("team").appendChild(div);
}
