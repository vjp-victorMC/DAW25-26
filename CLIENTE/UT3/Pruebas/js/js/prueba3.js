let num = 1;

let idInterval = setTimeout(function () {
    console.log(++num);
    if (num > 10) {
        clearTimeout(idInterval);
    }
}, 1000);

