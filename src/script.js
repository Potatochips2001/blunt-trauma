let energy;

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) document.getElementById('btn').click();
})

function getP(e, u) {
  let p = 1 / (1 + Math.pow(Math.E, -(0.09 * (e - u))));
  return p
}

function calculate() {
  energy = document.getElementById('energy').value;
  let pDeath = getP(energy, 103);
  let pDmg = getP(energy, 80);
  document.getElementById('result').innerText = `P=${pDeath}\nChances of brain damage P=${pDmg}`;
  return 0
}
