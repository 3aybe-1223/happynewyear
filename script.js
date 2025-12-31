const message =
`I just wanted to wish you
a really happy new year 🌸

I hope this year brings you
lots of smiles, calm moments,
and things that make you happy.

You deserve a great one ✨`;

let index = 0;
const speed = 45;
const textElement = document.getElementById("text");

function typeText() {
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

function reveal() {
  document.getElementById("extra").style.display = "block";
}

typeText();
