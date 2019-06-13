let count = 0
const addOne = () => {
    count++
    console.log('addOne')
    renderCounterApp()
}
const subOne = () => {
    count--
    console.log('subOne')
    renderCounterApp()
}
const reset = () => {
    count = 0
    console.log('reset')
    renderCounterApp()
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()