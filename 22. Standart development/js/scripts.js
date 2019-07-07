(function () {
    let buttons = document.getElementsByTagName('button');

    let changeColor = function (evt) {
        console.log(evt.timeStamp);
        if (this.id === 'day')
        {
            document.body.className = 'day';
        }
        else if (this.id === 'night')
        {
            document.body.className = 'night';
        };
    };

    let message = function () {
        alert("Hi");
    };

    for (let i = 0, len = buttons.length; i < len; i++) {
        buttons[i].addEventListener('click', changeColor, false);
        //buttons[i].addEventListener('click', message, false);

    };

})();



