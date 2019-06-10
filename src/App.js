import React, { Component, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import isMobile from "react-device-detect";
import { Icon, Flag, Container, Dropdown, List, Menu } from "semantic-ui-react";
import DocumentTitle from "react-document-title";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoginView from "./views/login/Login";
import ChildrenView from "./views/children/Children";
import LangChanger from "./components/langChanger/langChanger";
import { getLabel } from "./labels/labels";
import * as GlobalsConfig from "./GlobalConfig";
import ChildView from "./views/child/Child";
import HistoryView from "./views/history/History";
import { CommonModal } from "./components/common";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "react-widgets/dist/css/react-widgets.css";

export const GlobalParams = React.createContext({});

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => Home()
  },
  {
    path: "/Login",
    sidebar: () => <div>LoginView!</div>,
    main: () => <LoginView />
  },
  {
    path: "/Children",
    sidebar: () => <div>ChildrenView!</div>,
    main: () => <ChildrenView />
  },
  {
    path: "/Child",
    exact: true,
    sidebar: () => <div>ChildView!</div>,
    main: ChildView
  },
  {
    path: "/Child/:childId",
    sidebar: () => <div>ChildView!</div>,
    main: ChildView
  },
  {
    path: "/Child/History",
    sidebar: () => <div>HistoryView!</div>,
    main: () => <HistoryView />
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: localStorage.getItem("lang") || "heb",
      langObj: localStorage.hasOwnProperty("langObj")
        ? JSON.parse(localStorage.getItem("langObj"))
        : {
            value: "heb",
            label: "עברית",
            flag: "il"
          },
      isModalOpen: false,
      modalObj: {}
    };
  }

  componentDidMount() {
    // console.log(process.env.NODE_ENV);
  }

  _changeLang = langObj => {
    this.setState({ lang: langObj.value, langObj }, () => {
      localStorage.setItem("lang", langObj.value);
      localStorage.setItem("langObj", JSON.stringify(langObj));
    });
  };

  openModal = modalObj => {
    // childObj: child,
    //     childActivityObj: childTodayActivity ? childTodayActivity.activity[title]: [],
    //     childActivityTitle: title,
    //     currentModal: 'UPDATE_SLEEP'
    this.setState({
      isModalOpen: true,
      modalObj
    });
  };

  renderModal = () => {
    const { isModalOpen, modalObj } = this.state;
    const {
      childObj,
      childActivityObj,
      currentModal,
      onOpen,
      onClose
    } = modalObj;
    if (isModalOpen) {
      document.body.style.overflow = "hidden";

      return (
        <CommonModal
          key={"ChildrenActivityEditPopup"}
          child={childObj}
          childActivityObj={childActivityObj}
          onRef={ref => {
            this.modal = ref;
          }}
          currentModal={currentModal}
          hideModal={() => {
            console.log("hideModal");
            document.body.style.overflow = "initial";
            this.setState({ isModalOpen: null });
          }}
          onOpen={data => {
            console.log("onOpen:", data);
            onOpen && onOpen(data);
          }}
          onClose={data => {
            console.log("onClose:", data);
            onClose && onClose(data);
          }}
        />
      );
    } else {
      document.body.style.overflow = "initial";
      return null;
    }
  };

  render() {
    return (
      <GlobalParams.Provider
        value={{
          lang: this.state.lang,
          langObj: this.state.langObj,
          isMobile,
          Modal: this.modal,
          openModal: this.openModal,
          ...GlobalsConfig
        }}
      >
        <Router>
          <div className={"routerContainer"}>
            <MenuContainer changeLang={this._changeLang.bind(this)} />
            <AppContainer
              changeLang={this._changeLang.bind(this)}
              modal={this.modal}
            />
            <FooterHorizontalLinks />
          </div>
        </Router>

        <ReactCSSTransitionGroup
          key={"modalWithAnimation"}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.renderModal()}
        </ReactCSSTransitionGroup>
      </GlobalParams.Provider>
    );
  }
}

export default App;

export const Home = () => {
  const { lang } = useContext(GlobalParams);

  return [
    <div key={"HomePage"}>
      <h2>{getLabel(lang, "HomePage")}</h2>
      <Link to="/Login">{getLabel(lang, "Login")}</Link>
    </div>,
    <DocumentTitle
      key={"HomePageDocumentTitle"}
      title={`${GlobalsConfig[lang + "GanName"]} | ${getLabel(
        lang,
        "HomePage"
      )}`}
    />
  ];
};

export const AppContainer = () => {
  const { lang } = useContext(GlobalParams);
  const iii = 12;
  return (
    <Container>
      {lang === "heb" && (
        <style type="text/css">{`.appContainer, .appContainer *{direction:rtl}body{font-family: 'Alef', sans-serif;}`}</style>
      )}

      <Link
        ttt={"ooo"}
        to={{
          popo: "qew",
          pathname: "/Child",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
      >
        {getLabel(lang, "Child")}
      </Link>
      <NavLink
        to={{
          popo: "qe1w",
          pathname: `/Child/${iii}`,
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: false },
          context: { eee: "rrr" }
        }}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          fontFamily: "TimesNewRoman"
        }}
      >
        {getLabel(lang, "Child")}
      </NavLink>
      <div className="appContainer">
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export const MenuContainer = props => {
  const { lang } = useContext(GlobalParams);
  return (
    <div>
      <Container>
        <Menu attached="top" size={"mini"}>
          <Dropdown item icon="bars" simple closeOnChange closeOnBlur>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">New</span>
                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">Go To</span>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/" style={{ color: "inherit" }}>
                      {getLabel(lang, "HomePage")}
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/Login">{getLabel(lang, "Login")}</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/Children">{getLabel(lang, "Children")}</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={{
                        pathname: "/Child",
                        state: { fromDashboard: true }
                      }}
                    >
                      {getLabel(lang, "Child")}
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/Child/History">
                      {getLabel(lang, "child_history")}
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">
                  <Flag
                    key={"chosenFlag"}
                    name={"us"}
                    title={"English"}
                    style={{ cursor: "pointer" }}
                  />
                  Change Language
                </span>
                <Dropdown.Menu>
                  <LangChanger
                    inMenu
                    lang={lang}
                    changeLang={props["changeLang"]}
                  />
                </Dropdown.Menu>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Container>
    </div>
  );
};

export const FooterHorizontalLinks = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white"
      }}
    >
      <Container fixed="bottom">
        <List floated="right" horizontal>
          <List.Item disabled href="#">
            © GitHub, Inc.
          </List.Item>
          <List.Item href="#">Terms</List.Item>
          <List.Item href="#">Privacy</List.Item>
          <List.Item href="#">Contact</List.Item>
        </List>

        <List horizontal>
          <List.Item href="#">About Us</List.Item>
          <List.Item href="#">Jobs</List.Item>
        </List>
      </Container>
    </div>
  );
};
