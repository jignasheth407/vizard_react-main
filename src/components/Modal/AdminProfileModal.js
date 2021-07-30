import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import './UserEditModal.scss'


import AdminProfile from "../Form/AdminProfile"

export default function UserEditingForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <span onClick={handleShow} style={{color: "rgb(226 229 249)"}}>Admin Profile</span>
            
            <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                    {/* <Row > */}
                      {/* <Col lg={8}> */}
                        <p style={{paddingLeft: '30px'}}>Admin Profile<br/><span style={{fontSize: '11px', color: '#6D7185'}}>View/ edit your profile </span></p>                        
                        <Button style={{backgroundColor: '#0DA7A9', float: 'left'}}>Save Profile<i class="fas fa-file-check"></i></Button>

                  </Modal.Header>
                <Modal.Body style={{backgroundColor: '#080d2f', color:'white'}}>
                   {/* form goes here */}
                    <AdminProfile />
                </Modal.Body>

            </Modal>
        </>
        
    )
}
