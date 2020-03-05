const players = {
  qapi1: "Shukur 2",
  red1: "Ismayil 2",
  red2: "Elvin 2",
  red3: "Ramin 2",
  red4: "Sonmez 2",
  red5: "Aydin",
  qapi2: "Namiq",
  green1: "Elvin",
  green2: "Ramin",
  green3: "Sonmez",
  green4: "Aydin",
  green5: "Ismayil"
};

Object.keys(players).forEach(item => {
  document.getElementById(item).setAttribute("data-name", players[item]);
});
