// Animations and Timing

(function () {

    let delay = 100;
    i = 0;

    let startTimer = function () {

        let elem = document.getElementById('circle');
            bottom = elem.offsetTop;
            left = elem.offsetLeft;

        //console.log("Hi");
        if (i < 10) {
            //console.log('Функция стартаймер ' + (i + 1) + ' сработала');
            setTimeout(startTimer, delay);
            elem.style.top = bottom +20 +'px';
            elem.style.left = left +10 +'px';
            i++;
        }


    };
    //console.log('Not Timer');
    //setTimeout(startTimer, 3000);
    let timer = setTimeout(startTimer, delay);

})();


// Animation circle


