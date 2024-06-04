const slateGreyBtn = document.getElementById("slateGreyBtn");
const cadetBlueBtn = document.getElementById("cadetBlueBtn");
const taupeBtn = document.getElementById("taupeBtn");
const randomBtn = document.getElementById("randomBtn");



function setSlateGrey() {
  document.body.style.backgroundColor = 'rgb(21, 52, 72)';
}

function setCadetBlue() {
  document.body.style.backgroundColor = 'rgb(60, 91, 111)';
}

function setTaupe() {
  document.body.style.backgroundColor = 'rgb(148, 137, 121)';
}

function setRandomColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
}



slateGreyBtn.addEventListener('click', setSlateGrey);
cadetBlueBtn.addEventListener('click', setCadetBlue);
taupeBtn.addEventListener('click', setTaupe);
randomBtn.addEventListener('click', setRandomColor);