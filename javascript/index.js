const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds());
  milDecElement.textContent = milliSeconds[0];
  milUniElement.textContent = milliSeconds[1];
}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.innerText = chronometer.split();
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}
  
function setStopBtn() {
  if (btnLeftElement.classList.contains("stop")) btnLeftElement.innerText = "STOP";
  chronometer.start(printTime);
}

function setSplitBtn() {
  if (btnRightElement.classList.contains("split")) btnRightElement.innerText = "SPLIT";
}

function setStartBtn() {
  if (btnLeftElement.classList.contains("start")) btnLeftElement.innerText = "START";
  chronometer.stop();
}

function setResetBtn() {
  if (btnRightElement.classList.contains("reset")) btnRightElement.innerText = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
  
  if (btnLeftElement.classList.contains("start")) setStartBtn();
  if (btnLeftElement.classList.contains("stop")) setStopBtn();

  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
    
  if (btnRightElement.classList.contains("split")) setSplitBtn();
  if (btnRightElement.classList.contains("reset")) setResetBtn();

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

if (btnRightElement.classList.contains("split")) printSplit();

if (btnRightElement.classList.contains("reset")) {
  chronometer.reset();
  printTime();
  clearSplits();
}

});
