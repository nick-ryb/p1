import React from 'react';
import Moment from 'moment'
import 'react-widgets/dist/css/react-widgets.css';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import ModalWrapper from './ModalWrapper';
import getLabel from "../../labels/labels";
import _ from "lodash";
import {GlobalLanguage} from "../../App";

Moment.locale('en')
momentLocalizer()

const UpdateSleepModal = props => {
    console.log('child', props.child);

    // const signIn = provider => {
    //     props.hideModal();
    //     props.signIn(provider);
    // };

    const renderInputs = (keys) => {
        const asd = [];
        const formatter = momentLocalizer();
        const formattedTime = (time) => {
            const fullDate = new Date();
// fullDate = Tue Dec 12 2017 11:18:30 GMT+0530 (IST) {}

            const d = Moment(fullDate).format('L'); // d = "12/12/2017"
            const date = Moment(d + ' ' + time).format();

            return Moment(date).toDate();
        }
        _.forEach(keys, (value, key) => {
            console.log(value);
            asd.push(
                <div>
                    <GlobalLanguage.Consumer>
                        {lang => (
                            <label>
                                {keys.length > 1 ? getLabel(lang, key ? 'till' : 'from') : key}
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
                        )}
                    </GlobalLanguage.Consumer>
                </div>
            )
        })
        return asd
    };

    return (
        <GlobalLanguage.Consumer>
            {lang => (
                <ModalWrapper
                    title={`Sleep Update for ${props.child.first_name}`}
                    width={400}
                    showOk={false}
                    {...props}
                >
                    <p>update child sleep here</p>

                    <form action="">
                        {props.childActivityObj.map((f, index) => {

                            console.log('sleep f', f);
                            return (
                                <div key={`sleep${index}wrap`}>
                                    {renderInputs(f)}


                                </div>
                            )
                            //
                            //
                            // const keys = Object.keys(f);
                            // if (keys.length > 1) {
                            //     return (
                            //         <div key={`sleep${index}wrap`}>
                            //             {
                            //                 keys.map((key, i) => {
                            //                     const objKey = f[key];
                            //                     return (
                            //                         <span
                            //                             key={`sleep${index}${i}`}>{`${key} ${objKey}  `}</span>)
                            //                 })
                            //             }
                            //         </div>
                            //     )
                            // } else if (keys.length === 1) {
                            //     return <p key={`sleep${index}`}>{`${keys[0]} ${f[keys[0]]}`}</p>
                            // } else if (keys.length === 0) {
                            //     return <p key={`sleep${index}`}>{'sdsd'}</p>
                            // }
                        })}

                        <div>


                        </div>
                    </form>
                    <button onClick={() => console.log('save clicked')}>{getLabel(lang,'save_changes')}</button>


                </ModalWrapper>
            )}
        </GlobalLanguage.Consumer>
    );
};

export default UpdateSleepModal;