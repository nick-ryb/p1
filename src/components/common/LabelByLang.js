import React, {useContext} from "react";
import {getLabel} from "../../labels/labels";
import {GlobalParams} from "../../App";

class LabelByLang extends React.Component {
    render() {
        const string = this.props.string;
        const {lang} = useContext(GlobalParams);
        console.log('lang1',lang)
        return getLabel(lang, string).toString();
    }
}

LabelByLang.defaultProps = {};

export {LabelByLang};