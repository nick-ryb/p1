import React, {Component} from 'react';
import Moment from 'moment'
import Formsy from 'formsy-react';
import _ from "lodash";
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import MyInput from '../common/FormsyInput';
import ModalWrapper from './ModalWrapper';
import {GlobalParams} from "../../App";


Moment.locale('en');
momentLocalizer();

class UpdateSleepModal extends Component {

    constructor(props) {
        super(props);

        this.state = {canSubmit: false};
    }

    componentWillMount() {
        console.log('this.props', this.props);
        const data = this.props.childActivityObj;
        console.log('componentWillMount DATA: ', data);
        this.props.onOpen(data);
        this.setState({
            data
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.props.onClose(this.state.data);

    }

    formOnValid = () => {
        this.enableSubmitButton(true);
    };
    formOnInvalid = () => {
        this.enableSubmitButton(false);
    };

    enableSubmitButton = (isEnable) => {
        this.setState({canSubmit: isEnable});
    };

    submit = (model) => {
        if (this.state.canSubmit) {
            fetch('http://example.com/', {
                method: 'post',
                body: JSON.stringify(model)
            }).then(
                (res) => {
                    console.log(res);

                }
            ).catch(
                (error) => {
                    console.log(error);

                }
            );
        }
    };

    renderInput = (data, i, j, isMobile) => {
        const formatter = momentLocalizer();
        const label = j === 0 ? `sleep cycle ${i + 1} - from` : `sleep cycle ${i + 1} - till`;
        const name = `sleep_input_${i}_${j}`;
        const formattedTime = (time) => {
            const fullDate = new Date();
// fullDate = Tue Dec 12 2017 11:18:30 GMT+0530 (IST) {}

            const d = Moment(fullDate).format('L'); // d = "12/12/2017"
            const date = Moment(d + ' ' + time).format();

            return Moment(date).toDate();
        };

        if (isMobile) {
            return (
                <div>

                <MyInput
                    key={name}
                    type={'time'}
                    name={name}
                    value={data[i][j]}
                    validations={{
                        matchRegexp: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
                    }}
                    validationError="This is not a valid time"
                    label={label}
                    required
                />
                    <p onClick={() => {
                        this.deleteInput(i);
                    }}>DELETE</p>
                </div>
            )
        } else {
            return (
                <div>
                    <label>
                        {label}
                        <DateTimePicker
                            timeFormat={formatter}
                            date={false}
                            name={name}
                            step={5}
                            defaultValue={data[i][j] ? formattedTime(data[i][j]) : new Date()}
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
                        <p onClick={() => {
                            this.deleteInput(i);
                        }}>DELETE</p>
                    </label>
                </div>
            )
        }
    };

    addNewInput = () => {
        this.setState({
            data: [...this.state.data, [
                "00:00",
                "00:00"
            ]]
        });
    };

    deleteInput = (index) => {
        let data = this.state.data;
        const newData = _.pullAt(data, [index]);

        console.log('datadatadata',data);

        if (window.confirm("Are you sure you want to delete?")) {
            this.setState({
                data: data
            });
        }
    };

    handleInputChange = (event) => {
        console.log(event);//{}
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        //{sleep_input_0_0: "08:01", sleep_input_0_1: "09:00", sleep_input_1_0: "13:15", sleep_input_1_1: "14:45"}
        let newData = [];

        _.forEach(event, (val, key) => {
            console.log('newData',newData);

            const keyArr = key.split('_');
            console.log(keyArr[2]);
            console.log(!!newData[keyArr[2]]);

            if (!!newData[keyArr[2]]) {
                newData[keyArr[2]].push(val)
            } else {
                newData.push([val])

            }

        });
        console.log('newData', newData);
        this.setState({
            data: newData
        });
    };

    childActivityForm = (isMobile) => {

        const data = this.state.data;
        let formInputs = [];

        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    formInputs.push(
                        this.renderInput(data, i, j, isMobile)
                    );
                }
            }
        }

        return formInputs;
    };

    onAddNewInputClick = (e) => {
        console.log('onAddNewInputClick clicked event', e);
        e.preventDefault();
        this.addNewInput();
    };

    onSaveClick = (e) => {
        console.log('onSaveClick clicked event', e);
    };

    render() {

        return (
            <GlobalParams.Consumer>
                {GParams => {
                    const {isMobile} = GParams;

                    return (

                        <ModalWrapper
                            {...this.props}
                            title={`Sleep Update for ${this.props.child.first_name}`}
                            showOk={false}
                        >
                            <Formsy
                                onValidSubmit={this.submit}
                                onInvalidSubmit={(e) => {
                                    console.log(e);
                                }}
                                onValid={this.formOnValid}
                                onInvalid={this.formOnInvalid}
                                onChange={this.handleInputChange}
                            >
                                {this.childActivityForm(isMobile)}

                                {/*button to add new input*/}
                                <button
                                    key={'add_new_input'}
                                    onClick={this.onAddNewInputClick}>ADD NEW INPUT
                                </button>

                                {/*button to save*/}
                                <button
                                    key={'submit_form'}
                                    onClick={this.onSaveClick}>SAVE FORM
                                </button>

                                {/*submit button*/}
                                <button
                                    type="submit"
                                    disabled={!this.state.canSubmit}>SUBMIT
                                </button>
                            </Formsy>
                        </ModalWrapper>
                    );
                }}
            </GlobalParams.Consumer>
        );
    }
}

export default UpdateSleepModal;