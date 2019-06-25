console.log("Hi");


// Operation while +if

const countChars = (str, symbol) => {
    let index = 0;
    const countEnd = str.length - 1;
    let i = 0;

    while (index !== countEnd) {
        if (str[index] === symbol) {
            i += 1;
        }
        index += 1;
    }
    console.log(i);
};

countChars("Параллельно", "ь");

// +1

const filterString = (stroke, sign) => {
    let ind = 0;
    const strokeLength = stroke.length;
    let strokeEnd = "";

    while (ind <= (stroke.length - 1)) {
        if (stroke[ind] === sign) {
            ind += 1;
        }
        else {
            strokeEnd = strokeEnd + stroke[ind];
            ind += 1;
        }
    }
    console.log(strokeEnd);
};


filterString("Гиппопотамусопоропон", "п");

// End

const sumOfSeries = (firstNumber, lastNumber) => {
    if (firstNumber !== lastNumber) {
        resultSumm = firstNumber;
        while ((lastNumber - firstNumber) !== 0) {
            resultSumm = resultSumm + (firstNumber + 1);
            firstNumber = firstNumber + 1;
        }
        console.log(resultSumm);
    }
    else console.log(firstNumber + lastNumber);
};

sumOfSeries(-4, 7);

