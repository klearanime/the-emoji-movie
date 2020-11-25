const day = require('./day.js')


let i = 0
const timeMaster = function() {
    const getInput = process.argv[2]
    const time = setInterval(function() {
        console.clear()
        console.log(day[i])
        i++ 
        if (i <= day.length) {
            clearInterval(time)
        }

    }, getInput * 1000)

}

timeMaster()

