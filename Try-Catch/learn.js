const need_div_zero = 1;
const should_div_b = 1;


function div(a, b) {
    try {
        if (b === 0) {
            throw new Error(need_div_zero);
        }
        if (b === undefined) {
            throw new Error(should_div_b);
        }
    } catch (e) {
        if (e.message === need_div_zero) {
            console.error('На нуль делить нельзя');
        } else if (e.message === should_div_b){
            console.error('Необходимо передать b');
        }
    }
return a / b;
}

console.log(div(14, 0));



