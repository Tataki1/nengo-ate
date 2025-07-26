const quiz = [
  { q: "日本の首都は？", a: "東京" },
  { q: "1+1は？", a: "2" },
  { q: "水の化学式は？", a: "H2O" },
];

let current = 0;

function showQuestion() {
  document.getElementById("question").textContent = quiz[current].q;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correct = quiz[current].a;

  if (userAnswer === correct) {
    document.getElementById("result").textContent = "✅ 正解！";
  } else {
    document.getElementById("result").textContent = "❌ 不正解！正解は「" + correct + "」";
  }

  current = (current + 1) % quiz.length;
  setTimeout(showQuestion, 1500);
}

window.onload = showQuestion;
