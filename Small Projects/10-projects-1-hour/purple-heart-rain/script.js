const counter = 0

function createPurple() {
  let purple = document.createElement('div');
  purple.innerHTML = "💜"
  document.body.appendChild(purple)
  counter++
}


setInterval(createPurple, 1000)