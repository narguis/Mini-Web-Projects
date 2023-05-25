let checked = [0, 0, 0, 0, 0, 0, 0, 0, 0];

window.onload = fill;

let turncounter = document.getElementById("turncounter");
let turn = 1;

function fill() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.innerHTML = "\u2060";
    box.style.background = "white";
  });
}

function boxclick(boxid) {
  let clicked = -1;
  switch (boxid) {
    case "btn1":
      clicked = 0;
      break;
    case "btn2":
      clicked = 1;
      break;
    case "btn3":
      clicked = 2;
      break;
    case "btn4":
      clicked = 3;
      break;
    case "btn5":
      clicked = 4;
      break;
    case "btn6":
      clicked = 5;
      break;
    case "btn7":
      clicked = 6;
      break;
    case "btn8":
      clicked = 7;
      break;
    case "btn9":
      clicked = 8;
      break;
  }

  let box = document.getElementById(boxid);

  if (turn % 2 != 0) {
    checked[clicked] = 1;
    box.innerHTML = "X";
  } else {
    checked[clicked] = 2;
    box.innerHTML = "O";
  }

  if (turn < 9) {
    turn++;
    turncounter.innerHTML = `Turn ${turn}`;
  } else if (turn < 10) {
    turn++;
  }

  checkvictory(checked[0], checked[1], checked[2]);
  checkvictory(checked[3], checked[4], checked[5]);
  checkvictory(checked[6], checked[7], checked[8]);

  checkvictory(checked[0], checked[3], checked[6]);
  checkvictory(checked[1], checked[4], checked[7]);
  checkvictory(checked[2], checked[5], checked[8]);

  checkvictory(checked[0], checked[4], checked[8]);
  checkvictory(checked[6], checked[4], checked[2]);

  box.disabled = true;
  box.style.color = "black";
  box.style.backgroundColor = "white";
  box.style.borderColor = "black";
}

function restart() {
  let reset = confirm("Do you want to restart the game?");

  if (reset) {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      box.disabled = false;
      box.innerHTML = "\u2060";
      box.style.background = "white";
    });

    turn = 1;
    turncounter.innerHTML = `Turn ${turn}`;

    for (let i in checked) {
      checked[i] = 0;
    }
  }
}

function checkvictory(a, b, c) {
  if (a == b && b == c && a != 0) {
    if (a == 1) {
      alert("X wins the game!");
      let boxes = document.querySelectorAll(".box");

      boxes.forEach((box) => {
        box.disabled = true;
        box.style.color = "black";
        box.style.backgroundColor = "white";
        box.style.borderColor = "black";
      });
      restart();
    } else {
      alert("O wins the game!");
      let boxes = document.querySelectorAll(".box");

      boxes.forEach((box) => {
        box.disabled = true;
        box.style.color = "black";
        box.style.backgroundColor = "white";
        box.style.borderColor = "black";
      });
      restart();
    }
  } else if (turn > 9) {
    alert("It's a draw!");
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      box.disabled = true;
      box.style.color = "black";
      box.style.backgroundColor = "white";
      box.style.borderColor = "black";
    });
    restart();
  }
}
