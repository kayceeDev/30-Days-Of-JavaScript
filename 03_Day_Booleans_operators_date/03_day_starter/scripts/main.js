// this is your main.js script

let firstName = "Ekene";
let lastName = "Country";
let city = "Enugu";
let age = 26;
let isMarried = false;
year = "2021";

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof city, typeof age, typeof isMarried, typeof year);

console.log("10" === 10);
console.log(parseInt("9.8") === 10);

console.log(2 > 1);
console.log(1 < 2);

console.log(2 < 1);
console.log(true && false);
console.log("123" == 123);

console.log("jargon".length < 2);
console.log("python".length == 2);

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// let base = prompt(" enter a base: ");
// let height = prompt("Enter a height: ");
// console.log(0.5 * base * height);

yearOfBirth = prompt("Enter year of Birth: ");

if (typeof yearOfBirth) {
  console.log("You entered a String");
}
if (yearOfBirth > 2003) {
  console.log(
    `You are ${
      now.getFullYear() - yearOfBirth
    }. you will be allow to drive after ${yearOfBirth - 2003} year`
  );
} else {
  console.log(
    `You are ${now.getFullYear() - yearOfBirth}. You are old enough to drive`
  );
}
