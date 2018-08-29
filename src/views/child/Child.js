import React, {Component} from 'react';
import * as moment from "moment";
import _ from "lodash";
import DocumentTitle from "react-document-title";
import './Child.css';
import {GlobalLanguage} from "../../App";
import * as Globals from "../../GlobalConfig";
import getLabel from "../../labels/labels";

class ChildView extends Component {
    constructor() {
        super();

        this.child = {
            "_id": {
                "$oid": "5585fe6e435e91feee7f4fee"
            },
            "tz": 338686876,
            "gender": "girl",
            "first_name": "Эмма",
            "second_name": "Рыбакова",
            "birth_day": "12/06/2013",
            "address": {
                "city": "",
                "street": "",
                "house": "NaN",
                "apartment": "NaN"
            },
            "kindergarten": 2,
            "group": 0,
            "parents": "[]",
            "agenda2": [{
                "_id": "558958e1435e91feeead410f",
                "name": "babies",
                "babies": {
                    "group1": {
                        "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                        "8:30 - 11:00": "Сон - שינה",
                        "11:30 - 12:00": "Прогулка + Игры - טיול ומשחק",
                        "12:00 - 12:30": "Обед - ארוחת צהריים",
                        "12:30 - 14:30": "Сон - שינה",
                        "15:00": "Еда - אוכל",
                        "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                    },
                    "group2": {
                        "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                        "8:30 - 11:00": "Прогулка + Игры - טיול ומשחק",
                        "11:00 - 11:30": "Обед - ארוחת צהריים",
                        "11:30 - 14:00": "Сон - שינה",
                        "15:00": "Еда - אוכל",
                        "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                    }
                }
            }],
            "agenda": [
                {
                    'name': 'babies',
                    'schedule': [
                        [
                            {"6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר"},
                            {"8:30 - 11:00": "Сон - שינה"},
                            {"11:30 - 12:00": "Прогулка + Игры - טיול ומשחק"},
                            {"12:00 - 12:30": "Обед - ארוחת צהריים"},
                            {"12:30 - 14:30": "Сон - שינה"},
                            {"15:00": "Еда - אוכל"},
                            {"16:00 - 16:30": "Фрукт/Ски - פרי או סקי"}
                        ],
                        [
                            {"6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר"},
                            {"8:30 - 11:00": "Прогулка + Игры - טיול ומשחק"},
                            {"11:00 - 11:30": "Обед - ארוחת צהריים"},
                            {"11:30 - 14:00": "Сон - שינה"},
                            {"15:00": "Еда - אוכל"},
                            {"16:00 - 16:30": "Фрукт/Ски - פרי או סקי"}
                        ]
                    ]
                },
                {
                    'name': 'todlers',
                    'schedule': [
                        [
                            {"6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר"},
                            {"8:30 - 09:30": "Мифгаш бокер и кружки - מפגש בוקר והפעלות"},
                            {"09:30 - 10:15": "Прогулка + Игры - טיול ומשחק"},
                            {"10:30 - 11:30": "Обед и подготовка к сну - ארוחת צהריים והכנה לשינה"},
                            {"12:00 - 14:00": "Сон - שינה"},
                            {"14:00 - 14:30": "Подем - השכמה"},
                            {"15:00": "Прогулка + Игры - טיול ומשחק"},
                            {"16:00 - 16:30": "Игры в групе и чтение книг - משחקים בקבוצה וקריאת ספרים"}
                        ]
                    ]
                }

            ],
            "history": [
                {
                    "21/06/2015": {
                        "came_in": false
                    }
                },
                {
                    "22/06/2015": {
                        "came_in": false
                    }
                },
                {
                    "23/06/2015": {
                        "came_in": false
                    }
                },
                {
                    "24/06/2015": {
                        "came_in": false
                    }
                },
                {
                    "28/08/2018": {
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
                },
                {
                    "30/06/2015": {
                        "came_in": true,
                        "sleep": [
                            {
                                "from": "08:00",
                                "till": "09:00"
                            }
                        ],
                        "food": {
                            "09:10": "Молочная Каша"
                        },
                        "poop": {
                            "kaki": true
                        }
                    }
                },
                {
                    "05/07/2015": {
                        "came_in": true
                    }
                },
                {
                    "27/07/2015": {
                        "came_in": true
                    }
                },
                {
                    "22/11/2015": {
                        "came_in": true,
                        "food": {
                            "07:30": "Молочная Каша",
                            "11:00": "суп",
                            "15:30": "Каша + мясо"
                        },
                        "sleep": [
                            {
                                "from": "12:00",
                                "till": "14:30"
                            }
                        ]
                    }
                }
            ]
        };
        this.today = moment(new Date()).format('DD/MM/YYYY');
    }

    _childActivityToday = (info) => {
        if (!info || !info.activity)
            return null;

        const {sleep, poop, food} = info.activity;

        const getFood = () => {
            if (!!food) {
                return [
                    <h3>{`FOOD`}</h3>,
                    food.map((f, i) => {
                        const keys = Object.keys(f);
                        return (<p key={`food${i}`}>{`${keys[0]} ${f[keys[0]]}`}</p>)
                    })
                ]
            } else {
                return null;
            }
        };
        const getPoop = () => {
            if (!!poop) {
                return [
                    <h3>{`POOP`}</h3>,
                    poop.map((f, i) => {
                        const keys = Object.keys(f);
                        return (<p key={`poop${i}`}>{`${keys[0]}`}</p>)
                    })
                ]
            } else {
                return null;
            }
        };
        const getSleep = () => {
            if (!!sleep) {
                return [
                    <h3>{`SLEEP`}</h3>,
                    sleep.map((f, i) => {
                        const keys = Object.keys(f);
                        if (keys.length > 1) {
                            return (
                                <div className={'sleepRange'}>
                                    {
                                        keys.map((key, i) => {
                                            const objKey = f[key];
                                            return (<p key={`sleep${i}`}>{`${key} ${objKey}`}</p>)
                                        })
                                    }
                                </div>
                            )
                        } else {
                            return (<p key={`sleep${i}`}>{`${keys[0]} ${f[keys[0]]}`}</p>)
                        }
                    })
                ]
            } else {
                return null;
            }
        };

        return [
            getFood(),
            getPoop(),
            getSleep()
        ];
    };

    _renderChildActivityView = (lang) => {
        return this._childActivityToday(this.child.history[this.today]);
    };

    _renderChildActivityHistory = () => {
        const history = this.child.history;
        return history.map((date, index) => {

            const key = Object.keys(date)[0];
            const obj = date[key];
            const isCame = () => {
                return <p>{obj.came_in.toString()}</p>;
            };

            const getFood = () => {
                let food = [];
                _.forEach(obj.food, (value, key) => {
                    food.push(<p>{key}<span>{` ${value}`}</span></p>);
                });
                return food;
            };


            return (
                <div>
                    <p>{key}</p>
                    <div>
                        <p>{`isCame --> `}</p>
                        {isCame()}
                    </div>
                    <div>
                        <p>{`food --> `}</p>
                        {getFood()}
                    </div>
                </div>
            )
        })
    };

    _renderChildPersonalInfo = (lang) => {
        return (
            <div>
                <p>{'PersonalInfo'}</p>
            </div>
        );
    };

    _renderNotesForChild = (lang) => {
        return (
            <div>
                <p>{'NotesForChild'}</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                <GlobalLanguage.Consumer>
                    {lang => [
                        this._renderChildActivityView(lang),
                        this._renderChildActivityHistory(lang),
                        this._renderChildPersonalInfo(lang),
                        this._renderNotesForChild(lang),
                        <DocumentTitle
                            title={`${Globals[lang + "GanName"]} | ${getLabel(lang, 'Child')}(${this.child.first_name})`}/>
                    ]}
                </GlobalLanguage.Consumer>
            </div>
        )
    }
}

ChildView.defaultProps = {};

export default ChildView;