import React, {Component, useContext} from "react";
import getLabel from "../../labels/labels";
import {GlobalParams} from "../../App";

class LabelByLang extends Component {
    render() {
        const string = this.props.string;
        const {lang} = useContext(GlobalParams);
        return getLabel(lang, string).toString();
    }
}

LabelByLang.defaultProps = {};

export default LabelByLang;