import React, {Component} from "react";
import {Button, Card, Icon, Popup} from "semantic-ui-react";
import Moment from 'moment';
import Formsy from "formsy-react";
import DocumentTitle from "react-document-title";
import _ from "lodash";
import './Children.css';
import {LabelByLang, CommonModal, LoaderCustom, ImageWithPlaceholder} from "../../components/common";
import {GlobalParams} from "../../App";
import {getLabel} from "../../labels/labels";
import FormsyInput from "../../components/common/FormsyInput";
// import CommonModal from "../../components/common/CommonModal";
// import LoaderCustom from "../../components/common/loader/Loader";
// import ImageWithPlaceholder from "../../components/common/ImageWithPlaceholder";

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
];

class ChildrenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childActivityTitle: '',
            popupData: {},
            currentModal: null,
            childrenData: null,
            showModal: false
        };

        this.today = Moment(new Date()).format('DD/MM/YYYY');
    }

    componentDidMount() {
        console.log(this);
        const self = this;
        setTimeout(() => {
            self.setState({
                childrenData: [
                    {
                        "_id": {
                            "$oid": "5585fe6e435e91feee7f4fee"
                        },
                        "tz": 338686876,
                        "gender": "girl",
                        "first_name": "Эмма",
                        "second_name": "Рыбакова",
                        "birth_day": "12/06/2013",
                        "address": {
                            "city": "lod",
                            "street": "friman",
                            "house": "12",
                            "apartment": "21"
                        },
                        "kindergarten": 2,
                        "group": 0,
                        "parents": "[]",
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
                        "history": {
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
                            "28/01/2019": {
                                "came_in": true,
                                "activity": {
                                    "sleep": [],
                                    "food": [],
                                    "poop": []
                                }
                            },
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
                            },
                            "30/06/2015": {
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
                        }
                    },
                    {
                        "_id": {
                            "$oid": "5585fe6e435e91feee7f4fee"
                        },
                        "tz": 338686875,
                        "gender": "boy",
                        "first_name": "Yoni",
                        "second_name": "Rybakov",
                        "birth_day": "18/05/1982",
                        "address": {
                            "city": "",
                            "street": "",
                            "house": "NaN",
                            "apartment": "NaN"
                        },
                        "kindergarten": 2,
                        "group": 0,
                        "parents": "[]",
                        "history": {
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
                            "25/06/2015": {
                                "came_in": false
                            },
                            "30/06/2015": {
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
                            },
                            "28/01/2019": {
                                "came_in": true,
                                "activity": {
                                    "sleep": [
                                        [
                                            "08:00",
                                            "09:00"
                                        ]
                                    ],
                                    "food": [
                                        [
                                            "19:45",
                                            "Молочная Каша"
                                        ],
                                    ],
                                    "poop": [
                                        [
                                            "11:42",
                                            true
                                        ]
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
                        }
                    },
                    {
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
                        "personal_notes": ["personal_notes personal_notes personal_notes "],
                        "general_notes": ["general_notes general_notes general_notes "],
                        "history": {
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
                                "came_in": false,
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
                                        [
                                            "09:10",
                                            "Молочная Каша"
                                        ],
                                        [
                                            "19:45",
                                            "Молочная Каша"
                                        ],
                                    ],
                                    "poop": [
                                        [
                                            "11:42",
                                            true
                                        ]
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
                        }
                    }
                ]
            });
        }, 1000)

    }

    _childAge = (birthDay, lang) => {
        if (birthDay && birthDay !== "") {
            let today = Moment(new Date(), 'DD/MM/YYYY');
            let bDay = Moment(birthDay, 'DD/MM/YYYY');
            const intervals = ['years', 'months'];
            let out = [];

            intervals.forEach((interval) => {
                const diff = today.diff(bDay, interval);
                bDay.add(diff, interval);
                out.push(diff);
            });

            // console.log(out);
            // age = age.toString().split('.');
            // const years = age[0];
            // const months = age[1] && _.at(age[1], 0);
            // const isBirthDaySoon = out[1] && parseInt(out[1]) >= 11;


            return (out[0] + ' ' + getLabel(lang, 'years') + ' ' + out[1] + ' ' + getLabel(lang, 'months') + ' (' + birthDay + ')');

        } else {
            return 'else'
        }
    };

    _isChildCameToday = (info) => {
        const currentDayInfo = info[this.today];
        return currentDayInfo && currentDayInfo.came_in;
    };

    _updateChildCameToday = (info, isCame) => {
        const currentDayInfo = info[this.today];
        return currentDayInfo && currentDayInfo.came_in;
    };

    _childActivityToday = (child, index, lang, openModal) => {
        const childTodayActivity = child.history[this.today];

        const getTemplateForActivity = (title, children) => {

            return (
                <div key={`${title}@${child.second_name}`} className={`activity_wrap ${title}_activity`}>
                    <div className={'activity_content'}>
                        <p className={'activityTitle'}
                           style={{textOrientation: lang !== 'heb' ? 'upright' : 'unset'}}
                        >
                            {getLabel(lang, title)}
                        </p>
                        <div className={'activityValues'}>
                            {children()}
                        </div>

                    </div>
                    <Popup trigger={<div className={'activity_actions'}
                                         onClick={(e) => {
                                             // e.stopPropagation();
                                             // console.log(e.target);
                                             // console.log(title);
                                             // console.log(childTodayActivity);
                                             // console.log(child);
                                             // const data = {
                                             //     childObj: child,
                                             //     childActivityObj: childTodayActivity ? childTodayActivity.activity[title] : [],
                                             //     childActivityTitle: title,
                                             //     childIndex: index,
                                             //     onClose: (newData) => {
                                             //         console.log('newData', newData);
                                             //         if (!_.isEqual(newData, childTodayActivity.activity[title])) {
                                             //             console.log('this', this.state);
                                             //             console.log('childTodayActivity.activity[title]', childTodayActivity.activity[title]);
                                             //             const childIndex = _.findIndex(this.state.childrenData, (o) => {
                                             //                 return child.tz === o.tz;
                                             //             });
                                             //             console.log('childIndex', index);
                                             //             let childNewData = this.state.childrenData[index];
                                             //             childNewData.history[this.today].activity[title] = newData;
                                             //
                                             //             let newChildrenData = this.state.childrenData;
                                             //             newChildrenData[index] = childNewData;
                                             //             this.setState({
                                             //                 childrenData: newChildrenData
                                             //             });
                                             //         }
                                             //
                                             //     },
                                             //     currentModal: 'UPDATE_SLEEP'
                                             // };
                                             // openModal(data)
                                             this.toggleAlert(true, child, title, index);
                                         }}>
                        <Icon
                            name='pencil'
                        />
                    </div>} content={`Edit ${getLabel(lang, title)} activity `}/>

                </div>
            )
        };

        const getFood = () => {

            return getTemplateForActivity('food',
                () => {
                    if (!!childTodayActivity && !!childTodayActivity.activity && !!childTodayActivity.activity.food) {
                        return childTodayActivity.activity.food.map((f, i) => {
                            return (
                                <div key={`food${index}${i}wrap`}>
                                    <span key={`food${index}${i}from`}>{`${f[0]} `}</span>
                                    <span key={`food${index}${i}till`}>{` ${f[1]}`}</span>
                                </div>
                            )
                        })
                    } else {
                        return null;
                    }
                });
        };
        const getPoop = () => {
            return getTemplateForActivity('poop',
                () => {
                    if (!!childTodayActivity && !!childTodayActivity.activity && !!childTodayActivity.activity.poop) {
                        return childTodayActivity.activity.poop.map((f, i) => {
                            return (
                                <div key={`poop${index}${i}wrap`}>
                                    <span key={`poop${index}${i}when`}>{` ${f[1]}`}</span>
                                </div>
                            )
                        })
                    } else {
                        return null;
                    }
                });
        };
        const getSleep = () => {
            return getTemplateForActivity('sleep',
                () => {
                    if (!!childTodayActivity && !!childTodayActivity.activity && !!childTodayActivity.activity.sleep) {
                        return childTodayActivity.activity.sleep.map((f, i) => {
                            return (
                                <div key={`sleep${index}${i}wrap`}>
                                    <span key={`sleep${index}${i}from`}>{`${getLabel(lang, 'from')} ${f[0]} `}</span>
                                    <span key={`sleep${index}${i}till`}>{` ${getLabel(lang, 'till')} ${f[1]}`}</span>

                                </div>
                            )
                        })
                    } else {
                        return null;
                    }
                });
        };

        return [
            getFood(),
            getPoop(),
            getSleep()
        ];
    };

    _renderKinderGardenAgenda = (agenda, childIndex) => {
        if (!agenda)
            return null;

        // const {agenda2} = getLabel(this.props.lang);

        let list = [<h1><LabelByLang string={`agenda2`}/></h1>];

        //TODO if agenda is different for the groups

        console.log('LabelByLang name', <LabelByLang string={'name'}/>);
        console.log('agenda', agenda);

        agenda.forEach((agendaForGroup, j) => {

            agendaForGroup.schedule.forEach((schedule, k) => {
                console.log('schedule', schedule);

                schedule.forEach((obj, i) => {
                    const key = Object.keys(obj);
                    list.push(
                        <div className={'agenda'} key={`${key[0]}_${childIndex}_${j}_${k}_${i}`}>
                            <span>{key[0]}</span>
                            <span>{obj[key[0]]}</span>
                        </div>
                    );
                });
            });
        });

        return list;
    };


    _renderChildrenCurrentActivity = (lang) => {
        return this.state.childrenData.map((child, index) => {
            const isBoy = child.gender === 'boy';
            return (
                <div key={child.tz}>
                    <Icon
                        name={isBoy ? 'male' : 'female'}
                        color={isBoy ? 'blue' : 'pink'}
                        size='big'
                    />
                    <p><LabelByLang string={'name'}/><span>{` : ${child.first_name} ${child.second_name}`}</span></p>
                    <p>{this._childAge(child.birth_day, lang)}</p>
                    <p>{this._isChildCameToday(child.history)}</p>
                    <div>{this._childActivityToday(child.history[this.today], index)}</div>
                </div>
            )
        });
    };

    toggleAlert = (isShow, child, title, index) => {
        if (!!child) {
            this.setState({
                showModal: isShow,
                popupData: {
                    title,
                    child,
                    childIndex: index
                }
            })

        } else {
            this.setState({
                showModal: isShow,
            })
        }
    };

    handleInputChange = (event) => {
        console.log(event);//{}
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

    renderInput = (data, i, j) => {

        console.log('i: ', i, 'j: ', j);
        console.log('data', data);

        const currTitle = this.state.popupData.title;

        // const activityInputs = [];
        // for (let f = 0; f < data.length; f++) {

        let label = j === 0 ? `${currTitle} cycle ${i + 1} - from` : `${currTitle} cycle ${i + 1} - till`;
        const name = `${currTitle}_input_${i}_${j}`;

        const timeRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

        const validation = data.indexOf(':') > -1 ? {
            matchRegexp: timeRegex
        } : 'isWords';

        return (
            <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
                <FormsyInput
                    name={name}
                    type={data.indexOf(':') > -1 ? 'time' : "text"}

                    value={data}
                    validations={validation}
                    validationError={data.indexOf(':') > -1 ? "This is not a valid time" : 'This is not a valid text'}
                    label={label}
                    required
                    onChange={(e) => {
                        console.log(e);
                        // this.handleInputChange(Moment(e).format('HH:mm'))
                        this.handleInputChange(e)
                    }}
                    onDelete={() => {
                        this.deleteInput(data)
                    }}
                />

            </div>
        )
        // }

        // return activityInputs;
    };
    deleteInput = (input) => {

    };

    _renderChildActivity = (activities, i) => {

        let formInputs = [];
        for (let j = 0; j < activities.length; j++) {
            formInputs.push(
                this.renderInput(activities[j], i, j)
            );
        }
        return (
            <div className={'popupActivityWrap'}>
                {formInputs}
            </div>
        );
    };

    childActivityForm = (childTodayData) => {
        const childTodayActivity = childTodayData;
        console.log('childTodayActivity', childTodayActivity);
        if (!childTodayActivity) return null;
        // const activityKeysArr = Object.keys(childTodayActivity);
        // console.log('activityKeysArr', activityKeysArr);
        // if (!activityKeysArr) return null;

        let formInputs = [];
        // let i = 0;
        // let j = 0;

        if (childTodayActivity.length > 0) {
            for (let i = 0; i < childTodayActivity.length; i++) {
                formInputs.push(
                    this._renderChildActivity(childTodayActivity[i], i)
                );
            }
        }

        return formInputs;
    };

    renderFormData = (child, title) => {
        if (child && child.history && child.history[this.today] && child.history[this.today].activity[title])
            return this.childActivityForm(child.history[this.today].activity[title]);
        else
            return <p>Error: no data for child</p>;
    };

    updateChildInfo = (newData) => {
        const {popupData} = this.state;
        const {title} = popupData;

        this.setState((prevState) => {
            console.log('oldState', prevState);
            // let oldState = prevState.popupData.child;
            let oldChildrenActivity = prevState.childrenData;
            let oldChildActivity = oldChildrenActivity[Number(prevState.popupData.childIndex)];
            // console.log('oldChildActivity',oldChildActivity);
            let newState = [];

            _.forEach(newData, (val, key) => {
                console.log('newData', newData);

                const keyArr = key.split('_');

                const i = keyArr[2];
                // const j = keyArr[3];

                //  if (oldChildActivity.history[this.today].activity[title].length === 0)
                //     oldChildActivity.history[this.today].activity[title][Number(i)] = [];
                //
                // console.log('oldChildActivity.history[this.today].activity[title][Number(i)]',oldChildActivity.history[this.today].activity[title][Number(i)]);


                if (newState[Number(i)] === undefined)
                    newState[Number(i)] = [];

                // if (keyArr[0] === 'sleep') {
                newState[Number(i)].push(val)
                // }
                // console.log('oldChildActivity', oldChildActivity);

            });

            oldChildActivity.history[this.today].activity[title] = newState;
            //{sleep_input_0_0: "08:00", sleep_input_0_1: "09:00", sleep_input_1_0: "13:15", sleep_input_1_1: "14:45"}

            console.log('newState: ', oldChildrenActivity);
            return {childrenData: oldChildrenActivity};
        })

    };

    renderModal = () => {
        const {popupData, showModal} = this.state;
        const {title, child} = popupData;

        if (_.isEmpty(popupData))
            return null;

        console.log('renderModal');
        return (
            <CommonModal
                show={showModal}
                title={`Update ${title} data for ${child.first_name}`}
                onConfirm={() => {
                    this.toggleAlert(false)
                }}
                onCancel={() => {
                    this.toggleAlert(false)
                }}
                showConfirm
            >
                <Formsy
                    onValidSubmit={(model) => {
                        console.log('Formsy onValidSubmit', model);
                        this.updateChildInfo(model);
                    }}
                    onInvalidSubmit={(model) => {
                        console.log('Formsy onInvalidSubmit', model);
                        this.updateChildInfo(model);
                    }}
                    onValid={(model) => {
                        console.log('Formsy onValid', model);
                    }}
                    onInvalid={(model) => {
                        console.log('Formsy onInvalid', model);
                    }}
                    onChange={(model) => {
                        console.log('Formsy onChange', model);
                    }}
                >
                    {this.renderFormData(child, title)}
                    <button type="submit" disabled={false}>Submit</button>
                </Formsy>
            </CommonModal>
        );
    };

    _renderChildCard = (child, index, lang, openModal) => {

        const isBoy = child.gender === 'boy';
        const colorIndex = index < colors.length ? index : index - colors.length;
        const imageSrc = isBoy ? 'https://react.semantic-ui.com/images/avatar/large/steve.jpg' : 'https://react.semantic-ui.com/images/avatar/large/molly.png';

        return (
            <Card
                key={`childCard${index}`}
                color={colors[colorIndex]}
            >
                <Card.Content>
                    <ImageWithPlaceholder size='huge' floated='right' avatar src={imageSrc}/>
                    <Card.Header onClick={() => {
                        console.log('this.props', this.props);
                        this.props.history.push('/child', {'childTz': child.tz})
                    }}>
                                            <span
                                                className={'header_name'}>{`${child.second_name} ${child.first_name}`}</span>

                        <Icon className={'header_name_more_details icon link'} name="info circle"
                              title={'click the name for more info'}/>
                    </Card.Header>
                    <Card.Meta>{this._childAge(child.birth_day, lang)}</Card.Meta>
                    {child.personal_notes && <Card.Description>
                        {getLabel(lang, 'attention')}: <strong>{child.personal_notes[0]}</strong>
                    </Card.Description>}

                </Card.Content>
                <Card.Content extra>
                    <div className={'activities'}>
                        {this._childActivityToday(child, index, lang, openModal)}
                    </div>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button
                            positive={this._isChildCameToday(child.history)}
                            onClick={() => {
                                console.log('came child:', child)
                                this._updateChildCameToday(child, true)
                            }}
                        >
                            {getLabel(lang, 'came')}
                        </Button>
                        <Button
                            negative={!this._isChildCameToday(child.history)}
                            onClick={() => {
                                console.log('missing child:', child)
                                this._updateChildCameToday(child, false)
                            }}
                        >
                            {getLabel(lang, 'missing')}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    };

    _renderChildrenCards = (GParams) => {

        const {lang, openModal} = GParams;

        return (
            <Card.Group
                key={"ChildrenList"}
                itemsPerRow={3}
                centered={true}
                style={{justifyContent: 'center', maxWidth: '1000px'}}>

                {this.state.childrenData.map((child, index) => {
                    return this._renderChildCard(child, index, lang, openModal)
                })}
            </Card.Group>
        );
    };

    render() {
        if (this.state.childrenData) {

            return (
                <div className={'childrenListWrapper'}>
                    <GlobalParams.Consumer>
                        {GParams => {
                            const {lang} = GParams;
                            return [
                                this._renderChildrenCards(GParams),
                                this.renderModal(GParams),
                                <DocumentTitle
                                    key={"ChildrenDocumentTitle"}
                                    title={`${GParams[lang + "GanName"]} | ${getLabel(lang, 'Children')}`}/>
                            ]
                        }}
                    </GlobalParams.Consumer>
                </div>
            );
        } else {
            return <LoaderCustom/>
        }
    }
}

ChildrenView.defaultProps = {};

export default ChildrenView;


