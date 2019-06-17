class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Let me decide!'
        const options = ['Thing One', 'Thing two', 'Thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('HandlePick!')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        alert('Remove All!')
        // console.log(this.props.options)
    }
    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        let newOption = e.target.elements[0].value
        // console.log(newOption)
        if (newOption != '') {
            alert(newOption)
            e.target.elements[0].value = ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' autoComplete='disabled'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))