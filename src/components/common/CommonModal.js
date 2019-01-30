import React, {useContext} from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import {GlobalParams} from '../../App'
import {getLabel} from "../../labels/labels";
import './CommonModal.css';

const CommonModal = props => {

    const {lang} = useContext(GlobalParams);
    const {
        showConfirm = false,
        showCancel = false,
        confirmBtnText = getLabel(lang, 'ok'),
        confirmBtnBsStyle = 'primary',
        confirmBtnCssClass = '',
        confirmBtnStyle = {},
        cancelBtnText = getLabel(lang, 'cancel'),
        cancelBtnBsStyle = 'link',
        cancelBtnCssClass = '',
        cancelBtnStyle = {},
        customIcon,
        placeholder,
        focusConfirmBtn = true,
        required = true,
        validationMsg = 'Please enter a response!',
        validationRegex = /^.+$/,
        defaultValue,
        inputType = 'text',
        style = {},
        customClass,
        allowEscape,
        closeOnClickOutside = true,
        hideOverlay = false,
        disabled = false,
        timeout = 0,
        type = 'default',
        show = true,
        btnSize = 'lg',
        title,
        onConfirm,
        onCancel,
        beforeMount,
        afterMount,
        beforeUpdate,
        afterUpdate,
        beforeUnmount,
        children = null
    } = props;

    console.log('props for commonModal', props);
    if (!show) {
        document.body.style.overflow = "initial";
        return null;
    }

    console.log('showConfirm',showConfirm);
    console.log('showCancel',showCancel);

    const defaultProps = {
        showConfirm,
        showCancel,
        confirmBtnText,
        confirmBtnBsStyle,
        confirmBtnCssClass,
        confirmBtnStyle,
        cancelBtnText,
        cancelBtnBsStyle,
        cancelBtnCssClass,
        cancelBtnStyle,
        customIcon,
        placeholder,
        focusConfirmBtn,
        required,
        validationMsg,
        validationRegex,
        defaultValue,
        inputType,
        style,
        customClass,
        allowEscape,
        closeOnClickOutside,
        hideOverlay,
        disabled,
        timeout,
        type,
        show,
        btnSize,
        title,
        children,
        onConfirm: (e) => {
            console.log('onConfirm', e);
            onConfirm && onConfirm();
        },
        onCancel: (e) => {
            console.log('onCancel', e);
            onCancel && onCancel();
        },

        beforeMount: (e) => {
            beforeMount && beforeMount(e);
        },
        afterMount: (e) => {
            afterMount && afterMount(e);
        },
        beforeUpdate: (e) => {
            beforeUpdate && beforeUpdate(e);
        },
        afterUpdate: (e) => {
            afterUpdate && afterUpdate(e);
        },
        beforeUnmount: (e) => {
            beforeUnmount && beforeUnmount(e);
        },
    };

    if (show) {
        document.body.style.overflow = "hidden";

        return (
            <SweetAlert
                {...defaultProps}
            >
                <div>
                    {children}
                </div>
            </SweetAlert>
        )

    }
};

export {CommonModal}