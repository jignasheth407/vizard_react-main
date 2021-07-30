import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Alert, Button, Label, Input, FormGroup } from "reactstrap";
import { loginUser } from "../../actions/user";
import "bootstrap/dist/css/bootstrap.min.css";

import UserManagementModal from '../../components/Modal/UserManagementModal/Modal'

import * as Yup from 'yup';
import { Formik,ErrorMessage } from "formik";
import axios from "axios";



class UserManagement extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
 
  static isAuthenticated(token) {
    if (token) return true;
  }

  constructor(props) {
    super(props);
    this.state={errorMessageResponse:false}
    // this.doLogin = this.doLogin.bind(this);
  }

 
 


   render() {
   
    const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

    // cant access login page while logged in
    if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
      return (
          <Redirect to={from} />
        

      );
    }

    return (

      <UserManagementModal/>   

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

export default withRouter(connect(mapStateToProps)(UserManagement));
