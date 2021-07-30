import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Hammer from "rc-hammerjs";
import LocalStorage from '../../utils/service';

import Dashboard from "../../pages/dashboard";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  openSidebar,
  closeSidebar,
  toggleSidebar,
} from "../../actions/navigation";
import s from "./Layout.module.scss";

// pages
import Typography from "../../pages/typography";
import Maps from "../../pages/maps";
import Notifications from "../../pages/notifications/Notifications";
import Icons from "../../pages/icons";
import Tables from "../../pages/tables";
import Charts from "../../pages/charts";

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
  };

  constructor(props) {
    super(props);
    this.mainmenu= "My Dashboard";
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
    let selectedLanguage = localStorage.getItem('appLanguage');
    console.log(selectedLanguage)
    if(selectedLanguage==='null')
    {
      selectedLanguage='english';
      localStorage.setItem("appLanguage",JSON.stringify(selectedLanguage));
    }
    this.onUpdateLanguage(selectedLanguage);
  }

  onUpdateLanguage =currentLang=>{
    let dirType='ltr';
    let languageKey= 'en';
    console.log(currentLang)
    if(currentLang && currentLang !=='null')
    {
      if(currentLang==='english')
      {
        dirType='ltr';
        languageKey='en';
      }
      else{
        console.log("language set")
        dirType = 'rtl';
        languageKey='ar';
      }
    }
    if(currentLang==='null')
    {
      currentLang ='english';
      dirType ='ltr';
      languageKey='en';
    }
    this.setState({
      language:currentLang
    });

    this.onUpdateLayoutForLanguage(dirType)
  }

  onUpdateLayoutForLanguage =directionType =>{
    const appElement = document.getElementById('app');
    console.log(appElement);
    console.log(directionType)
    if(appElement)
    {
      if(directionType=='ltr')
      {
        appElement.dir ='ltr';

      }
      else if(directionType ==='rtl')
      {
        console.log("right to left")
        appElement.dir='rtl';
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar());
    } else if (window.innerWidth >= 768) {
      this.props.dispatch(openSidebar());
    }
  }

  handleCloseSidebar(e) {
    if (e.target.closest("#sidebar-drawer") == null && this.props.sidebarOpened && window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar());
    }
  }

  handleSwipe(e) {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          !this.props.sidebarOpened ? s.sidebarClose : "",
          "flatlogic-one",
          "dashboard-light",
        ].join(" ")}
        onClick={e => this.handleCloseSidebar(e)}
      >
         <Header />
        <Sidebar />
        <div className={s.wrap}>
         

          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              {/* <BreadcrumbHistory url={this.props.location.pathname} /> */}
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route
                      path="/app/main"
                      exact
                      render={() => <Redirect to="/app/main/dashboard" />}
                    />
                    <Route
                      path="/app/main/dashboard"
                      exact
                      component={Dashboard}
                    />
                    <Route path={"/app/typography"} component={Typography} />
                    <Route path={"/app/tables"} component={Tables} />
                    <Route path={"/app/ui/maps"} component={Maps} />
                    <Route
                      path={"/app/ui/notifications"}
                      component={Notifications}
                        
                    />
                    <Route path={"/app/ui/icons"} component={Icons} />
                    <Route path={"/app/ui/charts"} component={Charts} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
