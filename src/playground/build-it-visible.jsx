// DOM elements
const appRoot = document.getElementById('app')

let visible = false

const toggleVis = () => {
    visible = !visible
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVis}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {visible && (
                <div>
                    <p>
                        These are super secret! Don't show anyone!
                    </p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()