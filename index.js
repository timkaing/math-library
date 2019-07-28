// Number Methods
Number.round = function round(number) {
  let remainder = number % 1;
  return number-remainder+(remainder/1+1.5>>1)*1
}

Number.floor = function floor(number) {
  let remainder = number % 1;
  return number-remainder
}

Number.ceil = function ceil(number) {
  let remainder = number % 1;
  return number + (1 - (remainder))
}

// Golden Ratio
Number.goldenratio = function goldenratio(a, b) {
  let lineA = (a/b).toFixed(3)
  let lineB = ((a+b)/a).toFixed(3)
  if(lineA == lineB)  {
    console.log("the lines combined are golden")
  } else {
    console.log("the lines combined aren't golden")
  }
}

// // Pad
// Number.pad = function pad(number, a, b) {

// }


// converts degrees to raidans
function degToRad(degrees) {
  return degrees * Math.PI/180
}

// converts radian to degrees
function radToDeg(radians) {
  return radians * 180/Math.PI
}

function toDollars(amount) {
  strAmount = (amount.toFixed(2)).toString()
  if(amount > 1){
    currSymbol = '$'
    
    console.log(currSymbol+strAmount)
  } else {
    currSymbol = '¢'
    console.log(currSymbol+strAmount)
  }
}

// function intFormat(amount, countryCode, style) {

// }

function tax(amount, rate) {
  amountInt = parseInt(amount)
  rateInt = parseInt(rate)
  rateToDec = rate/100
  taxAmount = parseFloat(amountInt * rateToDec)

  return taxAmount
}

function withTax(amount, rate) {  
  amountInt = parseInt(amount)
  rateInt = parseInt(rate)
  rateToDec = rateInt/100
  taxAmount = (amountInt * rateToDec)
  amountWithTax = parseFloat(amountInt + taxAmount)
  
  return amountWithTax
}

function interest(total, years, ratePercent) {
  let interestRate = ((ratePercent/100) +1)
  return (total * Math.pow(interestRate, years)).toFixed(2)
}

function mortage(principal, numberOfPayments, interestRate) {
  return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1)
}

function intToHex(int){
  return int.toString(16);
}

function random(n) {
  return Math.floor(Math.random() * (+n - 0))
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (+max - +min) + +min)
}

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}