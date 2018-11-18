import React, {Component} from "react";
import getLabel from "../../labels/labels";
import {GlobalParams} from "../../App";

class LabelByLang extends Component {
    render() {
        const string = this.props.string;
        return (
            <GlobalParams.Consumer>
                {GParams => {
                    const { lang } = GParams;
                    console.log('lang, string, getLabel()',lang,string,getLabel(lang, string));
                    return getLabel(lang, string).toString()}}
            </GlobalParams.Consumer>
        );
    }
}

LabelByLang.defaultProps = {};

export default LabelByLang;