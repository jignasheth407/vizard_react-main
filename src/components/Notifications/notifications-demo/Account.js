import React from "react";
import { Col, ListGroup, ListGroupItem, Row, Badge } from "reactstrap";

import { logoutUser } from "../../../actions/user";

import s from "./ListGroup.module.scss";

import logoutIcon from "../../../images/logout.svg";
import UserEditingForm from '../../Modal/UserEditModal'

import {withRouter} from "react-router";
import {connect} from "react-redux";

class MessagesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.doLogout = this.doLogout.bind(this);

    this.state = {
      show: false,
      setShow: false   
    }
    
  }
  doLogout() {
    this.props.dispatch(logoutUser());
  }
 

  render() {
    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>

        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.settingIcon]}>
           <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
                </span>

          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
               
                <UserEditingForm/>
              </p>
            </Col>
            <Col sm={"2"}>
            <span className={s.notificationArrow} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
                </span>
            </Col>
            
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}  onClick={() => this.doLogout()}>
          <span className={[s.settingIcon]}>
           <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
                </span>

          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden" >
                <span>Logout</span>
              </p>
            </Col>
           
            
          </Row>
        </ListGroupItem>
        {/* <ListGroupItem className={`${s.listGroupItem}`} onClick={() => this.doLogout()}>
          <img src={logoutIcon} alt="settings" className={"mr-2"} /> Log out
        </ListGroupItem> */}
      </ListGroup>
    );
  }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
    };
}

export default withRouter(connect(mapStateToProps)(MessagesDemo));
