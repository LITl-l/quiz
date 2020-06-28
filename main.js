let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let btnA = document.getElementById("A");
let btnB = document.getElementById("B");
let btnC = document.getElementById("C");
let btnD = document.getElementById("D");
let Score = 0;
let cnt = 40;
let flag = true;

//Timer
let Time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "Score : " + Score + " | Time : " + cnt + " s";
  } else {
    res.style.color = "red";
    res.textContent = "Score : " + Score + " | Time Up";
    que.textContent = "GAME OVER";
    flag = false;
    clearInterval(Time);
  }
}, 1000);
let num = 0;
let max = 10;
let correct = new Array(max);
correct = ["3", "1", "4", "3", "3", "4", "3", "1", "2", "2"];
let Aval = new Array(max);
Aval = [
  "C#",
  "python",
  "JavaScript",
  "C++",
  "PHP",
  "HTML",
  "Nim",
  "Java",
  "Rust",
  "Visual Basic",
];
let Bval = new Array(max);
Bval = [
  "HTML",
  "CSS",
  "C",
  "Rust",
  "Visual Basic",
  "V",
  "Git",
  "C#",
  "GO",
  "V",
];
let Cval = new Array(max);
Cval = [
  "Nim",
  "V",
  "Git",
  "Ruby",
  "CSS",
  "Java",
  "F#",
  "JQuery",
  "Kotlin",
  "C",
];
let Dval = new Array(max);
Dval = [
  "PHP",
  "Ruby",
  "Kotlin",
  "R",
  "SQL",
  "Swift",
  "CSS",
  "Python",
  "Swift",
  "A",
];

//On Click button
function OnClick(No) {
  btnA.value = "A." + Aval[num + 1];
  btnB.value = "B." + Bval[num + 1];
  btnC.value = "C." + Cval[num + 1];
  btnD.value = "D." + Dval[num + 1];
  if (flag) {
    if (correct[num] == No) {
      console.log("正解");
      que.textContent = "Question" + (num + 1) + " is Correct!";
      Score++;
      res.textContent = "Score : " + Score + " | Time : " + cnt + " s";
    } else {
      console.log("不正解");
      que.textContent = "Question" + (num + 1) + " is Fault!";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "Question" + (num + 1) + "\nWhich?";
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "Finish!";
      clearInterval(Time);
      btnA.value = "";
      btnB.value = "";
      btnC.value = "";
      btnD.value = "";
      if (Score == max) {
        que.textContent = "Perfect!!";
        logo.src = "img/clear.png";
      }
    }
  }
}
