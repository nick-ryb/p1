import React from 'react';
import PropTypes from 'prop-types';
// const {PropTypes} = React;
import '../common/CommonModal.css';
import {Icon} from "semantic-ui-react";
import {GlobalLanguage} from "../../App";


const ModalWrapper = props => {
    const handleBackgroundClick = e => {
        if (e.target === e.currentTarget) props.hideModal();
    };

    const onOk = () => {
        props.onOk();
        props.hideModal();
    };

    const okButton = props.showOk
        ? (
            <button
                onClick={onOk}
                disabled={props.okDisabled}
            >
                {props.okText}
            </button>
        ) : null;

    const mobileClass = false ? 'mobile' : '';

    return (
        <GlobalLanguage.Consumer>
            {lang => (
                <div className={'custom-overlay'} onClick={handleBackgroundClick}>
                    <div className={`custom-modal ${mobileClass}`}>
                        <header className={'custom-modal-header'}>
                            <h3>{props.title}</h3>

                            <div onClick={props.hideModal} className={`custom-closeButton ${lang === 'heb' && 'rtl'}`}>
                                <Icon
                                    className={'custom-closeButton-icon'}
                                    name='close'
                                />
                            </div>
                        </header>
                        <div className={'custom-modal-body'}>
                            <div className={'custom-modal-body-content'}>
                                {props.children}
                            </div>
                        </div>
                        {okButton}
                    </div>

                </div>
            )}
        </GlobalLanguage.Consumer>
    );
};

ModalWrapper.propTypes = {
    // props
    title: PropTypes.string,
    showOk: PropTypes.bool,
    okText: PropTypes.string,
    okDisabled: PropTypes.bool,
    width: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,

    // methods
    hideModal: PropTypes.func,
    onOk: PropTypes.func,
};

ModalWrapper.defaultProps = {
    title: '',
    showOk: true,
    okText: 'OK',
    okDisabled: false,
    width: 400,
    onOk: () => {
    }
};

export default ModalWrapper;