# Math Library
![Travis (.com)](https://img.shields.io/travis/com/daisukiyo/js-date-library)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/daisukiyo/math-library)
## Description

A simple math library that does 14 useful things

This library can also be found on NPM

# Installation (coming soon)

Run the Following command in your project's directory:
```
npm i tk-math-library --save
```
Once installed, require it on the top of your applications main point of entry (index.js):
```
require('tk-math-library')
```

# Functions

## Check Golden Ratio

Takes two segments and returns whether or not they make up the golden ratio

### Examples
```javascript
Number.goldenRatio(5, 5) // returns False
```

## Number Methods

The following methods do the following:
- Round: Rounds a number to the nearest integer
- Floor: Rounds a number to its nearest integer downwards
- Ceil: Rounds a number to its nearest integer upwards

### Examples

```javascript
Number.round(59.75) // returns 60.00
Number.ceil(59.01) // returns 60.00
Number.floor(59.99) // returns 59.00

```

## Pad

Pads number with x 0's before and y 0's after

### Examples

```javascript
pad(1, 2, 2) // returns '01.00'
```

## Degree/Radian Conversion

Converts radians to degrees and vice versa

### Examples

```javascript
degToRad(1) // returns 0.017453292519943295
radtoDeg(1) // returns 57.29577951308232
```

## Degree/Radian Conversion

Converts radians to degrees and vice versa

### Examples

```javascript
degToRad(1) // returns 0.017453292519943295
radtoDeg(1) // returns 57.29577951308232
```

## Calculate Tax Amount + With Tax

Calculates the amount of tax with or without the original amount

### Examples
```javascript
tax(100, 10) // returns  10
withTax(100, 10) // returns 110
```

## Calculate Interest
Calculates the interest

### Examples
```javascript
interest(1, 2, 3) // returns 1.06
```

## Calculate Mortgage
Calculates the mortgage amount

### Examples
```javascript
mortgage(1,2,3) // returns 2.3
```

## Random Functions

Finds random:
1. Number
2. Number within a range
3. Hexcolor Value

### Examples
```javascript
random() // returns random number
randomRange(1,5) // returns a number between 1 and 5
randomColor() // returns a random hex color value #ffffff
```
