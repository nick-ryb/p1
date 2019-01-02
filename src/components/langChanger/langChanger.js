import React, {useContext} from "react";
import {Flag, Dropdown} from "semantic-ui-react";
import _ from "lodash";
import './LangChanger.css';
import {GlobalParams} from "../../App";

// class LangChanger extends Component {
const LangChanger = props => {

    const _changeLang = (e) => {
        if (props.lang !== e.value) {
            props.changeLang && props.changeLang(e);
        }
    };

    const _getLanguagesObj = () => {
        return [
            {value: 'eng', label: 'English', flag: 'us'},
            {value: 'heb', label: 'עברית', flag: 'il'},
            {value: 'rus', label: 'Руский', flag: 'ru'},
        ]
    };

    const {lang} = useContext(GlobalParams);

    const languages = _getLanguagesObj();

    if (!props.inMenu) {
        //move active language to be the first language
        const activeLang = _.remove(languages, function (n) {
            return n.value === lang;
        });
        languages.unshift(activeLang[0]);
    }

    let flags = [];
    let flagsForMenu = [];

    _.forEach(languages, (obj) => {
        flags.push(
            <Flag
                key={obj.value}
                name={obj.flag}
                onClick={() => {
                    _changeLang(obj);
                }}
                title={obj.label}
                style={{cursor: 'pointer'}}
            />
        );
        flagsForMenu.push(
            <Dropdown.Item
                key={obj.value}
                active={lang === obj.value}
                className={'menu_language'}
                onClick={() => {
                    _changeLang(obj);
                }}>
                <Flag
                    key={obj.value}
                    name={obj.flag}
                    title={obj.label}
                    style={{cursor: 'pointer', display: 'inline-block'}}
                />
                <p style={{display: 'inline-block'}}>{obj.label}</p>
            </Dropdown.Item>
        );
    });

    if (props.inMenu)
        return (flagsForMenu);

    return (
        <div className={'language_flags'}>
            {flags}
        </div>
    );
}

export default LangChanger;