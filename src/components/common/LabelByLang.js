import React, {Component} from "react";
import getLabel from "../../labels/labels";
import {GlobalLanguage} from "../../App";

class LabelByLang extends Component {
    render() {
        const string = this.props.string;
        return (
            <GlobalLanguage.Consumer>
                {lang => {
                    console.log('lang, string, getLabel()',lang,string,getLabel(lang, string));
                    return getLabel(lang, string).toString()}}
            </GlobalLanguage.Consumer>
        );
    }
}

LabelByLang.defaultProps = {};

export default LabelByLang;