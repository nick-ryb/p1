import React, {Component} from "react";
import {Button, Card, Icon, Image, Modal} from "semantic-ui-react";
import * as moment from 'moment';

import './Children.css';
import LabelByLang from "../../components/common/LabelByLang";
import * as Globals from "../../GlobalConfig";
import DocumentTitle from "react-document-title";
import {GlobalLanguage} from "../../App";
import getLabel from "../../labels/labels";
import CommonModal from "../../components/common/CommonModal";

class ChildrenView extends Component {
    constructor() {
        super();
        this.state = {
            childName: ''
        };
        this.children = [
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
                "birth_day": "25/03/2017",
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
                "important_notice": "important_notice important_notice important_notice ",
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
                    "23/09/2018": {
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
            }
        ];
        this.today = moment(new Date()).format('DD/MM/YYYY');
    }

    componentDidMount() {
        console.log(this);
    }

    _childAge = (birthDay, lang) => {
        if (birthDay && birthDay !== "") {
            let today = moment(new Date(), 'DD/MM/YYYY');
            let bDay = moment(birthDay, 'DD/MM/YYYY');
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
            const isBirthDaySoon = out[1] && parseInt(out[1]) >= 11;


            return (out[0] + ' ' + getLabel(lang, 'years') + ' ' + out[1] + ' ' + getLabel(lang, 'months') + ' (' + birthDay + ')');

        } else {
            return 'else'
        }
    };

    _isChildCameToday = (info) => {
        const currentDayInfo = info[this.today];
        return currentDayInfo && currentDayInfo.came_in;
    };

