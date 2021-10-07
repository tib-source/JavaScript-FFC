const hrs = 'hrs'
const currentValue = Array.from(document.querySelectorAll('.bottom h1'))
const previousValue = Array.from(document.querySelectorAll('.bottom small'))

console.log(currentValue)


const data = {
  daily: {
    previous: [7, 2, 1, 1, 3, 1],
    current: [5, 1, 0, 1, 1, 0]
  },
  weekly: {
    previous: [36, 8, 7, 5, 10, 2],
    current: [32, 10, 4, 4, 5, 0]
  },
  monthly: {
    previous: [128, 29, 19, 18, 23, 11],
    current: [103, 23, 13, 11, 21, 7]
  }
}


let times = ['daily', 'weekly', 'monthly']
let timeName = ['Day', 'Week', 'Month']
let currentTime = ""


const cards = Array.from(document.querySelectorAll('.grid'))
cards.shift()// this removed the profile card element which doesnt need to be indexed
console.log(cards)

const buttons = document.querySelectorAll('.options a')

buttons.forEach((button, index) => (
  button.addEventListener('click', () => {
    currentTime = timeName[index]
    let time = data[times[index]]
    console.log(time)
    fetchData(time)
  })
))


const fetchData = (time) => {
  cards.forEach((card, index) => {
    let prev = time.previous[index]
    let curr = time.current[index]
    updateData(index, prev, curr)
  })
}


const updateData = (index, prev, curr) => {
  currentValue[index].textContent = curr + hrs
  previousValue[index].textContent = `Last ${currentTime} - ${prev} hours`
}