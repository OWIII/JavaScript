// function betterThanAverage(classPoints, yourPoints) {
//     let sumPoints = 0;
//     for (i = 0; i < classPoints.length; i++) {
//         sumPoints += classPoints[i];
//     }
//     let average = sumPoints / classPoints.length;
//     if (yourPoints > average)
//     {
//         console.log(true);
//     }
//     else
//         {
//         console.log(false);
//         }
// }
//

// Objects
//
// let obj = {
//     width : 'str',
//     func : function() {
//         console.log( this);
//     }
// };
//  obj.func();

//
//
// obj.newProperties = 'Monkey';
//
// console.log( obj.newProperties);
//
// let a = {prot : 2}, b = {prot : 3}, c = {prot : 5};
//
// a = b = c = { tolken : 'AddProp'};
//
// // Delete properties
//
// delete b.tolken;
// console.log(a, b, c);

// var monkey = 987;

// Arrays

// let array = [1, 2, 3, 4, 'golem', true, 73 ];
// let arrayMatrix = [
//     [1, 3, 5, 6],['arr', 'gegeg', 'erer'],[45, 64, 56],[545, 6565, 6566]
// ];

// array[7] = 'addElementOfArray';
// array.splice(1,2);

// let newArray = arrayMatrix.concat(array);

// console.log(newArray);

// let arrayWithoutEndElement = array.unshift('Привет');
//
// console.log(array);

// var i;
//
// for (i = 0; i <= 10; i++) {
//     console.log(i);
// };

// let obj = {
//     propp : 'one',
//     proppSecond : 'two'
// };
// var prod;
//
// for ( prod in obj) {
//     console.log( prod + ' : ' + obj[prod]);
// }


//var foo = 'String';

//console.log(navigator.userAgent);

//

//alert(screen.width + ' \n' + screen.height );

//console.log(location.toString());

// DOM

// (function() {
//     let elems = document.getElementsByTagName('p'); // NodeList
//     console.log(elems);
//
//     for (let i = 0, len = elems.length; i < len; i++) {
//         console.log(elems[i].tagName);
//     }
// })();

//let func = () => {
    // let elemsByClass = document.getElementsByClassName('paragrah');
    // let elemById = document.getElementById('four');
    //let elemSelector = document.querySelectorAll(' div p'); // getElementsByClassName работает быстрее
    //let elemSelector = document.querySelector('#four');
    //console.log(elemSelector);
//};

//func();

// function oddCount(n){
//     let arr = [];
//     let i = 0;
//     arr[i] = n - 2;
//     n = n - 2;
//     let len;
//
//     while (n > 1)
//     {
//         n = n - 2;
//         arr[i+1] = n;
//         i = i + 1;
//     }
//     len = arr.length;
//     return len;
// };

// Easy

// function oddCount(n){
//     let num = Math.floor(n / 2);
//     console.log(num);
// };
//
// oddCount(15);

// let doc = document;
// let elem = doc.createElement('p');
// //let content = doc.createTextNode('Шестой');
// let insId = doc.getElementById('four');
// elem.innerHTML = '<strong>БУБАЛЬТРОН</strong>';
// //elem.appendChild(content);
//
// //insId.parentNode.appendChild(elem);
// insId.parentNode.insertBefore(elem, insId);
// //insId.parentNode.replaceChild(elem, insId);
//
// insId.parentNode.removeChild(elem);

// let add = document.getElementById('four');
//
// add.classList.add('css-class');
// add.classList.add('css-second');
// add.classList.toggle('css-second');


// function fn() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++ ) {
//         sum += arguments[i];
//     }
//     return sum;
// }
//
// let result = fn(2, 6, 6, 3, 1, 4, 6);
// console.log(result);

// Declaration
// function fn(otherFn) {
//     otherFn();
// }
//
// fn(() => console.log("Привет"));


// Expression
// let fn2 = function fn2(a, b) {
//     return a + b;
// };
//
// result1 = fn(1, 2);
// result2 = fn2(1, 2);
//
// console.log(result1);
// console.log(result2);

// function showDifference(a, b) {
// //     binaryNumber1 = a.toString(2);
// //     binaryNumber2 = b.toString(2);
// //
// //     let left1 = '';
// //     let left2 = '';
// //
// //     for ( i = binaryNumber1.length; i < 8; i++) {
// //         left1 += '0';
// //         numBinary1 = left1 + binaryNumber1;
// //         return numBinary1;
// //     };
// //
// //     for ( j = binaryNumber2.length; j < 8; j++) {
// //         left2 += '0';
// //         numBinary2 = left2 + binaryNumber2;
// //         return numBinary2;
// //     };
// //
// //     let index = 0;
// //     while ( index < 8) {
// //         if numBinary1[index] !== numBinary2[index] {
// //             return (numBinary1, numBinary2);
// //         }
// //     }
// //     console.log(numBinary1, numBinary2);
// // };
// //
// // showDifference( 14, 31);

let NewDiv = document.createElement('div');
	NewDiv.textContent = "Привет";

document.body.appendChild(NewDiv);



























