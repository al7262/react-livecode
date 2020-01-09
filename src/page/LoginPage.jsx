import React from "react";
import axios from "axios";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import logo from '../logo.svg'
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";
import { withRouter } from "react-router-dom";

class LoginPage extends React.Component{
    postLogin = async () => {
        const data = await {
          username: this.props.username,
          password: this.props.password
        };
        const self = this;
        await axios
          .post("https://api-todofancy.herokuapp.com/api/auth", data)
          .then(function (response) {
              if (response.data.hasOwnProperty("status")) {
                const dict = {
                    name: response.data.user_data.username,
                    email: response.data.user_data.email,
                    avatar: response.data.user_data.avatar,
                    loggedIn: true
                }
                self.props.handleManyChanges(dict);
                self.props.history.push("/profile");
                console.log(this.props)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Welcome back!')
    };

    render(){
        return (
            <React.Fragment>
                <div className="login-page">
                    <div className="login-box">
                        <img src={logo} alt="website-logo"/>
                        <h3>Movies</h3>
                        <form className='login-form'
                            onSubmit={event => event.preventDefault()}>
                            <input type="text" 
                                name="username" 
                                id="username"
                                placeholder="Username"
                                value={this.props.username}
                                onChange={event => this.props.handleInput(event)}/>
                            <br/>
                            <input type="password" 
                                name="password" 
                                id="password"
                                placeholder="Password"
                                value={this.props.password}
                                onChange={event => this.props.handleInput(event)}/>
                            <br/>
                            <button className="btn btn-primary" onClick={()=>this.postLogin()}>SIGN IN</button>
                        </form>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}


export default connect("username, password", actions)(withRouter(LoginPage));