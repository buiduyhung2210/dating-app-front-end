import React, { Component } from "react";
import { Link ,useNavigate,NavLink} from "react-router-dom";
import{AuthProvider}from "react-auth-kit";
import axios from "axios";
import { createBrowserHistory } from "history";


import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import "./SignIn.css"

let axiosConfig = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
  }
};
let history= createBrowserHistory({forceRefresh:true});
let location =history.location;
class SignInForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      shouldDirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

   handleSubmit(event) {
    event.preventDefault();
    let email = this.state.email;
    let password= this.state.password;
    let res = axios.post("http://127.0.0.1:8000/u/signin/",{email:email,password:password},axiosConfig).then(data=>{
      console.log(data.data.access_token)
      if(data.data && data.data.access_token){
        localStorage.setItem("token",data.data.access_token)
        history.push("/")
        document.location.reload()
      }
    })
    

    console.log("The form was submitted with the following data:");
    
   
  }

  render( ) {
    return (
      <div className="Login">
      <div className="LoginAside" />
      <div className="LoginForm">
      <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
      <div className="formCenter">
        <form className="formFielimport './index.css';
ds" onSubmit={this.handleSubmit}>
          <div className="formField">
            
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{}
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default SignInForm;