function updateDisplay(num) {
  const num_str = "" +num;
  if(num_str.length > 9) 
  {
    document.getElementById('screen').innerText =num_str.substr(0,9);
  }else {
  return document.getElementById('screen').innerText += num;
  }
}

let limit = 0;

function one() {
  if (limit < 9) {
    updateDisplay(1);
    limit += 1;
  }
}

function two() {
  if (limit < 9) {
    updateDisplay(2);
    limit += 1;
  }
}

function three() {
  if (limit < 9) {
    updateDisplay(3);
    limit += 1;
  }
}

function four() {
  if (limit < 9) {
    updateDisplay(4);
    limit += 1;
  }
}

function five() {
  if (limit < 9) {
    updateDisplay(5);
    limit += 1;
  }
}

function six() {
  if (limit < 9) {
    updateDisplay(6);
    limit += 1;
  }
}

function seven() {
  if (limit < 9) {
    updateDisplay(7);
    limit += 1;
  }
}

function eight() {
  if (limit < 9) {
    updateDisplay(8);
    limit += 1;
  }
}

function nine() {
  if (limit < 9) {
    updateDisplay(9);
    limit += 1;
  }
}

function cero() {
  if (limit < 9) {
    updateDisplay(0);
    limit += 1;
  }
}

function point() {
  if (limit < 9) {
    updateDisplay('.');
    limit += 1;
  }
}

let condition;
let FirstNumber;
let SecondNumber;
let result;

function pluss() {
  condition = 1;
  FirstNumber = parseFloat(updateDisplay());
  document.getElementById('screen').innerText = '';
  limit = 0;
}

function less() {
  condition = 2;
  FirstNumber = parseFloat(updateDisplay());
  document.getElementById('screen').innerText = '';
  limit = 0;
}

function multiply() {
  condition = 3;
  FirstNumber = parseFloat(updateDisplay());
  document.getElementById('screen').innerText = '';
  limit = 0;
}

function divided() {
  condition = 4;
  FirstNumber = parseFloat(updateDisplay());
  document.getElementById('screen').innerText = '';
  limit = 0;
}

function ac() {
  document.getElementById('screen').innerText = '';
  limit = 0;
}

function equals() {
  if (condition === 1) {
    condition = 0;
    SecondNumber = parseFloat(updateDisplay());
    document.getElementById('screen').innerText = '';
    limit = 0;
    result = FirstNumber + SecondNumber;
    if (result < 0 || result > 999999999) {
      updateDisplay('ERROR');
    } else {
      updateDisplay(result);
    }
  } else if (condition === 2) {
    condition = 0;
    SecondNumber = parseFloat(updateDisplay());
    document.getElementById('screen').innerText = '';
    limit = 0;
    result = FirstNumber - SecondNumber;
    if (result < 0 || result > 999999999) {
      updateDisplay('ERROR');
    } else {
      updateDisplay(result);
    }
  } else if (condition === 3) {
    condition = 0;
    SecondNumber = parseFloat(updateDisplay());
    document.getElementById('screen').innerText = '';
    limit = 0;
    result = FirstNumber * SecondNumber;
    if (result < 0 || result > 999999999) {
      updateDisplay('ERROR');
    } else {
      updateDisplay(result);
    }
  } else if (condition === 4) {
    condition = 0;
    SecondNumber = parseFloat(updateDisplay());
    document.getElementById('screen').innerText = '';
    limit = 0;
    result = FirstNumber / SecondNumber;
    if (result < 0 || result > 999999999) {
      updateDisplay('ERROR');
    } else {
      updateDisplay(result);
    }
  }
}

six();
seven();
eight();
nine();
cero();
point();
pluss();
less();
one();
two();
three();
four();
five();
multiply();
divided();
ac();
equals();
