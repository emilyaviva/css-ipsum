var p = require('./phrasebook');

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeInitial(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function adjNoun() {
  return pick(p.adj) + ' ' + pick(p.n);
}

function phrase() {
  var d100 = Math.floor(Math.random() * 100);
  var result;
  if (d100 > 80) {
    result = pick(p.n);
  } else if (d100 > 30) {
    result = adjNoun();
  } else {
    result = adjNoun() + ' and ' + pick(p.n);
  }
  d100 = Math.floor(Math.random() * 100);
  if (d100 > 75) {
    result = pick(p.hedges) + ' ' + result;
  }
  return capitalizeInitial(result);
}

function generate() {
  var d100 = Math.floor(Math.random() * 100);
  if (d100 > 66) {
    return phrase() + '. ' + phrase() + '. ' + phrase() + '.';
  } else if (d100 > 33) {
    return phrase() + '. ' + phrase() + '.';
  } else {
    return phrase() + '.';
  }
}

module.exports = generate;
