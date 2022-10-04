function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function coverHoursToMinutes(hours) {
  return hours * 60;
}
var hoursIntoMinutes = coverHoursToMinutes(2);
console.log('result', hoursIntoMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var concatenatedValue = getGreeting('World');
console.log('result', concatenatedValue);

function multipluAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var muliplyanddivide = multipluAndDivideBy5(35, 10);
console.log('result', muliplyanddivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('result', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log('result', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('result', fullName);

function cube(number) {
  return number * number * number;
}
var cubeOfTheNumber = cube(5);
console.log('result', cubeOfTheNumber);
