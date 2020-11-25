const day = require('./day.js')


let ending = good.length - 1
const goodDay = function() {
    const time = setInterval(function() {
    comsole.clear()
    console.log(day[ending])
    ending--
    if (ending < 0) {
        clearInterval(time)
        }
    }, 1000)
}

goodDay();