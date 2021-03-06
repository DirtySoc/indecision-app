console.log('app.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Helping you decide!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderApp()
}

const clearData = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]

const renderApp = () => {
    // JSX - JavaScript XML
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {/*<p>{app.options.length > 0 ? 'Here are your options!' : 'NO OPTIONS'}</p>*/}
            <button disabled ={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearData}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" autoComplete="off" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}
renderApp()

