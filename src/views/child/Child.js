import React, {Component} from 'react';
import * as moment from "moment";
import DocumentTitle from "react-document-title";
import {Link} from "react-router-dom";
import './Child.css';
import {GlobalParams} from "../../App";
import {getLabel} from "../../labels/labels";

class ChildView extends Component {
    constructor(props) {
        super(props);

        this.child = {
            "_id": {
                "$oid": "5585fe6e435e91feee7f4fee"
            },
            "tz": 338686872,
            "gender": "girl",
            "first_name": "Эмма",
            "second_name": "Рыбакова",
            "birth_day": "03/11/2013",
            "address": {
                "city": "beer yaakov",
                "street": "haalonim",
                "house": "3",
                "apartment": "15"
            },
            "kindergarten": 2,
            "group": 0,
            "parents": "[]",
            "personal_notes": ["personal_note personal_note personal_note "],
            "general_notes": ["general_note general_note general_note "],
            "history": [{
                "21/06/2015": {
                    "came_in": false
                },
                "22/06/2015": {
                    "came_in": false
                },
                "23/06/2015": {
                    "came_in": false
                },
                "24/06/2015": {
                    "came_in": false
                },
                "01/09/2018": {
                    "came_in": true
                },
                "28/01/2019": {
                    "came_in": true,
                    "activity": {
                        "sleep": [
                            [
                                "08:00",
                                "09:00"
                            ],
                            [
                                "13:15",
                                "14:45"
                            ]
                        ],
                        "food": [
                            {
                                "09:10": "Молочная Каша"
                            },
                            {
                                "19:45": "Молочная Каша"
                            }
                        ],
                        "poop": [
                            {
                                "11:42": true
                            }
                        ]
                    }
                },
                "05/07/2015": {
                    "came_in": true
                },
                "27/07/2015": {
                    "came_in": true
                },
                "22/11/2015": {
                    "came_in": true,
                    "activity": {
                        "sleep": [
                            {
                                "from": "08:00",
                                "till": "09:00"
                            },
                            {
                                "from": "13:15",
                                "till": "14:45"
                            }
                        ],
                        "food": [
                            {
                                "09:10": "Молочная Каша"
                            },
                            {
                                "19:45": "Молочная Каша"
                            }
                        ],
                        "poop": [
                            {
                                "11:42": true
                            }
                        ]
                    }
                }
            }]
        };

        this.today = moment(new Date()).format('DD/MM/YYYY');
    }

    _childActivityToday = (info, lang) => {
        if (!info || !info.activity)
            return null;

        const {sleep, poop, food} = info.activity;

        const getFood = () => {
            if (!!food) {
                return (
                    <div key={'getFoodWrap'} className={'activity'}>
                        <h3>{getLabel(lang, 'food')}</h3>
                        <div className={'sleepRange'}>
                            {food.map((f, i) => {
                                const keys = Object.keys(f);
                                return (<p key={`food${i}`}>{`${keys[0]} ${f[keys[0]]}`}</p>)
                            })}
                        </div>
                    </div>
                )
            } else {
                return null;
            }
        };
        const getPoop = () => {
            if (!!poop) {
                return (
                    <div key={'getPoopWrap'} className={'activity'}>
                        <h3>{getLabel(lang, 'poop')}</h3>
                        <div className={'sleepRange'}>
                            {poop.map((f, i) => {
                                const keys = Object.keys(f);
                                return (<p key={`poop${i}`}>{`${keys[0]}`}</p>)
                            })}
                        </div>
                    </div>
                )
            } else {
                return null;
            }
        };
        const getSleep = () => {
            if (!!sleep) {
                return (
                    <div key={'getSleepWrap'} className={'activity'}>
                        <h3>{getLabel(lang, 'sleep')}</h3>
                        <div className={'sleepRangesList'}>
                            {sleep.map((f, i) => {
                                return (
                                    <div
                                        key={`sleepRange${i}wrap`}
                                        className={'sleepRange'}>
                                        <span key={`sleep${i}from`}>{`${getLabel(lang, 'from')} ${f[0]} `}</span>
                                        <span key={`sleep${i}till`}>{` ${getLabel(lang, 'till')} ${f[1]}`}</span>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                )
            } else {
                return null;
            }
        };

        return [
            getSleep(),
            getFood(),
            getPoop(),
        ];
    };

    _renderChildActivityView = (lang) => {
        const todayActivity = this.child.history[0][this.today];
        return (
            <div className={'current_activities_view'}>
                {todayActivity ? this._childActivityToday(todayActivity, lang) :
                    <p>{getLabel(lang, 'general_server_error')}</p>}
            </div>
        );
    };

    _renderChildPersonalInfo = (lang) => {
        const {gender, first_name, second_name, birth_day, kindergarten, group,} = this.child;
        // "gender": "girl",
        //     "first_name": "Эмма",
        //     "second_name": "Рыбакова",
        //     "birth_day": "03/11/2013",
        //     "address": {
        //     "city": "beer yaakov",
        //         "street": "haalonim",
        //         "house": "3",
        //         "apartment": "15"
        // },
        // "kindergarten": 2,
        //     "group": 0,
        //     "parents": "[]",
        return (
            <div>
                <p>{'PersonalInfo'}</p>
                <p>{'gender'}</p>
                <p>{gender}</p>
                <p>{'first_name'}</p>
                <p>{first_name}</p>
                <p>{'second_name'}</p>
                <p>{second_name}</p>
                <p>{'birth_day'}</p>
                <p>{birth_day}</p>
                <p>{'kindergarten'}</p>
                <p>{kindergarten}</p>
                <p>{'group'}</p>
                <p>{group}</p>
            </div>
        );
    };

    _renderNotesForChild = (lang) => {
        if (this.child.personal_notes) {
            return (
                <div className={'current_Notes_view'}>
                    <p>{this.child.personal_notes[0]}</p>
                    <p>{this.child.general_notes[0]}</p>
                </div>
            );
        } else {
            return null
        }
    };

    _renderChildHistoryButton = (lang) => {
        return (
            <Link className='link' to="/Child/History">
                {getLabel(lang, 'child_history')}
            </Link>
        );

    };

    render() {
        return (
            <div className={'child_current_view'}>
                <GlobalParams.Consumer>
                    {GParams => {
                        const { lang } = GParams;
                        return (
                            <div>
                                {this._renderNotesForChild(lang)}
                                {this._renderChildActivityView(lang)}
                                {this._renderChildHistoryButton(lang)}
                                {/*{this._renderChildPersonalInfo(lang)}*/}
                                <DocumentTitle
                                    title={`${GParams[lang + "GanName"]} | ${getLabel(lang, 'Child')}`}/>
                            </div>
                        )
                    }}
                </GlobalParams.Consumer>
            </div>
        )
    }
}

ChildView.defaultProps = {};

export default ChildView;