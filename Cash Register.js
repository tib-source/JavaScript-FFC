
`
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


`


const currency = {
    "PENNY":         1,
    "NICKEL":        5,
    "DIME":         10,
    "QUARTER":      25,
    "ONE":         100,
    "FIVE":        500,
    "TEN":        1000,
    "TWENTY":     2000,
    "ONE HUNDRED":10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
    const changeTotal = cash*100 - price*100;
    let changeSum = changeTotal;
    let change = []
    let filteredCid = cid.filter((element) => {
      return element[1] !== 0
    }).reverse()
    let cidTotal = 0
    filteredCid.forEach( elem => {
      let curr = elem[0]
      let currValue = elem[1] * 100
      cidTotal += currValue  
      let payable = 0
      while(changeSum >= currency[curr] && currValue > 0){
        payable +=  currency[curr] 
        changeSum -= currency[curr]
        currValue -= currency[curr]
      }
  
      if(payable > 0){
        change.push([curr, payable/100])
      }
    })
    console.log(changeSum)
    let status = changeSum > 0 ? "INSUFFICIENT_FUNDS": changeSum < 0 ? "CLOSED": "OPEN"
  
    if (status == "INSUFFICIENT_FUNDS"){
      change = []
    }
    if (changeSum == 0 && cidTotal == changeTotal){
      status = "CLOSED"
      change = cid 
    }
    console.log({status: status, change: change})
    return {status: status, change: change}
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])