    _childActivityToday = (child, index, lang) => {
        const childTodayActivity = child.history[this.today];
        // if (!childTodayActivity || !childTodayActivity.activity)
        //     return null;


        const getTemplateForActivity = (title, children) => {
            return (
                <div key={`${title}@${child.second_name}`} className={'activity_wrap'}>
                    <div className={'activity_content'}>
                        <h4 className={'activityTitle'}
                            style={{textOrientation: lang !== 'heb' ? 'upright' : 'unset'}}>{getLabel(lang, title)}</h4>
                        <div className={'activityValues'}>
                            {children()}
                        </div>

                    </div>
                    <div className={'activity_actions'}
                         onClick={(e) => {
                             e.stopPropagation();
                             console.log(e.target);
                             console.log(title);
                             console.log(childTodayActivity);
                             console.log(child);
                             this.onClick(title, child);
                         }}>
                        <Icon
                            name='pencil'
                        />
                    </div>
                </div>
            )
        };

        const getFood = () => {

            return getTemplateForActivity('food',
                () => {
                    if (!!childTodayActivity && !!childTodayActivity.activity && !!childTodayActivity.activity.food) {
                        return childTodayActivity.activity.food.map((f, i) => {
                            const keys = Object.keys(f);
                            return (<span key={`food${index}${i}`}>{`${keys[0]} ${f[keys[0]]}`}</span>)
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
                            const keys = Object.keys(f);
                            return (<p key={`poop${index}${i}`}>{`${keys[0]}`}</p>)
                        })
                    } else {
                        return null;
                    }
                });
            //
            //     poop.map((f, i) => {
            //     const keys = Object.keys(f);
            //     if (!!childTodayActivity.activity && !!childTodayActivity.activity.poop) {
            //         return (<p key={`poop${index}${i}`}>{`${keys[0]}`}</p>)
            //     } else {
            //         return null;
            //     }
            // }))

        };
        const getSleep = () => {
            return getTemplateForActivity('sleep',
                () => {
                    if (!!childTodayActivity && !!childTodayActivity.activity && !!childTodayActivity.activity.sleep) {
                        return childTodayActivity.activity.sleep.map((f, i) => {
                            const keys = Object.keys(f);
                            if (keys.length > 1) {
                                return (
                                    <div key={`sleep${index}${i}wrap`}>
                                        {
                                            keys.map((key, i) => {
                                                const objKey = f[key];
                                                return (
                                                    <span
                                                        key={`sleep${index}${i}`}>{`${getLabel(lang, key)} ${objKey}  `}</span>)
                                            })
                                        }
                                    </div>
                                )
                            } else if (keys.length === 1) {
                                return (<p key={`sleep${index}${i}`}>{`${keys[0]} ${f[keys[0]]}`}</p>)
                            } else if (keys.length === 0) {
                                return (<p key={`sleep${index}${i}`}>{'sdsd'}</p>)
                            }
                        })
                    } else {
                        return null;
                    }
                });

            //     sleep.map((f, i) => {
            //     const keys = Object.keys(f);
            //     if (!!childTodayActivity.activity && !!childTodayActivity.activity.sleep) {
            //         if (keys.length > 1) {
            //             return (
            //                 <div>
            //                     {
            //                         keys.map((key, i) => {
            //                             const objKey = f[key];
            //                             return (
            //                                 <span
            //                                     key={`sleep${index}${i}`}>{`${getLabel(lang, key)} ${objKey}  `}</span>)
            //                         })
            //                     }
            //                 </div>
            //             )
            //         } else if (keys.length === 1) {
            //             return (<p key={`sleep${index}${i}`}>{`${keys[0]} ${f[keys[0]]}`}</p>)
            //         } else if (keys.length === 0) {
            //             return (<p key={`sleep${index}${i}`}>{'sdsd'}</p>)
            //         }
            //     } else {
            //         return null;
            //     }
            // }))

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

        agenda.map((agendaForGroup, j) => {

            agendaForGroup.schedule.map((schedule, k) => {
                console.log('schedule', schedule);

                schedule.map((obj, i) => {
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

    _renderChildrenList = (lang) => {
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
        return (
            <Card.Group key={"ChildrenList"} style={{justifyContent: 'center'}}>
                {this.children.map((child, index) => {
                    const isBoy = child.gender === 'boy';
                    const colorIndex = index < colors.length ? index : index - colors.length;
                    const imageSrc = isBoy ? 'https://react.semantic-ui.com/images/avatar/large/steve.jpg' : 'https://react.semantic-ui.com/images/avatar/large/molly.png';
                    return (

                        <Card
                            key={`child_${index}`}
                            color={colors[colorIndex]}
                        >

                            <Card.Content>
                                <Image size='huge' floated='right' avatar src={imageSrc}/>
                                <Card.Header onClick={() => {
                                    alert('555')
                                }}>
                                    <span className={'header_name'}>{`${child.second_name} ${child.first_name}`}</span>

                                    <Icon className={'header_name_more_details icon link'} name="info circle icon"
                                          title={'click the name for more info'}/>
                                </Card.Header>
                                <Card.Meta>{this._childAge(child.birth_day, lang)}</Card.Meta>
                                {child.important_notice && <Card.Description>
                                    {getLabel(lang, 'attention')}: <strong>{child.important_notice}</strong>
                                </Card.Description>}
                            </Card.Content>
                            <Card.Content extra>
                                <div className={'activities'}>
                                    {this._childActivityToday(child, index, lang)}
                                </div>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button
                                        // positive
                                        positive={this._isChildCameToday(child.history)}
                                        // primary={this._isChildCameToday(child.history)}
                                        // basic={!this._isChildCameToday(child.history)}
                                        onClick={() => {
                                            console.log('came child:', child)
                                        }}
                                    >
                                        {getLabel(lang, 'came')}
                                    </Button>
                                    <Button
                                        // negative
                                        negative={!this._isChildCameToday(child.history)}
                                        // primary={!this._isChildCameToday(child.history)}
                                        // basic={this._isChildCameToday(child.history)}
                                        onClick={() => {
                                            console.log('missing child:', child)
                                        }}
                                    >
                                        {getLabel(lang, 'missing')}
                                    </Button>
                                </div>
                            </Card.Content>
                            {/*<div key={child.tz}>*/}
                            {/*<Icon*/}
                            {/*name={isBoy ? 'male' : 'female'}*/}
                            {/*color={isBoy ? 'blue' : 'pink'}*/}
                            {/*size='big'*/}
                            {/*/>*/}
                            {/*<p><LabelByLang string={'name'}/><span>{` : ${child.first_name} ${child.second_name}`}</span></p>*/}
                            {/*<p>{this._childAge(child.birth_day, lang)}</p>*/}
                            {/*<p>{this._isChildCameToday(child.history)}</p>*/}
                            {/*<div>{this._childActivityToday(child.history[this.today], index)}</div>*/}
                            {/*/!*<div>{this._renderKinderGardenAgenda(child.agenda, index)}</div>*!/*/}
                            {/*</div>*/}
                        </Card>
                    )
                })
                }
            </Card.Group>
        );
    };

    _renderChildrenCurrentActivity = (lang) => {
        return this.children.map((child, index) => {
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

    onClick = (name, child) => {
        this.setState({childName: child.first_name}, () => {
            this.modal.onOpenModal() // do stuff
        });
    };

    render() {
        return (
            <div>
                <GlobalLanguage.Consumer>
                    {lang => [
                        this._renderChildrenList(lang),
                        <DocumentTitle title={`${Globals[lang + "GanName"]} | ${getLabel(lang, 'Children')}`}/>,
                        <CommonModal
                            key={'gfdg'}
                            onRef={(ref) => {
                                this.modal = ref
                            }}
                            children={
                                <div>
                                    <h1>{this.state.childName}</h1>
                                    <p>Simple centered modal </p>

                                </div>
                            }
                        />
                    ]}
                </GlobalLanguage.Consumer>
            </div>
        );
    }
}

ChildrenView.defaultProps = {};

export default ChildrenView;
