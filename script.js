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