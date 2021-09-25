const bill = document.querySelector("#bill")
const numPeople = document.querySelector("#numPeople")
const tipAmmount = document.querySelector("#tipTotal")
const total = document.querySelector("#total")
const buttons = Array.from(document.querySelectorAll(".tip"))

let initialbill
let tipPercentage = 0
let people = 1


function turnActive(number,id){
    const button = document.querySelector("#"+id)
    if (button.classList.contains("active")){
        return button.classList.remove("active")
    }
    buttons.forEach((button)=>{
        button.classList.remove("active")
    })
    button.classList.add("active")
    tipPercentage = parseInt(number)
    tipCalculator()
}

function tipCalculator(){
    if(people==0){people=1}
    console.log(initialbill, people, tipPercentage)

    let ammountToTip = initialbill  * (tipPercentage/100)
    tipAmmount.textContent = (ammountToTip/people).toFixed(2)
    total.textContent = ((initialbill/people)+ammountToTip/people).toFixed(2)
}

function customChange(field){
    buttons.forEach((button)=>{
        button.classList.remove("active")
    })
    tipPercentage =  field.value
    tipCalculator()
}


function num_people(field){
    people =  field.value
    tipCalculator()
}

function bill_change(field){
    initialbill =  field.value
    console.log(initialbill)
    tipCalculator()
}


function reset(){
    buttons.forEach((button)=>{
        button.classList.remove("active")
    })
    initialbill = 0
    people = 1
    tipPercentage = 0 
    bill.value = 0
    numPeople.value = 0 
    tipAmmount.textContent = (0).toFixed(2)
    total.textContent = (0).toFixed(2)
}