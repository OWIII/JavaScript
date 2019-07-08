// (function () {
//     let cli= document.getElementById('html');
//
//     let func = function() {
//         alert('Hi');
//     };
//
//     cli.addEventListener('click', func, false);
//
// })();


// let maps = [1, 2, 3];
//
// let arraySquared = maps.map(function(num) {
//     return num * 2;
// });
//
// console.log(arraySquared);


// function maps(x){
//     let arraySquared = maps.map(function(num) {
//         return num * 2;
//     });
// };
//
// maps([1, 2, 3]);

function maps(x){
    let arraySquared = x.map(function(num) {
        return num * 2;
    });
    return arraySquared;
};

console.log(maps([1, 2, 3]));
