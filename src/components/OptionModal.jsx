import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('app'))

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <p className="modal__body">{props.selectedOption}</p>
        <button className="button" onClick={props.closeModal}>OK</button>
    </Modal>
)

export default OptionModal