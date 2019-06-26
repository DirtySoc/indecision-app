

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if (options) {
            this.setState(() => ({ options }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        try {
            if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)
            }
        } catch (error) {
            // Do nada
        }

    }
    componentWillUnmount() {
        console.log('Component did unmount.')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prev) => ({
            options: prev.options.filter((option) => option != optionToRemove)
        }))
    }
    handlePick() {
        const optionSelect = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[optionSelect])
    }
    handleAddOption(option) {
        if (!option) {
            return `Enter valid value to add item`
        } else if (this.state.options.indexOf(option) > -1) {
            return `This option already exists`
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    render() {
        const subtitle = 'Let me decide!'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}

const Option = (props) => {
    // You have to pass inline function to onClick for remove because
    // the event object is returned otherwise.
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
                </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const newOption = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(newOption)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' autoComplete='disabled' name='option'></input>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))