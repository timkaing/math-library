/* MATH LIBRARY */

/**
 * @desc Rounds a number to the nearest integer
 * 
 * @param {number} number The number to be rounded
 * @return {number} Returns the rounded number
 */
Number.round = function round(number) {
  let remainder = number % 1;
  return number-remainder+(remainder/1+1.5>>1)*1
}

/**
 * @desc Rounds a number to its nearest integer downwards
 * 
 * @param {number} number The number to be rounded
 * @return {number} Returns the downward rounded number
 */
Number.floor = function floor(number) {
  let remainder = number % 1;
  return number-remainder
}

/**
 * @desc Rounds a number to its nearest integer upwards
 * 
 * @param {number} number The number to be rounded
 * @return {number} Returns the upward rounded number
 */
Number.ceil = function ceil(number) {
  let remainder = number % 1;
  return number + (1 - (remainder))
}

/**
 * @desc Determines if two lines make up the golden ratio
 * 
 * @param {number} a The first line segment
 * @param {number} b The second line segment
 * 
 * @return {boolean} Returns true if golden ratio exists
 */
Number.goldenRatio = function goldenRatio(a, b) {
  let lineA = (a/b).toFixed(3)
  let lineB = ((a+b)/a).toFixed(3)
  if(lineA == lineB)  {
    return true
  } else {
    return false
  }
}

/**
 * @desc Pads number with x 0's before and y 0's after
 * 
 * @param {number} number The value to pad
 * @param {number} x The amount of 0's before
 * @param {number} y The amount of 0's after
 */
const pad = (number, x, y) => {
  let numAsStr = ""

  if(number%number == 0){
    if(y > 0){
      numAsStr = String((number))+ '.'
    }else {
      numAsStr = String((number))
    }
  } else {
    numAsStr = String((number))
  }

  let left = numAsStr.split(".")[0]
  let right = numAsStr.split(".")[1]
 
  let prependAmt = left.length - x
  if (prependAmt < 0){
    for(let i = 0; i < -(prependAmt); i++) {
      left = "0" + left
    }
  }

  let appendAmt = right.length - y
  if (appendAmt < 0){
    for(let i = 0; i < -(appendAmt); i ++) {
      right = right + "0"
    }
  }
  
  return left + "." + right
  
 }

/**
 * @desc Converts degrees to radians
 * 
 * @param {number} deg The degree value
 * 
 * @return {number} Returns The degree value in radians
 */
const degToRad = (degrees) => {
  return degrees * Math.PI/180
}

/**
 * @desc Converts radians to degrees
 * 
 * @param {number} deg The radian value
 * 
 * @return {number} Returns The raidan value in degrees
 */
const radToDeg = (radians) => {
  return radians * 180/Math.PI
}

/**
 * @desc Formats given number to USD format ($/¢)
 * 
 * @param {number} amount The value to format
 * 
 * @return {number} Returns The amount in dollars
 */
const toDollars = (amount) => {
  let strAmount = (amount.toFixed(2)).toString()
  if(amount == 0) {
    return "$0.00"
  } else if(amount > 1){
    const currSymbol = '$'
    return currSymbol + strAmount
  } else {
    const currSymbol = '¢'
    return currSymbol + strAmount
  }
}

// const =  intFormat(amount, countryCode, style) => {
  
// }


/**
 * @desc Calculates the amount of tax
 * 
 * @param {number} amount The value to be taxed
 * @param {number} rate The value of the tax rate
 */
const tax = (amount, rate) => {
  let amountInt = parseInt(amount)
  let rateInt = parseInt(rate)
  let rateToDec = rateInt/100
  let taxAmount = parseFloat(amountInt * rateToDec)

  return taxAmount
}

/**
 * @desc Calculates the amount with tax
 * 
 * @param {number} amount The value to be taxed
 * @param {number} rate The value of the tax rate
 * @return {number} amountWithTax Returns the amount with tax
 */
const withTax = (amount, rate) => {
  let amountInt = parseInt(amount)
  let rateInt = parseInt(rate)
  let rateToDec = rateInt/100
  let taxAmount = (amountInt * rateToDec)
  let amountWithTax = parseFloat(amountInt + taxAmount)
  
  return amountWithTax
}

/**
 * @ Calculates the interest
 * 
 * @param {number} total The value of the total
 * @param {number} years The value of the years to be charged
 * @param {number} ratePercent The value of the interest rate (%)
 * #returns {number} Reuturns the amount of interest
 */
const interest = (total, years, ratePercent) => {
  let interestRate = ((ratePercent/100) +1)
  return (total * Math.pow(interestRate, years)).toFixed(2)
}

/**
 * @desc Calculates the mortgage amount
 * 
 * @param {number} principal The balance of your mortgage
 * @param {number} numberOfPayments The amount of payments
 * @param {number} interestRate The value of the interest Rate (%)
 * @return {number} Returns the mortgage amount
 */
const mortgage = (principal, numberOfPayments, interestRate) => {
  return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1)
}

/**
 * @desc Converts value from decimal to hexadecimal
 * 
 * @param {number} int The number
 * @return {string} Returns the hexadecimal value
 */
const intToHex = (int)=> {
  return parseInt(int.toString(16));
}

/**
 * @desc Returns a random integer between 0 and n
 * 
 * @param {number} n The max number of the range from 0
 * @return{number} Returns a random integer
 */
const random = (n) => {
  return Math.floor(Math.random() * (+n - 0))
}

/**
 * Returns a random interger between a range of numbers
 * 
 * @param {number} min The minimum value of the range
 * @param {number} max The max value of the range
 * @return {number} Returns a random integer
 */
const randomRange = (min, max) => {
  return Math.floor(Math.random() * (+max - +min) + +min)
}

/**
 * Returns a random color (hex format)
 * 
 * @return {string} Returns a random color (hex format)
 */
const randomColor = () => {
  let randomHex = Math.floor(Math.random()*16777215).toString(16)
  return "#" + randomHex
}

module.exports.pad = pad
module.exports.degToRad = degToRad
module.exports.radToDeg = radToDeg
module.exports.toDollars = toDollars
module.exports.tax = tax
module.exports.withTax = withTax
module.exports.interest = interest
module.exports.mortgage = mortgage
module.exports.intToHex = intToHex
module.exports.random = random
module.exports.randomRange = randomRange
module.exports.randomColor = randomColor