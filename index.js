let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let home = 0;
let guest = 0;

function add1(team) {
  team == "homeTeam"
    ? (homeScore.innerHTML = home += 1)
    : (guestScore.innerHTML = guest += 1);
}

function add2(team) {
  team === "homeTeam"
    ? (homeScore.innerHTML = home += 2)
    : (guestScore.innerHTML = guest += 2);
}

function add3(team) {
  team === "homeTeam"
    ? (homeScore.innerHTML = home += 3)
    : (guestScore.innerHTML = guest += 3);
}
