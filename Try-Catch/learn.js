function div(a, b) {
    if (b === 0) {
        throw new Error('На нуль делить нельзя');
    }
    if (b === undefined) {
        throw new Error('Нужно передать b');
    }

    return a / b;
}

try {
    console.log(div(14, 0));
} catch (e) {
    console.error(e.message);
}





