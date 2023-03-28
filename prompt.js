console.log('loading')
const showAlert = () => {
    alert('can I help you')
}
const askSomething = () => {
    const decision = confirm('Are you sure')
    console.log(decision);
    if (decision === true) {
        console.log('I love Allah')
    }
    else {
        console.log('I hate Money')
    }
}
const getUserInfo = () => {
    const name = prompt('Tell us your name')
    console.log(name)
    if (!!name) {
        console.log('Welcome here')
    }
}