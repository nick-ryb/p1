import {withFormsy} from 'formsy-react';
import React from 'react';
import "./MyInput.css"

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        const {label, getValue, getErrorMessage, isRequired, type} = this.props;
        return (
            <div className={'inputWrap'}>
                <p>

                <span className={'label'}>{label}</span>
                <span className={'required'}>{isRequired() ? '*' : null}</span>
                </p>
                <input
                    onChange={this.changeValue}
                    type={type}
                    value={getValue() || ''}
                />
                <span>{getErrorMessage()}</span>
            </div>
        );
    }
}

export default withFormsy(MyInput);