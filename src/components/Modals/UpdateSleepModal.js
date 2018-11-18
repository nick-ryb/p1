import React, {Component} from 'react';
import Moment from 'moment'
import Formsy from 'formsy-react';
import MyInput from '../common/MyInput';
import 'react-widgets/dist/css/react-widgets.css';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import ModalWrapper from './ModalWrapper';
import _ from "lodash";
import {GlobalParams} from "../../App";

Moment.locale('en');
momentLocalizer();

class UpdateSleepModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        console.log('props', props);

        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = {canSubmit: false};

    }

    // const signIn = provider => {
    //     props.hideModal();
    //     props.signIn(provider);
    // };

    componentWillMount() {
        const data = this.props.childActivityObj;
        this.setState({
            data
        });
    }

    disableButton() {
        this.setState({canSubmit: false});
    }

    enableButton() {
        this.setState({canSubmit: true});
    }

    submit(model) {
        fetch('http://example.com/', {
            method: 'post',
            body: JSON.stringify(model)
        });
    }

    renderInputs = (keys) => {
        const asd = [];
        const formatter = momentLocalizer();
        const formattedTime = (time) => {
            const fullDate = new Date();
// fullDate = Tue Dec 12 2017 11:18:30 GMT+0530 (IST) {}

            const d = Moment(fullDate).format('L'); // d = "12/12/2017"
            const date = Moment(d + ' ' + time).format();

            return Moment(date).toDate();
        };
        _.forEach(keys, (value, key) => {
            console.log(value);
            asd.push(
                <div>
                    <label>
                        {key}
                        <DateTimePicker
                            timeFormat={formatter}
                            date={false}
                            step={5}
                            defaultValue={value ? formattedTime(value) : new Date()}
                            onToggle={(isOpen) => {
                                if (isOpen)
                                    document.body.classList.add("pickerOpen");
                                else
                                    document.body.className = document.body.className.replace("pickerOpen", "");
                            }}/>
                        {/*<input type="text" name="name" value={value} />*/}
                    </label>

                </div>
            )
        });
        return asd
    };

    addNewInput = () => {
        this.setState({isAddActivity: true});
    };

    handleInputChange = (event) => {
        console.log(event);//{}
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        //
        // this.setState({
        //     [name]: value
        // });
    };

    childActivityForm = (isMobile) => {

        let formInputs = [];
debugger
        const data = this.props.childActivityObj;
        let i = 0;
        if (data.length > 0) {
            for (i; i < data.length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    formInputs.push(
                        isMobile ?
                        <MyInput
                            key={`input_${i}_${j}`}
                            type={'time'}
                            name={data[i][j]}
                            value={data[i][j]}
                            validations={{
                                matchRegexp: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
                            }}
                            validationError="This is not a valid time"
                            label={data[i][j]}
                            required
                        />
                        :
                                    <div>
                                        <p>orbit</p>
                                    </div>
                    );
                }
            }
        }

        if (this.state.isAddActivity) {
            formInputs.push(
                <input
                    key={`input${i}`}
                    value={this.state[`input${i}`]}
                    onChange={this.handleInputChange}
                />
            );
        }

        //button to add new input
        formInputs.push(<button key={'add_new_input'} onClick={(e) => {
            e.preventDefault();
            this.addNewInput()
        }}>ADD NEW INPUT</button>);

        //button to save
        formInputs.push(<button key={'submit_form'} onClick={() => console.log('save clicked')}>SAVE FORM</button>);

        return formInputs;
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
                            width={400}
                            showOk={false}
                        >
                            {/*<form>*/}

                            {/*</form>*/}
                            <Formsy ref='form'
                                    onValidSubmit={this.submit}
                                    onInvalidSubmit={(e) => {
                                        console.log(e);
                                    }}
                                    onValid={this.enableButton}
                                    onInvalid={this.disableButton}
                                    onChange={this.handleInputChange}
                            >
                                {this.childActivityForm(isMobile)}
                                <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                            </Formsy>
                        </ModalWrapper>
                    );
                }}
            </GlobalParams.Consumer>
        );
    }
}

export default UpdateSleepModal;