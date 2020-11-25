const day = require('./day.js')
const badDay = require('./badDay.js')

let slow = 0

const slowDay = function() {
    console.log(clear)
    console.log(day[slow])
    slow++
}

setInterval(slowDay, 3000)




const day = require('./day.js');

let slow = 0;
const slowDay = function() {
    const time = setInterval(function() {
        console.clear();
        console.log(day[slow]);
        slow++;
        if(slow <= day.length) {
            clearInterval(time);    
        }
    }, 3000);
}

slowDay();