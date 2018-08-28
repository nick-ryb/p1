import React, {Component} from "react";
import './LangChanger.css';
import {GlobalLanguage} from "../../App";
import {Select} from "semantic-ui-react";

class LangChanger extends Component {
    constructor(props) {
        super();
        this.state = {
            lang: props.lang
        }
    }

    _changeLang = (e) => {
        console.log('CHANGING LANG TO: ',e);
        if (this.props.lang !== e) {
            this.props.changeLang(e);
        }
    };

    _getLanguagesObj = () => {
        const obj = [
            {key: 'rus', value: 'rus', flag: 'ru', text: 'Russian'},
            {key: 'eng', value: 'eng', flag: 'us', text: 'English'},
            {key: 'heb', value: 'heb', flag: 'il', text: 'Hebrew'},
        ];

        return obj;
    };

    render() {

        return (
            <GlobalLanguage.Consumer>
                {lang => {
                    // this.setState({lang});
                    return (
                        <Select
                            placeholder='Select your language'
                            options={this._getLanguagesObj()}
                            onChange={(e, a) => {
                                console.log('LANG CHANGED TO: ', a.value);
                                this._changeLang(a.value);
                            }}
                            
                            defaultValue={lang}
                        />
                    )
                }}
            </GlobalLanguage.Consumer>
        )
    }
}

export default LangChanger;