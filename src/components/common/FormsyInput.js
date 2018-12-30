import React, {useContext} from 'react';
import {withFormsy} from 'formsy-react';
import "./FormsyInput.css"
import Moment from "moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import {GlobalParams} from "../../App";

class FormsyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.momentFormatter = momentLocalizer();
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    formattedTime = (time) => {//time = hh:mm
        const fullDate = new Date();
        // fullDate = Tue Dec 12 2017 11:18:30 GMT+0530 (IST) {}

        const d = Moment(fullDate).format('L'); // d = "12/12/2017"
        const date = Moment(d + ' ' + time).format();

        return Moment(date).toDate();// return =
    };

    handleInputChange = (event) => {
        console.log('handleInputChange', event);//{}
        this.changeValue(event);
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        //{sleep_input_0_0: "08:01", sleep_input_0_1: "09:00", sleep_input_1_0: "13:15", sleep_input_1_1: "14:45"}
        // let newData = [];
        //
        // _.forEach(event, (val, key) => {
        //     console.log('newData', newData);
        //
        //     const keyArr = key.split('_');
        //     console.log(keyArr[2]);
        //     console.log(!!newData[keyArr[2]]);
        //
        //     if (!!newData[keyArr[2]]) {
        //         newData[keyArr[2]].push(val)
        //     } else {
        //         newData.push([val])
        //
        //     }
        //
        // });
        // console.log('newData', newData);
        // this.setState({
        //     data: newData
        // });
    };

    _renderWebInput = () => {
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

    };
    _renderMobileInput = () => {
        const {label, getValue, value, getErrorMessage, isRequired, type, name} = this.props;

        if(type === 'time'){
            return this._renderTimeInput();
        }

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
        )
    };

    _renderTimeInput= () => {
        const {label, getValue, value, getErrorMessage, isRequired, type, name} = this.props;
        return (
            <div className={'inputWrap'}>
                <p>
                    <span className={'label'}>{label}</span>
                    <span className={'required'}>{isRequired() ? '*' : null}</span>
                </p>
                <DateTimePicker
                    timeFormat={this.momentFormatter}
                    date={false}
                    name={name}
                    step={5}
                    defaultValue={value ? this.formattedTime(value) : new Date()}
                    onChange={(e) => {
                        console.log(e);

                        this.handleInputChange(Moment(e).format('HH:mm'))
                    }}
                    onToggle={(isOpen) => {
                        if (isOpen)
                            document.body.classList.add("pickerOpen");
                        else
                            document.body.className = document.body.className.replace("pickerOpen", "");
                    }}/>
                <span>{getErrorMessage()}</span>
            </div>
        )
    };

    _renderInput = () => {

        return (
            <GlobalParams.Consumer>
                {GParams => {
                    const {isMobile} = GParams;
                    return (
                        isMobile ? this._renderMobileInput() : this._renderWebInput()
                    )
                }}
            </GlobalParams.Consumer>
        );
    };

    render() {
        return this._renderInput();
    }
}

export default withFormsy(FormsyInput);