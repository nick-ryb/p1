import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './CommonModal.css';

class CommonModal extends Component {
    state = {
        open: false,
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;

        return (
            <Modal
                open={open}
                onClose={this.onCloseModal}
                center

                classNames={{overlay: 'custom-overlay', modal: 'custom-modal', closeButton: 'custom-closeButton'}}
            >
                {this.props.children}
            </Modal>
        )
    }
}

export default CommonModal