import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Alert, Button, Label, Input, FormGroup } from "reactstrap";
import { loginUser } from "../../actions/user";
import "bootstrap/dist/css/bootstrap.min.css";
import s from './Login.module.scss';

import backgroundImage from "../../images/login/bg.png";
import backgroundImage2 from "../../images/login/bg1.png";
import backgroundImage3 from "../../images/login/bg2.png";
import logo from '../../images/login/group1.svg';
import * as Yup from 'yup';
import { Formik,ErrorMessage } from "formik";
import axios from "axios";
import { bindActionCreators } from "redux";

const apiBaseURL = "http://devhg.unitx.io:8000";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Please provide a valid email address.').required('Email address is required.'),
  password: Yup.string().required('Password is required.')
});



class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
 
  static isAuthenticated(token) {
    if (!token) return true;
  }

 

  constructor(props) {
    super(props);
    this.state={errorMessageResponse:false}
    // this.doLogin = this.doLogin.bind(this);
  }

  componentDidMount() {

    
    //language
    localStorage.setItem("appLanguage",'english');
    let selectedLanguage = localStorage.getItem('appLanguage');
    console.log(selectedLanguage)
    if(selectedLanguage==='null')
    {
      selectedLanguage='english';
      localStorage.setItem("appLanguage",JSON.stringify(selectedLanguage));
    }
    this.onUpdateLanguage(selectedLanguage);
  }

  setLanguage=(event)=>{
    console.log(event.target.value);
    let language=event.target.value;
      localStorage.setItem("appLanguage",JSON.stringify(language));
      this.onUpdateLanguage(language);
  
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

 
  // doLogin(values) {
  //   // e.preventDefault();
  //   console.log(values);
  //   this.state = {
  //     email: values.email,
  //     password: values.password,
  //   };
               
               
  //               axios.post(apiBaseURL+'/api/auth/login', {
  //                             email: values.email,
  //                             password: values.password
  //                           })
  //                           .then( (response)=> {
  //                             console.log(response);
  //                             if(response.status===200)
  //                             {
  //                               if(response.statusText==='OK')
  //                               {
  //                                 console.log("login Successful");
                                  
  //                                 this.props.dispatch(
  //                                   loginUser({ email: values.email, password: values.password })
  //                                 );
                                 
  //                                 this.props.history.push('/app/main/dashboard');
  //                               }

  //                             }
  //                           })
  //                           .catch( (error)=> {
                             
  //                             console.log(JSON.stringify(error));
  //                             this.setState({errorMessageResponse: true});

  //                             console.log(this.errorMessageResponse)
                              
                            
                             

  //                           });
    
  // }

 


   render() {
   
    const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

    // cant access login page while logged in
    if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
      return (
          <Redirect to={from} />
      );
    }

    return (
      <div className="container-fluid login-background px-0">
         <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={backgroundImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Facial Recognition</h3>
              <p>Use Vizard to enable facial recognition through various cctv or drone cameras across your private facility or campus. Identify people of interest and stay updated on their movements.           </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={backgroundImage2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Unusual Activity Detection</h3>
              <p>Ensure worker safety with posture and fall detection. Get real-time alerts on their location and situation. Vizard helps you stay updated about any accidents at your manufacturing or construction facility 24x7.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={backgroundImage3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Intruder Detection</h3>
              <p>Vizard helps you stay updated about any intruders at the perimeters or within your industrial or private facility 24x7. Get real time alerts on suspicious activities across various areas of your compound.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="left-content">

</div>
<div className="right-content">
  <div className="login-section">

    <div className="login-content">
      <div className="login-img">
        <img src={logo} className="" />


      </div>
    </div>
    <div className="login-lang">
      <span>
        Login into Your Account
          </span>

      <div className="inp-rad">
        <div className="form-check form-check-inline"  >
          <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={this.setLanguage} id="inlineRadio1" value="english" defaultChecked/>
          <label className="form-check-label" for="inlineRadio1">English</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions"  onChange={this.setLanguage} id="inlineRadio2" value="arabic" />
          <label className="form-check-label" for="inlineRadio2">Arabic</label>
        </div>

      </div>



    </div>
    <div className="login-form">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="form-group">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              
              axios.post(apiBaseURL+'/api/auth/login', {
                email: values.email,
                password: values.password
              })
              .then( (response)=> {
                console.log(response);
                if(response.status===200)
                {
                  if(response.statusText==='OK')
                  {
                    
                    console.log("login Successful");
                                  
                                  this.props.dispatch(
                                    loginUser({ email: values.email, password: values.password })
                                  );
                                 
                                  this.props.history.push('/app/main/dashboard');
                  }

                }
              })
              .catch((error)=> {
                
                console.log(JSON.stringify(error));
                setTimeout(()=>{this.setState({errorMessageResponse: false})}, 4000); 
               // setTimeout(function(){this.setState({errorMessageResponse: true})}, 4000)
              this.setState({errorMessageResponse: true});
               
   


              });

            }}
          >
            {({ errors, touched, handleChange, handleBlur, status,handleSubmit,isValidating, values }) => (
              <form id="login-form" onSubmit={handleSubmit}>
                <div className="col-12">
                  <div className="form-group">
                    <div className="position-relative input_box">
                      <label htmlFor="email">
                        <span>Email ID</span><span class="mandatory-sign">*</span>
                      </label>
                      <input className="form-control form-control-sm inputs "
                        type="text" name="email" placeholder="yourname@company.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                       
                        // onChange={this.changeEmail}
                        required
                        name="email"
                        placeholder="Enter your username"
                      />
                      {errors.email && touched.email && (
                        <div className="input_error">{errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <div className="position-relative input_box">
                      <label htmlFor="password">
                        <span>Password</span><span class="mandatory-sign">*</span>
                      </label>
                      <input className="form-control form-control-sm inputs" placeholder="************" type="password" name="password"
                        value={values.password}
                        
                        // onChange={this.changePassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <div className="input_error">{errors.password}</div>
                      )}
                       {this.state.errorMessageResponse  && (
                        <div className="input_error_server">Invalid Email and Password combination.</div>
                      )}
                     
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn buttons gradient_btn text-white p-2 pl-5 pr-5 h-auto">LOGIN</button>
                </div>
                <div className="col-12 text-center">
                  <a href=""><span>Forgot Password?</span></a>
                </div>

                <div className="col-12 text-center copyright">
                  <span className="copyright-text">2021 Copyright UnitX Technologies</span>
                </div>
              </form>
            )}
          </Formik>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div className="login-copy">
  www.unitx.io/product-vizard
    </div>
</div>

    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
