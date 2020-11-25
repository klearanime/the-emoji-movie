const day = require('./day.js');


let i = 0
const badDay = function() { 
    const time = setInterval(function() {
    for (let i = 0; i < day.length; i++) {
        console.clear()
        console.log(day[i])
        i = i + 1
    }
        if (i >= day.length) {
        clearInterval(time)
    }
    }, 1000)
}

badDay();