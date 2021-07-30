import React, {useState} from "react";
import { Col, ListGroup, ListGroupItem, Row, Badge } from "reactstrap";

import s from "./ListGroup.module.scss";
import {Modal, Button, Card} from 'react-bootstrap';
import './Messages.scss'
import SubscriptionModal from "../../Modal/SubscriptionModal";
import AdminProfileModal from "../../Modal/AdminProfileModal";

const threeDots = 
  <span style={{float: 'right'}} data-toggle="dropdown" aria-haspopup="true" class="" aria-expanded="false"><img src="/tables/media/widget-menu.b2e371d9.svg" class="Widget_widgetOptions__6lxes" alt="dropdown"/></span>

  const addUserSvg = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#e2e5f9" class="bi bi-person-plus" viewBox="0 0 16 16"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path><path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path></svg>

  const userManageSvg = <span class="Header_avatar__usm thumb-sm"><img class="Header_userProfile__5M_1T" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgB7VbrccIwDFZ6HcAjuBvQCeoNYAPaDegEpROUbsAGHSF0ArpB2AA2UKWiXIQb7Mhw/Mp39104Wy/rYQMwYkQGiOiIb8QaO2yJc6sdsIKUPLHB8+A9n9CfSODPIu+tATTKUWhPQd9ZtOcSB1iLXA0WqKh7HUhp2iCWZ2wEyQIjgAVSZ8Y0IRNSp1MB2k4vyn/IyLiUXPHpdQCY6d5MAOui04tynYtempGxjdadNGDZ6cXI0tCEc1nzGN0XUIrIAX9naj3oPaXDa1+SGZ6iPXEBpUDDRYTdRDilv9AB9uEutVlV1Y74QD9fiD9qa0N8Jz6yjKyx40OPmQPcAlIaTvkHHsevLdMKbgVxrEu2zulUCWOBPk/EidAJW3BJOL3fxA2VYqN0Pe/Rmj390r2pxks1pOmJjh3HM8z1XOFxpHzU3U7SPROZBnsmw+q8UQYCGBFlzhYEdi/fFkv+uXR2vLI17A3A03ffw4XA0xt0OkShFuHyBvpvczE4C6p5ilPfY7P9n7DPyd7DcZbZOXc9XBnZe4DfglfiDq4Pdv4JI0Zk8AvxmBzi2iy0UAAAAABJRU5ErkJggg=="/></span>

  const userManageCardSvg = <span class="Header_avatar__Cardusm thumb-sm"><img class="Header_userProfile__5M_1T" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgB7VbrccIwDFZ6HcAjuBvQCeoNYAPaDegEpROUbsAGHSF0ArpB2AA2UKWiXIQb7Mhw/Mp39104Wy/rYQMwYkQGiOiIb8QaO2yJc6sdsIKUPLHB8+A9n9CfSODPIu+tATTKUWhPQd9ZtOcSB1iLXA0WqKh7HUhp2iCWZ2wEyQIjgAVSZ8Y0IRNSp1MB2k4vyn/IyLiUXPHpdQCY6d5MAOui04tynYtempGxjdadNGDZ6cXI0tCEc1nzGN0XUIrIAX9naj3oPaXDa1+SGZ6iPXEBpUDDRYTdRDilv9AB9uEutVlV1Y74QD9fiD9qa0N8Jz6yjKyx40OPmQPcAlIaTvkHHsevLdMKbgVxrEu2zulUCWOBPk/EidAJW3BJOL3fxA2VYqN0Pe/Rmj390r2pxks1pOmJjh3HM8z1XOFxpHzU3U7SPROZBnsmw+q8UQYCGBFlzhYEdi/fFkv+uXR2vLI17A3A03ffw4XA0xt0OkShFuHyBvpvczE4C6p5ilPfY7P9n7DPyd7DcZbZOXc9XBnZe4DfglfiDq4Pdv4JI0Zk8AvxmBzi2iy0UAAAAABJRU5ErkJggg=="/></span>

class MessagesDemo extends React.Component {
  
  constructor() {
    super();
    this.state = {
      show: false,     
    }
  }
    handleModal()
    {
      this.setState({ show: !this.state.show })
    }
  

  render() {

    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
        <p className={`${s.listGroupTitle}`}>Settings</p>
       
       
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.settingIcon]}>
          <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-card-checklist" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
            </svg>
                </span>
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                <span>Alert & Notification Settings</span>
                {/* subscription form here */}
                
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
              
             
                <span onClick={() => {this.handleModal()}}>User Management</span>
                <Modal size="lg" show={this.state.show} className="modal_main">
                  <Modal.Header style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                    {/* <Row > */}
                      {/* <Col lg={8}> */}{userManageSvg}
                        <p style={{paddingLeft: '30px'}}>User Management<br/><span style={{fontSize: '11px', color: '#6D7185'}}>Add/Edit/Remove Users </span></p>                        
                        <Button style={{backgroundColor: '#0DA7A9', float: 'left'}}>Add User {addUserSvg}</Button>

                  </Modal.Header>
                  <Modal.Body style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                   {/* row one */}
                   <Row >
                      <Col lg={4}  className="col_padding">
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                        <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card  className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>

                      </Col>
                    
                    {/* row two */}
                    
                      <Col lg={4} className="col_padding_center">
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                     
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      </Col>
                   
                    {/* row three */}
                    
                      <Col lg={4} className="col_padding_right">
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      
                      
                      <Card className="card_margin" style={{backgroundColor: '#232A52'}}>
                      <Card.Body>
                        {userManageCardSvg}
                        {threeDots}
                        <div style={{marginLeft: '10px'}}>
                          <p className="card_title">Abdul Kareem</p>
                          <p className="card_subtitle">abdulkareem@company.com</p>
                        </div>                          
                        </Card.Body>
                      </Card>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                    {/* pagination will go here */}
                    <nav aria-label="">
                      <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                      </ul>
                      </nav>
                  </Modal.Footer>
              </Modal>
                  
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
        
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.settingIcon]}>
           <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-shield-lock" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
          </svg>
                </span>

          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                <span>Privacy & Security</span>
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

        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.settingIcon]}>
           <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-shield-lock" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
          </svg>
                </span>

          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <AdminProfileModal/>
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

        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.settingIcon]}>
           <span className={s.notificationFire} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e2e5f9" class="bi bi-briefcase" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
             </svg>
                </span>

          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p style={{ color:'#e2e5f9' }}className="m-0 overflow-hidden">
                {/* subscription modal here */}
                <SubscriptionModal/>                
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
        <hr className={s.languageSeparator}></hr>
        <p className={`${s.listGroupTitle}`}>Display Language</p>
        <div >
        <Row noGutters className={s.langaugeSection}>
            <Col sm={"6"}>
              <p style={{ color:'#e2e5f9' }}className={s.languageOption}>
                <span>English</span>
              </p>
            </Col>
            <Col sm={"6"}>
              <p style={{ color:'#e2e5f9' }}className={s.languageOption}>
                <span>Arabic</span>
              </p>
            </Col>
            
          </Row>


          {/* <img src={arrowRight} alt="arrow" className={"mb-3 mr-3"} /> */}
        </div>
      </ListGroup>
    );
  }
}

export default MessagesDemo;
