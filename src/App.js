import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import LoginView from './views/login/Login';
import ChildrenView from './views/children/Children';
import LangChanger from "./components/langChanger/langChanger";
import getLabel from "./labels/labels";
import * as GlobalsConfig from "./GlobalConfig";
import DocumentTitle from "react-document-title";
import ChildView from "./views/child/Child";
import HistoryView from "./views/history/History";

export const GlobalParams = React.createContext();

const Home = () =>
    <GlobalParams.Consumer>
        {GParams => {
            const {lang} = GParams;
            return [
                <div key={'HomePage'}>
                    <h2>{getLabel(lang, 'HomePage')}</h2>
                    <Link to="/Login">{getLabel(lang, 'Login')}</Link>
                </div>,
                <DocumentTitle key={'HomePageDocumentTitle'}
                               title={`${GlobalsConfig[lang + "GanName"]} | ${getLabel(lang, 'HomePage')}`}/>
            ]
        }}
    </GlobalParams.Consumer>


const AppContainer = (props) => {

    return (
        <div className='appContainer'>

            <GlobalParams.Consumer>
                {GParams => {
                    const {lang} = GParams;
                    return lang === 'heb' && <style type='text/css'>{`*{direction:rtl}`}</style>
                }}
            </GlobalParams.Consumer>
            <GlobalParams.Consumer>
                {GParams => {
                    const {lang} = GParams;
                    // this.setState({lang});
                    return <LangChanger lang={lang} changeLang={props['changeLang']}/>
                }}
            </GlobalParams.Consumer>

            <Router>
                <div className=''>
                    <GlobalParams.Consumer>
                        {GParams => {
                            const { lang } = GParams;
                            return <ul>
                                <li><Link to="/">{getLabel(lang, 'HomePage')}</Link></li>
                                <li><Link to="/Login">{getLabel(lang, 'Login')}</Link></li>
                                <li><Link to="/Children">{getLabel(lang, 'Children')}</Link></li>
                                <li><Link to="/Child">{getLabel(lang, 'Child')}</Link></li>
                                <li><Link to="/Child/History">{getLabel(lang, 'child_history')}</Link></li>
                            </ul>
                        }
                        }
                    </GlobalParams.Consumer>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Login" component={LoginView}/>
                    <Route exact path="/Children" component={ChildrenView}/>
                    <Route exact path="/Child" component={ChildView}/>
                    <Route exact path="/Child/History" component={HistoryView}/>
                </div>
            </Router>
        </div>
    )
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lang: localStorage.getItem('lang') || 'heb',

        };
    }

    _changeLang = (lang) => {
        this.setState({lang}, () => {
            localStorage.setItem('lang', lang)
        })
    };

    componentDidMount() {
        // console.log(process.env.NODE_ENV);
    }

    render() {
        return (
            <GlobalParams.Provider value={{lang: this.state.lang, isMobile: true, ...GlobalsConfig}}>
                <AppContainer
                    changeLang={this._changeLang.bind(this)}
                    modal={this.modal}
                />

            </GlobalParams.Provider>
        );
    }
}

export default App;



