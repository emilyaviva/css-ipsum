function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeInitial(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function adjNoun() {
  return pick(p.adj) + ' ' + pick(p.n);
}

function generate() {
  var result = adjNoun() + ' ' + pick(p.n) + ' ' + pick(p.n) + '. ' + adjNoun() + ', ' + pick(p.n) + ' ' + adjNoun();
  return capitalizeInitial(result);
}
