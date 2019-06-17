class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVis = this.handleToggleVis.bind(this)
        this.state = {
            visible: false
        }
    }
    handleToggleVis() {
        this.setState((prev) => {
            return {
                visible: !prev.visible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVis}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>
                            These are super secret! Don't show anyone!
                    </p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// // DOM elements
// const appRoot = document.getElementById('app')

// let visible = false

// const toggleVis = () => {
//     visible = !visible
//     renderApp()
// }

// const renderApp = () => {
//     const template = (
        // <div>
        //     <h1>Visibility Toggle</h1>
        //     <button onClick={toggleVis}>
        //         {visible ? 'Hide details' : 'Show details'}
        //     </button>
        //     {visible && (
        //         <div>
        //             <p>
        //                 These are super secret! Don't show anyone!
        //             </p>
        //         </div>
        //     )}
        // </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// renderApp()