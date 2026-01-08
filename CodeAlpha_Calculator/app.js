let display = document.getElementById('display');

function add(val) {
  display.value += val;
}

function clearAll() {
  display.value = '';
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function square() {
  if (display.value) {
    display.value = Math.pow(display.value, 2);
  }
}

function squareRoot() {
  if (display.value) {
    display.value = Math.sqrt(display.value);
  }
}

function toggleMode() {
  document.body.classList.toggle('light');
}
