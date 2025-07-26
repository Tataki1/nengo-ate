const quiz = [
{q:'五か条のご誓文', a:'1868'},
{q:'版籍奉還', a:'1869'},
{q:'ドイツ統一', a:'1871'},
{q:'廃藩置県', a:'1871'},
{q:'学生公布', a:'1872'},
{q:'徴兵令', a:'1873'},
{q:'地租改正', a:'1873'},
];

let current = 0;

function showQuestion() {
  document.getElementById("question").textContent = quiz[current].q;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const correct = quiz[current].a;
  document.getElementById("result").textContent = correct;
  current = (current + 1) % quiz.length;
  setTimeout(showQuestion, 1500);
}

window.onload = showQuestion;
