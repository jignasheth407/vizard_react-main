import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";

import s from "./ListGroup.module.scss";

import n1 from "../../../images/dashboard/people.png";
import n2 from "../../../images/dashboard/fire.png";
import n3 from "../../../images/people/n3.png";
import arrowRight from "../../../images/arrow-right.svg";

class NotificationsDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
        <p className={`${s.listGroupTitle}`}>Recent Alerts</p>
        
        <ListGroupItem className={[s.listGroupItem, 'listWithBorder']}>
          <span className={[s.notificationIconPink].join(" ")}>
            <img className={s.notificationIcon} src={n1} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"12"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                <span>Crowd Alert at Workshop Area 1</span>
              </p>
            </Col>
            <Col
              sm={"8"}
              style={{ display: "flex", justifyContent: "flex-center" }}
            >
              <time
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#676e9c',padding: "6px 0 0 0" }}
              >
                2m ago
              </time>
            </Col>
            <Col
              sm={"4"}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <span
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#0da7a9',padding: "6px 0 0 0" }}
              >
                Mark as read
              </span>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIconGreen].join(" ")}>
            <img className={s.notificationFire} src={n2} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"12"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                <span>Crowd Alert at Workshop Area 1</span>
              </p>
            </Col>
            <Col
              sm={"8"}
              style={{ display: "flex", justifyContent: "flex-center" }}
            >
              <time
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#676e9c',padding: "6px 0 0 0" }}
              >
                2m ago
              </time>
            </Col>
            <Col
              sm={"4"}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              {/* <span
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#0da7a9',padding: "6px 0 0 0" }}
              >
                Mark as read
              </span> */}
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIconPurple].join(" ")}>
            <img className={s.notificationIcon} src={n1} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"12"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                <span>Crowd Alert at Workshop Area 1</span>
              </p>
            </Col>
            <Col
              sm={"8"}
              style={{ display: "flex", justifyContent: "flex-center" }}
            >
              <time
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#676e9c',padding: "6px 0 0 0" }}
              >
                2m ago
              </time>
            </Col>
            <Col
              sm={"4"}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              {/* <span
                className={`${s.listGroupTime}`}
                style={{ fontSize: 10, color:'#0da7a9',padding: "6px 0 0 0" }}
              >
                Mark as read
              </span> */}
            </Col>
          </Row>
        </ListGroupItem>
        
        <div className={s.seeMoreBlock}>
          <button className={`${s.seeMore}`} >VIEW ALL ALERTS</button>
        </div>
      </ListGroup>
    );
  }
}

export default NotificationsDemo;
