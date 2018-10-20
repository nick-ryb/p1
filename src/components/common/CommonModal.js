import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './CommonModal.css';

import UpdateSleepModal from '../Modals/UpdateSleepModal';

// class CommonModal extends Component {
//     state = {
//         open: false,
//     };
//
//     componentDidMount() {
//         this.props.onRef(this)
//     }
//
//     componentWillUnmount() {
//         this.props.onRef(undefined)
//     }
//
//     onOpenModal = () => {
//         this.setState({open: true},() => {
//             this.props.onOpen && this.props.onOpen();
//         });
//     };
//
//     onCloseModal = () => {
//         this.setState({open: false}, () => {
//             this.props.onClose && this.props.onClose();
//         });
//     };
//
//     render() {
//         const {open} = this.state;
//
//         return (
//             <Modal
//                 open={open}
//                 onClose={this.onCloseModal}
//                 center
//
//                 classNames={{overlay: 'custom-overlay', modal: 'custom-modal', closeButton: 'custom-closeButton'}}
//             >
//                 {this.props.children}
//             </Modal>
//         )
//     }
// }

const CommonModal = props => {

    if (!props.currentModal) {
        document.body.style.overflow = "initial";
        console.log('initial3');
        return null;
    }

    // console.log('hidden2');
    // document.body.style.overflow = "hidden";

    switch (props.currentModal) {
        case 'UPDATE_SLEEP':
            return <UpdateSleepModal {...props} />;

        default:
            return null;
    }
};

export default CommonModal