import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import './UserEditModal.scss'


import ProfileEditForm from "../Form/ProfileEditForm"
const userManageCardSvg = <span class="user_edit_button thumb-sm"><img class="Header_userProfile__5M_1T" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgB7VbrccIwDFZ6HcAjuBvQCeoNYAPaDegEpROUbsAGHSF0ArpB2AA2UKWiXIQb7Mhw/Mp39104Wy/rYQMwYkQGiOiIb8QaO2yJc6sdsIKUPLHB8+A9n9CfSODPIu+tATTKUWhPQd9ZtOcSB1iLXA0WqKh7HUhp2iCWZ2wEyQIjgAVSZ8Y0IRNSp1MB2k4vyn/IyLiUXPHpdQCY6d5MAOui04tynYtempGxjdadNGDZ6cXI0tCEc1nzGN0XUIrIAX9naj3oPaXDa1+SGZ6iPXEBpUDDRYTdRDilv9AB9uEutVlV1Y74QD9fiD9qa0N8Jz6yjKyx40OPmQPcAlIaTvkHHsevLdMKbgVxrEu2zulUCWOBPk/EidAJW3BJOL3fxA2VYqN0Pe/Rmj390r2pxks1pOmJjh3HM8z1XOFxpHzU3U7SPROZBnsmw+q8UQYCGBFlzhYEdi/fFkv+uXR2vLI17A3A03ffw4XA0xt0OkShFuHyBvpvczE4C6p5ilPfY7P9n7DPyd7DcZbZOXc9XBnZe4DfglfiDq4Pdv4JI0Zk8AvxmBzi2iy0UAAAAABJRU5ErkJggg=="/></span>

export default function UserEditingForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <span onClick={handleShow}>View & Edit Profile</span>
            
            <Modal size="xl" show={show} onHide={handleClose} >
            <Modal.Header style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                    {/* <Row > */}
                      {/* <Col lg={8}> */}
                      <div className="d-flex">
                      {userManageCardSvg}
                      <div className="usr_edit">
                      <p class="user-margin">Edit User Profile</p>  
                        <p style={{fontSize: '11px', color: '#6D7185'}}>Update Profile & Save </p>                      
                      
                      </div>
                       
                      </div>
                      <Button style={{backgroundColor: '#0DA7A9', float: 'left'}}>Save Profile<i class="fas fa-file-check"></i></Button>
                      
                  </Modal.Header>
                <Modal.Body style={{backgroundColor: '#080d2f', color:'white'}}>
                   {/* form goes here */}
                    <ProfileEditForm />
                </Modal.Body>
            </Modal>
        </>
        
    )
}
