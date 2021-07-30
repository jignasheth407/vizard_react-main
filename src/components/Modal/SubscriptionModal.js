import React, {useState} from 'react';
import {Button, Modal, Row, Col} from 'react-bootstrap';

import './SubscriptionModal.scss'
import SubscriptionForm from '../Form/SubscriptionForm'

export default function SubscriptionModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <span onClick={handleShow}>Subscription & Tutorial</span>
            
            <Modal size="lg" show={show} >
            <Modal.Header style={{backgroundColor: '#080d2f', color:'white', fontWeight: 'bold'}}>
                        <p style={{paddingLeft: '30px'}}>Subscription<br/><span style={{fontSize: '11px', color: '#6D7185'}}>Licence Details</span></p>
                        <Row>                        
                        <span style={{color: '#0da7a9', margin:'20px', fontSize:'12px'}}>Watch Tutorial Videos </span>                   
                           <Button size="sm" style={{backgroundColor: '#0DA7A9', float:'left', fontSize:'12px',marginRight:'15px'}}>Request Upgrade/Renewal<i class="fas fa-file-check"></i></Button>                
                        <span onClick={handleClose}>X</span>
                        </Row>          
            
                  </Modal.Header>
               
                <Modal.Body style={{backgroundColor: '#080d2f', color:'white'}}>
                   {/* form goes here */}
                   <div className="container">
                    <SubscriptionForm />
                    </div>
                    <div style={{width: '700px', height:'120px'}}>
                     <img style={{width: '100%', height:'110px'}} src='https://wallpapercave.com/wp/7eKbNsz.jpg'/>
                    </div>
                    
                </Modal.Body>
                
                
            </Modal>
        </>
        
    )
}
