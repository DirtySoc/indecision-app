import React from 'react'
import AddOption from './AddOption.jsx'
import Options from './Options.jsx'
import Header from './Header.jsx'
import Action from './Action.jsx'
import OptionModal from './OptionModal.jsx'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelected = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prev) => ({
            options: prev.options.filter((option) => option != optionToRemove)
        }))
    }
    handlePick = () => {
        const optionSelect = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ selectedOption: this.state.options[optionSelect] }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return `Enter valid value to add item`
        } else if (this.state.options.indexOf(option) > -1) {
            return `This option already exists`
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
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
    render() {
        const subtitle = 'Let me decide!'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.handleClearSelected}
                />
            </div>
        )
    }
}