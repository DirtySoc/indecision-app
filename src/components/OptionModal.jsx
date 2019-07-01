import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('app'))

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.closeModal}>OK</button>
    </Modal>
)

export default OptionModal