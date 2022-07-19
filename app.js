(function () {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let equal = document.querySelector('.btn-equal')
    let clear = document.querySelector('.btn-clear')
    let sclear = document.querySelector('.btn-sclear')


    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            console.log(e.target.dataset.num);
            let value = e.target.dataset.num;
            screen.value += value
            // console.log(screen.value);
        })
    })

    equal.addEventListener('click', () => {
        if (screen.value === '') {
            screen.value = ''
        }
        else {
            let result = eval(screen.value);
            // console.log(result);
            screen.value = result
        }
    })

    clear.addEventListener('click', () => {
        screen.value = ''
    })

    sclear.addEventListener('click', () => {
        if (screen.value) {
            let onScreen = screen.value.slice(0, -1)
            screen.value = onScreen
        }
    })

})();