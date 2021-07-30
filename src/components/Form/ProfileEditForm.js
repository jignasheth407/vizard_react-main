import React from 'react'
import { Formik, ErrorMessage, Field } from "formik";
import {Col, Form, Row} from 'react-bootstrap'

class ProfileEditForm extends React.Component {
    render() {
      const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      return (
        <div className="container">            
              <Formik
                initialValues={{ firstname:"", lastname:"", email: "", password: "", confirmPass:"", title:"", phnNumber:"" }}
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
                {({ touched, errors, isSubmitting }) => (
               <Row>             
                 <Col lg={7} xs={12}>                     
                  <Form>
                    <Row>
                    <Col lg={6} xs={12}>
                    
                    <div className="form-group">
                     <label class="title_lable">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Enter Firstname"
                      />
                    </div> 
                    </Col>

                    <Col lg={6} xs={12}>
                    <div className="form-group">
                      <label class="title_lable">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Enter Lastname"                       
                      />
                      
                    </div> 
                    </Col>

                  </Row>

                  <Row>
                    <Col lg={6} xs={12}>                    
                      <div class="form-group">
                        <label className="lable_title">Access Type</label>                      
                          <select class="custom_select">
                            <option selected>Select User Role</option>
                            <option value="1">Admin</option>
                            <option value="2">Sub Admin</option>
                            <option value="3">User</option>
                          </select>
                      </div>
                    </Col>

                    <Col lg={6} xs={12}>
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
                  </Row>

                  <Row>
                    <Col lg={6} xs={12}>
                      <div className="form-group">  
                      <label class="title_lable">Title</label>
                        <input type="text" name="title"
                         placeholder="Enter Title"
                       />
                     </div> 
                    </Col>

                    <Col lg={6} xs={12}>
                      <div className="form-group">
                      <label>Phone Number</label>
                        <input
                        type="text"
                        name="phnNumber"
                        placeholder="Enter Phone Number"
                       />
                      </div>                    
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} xs={12}>
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
                    <Col lg={6} xs={12}>
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
                  </Form> 
                  </Col>

                  <Col lg={5}  xs={12}>
                    <Form>
                      
                      <fieldset>
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

                )}
              </Formik>          
        </div>
      );
    }
  }

  export default ProfileEditForm