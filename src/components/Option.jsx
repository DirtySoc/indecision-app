import React from 'react'

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

export default Option