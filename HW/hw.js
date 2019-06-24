console.log("Hello, world");
console.log("My second console message");
console.log("What Is Dead May Never Die");

// Comments # 1

//Comments # 2

console.log(3 ** 4);

console.log(6 - (-81));

console.log((Infinity + Infinity) / 2);

console.log((Infinity / Infinity) / 2);

console.log((5 ** 2) - (3 * 7));

// Function

var obj = {
    prop: "Hi, world"
};
var fu = function () {
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

obj.prop = "Goodbuy";

console.log(obj);
console.log(typeof fu);
console.log(typeof obj);
console.log(typeof arr);

arr[2] = 24;
console.log(arr);

// Str

str = "hi, world";

console.log(str.toUpperCase());

//Screening

console.log("Dragon's \"on\" my way's");

console.log("\"Khal Drogo's favorite word is \"athjahakar\"\"");

//Screening sequences

console.log("-Are you hungry?\n-Yeeeeees");


console.log("");
console.log("Dunckan");

console.log("- Did Joffrey agree?\n- He did. He also said \"I love using \\n\".");

console.log("Hi" + ",Peter");

console.log(String.fromCharCode(62));

let greeting = "Father";

console.log(greeting);

let motto = "What Is Dead May Never Die!";
console.log(motto);

motto = "What are you doing?";

console.log(motto);

// Euro + Dollars

let dollars = 50 * 1.25;
let rublesPerDollars = 60;
let rubles = dollars * rublesPerDollars;
console.log(dollars, "\nThe price is " + rubles + " rub");


// Testing my skills
let info = "We couldn't verify you mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName2 = 'Joffrey';
let greeting2 = 'Hello';

console.log(greeting2 + "," + firstName2 + "!" + "\n" + intro + "\n" + info);

let firstName = 11;
let secondName = -100;

console.log(firstName * secondName);

// Kings rooms

let king = 'King Balon the 6th';
let numberKing = 6;
let numberCastles = 17;

console.log(king + ' has ' + (numberKing * numberCastles) + ' rooms.');


const army = 'the white walkers';

console.log(army);


const firstName3 = 'Joffrey';
const greeting3 = 'Hello';

console.log(`${greeting3}, ${firstName3}!`);

const nameOfKing = "Hello, monkey";
console.log(nameOfKing[8]);

//data types

console.log(2.333);
console.log("2.333");
console.log(116);

let number = "10";
let number2 = number;
console.log(number2);

// Famillia

let sunameFirst = "Karavai";
let sunameSecond = "Petrov";
let sunameThird = "Ivanov";

console.log(sunameFirst[2] + sunameSecond[1] + sunameThird[3]
    + sunameSecond[4] + sunameSecond[2]);

// Type

console.log("7" - (-8 - (-2)));

// Function

const result = Math.pow(2, 5);
console.log(result);


// Function 1.2

const old = 3.4;
const resultOld = Math.ceil(old);
console.log(resultOld);

// Min - Max

const min = Math.min(3, 10, 22, -3, 0);
console.log(min);

// Function in function

const text = "hello";
const upperText = text.toUpperCase();
console.log(upperText);

// Type

const motta = true;
console.log(typeof(motta));

// Properties

const proper = "Hello";
console.log(proper.length);

const trim = "Хачапури             ";
console.log(trim);

// Properties 2

const name2 = "Owiii";
nameLength = name2.length + 5;
console.log(nameLength);
console.log(`Hi, ${name2}`);
console.log("Hi, " + name2.toUpperCase());

// Trim

const sentence = "Привет, как у тебя дела?";
console.log(sentence.substring(8, 18).length);


// Functions

// Определяем функцию

const showMyText = () => {
    const text_1 = "It's my first function";
    console.log(text_1);
};
// Вызываем функцию
showMyText();

const showTodayDate = (date) => {
    console.log("Today is " + date);
};

showTodayDate("6 December");

const printSeq = (str, numberRepeat) => {
    console.log(str.repeat(numberRepeat));
};

printSeq("OWIII ", 24);


const sub4 = (a, b) => {
    const result = a - b;
    return result;
};

const result_num = sub4(10, 7);
console.log(result_num);

// Test

const hiddenNumberCard = (numberCard, number = 4) => {
    lost_path = numberCard.slice(-4);
    maskNumber = lost_path.padStart(number + 4, "*");
    console.log(maskNumber);
};

hiddenNumberCard("123456789987654");

// Boolean

const isInfant = (age) => age < 1;
console.log(isInfant(0.2));

//

const isMister = (wordName) => wordName === "Mister";
console.log(isMister("Mister"));

//

const hasTargaryenReference = (string) => {
    console.log(string.substring(0, 9) === "Targaryen");

};

hasTargaryenReference("TargaryenKilimangjaro");

//

const isLannisterSoldier = (color, shield) => {
    answer = (color === "red" && shield === "null");
    console.log(answer);
};

isLannisterSoldier("red", "null");

//

const isNeutralSoldier = (colorArmor, colorShield) => {
    answerN = colorArmor !== "red" && colorShield === "black";
    console.log(answerN);
};

isNeutralSoldier("yellow", "black");

//

const getSentenceTone = (sentence5) => {
    if (sentence5.toUpperCase() === sentence5) {
        return "Scream";
    }
    return "Normal";
};

console.log(getSentenceTone("HR"));

//

const normalizeUrl = (urlSite) => {
    if (urlSite.substring(0, 7) === "http://") {
        return urlSite;
    }
    else return "http://" + urlSite;
};

console.log(normalizeUrl("rutracker.net"));

// If Else

const convertText = (sentenceMain) => {
    if (sentenceMain.substring(0, 1) !== sentenceMain.substring(0, 1).toUpperCase()) {
        return sentenceMain.split("").reverse().join("");
    } else return sentenceMain;

};

console.log(convertText("politica"));

















