import React from 'react';
import { Formik} from "formik";
import {Row, Col, Form, Card} from "react-bootstrap";

import './../Modal/UserEditModal.scss'

class AdminProfile extends React.Component {
   render (){
      const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      return (
         <>
         <div className= "container">
            <Row>
               <div>
                  <Formik
                  initialValues={{ firstname:"", lastname:"", title:"", companyName: "", email:"", phnNumber:"", password: "", confirmPass:"" }}
                  validate={values => {
                  let errors = {};
                  if (values.email === "") {
                     errors.email = "Email is required";
                   } else if (!emailTest.test(values.email)) {
                     errors.email = "Invalid email address format";
                   }
                   if (values.password === "") {
                     errors.password = "Password is required";
                   } else if (values.password.length < 3) {
                     errors.password = "Password must be 3 characters at minimum";
                   }
                   return errors;
               }}
               onSubmit={({ setSubmitting }) => {
                  alert("Form is validated! Submitting the form...");
                  setSubmitting(false);
                }}
                >

                <Form>
                  <Row >
                    <Col lg={8}>                
                    
                    <Row>
                    <Col lg={6}>
                    
                    <div className="form-group">
                     <label>First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Enter Firstname"
                      />
                    </div> 
                    </Col>

                    <Col lg={6}>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Enter Lastname"                       
                      />
                      
                    </div> 
                    </Col>

                  </Row>

                  <Row>
                    <Col lg={6}>                    
                    <div className="form-group">
                      <label>Title</label>
                        <input
                         type="text"
                         name="title"
                         placeholder="Enter Title"
                       />
                     </div>
                    </Col>

                    <Col lg={6}>
                    <div className="form-group">
                      <label>Company Name</label>
                        <input
                         type="text"
                         name="companyName"
                         placeholder="Enter Company Name"
                       />
                     </div> 

                    </Col>
                  </Row>

                  <Row>
                    
                    <Col lg={6}>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter Lastname"
                          // className={`form-control ${
                          //   touched.email && errors.email ? "is-invalid" : ""
                          // }`}
                        />
                        {/* <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        /> */}
                      </div>
                    
                    </Col>

                    <Col lg={6}>
                      <div className="form-group">
                      <label>Phone Number</label>
                        <input
                        type="text"
                        name="phnNumber"
                        placeholder="Enter Phone Numnber"
                       />
                      </div>                    
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                    <div className="form-group">
                      <label>Set Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        // className={`form-control ${
                        //   touched.password && errors.password ? "is-invalid" : ""
                        // }`}
                      />
                      {/* <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      /> */}
                      
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="form-group">
                     <label>Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPass"
                        placeholder="Confirm Password"
                      />
                    </div>
                    </Col>
                    
                  </Row>

                  </Col>

                  <Col lg={4}>
                    <Card style={{width:'100%', height:'60%', backgroundColor:'#262A52'}}>
                      <label>Upload image</label>
                      <input className="custom-image" type="file" /> 
                    </Card>
                  </Col>

                  </Row>
                </Form>
                  </Formik>
               </div>
            </Row>
         </div>
         </>
      )
   }   
}

export default AdminProfile