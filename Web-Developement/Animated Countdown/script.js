const percentage = document.querySelector(".percentage")  
const bg = document.querySelector(".bg")  
let load = 0
let loader = setInterval(loading, 20)
function loading(){
    load++

    if (load > 99){
        clearInterval(loader)
        percentage.style.display = `none`
    }
    percentage.innerText = `${load}%`
    percentage.style.opacity = map(load, 100, 0, 1, 0)
    bg.style.filter = `blur(${map(load, 100, 0, 10, 0)}px)`
    
  }


let map = (curr, max, min, newMax, newMin) => {
    let currPercentage = (curr/max-min)
    let newRange = newMax - newMin
    return newRange* (1 - currPercentage) 
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}