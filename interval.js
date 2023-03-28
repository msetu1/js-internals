console.log('first')
console.log('second')
console.log('third')
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds)
    if (seconds === 10) {
        clearInterval(intervalId)
    }
}, 500)
console.log('fourth')
console.log('fifth')