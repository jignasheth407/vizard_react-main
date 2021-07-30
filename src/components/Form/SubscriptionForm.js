import React from 'react'
import { Formik, ErrorMessage, Field } from "formik";
import {Col, Form, Row} from 'react-bootstrap'

import '../Modal/SubscriptionModal.scss'
class SubscriptionForm extends React.Component {
   render() {
      return(
         <>
            <Row>
               <div>
                  <Formik
                     initialValues={{ companyName:"", billingDept:"", licenseStDate: "", licenseEndDate: "", licenseCode:"", subscriptionid:"" }}
                     validate={values => {
                        let errors = {};
                        if (values.companyName === "") {
                          errors.companyName = "Company name is required";
                        }
                        if (values.billingDept === "") {
                          errors.billingDept = "billing is required";
                        }
                        if (values.licenseStDate === "") {
                           errors.licenseStDate = "License Statr Date is required";
                         }
                        if (values.licenseCode === "") {
                           errors.licenseCode = "License Code is required";
                         }
                         if (values.subscriptionid === "") {
                           errors.subscriptionid = "Subscription Id Date is required";
                         }

                        return errors;
                      }}
                      onSubmit={({ setSubmitting }) => {
                        alert("Form is validated! Submitting the form...");
                        setSubmitting(false);
                      }}
                  >
                     {({ touched, errors, isSubmitting }) => (
                        <Form>
                        <Row >
                          <Col lg={8}>                
                          
                          <Row>
                          <Col lg={6}>
                          
                          <div className="form-group">
                           <label>Companay name</label>
                            <input
                              type="text"
                              name="firstname"
                              placeholder="Enter Companyname"
                            />
                          </div> 
                          </Col>
      
                          <Col lg={6}>
                          <div className="form-group">
                            <label>Billing Department</label>
                            <input
                              type="text"
                              name="billingDept"
                              placeholder="Enter Department"                       
                            />
                            
                          </div> 
                          </Col>
      
                        </Row>
      
                        <Row>
                          <Col lg={6}>                    
                            <div class="form-group">
                              <label>License Start Date</label>                      
                                <input className="custom-select"
                                 type="date"
                                 name="licenseStdate"
                                 placeholder="License Start Date"
                              />
                            </div>
                          </Col>
      
                          <Col lg={6}>                    
                            <div class="form-group">
                              <label>License End Date</label>                      
                                <input className="custom-select"
                                 type="date"
                                 name="licenseEndDate"
                                 placeholder="License End Date"
                              />
                            </div>
                          </Col>
                        </Row>
      
                        <Row>
                          <Col lg={6}>
                            <div className="form-group">
                            <label>License Code</label>
                              <input
                               type="text"
                               name="licenseCode"
                               placeholder="Enter License Code"
                             />
                           </div> 
                          </Col>
      
                          <Col lg={6}>
                            <div className="form-group">
                            <label>Subscription ID</label>
                              <input
                              type="text"
                              name="subscriptionid"
                              placeholder="Enter Subscription ID"
                             />
                            </div>                    
                          </Col>
                        </Row>  
                        </Col>
      
                        <Col lg={4}>
                          <Form>
                            
                            <fieldset style={{border: "2px solid #262A52"}}>
                              <legend> Capability Access</legend>
                                <div className="ml-2 mb-2"><input type="checkbox" /><span className="font-small"> Social Distance Monitoring</span></div>
                                <div className="ml-2 mb-2"><input type="checkbox" /><span className="font-small"> Social Distance Monitoring</span></div>
                                <div className="ml-2 mb-2"><input type="checkbox" /><span className="font-small"> Social Distance Monitoring</span></div>
                                <div className="ml-2 mb-2"><input type="checkbox" /><span className="font-small"> Social Distance Monitoring</span></div>
                                <div className="ml-2 mb-2"><input type="checkbox" /><span className="font-small"> Social Distance Monitoring</span></div>
                                
                            </fieldset>
                          
                          </Form>
                        </Col>
      
                        </Row>
                      </Form>
                     
                     )}
                  </Formik>
               </div>
            </Row>
         </>
      )
   }
}
export default SubscriptionForm