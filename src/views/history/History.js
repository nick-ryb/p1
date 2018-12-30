import React, {Component, useContext} from "react";
import {GlobalParams} from "../../App";
import DocumentTitle from "react-document-title";
import getLabel from "../../labels/labels";
import {Axis, Bar, Chart, Cursor, Series, Tooltip} from "react-charts";
import * as GlobalsConfig from "../../GlobalConfig";

const HistoryView = props => {

    const _renderChildActivityHistory = () => {

        const data = [{
            "label": "Series 1",
            "datums": [{"x": 0, "y": 25, "r": 7}, {"x": 1, "y": 25, "r": 5}, {"x": 2, "y": 93, "r": 1}, {
                "x": 3,
                "y": 56,
                "r": 8
            }, {"x": 4, "y": 34, "r": 13}, {"x": 5, "y": 75, "r": 2}, {"x": 6, "y": 8, "r": 13}, {
                "x": 7,
                "y": 69,
                "r": 1
            }, {"x": 8, "y": 63, "r": 3}, {"x": 9, "y": 60, "r": 6}]
        }, {
            "label": "Series 2",
            "datums": [{"x": 0, "y": 8, "r": 1}, {"x": 1, "y": 72, "r": 1}, {"x": 2, "y": 42, "r": 12}, {
                "x": 3,
                "y": 38,
                "r": 6
            }, {"x": 4, "y": 44, "r": 3}, {"x": 5, "y": 43, "r": 3}, {"x": 6, "y": 86, "r": 1}, {
                "x": 7,
                "y": 25,
                "r": 12
            }, {"x": 8, "y": 88, "r": 5}, {"x": 9, "y": 22, "r": 5}]
        }];
        const lineChart = (
            <div
                key='barChart'
                style={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 500,
                    boxSizing: 'border-box',
                    position: 'relative'
                }}>
                <Chart data={data}>
                    <Axis primary type="ordinal"/>
                    <Axis type="linear" min={0} max={0} stacked/>
                    <Series type={Bar}/>
                    <Cursor primary/>
                    <Cursor/>
                    <Tooltip/>
                </Chart>

            </div>
        );

        return lineChart;
    };

    const {lang} = useContext(GlobalParams);
    return (
        <div className={'child_current_view'}>

            {_renderChildActivityHistory(lang)}
            {/*{this._renderChildPersonalInfo(lang)}*/}
            <DocumentTitle
                title={`${GlobalsConfig[lang + "GanName"]} | ${getLabel(lang, 'child_history')}`}/>

        </div>
    )
}

HistoryView.defaultProps = {};

export default HistoryView;