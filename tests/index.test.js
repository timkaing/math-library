const {
    pad,
    degToRad,
    radToDeg,
    toDollars,
    tax,
    withTax,
    interest,
    mortgage,
    intToHex,
    random,
    randomRange,
    randomColor,
} = require('../src/index');

let global;
const mockMath = Object.create(global.Math);
global.Math = mockMath;
mockMath.random = () => 0.5;

test('Sanity Check', () => {
    // this test passes
})

test('Pad left and right with # of 0', () => {
    expect(pad(1, 2, 2)).toEqual('01.00')
})

test('Degrees to Radians', () => {
    expect(degToRad(0)).toEqual(0);
    expect(degToRad(1)).toEqual(0.017453292519943295);
    expect(degToRad(30)).toEqual(0.5235987755982988);
    expect(degToRad(45)).toEqual(0.7853981633974483);
    expect(degToRad(90)).toEqual(1.5707963267948966);
})


test('Radians to Degrees', () => {
    // expect(radToDeg('a')).toThrow(error);
    expect(radToDeg(0)).toEqual(0);
    expect(radToDeg(1)).toEqual(57.29577951308232);
    expect(radToDeg(5)).toEqual(286.4788975654116);
    expect(radToDeg(10)).toEqual(572.9577951308232);
})


test('Number to USD', () => {
    expect(toDollars(0)).toEqual('$0.00');
    // expect(toDollars(00)).toEqual('$0.00');
    expect(toDollars(0.00)).toEqual('$0.00');
    expect(toDollars(100)).toEqual('$100.00');
    expect(toDollars(100.10)).toEqual('$100.10');
    expect(toDollars(0.01)).toEqual('¢0.01');
    expect(toDollars(.25)).toEqual('¢0.25');
})

test('Calculate Tax', () => {
    expect(tax(0,0)).toEqual(0);
})

test('Calculate with Tax', () => {
    expect(withTax(0,0)).toEqual(0);
})

test('Calculate Interest', () => {
    expect(interest(1, 2, 3)).toBe("1.06");
})

test('Calculate Mortgage', () => {
    expect(mortgage(1,2,3)).toBe(3.2);
})

test('Binary to Hexadecimal', () => {
    expect(intToHex(0)).toEqual(0);
})

test('Random Number between 0 and N', () => {
    expect(random(0)).toEqual(0);
})

test('Random Number between Range', () => {
    expect(randomRange(0,0)).toEqual(0);
})

test('Random Color', () => {
    mockMath.random = () => 0;
    expect(randomColor()).toBe('#000000');
})