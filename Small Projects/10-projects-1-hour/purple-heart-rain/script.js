
function createPurple() {
  let purple = document.createElement('div');
  purple.style.left = (Math.random() * 100) + "vw";
  purple.innerHTML = "💜"
  document.body.appendChild(purple)

  setTimeout(() => {
    purple.remove()
  }, 4000)
}


setInterval(createPurple, 300)