console.log("Hello World");
console.log("にんじゃわんこ");

console.log(5 + 3);
console.log(20 - 8);
console.log("4 + 5");

console.log(8 * 4);
console.log(24 / 4);
console.log(7 % 2);


let name = "にんじゃわんこ";
console.log(name);

let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number += 3;

console.log(number);

// 変数numberの値を2で割ってください
number /= 2;

console.log(number);
console.log(number);

const language ="フランス語";
console.log(language);
console.log(language + "を話せます");

const name = "にんじゃわんこ";
const age = 14;
console.log(`ぼくの名前は${name}です`);
console.log(`今は${age}歳です`);


const level = 12;
if (level > 10) {
  console.log("レベルが10より大きいです");
}

const password = "ninjawanko";
if (password == "ninjawanko") {
  console.log("ログインに成功しました");
}
if (password != "ninjawanko") {
  console.log("パスワードが間違っています");
}

const age = 17;
if (age >= 20) {
  console.log("私は20歳以上です");
} else {
  console.log("私は20歳未満です");
}

const age = 17;
if (age >= 20) {
  console.log("私は20歳以上です");
} else if (age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}

const age = 24;
if (age >= 20 && age < 30) {
  console.log("私は20代です");
}

const n = 2;
switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
}

const n = 4;
switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  default:
    console.log("凶です");
    break;
}


let number = 0;
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

let number = 1;
while (number <= 100) {
  console.log(number);
  number += 1;
}

for (let number = 1; number <=100; number++) {
  console.log(number);
}

for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }
}

const animals = ["dog", "cat", "sheep"];
console.log(animals);
console.log(animals[0]);
console.log(animals[2]);
animals[2] = "rabbit";
console.log(animals[2]);
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
console.log(animals.length);
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

const character = {name: "にんじゃわんこ", age: 14};
console.log(character);

const character = {name: "にんじゃわんこ", age: 14};
console.log(character.name);
character.age = 20;
console.log(character);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];
console.log(characters[0]);
console.log(characters[1].name);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  const character = characters[i];
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  }
};
console.log(`店名:${cafe.name}`);
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);

const hello = function() {
  console.log("こんにちは！");
}
hello();

const greet = () => {
  console.log("こんにちは！");
};
greet();

const greet = (name) => {
  console.log(`こんにちは、${name}さん`);
};
greet("ひつじ仙人");

const add = (number1, number2) => {
  console.log(number1 + number2);
};
add(5, 7);

const half = (number) => {
  return number / 2;
};
const result = half(130);
console.log(`130の半分は${result}です`);

const check = (number) => {
  return number % 3 == 0;
};
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}

const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
}
const result = toMinutes(3, 20);
console.log(`${result}分`);

const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
}
console.log(animal.name);
animal.greet();

class Animal {
  constructor () {
    console.log("インスタンスを生成しました");
  }
}
const animal = new Animal();

class Animal {
  constructor() {
    this.name = "レオ";
    this.age = 3;
  }
}
const animal = new Animal();
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const animal = new Animal("モカ", 8);
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("こんにちは");
  }
}
const animal = new Animal("レオ", 3);
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
animal.greet();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("こんにちは");
  }
  info() {
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const animal = new Animal("レオ", 3);
animal.greet();
animal.info();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("こんにちは");
  }
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const animal = new Animal("レオ", 3);
animal.info();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("こんにちは");
  }
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
class Dog extends Animal {
}const dog = new Dog("レオ", 4);
dog.info();