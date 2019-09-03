console.log('Перед SetTimeout');

setTimeout(() => {
    console.log('Внутри SetTimeout');
}, 3000);

console.log('После SetTimeout');

setTimeout(() => {
    console.log('Внутри SetTimeout');
}, 10000);