import React, { Component } from 'react'
import {Modal,ModalHeader,ModalFooter,ModalBody,Button} from 'reactstrap';
 class Modals extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.open}>
                    <ModalHeader>Cart Items</ModalHeader>
                    <ModalBody>sdds</ModalBody>
                    <ModalFooter>
                        <Button color="danger">ds</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Modals
