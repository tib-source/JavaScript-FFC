const counter = 0

function createPurple() {
  let purple = document.createElement('div');
  purple.style.left = (Math.random() * 100) + "vw";
  purple.innerHTML = "💜"
  document.body.appendChild(purple)
  counter++
}


setInterval(createPurple, 300)