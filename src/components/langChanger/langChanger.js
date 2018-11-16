import React, {Component} from "react";
import {Flag} from "semantic-ui-react";
import _ from "lodash";
import './LangChanger.css';
import {GlobalLanguage} from "../../App";

class LangChanger extends Component {
    constructor(props) {
        super();
    }

    _changeLang = (e) => {
        if (this.props.lang !== e) {
            this.props.changeLang && this.props.changeLang(e);
        }
    };

    _getLanguagesObj = () => {
        // return [
        //     {key: 'rus', value: 'rus', flag: 'ru', text: 'Russian'},
        //     {key: 'eng', value: 'eng', flag: 'us', text: 'English'},
        //     {key: 'heb', value: 'heb', flag: 'il', text: 'Hebrew'},
        // ];
        return [
            {value: 'eng', label: 'English', flag: 'us'},
            {value: 'heb', label: 'עברית', flag: 'il'},
            {value: 'rus', label: 'ruskii', flag: 'ru'},
        ]
    };

    render() {
        return (
            <GlobalLanguage.Consumer>
                {lang => {
                    const languages = this._getLanguagesObj();

                    //move active language to be the first language
                    const activeLang = _.remove(languages, function(n) {
                        return n.value === lang;
                    });
                    languages.unshift(activeLang[0]);

                    let flags = [];

                    _.forEach(languages, (obj) => {
                        flags.push(
                            <Flag
                                key={obj.value}
                                name={obj.flag}
                                onClick={() => {
                                    this._changeLang(obj.value);
                                }}
                                title={obj.label}
                                style={{cursor: 'pointer'}}
                            />
                        );
                    });

                    return (
                        <div className={'language_flags'}>
                            {flags}
                        </div>
                    );

                }}
            </GlobalLanguage.Consumer>
        )
    }
}

export default LangChanger;